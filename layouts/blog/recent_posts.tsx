import { ArticleCard } from "@/components/article/article";
import { ProjectCard } from "@/components/project/projectCard";
import styles from '@/styles/modules/recent.module.css'

export let RecentPosts = (props: any) => {
    const projects = props.projects;
    const articles = props.articles;

    return (

        <>
            {projects && (
                <>
                    <h1 className={styles.title}>All Recent Posts</h1>
                    <div className={styles.main}>
                        <div className={styles.first}>
                            {projects.length > 0 && <ProjectCard type={1} project={projects[0]} />}
                        </div>
                        <div className={styles.sub}>
                            {projects.length > 0 && <ProjectCard type={2} project={projects[1]} />}
                            {projects.length > 0 && <ProjectCard type={2} project={projects[2]} />}
                        </div>
                    </div>
                </>
            )}

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