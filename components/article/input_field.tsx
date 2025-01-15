import styles from '@/styles/modules/input_field.module.css'
import { ChangeEvent, useState } from 'react';

export default function InputField(props:any)
{
    const {id} = props;
    const [headerImage, setHeaderImage] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

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

    return (
        <>
            <input className={styles.input} onChange={titleHandler} placeholder='Title' type="text" name="" id="" />
            <input className={styles.input} onChange={headerImageHandler} type="file" accept="image/png, image/jpeg"/>
            <textarea className={styles.description} onChange={descriptionHandler} name="" id="" placeholder='Enter a short Desciption...'></textarea>
        </>
    )
}