<script setup lang="ts">
useHead({
  titleTemplate: '%s - Nuxt3 Blog'
})
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
          <ul class="flex space-x-12">
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li><nuxt-link to="/login">login</nuxt-link></li>
            <li><nuxt-link to="/my-info">My Info</nuxt-link></li>
            <li><nuxt-link to="/about">About</nuxt-link></li>
            <li><nuxt-link to="/contact">Contact</nuxt-link></li>
            <li><nuxt-link to="/create">create</nuxt-link></li>
          </ul>
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
