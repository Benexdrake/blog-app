import { BlogElementConfig } from "./blog_element_config";

export type CreateArticle =
{
    id:string;
    headerImage:string;
    title:string;
    description:string;
    tags:string[]
    elements:BlogElementConfig[]
}