export interface Post {
  title: string;
  description: string;
  pubDate: Date;
  slug: string;
  body: string;
  category: {
    id: string;
  };
}
