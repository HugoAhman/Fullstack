<script setup>
import { ref } from 'vue'
let props = defineProps(["title"])

const but = ref(true)

function toggle() {
    but.value = !but.value
}
</script>

<template>
    <h1>{{ title }}</h1>
    <div class="col-layout">
        <ul>
            <li><a href="/search">Search Jobs</a></li>
        </ul>
    </div>
</template>

<style scoped>
.col-layout {
    display: flex;
    flex-direction: column;
    place-items: center;
    background-color: rgb(120, 80, 255);
    padding: 1rem;
}

h1 {
    background-color: black;
    color: white;
    text-align: center;
    line-height: 3rem;
    padding: 1rem;
}

nav ul {
    list-style: none;
    background-color: #f0f0f0;
    padding: 1rem;
    gap: 1rem;
}

nav ul li a {
    text-decoration: none;
    color: #333;
}
</style>