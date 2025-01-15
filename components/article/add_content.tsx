import styles from '@/styles/modules/add_block.module.css'
import { ChangeEvent, JSX, useState } from 'react';
import InputField from './input_field';

export default function AddContent(params:any)
{
    const {id, onCloseAddBlock} = params;

    const [headerImage, setHeaderImage] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    
        
    

    const onCloseButton = () =>
    {
        onCloseAddBlock(id)
    }

    return (
        <div className={styles.block}>
            <div className={styles.close_button} onClick={onCloseButton}><h1>X</h1></div>
            <InputField id={id}/>
        </div>
    )
}