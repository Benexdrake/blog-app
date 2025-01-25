import styles from '@/styles/modules/header.module.css';

import { Header } from "@/components/header/header";
import { AllPosts } from "@/layouts/blog/all_posts";
import { RecentPosts } from "@/layouts/blog/recent_posts";

import { GetServerSidePropsContext } from "next";
import { getAllArticles } from "@/services/article_service";
import { Article } from "@/types/article";

interface BlogProps
{
  articles:Article[];
  page:number;
}

export default function Home(props: BlogProps) {
  const articles = props.articles;
  let page = props.page | 1;

  return (
    <div className="main">
      <Header styles={styles} header='the blog' />
      {
        page == 1 ?
          <>
            <br />
            <RecentPosts articles={articles.slice(0, 4)} />
            <br />
            <AllPosts articles={articles.slice(3, articles.length)} />
          </>
          :
          <>
            <AllPosts articles={articles} />
          </>
      }
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext)
{
  const articles = await getAllArticles(context.req.headers.host || '');
  
  return {
    props: {
      articles,
    }
  }
};