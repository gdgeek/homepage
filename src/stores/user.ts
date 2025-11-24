import { defineStore } from "pinia";
import { ref } from "vue";
import { loginUser, type LoginResponse } from "../api";

export const useUserStore = defineStore("user", () => {
  const token = ref<string | null>(localStorage.getItem("accessToken"));
  const refreshToken = ref<string | null>(localStorage.getItem("refreshToken"));
  const tokenExpires = ref<string | null>(localStorage.getItem("tokenExpires"));

  async function login(
    username: string,
    password: string
  ): Promise<LoginResponse> {
    try {
      const data = await loginUser(username, password);
      if (data.success && data.token) {
        token.value = data.token.accessToken;
        refreshToken.value = data.token.refreshToken;
        tokenExpires.value = data.token.expires;

        localStorage.setItem("accessToken", data.token.accessToken);
        localStorage.setItem("refreshToken", data.token.refreshToken);
        localStorage.setItem("tokenExpires", data.token.expires);
      }
      return data;
    } catch (error) {
      throw error;
    }
  }

  function logout() {
    token.value = null;
    refreshToken.value = null;
    tokenExpires.value = null;
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("tokenExpires");
  }

  return {
    token,
    refreshToken,
    tokenExpires,
    login,
    logout,
  };
});
