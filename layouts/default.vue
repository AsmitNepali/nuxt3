<script setup>
useHead({
  titleTemplate: '%s - Nuxt3 Blog'
})

const { $apiFetch } = useNuxtApp()
const { removeUser } = useAuth()
const { isLoggedIn } = useAuth()

async function logout() {
  try {
    await $apiFetch('/backend/logout', {
      method: 'POST'
    })
  } catch (err) {
    console.log(err.data)
  } finally {
    removeUser()
    window.location.pathname = '/'
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 text-gray-900">
    <Title>Nuxt3-Blogs</Title>
    <nav class="bg-white px-6 py-6 text-lg shadow">
      <div class="container mx-auto flex items-center justify-between px-6">
        <div>
          <nuxt-link to="/">Logo</nuxt-link>
        </div>
        <div>
          <ClientOnly>
            <ul class="flex space-x-12">
              <li>
                <nuxt-link to="/">Home</nuxt-link>
              </li>
              <li v-if="!isLoggedIn">
                <nuxt-link to="/login">login</nuxt-link>
              </li>
              <li v-if="!isLoggedIn">
                <nuxt-link to="/register">Register</nuxt-link>
              </li>
              <li v-if="isLoggedIn">
                <nuxt-link to="/my-info">My Info</nuxt-link>
              </li>
              <li v-if="isLoggedIn">
                <nuxt-link to="/create">create</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/about">About</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/contact">Contact</nuxt-link>
              </li>
              <li v-if="isLoggedIn"><a href="#" @click.prevent="logout">Logout</a></li>
            </ul>
          </ClientOnly>
        </div>
      </div>
    </nav>
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
.router-link-active {
  font-weight: bold;
}
</style>
