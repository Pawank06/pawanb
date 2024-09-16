import Link from 'next/link'
import React from 'react'

const SaaS = () => {
    return (
        <div className='my-20 px-4'>
            <h1 className='text-lg font-medium'>Building a saas?
            </h1>
            <p className='my-5 text-muted'>If you&apos;re working on something exciting and need help taking it to the next level, I&apos;m here for you.</p>
            <p className='text-muted'>
            The fastest way to reach me is by messaging me on X at <Link href="https://x.com/near0lx" className='font-medium text-white italic underline'>near0lx</Link> technologies.
            </p>
        </div>
    )
}

export default SaaS