import React from "react";

export default function ProfilePhoto({ url, isNew }) {
  return (
    <div className="ProfilePhoto">
      {isNew && <div className="New">New</div>}
      <img className="photo" src={url} alt="title images"></img>
    </div>
  );
}
