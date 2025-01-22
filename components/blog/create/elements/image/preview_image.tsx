import { BlogElementConfig } from "@/types/blog_create_element";

export type Preview =
{
    config:BlogElementConfig
}

export default function PreviewImage(props:Preview)
{
    const {config} = props;
    
    return (
        <div key={config.id} style={config.options}></div>
    )
}