import styles from '@/styles/modules/create_blog.module.css'
import { ArticleCard } from './article';
import { Article } from '@/types/article';

export default function PreviewArticle(param:any)
{
    const {headerImage, description, tags, title} = param;
    
    let t = tags.map((x:string) => {return {id:1, name:x, bgColor:'red', textColor:'white'}})

    let article:Article = {id:1, title, content:description, image:{src:headerImage, alt:'Yes'}, teaser:'', date:new Date().toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" }), author:'Its a Me, Mario', tags:t}



    return (
        <div className={styles.block}>
                <h1 className={styles.header}>Preview</h1>
                    <div className={styles.card}>
                    <ArticleCard article = {article}/>
                    </div>
                    <div>
                        <br />
                        <div className={styles.header_image} style={{backgroundImage:`url("${headerImage}")`}}></div>
                        <h1>{title}</h1>
                        <p>{description}</p>
                        <div className={styles.tag_select}>
                                {tags.map((x:string) => {return ( <span className={styles.tag}>{x}</span> )})}
                        </div>
                        <br />
                        <hr />
                    </div>
                </div>
    )
}