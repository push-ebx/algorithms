import axios from 'axios';
// тут импорт модели типо

interface Article {
  title: string;
  author: string;
  category: string;
  file_url: string;
}

const axios_proxy = axios.create({
  baseURL: `http://localhost:4000/api/articles/`
});

export const getArticleByTitle = async (title: string) => {
  try {
    if (title) return await axios_proxy.get(`/getByTitle?title=${title}`)
    else throw new Error("title param is empty")
  } catch (e) {
    console.log(e)
  }
}


export const createArticle = async (article: Article) => {
  try {
    return await axios_proxy.post(`/create`, article)
  } catch (e) {
    console.log(e)
  }
}

export const getAllArticles = async () => {
  try {
    return await axios_proxy.get(`/getAll`)
  } catch (e) {
    console.log(e)
  }
}