<template>
  <page-container>
    <div class="descriptionItems">
      <h1>
        {{ t('mainPage.greeting') }}
        <span>{{ format.fullName(authStore.user?.first_name, authStore.user?.last_name) }}</span
        >!
      </h1>
      <p>
        {{ t('user.jobTitle') }}<span>{{ format.valueOrEmpty(authStore.user?.job_tile) }}</span>
      </p>
      <p>{{ t('user.features') }}</p>
      <div v-if="authStore.user?.features.length">
        <div v-for="feature in authStore.user?.features" :key="feature.title" class="featureItem">
          <h3 :style="{ color: feature.color }">{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
      <div v-else class="featureItem">N/a</div>

      <button @click="handleLogout">{{ t('logout.logoutBtn') }}</button>
    </div>
  </page-container>
</template>

<script setup lang="ts">
import PageContainer from '@/components/PageContainer.vue'
import router from '@/router'
import { useAuthStore } from '@/stores/auth'
import format from '@/utils/format'
import { onMounted } from 'vue'
import { useToast } from 'vue-toast-notification'
import { useI18n } from 'vue-i18n'

const authStore = useAuthStore()
const $toast = useToast()
const { t } = useI18n()

const handleLogout = async () => {
  try {
    await authStore.logout()
    await router.push('/login')
  } catch {
    $toast.error(t('logout.failedToLogout'), {
      position: 'top-right',
      duration: 3000,
    })
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
