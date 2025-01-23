import styles from '@/styles/modules/blog/create/elements/card.module.css'
import { useState } from 'react';

export default function Card(props:any)
{

    const {id, type, deleteElement, children} = props;
    const [show, setShow] = useState('');
    const [showButton, setShowButton] = useState('fa-solid fa-minus');


    let element = ''

    switch(type)
    {
        case 'image':
            element = 'image'
            break;
        case 'header':
            element = 'header'
            break;
        case 'content':
            element = 'paragraph'
            break;
    }

    const onShowChildrenHandler = () =>
    {
        if(show === '')
        {
            setShowButton('fa-regular fa-square')
            setShow('none')
        }
        else
        {
            setShowButton('fa-solid fa-minus')
            setShow('')
        }
    }

    return (
        <div className={styles.card} draggable>
            <nav className={styles.nav}>
                <div className={styles.button} onClick={onShowChildrenHandler}><i className={showButton}></i></div>
                <div className={styles.element}><i className={"fa-solid fa-"+element}></i></div>
                <div className={styles.button} onClick={() => deleteElement(id)}> <i className="fa-solid fa-xmark"></i></div>
            </nav>
            <section className={styles.content} style={{display:show}}>
                {children}
            </section>
        </div>
    )
}