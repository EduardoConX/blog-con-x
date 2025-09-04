import { getCollection } from "astro:content";

export async function GET() {
  const categories = await getCollection("categories");
  return new Response(
    JSON.stringify(
      categories.map((category) => ({
        id: category.id,
        name: category.data.name,
      }))
    ),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}
