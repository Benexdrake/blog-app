import { fileToBase64 } from '@/helpers/helper'
import styles from '@/styles/modules/blog/create/elements/create_image.module.css'
import { BlogCreateElement } from '@/types/blog_create_element'
import { ChangeEvent, useState } from 'react'

export default function CreateImage(props:any)
{    
    const {updateElement, deleteElement, element} = props;   
    
    const [getImage, setImage] = useState<string>(`/assets/images/CSharp.jpg`)
    const [getSize, setSize] = useState<string>('cover')
    const [getPosition, setPosition] = useState<string>('center')
    
    

    element.options = {backgroundSize:getSize, backgroundPosition:getPosition, backgroundImage:`url("${getImage}")`, height:'200px', minWidth:'200px'}

    const onChangePositionHandler = (e:any) =>
    {
        if(e.target.value === 'left' || e.target.value === 'right')
        {
            const cover = document.getElementById(`check-${element.id}`) as HTMLInputElement
            if(!cover) return;
            cover.checked = false;

            setSize('')
        }
        
        setPosition(e.target.value)
    }

    const onChangeSizeCoverHandler = (e:any) =>
    {
        if(e.target.checked)
        {
            setSize('cover');
        }
        else
        {
            setSize('');
        }
    }

    const onChangeImageHandler = async (e: ChangeEvent<HTMLInputElement>) => 
    {
        if(!e.target.files) return;
        const image = await fileToBase64(e.target.files[0]) as string;

        setImage(image)
        
        updateElement(element);
    }

    return (
        <div key={props.id} draggable>
            <div className={styles.arrows}>
                <div className={styles.arrow_up} onClick={() => {deleteElement(element.id)}}>X</div>
            </div>
            <div className={styles.main}>
                <div className={styles.backgroundImage} style={{backgroundImage:`url("${getImage}")`, backgroundPosition:getPosition, backgroundSize:getSize}}></div>
                <div className={styles.menu}>
                    <div>
                        <label>Position: </label>
                            <select defaultValue={'center'} onChange={onChangePositionHandler}>
                                <option value="top">Top</option>
                                <option value="bottom">Down</option>
                                <option value="center">Center</option>
                                <option value="left">Left</option>
                                <option value="right">Right</option>
                            </select>
                    </div>
                    <div>
                        <label>Size Cover: 
                            <input type="checkbox" id={`check-${element.id}`} defaultChecked onChange={onChangeSizeCoverHandler}/>
                        </label>
                    </div>

                    <div>
                        <label htmlFor={`file-upload-${element.id}`} className={styles.file_upload_button}>UPLOAD</label>
                        <input type="file"  id={`file-upload-${element.id}`} accept="image/png, image/jpeg" style={{display:'none'}} onChange={onChangeImageHandler}/>
                    </div>
                </div>

            </div>
        </div>
    )
}