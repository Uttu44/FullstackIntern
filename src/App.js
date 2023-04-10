// import './App.css';
// import React from 'react';
import FemaleEvents from './components/FemaleEvents';
import MaleEvent from './components/MaleEvent';
// // import Photoes from './components/Photoes'
// // import Events from './components/events';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  // console.log(currentUser);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={  
                  <FemaleEvents />
              }
            />
          </Route>
        </Routes>
        <Routes>
          <Route path="/MaleEvent">
            <Route
              index
              element={  
                  <MaleEvent />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// import './App.css';
// import React from 'react';
// import FemaleEvents from './components/FemaleEvents';
// import MaleEvent from './components/MaleEvent';
// // import Photoes from './components/Photoes'
// // import Events from './components/events';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// function App() {
//   return (<>
//    <div className='Container'>
//     <div className='Event'>
//         <FemaleEvents/>
//       < MaleEvent />

//     </div>
//    </div>
//   </>
//   );
// }

// export default App;
