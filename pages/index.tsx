import { Header } from "@/components/header/header";
import { AllPosts } from "@/layouts/blog/all_posts";
import { RecentPosts } from "@/layouts/blog/recent_posts";
import { useSearchParams } from 'next/navigation'

import styles from '@/styles/modules/header.module.css'
import { Project } from "@/types/project";
import axios from "axios";
import { GetServerSidePropsContext } from "next";

export default function Home(props:any)
{
  const projects = props.projects as Project[];
  const page = props.page as number;

  return (
   <div className="main">
     <Header styles={styles} header='projects'/>

    

    {
      page == 1 ?
      <>
      <br />
      <RecentPosts projects={projects.slice(0,3)}/>
      <br />
      <AllPosts projects={projects.slice(3, projects.length)}/>
      </>
      :
      <>
     <br />
     <AllPosts projects={projects}/> 
      </>
    }
   </div>
  );
}


export async function getServerSideProps(context:GetServerSidePropsContext)
{
  // console.log(context.req.url);
  let page = context.query.page || 1
  const projects = await axios.get(`http://${context.req.headers.host}/api/github?page=${page}`).then((x:any) => {return x.data})
  
  return {
    props: {
      projects,
      page
    }
  }
};