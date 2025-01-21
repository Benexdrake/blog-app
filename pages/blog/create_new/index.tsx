import styles from '@/styles/modules/blog/create/create_blog.module.css'
import { useState} from 'react'

import Header from '@/components/blog/create/header';
import PreviewHeader from '@/components/blog/create/elements/header/preview_header';
import PreviewBlogEntry from '@/components/blog/create/preview_blog_entry';
import FloatMenu from '@/components/blog/create/float_menu';
import CreateImage from '@/components/blog/create/elements/image/image';

import { BlogCreateElement } from '@/types/blog_create_element';
import PreviewImage from '@/components/blog/create/elements/image/preview_image';
import CreateHeader from '@/components/blog/create/elements/header/header';
import CreateContent from '@/components/blog/create/elements/content/content';
import PreviewContent from '@/components/blog/create/elements/content/preview_content';


export default function CreateArticle()
{
    const [elements, setElements] = useState<BlogCreateElement[]>([])
    const [header, setHeader] = useState({image:'JS.jpg', title:'', description:'', tags:[]})

    const [preview, setPreview] = useState(false);
    
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
            <FloatMenu createElement={createElement} preview={preview} setPreview={setPreview}/>
            <div className={styles.block} id='create'>
                <h1 className={styles.header}>Create</h1>
                <label>
                    Preview: <input type="checkbox" id="preview" />
                </label>
                <Header setHeader={setHeader} header={header}/>
                <div id='add_elements'>
                    {elements.map((e, index) => 
                    { 
                        switch(e.type)
                        {
                            case 'image':
                                return <div key={index}><CreateImage element={e} updateElement={updateElement} deleteElement={deleteElement}/></div>
                            case 'header':
                                return <div key={index}><CreateHeader element={e} updateElement={updateElement} deleteElement={deleteElement}/></div>
                            case 'content':
                                return <div key={index}><CreateContent/></div>
                        }
                    })}
                </div>


            </div>
            {preview && (

                <PreviewBlogEntry header={header}>
                    {elements.map((e, index) => 
                    { 
                        switch(e.type)
                        {
                            case 'image':
                                return <div key={index}><PreviewImage element={e}/></div>
                            case 'header':
                                return <div key={index}><PreviewHeader/></div>
                            case 'content':
                                return <div key={index}><PreviewContent/></div>
                        }
                    })}
            </PreviewBlogEntry>
            )}
        </div>
    )
}