import styles from '@/styles/modules/article.module.css';

export let Article = (props:any) =>
{
    const type = props.type;
    console.log(type)

    let a = "";
    let card = "";
    let image = styles.image;

    switch(type)
    {
        case 1:
            a = styles.a1;
            card = styles.card1;
            break;
        case 2:
            a = styles.a2;
            card = styles.card2;
            break;
        case 3:
            a = styles.a1;
            card = styles.card3;
            
    }


    return (
        <div className={card}>
                <a href="" className={a}>
                <div className={styles.image}  style={{backgroundImage:'url("https://placehold.co/600x400")'}}></div>
                <div className={styles.content}>
                    <span>Text</span>
                    <h1></h1>
                    <p></p>
                    <ul className={styles.ul}>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </a>
        </div>
    );
}