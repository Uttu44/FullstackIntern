import React from 'react'

export default function Filter() {
    function Fiilters (event){
        console.log(event.target.value)
    }
  return (
    <div>
        <select onChange={Fiilters}>
            <option>
                <select>Location
                <option value={"Chennai"}>Chennai</option>
                <option value={"Hyderabad"}>Hyderabad</option>
                <option value={"Bangalore"}>Bangalore</option>
                </select>
            </option>
            <option>Gender
                <option value={"Male"}>Male</option>
                <option value={"Female"}>Female</option>
            </option>
        </select>
      
    </div>
  )
}
