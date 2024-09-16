import Hero from '@/components/home/hero'
import SaaS from '@/components/home/saas'
import ShortedPost from '@/components/home/shorted-post'
// import ShortedProject from '@/components/home/shorted-project'
import React from 'react'

const page = () => {
  return (
    <>

    <main className='containers'>
      <Hero/>
      <ShortedPost/>
      {/* <ShortedProject/> */}
      <SaaS/>
    </main>
    </>
  )
}

export default page