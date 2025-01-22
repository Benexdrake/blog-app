import styles from '@/styles/modules/blog/create/create_blog.module.css'
import { JSX, useState} from 'react'

import Header from '@/components/blog/create/header';
import PreviewHeader from '@/components/blog/create/elements/header/preview_header';
import PreviewBlogEntry from '@/components/blog/create/preview_blog_entry';
import FloatMenu from '@/components/blog/create/float_menu';
import CreateImage from '@/components/blog/create/elements/image/image';

import { BlogElementConfig } from '@/types/blog_create_element';
import PreviewImage from '@/components/blog/create/elements/image/preview_image';
import CreateHeader from '@/components/blog/create/elements/header/header';
import CreateContent from '@/components/blog/create/elements/content/content';
import PreviewContent from '@/components/blog/create/elements/content/preview_content';


export default function CreateArticle()
{
    const [elements, setElements] = useState<JSX.Element[]>([])
    const [header, setHeader] = useState({image:'JS.jpg', title:'', description:'', tags:[]})
    const [preview, setPreview] = useState(false);
    
    const createElement = (type:string) =>
    {   
        const id = crypto.randomUUID()
        let config:BlogElementConfig = {id, type, options:{}, content:''}
        let element;

        switch(type)
        {
            case 'image':
                config.options = {backgroundSize:'cover', backgroundPosition:'center', backgroundImage:'url(/assets/images/JS.jpg)', height:'400px', margin:'16px 0'}
                element = <CreateImage config={config} updateElement={() => {}} deleteElement={() => {}}/>
                setElements([...elements, element])
                break;
            case 'header':
                config.options = {padding:'16px'}
                element = <CreateHeader config={config} updateElement={() => {}} deleteElement={() => {}}/>
                setElements([...elements, element])
                break;
            case 'content':
                config.options = {padding:'16px'}
                element = <CreateContent config={config} updateElement={() => {}} deleteElement={() => {}}/>
                break;
            }

            // Ideen für mehr Elemente:
            /*
                Space
                Text mit Bild drin, links und rechts

                image zu banner
                image größer oder einfach als Option

            */

            if(!element) return;

            setElements([...elements, element])
    }
        
    const updateElement = (config:BlogElementConfig) =>
    {   
        let index = elements.findIndex(x => x.props.config.id === config.id)

        switch(config.type)
        {
            case'image':
                elements[index] = <CreateImage config={config}  updateElement={() => {}} deleteElement={() => {}}/>
                break;
            case'header':
                elements[index] = <CreateHeader config={config} updateElement={() => {}} deleteElement={() => {}}/>
                break;
            case'content':
                elements[index] = <CreateContent config={config} updateElement={() => {}} deleteElement={() => {}}/>
                break;
        }        
        
        setElements([...elements]);
    }

    const deleteElement = (id:any) =>
    {
        const newElements = elements.filter(x => x.props.config.id !== id)
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
                    {elements.map((e) => 
                    { 
                        switch(e.props.config.type)
                        {
                            case 'image':
                                return <div><CreateImage config={e.props.config} updateElement={updateElement} deleteElement={deleteElement}/></div>
                            case 'header':
                                return <div><CreateHeader config={e.props.config} updateElement={updateElement} deleteElement={deleteElement}/></div>
                            case 'content':
                                return <div><CreateContent config={e.props.config} updateElement={updateElement} deleteElement={deleteElement}/></div>
                        }
                    })}
                </div>
            </div>
            {preview && (
                <PreviewBlogEntry header={header}>
                    {elements.map((e) =>  
                    {   
                        switch(e.props.config.type)
                        {
                            case 'image':
                                return <div ><PreviewImage config={e.props.config}/></div>
                            case 'header':
                                return <div><PreviewHeader config={e.props.config}/></div>
                            case 'content':
                                return <div><PreviewContent config={e.props.config}/></div>
                        }
                    })}
                </PreviewBlogEntry>
            )}
        </div>
    )
}