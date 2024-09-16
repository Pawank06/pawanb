import React from 'react'
import { formatDate, getBlogPosts } from '../../utils'
import { notFound } from 'next/navigation'
import { BreadcrumbWithCustomSeparator } from '@/components/home/bread-crumb'
import { CustomMDX } from '@/components/mdx/mdx'

export async function generateStaticParams() {
    const posts = getBlogPosts()

    return posts.map(post => ({
        slug: post.slug,
    }))
}

const Page = ({ params }: { params: { category: string, slug: string } }) => {
    const post = getBlogPosts().find(post => (
        post.slug === params.slug
    ))

    if(!post) {
        notFound()
    }

    return (
        <>
        
        <div className='containers mt-10 px-4'>
            <BreadcrumbWithCustomSeparator category={post.metadata.category} slug={post.slug} />
            <h1 className='title text-2xl tracking-tighter mt-4 font-semibold'>{post.metadata.title}</h1>
            <div className='flex justify-between items-center mt-2 mb-4 text-sm'>
                <p className='text-muted text-sm'>{formatDate(post.metadata.publishedAt)}</p>
            </div>
        </div>
        <div className='containers prose px-4'>
            <CustomMDX source={post.content} />
        </div>
        </>

    )
}

export default Page