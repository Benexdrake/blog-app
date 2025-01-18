import styles from '@/styles/modules/blog/create/create_blog.module.css'
import { ArticleCard } from './article_card';
import { Article } from '@/types/article';

export default function PreviewArticle(props:any)
{
    const {headerImage, title, description, tags, content} = props;
    
    let t = tags.map((x:string) => {return {id:1, name:x, bgColor:'red', textColor:'white'}})
    const article = {id:1, title, content:description, image:{src:headerImage, alt:'Yes'}, teaser:'', date:new Date().toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" }), author:'Its a Me, Mario', tags:t}


    return (
        <div className={styles.block}>
            <h1 className={styles.header}>Preview</h1>
            <div className={styles.card}>
                    <ArticleCard article = {article}/>
            </div>
                <div style={{backgroundColor:'var(--color2)'}}>
                    <div className={styles.header_image} style={{backgroundImage:`url("${headerImage}")`}}></div>
                    <div className={styles.description}>
                        <h1>{title}</h1>
                        <p>{description}</p>
                        <div className={styles.tag_select}>
                                {tags.map((x:string) => {return ( <span className={styles.tag}>{x}</span> )})}
                        </div>
                    </div>
                    <div style={{borderTop:'1px solid var(--color4)'}}>
                        {content.map((x:any) => 
                        {
                            return (
                                <div className={styles.preview_content}>
                                    {x.title && (
                                        <h1>{x.title}</h1>
                                    )}
                                    {x.image && (
                                        <div style={{backgroundImage:`url("${x.image}")`}}></div>
                                    )}
                                    {x.description && (
                                        <p >{x.description}</p>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>
        </div>
    )
}