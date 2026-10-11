<script setup lang="ts">
import { onMounted, ref } from "vue";
import PostCard from "./PostCard.vue";
import type { Post } from "@/interfaces/Post";
import { filterPosts, getPostsUrl } from "../utils/search";

const posts = ref<Post[]>([]);
const query = ref("");
const filteredPosts = ref<Post[]>([]);

onMounted(async () => {
  const res = await fetch(getPostsUrl(import.meta.env.BASE_URL));

  posts.value = await res.json();

  const params = new URLSearchParams(window.location.search);
  query.value = params.get("q")?.toLowerCase() || "";
  filteredPosts.value = filterPosts(posts.value, query.value);
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
    />
  </div>
  <p v-else>No posts found</p>
</template>
