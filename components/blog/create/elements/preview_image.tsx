export default function PreviewImage(props:any)
{
    const {element} = props;

    return (
        <div key={element.id} style={element.options}></div>
    )
}