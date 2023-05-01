export interface Article {
  id?: number,
  title?: string;
  author?: string;
  file_url?: string;
  category?: string;
  subcategory?: string;
}

export interface ArticleByCategory {
  category: {
    subcategory: [Article]
  }
}