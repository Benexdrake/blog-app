import { BlogElementConfig } from "./blog_element_config"

export type Article =
{
    _id?:string;
    id:string;
    headerImage:string;
    title:string;
    description:string;
    tags:string[]
    elements:BlogElementConfig[]
}