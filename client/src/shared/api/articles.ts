import axios from 'axios';
import $api from "./config";
import { Article, ArticleByCategory } from 'shared/model';

const axios_proxy = axios.create({
  baseURL: `http://localhost:4000/api/articles/`
});

export const getArticleByTitle = async (title: string): Promise<Article | undefined> => {
  if (title) {
    const res = await $api.get(`/articles/getByTitle?title=${title}`)
    if (!res.data) throw new Error("Article not found")
    return res.data
  }
  else throw new Error("Title param is empty")
}

export const createArticle = async (article: Article): Promise<string | undefined> => {
  const res = await $api.post(`/articles/create`, article)
  return res.data
}

export const editArticle = async (article: Article, old_title: string): Promise<string | undefined> => {
  const res = await $api.post(`/articles/edit`, {...article, old_title})
  return res.data
}

export const getAllArticles = async (): Promise<Article[] | undefined> => {
  const res = await $api.get(`/articles/getAll`)
  return res.data
}

export const getAllByCategories = async (): Promise<ArticleByCategory[] | undefined> => {
  const res = await $api.get(`/articles/getAllByCategories`)
  console.log(res)
  return res.data
}