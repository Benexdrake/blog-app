import { BlogElementConfig } from "@/types/blog_element_config"

export type CreateElement =
{
    config:BlogElementConfig;
    updateElement:Function;
    deleteElement: Function;
}