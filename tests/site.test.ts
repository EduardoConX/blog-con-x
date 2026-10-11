import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

function readDistFile(path: string): string {
  return readFileSync(resolve(process.cwd(), "dist", path), "utf8");
}

describe("generated site", () => {
  it("renders article-specific title and description metadata", () => {
    const html = readDistFile("posts/array-iteration-methods/index.html");

    expect(html).toContain(
      "<title>Mastering Array Iteration Methods in JavaScript</title>",
    );
    expect(html).toContain(
      'content="A comprehensive guide to JavaScript array iteration methods, their use cases, and examples."',
    );
  });

  it("renders category-specific metadata", () => {
    const html = readDistFile("categories/algorithms/1/index.html");

    expect(html).toContain("<title>Algorithms | Blog Con X</title>");
    expect(html).toContain(
      'content="Articles about Algorithms on Blog Con X."',
    );
  });

  it("includes readable category names in the search index", () => {
    const posts = JSON.parse(readDistFile("posts.json")) as Array<{
      slug: string;
      categoryName: string;
    }>;
    const post = posts.find((entry) => entry.slug === "array-iteration-methods");

    expect(post?.categoryName).toBe("JavaScript / TypeScript");
  });
});