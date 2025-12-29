<script setup lang="ts">
import { ref } from 'vue';
import { Upload, Box, Monitor, Cpu, Connection, VideoCamera, Cellphone } from '@element-plus/icons-vue';
import LoginModal from '../components/LoginModal.vue';

const loginModal = ref<InstanceType<typeof LoginModal> | null>(null);
const searchQuery = ref('');
const activeMenu = ref('home');

const openLogin = () => {
    loginModal.value?.open();
};

const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        activeMenu.value = id;
    }
};

const handleSearch = () => {
    if (searchQuery.value.trim()) {
        console.log('Searching for:', searchQuery.value);
        // Add search logic here
    }
};

// Platform Features Data
const platformFeatures = [
    {
        icon: Upload,
        title: '無代碼創作',
        description: '師生無需編寫任何代碼，即可輕鬆創建沉浸式AR教學內容。降低創作門檻，激發創新思維。'
    },
    {
        icon: Box,
        title: '場景拼裝',
        description: '通過在3D空間中放置對象，直觀地組裝課程場景。所見即所得，快速構建教學環境。'
    },
    {
        icon: Monitor,
        title: '可視化邏輯',
        description: '只需拖放邏輯塊即可實現複雜的交互式課件。讓教學內容動起來，提高學生參與度。'
    }
];

// Core Technology Data
const coreTech = [
    {
        icon: Cpu,
        title: 'AR + AI 核心',
        description: '由先進AI驅動的智能內容生成與物體識別技術。自動識別教學用具，智能推薦相關資源。'
    },
    {
        icon: Connection,
        title: '多設備互動',
        description: 'AR眼鏡、平板電腦和手機之間的實時協作。支持多人同場景互動，打造協作式課堂。'
    },
    {
        icon: VideoCamera,
        title: '三方視角與投屏',
        description: '將AR視角實時投屏到大屏幕，實現全班教學分享。教師可實時監控學生視角，精準指導。'
    }
];

// Devices Data
const devices = [
    {
        name: 'Rokid AR Studio',
        tag: 'AR眼鏡',
        type: 'danger',
        description: '沉浸式學習的完美空間計算設備。提供極致的視覺體驗和交互能力。',
        icon: Monitor
    },
    {
        name: 'iPad',
        tag: '平板電腦',
        type: 'warning',
        description: '隨時隨地創建和查看教育AR內容。便攜易用，普及率高。',
        icon: Cellphone
    }
];

// News List Data
const newsList = [
    {
        title: '教育版 AI 新功能發布：增強自動綁定',
        date: '2025-11-20'
    },
    {
        title: '大屏幕投屏支持：無縫投屏到教室顯示屏',
        date: '2025-11-18'
    },
    {
        title: '全球教育合作夥伴計劃啟動',
        date: '2025-11-15'
    },
    {
        title: '夏鼎平台 V1.0 正式上線公告',
        date: '2025-11-01'
    },
    {
        title: '關於舉辦數字化教學培訓的通知',
        date: '2025-10-28'
    }
];
</script>

