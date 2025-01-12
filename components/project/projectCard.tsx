import { getImage } from '@/helpers/helper';
import styles from '@/styles/modules/github/project.module.css';
import { Project } from '@/types/project';




export let ProjectCard = (props: any) => {
    const type = props.type;
    const project = props.project as Project;

    let card = '';

    if (type == 2) {
        card = styles.card_vertical;
    }

    return (
        <div className={styles.card + ' ' + card}>
            <span className={styles.date}>{new Date(project.lastUpdate).toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" })}</span>
            <div className={styles.image} style={{ backgroundImage: `url("${getImage(project.language)}")` }}></div>
            <div className={styles.content}>
            <ul className={styles.ul}>
                    <li>
                        <span className={styles.tag}>
                            {new Date(project.createdAt).toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" })}
                        </span>
                    </li>
                    <li>
                        <span className={styles.tag}>
                            {project.language}
                        </span>
                    </li>
                </ul>
                <h3 className={styles.title}>{project.name.replace('_', ' ').replace('-', ' ')}</h3>
                <p className={styles.description}>{project.description}</p>
            </div>
        </div>
    );
}