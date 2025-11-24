<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { setCookie, getCookie } from '../utils/cookies';

const { t, locale } = useI18n();

const emit = defineEmits(['open-login']);

const isMobileMenuOpen = ref(false);
const isScrolled = ref(false);

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const handleScroll = () => {
    isScrolled.value = window.scrollY > 50;
};

const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        isMobileMenuOpen.value = false;
    }
};

const changeLanguage = (value: string) => {
    locale.value = value;
    document.documentElement.lang = value;
    // Save language preference to cookie (expires in 1 year)
    setCookie('user_locale', value, 365);
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);

    // Load saved language preference from cookie
    const savedLocale = getCookie('user_locale');
    if (savedLocale && savedLocale !== locale.value) {
        locale.value = savedLocale;
    }

    // Initialize lang attribute
    document.documentElement.lang = locale.value;
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <nav class="navbar" :class="{ scrolled: isScrolled }">
        <div class="container nav-container">
            <a href="#" class="logo" @click.prevent="scrollToSection('app')">3D<span
                    class="logo-highlight">UGC</span></a>
            <button class="mobile-menu-btn" :class="{ active: isMobileMenuOpen }" @click="toggleMobileMenu"
                aria-label="Toggle menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </button>
            <ul class="nav-links" :class="{ active: isMobileMenuOpen }">
                <li><a href="#about" @click.prevent="scrollToSection('about')">{{ t('nav.about') }}</a></li>
                <li><a href="#capabilities" @click.prevent="scrollToSection('capabilities')">{{ t('nav.capabilities')
                }}</a></li>
                <li><a href="#devices" @click.prevent="scrollToSection('devices')">{{ t('nav.devices') }}</a></li>
                <li><a href="#news" @click.prevent="scrollToSection('news')">{{ t('nav.news') }}</a></li>
                <li><a href="#contact" @click.prevent="scrollToSection('contact')">{{ t('nav.contact') }}</a></li>
                <li>
                    <div class="language-selector">
                        <el-select v-model="locale" @change="changeLanguage" size="default">
                            <el-option label="English" value="en" />
                            <el-option label="简体中文" value="zh-CN" />
                            <el-option label="繁體中文" value="zh-TW" />
                            <el-option label="日本語" value="ja" />
                            <el-option label="ไทย" value="th" />
                        </el-select>
                    </div>
                </li>
                <li>
                    <el-button type="primary" @click="emit('open-login')" round>
                        {{ t('nav.login') }}
                    </el-button>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style scoped>
/* Custom styles for Element Plus components in navbar */
:deep(.el-select) {
    --el-select-input-focus-border-color: var(--primary-color, #007A5E);
    width: 140px;
}

:deep(.el-select .el-input__wrapper) {
    background-color: rgba(255, 255, 255, 0.5);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    backdrop-filter: blur(5px);
}

:deep(.el-select .el-input__wrapper:hover) {
    background-color: rgba(255, 255, 255, 0.8);
    border-color: var(--primary-color, #007A5E);
}

:deep(.el-button--primary) {
    background-color: var(--primary-color, #007A5E);
    border-color: var(--primary-color, #007A5E);
    padding: 0.8rem 1.8rem;
}

:deep(.el-button--primary:hover) {
    background-color: var(--primary-dark, #005842);
    border-color: var(--primary-dark, #005842);
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 122, 94, 0.2);
}

/* Mobile responsiveness */
@media (max-width: 768px) {
    :deep(.el-select) {
        width: 100% !important;
        min-width: 200px;
    }

    :deep(.el-button) {
        width: 100%;
    }

    .language-selector {
        width: 100%;
    }

    /* Ensure dropdown appears above other elements */
    :deep(.el-select-dropdown) {
        z-index: 3000 !important;
    }

    /* Make sure the select input is visible */
    :deep(.el-select .el-input__wrapper) {
        background-color: rgba(255, 255, 255, 0.95);
    }
}
</style>
