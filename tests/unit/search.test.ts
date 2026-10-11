import { describe, expect, it } from "vitest";
import type { Post } from "../../src/interfaces/Post";
import { filterPosts, getPostsUrl } from "../../src/utils/search";

const posts: Post[] = [
  {
    title: "Array Iteration Methods",
    description: "Methods for processing JavaScript arrays.",
    pubDate: new Date("2025-01-17"),
    slug: "array-iteration-methods",
    readingTime: 3,
    categoryName: "JavaScript / TypeScript",
    category: { id: "jsts" },
  },
  {
    title: "Backtracking Algorithm",
    description: "Explore a search algorithm.",
    pubDate: new Date("2025-01-23"),
    slug: "backtracking",
    readingTime: 2,
    categoryName: "Algorithms",
    category: { id: "algorithms" },
  },
];

describe("filterPosts", () => {
  it("matches title, description, and slug without case sensitivity", () => {
    expect(filterPosts(posts, "ARRAY")).toEqual([posts[0]]);
    expect(filterPosts(posts, "search algorithm")).toEqual([posts[1]]);
    expect(filterPosts(posts, "backtracking")).toEqual([posts[1]]);
  });

  it("returns every post for an empty query", () => {
    expect(filterPosts(posts, "")).toEqual(posts);
  });

  it("returns no posts when nothing matches", () => {
    expect(filterPosts(posts, "nonexistent")).toEqual([]);
  });
});

describe("getPostsUrl", () => {
  it("adds posts.json to a base URL with or without a trailing slash", () => {
    expect(getPostsUrl("/blog-con-x")).toBe("/blog-con-x/posts.json");
    expect(getPostsUrl("/blog-con-x/")).toBe("/blog-con-x/posts.json");
  });

  it("works at the site root", () => {
    expect(getPostsUrl("/")).toBe("/posts.json");
  });
});