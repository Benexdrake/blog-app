import styles from '@/styles/modules/blog/create/create_blog.module.css'
import { useState } from 'react'

import Header from '@/components/blog/create/header';
import PreviewBlogEntry from '@/components/blog/create/preview_blog_entry';
import FloatMenu from '@/components/blog/create/float_menu';

export default function CreateArticleHeader(param:any)
{
    const [header, setHeader] = useState({image:'JS.jpg', title:'', description:'', tags:[]})



    const [tags, setTags] = useState<string[]>([]);

    const [addBlock, setAddBlock] = useState<string[]>([])

    const [content, setContent] = useState([]);



    // const onClickAddBlock = () => 
    // {
    //     const id = crypto.randomUUID()
    //     setAddBlock([...addBlock, id])
    // }

    // const onCloseAddBlock = (id:string) =>
    // {
    //     let filtered = addBlock.filter(x => x !== id)
    //     let filteredContent = content.filter((x:any) => x.id !== id)
    //     setContent([...filteredContent])
    //     setAddBlock(filtered);
    // }

    return (
        <div className={styles.main}>
            <FloatMenu/>
            <div className={styles.block}>
                <h1 className={styles.header}>Create</h1>
                <Header setHeader={setHeader} header={header}/>


            </div>
            <PreviewBlogEntry header={header}/>
        </div>
    )
}