<script setup lang="ts">
import { ref } from 'vue';
import LoginModal from '../components/LoginModal.vue';

const loginModal = ref<InstanceType<typeof LoginModal> | null>(null);

const openLogin = () => {
    loginModal.value?.open();
};

const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};
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
                    <input type="text" placeholder="请输入关键字搜索...">
                    <button>搜索</button>
                    <button class="login-btn-header" @click="openLogin">登录</button>
                </div>
            </div>
        </div>

        <!-- Navigation -->
        <div class="nav">
            <div class="container">
                <ul class="clearfix">
                    <li class="active"><a href="#home" @click.prevent="scrollToSection('home')">首页</a></li>
                    <li><a href="#intro" @click.prevent="scrollToSection('intro')">平台介绍</a></li>
                    <li><a href="#tech" @click.prevent="scrollToSection('tech')">核心技术</a></li>
                    <li><a href="#devices" @click.prevent="scrollToSection('devices')">支持设备</a></li>
                    <li><a href="#news" @click.prevent="scrollToSection('news')">新闻动态</a></li>
                    <li><a href="#about" @click.prevent="scrollToSection('about')">关于我们</a></li>
                </ul>
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
            <div class="section-box" id="intro">
                <div class="section-title">平台介绍 <span>更多 >></span></div>
                <div class="feature-grid">
                    <div class="feature-item">
                        <h3>无代码创作</h3>
                        <p>师生无需编写任何代码，即可轻松创建沉浸式AR教学内容。降低创作门槛，激发创新思维。</p>
                    </div>
                    <div class="feature-item">
                        <h3>场景拼装</h3>
                        <p>通过在3D空间中放置对象，直观地组装课程场景。所见即所得，快速构建教学环境。</p>
                    </div>
                    <div class="feature-item">
                        <h3>可视化逻辑</h3>
                        <p>只需拖放逻辑块即可实现复杂的交互式课件。让教学内容动起来，提高学生参与度。</p>
                    </div>
                </div>
            </div>

            <!-- Capabilities Section -->
            <div class="section-box" id="tech">
                <div class="section-title">核心技术 <span>更多 >></span></div>
                <div class="feature-grid">
                    <div class="feature-item">
                        <h3>AR + AI 核心</h3>
                        <p>由先进AI驱动的智能内容生成与物体识别技术。自动识别教学用具，智能推荐相关资源。</p>
                    </div>
                    <div class="feature-item">
                        <h3>多设备互动</h3>
                        <p>AR眼镜、平板电脑和手机之间的实时协作。支持多人同场景互动，打造协作式课堂。</p>
                    </div>
                    <div class="feature-item">
                        <h3>三方视角与投屏</h3>
                        <p>将AR视角实时投屏到大屏幕，实现全班教学分享。教师可实时监控学生视角，精准指导。</p>
                    </div>
                </div>
            </div>

            <div class="clearfix">
                <!-- Devices Section (Left) -->
                <div class="section-box fl" style="width: 68%;" id="devices">
                    <div class="section-title">支持设备</div>
                    <div class="feature-grid">
                        <div class="feature-item" style="width: 48%;">
                            <h3>Rokid AR Studio</h3>
                            <p>沉浸式学习的完美空间计算设备。提供极致的视觉体验和交互能力。</p>
                        </div>
                        <div class="feature-item" style="width: 48%;">
                            <h3>iPad</h3>
                            <p>随时随地创建和查看教育AR内容。便携易用，普及率高。</p>
                        </div>
                    </div>
                </div>

                <!-- News Section (Right) -->
                <div class="section-box fr" style="width: 30%;" id="news">
                    <div class="section-title">新闻动态 <span>更多 >></span></div>
                    <ul class="news-list">
                        <li class="clearfix"><a href="#">教育版 AI 新功能发布：增强自动绑定</a> <span>2025-11-20</span></li>
                        <li class="clearfix"><a href="#">大屏幕投屏支持：无缝投屏到教室显示屏</a> <span>2025-11-18</span></li>
                        <li class="clearfix"><a href="#">全球教育合作伙伴计划启动</a> <span>2025-11-15</span></li>
                        <li class="clearfix"><a href="#">星扣平台 V1.0 正式上线公告</a> <span>2025-11-01</span></li>
                        <li class="clearfix"><a href="#">关于举办数字化教学培训的通知</a> <span>2025-10-28</span></li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div class="footer" id="about">
            <div class="container">
                <p>
                    <a href="#">关于我们</a> | <a href="#">联系方式</a> | <a href="#">版权声明</a> | <a href="#">帮助中心</a>
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

/* Navigation */
.nav {
    background-color: #0056b3;
    height: 50px;
    line-height: 50px;
}

.nav li {
    float: left;
    position: relative;
}

.nav li a {
    display: block;
    color: #fff;
    padding: 0 30px;
    font-size: 16px;
}

.nav li a:hover,
.nav li.active a {
    background-color: #004494;
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

/* Section Styles */
.section-box {
    background: #fff;
    border: 1px solid #ddd;
    padding: 20px;
    margin-bottom: 20px;
}

.section-title {
    border-bottom: 2px solid #0056b3;
    padding-bottom: 10px;
    margin-bottom: 20px;
    font-size: 20px;
    color: #0056b3;
    font-weight: bold;
}

.section-title span {
    float: right;
    font-size: 14px;
    color: #999;
    font-weight: normal;
    cursor: pointer;
}

/* Grid Layout for Features */
.feature-grid {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.feature-item {
    width: 32%;
    background: #f9f9f9;
    border: 1px solid #eee;
    padding: 15px;
    margin-bottom: 15px;
    transition: all 0.3s;
}

.feature-item:hover {
    border-color: #0056b3;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.feature-item h3 {
    color: #333;
    margin-bottom: 10px;
    font-size: 18px;
    border-left: 4px solid #0056b3;
    padding-left: 10px;
}

.feature-item p {
    color: #666;
    font-size: 14px;
    line-height: 1.6;
}

/* News List */
.news-list li {
    border-bottom: 1px dashed #ddd;
    padding: 10px 0;
    position: relative;
    padding-left: 15px;
}

.news-list li::before {
    content: "•";
    color: #0056b3;
    position: absolute;
    left: 0;
}

.news-list li a {
    float: left;
    max-width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.news-list li span {
    float: right;
    color: #999;
    font-size: 12px;
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

.footer a {
    color: #ccc;
    margin: 0 10px;
}
</style>
