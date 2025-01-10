import styles from '@/styles/modules/article.module.css';
import { Article,Tag } from '@/types/article';

export let ArticleBlock = (props: any) => 
{
    const type = props.type;
    const article = props.article as Article;
    

    let a = "";
    let card = "";

    switch (type) {
        case 1:
            a = styles.a1;
            card = styles.card1;
            break;
        case 2:
            a = styles.a2;
            card = styles.card2;
            break;
        case 3:
            a = styles.a3;
            card = styles.card3;
    }

    return (
        <div className={card} id={`${article.id}`}>
            <a href="" className={a}>
                <div className={styles.image} style={{ backgroundImage: `url("./assets/images/${article.image.src}")` }}></div>
                <div className={styles.content}>
                    <span className={styles.date}>{article.author} {article.date}</span>
                    <h3>{article.title}</h3>
                    <p className={styles.description}>{article.content}</p>
                    <ul className={styles.ul}>
                        {article.tags.map((tag:Tag)=> {return (
                            <li><span id={`${tag.id}`} className={styles.tag} style={{backgroundColor:tag.bgColor, color:tag.textColor}}>{tag.name}</span></li>
                        )})}
                    </ul>
                </div>
            </a>
        </div>
    );
}