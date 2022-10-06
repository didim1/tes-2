import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { ArticleTypes } from "../../../interface";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {method, query: {id}} = req

    switch (method) {
        case 'GET':
            const response = await axios.get(`https://api.spaceflightnewsapi.net/v3/articles/${id}`)
            const article: ArticleTypes = response.data
            res.status(200).json(article)
            
            break;
        default:
            res.setHeader('Allow', ['GET'])
            res.status(405).json({msg: `method ${method} not allowed`})
            break;
    }
}