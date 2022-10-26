import React, { useState } from 'react'

const Navbar = () => {
    let Links =[
      {name:"Home",link:"/"},
      {name:"About",link:"/"},
      {name:"FAQ",link:"/"},
      {name:"Contact Us",link:"/"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='z-20 shadow-md w-full fixed top-0 left-0'>
      <div className='bg-black md:flex items-center justify-between bg-white py-2 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-bold 
      text-[#00df9a]'>
        <span className='text-3xl text-[#00df9a] mr-1 pt-2'>
        <ion-icon name="logo-ionic"></ion-icon>
        </span>
        Dev Mate
      </div>

      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-4 cursor-pointer md:hidden'>
      <span className='text-3xl text-#00df9a mr-1 pb-1 pt-2'>
      <ion-icon name={open ? "close-outline":"menu-outline"}></ion-icon>
      </span>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a href={link.link} className='text-gray-400 hover:text-white duration-500'>{link.name}</a>
            </li>
          ))
        }
    <button className='bg-[#00df9a] text-white font-bold py-1.5 px-6 rounded md:ml-8 hover:bg-indigo-400 
    duration-500'>
          Get Started
        </button>
      </ul>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Navbar;