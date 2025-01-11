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

  return (
   <div className="main">
     <Header styles={styles} header='projects'/>
     <br />
     <RecentPosts projects={projects.slice(0,4)}/>
     <br />
     <AllPosts projects={projects.slice(4, projects.length)}/>
   </div>
  );
}


export async function getServerSideProps(context:GetServerSidePropsContext)
{
  const projects = await axios.get(`http://${context.req.headers.host}/api/github`).then((x:any) => {return x.data})
  
  return {
    props: {
      projects
    }
  }
};