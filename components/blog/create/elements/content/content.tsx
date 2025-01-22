import styles from '@/styles/modules/blog/create/elements/content/create_content.module.css'
import { BlogElementConfig } from '@/types/blog_create_element';
import { CSSProperties, useState } from 'react';

export type CreateType =
{
    config:BlogElementConfig;
    updateElement:Function;
    deleteElement:Function;
}

export default function CreateContent(props:CreateType)
{
    const {updateElement, deleteElement, config} = props;  

    const [force, setForce] = useState(false)

    const onChangeContentHandler = (e:any) =>
    { 
        config.options = {content:e.target.value, textAlign:config.options.textAlign, fontSize:config.options.fontSize, padding:config.options.padding}
        setForce(!force)
        updateElement(config)
    }

    const onChangeAlignHandler = (align:any) =>
    {
        config.options = {textAlign:align, fontSize:config.options.fontSize, content:config.options.content, padding:config.options.padding}
        setForce(!force)
        updateElement(config)
    }

    const onChangeFontSizeHandler = (e:any) =>
    {
        config.options = {textAlign:config.options.textAlign, fontSize:`${e.target.value}px`, content:config.options.content, padding:config.options.padding}
        setForce(!force)
        updateElement(config)
    }

    return (
        <div key={config.id} draggable>
            <div className={styles.arrows}>
                <div className={styles.arrow_up} onClick={() => {deleteElement(config.id)}}>X</div>
            </div>
            <div className={styles.main}>
                <div className={styles.menu}>
                    <span onClick={() => onChangeAlignHandler("left")}><i className="fa-solid fa-align-left" ></i></span>
                    <span onClick={() => onChangeAlignHandler("center")}><i className="fa-solid fa-align-center"></i></span>
                    <span onClick={() => onChangeAlignHandler("right")}><i className="fa-solid fa-align-right"></i></span>
                    <span onClick={() => onChangeAlignHandler("justify")}><i className="fa-solid fa-align-justify"></i></span>
                    <input type="number" defaultValue={16} min={8} max={32} step={4} onChange={onChangeFontSizeHandler}/>
                </div>
                <div>
                    <textarea className={styles.content} id="" onChange={onChangeContentHandler}></textarea>
                </div>
                <div>
                    <p style={config.options}>{config.options.content}</p>
                </div>
            </div>
        </div>
    )
}