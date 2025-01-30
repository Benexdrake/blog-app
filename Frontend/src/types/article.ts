import { BlogElementConfig } from "./blog_element_config"

export type Article =
{
    id:string
    title:string
    description:string
    elements:BlogElementConfig[]
}