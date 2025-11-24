import i18n from "../plugins/i18n";

const getApiBaseUrl = (): string => {
  let hostname = window.location.hostname;

  // For localhost or development, use default
  if (hostname === "localhost" || hostname === "127.0.0.1") {
    return "https://api.d.3dugc.com";
  }

  const parts = hostname.split(".");
  if (parts.length > 2) {
    hostname = parts.slice(-2).join(".");
  }

  return `https://api.d.${hostname}`;
};

const API_BASE_URL = getApiBaseUrl();

export interface Token {
  accessToken: string;
  refreshToken: string;
  expires: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  token?: Token;
}

function translateErrorMessage(message: string): string {
  const lowerMessage = message.toLowerCase();
  const { t } = i18n.global;

  const errorKeys = [
    "no user",
    "wrong password",
    "wrong username",
    "user not found",
    "invalid credentials",
    "account disabled",
    "account locked",
    "too many attempts",
    "network error",
    "server error",
  ];

  for (const key of errorKeys) {
    if (lowerMessage.includes(key)) {
      // @ts-ignore
      return t(`errors.${key}`);
    }
  }

  return message;
}

export async function loginUser(
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
      if (response.status === 401) {
        const msg = translateErrorMessage(
          data.message || "invalid credentials"
        );
        throw new Error(msg);
      } else if (response.status === 403) {
        // @ts-ignore
        throw new Error(i18n.global.t("errors.account disabled"));
      } else if (response.status === 429) {
        // @ts-ignore
        throw new Error(i18n.global.t("errors.too many attempts"));
      } else if (response.status >= 500) {
        // @ts-ignore
        throw new Error(i18n.global.t("errors.server error"));
      } else {
        const msg = translateErrorMessage(data.message || "");
        throw new Error(msg || `Login failed (${response.status})`);
      }
    }

    return data;
  } catch (error: any) {
    console.error("Login failed:", error);
    if (error.message === "Failed to fetch" || error.name === "TypeError") {
      // @ts-ignore
      throw new Error(i18n.global.t("errors.network error"));
    }
    throw error;
  }
}
