import styles from '@/styles/modules/blog/create/elements/header/create_header.module.css'
import { BlogElementConfig } from '@/types/blog_create_element';
import { useState } from 'react';

export type CreateHeaderType =
{
    config:BlogElementConfig;
    updateElement:Function;
    deleteElement:Function;
}

export default function CreateHeader(props:CreateHeaderType)
{
    const {updateElement, deleteElement, config} = props;

    const [force, setForce] = useState(false)

    const onChangeHeaderHandler = (e:any) =>
    {  
        config.content = e.target.value;
        setForce(!force)
        updateElement(config)
    }

    const onChangeAlignHandler = (align:CanvasTextAlign) =>
    {
        config.options = {textAlign:align, fontSize:config.options.fontSize}
        setForce(!force)
        updateElement(config)
    }

    const onChangeFontSizeHandler = (e:any) =>
    {
        config.options = {textAlign:config.options.textAlign, fontSize:`${e.target.value}px`}
        setForce(!force)
        updateElement(config)
    }

    return (
        <div key={config.id} draggable>
            <div className={styles.arrows}>
                <div className={styles.arrow_up} onClick={() => {deleteElement(config.id)}}>X</div>
            </div>
            <div className={styles.main}>
                <input type="text" id={config.id} className={styles.input_header} onChange={onChangeHeaderHandler} defaultValue={config.content}/>
                <div className={styles.menu}>
                    <p>{config.id}</p>
                    <span onClick={() => onChangeAlignHandler("left")}><i className="fa-solid fa-align-left" ></i></span>
                    <span onClick={() => onChangeAlignHandler("center")}><i className="fa-solid fa-align-center"></i></span>
                    <span onClick={() => onChangeAlignHandler("right")}><i className="fa-solid fa-align-right"></i></span>
                    <input type="number" defaultValue={32} min={32} max={100} step={4} onChange={onChangeFontSizeHandler}/>
                </div>
                <h1 className={styles.preview} style={config.options}>{config.content || 'Title'}</h1>
            </div>
        </div>
    )
}