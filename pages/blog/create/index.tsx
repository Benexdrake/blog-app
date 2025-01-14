import styles from '@/styles/modules/create_blog.module.css'
import { ChangeEvent, useState } from 'react'

export default function CreateBlog()
{
    const [headerImage, setHeaderImage] = useState('');



    
    const headerImageHandler = async (event:ChangeEvent<HTMLInputElement>) => 
    {
        if(!event.target.files) return;
        
        const file = event.target.files[0];

        const reader = new FileReader();
        reader.readAsDataURL(file)

        reader.onload = () => 
        {
            const result = reader.result;
            if(result)
                setHeaderImage(result as string)
        }
    }



    return (
        <div className={styles.main}>
            <div className={styles.block}>
                <h1 className={styles.header}>Create</h1>
                <div className={styles.information}>
                    {headerImage !== '' && 
                        <div className={styles.header_image} style={{backgroundImage:`url('${headerImage}')`}}></div>
                    } 
                    <input className={styles.input} placeholder='Title' type="text" name="" id="" />
                    <input className={styles.input} onChange={headerImageHandler} type="file" name="" id="" />
                    <textarea className={styles.description} name="" id="" placeholder='Enter a short Desciption...'></textarea>
                    <div className={styles.tag_select}>

                        <div className={styles.tag}>
                            <input id='abc' type="checkbox" />
                            <span> Research</span>
                        </div>

                        <div className={styles.tag}>
                            <input type="checkbox" />
                            <span> Presentation</span>
                        </div>

                        <div className={styles.tag}>
                            <input type="checkbox" />
                            <span> Design</span>
                        </div>

                        <div className={styles.tag}>
                            <input type="checkbox" />
                            <span> Research</span>
                        </div>

                        <div className={styles.tag}>
                            <input type="checkbox" />
                            <span> Presentation</span>
                        </div>

                        <div className={styles.tag}>
                            <input type="checkbox" />
                            <span> Design</span>
                        </div>

                    </div>
                </div>
            </div>
            <div className={styles.block}>
                <h1 className={styles.header}>Preview</h1>
            </div>
        </div>
    )
}