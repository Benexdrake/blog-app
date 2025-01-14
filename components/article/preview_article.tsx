import styles from '@/styles/modules/create_blog.module.css'

export default function PreviewArticle(param:any)
{
    const {headerImage, description, tags, title} = param;
    return (
        <div className={styles.block}>
                <h1 className={styles.header}>Preview</h1>
                <div className={styles.information}>
                    {headerImage !== '' &&
                        <div className={styles.header_image} style={{ backgroundImage: `url('${headerImage}')` }}></div>
                    }
                    <h1>{title}</h1>
                    <textarea name="" id="" className={styles.description_view} value={description} readOnly disabled></textarea>
                    <div className={styles.tag_select}>
                        {tags.map((x:string) => { return (<div key={x} className={styles.tag}>{x}</div>) })}
                    </div>
                </div>
            </div>
    )
}