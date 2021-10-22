import React from "react";
import GetData from "./services/getData";
import "./styles/style.scss";
const App = () => {
  return (
    <div className='app'>
      <GetData />
    </div>
  );
}
export default App;