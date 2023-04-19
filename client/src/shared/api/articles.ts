import axios from 'axios';

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