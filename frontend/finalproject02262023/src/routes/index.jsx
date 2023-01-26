import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddTeacher from '../pages/add-teacher'
import Details from '../pages/details'
import Favorite from '../pages/favorite'
import Home from '../pages/home'

const Routing = ({favorite, setFavorite}) => {
  return (
<Routes>

    <Route path='/' element={
        <Home favorite={favorite} setFavorite={setFavorite}/>
    }/>
<Route path='/teachers' element={<AddTeacher/>}
/>
<Route path='/:_id' element={ <Details/>}/>
<Route path='/favorite' element={<Favorite favorite={favorite} setFavorite={setFavorite}/>} />
</Routes>
    )
}

export default Routing