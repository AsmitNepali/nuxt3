<script setup>
import { cs } from 'date-fns/locale'
// import { useFetch } from '#app'
import Cookies from 'js-cookie'
// import Cookies from 'js-cookie'
definePageMeta({
  middleware: ['guest']
})
const email = ref('')
const password = ref('')
const isLoading = ref('')
const errors = ref([])
const { $apiFetch, $axios } = useNuxtApp()

function csrf() {
  return $apiFetch('/backend/sanctum/csrf-cookie')
}
async function login() {
  try {
    await csrf()
    await $apiFetch('backend/login', {
      method: 'POST',
      body: {
        email: email.value,
        password: password.value
      }
    })

    const user = await $apiFetch('/backend/api/user')
    const { setUser } = useAuth()
    setUser(user.name)

    window.location.pathname = '/my-info'
  } catch (err) {
    errors.value = Object.values(err.data.errors).flat()
  }
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
