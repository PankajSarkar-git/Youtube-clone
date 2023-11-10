import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info);

    const {snippet,statistics} = info;
    const {title,thumbnails,publishedAt,channelTitle}= snippet;
    const {viewCount} = statistics;
  return (
    <div className='mx-4 my-2 p-2 w-80 border-black border rounded-lg shadow-lg'>
    <img src={thumbnails.medium.url} alt="thumbnails" />
    <ul>
        <li className='font-bold text-lg py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount} Viwes</li>
        <li>{publishedAt}</li>
    </ul>
    </div>
  )
}

export default VideoCard
