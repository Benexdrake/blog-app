import styles from '@/styles/modules/blog/article.module.css';
import { Article,Tag } from '@/types/article';

export let ArticleCard = (props: any) => 
{
    const type = props.type;
    const article = props.article as Article;
    
    let card = styles.card;

    if(type == 2)
        card += ' ' + styles.card_vertical;

    return (
        <div className={card} key={`${article.id}`}>
            <div className={styles.image} style={{ backgroundImage: `url("./assets/images/${article.image.src}")` }}></div>
            <div className={styles.content}>
            <h3 className={styles.date}>{article.author} {new Date(article.date).toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" })}</h3>
            <h3 className={styles.title}>{article.title}</h3>
            <p className={styles.description}>{article.content}</p>
            <ul className={styles.ul}>
                         {article.tags.map((tag:Tag)=> {return (
                             <li><span key={`${tag.id}`} className={styles.tag} style={{backgroundColor:tag.bgColor, color:tag.textColor}}>{tag.name}</span></li>
                         )})}
                     </ul>
            </div>
        </div>


        // <div className={card + ' ' + styles.card} key={`${article.id}`}>
        //     <a href="" className={a}>
        //         <div className={styles.image} style={{ backgroundImage: `url("./assets/images/${article.image.src}")` }}></div>
        //         <div className={styles.content}>
        //             <span className={styles.date}>{article.author} {article.date}</span>
        //             <h3>{article.title}</h3>
        //             <p className={styles.description}>{article.content}</p>
        //             <ul className={styles.ul}>
        //                 {article.tags.map((tag:Tag)=> {return (
        //                     <li><span key={`${tag.id}`} className={styles.tag} style={{backgroundColor:tag.bgColor, color:tag.textColor}}>{tag.name}</span></li>
        //                 )})}
        //             </ul>
        //         </div>
        //     </a>
        // </div>
    );
}