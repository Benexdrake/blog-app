import styles from '@/styles/modules/blog/create/create_blog.module.css'
import { useState} from 'react'

import Header from '@/components/blog/create/header';
import PreviewBlogEntry from '@/components/blog/create/preview_blog_entry';
import FloatMenu from '@/components/blog/create/float_menu';
import CreateImage from '@/components/blog/create/elements/image';

import { BlogCreateElement } from '@/types/blog_create_element';
import PreviewImage from '@/components/blog/create/elements/preview_image';


export default function CreateArticle()
{
    const [elements, setElements] = useState<BlogCreateElement[]>([])
    const [header, setHeader] = useState({image:'JS.jpg', title:'', description:'', tags:[]})
    const [tags, setTags] = useState<string[]>([]);
    const [addBlock, setAddBlock] = useState<string[]>([])
    const [content, setContent] = useState([]);
    
    const createElement = (type:string) =>
    {   
        const id = crypto.randomUUID()
        let element:BlogCreateElement = {id, type, options:{}}
        
        setElements([...elements,element])
    }
        
    const updateElement = (element:any) =>
    {
        let index = elements.findIndex(x => x.id === element.id)
        elements[index] = element;
        setElements([...elements]);
    }

    const deleteElement = (id:string) =>
    {
        const newElements = elements.filter(x => x.id !== id)
        setElements([...newElements]);
    }

    return (
        <div className={styles.main} key={'CREATE'}>
            <FloatMenu createElement={createElement}/>
            <div className={styles.block} id='create'>
                <h1 className={styles.header}>Create</h1>
                <Header setHeader={setHeader} header={header}/>
                <div id='add_elements'>
                    {elements.map((e, index) => 
                    { 
                        return <div key={index}><CreateImage element={e} updateElement={updateElement} deleteElement={deleteElement}/></div>
                    })}
                </div>


            </div>
            <PreviewBlogEntry header={header}>
                {elements && elements.map((e, index) => { return <PreviewImage element={e}/>})}
            </PreviewBlogEntry>
        </div>
    )
}