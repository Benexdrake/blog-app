import { PreviewElement } from '@/types/preview_element';

export default function PreviewHeader(props:PreviewElement)
{
    const {config} = props;
    return <div><h1 style={config.options}>{config.options.content}</h1></div>
}