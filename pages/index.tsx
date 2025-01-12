import { Header } from "@/components/header/header";
import { AllPosts } from "@/layouts/blog/all_posts";
import { RecentPosts } from "@/layouts/blog/recent_posts";

import styles from '@/styles/modules/header.module.css'
import { Project } from "@/types/project";
import axios from "axios";
import { GetServerSidePropsContext } from "next";

interface ProjectsProps
{
  projects:Project[];
  page:number;
  max_repos:number;
}

export default function Home(props:ProjectsProps)
{
  const projects = props.projects as Project[];
  const page = props.page as number;
  const max_repos = props.max_repos;

  return (
   <div className="main">
     <Header styles={styles} header='projects'/>
    {
      page == 1 ?
      <>
      <br />
      <RecentPosts projects={projects.slice(0,4)}/>
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
  let page = context.query.page || 1
  const response = await axios.get(`http://${context.req.headers.host}/api/github?page=${page}`).then((x:any) => {return x.data})
  
  return {
    props: {
      max_repos: response.max_repos,
      projects:response.repos,
      page
    }
  }
};