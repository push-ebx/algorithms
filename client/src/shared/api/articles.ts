import axios from 'axios';
import { Article } from 'shared/model';
// тут импорт модели типо

const axios_proxy = axios.create({
  baseURL: `http://localhost:4000/api/articles/`
});

export const getArticleByTitle = async (title: string): Promise<Article | undefined> => {
  try {
    if (title) {
      const res = await axios_proxy.get(`/getByTitle?title=${title}`)
      return res.data
    }
    else throw new Error("title param is empty")
  } catch (e) {
    console.log(e)
  }
}


export const createArticle = async (article: Article): Promise<string | undefined> => {
  try {
    const res = await axios_proxy.post(`/create`, article)
    return res.data
  } catch (e) {
    console.log(e)
  }
}

export const getAllArticles = async (): Promise<Article[] | undefined> => {
  try {
    const res = await axios_proxy.get(`/getAll`)
    return res.data
  } catch (e) {
    console.log(e)
  }
}