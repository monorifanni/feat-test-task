<template>
  <page-container>
    <div class="descriptionItems">
      <h1>
        Hello <span>{{ user.first_name }} {{ user.last_name }}</span
        >!
      </h1>
      <p>
        Job title: <span>{{ user.job_tile }}</span>
      </p>
      <p>Features:</p>
      <div v-for="feature in user.features" :key="feature.title" class="featureItem">
        <h3 :style="{ color: feature.color }">{{ feature.title }}</h3>
        <p>{{ feature.description }}</p>
      </div>

      <button @click="handleLogout">Logout</button>
    </div>
  </page-container>
</template>

<script setup lang="ts">
import PageContainer from '@/components/PageContainer.vue'
import router from '@/router'
import { ref } from 'vue'

const user = ref({
  first_name: 'Fanni',
  last_name: 'Monori',
  job_tile: 'Frontend Developer',
  features: [
    {
      color: 'red',
      title: 'Feature 1',
      description:
        'Lorem ipsum dolor sit amet 1, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.',
    },
    {
      color: 'blue',
      title: 'Feature 2',
      description:
        'Lorem ipsum dolor sit amet 1, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.',
    },
    {
      color: 'green',
      title: 'Feature 3',
      description:
        'Lorem ipsum dolor sit amet 1, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.',
    },
  ],
})

const handleLogout = async () => {
  try {
    console.log('logout')
    await router.push('/login')
  } catch (error) {
    console.log(error)
  }
}
</script>

<style scoped>
h1 > span,
p > span,
h3 {
  font-weight: bold;
}

.descriptionItems {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.featureItem {
  margin-bottom: 0.5rem;
}
</style>
