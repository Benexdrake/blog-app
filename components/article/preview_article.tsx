import styles from '@/styles/modules/create_blog.module.css'
import { ArticleCard } from './article';
import { Article } from '@/types/article';

export default function PreviewArticle(param:any)
{
    const {getHeader} = param;
    let article = {}

    if(getHeader)
    {
        let t = getHeader.tags.map((x:string) => {return {id:1, name:x, bgColor:'red', textColor:'white'}})
        article = {id:1, title:getHeader.title, content:getHeader.description, image:{src:getHeader.image, alt:'Yes'}, teaser:'', date:new Date().toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" }), author:'Its a Me, Mario', tags:t}
    }
    




    return (
        <div className={styles.block}>
                <h1 className={styles.header}>Preview</h1>
                {getHeader && (
                    <>
                    <div className={styles.card}>
                    <ArticleCard article = {article}/>
                    </div>
                    <div>
                        <br />
                        <div className={styles.header_image} style={{backgroundImage:`url("${getHeader.image}")`}}></div>
                        <h1>{getHeader.title}</h1>
                        <p>{getHeader.description}</p>
                        <div className={styles.tag_select}>
                                {getHeader.tags.map((x:string) => {return ( <span className={styles.tag}>{x}</span> )})}
                        </div>
                        <br />
                        <hr />
                    </div>
                </>)}
                </div>
    )
}