export default function PreviewImage(props:any)
{
    const {config} = props;

    console.log(config);
    
    return (
        <div key={config.id} style={config.options}>{config.id}</div>
    )
}