<template>
    <div class="xiading-page">
        <!-- Top Bar -->
        <div class="top-bar">
            <div class="container">
                <div class="fl">歡迎訪問夏鼎 (XiaDing) 教育數字化服務平台！版本號：V1.0</div>
                <div class="fr">
                    <a href="#" @click.prevent="openLogin">登錄</a> | <a href="#">設為首頁</a> | <a href="#">加入收藏</a> | <a
                        href="#">聯繫我們</a>
                </div>
            </div>
        </div>

        <!-- Header -->
        <div class="header">
            <div class="container clearfix">
                <div class="logo">
                    <img src="../assets/logo_xiading.png" alt="XiaDing Logo" />
                </div>
                <div class="search-box">
                    <input type="text" v-model="searchQuery" placeholder="請輸入關鍵字搜索..." @keyup.enter="handleSearch" />
                    <button @click="handleSearch">搜索</button>
                    <button class="login-btn-header" @click="openLogin">登錄</button>
                    <!-- <button class="login-btn-header" @click="openLogin">登錄</button> -->
                </div>
            </div>
        </div>

        <!-- Navigation -->
        <div class="nav">
            <div class="container">
                <el-menu mode="horizontal" :default-active="activeMenu" class="nav-menu" background-color="#1976D2"
                    text-color="#fff" active-text-color="#ffd04b">
                    <el-menu-item index="home" @click="scrollToSection('home')">首頁</el-menu-item>
                    <el-menu-item index="intro" @click="scrollToSection('intro')">平台介紹</el-menu-item>
                    <el-menu-item index="tech" @click="scrollToSection('tech')">核心技術</el-menu-item>
                    <el-menu-item index="devices" @click="scrollToSection('devices')">支持設備</el-menu-item>
                    <el-menu-item index="news" @click="scrollToSection('news')">新聞動態</el-menu-item>
                    <el-menu-item index="about" @click="scrollToSection('about')">關於我們</el-menu-item>
                </el-menu>
            </div>
        </div>

        <!-- Banner -->
        <div class="banner">
            <div class="banner-text">
                <h1>AR + AI 教育賦能</h1>
                <p>無代碼創作 · 多設備互動 · 大屏投屏教學</p>
            </div>
        </div>

        <!-- Main Content -->
        <div class="main container">
            <!-- About Section -->
            <div id="intro" class="section-wrapper">
                <el-row :gutter="20">
                    <el-col :span="24">
                        <div class="section-header">
                            <h2>平台介紹</h2>
                            <el-tag type="primary" effect="plain">Platform Introduction</el-tag>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :xs="24" :sm="24" :md="8" v-for="(feature, index) in platformFeatures" :key="index">
                        <el-card shadow="hover" class="feature-card">
                            <template #header>
                                <div class="card-header">
                                    <el-icon :size="24" color="#1976D2">
                                        <component :is="feature.icon" />
                                    </el-icon>
                                    <span>{{ feature.title }}</span>
                                </div>
                            </template>
                            <p>{{ feature.description }}</p>
                        </el-card>
                    </el-col>
                </el-row>
            </div>

            <!-- Capabilities Section -->
            <div id="tech" class="section-wrapper">
                <el-row :gutter="20">
                    <el-col :span="24">
                        <div class="section-header">
                            <h2>核心技術</h2>
                            <el-tag type="success" effect="plain">Core Technology</el-tag>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :xs="24" :sm="24" :md="8" v-for="(tech, index) in coreTech" :key="index">
                        <el-card shadow="hover" class="feature-card">
                            <template #header>
                                <div class="card-header">
                                    <el-icon :size="24" color="#1976D2">
                                        <component :is="tech.icon" />
                                    </el-icon>
                                    <span>{{ tech.title }}</span>
                                </div>
                            </template>
                            <p>{{ tech.description }}</p>
                        </el-card>
                    </el-col>
                </el-row>
            </div>

            <!-- Devices and News Section -->
            <el-row :gutter="20" class="section-wrapper">
                <!-- Devices Section -->
                <el-col :xs="24" :sm="24" :md="16" id="devices">
                    <div class="section-header">
                        <h2>支持設備</h2>
                        <el-tag type="warning" effect="plain">Supported Devices</el-tag>
                    </div>
                    <el-row :gutter="20">
                        <el-col :xs="24" :sm="12" v-for="(device, index) in devices" :key="index">
                            <el-card shadow="hover" class="device-card">
                                <template #header>
                                    <div class="card-header">
                                        <el-tag :type="device.type" size="small">{{ device.tag }}</el-tag>
                                        <span>{{ device.name }}</span>
                                    </div>
                                </template>
                                <p>{{ device.description }}</p>
                            </el-card>
                        </el-col>
                    </el-row>
                </el-col>

                <!-- News Section -->
                <el-col :xs="24" :sm="24" :md="8" id="news">
                    <div class="section-header">
                        <h2>新聞動態</h2>
                        <el-tag type="info" effect="plain">Latest News</el-tag>
                    </div>
                    <el-card shadow="hover" class="news-card">
                        <el-timeline>
                            <el-timeline-item v-for="(news, index) in newsList" :key="index" :timestamp="news.date"
                                placement="top">
                                <el-link :underline="false" type="primary">{{ news.title }}</el-link>
                            </el-timeline-item>
                        </el-timeline>
                    </el-card>
                </el-col>
            </el-row>
        </div>

        <!-- Footer -->
        <div class="footer" id="about">
            <div class="container">
                <el-divider />
                <p>
                    <el-link type="info">關於我們</el-link> |
                    <el-link type="info">聯繫方式</el-link> |
                    <el-link type="info">版權聲明</el-link> |
                    <el-link type="info">幫助中心</el-link>
                </p>
                <p>&copy; 2025 夏鼎 (XiaDing) 教育數字化服務平台 版權所有</p>
                <p>技術支持：3DUGC.com</p>
            </div>
        </div>

        <LoginModal ref="loginModal" />
    </div>
