<script setup lang="ts">
import { cs } from 'date-fns/locale'
import { useFetch } from '#app'
// import Cookies from 'js-cookie'

const email = ref('asmit@gmail.com')
const password = ref('password')
const isLoading = ref('')
const errors = ref([])
const { $apiFetch, $axios } = useNuxtApp()

async function csrf() {}
async function login() {
  await useFetch('backend/sanctum/csrf-cookie', { credentials: 'include' })
  // await $axios.post('/login', {
  //   email: email.value,
  //   password: password.value
  // })
}
</script>

<template>
  <div class="container mx-auto w-1/3 py-8">
    <Title>Login</Title>
    <ul v-if="errors.length > 0" className="mb-4 list-disc list-inside text-sm text-red-600">
      <li v-for="(error, index) in errors" :key="index">
        {{ error }}
      </li>
    </ul>
    <form action="#" class="space-y-6" @submit.prevent="login">
      <div>
        <label for="email" class="block font-semibold">Email</label>
        <input
          type="text"
          v-model="email"
          id="email"
          class="mt-2 w-full rounded px-2 py-2 shadow"
        />
      </div>
      <div>
        <label for="password" class="block font-semibold">Password</label>
        <input
          type="password"
          v-model="password"
          id="password"
          class="mt-2 w-full rounded px-2 py-2 shadow"
        />
      </div>

      <div>
        <button class="inline-block rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          Login
        </button>
        <span v-if="isLoading">Loading...</span>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
