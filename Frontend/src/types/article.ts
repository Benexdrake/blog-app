import { BlogElementConfig } from "./blog_element_config"

export type Article =
{
    id:number
    title:string
    content:string
    configs:BlogElementConfig[]
}