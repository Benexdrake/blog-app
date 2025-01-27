import { ArticleCard } from "../../components/blog/article_card";
import styles from '../../styles/modules/recent.module.css'

export let RecentPosts = (props: any) => {
    const articles = props.articles;

    return (

        <>
            {articles && (
                <>
                    <h1 className={styles.title}>All Recent Posts</h1>
                    <div className={styles.main}>
                        <div className={styles.first}>
                            {articles.length > 0 && <ArticleCard type={1} article={articles[0]} />}
                        </div>
                        <div className={styles.sub}>
                            {articles.length > 0 && <ArticleCard type={2} article={articles[1]} />}
                            {articles.length > 0 && <ArticleCard type={2} article={articles[2]} />}
                        </div>
                    </div>
                </>
            )}
        </>
    );
}