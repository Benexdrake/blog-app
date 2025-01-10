import { ArticleBlock } from '@/components/article/article'
import styles from '@/styles/modules/all_posts.module.css'
import { Article } from '@/types/article'

export let AllPosts = (props:any) => 
{
    const articles = props.articles as Article[]

    return (
        <div>
            <h1 className={styles.title}>All Blog Posts</h1>
            <div className={styles.grid}>
                {articles.map((a:Article) => {return (<ArticleBlock article={a} type={1}/>)})}
            </div>
        </div>
    )
}