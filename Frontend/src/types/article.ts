export type Article =
{
    id:number
    title:string
    content:string
    image:Image
    teaser:string
    date:string
    author:string
    tags:Tag[]
}

export type Image =
{
    src:string
    alt:string
}

export type Tag =
{
    id:number
    name:string
    bgColor:string
    textColor:string
}