import styles from '@/styles/modules/card.module.css';
import { Article, Tag } from '@/types/article';

export let ArticleCard = (props: any) => {
    const type = props.type;
    const article = props.article as Article;
    let url = article.image.src;
    

    if(!article.image.src.includes('data:image/'))
        url = `assets/images/${article.image.src}`
    

    let card = styles.card;

    if (type == 2)
        card += ' ' + styles.card_vertical;

    return (
        <div className={card} key={`${article.id}`}>
            <h3 className={styles.date}>{article.author} {new Date(article.date).toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" })}</h3>
            <div className={styles.image} style={{ backgroundImage: `url("${url}")` }}></div>
            
            <div className={styles.content}>
            <ul className={styles.ul}>
                <div style={{display:'flex', margin:'0 0 0 auto'}}>
                    {article.tags.map((tag: Tag) => {
                        return (
                            <li key={`${tag.id+tag.name}`}><span className={styles.tag} style={{ backgroundColor: tag.bgColor, color: tag.textColor }}>{tag.name}</span></li>
                        )
                    })}
                    </div>
                </ul>
                <h3 className={styles.title}>{article.title}</h3>
                <p className={styles.description}>{article.content}</p>
                
            </div>
        </div>
    );
}