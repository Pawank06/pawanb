import React from 'react'

const CardCategory = ({title, summary, date}: {title: string, summary: string, date: string}) => {
  return (
    <div className='text-wrap my-10'>
        <h2 className='font-bold py-2 leading-5 hover:text-blue-400'>{title}</h2>
        <p className='leading-8 my-5'>{summary}</p>
        <p className='text-sm text-muted-foreground'>{date}</p>
    </div>
  )
}

export default CardCategory