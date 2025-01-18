import styles from '@/styles/modules/blog/create/create_blog.module.css'
import { ChangeEvent, JSX, MouseEvent, useState } from 'react'
import AddContent from '@/components/blog/add_content';
import InputField from '@/components/blog/input_field';
import PreviewArticle from '@/components/blog/preview_article'

export default function CreateArticleHeader(param:any)
{
    const [headerImage, setHeaderImage] = useState('JS.jpg');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const [tags, setTags] = useState<string[]>([]);

    const [addBlock, setAddBlock] = useState<string[]>([])

    const [content, setContent] = useState([]);

    const headerImageHandler = (e: ChangeEvent<HTMLInputElement>) => 
        {
            if (!e.target.files) return;
    
            const file = e.target.files[0];
    
            const reader = new FileReader();
            
            reader.readAsDataURL(file)
    
            reader.onload = () => 
            {
                const result = reader.result;
                if (result)
                {
                    setHeaderImage(result as string)
                }
            }
        }
        
        const titleHandler = (e: ChangeEvent<HTMLInputElement>) => 
        {
            setTitle(e.target.value)
        }
    
        const descriptionHandler = (e: ChangeEvent<HTMLTextAreaElement>) => 
        {
            setDescription(e.target.value)
        }

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
        let filteredContent = content.filter((x:any) => x.id !== id)
        setContent([...filteredContent])
        setAddBlock(filtered);
    }

    return (
        <div className={styles.main}>
            <div className={styles.block}>
                <h1 className={styles.header}>Create</h1>
                <div className={styles.information}>
                    <input className={styles.input} onChange={titleHandler} placeholder='Title' type="text" name="" id="" />
                    <input className={styles.input} onChange={headerImageHandler} type="file" accept="image/png, image/jpeg"/>
                    <textarea className={styles.description} onChange={descriptionHandler} name="" id="" placeholder='Enter a short Desciption...'></textarea>
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
                    {addBlock.map((x:any) => {return <AddContent key={x} id={x} onCloseAddBlock={onCloseAddBlock} content={content} setContent={setContent}/>})}
                </div>
                <div className={styles.add_block} onClick={onClickAddBlock}>
                    <h1>+</h1>
                </div>
            </div>
            <PreviewArticle headerImage={headerImage} title={title} description={description} tags={tags} content={content}/>
        </div>
    )
}