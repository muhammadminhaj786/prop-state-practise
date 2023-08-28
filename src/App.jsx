import React  from "react";
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from "./assets/Navbar";
import MyBody from "./assets/MyBody";

const App =() => {
  //props dealing
  return(
    <>
      <MyNavbar home='minhaj'/>
      <MyBody />
    </>
  )
}

export default App