<script setup>
useHead({
  title: 'Home'
})

const { data: posts } = await useFetch('http://nuxt-api.test/api/posts')
</script>
<template>
  <div class="container mx-auto w-1/2 divide-y-2 divide-gray-300 py-8">
    <PostItem v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>
