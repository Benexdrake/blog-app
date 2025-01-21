import { fileToBase64 } from '@/helpers/helper'
import styles from '@/styles/modules/blog/create/elements/image/create_image.module.css'
import { BlogElementConfig } from '@/types/blog_create_element'
import { ChangeEvent, useState } from 'react'

export type CreateImageType =
{
    config:BlogElementConfig;
    updateElement:Function;
    deleteElement:Function;
}

export default function CreateImage(props:CreateImageType)
{    
    const {updateElement, deleteElement, config} = props;   
    const [force, setForce] = useState(false)

    const [cover, setCover] = useState(true)

    const onChangePositionHandler = (e:any) =>
    {
        if(e.target.value === 'left' || e.target.value === 'right')
        {
            config.options = {backgroundSize:'', backgroundPosition:e.target.value, backgroundImage:config.options.backgroundImage, height:'200px', minWidth:'200px'}
        }
        config.options = {backgroundSize:config.options.backgroundSize, backgroundPosition:e.target.value, backgroundImage:config.options.backgroundImage, height:'200px', minWidth:'200px'}
        setForce(!force)
        updateElement(config);
    }

    const onChangeSizeCoverHandler = (e:any) =>
    {
        
        if(!cover)
            config.options = {backgroundSize:'cover', backgroundPosition:config.options.backgroundPosition, backgroundImage:config.options.backgroundImage, height:'200px', minWidth:'200px'}
        else    
            config.options = {backgroundSize:'', backgroundPosition:config.options.backgroundPosition, backgroundImage:config.options.backgroundImage, height:'200px', minWidth:'200px'}
        
        setCover(!cover)
        setForce(!force)
        updateElement(config);
    }

    const onChangeImageHandler = async (e: ChangeEvent<HTMLInputElement>) => 
    {
        if(!e.target.files) return;
        const image = await fileToBase64(e.target.files[0]) as string;

        config.options = {backgroundSize:config.options.backgroundSize, backgroundPosition:config.options.backgroundPosition, backgroundImage:`url("${image}")`, height:'200px', minWidth:'200px'}
        setForce(!force)
        updateElement(config);
    }

    return (
        <div key={props.config.id} draggable>
            <div className={styles.arrows}>
                <div className={styles.arrow_up} onClick={() => {deleteElement(config.id)}}>X</div>
            </div>
            <div className={styles.main}>
                <div className={styles.backgroundImage} style={config.options}></div>
                <div className={styles.menu}>
                    <div>
                        <select defaultValue={'center'} onChange={onChangePositionHandler}>
                            <option value="top">Top</option>
                            <option value="bottom">Down</option>
                            <option value="center">Center</option>
                            <option value="left">Left</option>
                            <option value="right">Right</option>
                        </select>
                    </div>
                    <div className={styles.button} onClick={onChangeSizeCoverHandler}>
                            <i className="fa-solid fa-life-ring"></i> 
                    </div>
                    <div>
                        <label htmlFor={`file-upload-${config.id}`} className={styles.file_upload_button}>UPLOAD</label>
                        <input type="file"  id={`file-upload-${config.id}`} accept="image/png, image/jpeg" style={{display:'none'}} onChange={onChangeImageHandler}/>
                    </div>
                </div>

            </div>
        </div>
    )
}