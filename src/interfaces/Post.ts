export interface Post {
  title: string;
  description: string;
  pubDate: Date;
  slug: string;
  category: {
    id: string;
  };
}
