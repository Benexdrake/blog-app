import { BlogElementConfig } from "./blog_element_config"
import { User } from "./user";

export type Article =
{
    id:string;
    headerImage:string;
    title:string;
    description:string;
    tags:string[];
    date:Date;
    elements:BlogElementConfig[]
    user:User;
}

// Author fehlt noch