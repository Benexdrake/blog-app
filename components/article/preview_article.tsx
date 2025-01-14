import styles from '@/styles/modules/create_blog.module.css'
import { ArticleCard } from './article';
import { Article } from '@/types/article';

export default function PreviewArticle(param:any)
{
    const {headerImage, description, tags, title} = param;
    
    let article:Article = {id:1, title, content:description, image:{src:headerImage, alt:'Yes'}, teaser:'', date:new Date().toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" }), author:'Its a Me, Mario', tags:[{id:1, name:'Production', bgColor:'red', textColor:'white'}]}



    return (
        <div className={styles.block}>
                <h1 className={styles.header}>Preview</h1>
                <div className={styles.information}>
                    <ArticleCard article = {article}/>
                </div>
            </div>
    )
}