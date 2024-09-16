import React from 'react'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import CardCategory from '@/components/home/card-category'
import { getAllProjects } from '@/app/blog/utils'

export async function generateStaticParams() {
    const posts = getAllProjects()

    return posts.map(post => ({
        category: post.metadata.category,
    }))
}

const Page = ({params}: {params: {category: string}}) => {

    const posts = getAllProjects().filter(post => (
        post.metadata.category === params.category
    ))

    if(!posts) {
        notFound()
    }

  return (
    <div className='containers'>
        <div className='grid grid-cols-1 gap-4'>
            {posts.sort((a,b) => {
                if(new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)){
                   return -1; 
                }
                return 1;
            })
            .map((post) => (
                <Link href={`/blog/${post.metadata.category}/${post.slug}`} key={post.slug}>
                    <CardCategory title={post.metadata.title} date={post.metadata.publishedAt} summary={post.metadata.summary} />
                </Link>
            ))
            }
        </div>
    </div>
  )
}

export default Page