"use strict";
// Login Modal Logic
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
window.openLoginModal = openLoginModal;
window.closeLoginModal = closeLoginModal;
function handleLogin(event) {
    return __awaiter(this, void 0, void 0, function* () {
        event.preventDefault();
        const usernameInput = document.getElementById("username");
        const passwordInput = document.getElementById("password");
        const submitBtn = document.querySelector(".login-submit-btn");
        if (!usernameInput || !passwordInput || !submitBtn)
            return;
        const username = usernameInput.value;
        const password = passwordInput.value;
        const originalBtnText = submitBtn.innerHTML;
        // Get current language
        const currentLang = document.documentElement.lang || "zh-CN";
        const messages = {
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
            const data = yield loginUser(username, password);
            if (data.success) {
                console.log("Login Successful:", data);
                if (data.token && data.token.accessToken) {
                    localStorage.setItem("accessToken", data.token.accessToken);
                    localStorage.setItem("refreshToken", data.token.refreshToken);
                    localStorage.setItem("tokenExpires", data.token.expires);
                }
                alert(messages.success[currentLang] || messages.success["zh-CN"]);
                // Redirect to SSO
                const parts = window.location.hostname.split(".");
                const rootDomain = parts.slice(-2).join(".");
                alert(`//d.${rootDomain}/sso?refreshToken=${data.token.refreshToken}`);
                window.location.href = `//d.${rootDomain}/sso?refreshToken=${data.token.refreshToken}`;
                closeLoginModal();
            }
            else {
                throw new Error(data.message || messages.failed[currentLang] || messages.failed["zh-CN"]);
            }
        }
        catch (error) {
            const errorMessage = error.message ||
                messages.defaultError[currentLang] ||
                messages.defaultError["zh-CN"];
            alert("❌ " + errorMessage);
        }
        finally {
            // Reset state
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
        }
    });
}
window.handleLogin = handleLogin;
// Close modal when clicking outside
window.addEventListener("click", (e) => {
    const modal = document.getElementById("loginModal");
    if (e.target === modal) {
        closeLoginModal();
    }
});
