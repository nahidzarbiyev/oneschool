import React from 'react'
import './index.scss'
const  Favorite = ({favorite, setFavorite}) => {
    console.log(favorite);
  return (
    <div className='favorite'> 
    {
        favorite.map((el)=>{
            return(
                <>
               <div className='fav'>
               <img src={el.image} alt="" />
                <p>{el.name}</p>
               </div>
                </>
            )
        })
    }
    </div>
  )
}

export default  Favorite