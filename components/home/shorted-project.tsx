import { getAllProjects } from '@/app/blog/utils'
import Link from 'next/link'
import React from 'react'

const ShortedProject = () => {
    const latestProject = getAllProjects()

  return (
    <div className='my-20'>
        <div className='flex items-center justify-between mb-10 px-4'>
        <h1 className='text-lg text-center font-medium '>Projects</h1>
        <Link href="/blog" className='text-center text-muted hover:underline'>
        See All
        </Link>
        </div>
        {
            latestProject.sort((a, b) => {
                if(new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)){
                   return -1; 
                }
                return 1;
            })
            .map((project) => (
                <article key={project.slug}  className='text-wrap my-5 hover:bg-[#191918] rounded-lg px-4 py-3'>
                    <Link href={`/projects/${project.metadata.category}/${project.slug}`}>
                    <h1 className='font-medium py-2 leading-5'>{project.metadata.title}</h1>
                    <p className='text-muted'>{project.metadata.summary}</p>
                    <p className='text-xs text-muted-foreground mt-2 mb-2 border border-stone-800 w-fit px-3 py-1 rounded-md bg-stone-900'>{project.metadata.category}</p>
                    </Link>
                </article>
            )).slice(0, 4)
        }
    </div>
  )
}

export default ShortedProject