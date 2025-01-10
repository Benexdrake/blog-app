import { Article } from "@/components/article/article";
import styles from '@/styles/modules/recent.module.css'

export let RecentPosts = (props:any) => 
{
    return (
        <>
        <div className={styles.main}>
            <div>
                <Article type={1}/>
            </div>
            <div className={styles.sub}>
                <Article type={2}/>
                
                <Article type={2}/>
            </div>
            <Article type={3}/>
        </div>
       
        </>
    );
}