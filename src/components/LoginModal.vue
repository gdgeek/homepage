<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useUserStore } from '../stores/user';
import { ElMessage } from 'element-plus';

const { t } = useI18n();
const userStore = useUserStore();

const isVisible = ref(false);
const username = ref('');
const password = ref('');
const isLoading = ref(false);

const open = () => {
    isVisible.value = true;
};

const close = () => {
    isVisible.value = false;
    username.value = '';
    password.value = '';
};

const handleLogin = async () => {
    if (!username.value || !password.value) {
        ElMessage.warning(t('login.fillRequired') || 'Please fill in all fields');
        return;
    }

    isLoading.value = true;
    try {
        const data = await userStore.login(username.value, password.value);
        if (data.success) {
            ElMessage.success(t('login.success') || 'Login successful!');
            if (data.token) {
                // Redirect logic matching original
                let rootDomain;
                const hostname = window.location.hostname;
                if (hostname === 'localhost' || hostname === '127.0.0.1') {
                    rootDomain = '3dugc.com';
                } else {
                    const parts = hostname.split(".");
                    rootDomain = parts.slice(-2).join(".");
                }
                const redirectUrl = `//d.${rootDomain}/sso?refreshToken=${data.token.refreshToken}`;
                window.location.href = redirectUrl;
            }
            close();
        } else {
            ElMessage.error(data.message || t('login.failed'));
        }
    } catch (error: any) {
        ElMessage.error(error.message || t('login.defaultError'));
    } finally {
        isLoading.value = false;
    }
};

defineExpose({ open, close });
</script>

<template>
    <el-dialog v-model="isVisible" :title="t('login.title')" width="400px" :close-on-click-modal="true"
        :close-on-press-escape="true" center>
        <el-form @submit.prevent="handleLogin" label-position="top">
            <el-form-item :label="t('login.username')">
                <el-input v-model="username" :placeholder="t('login.username')" size="large" clearable />
            </el-form-item>
            <el-form-item :label="t('login.password')">
                <el-input v-model="password" type="password" :placeholder="t('login.password')" size="large"
                    show-password clearable />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" native-type="submit" :loading="isLoading" size="large"
                    style="width: 100%; border-radius: 50px;">
                    {{ t('login.btn') }}
                </el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>

<style scoped>
/* Custom styles to match the original design */
:deep(.el-dialog) {
    border-radius: 20px;
}

:deep(.el-dialog__header) {
    padding: 2rem 2rem 1rem;
}

:deep(.el-dialog__body) {
    padding: 0 2rem 2rem;
}

:deep(.el-form-item__label) {
    font-weight: 500;
    color: var(--text-dark, #1A1A1A);
}

:deep(.el-input__wrapper) {
    border-radius: 10px;
    background-color: var(--background-light, #F9FAFB);
}

:deep(.el-input__wrapper:hover) {
    background-color: var(--background-white, #FFFFFF);
}

:deep(.el-button--primary) {
    background-color: var(--primary-color, #007A5E);
    border-color: var(--primary-color, #007A5E);
}

:deep(.el-button--primary:hover) {
    background-color: var(--primary-dark, #005842);
    border-color: var(--primary-dark, #005842);
}
</style>
