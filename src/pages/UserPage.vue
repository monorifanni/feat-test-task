<template>
  <page-container>
    <div class="descriptionItems">
      <h1>
        Hello
        <span>{{ format.fullName(authStore.user?.first_name, authStore.user?.last_name) }}</span
        >!
      </h1>
      <p>
        Job title: <span>{{ format.valueOrEmpty(authStore.user?.job_tile) }}</span>
      </p>
      <p>Features:</p>
      <div v-if="authStore.user?.features.length">
        <div v-for="feature in authStore.user?.features" :key="feature.title" class="featureItem">
          <h3 :style="{ color: feature.color }">{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
      <div v-else class="featureItem">N/a</div>

      <button @click="handleLogout">Logout</button>
    </div>
  </page-container>
</template>

<script setup lang="ts">
import PageContainer from '@/components/PageContainer.vue'
import router from '@/router'
import { useAuthStore } from '@/stores/auth'
import format from '@/utils/format'
import { onMounted } from 'vue'

const authStore = useAuthStore()

const handleLogout = async () => {
  try {
    await authStore.logout()
    await router.push('/login')
  } catch (error) {
    console.log(error)
  }
}

onMounted(async () => {
  await authStore.getUser()
})
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
