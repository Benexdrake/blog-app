export let getAllArticles = async (url:string) =>
{
  return await fetch(`http://${url}/api/blog`).then(x => {return x.json()})
}

export const getArticleByID = async (url:string, id:string) =>
{
  return await fetch(`http://${url}/api/blog/${id}`)
}

export const getArticlesByUserID = async (url:string, userId:string) =>
{
  return await fetch(`http://${url}/api/blog/${userId}`)
}