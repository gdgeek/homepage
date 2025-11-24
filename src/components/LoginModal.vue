<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useUserStore } from '../stores/user';

const { t } = useI18n();
const userStore = useUserStore();

const isVisible = ref(false);
const username = ref('');
const password = ref('');
const isLoading = ref(false);

const open = () => {
    isVisible.value = true;
    document.body.style.overflow = 'hidden';
};

const close = () => {
    isVisible.value = false;
    document.body.style.overflow = '';
    username.value = '';
    password.value = '';
};

const handleLogin = async () => {
    if (!username.value || !password.value) return;

    isLoading.value = true;
    try {
        const data = await userStore.login(username.value, password.value);
        if (data.success) {
            alert(t('login.success') || 'Login successful!');
            if (data.token) {
                // Redirect logic matching original
                let rootDomain;
                const hostname = window.location.hostname;
                //alert(hostname)
                if (hostname === 'localhost' || hostname === '127.0.0.1') {
                    rootDomain = '3dugc.com';
                } else {
                    const parts = hostname.split(".");
                    rootDomain = parts.slice(-2).join(".");
                }
                const redirectUrl = `//d.${rootDomain}/sso?refreshToken=${data.token.refreshToken}`;
                //alert(redirectUrl);
                window.location.href = redirectUrl;
            }
            close();
        } else {
            alert(data.message || t('login.failed'));
        }
    } catch (error: any) {
        alert(error.message || t('login.defaultError'));
    } finally {
        isLoading.value = false;
    }
};

defineExpose({ open, close });
</script>

<template>
    <div v-if="isVisible" id="loginModal" class="modal-overlay active" @click.self="close">
        <div class="login-modal">
            <button class="modal-close" @click="close">&times;</button>
            <h2 class="login-title">{{ t('login.title') }}</h2>
            <form class="login-form" @submit.prevent="handleLogin">
                <div class="form-group">
                    <label for="username">{{ t('login.username') }}</label>
                    <input type="text" id="username" v-model="username" required>
                </div>
                <div class="form-group">
                    <label for="password">{{ t('login.password') }}</label>
                    <input type="password" id="password" v-model="password" required>
                </div>
                <button type="submit" class="login-submit-btn" :disabled="isLoading">
                    {{ isLoading ? t('login.loading') : t('login.btn') }}
                </button>
            </form>
        </div>
    </div>
</template>

<style scoped>
/* Styles are inherited from main.css, but we can add component specific overrides here if needed */
</style>