</template>

<style scoped>
/* Reset & Base */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.xiading-page {
    font-family: "Microsoft YaHei", SimHei, sans-serif;
    font-size: 14px;
    color: #333;
    background-color: #f5f5f5;
    line-height: 1.5;
}

a {
    text-decoration: none;
    color: #333;
}

a:hover {
    color: #1976D2;
}

ul {
    list-style: none;
}

/* Utility */
.container {
    width: 1200px;
    margin: 0 auto;
}

.clearfix::after {
    content: "";
    display: block;
    clear: both;
}

.fl {
    float: left;
}

.fr {
    float: right;
}

/* Top Bar */
.top-bar {
    background-color: #f8f8f8;
    border-bottom: 1px solid #ddd;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    color: #666;
}

/* Header */
.header {
    background-color: #fff;
    padding: 20px 0;
}

.logo {
    float: left;
    height: 80px;
    display: flex;
    align-items: center;
}

.logo img {
    height: 100%;
    width: auto;
}

.search-box {
    float: right;
    margin-top: 5px;
}

.search-box input {
    border: 2px solid #1976D2;
    padding: 5px;
    width: 250px;
    height: 34px;
    vertical-align: middle;
}

.search-box button {
    background-color: #1976D2;
    color: #fff;
    border: none;
    padding: 0 20px;
    height: 34px;
    cursor: pointer;
    vertical-align: middle;
    font-size: 14px;
}

.login-btn-header {
    background-color: #ffca28;
    color: #333;
    border: none;
    padding: 0 20px;
    height: 34px;
    cursor: pointer;
    vertical-align: middle;
    font-size: 14px;
    margin-left: 10px;
    border-radius: 4px;
    font-weight: bold;
}

.login-btn-header:hover {
    background-color: #ffc107;
}

/* Navigation - Override Element Plus Menu styles */
.nav {
    background-color: #1976D2;
}

:deep(.nav-menu) {
    border: none !important;
}

:deep(.nav-menu .el-menu-item) {
    font-size: 16px;
    padding: 0 30px;
    height: 50px;
    line-height: 50px;
}

:deep(.nav-menu .el-menu-item:hover) {
    background-color: #0D47A1 !important;
}

/* Banner */
.banner {
    height: 400px;
    background: url('/images/banner_bg.webp') no-repeat center center;
    background-size: cover;
    position: relative;
}

.banner-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.banner-text h1 {
    font-size: 48px;
    margin-bottom: 20px;
}

.banner-text p {
    font-size: 24px;
}

/* Main Content */
.main {
    padding: 20px 0;
}

/* Section Wrapper */
.section-wrapper {
    margin-bottom: 30px;
}

/* Section Header */
.section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 2px solid #1976D2;
}

.section-header h2 {
    font-size: 24px;
    color: #1976D2;
    font-weight: bold;
    margin: 0;
}

/* Tag Styles - Professional and Spacious */
:deep(.el-tag) {
    padding: 8px 20px;
    font-size: 13px;
    font-weight: 500;
    border-radius: 4px;
    letter-spacing: 0.5px;
}

:deep(.el-tag--primary.is-plain) {
    background-color: #E3F2FD;
    border-color: #1976D2;
    color: #1976D2;
}

:deep(.el-tag--success.is-plain) {
    background-color: #e8f5e9;
    border-color: #2e7d32;
    color: #2e7d32;
}

:deep(.el-tag--warning.is-plain) {
    background-color: #fff8e1;
    border-color: #ff8f00;
    color: #ff8f00;
}

:deep(.el-tag--info.is-plain) {
    background-color: #f5f5f5;
    border-color: #616161;
    color: #616161;
}

:deep(.el-tag--danger) {
    background-color: #c62828;
    border-color: #c62828;
    color: #fff;
    font-weight: 600;
}

