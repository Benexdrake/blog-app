import { ArticleCard } from '../../components/blog/article_card'
import styles from '../../styles/modules/all_posts.module.css'
import { Article } from '../..//types/article'

type AllPostsType =
{
    articles:Article[];
}

export let AllPosts = (props:AllPostsType) => 
{
    const articles = props.articles as Article[]

    console.log('WHAT?:',props.articles);

    return (
        <div key='ALLPOSTS'>
            {articles && (
            <>
                <h1 className={styles.title}>All Projects</h1>
                <div className={styles.grid}>
                    {articles.map((a:Article) => {return (
                        <ArticleCard article={a} type={1} key={a.id}/>
                    )})}
                </div>
            </>
            )}
        </div>
    )
}