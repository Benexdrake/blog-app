import styles from '@/styles/modules/create_blog.module.css'
import { ChangeEvent, MouseEvent, useState } from 'react'

export default function CreateArticleHeader(param:any)
{
    const {tags,setTags, setHeaderImage, setTitle, setDescription} = param;


    const headerImageHandler = (e: ChangeEvent<HTMLInputElement>) => 
        {
            if (!e.target.files) return;
    
            const file = e.target.files[0];
    
            const reader = new FileReader();
            reader.readAsDataURL(file)
    
            reader.onload = () => {
                const result = reader.result;
                if (result)
                    setHeaderImage(result as string)
            }
        }
    
        const titleHandler = (e: ChangeEvent<HTMLInputElement>) => 
        {
            setTitle(e.target.value)
        }
    
        const descriptionHandler = (e: ChangeEvent<HTMLTextAreaElement>) => 
        {
            setDescription(e.target.value)
        }
    
        const tagHandler = (e: any) => 
        {
            e.target.children[0].checked = !e.target.children[0].checked;
    
            if (e.target.children[0].checked) 
            {
                if(tags.length < 3)
                {
                    e.target.style.borderColor = 'green'
                    let tags_copy = [...tags];
                    tags_copy.push(e.target.innerText)
                    setTags(tags_copy)
                }
            }
            else
            {
                e.target.style.borderColor = 'var(--color3)'
                setTags(tags.filter((x:string) => x !== e.target.innerText))
            }
        }


    return (
        <div className={styles.block}>
                <h1 className={styles.header}>Create</h1>
                <div className={styles.information}>
                    <input className={styles.input} onChange={titleHandler} placeholder='Title' type="text" name="" id="" />
                    <input className={styles.input} onChange={headerImageHandler} type="file" name="" id="" />
                    <textarea className={styles.description} onChange={descriptionHandler} name="" id="" placeholder='Enter a short Desciption...'></textarea>
                    <div className={styles.tag_select}>

                        <div className={styles.tag} onClick={tagHandler}>
                            <input id='abc' type="checkbox" hidden /> Research
                        </div>

                        <div className={styles.tag} onClick={tagHandler}>
                            <input id='abc' type="checkbox" hidden /> Presentation
                        </div>

                        <div className={styles.tag} onClick={tagHandler}>
                            <input id='abc' type="checkbox" hidden /> Design
                        </div>

                    </div>
                </div>
            </div>
    )
}