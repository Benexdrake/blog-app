import { ArticleBlock } from "@/components/article/article";
import styles from '@/styles/modules/recent.module.css'

export let RecentPosts = (props:any) => 
{
    const articles = props.articles;
    return (
        <>
        <h1 className={styles.title}>All Recent Posts</h1>
        <div className={styles.main}>
            <div>
                {articles.length > 0 && <ArticleBlock type={1} article={articles[0]}/>}
            </div>
            <div className={styles.sub}>
            {articles.length > 1 && <ArticleBlock type={2} article={articles[1]}/>}
                
            {articles.length > 2 && <ArticleBlock type={2} article={articles[2]}/>}
            </div>
            {articles.length > 3 && <ArticleBlock type={3} article={articles[3]}/>}
        </div>
       
        </>
    );
}