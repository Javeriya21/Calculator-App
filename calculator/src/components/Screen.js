import React from "react";
// import {Textfit}  from 'react-textfit';
import "./Screen.css";

const Screen = ({ value }) => {
  return (
    // <Textfit
    <div
     className="screen" mode="single" max={70}>
      <h1>  {value}  </h1></div>
    // {/* // </Textfit> */}
  )   
  
};

 export default Screen;

 
//  const Screen = ({ value }) => {
//   return (
//     <Textfit className="screen" mode="single" max={70}>
//       {value}
//     </Textfit>
//   );
// };

// export default Screen;