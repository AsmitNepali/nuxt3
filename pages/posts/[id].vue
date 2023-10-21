<script setup>
const route = useRoute()
const { data: post } = await useFetch(`http://nuxt-api.test/api/posts/${route.params.id}`)
</script>

<template>
  <div class="container mx-auto w-1/2 py-8">
    <Title>{{ route.params.id }} | Post</Title>
    <h3 class="font-bold] text-3xl">
      <NuxtLink :to="`/posts/1`">{{ post.title }}</NuxtLink>
    </h3>
    <div class="post-meta flex items-center space-x-2 text-gray-700">
      <div>{{ post.created_at }}</div>
      <div>&middot;</div>
      <div>{{ post.user.name }}</div>
    </div>
    <div class="post-content mt-4">
      {{ post.body }}
    </div>
  </div>
</template>

<style scoped></style>
