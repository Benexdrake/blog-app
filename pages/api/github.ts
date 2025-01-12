// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Project } from "@/types/project";
import type { NextApiRequest, NextApiResponse } from "next";
import { Octokit } from "octokit";

export default async function handler( req: NextApiRequest, res: NextApiResponse ) 
{
  const page = req.query.page

  const octo = new Octokit({
    auth: process.env.Github_Secret
  });

  const user_response = await octo.request('GET /user', {
    owner: process.env.Github_User,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });
  let u = user_response.data;

  const response = await octo.request('GET /user/repos/', {
    per_page:9,
    page,
    sort:'updated',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });

  let repos = []

  for(let rd of response.data)
  {
    const repo:Project = 
    {
      id: rd.id,
      name: rd.name,
      url:rd.html_url,
      createdAt:new Date(rd.created_at),
      description:rd.description || 'Placeholder Text',
      lastUpdate:new Date(rd.updated_at),
      language:rd.language || 'Language'
    }

    repos.push(repo)
  }
  res.status(200).json({max_repos: u.public_repos, repos});
}
