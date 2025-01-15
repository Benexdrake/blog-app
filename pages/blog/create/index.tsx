import CreateArticleHeader from '@/components/article/create_article_header';
import PreviewArticle from '@/components/article/preview_article';
import styles from '@/styles/modules/create_blog.module.css'
import { ChangeEvent, MouseEvent, useState } from 'react'

export type Header =
{
    image:string;
    title:string;
    description:string;
    tags:string[]
}

export default function CreateBlog() {
    // const [headerImage, setHeaderImage] = useState('JS.jpg');
    // const [title, setTitle] = useState('');
    // const [description, setDescription] = useState('');
    // const [tags, setTags] = useState<string[]>([]);

    
    const [getHeader, setHeader] = useState<Header>()

    return (
        <div className={styles.main}>
            <div>
                <CreateArticleHeader setHeader={setHeader}/>
            </div>
            <PreviewArticle getHeader={getHeader}/>
        </div>
    )
}