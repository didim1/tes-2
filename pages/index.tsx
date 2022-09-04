import axios from 'axios'
import Link from 'next/link'
import useSwr from 'swr'
import { ArticleTypes } from '../interface'



const fetcher = (url: string) => axios.get(url).then((res) => res.data)
const Home = () => {
  const { data, error } = useSwr<ArticleTypes[]>('/api/articles', fetcher)

  if (error) return <div>Failed to load users</div>
  if (!data) return <div>Loading...</div>
  return (
    <div className="container mx-auto">
      <div className='flex justify-center items-center flex-col'>
        <h1 className='mt-5 text-3xl font-bold'>Articles</h1>
        <div>
          <ul className='text-center'>
            {data.map((article: ArticleTypes) => (
              <li key={article.id} className='hover:underline'>
                <Link href={`/article/${article.id}`}>{article.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home
