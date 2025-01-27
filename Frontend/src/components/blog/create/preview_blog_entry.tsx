import styles from '@/styles/modules/blog/create/preview_blog.module.css'
import { ArticleCard } from '@/components/blog/article_card';
import { Article } from '@/types/article';

export default function PreviewBlogEntry(props:any)
{
    const {header, children} = props;
    
    let t = header.tags.map((x:string) => {return {id:1, name:x, bgColor:'red', textColor:'white'}})
    const article:Article = {id:1, title:header.title, content:header.description, image:{src:header.image, alt:'Yes'}, teaser:'', date:new Date().toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" }), author:'Its a Me, Mario', tags:t}


    return (
        <div className={styles.block}>
            <h1 className={styles.header}>Preview</h1>
            <div className={styles.card}>
                    <ArticleCard article = {article}/>
            </div>
                <div>
                    <div className={styles.header_image} style={{backgroundImage:`url("${header.image}")`}}></div>
                    <div className={styles.description}>
                        <h1>{header.title}</h1>
                        <p>{header.description}</p>
                        <div className={styles.tag_select}>
                                {header.tags.map((x:string) => {return ( <span className={styles.tag}>{x}</span> )})}
                        </div>
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
        </div>
    )
}