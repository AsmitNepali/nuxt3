<script setup>
import { format } from 'date-fns'
const props = defineProps({
  post: {
    required: true,
    type: Object
  }
})
</script>

<template>
  <div class="post-container py-8">
    <h3 class="font-bold] text-3xl">
      <NuxtLink :to="`/posts/${props.post.id}`">{{ props.post.title }}</NuxtLink>
    </h3>
    <div class="post-meta flex items-center space-x-2 text-gray-700">
      <div>{{ format(new Date(props.post.created_at), 'MMMM dd, yyyy') }}</div>
      <div>&middot;</div>
      <div>{{ props.post.user.name }}</div>
    </div>
    <div class="post-preview mt-4 leading-relaxed">
      {{ props.post.body }}
    </div>
    <div class="mt-4">
      <NuxtLink
        :to="`/posts/${props.post.id}`"
        class="inline-block rounded bg-blue-700 px-4 py-2 text-white hover:bg-blue-800"
        >Read More</NuxtLink
      >
    </div>
  </div>
</template>

<style scoped></style>
