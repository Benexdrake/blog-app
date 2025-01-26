import { ChangeEvent } from "react";

import styles from '@/styles/modules/blog/create/header.module.css'
import Card from "./elements/card";

export default function Header(props:any)
{
    const {header, setHeader} = props;

    const headerImageHandler = (e: ChangeEvent<HTMLInputElement>) => 
    {
        if (!e.target.files) return;

        const file = e.target.files[0];

        const reader = new FileReader();
        
        reader.readAsDataURL(file)

        reader.onload = () => 
        {
            const result = reader.result;
            if (result)
            {
                const image = result as string
                setHeader({image, title:header.title, description:header.description, tags:header.tags})
            }
        }
    }
    
    const titleHandler = (e: ChangeEvent<HTMLInputElement>) => 
    {
        const title = e.target.value
        setHeader({image:header.image, title, description:header.description, tags:header.tags})
    }

    const descriptionHandler = (e: ChangeEvent<HTMLTextAreaElement>) => 
    {
        header.description = e.target.value;
        
        setHeader({image:header.image, title:header.title, description:header.description, tags:header.tags})
    }

    const tagHandler = (e: any) => 
    {
        e.target.children[0].checked = !e.target.children[0].checked;

        if (e.target.children[0].checked) 
        {
            if(header.tags.length > 2)
                return;
            e.target.style.borderColor = 'green'
            let tags_copy = [...header.tags];
            tags_copy.push(e.target.innerText)
            setHeader({image:header.image, title:header.title, description:header.description, tags:tags_copy})
        }
        else
        {
            e.target.style.borderColor = 'var(--color3)'
            const tags = header.tags.filter((x:string) => x !== e.target.innerText)
            setHeader({image:header.image, title:header.title, description:header.description, tags})
        }
    }

    return (
        <Card>
            <header>
                <div>
                    <input type="text" className={styles.title} onChange={titleHandler}/>
                </div>
                <div>
                    <textarea name="" id="" className={styles.content} onChange={descriptionHandler}></textarea>
                </div>
                <div className={styles.image}>
                    <input type="file" name="" id="" onChange={headerImageHandler}/>
                </div>
                <div className={styles.tags}>
                    <span className={styles.tag} onClick={tagHandler}><input type="checkbox"/> Tag1</span>
                    <span className={styles.tag} onClick={tagHandler}><input type="checkbox"/> Tag1</span>
                    <span className={styles.tag} onClick={tagHandler}><input type="checkbox"/> Tag1</span>
                    <span className={styles.tag} onClick={tagHandler}><input type="checkbox"/> Tag1</span>
                    <span className={styles.tag} onClick={tagHandler}><input type="checkbox"/> Tag1</span>
                    <span className={styles.tag} onClick={tagHandler}><input type="checkbox"/> Tag1</span>
                    <span className={styles.tag} onClick={tagHandler}><input type="checkbox"/> Tag1</span>
                    <span className={styles.tag} onClick={tagHandler}><input type="checkbox"/> Tag1</span>
                </div>
            </header>
        </Card>
    )
}