
import React from 'react'
import { notFound } from 'next/navigation'
import { BreadcrumbWithCustomSeparator } from '@/components/home/bread-crumb'
import { CustomMDX } from '@/components/mdx/mdx'
import { formatDate, getAllProjects } from '@/app/blog/utils'

export async function generateStaticParams() {
    const posts = getAllProjects()

    return posts.map(post => ({
        slug: post.slug,
    }))
}

const Page = ({ params }: { params: { category: string, slug: string } }) => {
    const post = getAllProjects().find(post => (
        post.slug === params.slug
    ))

    if(!post) {
        notFound()
    }

    return (
        <>
        
        <div className='containers px-4 mt-10'>
            <BreadcrumbWithCustomSeparator category={post.metadata.category} slug={post.slug} />
            <h1 className='title text-2xl tracking-tighter mt-4 font-semibold'>{post.metadata.title}</h1>
            <div className='flex justify-between items-center mt-2 mb-4 text-sm'>
                <p className='text-muted text-sm'>{formatDate(post.metadata.publishedAt)}</p>
            </div>
        </div>
        <div className='containers px-4 prose'>
            <CustomMDX source={post.content} />
        </div>
        </>

    )
}

export default Page