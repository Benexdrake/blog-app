import styles from '@/styles/modules/blog/create/elements/header/create_header.module.css'
import { BlogCreateElement } from '@/types/blog_create_element';
import { useState } from 'react';

export type CreateHeaderType =
{
    element:BlogCreateElement;
    updateElement:Function;
    deleteElement:Function;
}

export default function CreateHeader(props:CreateHeaderType)
{
    const {updateElement, deleteElement, element} = props;  

    element.options = {textAlign:'center'}

    const [header, setHeader] = useState("Title");

    const onChangeHeaderHandler = (e:any) =>
    {
        if(e.target.value === "")
            setHeader("Title")
        else
            setHeader(e.target.value)
    }

    return (
        <div key={element.id} draggable>
            <div className={styles.arrows}>
                <div className={styles.arrow_up} onClick={() => {deleteElement(element.id)}}>X</div>
            </div>
            <div className={styles.main}>
                <h1 className={styles.preview} style={element.options}>{header}</h1>
                <div className={styles.menu}>
                    <input type="text" className={styles.input_header} onChange={onChangeHeaderHandler}/>
                    
                   

                </div>
            </div>
        </div>
    )
}