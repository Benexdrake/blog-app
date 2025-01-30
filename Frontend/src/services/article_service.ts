import { Article } from "@/types/article";
import axios from "axios";
// dotenv.config();

const api_url = `${import.meta.env.VITE_API}/articles`

export let getAllArticles = async () =>
{
  return await axios.get(api_url).then(x => {return x.data})
}

export const getArticleByID = async (url:string, id:string) =>
{
  return await fetch(`http://${url}/api/blog/${id}`)
}

export const getArticlesByUserID = async (url:string, userId:string) =>
{
  return await fetch(`http://${url}/api/blog/${userId}`)
}

export const sendArticle = async (article:Article) =>
{ 
  await axios.post(api_url, article)
}