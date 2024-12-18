<script setup>
// Define props to receive the job list from the parent component
let props = defineProps(["jobs"]);
</script>

<template>
    <ul>
        <!-- Loop through the jobs and display each one -->
        <li v-for="job in jobs" :key="job._id">
            <h3>{{ job.title }}</h3>
            <p>Type: {{ job.type }}</p>
            <p>Experience: {{ job.experience }}</p>
        </li>
    </ul>
</template>