:deep(.el-tag--warning) {
    background-color: #f57f17;
    border-color: #f57f17;
    color: #fff;
    font-weight: 600;
}

/* Feature Cards */
.feature-card {
    height: 100%;
    margin-bottom: 20px;
    transition: all 0.3s ease;
}

.feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15) !important;
}

.feature-card .card-header {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
}

.feature-card p {
    color: #666;
    line-height: 1.8;
    margin: 0;
}

/* Device Cards */
.device-card {
    height: 100%;
    margin-bottom: 20px;
}

.device-card .card-header {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 16px;
    font-weight: bold;
}

/* News Card */
.news-card {
    height: calc(100% - 20px);
}

:deep(.news-card .el-timeline) {
    padding-left: 10px;
}

:deep(.news-card .el-timeline-item__timestamp) {
    color: #999;
    font-size: 12px;
}

:deep(.news-card .el-link) {
    font-size: 14px;
    line-height: 1.6;
}

/* Footer */
.footer {
    background-color: #333;
    color: #ccc;
    padding: 30px 0;
    text-align: center;
    font-size: 12px;
    margin-top: 20px;
}

.footer p {
    margin-bottom: 10px;
}

:deep(.footer .el-link) {
    color: #ccc;
    margin: 0 10px;
}

:deep(.footer .el-link:hover) {
    color: #fff;
}

:deep(.footer .el-divider) {
    border-color: #555;
}

/* Responsive Design */
@media (max-width: 1200px) {
    .container {
        width: 100%;
        padding: 0 20px;
    }
}

@media (max-width: 768px) {

    /* Top Bar */
    .top-bar {
        font-size: 11px;
        height: auto;
        line-height: 1.5;
        padding: 5px 0;
    }

    .top-bar .fl,
    .top-bar .fr {
        float: none;
        text-align: center;
    }

    /* Header */
    .header {
        padding: 15px 0;
    }

    .logo {
        float: none;
        text-align: center;
        font-size: 24px;
        margin-bottom: 15px;
    }

    .logo span {
        display: block;
        margin-left: 0;
        margin-top: 5px;
        font-size: 14px;
    }

    .search-box {
        float: none;
        text-align: center;
        margin-top: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    .search-box :deep(.el-input) {
        width: 100% !important;
        max-width: 400px;
    }

    .search-box :deep(.el-button) {
        width: 100%;
        max-width: 400px;
        margin-left: 0 !important;
    }

    /* Navigation */
    .nav {
        overflow-x: auto;
    }

    :deep(.nav-menu) {
        display: flex;
        flex-wrap: nowrap;
    }

    :deep(.nav-menu .el-menu-item) {
        padding: 0 15px;
        font-size: 14px;
        white-space: nowrap;
    }

    /* Banner */
    .banner {
        height: 300px;
    }

    .banner-text h1 {
        font-size: 32px;
        margin-bottom: 15px;
    }

    .banner-text p {
        font-size: 18px;
    }

    /* Main Content */
    .main {
        padding: 15px 0;
    }

    /* Section Header */
    .section-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }

    .section-header h2 {
        font-size: 20px;
    }

    /* Cards */
    .feature-card,
    .device-card {
        margin-bottom: 15px;
    }

    /* Footer */
    .footer {
        padding: 20px 0;
    }

    :deep(.footer .el-link) {
        margin: 0 5px;
        font-size: 11px;
    }
}

@media (max-width: 480px) {

    /* Header */
    .logo {
        font-size: 20px;
    }

    .logo span {
        font-size: 12px;
    }

    /* Navigation */
    :deep(.nav-menu .el-menu-item) {
        padding: 0 10px;
        font-size: 13px;
    }

    /* Banner */
    .banner {
        height: 250px;
    }

    .banner-text h1 {
        font-size: 24px;
        margin-bottom: 10px;
    }

    .banner-text p {
        font-size: 16px;
    }

    /* Section Header */
    .section-header h2 {
        font-size: 18px;
    }
}

/* Tablet Landscape */
@media (min-width: 769px) and (max-width: 1024px) {
    .container {
        width: 100%;
        padding: 0 30px;
    }

    .banner-text h1 {
        font-size: 40px;
    }

    .banner-text p {
        font-size: 20px;
    }
}
</style>
