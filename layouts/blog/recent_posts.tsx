import { ProjectCard } from "@/components/article/projectCard";
import styles from '@/styles/modules/recent.module.css'

export let RecentPosts = (props:any) => 
{
    const projects = props.projects;
    
    return (
        <>
        <h1 className={styles.title}>All Recent Posts</h1>
        <div className={styles.main}>
            <div className={styles.first}>
                {projects.length > 0 && <ProjectCard type={1} project={projects[0]}/>}
            </div>
            <div className={styles.sub}>
                {projects.length > 0 && <ProjectCard type={2} project={projects[1]}/>}
                {projects.length > 0 && <ProjectCard type={2} project={projects[2]}/>}
            </div>
            {projects.length > 0 && <ProjectCard type={3} project={projects[3]}/>}
        </div>
       
        </>
    );
}