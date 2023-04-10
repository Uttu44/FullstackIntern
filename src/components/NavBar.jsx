import React from 'react'
import "../index.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';


export default function NavBar() {
    const navigate = useNavigate();

    function Female(){
        navigate("/")
    }
    function Male(){
        navigate("/MaleEvent")
    }
  return (
    <div className='NavCon'>
      <div className='NavSeq'>
        <h1 className='NavText'>SECQURAISE</h1>
      </div>
      <div>
        <AiOutlineSearch className='Search' />
      </div>

      <div className='Buttons'>
        <div>
            <button className='FemBut' onClick={Female}>25</button>
        </div>
        <div>
            <button className='MalBut' onClick={Male}>25</button>
        </div>
      </div>
    </div>
  )
}
