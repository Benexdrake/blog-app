import styles from '@/styles/modules/create_blog.module.css'
import { ChangeEvent, JSX, MouseEvent, useState } from 'react'
import AddContent from './add_content';
import InputField from './input_field';

export default function CreateArticleHeader(param:any)
{
    const {setHeader} = param
    const [headerImage, setHeaderImage] = useState('JS.jpg');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    let image = 'JS.jpg'
    const [tags, setTags] = useState<string[]>([]);

    const [addBlock, setAddBlock] = useState<string[]>([])

    const tagHandler = (e: any) => 
    {
        e.target.children[0].checked = !e.target.children[0].checked;

        if (e.target.children[0].checked) 
        {
            if(tags.length > 2)
                return;
            e.target.style.borderColor = 'green'
            let tags_copy = [...tags];
            tags_copy.push(e.target.innerText)
            setTags(tags_copy)
        }
        else
        {
            e.target.style.borderColor = 'var(--color3)'
            setTags(tags.filter((x:string) => x !== e.target.innerText))
        }
    }

    const onClickAddBlock = () => 
    {
        const id = crypto.randomUUID()
        setAddBlock([...addBlock, id])
    }

    const onCloseAddBlock = (id:string) =>
    {
        let filtered = addBlock.filter(x => x !== id)
        setAddBlock(filtered);
    }

    return (
        <div className={styles.block}>
                <h1 className={styles.header}>Create</h1>
                <div className={styles.information}>
                    <InputField id='header' setImage={setHeaderImage} setTitle={setTitle} setDescription={setDescription}/>
                    <div className={styles.tag_select}>
                        <div className={styles.tag} onClick={tagHandler} key='Research'>
                            <input id='abc' type="checkbox" hidden /> Research
                        </div>
                        <div className={styles.tag} onClick={tagHandler} key='Presentation'>
                            <input id='abc' type="checkbox" hidden /> Presentation
                        </div>
                        <div className={styles.tag} onClick={tagHandler} key='Design'>
                            <input id='abc' type="checkbox" hidden /> Design
                        </div>
                    </div>
                </div>
                <div id='editor-block'>
                    {addBlock.map((x:any) => {return <AddContent key={x} id={x} onCloseAddBlock={onCloseAddBlock}/>})}
                </div>
                <div className={styles.add_block} onClick={onClickAddBlock}>
                    <h1>+</h1>
                </div>
            </div>
    )
}