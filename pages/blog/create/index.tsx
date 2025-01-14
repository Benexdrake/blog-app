import CreateArticleHeader from '@/components/article/create_article_header';
import PreviewArticle from '@/components/article/preview_article';
import styles from '@/styles/modules/create_blog.module.css'
import { ChangeEvent, MouseEvent, useState } from 'react'

export default function CreateBlog() {
    const [headerImage, setHeaderImage] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState<string[]>([]);

    return (
        <div className={styles.main}>
            <div>
                <CreateArticleHeader tags={tags} setTags={setTags} setHeaderImage={setHeaderImage} setTitle={setTitle} setDescription={setDescription}/>
            </div>
            <PreviewArticle headerImage={headerImage} description={description} tags={tags} title={title}/>
        </div>
    )
}