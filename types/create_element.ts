import { BlogElementConfig } from "./blog_create_element"

export type CreateElement =
{
    config:BlogElementConfig;
    updateElement:Function;
    deleteElement: Function;
}