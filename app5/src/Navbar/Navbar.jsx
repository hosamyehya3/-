import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEnvelope , faSearch } from '@fortawesome/free-solid-svg-icons';
import imgLogo from '../assets/logo-GdqARQRt.png'
import { Link, NavLink } from 'react-router-dom';
import Home from '../Home/Home';
export default function Navbar() {
  return <>
  
    <div className='flex shadowEffect mb-[16px] flex justify-around py-1 fixed top-0 right-0 left-0'>
      <div className='box-one flex  justify-start items-center'>
   <div className='iconRead  my-3 font-bold  py-3 px-8 text-white bg-amber-600 rounded-4xl'>ابدأ القراءة</div>
        <div className='iconSearch ms-6'>
              <FontAwesomeIcon className='text-[15px] color text-gray-400'  icon={faSearch} />
        </div>
      </div>
     <div className='box-two py-4 mt-2 font-bold flex  justify-center gap-5 items-center text-gray-400'>
     <h2 className='font-bold text-[15px] head-text'> <NavLink to={"home"}>من نحن</NavLink></h2> 
     <h2 className='font-bold text-[15px] head-text'><NavLink to={"about"}>المدونة</NavLink></h2> 
     <h2 className='font-bold text-[15px] head-text'> <NavLink to={"whoUs"}>الرئيسية</NavLink></h2> 
    </div>
    <div className='box-three flex    items-center'>
   <div className='text-gray-300 me-3'>
    <h1 className='text-end font-bold '>عدسة</h1>
    <p className='text-[12px] text-amber-600'>عالم التصوير الفوتوغرافي</p>
  </div>
  <div className='logo'>
    <img className='w-1/2' src={imgLogo} alt="imgLogo" />
  </div>
 
    </div>
    </div>
 
  
  
  
  
  </>
}
