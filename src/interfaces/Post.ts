export interface Post {
  title: string;
  description: string;
  pubDate: Date;
  slug: string;
  readingTime: number;
  category: {
    id: string;
  };
}
