export type ArticleSource = { label: string; url: string };

export type Category = {
  title: string;
  slug: string;
  description: string;
  accent: string;
};

export type Author = {
  name: string;
  slug: string;
  bio?: string;
};

export type Article = {
  title: string;
  slug: string;
  excerpt: string;
  category: Category;
  location: string;
  readingTime: number;
  body: string[];
  keyPoints: string[];
  sources: ArticleSource[];
  author?: Author;
  publishedAt?: string;
  reviewedAt?: string;
  status: 'review' | 'published';
  coverImage?: { url: string; alt: string; rights: string };
};
