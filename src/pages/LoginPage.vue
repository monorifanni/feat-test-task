<template>
  <page-container>
    <div class="title">
      <h1>Join to <span>feat.</span></h1>
      <p>See what will going to happen with your life.</p>
    </div>

    <form @submit.prevent="handleLogin">
      <div class="fields">
        <div class="field">
          <label for="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="hello@feat.hu"
            v-model="formData.email"
          />
        </div>

        <div class="field">
          <label for="password">Password</label>
          <input id="password" name="password" type="password" v-model="formData.password" />
        </div>
      </div>

      <div class="passwordExtraContent">
        <div class="rememberMe">
          <input type="checkbox" />
          <span>Remember me</span>
        </div>

        <router-link to="/">Forgot password?</router-link>
      </div>

      <button type="submit">Login</button>
    </form>

    <div class="createAcc">
      <p>Not Applied Yet? <router-link to="/">Create an account</router-link></p>
    </div>
  </page-container>
</template>

<script setup lang="ts">
import PageContainer from '@/components/PageContainer.vue'
import router from '@/router'
import { useAuthStore } from '@/stores/auth'
import { ref } from 'vue'

const formData = ref({
  email: '',
  password: '',
})

const authStore = useAuthStore()

const handleLogin = async () => {
  try {
    await authStore.login(formData.value)
    await router.push('/user')
  } catch (error) {
    console.log(error)
  }
}
</script>

<style scoped>
.title {
  margin-bottom: 2.25rem;

  h1 {
    font-weight: bold;
  }

  span {
    font-weight: bold;
    font-style: italic;
  }
}

.fields {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.field {
  display: flex;
  flex-direction: column;
}

.passwordExtraContent {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin: 0.5rem 0 1.5rem;

  .rememberMe {
    display: flex;
    align-items: center;
    gap: 8px;
  }
}

.createAcc {
  font-size: 14px;
  margin-top: 2.25rem;
}
</style>
