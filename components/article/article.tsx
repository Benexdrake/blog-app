import styles from '@/styles/modules/article.module.css';

export let Article = (props: any) => {


    const type = props.type;
    console.log(type)

    let a = "";
    let card = "";
    // let image = styles.image;

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
        <div className={card}>
            <a href="" className={a}>
                <div className={styles.image} style={{ backgroundImage: 'url("https://placehold.co/600x400")' }}></div>
                <div className={styles.content}>
                    <span className={styles.date}>Sunday, 1 Jan 2023</span>
                    <h3>UX review presentations</h3>
                    <p className={styles.description}>How do you create compelling presantations that wow your colleagues and impress your managers?</p>
                    <ul className={styles.ul}>
                        <li><span className={styles.tag}>Design</span></li>
                        <li><span className={styles.tag}>Research</span></li>
                        <li><span className={styles.tag}>Presantation</span></li>
                    </ul>
                </div>
            </a>
        </div>
    );
}