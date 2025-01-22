import styles from '@/styles/modules/blog/create/elements/content/preview_create_content.module.css'
import { BlogElementConfig } from '@/types/blog_create_element';

export type Preview =
{
    config:BlogElementConfig
}

export default function PreviewContent(props:Preview)
{
    const {config} = props;
    return <p style={config.options}>{config.options.content}</p>
}