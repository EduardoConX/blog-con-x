<script setup lang="ts">
import { onMounted, ref } from "vue";
import PostCard from "./PostCard.vue";
import { type Post } from "../interfaces/Post";

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
      <PostCard v-for="post in filteredPosts" :post="post" />
    </ul>
  </div>
  <p v-else>No posts found</p>
</template>
