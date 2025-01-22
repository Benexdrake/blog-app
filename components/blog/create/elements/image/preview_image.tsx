import { PreviewElement } from "@/types/preview_element";

export default function PreviewImage(props:PreviewElement)
{
    const {config} = props;
    
    return (
        <div key={config.id} style={config.options}></div>
    )
}