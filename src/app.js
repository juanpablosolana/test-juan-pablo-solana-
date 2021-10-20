import React from "react";
import GetData from "./services/getData";
import createData from "./services/createData";
import "./styles/style.scss";


const App = () => {
  console.log(createData())
return(
  <div className='app'>
    <GetData/>
  </div>
);
}
export default App;