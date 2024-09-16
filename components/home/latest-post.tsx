import { formatDate, getBlogPosts } from '@/app/blog/utils'
import Link from 'next/link'
import React from 'react'

const LatestPost = () => {
    const latestPosts = getBlogPosts()

  return (
    <div className='my-20 px-4'>
        <h1 className='text-lg font-medium mb-10'>Recent Published</h1>
        {
            latestPosts.sort((a, b) => {
                if(new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)){
                   return -1; 
                }
                return 1;
            })
            .map((post) => (
                <article key={post.slug} className='text-wrap my-5 py-3 border border-stone-800 px-4 rounded-lg bg-stone-900'>
                    <Link href={`/blog/${post.metadata.category}/${post.slug}`}>
                    <div className='flex justify-between'>
                    <h1 className='font-medium'>{post.metadata.title}</h1>
                    <p className='text-sm text-muted-foreground'>{formatDate(post.metadata.publishedAt)}</p>
                    </div>
                    <p className='text-muted text-sm mt-3'>{post.metadata.summary}</p>
                    
                    </Link>
                </article>
            ))
        }
    </div>
  )
}

export default LatestPost