import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {AiOutlineHeart,AiFillEye} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './index.scss'
const OurTeachers = ({favorite,setFavorite}) => {
const [data, setData] = useState([])
const [togglesort, setToggleSort] = useState(true)
useEffect(() => {
  
    axios.get("http://localhost:8800/teacher")
    .then((res)=>setData(res.data))
}, [])



const handleSearch =(e)=>{
    axios.get("http://localhost:8800/teacher")
    .then((res)=>{
        let searcharr = res.data.filter((el)=>el.name.toLowerCase().includes(e.target.value))
        setData(searcharr)
    })
}
const handleSort=()=>{
setToggleSort(!togglesort)

if (!togglesort) {
 let sortData = data.sort((a,b)=>a.price-b.price)
 setData(sortData)
}
else{
    axios.get("http://localhost:8800/teacher")
    .then((res)=>setData(res.data))
}
}

const handleDelete=(id)=>{
axios.delete(`http://localhost:8800/teacher/${id}`)
let filteredData = data.filter((el)=>el._id !== id)
setData(filteredData)
}

const handlefavorite = (obj)=>{
let favArr = favorite.find((el)=>el._id===obj._id)
if (!favArr) {
    setFavorite([...favorite, obj])
}
else{
    let removefav = favorite.filter((el)=>el._id !== obj._id)
    setFavorite(removefav)
}
console.log(favorite);
}

    return (
    <div className='teachers'>
<div className='text'>
    <h1>
       Our Teachers
        </h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut neque! Doloribus sunt non aut reiciendis, vel recusandae obcaecati hic dicta repudiandae in quas quibusdam ullam, illum sed veniam!
        </p>
    </div>
<input type="text"  placeholder='SEARCH BY NAME' onChange={(e)=>handleSearch(e)}/>
<button onClick={()=>handleSort()}>
    {
        (!togglesort)
        ?
        "sort data"
        :
        "back"
    }
</button>
    <div className='cards'>
    
     {
        data?.map((elem)=>{
            return(
                <div className="card" key={elem._id}>
                    <img src={elem?.image} alt="" />
                    <h4>{elem.name}</h4>
                    <p>{elem.position}</p>
                    <span>{elem.description}</span>
                    <p className='price'>{elem.price}</p>
               <div className='buttons'>
               <button className='delete' onClick={()=>handleDelete(elem._id)}>delete</button>
                    <span
                    className={
                        
                        (!favorite.find((el)=>el._id===elem._id))
                        ?
                        null
                        :
                        "colored"
                    

                    }
                    
                    onClick={()=>handlefavorite(elem)}><AiOutlineHeart/></span>
                    <Link to={`/${elem._id}`}><span><AiFillEye/></span></Link>
               </div>
                </div>
            )
        })
     }
     
    </div>
    </div>
  )
}

export default OurTeachers