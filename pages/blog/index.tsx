import { Header } from "@/components/header/header";
import { AllPosts } from "@/layouts/blog/all_posts";
import { RecentPosts } from "@/layouts/blog/recent_posts";
import { useSearchParams } from 'next/navigation'

import styles from '@/styles/modules/header.module.css'
import { Project } from "@/types/project";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import { getAllArticles } from "@/services/article_service";

export default function Home(props: any) {
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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  let page = context.query.page || 1
  const articles = await getAllArticles();

  return {
    props: {
      page,
      articles,
    }
  }
};