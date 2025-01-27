import styles from '@/styles/modules/add_block.module.css'
import { useState } from 'react';
import InputField from './input_field';

export default function AddContent(params:any)
{
    const {id, onCloseAddBlock, content, setContent} = params;

    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const onCloseButton = () =>
    {
        onCloseAddBlock(id)
    }

    const onSubmitButton = () => 
    {
        // Ändern: Suche das Objekt und ändere den Inhalt, vllt durch find oder find index um let c = content c[index] = {id, title, image, description}

        const filteredContent = content.filter((x:any)  => x.id !== id)
        setContent([...filteredContent, {id,title,image,description}])
        
    }

    return (
        <div className={styles.block}>
            <div className={styles.close_button} onClick={onCloseButton}><h1>X</h1></div>
            <InputField id={id} setTitle={setTitle} setImage={setImage} setDescription={setDescription} submit={true} onSubmitButton={onSubmitButton}/>
        </div>
    )
}