import React, { useState } from 'react'
import { navData, socialData } from '../data'
import logo from '../img/header/logo.svg'
import {FaBars} from 'react-icons/fa'
import {Link} from 'react-scroll'
const Navbar = () => {
    const [showMenu,setShowMenu]=useState(false)
    const [scrollHeight,setScrollHeight]=useState(false)
    window.addEventListener('scroll',()=>{
        if(window.scrollY>10)setScrollHeight(true)
        else setScrollHeight(false)
    })
  return (
    <nav className={`${scrollHeight?'py-2 border-b-gray-600 border-b-2 shadow shadow-gray-600':'py-4 border-white border-b-2'} transition duration-500 w-full bg-white fixed top-0 right-0 z-30`}>
        <div className='w-[90%] mx-auto px-4 flex justify-between items-center'>
            <img src={logo} className='z-30'/>
            <ul className='hidden md:flex items-center gap-4 text-gray-600 font-semibold text-lg '>
                {navData.map(item=><li key={item.id} className='hover:border-gray-600 hover:border-b-2 cursor-pointer transition duration-500'><Link to={item.name} offset={item.offset} smooth={true}>{item.name}</Link></li>)}
            </ul>
            <ul className='hidden md:flex items-center gap-4 text-xl text-gray-600'>
                {socialData.map(item=><li key={item.id}><a href={item.href} ><item.icon/></a></li>)}
            </ul>
            <FaBars onClick={_=>setShowMenu(p=>!p)} className={`block md:hidden text-gray-600 text-3xl z-30 cursor-pointer transition duration-500 ${showMenu?'rotate-90':'rotate-0'}`}/>
            <div className={`fixed top-[100px] ${showMenu?'translate-y-0':'translate-y-[-130%]'} transition duration-500 left-0 w-full h-auto bg-white border-b-gray-600 border-b-2 shadow shadow-gray-600`}>
                <ul className='flex flex-col my-10 items-center gap-4 text-gray-600 font-semibold text-lg '>
                    {navData.map(item=><li key={item.id}  className='hover:border-gray-600 border-b-2 border-white cursor-pointer transition duration-500'><Link to={item.name} smooth={true}><p onClick={_=>setShowMenu(false)}>{item.name}</p></Link></li>)}
                </ul>
                <ul className='flex justify-center my-10 items-center gap-4 text-xl text-gray-600'>
                    {socialData.map(item=><li key={item.id}><a href={item.href} ><item.icon/></a></li>)}
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar