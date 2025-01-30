import { Article } from "@/types/article";

export let getAllArticles = async (url:string) =>
{
  console.log(url);
  
  // return await fetch(`http://${url}/api/blog`).then(x => {return x.json()})
  return articles;
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
  articles.push(article)
  console.log(articles);
  
}

const articles:Article[] = []