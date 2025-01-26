import { PreviewElement } from '@/types/preview_element';


export default function PreviewContent(props:PreviewElement)
{
    const {config} = props;
    return <p style={config.options}>{config.options.content}</p>
}