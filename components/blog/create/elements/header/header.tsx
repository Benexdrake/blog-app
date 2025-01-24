import styles from '@/styles/modules/blog/create/elements/header/create_header.module.css'
import { CreateElement } from '@/types/create_element';
import { useState } from 'react';
import Card from '../card';

export default function CreateHeader(props:CreateElement)
{
    const {deleteElement, updateElement, config} = props;

    const [force, setForce] = useState(false)

    const onChangeHeaderHandler = (e:any) =>
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
        <Card id={config.id} type={config.type} deleteElement={deleteElement}>
            <div className={styles.main}>
                <div className={styles.menu}>
                    <span onClick={() => onChangeAlignHandler("left")}><i className="fa-solid fa-align-left" ></i></span>
                    <span onClick={() => onChangeAlignHandler("center")}><i className="fa-solid fa-align-center"></i></span>
                    <span onClick={() => onChangeAlignHandler("right")}><i className="fa-solid fa-align-right"></i></span>
                    <input type="number" defaultValue={32} min={32} max={100} step={4} onChange={onChangeFontSizeHandler}/>
                </div>
                <input type="text" id={config.id} className={styles.input_header} onChange={onChangeHeaderHandler} defaultValue={config.options.content}/>
                <h1 className={styles.preview} style={config.options}>{config.options.content}</h1>
            </div>
        </Card>
    )
}