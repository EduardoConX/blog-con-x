import { getCollection } from "astro:content";

export async function GET() {
  const posts = await getCollection("posts");
  return new Response(
    JSON.stringify(
      posts.map((post) => ({
        title: post.data.title,
        description: post.data.description,
        slug: post.slug,
      }))
    ),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}
