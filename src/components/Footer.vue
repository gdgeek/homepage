<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};
</script>

<template>
    <footer class="footer" id="contact">
        <div class="container">
            <div class="footer-content">
                <div class="footer-brand">
                    <a href="#" class="logo" @click.prevent="scrollToSection('app')">3D<span
                            class="logo-highlight">UGC</span></a>
                    <p>{{ t('footer.tagline') }}</p>
                </div>
                <div class="footer-links">
                    <h4>{{ t('footer.links') }}</h4>
                    <ul>
                        <li><a href="#about" @click.prevent="scrollToSection('about')">{{ t('nav.about') }}</a></li>
                        <li><a href="#capabilities" @click.prevent="scrollToSection('capabilities')">{{
                                t('nav.capabilities') }}</a></li>
                        <li><a href="#devices" @click.prevent="scrollToSection('devices')">{{ t('nav.devices') }}</a>
                        </li>
                    </ul>
                </div>
                <div class="footer-contact">
                    <h4>{{ t('footer.contact') }}</h4>
                    <p>info@macauedu.mo</p>
                    <p>+853 2800 0000</p>
                    <div class="social-icons">
                        <a href="#" aria-label="Facebook">FB</a>
                        <a href="#" aria-label="Twitter">TW</a>
                        <a href="#" aria-label="Instagram">IG</a>
                    </div>
                </div>
                <div class="footer-newsletter">
                    <h4>{{ t('footer.subscribeTitle') }}</h4>
                    <p>{{ t('footer.newsletter.desc') }}</p>
                    <form class="newsletter-form" @submit.prevent>
                        <input type="email" :placeholder="t('footer.email.placeholder')" required>
                        <button type="submit">{{ t('footer.subscribe.btn') }}</button>
                    </form>
                </div>
            </div>
            <div class="footer-bottom">
                <p v-html="t('footer.copyright')"></p>
            </div>
        </div>
    </footer>
</template>
