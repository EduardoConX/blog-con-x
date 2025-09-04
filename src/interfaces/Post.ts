interface Category {
  id: string;
  name: string;
}

export interface Post {
  title: string;
  slug: string;
  description: string;
  pubDate: Date;
  categoryId: string;
  category: Category;
}
