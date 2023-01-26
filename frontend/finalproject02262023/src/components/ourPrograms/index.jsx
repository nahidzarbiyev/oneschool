import React from 'react'
import './index.scss'
import {FaGraduationCap,FaUniversity} from 'react-icons/fa'
const OurPrograms = () => {
  return (
    <div className='programs'>
    <div className='text'>
    <h1>
       Our Programs
        </h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut neque! Doloribus sunt non aut reiciendis, vel recusandae obcaecati hic dicta repudiandae in quas quibusdam ullam, illum sed veniam!
        </p>
    </div>
    <div className='graduate'>
        <div className='image'>
            <img src="https://preview.colorlib.com/theme/oneschool/images/undraw_youtube_tutorial.svg" alt="" />

        </div>
        <div className='statistic'><h1>We Are Excellent In Education</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.</p>
        <div className='icons'> 
            <span><span className='icon'><FaGraduationCap/></span> 22,931 Yearly Graduates</span>
            <span><span  className='icon'><FaUniversity/></span> 150 Universities Worldwide</span></div></div>
    </div>
    <div className='graduate'>
      
        <div className='statistic'><h1>Strive for Excellent</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.</p>
        <div className='icons'> 
            <span><span className='icon'><FaGraduationCap/></span> 22,931 Yearly Graduates</span>
            <span><span  className='icon'><FaUniversity/></span> 150 Universities Worldwide</span></div></div>
            <div className='image'>
            <img src="https://preview.colorlib.com/theme/oneschool/images/undraw_teaching.svg" alt="" />

        </div>
    </div>
    <div className='graduate'>
        <div className='image'>
            <img src="https://preview.colorlib.com/theme/oneschool/images/undraw_teacher.svg" alt="" />

        </div>
        <div className='statistic'><h1>Education is life</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.</p>
        <div className='icons'> 
            <span><span className='icon'><FaGraduationCap/></span> 22,931 Yearly Graduates</span>
            <span><span  className='icon'><FaUniversity/></span> 150 Universities Worldwide</span></div></div>
    </div>
    </div>
  )
}

export default OurPrograms