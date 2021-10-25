import React from "react";
import SearchMessage from "./SearchMessage";
const inboxHeader = ({emailInbox}) => {

  return(
    <div className="inboxHeader">
      <div className="inboxHeader__title">
        <p>Inbox</p>
        <small className="inboxHeader__number">{emailInbox}</small>
      </div>
      <SearchMessage />
    </div>
  )
  }

  export default inboxHeader;