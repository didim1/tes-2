import axios from 'axios'
import React from 'react'
import useSwr from 'swr'
import { useRouter } from 'next/router'
import { ArticleTypes } from '../../interface'
import Link from 'next/link'

const fetcher = (url: string) => axios.get(url).then(res => res.data)

const Detail = () => {
    const router = useRouter()
    const { data, error } = useSwr<ArticleTypes>(router.query.id ? `/api/article/${router.query.id}` : null, fetcher)

    if (error) return <div>error</div>
    if (!data) return <div>loading...</div>


    return (
        <div className="container mx-auto">
            <Link href='/'>
                <button type="button" className="text-white self-start mt-5 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
                </button>
            </Link>
            <h1 className='text-3xl font-bold mt-5 text-center'>Detail Article</h1>

            <div className='flex justify-center items-center flex-col'>
                <div className='max-w-2xl mx-auto py-10'>
                    <p><span className='font-bold text-lg uppercase'>id</span>: {data.id} </p>
                    <p><span className='font-bold text-lg uppercase'>title</span>: {data.title} </p>
                    <p><span className='font-bold text-lg uppercase'>url</span>: {data.url} </p>
                    <p><span className='font-bold text-lg uppercase'>image Url</span>: {data.imageUrl} </p>
                    <p><span className='font-bold text-lg uppercase'>news Site</span>: {data.newsSite} </p>
                    <p><span className='font-bold text-lg uppercase'>summary</span>: {data.summary} </p>
                    <p><span className='font-bold text-lg uppercase'>published At</span>: {data.publishedAt} </p>
                    <p><span className='font-bold text-lg uppercase'>updated At</span>: {data.updatedAt} </p>
                </div>
            </div>
        </div>
    )
}

export default Detail