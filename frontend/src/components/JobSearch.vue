<script setup>
import { ref } from 'vue';
import JobList from './JobList.vue';

const searchQuery = ref('');
const jobType = ref('');
const jobExperience = ref('');
const jobs = ref([]);

// Function to handle job search
async function searchJobs() {
    console.log(`Searching for: ${searchQuery.value}, Type: ${jobType.value}, Experience: ${jobExperience.value}`);

    const params = new URLSearchParams();
    if (searchQuery.value) params.append('title', searchQuery.value);
    if (jobType.value && jobType.value !== 'all') params.append('type', jobType.value);
    if (jobExperience.value && jobExperience.value !== 'all') params.append('experience', jobExperience.value);

    try {
        const response = await fetch(`http://localhost:3030/jobs/search?${params.toString()}`);
        const data = await response.json();
        if (response.ok) {
            jobs.value = data.jobs;
        } else {
            alert(data.message || 'Something went wrong!');
        }
    } catch (error) {
        console.error('Error fetching jobs:', error);
    }
}
</script>

<template>
    <div>
        <input v-model="searchQuery" placeholder="Search jobs..." />
        <select v-model="jobType">
            <option value="all">All</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="temporary">Temporary</option>
        </select>
        <select v-model="jobExperience">
            <option value="all">All</option>
            <option value="early">Early</option>
            <option value="medium">Medium</option>
            <option value="advanced">Advanced</option>
        </select>
        <button @click="searchJobs">Search</button>

        <JobList :jobs="jobs" />
    </div>
</template>
