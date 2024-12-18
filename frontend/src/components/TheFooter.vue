<script setup>
let props = defineProps(["title"])
</script>

<template>
    <h1>{{ title }}</h1>
    <div class="three-col-layout">
        <div>
            <h3>Get to Know us </h3>
            <ul>
                <li>sdkfjskldf</li>
                <li>sdkfjskldf</li>
            </ul>

        </div>
        <div>
            <h3>Shipping</h3>
            <ul>
                <li>sdkfjskldf</li>
                <li>sdkfjskldf</li>
            </ul>

        </div>
        <div>
            <h3>Help</h3>
            <ul>
                <li>sdkfjskldf</li>
                <li>sdkfjskldf</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.three-col-layout {
    background-color: #000000;
    color: white;
    padding: 2rem;
    display: grid;
    grid-auto-flow: column;
    place-items: center;
}

h1 {
    background-color: rgb(120, 80, 255);
    line-height: 3rem;
    text-align: center;
}
</style>