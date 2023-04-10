import "../index.css";
import React from "react";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import "firebase/firestore";
import { db } from "../Firebasee";
import MaleDet from "./MaleDet";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { RxHamburgerMenu } from "react-icons/rx";
import MalePics from "./MalePics";

export default function MaleEvent() {

  const [data, setData] = useState([]);
  const [photUrl, setPhotoUrl] = useState(
    "https://firebasestorage.googleapis.com/v0/b/full-stack-internship.appspot.com/o/Male01.jpg?alt=media&token=2c783e89-a79c-4008-b129-6090236756f8");
  const [name, SetName] = useState("Male01");
  const [det, setDet] = useState({
    ID: "EVT002",
    Location: "Chennai",
    Gender: "Male",
    Name: "Male01",
    Date: "5-Jan-23",
    Time: "9:11:03",
  });

  useEffect(() => {
    (async () => {
      const unsub = await onSnapshot(
        collection(db, "Male"),
        (snapShot) => {
          let list = [];
          snapShot.docs.forEach((doc) => {
            list.push({ id: doc.id, ...doc.data() });
          });
          setData(list);
        },
        (error) => {
          console.log(error);
        }
      );
      return () => {
        unsub();
      };
    })();
  }, []);


  function handleClic(url, Name, id, loc, gen, date, time) {
    setPhotoUrl(url);
    SetName(Name);
    console.log(date);
    setDet(
      {
        ID: id,
        Location: loc,
        Gender: gen,
        Name: Name,
        Time: time,
        Date: date,
      }
    );
  }
  // console.log(det);

  return (
    <>
      <NavBar />
      <div className="Flex">
        <SideBar />
        <MaleDet
          id={det.ID}
          Location={det.Location}
          Gender={det.Gender}
          Name={det.Name}
          Time={det.Time}
          Date={det.Date}
        />
        <MalePics Url={photUrl} Name={name} />
        <div className="FemCon">
          <div className="FemCon2">
            <h1 className="text">Events</h1>
            <div className="EvnHm">
              <li>
                <RxHamburgerMenu className="EvnHmmm" />
                <ul className="submenu">
                  <li>Location
                  <ul className="submenu2">
                    <li>Chennai</li>
                    <li>Hyderabad </li>
                    <li>Bangalore</li>
                  </ul>
                  </li>
                  <li>Gender
                  <ul className="submenu2">
                    <li>Male</li>
                    <li>Female </li>
                  </ul>
                  </li>
                  <li>Date</li>
                  <ul className="submenu2"></ul>
                </ul>
              </li>
            </div>
            {data.map((user) => {
              // console.log(user);
              return (
                <div
                  key={user.ID}
                  className="EventCon"
                  onClick={() =>
                    handleClic(
                      user.URL,
                      user.Name,
                      user.ID,
                      user.Location,
                      user.Gender,
                      user.Date,
                      user.Time
                    )
                  }
                >
                  <div className="cls">
                    <div className="EventID">
                    {user.ID} : {user.Location}
                    </div>
                    <div className="EventDate">
                    {user.Date} {user.Time}
                    </div>
                    <br></br>
                    <h2 className="EventDet">Person Detected</h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}




      

// export default function MaleDet() {

    



// import React from 'react'

// export default function MaleEvent() {
//   console.log("axd")
//   return (
//     <div>
//       Male
//     </div>
//   )
// }
