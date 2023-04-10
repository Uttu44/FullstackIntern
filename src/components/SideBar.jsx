import "../index.css";
import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { BiLogIn } from "react-icons/bi";

export default function SideBar() {
  return (
    <div className='SideBarCon'>
        <div className='Hmburger'>
        <GiHamburgerMenu className='Hmburger'/>
        </div>
        <div>
            <BiLogIn className="Login"/>
        </div>
      
    </div>
  )
}
