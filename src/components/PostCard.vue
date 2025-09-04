<script lang="ts" setup>
import { computed } from "vue";
import { SUBDOMAIN } from "@/consts";
import { type Post } from "../interfaces/Post";
import { Formatter } from "@/utils/formatter";

const props = defineProps<{
  post: Post;
}>();

const url = computed(() => `/${SUBDOMAIN}posts/${props.post.slug}`);
</script>

<template>
  <li class="bg-gray-800 shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:p-6">
      <h3 class="text-lg leading-6 font-medium text-gray-100">
        <a :href="url" class="hover:underline"> {{ post.title }} </a>
      </h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-400">
        {{ Formatter.formatDate(post.pubDate) }} | {{ post.category.name }}
      </p>
      <p class="mt-2 text-sm text-gray-300">{{ post.description }}</p>
      <div class="mt-3">
        <a :href="url" class="text-blue-400 hover:text-blue-300">
          Read more <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  </li>
</template>
