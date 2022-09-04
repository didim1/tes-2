import {NextApiRequest, NextApiResponse} from 'next'
import axios from 'axios'
import {ArticleTypes} from '../../interface'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).end(`method ${req.method} not allowed`)
    }

    const response = await axios.get('https://api.spaceflightnewsapi.net/v3/articles')
    const articles: ArticleTypes[] = await response.data

    res.status(200).json(articles)
}