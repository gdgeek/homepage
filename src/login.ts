// Login Modal Logic

// Declare global functions
declare function loginUser(username: string, password: string): Promise<any>;

function openLoginModal() {
  const modal = document.getElementById("loginModal");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeLoginModal() {
  const modal = document.getElementById("loginModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Make functions available globally for HTML onclick handlers
(window as any).openLoginModal = openLoginModal;
(window as any).closeLoginModal = closeLoginModal;

async function handleLogin(event: Event) {
  event.preventDefault();
  const usernameInput = document.getElementById(
    "username"
  ) as HTMLInputElement | null;
  const passwordInput = document.getElementById(
    "password"
  ) as HTMLInputElement | null;
  const submitBtn = document.querySelector(
    ".login-submit-btn"
  ) as HTMLButtonElement | null;

  if (!usernameInput || !passwordInput || !submitBtn) return;

  const username = usernameInput.value;
  const password = passwordInput.value;
  const originalBtnText = submitBtn.innerHTML;

  // Get current language
  const currentLang = document.documentElement.lang || "zh-CN";

  // Multi-language messages
  type MessageMap = { [key: string]: string };
  const messages: { [key: string]: MessageMap } = {
    loading: {
      en: "Logging in...",
      "zh-CN": "登录中...",
      "zh-TW": "登錄中...",
      ja: "ログイン中...",
      th: "กำลังเข้าสู่ระบบ...",
    },
    success: {
      en: "✅ Login successful!",
      "zh-CN": "✅ 登录成功！",
      "zh-TW": "✅ 登錄成功！",
      ja: "✅ ログイン成功！",
      th: "✅ เข้าสู่ระบบสำเร็จ!",
    },
    failed: {
      en: "Login failed, please try again",
      "zh-CN": "登录失败，请重试",
      "zh-TW": "登錄失敗，請重試",
      ja: "ログインに失敗しました。もう一度お試しください",
      th: "เข้าสู่ระบบไม่สำเร็จ กรุณาลองอีกครั้ง",
    },
    defaultError: {
      en: "Login failed, please try again later",
      "zh-CN": "登录失败，请稍后重试",
      "zh-TW": "登錄失敗，請稍後重试",
      ja: "ログインに失敗しました。後でもう一度お試しください",
      th: "เข้าสู่ระบบไม่สำเร็จ กรุณาลองอีกครั้งในภายหลัง",
    },
  };

  // Loading state
  submitBtn.disabled = true;
  submitBtn.innerHTML =
    messages.loading[currentLang] || messages.loading["zh-CN"];

  try {
    const data = await loginUser(username, password);

    if (data.success) {
      console.log("Login Successful:", data);
      if (data.token && data.token.accessToken) {
        localStorage.setItem("accessToken", data.token.accessToken);
        localStorage.setItem("refreshToken", data.token.refreshToken);
        localStorage.setItem("tokenExpires", data.token.expires);
      }
      alert(messages.success[currentLang] || messages.success["zh-CN"]);
      closeLoginModal();
    } else {
      throw new Error(
        data.message || messages.failed[currentLang] || messages.failed["zh-CN"]
      );
    }
  } catch (error: any) {
    const errorMessage =
      error.message ||
      messages.defaultError[currentLang] ||
      messages.defaultError["zh-CN"];
    alert("❌ " + errorMessage);
  } finally {
    // Reset state
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnText;
  }
}

(window as any).handleLogin = handleLogin;

// Close modal when clicking outside
window.addEventListener("click", (e: MouseEvent) => {
  const modal = document.getElementById("loginModal");
  if (e.target === modal) {
    closeLoginModal();
  }
});
