import { ArticleCard } from '@/components/article/article'
import { ProjectCard } from '@/components/project/projectCard'
import styles from '@/styles/modules/all_posts.module.css'
import { Article } from '@/types/article'
import { Project } from '@/types/project'

export let AllPosts = (props:any) => 
{
    const projects = props.projects as Project[]
    const articles = props.articles as Article[]

    return (
        <div key='ALLPOSTS'>

            {projects && (
            <>
                <h1 className={styles.title}>All Projects</h1>
                <div className={styles.grid}>
                    {projects.map((a:Project) => {return (
                        <ProjectCard project={a} type={1} key={a.id}/>
                    )})}
                </div>
            </>
            )}

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