import styles from '@/styles/modules/blog/create/elements/header/preview_create_header.module.css'
import { BlogElementConfig } from '@/types/blog_create_element';

export type Preview =
{
    config:BlogElementConfig
}

export default function PreviewHeader(props:Preview)
{
    const {config} = props;
    return <div><h1 style={config.options}>{config.options.content}</h1></div>
}