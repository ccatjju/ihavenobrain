import React, { useState } from "react";

export default function Mento() {
  const [person, setPerson] = useState({
    name: "쮄네",
    type: "고양이",
    mento: {
      name: "윤집사",
      type: "휴먼",
    },
  });

  return (
    <div>
      <h1>
        {person.name}는 위대한 {person.type} 이시다. 🏍️
      </h1>
      <h3>
        쮄네의 멘토는 🙋🏽‍♀️ {person.mento.name} 이고, 종족은 {person.mento.type}{" "}
        이꾸다.
      </h3>
      <button
        onClick={() => {
          const newMentoName = prompt("멘토해줘");

          setPerson((prev) => ({
            ...prev,
            mento: { ...prev.mento, name: newMentoName },
          }));
        }}
      >
        멘토 바꾸기
      </button>
      <button
        onClick={() => {
          const newMentoType = prompt("타입해줘");

          setPerson((prev) => ({
            ...prev,
            mento: { ...prev.mento, type: newMentoType },
          }));
        }}
      >
        멘토종족 바꾸기
      </button>
    </div>
  );
}
