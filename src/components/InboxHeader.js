import React from "react";
import SearchMessage from "./SearchMessage";
const inboxHeader = () => {
  return(
    <div className="inboxHeader">
      <div className="inboxHeader__title">
        <h1>Inbox</h1>
      </div>
      <SearchMessage />
    </div>
  )
  }

  export default inboxHeader;