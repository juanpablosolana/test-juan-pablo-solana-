import React from 'react';
const ShowData = ({ emailData }) => {
  return (
    <div>
      <p>
        From: {emailData.from}
      </p>
      <p>
        Tags: {emailData.tag}
      </p>
      <p>
        {emailData.body}
      </p>
      <input type="text" /> <button>Replay</button>
    </div>
  )
}
export default ShowData;