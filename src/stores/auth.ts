import axios from 'axios'
import { defineStore } from 'pinia'

interface UserDto {
  id: number
  first_name: string
  last_name: string
  job_tile: string
  features: {
    color: string
    title: string
    description: string
  }[]
}

interface LoginDto {
  email: string
  password: string
}

export type UserState = {
  authUser: UserDto | null
}

export const useAuthStore = defineStore('auth', {
  state: () =>
    ({
      authUser: null,
    }) as UserState,
  getters: {
    user: (state) => state.authUser,
  },
  actions: {
    async getToken() {
      await axios.get('/api/auth/csrf')
    },

    async login(data: LoginDto) {
      await this.getToken()
      try {
        await axios.post('/api/auth/login', {
          email: data.email,
          password: data.password,
        })
      } catch (error) {
        console.log(error)
        throw error
      }
    },

    async logout() {
      try {
        await axios.post('/api/auth/logout')
        this.authUser = null
      } catch (error) {
        console.log(error)
        throw error
      }
    },

    async getUser() {
      try {
        const data = await axios.get('/api/auth/user')
        this.authUser = data.data.data
      } catch (error) {
        console.log(error)
      }
    },
  },
})
