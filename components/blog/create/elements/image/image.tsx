import { fileToBase64 } from '@/helpers/helper'
import styles from '@/styles/modules/blog/create/elements/image/create_image.module.css'
import { CreateElement } from '@/types/create_element'
import { ChangeEvent, useState } from 'react'
import Card from '../card';

export default function CreateImage(props:CreateElement)
{    
    const {deleteElement, updateElement, config} = props;   
    const [force, setForce] = useState(false)

    const [cover, setCover] = useState(false)

    const [banner, setBanner] = useState('fa-image')

    const onChangePositionHandler = (e:any) =>
    {
        if(e.target.value === 'left' || e.target.value === 'right')
        {
            config.options = {backgroundSize:'', backgroundPosition:e.target.value, backgroundImage:config.options.backgroundImage, height:config.options.height}
        }
        config.options = {backgroundSize:config.options.backgroundSize, backgroundPosition:e.target.value, backgroundImage:config.options.backgroundImage, height:config.options.height}
        setForce(!force)
        updateElement(config);
    }

    const onChangeSizeCoverHandler = (e:any) =>
    {
        if(!cover)
            config.options = {backgroundSize:'cover', backgroundPosition:config.options.backgroundPosition, backgroundImage:config.options.backgroundImage, height:config.options.height}
        else    
            config.options = {backgroundSize:'', backgroundPosition:config.options.backgroundPosition, backgroundImage:config.options.backgroundImage, height:config.options.height}
        
        setCover(!cover)
        updateElement(config);
    }

    const onChangeImageHandler = async (e: ChangeEvent<HTMLInputElement>) => 
    {
        if(!e.target.files) return;
        const image = await fileToBase64(e.target.files[0]) as string;

        config.options = {backgroundSize:config.options.backgroundSize, backgroundPosition:config.options.backgroundPosition, backgroundImage:`url("${image}")`, height:config.options.height}
        setForce(!force)
        updateElement(config);
    }

    const onChangeBannerHandler =() =>
    {
        let height = '400px';

        if(banner == 'fa-panorama')
            setBanner('fa-image')
        else
        {
            height = '200px';
            setBanner('fa-panorama')
        }

        config.options = {backgroundSize:config.options.backgroundSize, backgroundPosition:config.options.backgroundPosition, backgroundImage:config.options.backgroundImage, height:height}

        setForce(!force)
        updateElement(config);
    }

    return (
        <Card id={config.id} type={config.type} deleteElement={deleteElement}>
            <div className={styles.main}>
                <div className={styles.menu}>
                    <div>
                    <div className={styles.button} onClick={onChangeBannerHandler}>
                            <i className={`fa-solid ${banner}`}></i> 
                    </div>
                    </div>
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
                <div className={styles.backgroundImage} style={config.options}></div>
            </div>
            </Card>
    )
}