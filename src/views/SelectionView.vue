<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateTo = (route: string) => {
    router.push(route);
};
</script>

<template>
    <div class="selection-container">
        <div class="selection-card" @click="navigateTo('/3dugc')">
            <div class="card-content">
                <h2>3DUGC.com</h2>
                <p>Global AR + AI Creation Platform</p>
                <button class="btn-enter">Enter Site</button>
            </div>
        </div>
        <div class="selection-card" @click="navigateTo('/xingkou')">
            <div class="card-content">
                <h2>XingKou.net</h2>
                <p>Education Digital Service Platform</p>
                <button class="btn-enter">Enter Site</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.selection-container {
    display: flex;
    height: 100vh;
    width: 100vw;
    background: #f0f2f5;
}

.selection-card {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.selection-card:first-child {
    background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
    color: white;
}

.selection-card:last-child {
    background: linear-gradient(135deg, #0056b3 0%, #004494 100%);
    color: white;
}

.selection-card:hover {
    flex: 1.2;
}

.card-content {
    text-align: center;
    z-index: 2;
    padding: 2rem;
}

h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
    font-weight: bold;
}

p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.8;
}

.btn-enter {
    padding: 12px 30px;
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.5);
    color: white;
    font-size: 1rem;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s;
}

.selection-card:hover .btn-enter {
    background: white;
    color: #333;
}
</style>
