import { BlogElementConfig } from "./blog_element_config"

export type CreateElement =
{
    config:BlogElementConfig;
    updateElement:Function;
    deleteElement: Function;
}