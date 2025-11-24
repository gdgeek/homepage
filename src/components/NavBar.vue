<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';

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

const changeLanguage = (event: Event) => {
    const target = event.target as HTMLSelectElement;
    locale.value = target.value;
    document.documentElement.lang = target.value;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    // Initialize lang
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
                        <select :value="locale" @change="changeLanguage" aria-label="Select Language">
                            <option value="en">English</option>
                            <option value="zh-CN">简体中文</option>
                            <option value="zh-TW">繁體中文</option>
                            <option value="ja">日本語</option>
                            <option value="th">ไทย</option>
                        </select>
                    </div>
                </li>
                <li><button class="btn-primary" @click="emit('open-login')">{{ t('nav.login') }}</button></li>
            </ul>
        </div>
    </nav>
</template>
