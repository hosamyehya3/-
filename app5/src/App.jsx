import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import About from './About/About'
import WhoUs from './WhoUs/WhoUs'
import Wrongpage from './Wrongpage/Wrongpage'
import Layout from './Layout/Layout'
import Avatars from './Avatars/Avatars'
let Newrouter = createBrowserRouter([
  {path : "" , element : <Layout/> , children : [
 {path: "home" , element : <Home/>} ,
  {path : "about" , element : <About/> } ,
  {
    path : "blog/mastering-golden-hour-photography" , element : <Avatars/>
  },
  {path : "whoUs" , element : <WhoUs/>} , 
  {path : "*" , element : <Wrongpage/>} ,
  {path: "" , element : <WhoUs/>}
  ]
    
  },
 
])



function App() {


  return <>
    
{/* <Navbar/> */}
<div className=' mx-auto'>
  <RouterProvider router={Newrouter}/>
</div>
    </>
 
}

export default App
