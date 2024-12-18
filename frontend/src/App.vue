<script setup>
import TheFooter from './components/TheFooter.vue';
import TheHeader from './components/TheHeader.vue';
import JobSearch from './components/JobSearch.vue';
import JobList from './components/JobList.vue';
import { ref } from 'vue';

const jobs = ref([]); // Placeholder for job data

async function updateJobs(newJobs) {
  jobs.value = newJobs; // Uppdaterar jobblistan
}
</script>

<template>
  <header>
    <TheHeader title="Service Brokerage" />
  </header>
  <nav>
    <TheNav />
  </nav>
  <main>
    <aside>
      <div class="container">
        <div class="job-types">
          <h2>Available Jobs</h2>
          <ul>
            <li>Carpenter</li>
            <li>Electrician</li>
            <li>Plumber</li>
          </ul>
        </div>
        <div class="search-box">
          <JobSearch @update-jobs="updateJobs" />
        </div>
      </div>

    </aside>
    <section>
      <ul>
        <JobList :jobs="jobs" />
      </ul>
    </section>
  </main>
  <footer>
    <TheFooter title="Back to top" />
  </footer>
</template>

<style scoped>
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  min-height: 3rem;
}
</style>
