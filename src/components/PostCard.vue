<script lang="ts" setup>
import { computed } from "vue";
import { SUBDOMAIN } from "@/consts";
import { type Post } from "../interfaces/Post";
import { Formatter } from "@/utils/formatter";
import UserIcon from "@/icons/UserIcon.vue";
import CalendarIcon from "@/icons/CalendarIcon.vue";
import ArrowRightIcon from "@/icons/ArrowRightIcon.vue";

const props = defineProps<{
  post: Post;
  category: string;
}>();

const url = computed(() => `/${SUBDOMAIN}posts/${props.post.slug}`);
</script>

<template>
  <div
    class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20"
  >
    <div class="px-6 space-y-3">
      <div class="flex items-center justify-between">
        <span
          class="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden border-transparent bg-secondary text-secondary-foreground text-xs"
          >{{ props.category }}</span
        ><span class="text-sm text-muted-foreground"
          >{{ post.readingTime }} min read</span
        >
      </div>

      <a :href="url">
        <h3
          class="font-semibold text-xl group-hover:text-primary transition-colors cursor-pointer"
        >
          {{ post.title }}
        </h3>
      </a>
    </div>
    <div class="px-6 space-y-4">
      <div class="text-muted-foreground text-base leading-relaxed line-clamp-3">
        {{ post.description }}
      </div>
      <div
        class="flex flex-col sm:flex-row items-center justify-between pt-2 gap-2 sm:gap-0"
      >
        <div class="flex items-center space-x-2 text-sm text-muted-foreground">
          <UserIcon />
          <span>Eduardo Pacheco</span>
          <CalendarIcon />
          <span>{{ Formatter.formatDate(post.pubDate) }}</span>
        </div>
        <a
          :href="url"
          class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] dark:hover:bg-accent/50 h-8 rounded-md gap-1.5 px-3 text-primary hover:text-primary-foreground hover:bg-primary"
          >Read more <ArrowRightIcon />
        </a>
      </div>
    </div>
  </div>
</template>
