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

  const res2 = await fetch(
    "https://eduardoconx.github.io/blog-con-x/categories.json"
  );
  const categories = await res2.json();

  const params = new URLSearchParams(window.location.search);
  query.value = params.get("q")?.toLowerCase() || "";

  filteredPosts.value = posts.value
    .filter(
      (post: Post) =>
        post.title.toLowerCase().includes(query.value) ||
        post.description.toLowerCase().includes(query.value) ||
        post.slug.toLowerCase().includes(query.value)
    )
    .map((post) => {
      const category = categories.find(
        (cat: { id: string }) => cat.id === post.category.id
      );
      return {
        ...post,
        category: category ? category : { id: "", name: "" },
      };
    });
});
</script>

<template>
  <div v-if="filteredPosts.length">
    <ul class="flex flex-col gap-8">
      <PostCard v-for="post in filteredPosts" :post="post" />
    </ul>
  </div>
  <p v-else class="text-gray-100">No posts found</p>
</template>
