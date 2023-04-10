import React from "react";

export default function FemDet(props) {
//   console.log(props.Date);
//   console.log(props.Time);
  return (
    <div className="Description">
      <div className="head">
        <h1 className="headPro">{props.id}</h1>
        <h2 className="headPro">Person Detected</h2>
      </div>
      <br></br>
      <div className="Mid">
        <h1 className="MidCon">Name: {props.Name}</h1>
        <h1 className="MidCon">Location: {props.Location}</h1>
        <h1 className="MidCon">Date: {props.Date}</h1>
        <h1 className="MidCon">Time: {props.Time}</h1>
      </div>

      <div className="Bot">
        <h1 className="BotDec">Description:</h1>
        {/* <br></br> */}
        <h1 className="BotCon">{props.Name} Detected at</h1>
        <h1 className="BotCon">{props.Location} on  {props.Date}</h1>
      </div>
    </div>
  );
}
