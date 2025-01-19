import styles from '@/styles/modules/blog/create/float_menu.module.css'

export default function FloatMenu(props:any)
{

    const {createElement} = props

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
                <li className={styles.menu_item} onClick={() => onClickHandler('title')}>
                <i className="fa-solid fa-heading"></i>
                </li>
                <li className={styles.menu_item} onClick={() => onClickHandler('content')}>
                    <i className="fa-solid fa-paragraph"></i>
                </li>
            </ul>
        </div>
    )
}