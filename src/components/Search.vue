<script setup lang="ts">
import { onMounted, ref } from "vue";

interface Post {
  title: string;
  description: string;
  slug: string;
}

const posts = ref<Post[]>([]);
const query = ref("");
const filteredPosts = ref<Post[]>([]);

onMounted(async () => {
  const res = await fetch(
    "https://eduardoconx.github.io/blog-con-x/posts.json"
  );
  posts.value = await res.json();

  const params = new URLSearchParams(window.location.search);
  query.value = params.get("q")?.toLowerCase() || "";
  filteredPosts.value = posts.value.filter(
    (post: Post) =>
      post.title.toLowerCase().includes(query.value) ||
      post.description.toLowerCase().includes(query.value) ||
      post.slug.toLowerCase().includes(query.value)
  );
});
</script>

<template>
  <div v-if="filteredPosts.length">
    <ul class="flex flex-col gap-8">
      <li v-for="post in filteredPosts" :key="post.slug" class="mb-4">
        <a
          :href="`/posts/${post.slug}`"
          class="text-blue-400 hover:text-blue-300 text-xl"
        >
          {{ post.title }}
        </a>
        <p class="text-gray-400">{{ post.description }}</p>
      </li>
    </ul>
  </div>
  <p v-else>No posts found</p>
</template>
