import styles from '@/styles/modules/card.module.css';
import { Article } from '@/types/article';

type ArticleCardType =
{
    article:Article,
    type:number
}

export let ArticleCard = (props: ArticleCardType) => {
    const {article, type} = props;

    let card = styles.card;

    if (type == 2)
        card += ' ' + styles.card_vertical;

    return (
        <div className={card} key={`${article.id}`}>
            {/* <h3 className={styles.date}>{article.author} {new Date(article.date).toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" })}</h3> */}
            <div className={styles.image} style={{ backgroundImage: `url("${article.headerImage}")` }}></div>
            
            <div className={styles.content}>
            <ul className={styles.ul}>
                <div style={{display:'flex', margin:'0 0 0 auto'}}>
                    {article.tags.map((tag: string) => {
                        return (
                            <li key={`${crypto.randomUUID()}`}><span className={styles.tag} >{tag}</span></li>
                        )
                    })}
                    </div>
                </ul>
                <h3 className={styles.title}>{article.title}</h3>
                <p className={styles.description}>{article.description}</p>
                
            </div>
        </div>
    );
}