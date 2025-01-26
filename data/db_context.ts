import { CreateArticle } from '@/types/create_article';
import {Schema, model, connect} from 'mongoose'

try 
{
    await connect(process.env.MongoDB_Login || '',{dbName:'Blog'})
} 
catch (error) 
{
    console.error(error);
}

const articleSchema = new Schema<CreateArticle>();

const Model = model<CreateArticle>('Article')
console.log('HI');


export const createArticle = async (article:CreateArticle) =>
{
    console.log('HIIII');
    
    try 
    {
        const articleModel = new Model(article)
        await articleModel.save();
        console.log(article);
        
    } 
    catch (error) 
    {
        console.error(error);
    }
}