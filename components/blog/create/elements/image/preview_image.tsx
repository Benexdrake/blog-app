import { PreviewElement } from "@/types/preview_element";

export default function PreviewImage(props:PreviewElement)
{
    const {config} = props;
    console.log(config.options);
    
    
    return (
        <div key={config.id} style={config.options}></div>
    )
}