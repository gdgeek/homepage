// Dynamically construct API base URL based on current domain
// Pattern: if domain is "3dugc.com", API is "api.d.3dugc.com"
// Pattern: if domain is "xingkou.net", API is "api.d.xingkou.net"
const getApiBaseUrl = (): string => {
  let hostname = window.location.hostname;

  // For localhost or development, use default
  if (hostname === "localhost" || hostname === "127.0.0.1") {
    return "https://api.d.3dugc.com";
  }

  // Strip www or other subdomain prefixes to get base domain
  // e.g., www.3dugc.com -> 3dugc.com, test.xingkou.net -> xingkou.net
  const parts = hostname.split(".");
  if (parts.length > 2) {
    // Keep only the last two parts (domain + TLD)
    hostname = parts.slice(-2).join(".");
  }

  // Construct API URL: api.d.{domain}
  return `https://api.d.${hostname}`;
};

const API_BASE_URL = getApiBaseUrl();

interface Token {
  accessToken: string;
  refreshToken: string;
  expires: string;
}

interface LoginResponse {
  success: boolean;
  message: string;
  token?: Token;
}

// Error message translations for multiple languages
function translateErrorMessage(message: string, lang?: string): string {
  // Get current language from page or default to zh-CN
  const currentLang = lang || document.documentElement.lang || "zh-CN";

  const translations: { [key: string]: { [key: string]: string } } = {
    "no user": {
      en: "User does not exist",
      "zh-CN": "用户不存在",
      "zh-TW": "用戶不存在",
      ja: "ユーザーが存在しません",
      th: "ไม่พบผู้ใช้",
    },
    "wrong password": {
      en: "Wrong password",
      "zh-CN": "密码错误",
      "zh-TW": "密碼錯誤",
      ja: "パスワードが間違っています",
      th: "รหัสผ่านผิด",
    },
    "wrong username": {
      en: "Wrong username",
      "zh-CN": "用户名错误",
      "zh-TW": "用戶名錯誤",
      ja: "ユーザー名が間違っています",
      th: "ชื่อผู้ใช้ผิด",
    },
    "user not found": {
      en: "User not found",
      "zh-CN": "用户不存在",
      "zh-TW": "用戶不存在",
      ja: "ユーザーが見つかりません",
      th: "ไม่พบผู้ใช้",
    },
    "invalid credentials": {
      en: "Invalid username or password",
      "zh-CN": "用户名或密码错误",
      "zh-TW": "用戶名或密碼錯誤",
      ja: "ユーザー名またはパスワードが無効です",
      th: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง",
    },
    "account disabled": {
      en: "Account has been disabled",
      "zh-CN": "账号已被禁用",
      "zh-TW": "賬號已被禁用",
      ja: "アカウントが無効化されています",
      th: "บัญชีถูกปิดใช้งาน",
    },
    "account locked": {
      en: "Account has been locked",
      "zh-CN": "账号已被锁定",
      "zh-TW": "賬號已被鎖定",
      ja: "アカウントがロックされています",
      th: "บัญชีถูกล็อค",
    },
    "too many attempts": {
      en: "Too many login attempts",
      "zh-CN": "登录尝试次数过多",
      "zh-TW": "登錄嘗試次數過多",
      ja: "ログイン試行回数が多すぎます",
      th: "พยายามเข้าสู่ระบบมากเกินไป",
    },
    "network error": {
      en: "Network error",
      "zh-CN": "网络错误",
      "zh-TW": "網絡錯誤",
      ja: "ネットワークエラー",
      th: "ข้อผิดพลาดเครือข่าย",
    },
    "server error": {
      en: "Server error",
      "zh-CN": "服务器错误",
      "zh-TW": "服務器錯誤",
      ja: "サーバーエラー",
      th: "ข้อผิดพลาดเซิร์ฟเวอร์",
    },
  };

  const lowerMessage = message.toLowerCase();

  // Check each error type
  for (const errorKey in translations) {
    if (lowerMessage.includes(errorKey)) {
      return (
        translations[errorKey][currentLang] ||
        translations[errorKey]["zh-CN"] ||
        message
      );
    }
  }

  return message;
}

async function loginUser(
  username: string,
  password: string
): Promise<LoginResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data: LoginResponse = await response.json();

    if (!response.ok) {
      // Handle different HTTP error codes
      if (response.status === 401) {
        const translatedMsg = translateErrorMessage(data.message || "");
        throw new Error(translatedMsg || "用户名或密码错误，请重试");
      } else if (response.status === 403) {
        throw new Error("账号已被禁用，请联系管理员");
      } else if (response.status === 429) {
        throw new Error("登录尝试次数过多，请稍后再试");
      } else if (response.status >= 500) {
        throw new Error("服务器错误，请稍后重试");
      } else {
        const translatedMsg = translateErrorMessage(data.message || "");
        throw new Error(
          translatedMsg || `登录失败 (错误代码: ${response.status})`
        );
      }
    }

    return data;
  } catch (error: any) {
    console.error("Login failed:", error);

    // Handle network errors
    if (error.message === "Failed to fetch" || error.name === "TypeError") {
      throw new Error("网络连接失败，请检查您的网络连接");
    }

    throw error;
  }
}

// Make loginUser available globally
(window as any).loginUser = loginUser;
