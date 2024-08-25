import React from "react";
import ProfilePhoto from "./profilePhoto";

export default function Profile({ url, name, desc, isNew }) {
  return (
    <div className="Profile">
      <ProfilePhoto url={url} isNew={isNew} />
      <h1>{name}</h1>
      <p>{desc}</p>
    </div>
  );
}
