import React from "react";
import Header from "./components/Header";
import LeftEmails from "./components/leftEmails";
import Data from "./data/Data";
import "./styles/style.scss";

const App = () => {
  Data.map(item => {
    console.log(item.from, item.subject);
  })
return(
  <div>
    <Header/>
    <LeftEmails Data = {Data}/>
  </div>
);
}
export default App;