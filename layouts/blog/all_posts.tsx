import { ProjectCard } from '@/components/project/projectCard'
import styles from '@/styles/modules/all_posts.module.css'
import { Project } from '@/types/project'

export let AllPosts = (props:any) => 
{
    const projects = props.projects as Project[]

    return (
        <div key='ALLPOSTS'>
            <h1 className={styles.title}>All Blog Posts</h1>
            <div className={styles.grid}>
                {projects.map((a:Project) => {return (
                    <ProjectCard project={a} type={1} key={a.id}/>
                    )})}
            </div>
        </div>
    )
}