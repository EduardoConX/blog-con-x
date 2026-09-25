import { getCollection } from "astro:content";

export async function GET() {
  const posts = await getCollection("posts");
  return new Response(
    JSON.stringify(
      posts.map((post) => {
        const body = post.body || "";
        return {
          title: post.data.title,
          description: post.data.description,
          pubDate: post.data.pubDate,
          slug: post.data.slug,
          readingTime: Math.ceil(body.split(" ").length / 200),
          category: post.data.category,
        };
      }),
    ),
    {
      headers: { "Content-Type": "application/json" },
    },
  );
}
