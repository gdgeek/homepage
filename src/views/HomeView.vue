<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';
import LoginModal from '../components/LoginModal.vue';

const { t } = useI18n();

const loginModal = ref<InstanceType<typeof LoginModal> | null>(null);
const backToTopVisible = ref(false);

const openLogin = () => {
    loginModal.value?.open();
};

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

const handleScroll = () => {
    backToTopVisible.value = window.scrollY > 500;
};

// Intersection Observer for animations
let observer: IntersectionObserver | null = null;

onMounted(() => {
    window.addEventListener('scroll', handleScroll);

    const observerOptions = {
        threshold: 0.1,
    };

    observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer?.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.about-card, .institution-card, .section-title, .feature-list li, .fade-in-up').forEach((el) => {
        el.classList.add('fade-in-scroll');
        observer?.observe(el);
    });
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
    observer?.disconnect();
});
</script>

<template>
    <div id="app">
        <NavBar @open-login="openLogin" />

        <header class="hero">
            <div class="hero-overlay"></div>
            <div class="container hero-content">
                <h1 class="fade-in-up" v-html="t('hero.title')"></h1>
                <p class="fade-in-up delay-1" v-html="t('hero.subtitle')"></p>
                <div class="hero-buttons fade-in-up delay-2">
                    <el-button type="primary" size="large" round @click="scrollToSection('devices')" class="hero-btn">
                        {{ t('hero.explore') }}
                    </el-button>
                    <el-button size="large" round @click="scrollToSection('about')" class="hero-btn hero-btn-secondary">
                        {{ t('hero.learn') }}
                    </el-button>
                </div>
            </div>
            <div class="scroll-indicator">
                <div class="mouse"></div>
            </div>
        </header>

        <main>
            <section id="about" class="section about-section">
                <div class="container">
                    <div class="section-header text-center">
                        <h2 class="section-title">{{ t('about.title') }}</h2>
                        <div class="section-line"></div>
                        <p class="section-subtitle">{{ t('about.subtitle') }}</p>
                    </div>
                    <div class="about-grid">
                        <div class="about-card glass-card">
                            <div class="icon-box">📤</div>
                            <h3>{{ t('about.card1.title') }}</h3>
                            <p>{{ t('about.card1.desc') }}</p>
                        </div>
                        <div class="about-card glass-card">
                            <div class="icon-box">🧩</div>
                            <h3>{{ t('about.card2.title') }}</h3>
                            <p>{{ t('about.card2.desc') }}</p>
                        </div>
                        <div class="about-card glass-card">
                            <div class="icon-box">🖱️</div>
                            <h3>{{ t('about.card3.title') }}</h3>
                            <p>{{ t('about.card3.desc') }}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="capabilities" class="section system-section">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="image-stack">
                                <div class="stack-img img-1"
                                    style="background-image: url('images/capabilities_1.webp'); background-size: cover;">
                                </div>
                                <div class="stack-img img-2"
                                    style="background-image: url('images/capabilities_2.webp'); background-size: cover;">
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <h2 class="section-title">{{ t('capabilities.title') }}</h2>
                            <p class="lead">{{ t('capabilities.lead') }}</p>
                            <ul class="feature-list">
                                <li>
                                    <span class="check-icon">✓</span>
                                    <div>
                                        <strong>{{ t('capabilities.item1.title') }}</strong>
                                        <p>{{ t('capabilities.item1.desc') }}</p>
                                    </div>
                                </li>
                                <li>
                                    <span class="check-icon">✓</span>
                                    <div>
                                        <strong>{{ t('capabilities.item2.title') }}</strong>
                                        <p>{{ t('capabilities.item2.desc') }}</p>
                                    </div>
                                </li>
                                <li>
                                    <span class="check-icon">✓</span>
                                    <div>
                                        <strong>{{ t('capabilities.item3.title') }}</strong>
                                        <p>{{ t('capabilities.item3.desc') }}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id="devices" class="section institutions-section">
                <div class="container">
                    <div class="section-header text-center">
                        <h2 class="section-title">{{ t('devices.title') }}</h2>
                        <div class="section-line"></div>
                    </div>
                    <div class="institutions-grid">
                        <div class="institution-card">
                            <div class="card-image"
                                style="background-image: url('images/device_rokid.webp'); background-size: cover;">
                            </div>
                            <div class="card-content">
                                <span class="tag">{{ t('devices.ar') }}</span>
                                <h3>{{ t('devices.card1.title') }}</h3>
                                <p>{{ t('devices.card1.desc') }}</p>
                                <a href="#" class="read-more">{{ t('devices.learn') }}</a>
                            </div>
                        </div>
                        <div class="institution-card">
                            <div class="card-image"
                                style="background-image: url('images/device_ipad.webp'); background-size: cover;"></div>
                            <div class="card-content">
                                <span class="tag">{{ t('devices.tablet') }}</span>
                                <h3>{{ t('devices.card2.title') }}</h3>
                                <p>{{ t('devices.card2.desc') }}</p>
                                <a href="#" class="read-more">{{ t('devices.learn') }}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="news" class="section news-section">
                <div class="container">
                    <div class="section-header text-center">
                        <h2 class="section-title">{{ t('news.title') }}</h2>
                        <div class="section-line"></div>
                    </div>
                    <div class="news-grid">
                        <article class="news-item">
                            <div class="news-date">
                                <span class="day">20</span>
                                <span class="month">{{ t('month.nov') }}</span>
                            </div>
                            <div class="news-content">
                                <h3>{{ t('news.item1.title') }}</h3>
                                <p>{{ t('news.item1.desc') }}</p>
                                <a href="#" class="news-link">{{ t('news.readmore') }}</a>
                            </div>
                        </article>
                        <article class="news-item">
                            <div class="news-date">
                                <span class="day">15</span>
                                <span class="month">{{ t('month.nov') }}</span>
                            </div>
                            <div class="news-content">
                                <h3>{{ t('news.item2.title') }}</h3>
                                <p>{{ t('news.item2.desc') }}</p>
                                <a href="#" class="news-link">{{ t('news.readmore') }}</a>
                            </div>
                        </article>
                        <article class="news-item">
                            <div class="news-date">
                                <span class="day">10</span>
                                <span class="month">{{ t('month.nov') }}</span>
                            </div>
                            <div class="news-content">
                                <h3>{{ t('news.item3.title') }}</h3>
                                <p>{{ t('news.item3.desc') }}</p>
                                <a href="#" class="news-link">{{ t('news.readmore') }}</a>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </main>

        <Footer />

        <button id="backToTop" aria-label="Back to Top" :class="{ visible: backToTopVisible }"
            @click="scrollToTop">↑</button>

        <LoginModal ref="loginModal" />
    </div>
</template>

<style scoped>
/* Ensure hero buttons have consistent width on mobile */
@media (max-width: 768px) {
    .hero-buttons :deep(.el-button) {
        width: 100% !important;
        margin: 0;
    }

    .hero-btn {
        width: 100% !important;
    }

    .hero-btn-secondary {
        width: 100% !important;
    }
}

/* Desktop button styles */
.hero-btn {
    min-width: 160px;
}

.hero-btn-secondary {
    background-color: transparent !important;
    color: var(--text-white) !important;
    border: 2px solid var(--text-white) !important;
}

.hero-btn-secondary:hover {
    background-color: var(--text-white) !important;
    color: var(--primary-color) !important;
    border-color: var(--text-white) !important;
}
</style>
