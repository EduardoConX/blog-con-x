<script setup lang="ts">
import { onMounted, ref } from "vue";
import PostCard from "./PostCard.vue";
import type { Post } from "@/interfaces/Post";

const posts = ref<Post[]>([]);
const query = ref("");
const filteredPosts = ref<Post[]>([]);

onMounted(async () => {
  const baseUrl = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  const res = await fetch(`${baseUrl}posts.json`);

  posts.value = await res.json();

  const params = new URLSearchParams(window.location.search);
  query.value = params.get("q")?.toLowerCase() || "";
  filteredPosts.value = posts.value.filter(
    (post: Post) =>
      post.title.toLowerCase().includes(query.value) ||
      post.description.toLowerCase().includes(query.value) ||
      post.slug.toLowerCase().includes(query.value),
  );
});
</script>

<template>
  <div class="mb-6">
    <h2 class="text-3xl md:text-4xl font-bold mb-2">Search Results</h2>
    <p class="text-muted-foreground">
      Showing {{ filteredPosts.length }} post{{
        filteredPosts.length !== 1 ? "s" : ""
      }}
    </p>
  </div>
  <div v-if="filteredPosts.length" class="grid gap-6 md:grid-cols-2">
    <PostCard
      v-for="post in filteredPosts"
      :post="post"
      :category="post.categoryName"
    />
  </div>
  <p v-else>No posts found</p>
</template>
