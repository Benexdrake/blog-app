import { Header } from "@/components/header/header";
import { Navbar } from "@/components/navbar/navbar";
import { RecentPosts } from "@/layouts/blog/recent_posts";

import styles from '@/styles/modules/header.module.css'

export default function Home() {
  return (
   <div className="main">
     <Header styles={styles}/>
     <br />
     <RecentPosts/>
     <br />
     All Blog Posts Layout
   </div>
  );
}