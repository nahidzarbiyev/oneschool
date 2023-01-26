import React from 'react'
import Formsect from '../../components/form'
import OurPrograms from '../../components/ourPrograms'
import OurTeachers from '../../components/ourTeachers'
import SignUp from '../../components/signupandbackground'

const Home = ({favorite, setFavorite}) => {
  return (
<>
<SignUp/>
<OurPrograms/>
<OurTeachers favorite={favorite} setFavorite={setFavorite}/>
<Formsect/>

</>
    )
}

export default Home