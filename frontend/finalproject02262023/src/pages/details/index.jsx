import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './index.scss'
const Details = () => {
    const {_id} = useParams()
    const navigate = useNavigate()
    const [data, setData] = useState([])

    useEffect(() => {
  
        axios.get(`http://localhost:8800/teacher/${_id}`)
        .then((res)=>setData(res.data))
    }, [_id])

    console.log(data);
    
  return (
    <div className="details">
        <div className="detail">
<img src={data.image} alt="" />
<p>{data.name}</p>
<p>{data.position}</p>
<p>{data.description}</p>
<p>{data.price}</p>
<div className="buttons">
    <button onClick={()=>navigate('/')}>go back</button>
    <button>Delete</button>
</div>
        </div>
    </div>
  )
}

export default Details