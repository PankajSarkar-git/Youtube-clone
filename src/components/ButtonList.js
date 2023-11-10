import React from 'react'
import Button from './Button'



const list = ["All", "Live", "Game", "Song", "Movie", "JavaScript", "React", "Css", "Dance", "Crikect", "News","Cooking" ]
const ButtonList = () => {
  return (
    <div className='flex mt-2 justify-around'>
      {list.map((list)=>{
        return <Button name={list} key={list}/>
      })}
    </div>
  )
}

export default ButtonList
