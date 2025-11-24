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
        title: '无代码创作',
        description: '师生无需编写任何代码，即可轻松创建沉浸式AR教学内容。降低创作门槛，激发创新思维。'
    },
    {
        icon: Box,
        title: '场景拼装',
        description: '通过在3D空间中放置对象，直观地组装课程场景。所见即所得，快速构建教学环境。'
    },
    {
        icon: Monitor,
        title: '可视化逻辑',
        description: '只需拖放逻辑块即可实现复杂的交互式课件。让教学内容动起来，提高学生参与度。'
    }
];

// Core Technology Data
const coreTech = [
    {
        icon: Cpu,
        title: 'AR + AI 核心',
        description: '由先进AI驱动的智能内容生成与物体识别技术。自动识别教学用具，智能推荐相关资源。'
    },
    {
        icon: Connection,
        title: '多设备互动',
        description: 'AR眼镜、平板电脑和手机之间的实时协作。支持多人同场景互动，打造协作式课堂。'
    },
    {
        icon: VideoCamera,
        title: '三方视角与投屏',
        description: '将AR视角实时投屏到大屏幕，实现全班教学分享。教师可实时监控学生视角，精准指导。'
    }
];

// Devices Data
const devices = [
    {
        name: 'Rokid AR Studio',
        tag: 'AR眼镜',
        type: 'danger',
        description: '沉浸式学习的完美空间计算设备。提供极致的视觉体验和交互能力。',
        icon: Monitor
    },
    {
        name: 'iPad',
        tag: '平板电脑',
        type: 'warning',
        description: '随时随地创建和查看教育AR内容。便携易用，普及率高。',
        icon: Cellphone
    }
];

// News List Data
const newsList = [
    {
        title: '教育版 AI 新功能发布：增强自动绑定',
        date: '2025-11-20'
    },
    {
        title: '大屏幕投屏支持：无缝投屏到教室显示屏',
        date: '2025-11-18'
    },
    {
        title: '全球教育合作伙伴计划启动',
        date: '2025-11-15'
    },
    {
        title: '星扣平台 V1.0 正式上线公告',
        date: '2025-11-01'
    },
    {
        title: '关于举办数字化教学培训的通知',
        date: '2025-10-28'
    }
];
</script>

<template>
    <div class="xingkou-page">
        <!-- Top Bar -->
        <div class="top-bar">
            <div class="container">
                <div class="fl">欢迎访问星扣 (XingKou.net) 教育数字化服务平台！版本号：V1.0</div>
                <div class="fr">
                    <a href="#" @click.prevent="openLogin">登录</a> | <a href="#">设为首页</a> | <a href="#">加入收藏</a> | <a
                        href="#">联系我们</a>
                </div>
            </div>
        </div>

        <!-- Header -->
        <div class="header">
            <div class="container clearfix">
                <div class="logo">
                    星扣 XingKou.net
                    <span>让每个人都可以快乐的创造世界</span>
                </div>
                <div class="search-box">
                    <input type="text" v-model="searchQuery" placeholder="请输入关键字搜索..." @keyup.enter="handleSearch" />
                    <button @click="handleSearch">搜索</button>
                    <button class="login-btn-header" @click="openLogin">登录</button>
                </div>
            </div>
        </div>

        <!-- Navigation -->
        <div class="nav">
            <div class="container">
                <el-menu mode="horizontal" :default-active="activeMenu" class="nav-menu" background-color="#0056b3"
                    text-color="#fff" active-text-color="#ffd04b">
                    <el-menu-item index="home" @click="scrollToSection('home')">首页</el-menu-item>
                    <el-menu-item index="intro" @click="scrollToSection('intro')">平台介绍</el-menu-item>
                    <el-menu-item index="tech" @click="scrollToSection('tech')">核心技术</el-menu-item>
                    <el-menu-item index="devices" @click="scrollToSection('devices')">支持设备</el-menu-item>
                    <el-menu-item index="news" @click="scrollToSection('news')">新闻动态</el-menu-item>
                    <el-menu-item index="about" @click="scrollToSection('about')">关于我们</el-menu-item>
                </el-menu>
            </div>
        </div>

        <!-- Banner -->
        <div class="banner">
            <div class="banner-text">
                <h1>AR + AI 教育赋能</h1>
                <p>无代码创作 · 多设备互动 · 大屏投屏教学</p>
            </div>
        </div>

        <!-- Main Content -->
        <div class="main container">
            <!-- About Section -->
            <div id="intro" class="section-wrapper">
                <el-row :gutter="20">
                    <el-col :span="24">
                        <div class="section-header">
                            <h2>平台介绍</h2>
                            <el-tag type="primary" effect="plain">Platform Introduction</el-tag>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :xs="24" :sm="24" :md="8" v-for="(feature, index) in platformFeatures" :key="index">
                        <el-card shadow="hover" class="feature-card">
                            <template #header>
                                <div class="card-header">
                                    <el-icon :size="24" color="#0056b3">
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
                            <h2>核心技术</h2>
                            <el-tag type="success" effect="plain">Core Technology</el-tag>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :xs="24" :sm="24" :md="8" v-for="(tech, index) in coreTech" :key="index">
                        <el-card shadow="hover" class="feature-card">
                            <template #header>
                                <div class="card-header">
                                    <el-icon :size="24" color="#0056b3">
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
                        <h2>支持设备</h2>
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
                        <h2>新闻动态</h2>
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
                    <el-link type="info">关于我们</el-link> |
                    <el-link type="info">联系方式</el-link> |
                    <el-link type="info">版权声明</el-link> |
                    <el-link type="info">帮助中心</el-link>
                </p>
                <p>&copy; 2025 星扣 (XingKou.net) 教育数字化服务平台 版权所有</p>
                <p>技术支持：3DUGC.com</p>
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

.xingkou-page {
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
    color: #0056b3;
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
    font-size: 32px;
    font-weight: bold;
    color: #0056b3;
    float: left;
}

.logo span {
    font-size: 16px;
    color: #666;
    margin-left: 10px;
    font-weight: normal;
}

.search-box {
    float: right;
    margin-top: 5px;
}

.search-box input {
    border: 2px solid #0056b3;
    padding: 5px;
    width: 250px;
    height: 34px;
    vertical-align: middle;
}

.search-box button {
    background-color: #0056b3;
    color: #fff;
    border: none;
    padding: 0 20px;
    height: 34px;
    cursor: pointer;
    vertical-align: middle;
    font-size: 14px;
}

.login-btn-header {
    background-color: #ff9900;
    color: #fff;
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
    background-color: #e68a00;
}

/* Navigation - Override Element Plus Menu styles */
.nav {
    background-color: #0056b3;
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
    background-color: #004494 !important;
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
    border-bottom: 2px solid #0056b3;
}

.section-header h2 {
    font-size: 24px;
    color: #0056b3;
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
    background-color: #e8f4f8;
    border-color: #0056b3;
    color: #0056b3;
}

:deep(.el-tag--success.is-plain) {
    background-color: #f0f9f4;
    border-color: #28a745;
    color: #28a745;
}

:deep(.el-tag--warning.is-plain) {
    background-color: #fff8e6;
    border-color: #ff9900;
    color: #ff9900;
}

:deep(.el-tag--info.is-plain) {
    background-color: #f5f5f5;
    border-color: #666;
    color: #666;
}

:deep(.el-tag--danger) {
    background-color: #dc3545;
    border-color: #dc3545;
    color: #fff;
    font-weight: 600;
}

:deep(.el-tag--warning) {
    background-color: #ff9900;
    border-color: #ff9900;
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
