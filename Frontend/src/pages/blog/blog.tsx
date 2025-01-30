import styles from '@/styles/modules/header.module.css';
import { Header } from '@/components/header/header'
import { RecentPosts } from '@/layouts/blog/recent_posts';
import { AllPosts } from '@/layouts/blog/all_posts';
import { useEffect, useState } from 'react';
import { getAllArticles } from '@/services/article_service';
import { Article } from '@/types/article';

const Blog = () =>
{
  const [articles, setArticles] = useState<Article[]>([])
  let page = 1;

  useEffect( () => 
  {
    const fetchData = async () =>
    {
      setArticles(await getAllArticles());
    }
    fetchData();

  },[]);

  

  return (
    <div id='main'>
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
  )
}

export default Blog