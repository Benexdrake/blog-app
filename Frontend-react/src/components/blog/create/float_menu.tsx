import styles from '../../../styles/modules/blog/create/float_menu.module.css'

export default function FloatMenu(props:any)
{

    const {createElement, preview, setPreview, submit} = props

    const onClickHandler = (type:string) =>
    {
        createElement(type)
    }

    return (
        <div className={styles.menu}>
            <ul className={styles.menu_list}>
                <li className={styles.menu_item} onClick={() => onClickHandler('image')}>
                    <i className="fa-solid fa-image"></i>
                </li>
                <li className={styles.menu_item} onClick={() => onClickHandler('header')}>
                <i className="fa-solid fa-heading"></i>
                </li>
                <li className={styles.menu_item} onClick={() => onClickHandler('content')}>
                    <i className="fa-solid fa-paragraph"></i>
                </li>
                <hr />
                <li className={styles.menu_item} onClick={() => setPreview(!preview)}>
                    {preview ? (<i className="fa-solid fa-eye"></i>) : (<i className="fa-solid fa-eye-slash"></i>)}
                </li>
                <hr />
                <li className={styles.menu_item} onClick={() => submit()}>
                    <i className="fa-solid fa-share"></i>
                </li>
            </ul>
        </div>
    )
}