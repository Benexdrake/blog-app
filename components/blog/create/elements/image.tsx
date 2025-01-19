import styles from '@/styles/modules/blog/create/elements/create_image.module.css'
import { BlogCreateElement } from '@/types/blog_create_element'
import { useState } from 'react'

export default function CreateImage()
{
    const [img, setImg] = useState<BlogCreateElement>({type:'image', options:{backgroundPosition:'center', backgroundSize:'cover', backgroundImage:'url("/assets/images/CSharp.jpg")'}})
    
    return (
        <div>
            <div className={styles.arrows}>
                <div className={styles.arrow_up}></div>
                <div className={styles.arrow_down}></div>
            </div>
            <div className={styles.main}>
                <div className={styles.backgroundImage} style={img.options}></div>
                <div className={styles.menu}>
                        <div className={styles.field}></div>
                        <div className={styles.field}><div className={styles.button}>1</div></div>
                        <div className={styles.field}><div className={styles.button} style={{width:'70px'}}>Cover</div></div>
                        <div className={styles.field}></div>
                        <div className={styles.field}><div className={styles.button}>3</div></div>
                        <div className={styles.field}><div className={styles.button}>5</div></div>
                        <div className={styles.field}><div className={styles.button}>4</div></div>
                        <div className={styles.field}></div>
                        <div className={styles.field}></div>
                        <div className={styles.field}><div className={styles.button}>2</div></div>
                        <div className={styles.field}></div>
                        <div className={styles.field}></div>
                        <div className={styles.field}><div className={styles.button_upload}>UPLOAD</div></div>
                </div>
            </div>
        </div>
    )
}