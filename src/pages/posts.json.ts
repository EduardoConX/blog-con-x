import { getCollection } from "astro:content";

export async function GET() {
  const [posts, categories] = await Promise.all([
    getCollection("posts"),
    getCollection("categories"),
  ]);
  const categoryNames = new Map(
    categories.map((category) => [category.id, category.data.name]),
  );

  return new Response(
    JSON.stringify(
      posts.map((post) => {
        const body = post.body || "";
        const categoryId = post.data.category.id;
        return {
          title: post.data.title,
          description: post.data.description,
          pubDate: post.data.pubDate,
          slug: post.data.slug,
          readingTime: Math.ceil(body.split(" ").length / 200),
          category: post.data.category,
          categoryName: categoryNames.get(categoryId) ?? categoryId,
        };
      }),
    ),
    {
      headers: { "Content-Type": "application/json" },
    },
  );
}
