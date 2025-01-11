import styles from '@/styles/modules/project.module.css';
import { Project } from '@/types/project';


export let ProjectCard = (props: any) => 
{
    const type = props.type;
    const project = props.project as Project;
    
    let a = "";
    let card = "card ";

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
        <div className={card + ' ' + styles.card} key={`${project.id}`}>
            <a href={project.url} className={a}>
            <span className={styles.date}>{new Date(project.lastUpdate).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"})}</span>
                <div className={styles.image} style={{ backgroundImage: `url("https://placehold.co/600x400")` }}></div>
                <div className={styles.content}>
                    {/* <span className={styles.date}>{new Date(project.lastUpdate).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}</span> */}
                    <h3 className={styles.title}>{project.name.replace('_',' ').replace('-',' ')}</h3>
                    <p className={styles.description}>{project.description}</p>
                    <ul className={styles.ul}>
                        <li>
                            <span className={styles.tag}>
                                Created At: {new Date(project.createdAt).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}
                            </span>
                        </li>
                        <li>
                            <span className={styles.tag}>
                                {project.language}
                            </span>
                        </li>
                    </ul>
                </div>
            </a>
        </div>
    );
}