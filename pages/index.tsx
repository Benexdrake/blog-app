import { Header } from "@/components/header/header";
import { RecentPosts } from "@/layouts/blog/recent_posts";
import { getAllArticles } from "@/services/article_service";

import styles from '@/styles/modules/header.module.css'

export default function Home(props:any)
{
  const articles = props.articles;


  return (
   <div className="main">
     <Header styles={styles}/>
     <br />
     <RecentPosts articles={articles.slice(0,4)}/>
     <br />
     All Blog Posts Layout
   </div>
  );
}


export async function getStaticProps()
{
  const articles = await getAllArticles();
  console.log('Hello')
  return {
    props: {
      articles
    }
  }
};