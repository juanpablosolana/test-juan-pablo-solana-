import { React, useState, useEffect } from "react";
import data from "../data/mail-data.json";
import ShowData from "../components/showData";
import InboxHeader from "../components/inboxHeader";

const GetData = () => {
  const [emailData, setEmailData] = useState(null);
  const [newEmail, setNewEmail] = useState([]);
  const [emailInbox, setEmailInbox] = useState();
  useEffect(() => {
    setEmailInbox(data.length);
  }, [data]);

  return (
    <>
      <div className="left">
        {<InboxHeader emailInbox={emailInbox}/>}
        {
          data.map((email, index) => {
            // console.log(email.toString());
            return (
              <section key={(index.toString())} className='card' onClick={() => (setEmailData(email))}>
                <div className='cardTitle'>{email.from}</div>
                <div>{email.subject}</div>
                <div>{email.date}</div>
                {email.attachements ? (email.attachements.map((attachement) => {
                  return <div>{attachement.name}</div>;
                })) : <div> No attachement</div>}
              </section>
            )
          }
          )
        }
      </div>
      <div className="right">
        {emailData ? <ShowData emailData={emailData} /> : 'Select a Email'}
      </div>
    </>
  )
}


export default GetData;