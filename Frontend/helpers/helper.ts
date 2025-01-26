export let getImage = (language:string) =>
{
    switch(language)
    {
        case 'C#':
            return './assets/images/CSharp.jpg'
        case 'JavaScript':
            return './assets/images/JS.jpg'
        case 'TypeScript':
            return './assets/images/TS.jpg'
        case 'Jupyter Notebook':
            return './assets/images/JN.png'
        case 'Python':
            return './assets/images/Python.png'
        default:
            return 'https://placehold.co/600x400'
        }
}

export let fileToBase64 = async (file:any) =>
{
        return await new Promise((res) => {
            const reader = new FileReader();
            reader.readAsDataURL(file)

            reader.onload = () => 
            {
                const result = reader.result;
                if (result)
                {
                    res(result)
                }
            }
        })
}