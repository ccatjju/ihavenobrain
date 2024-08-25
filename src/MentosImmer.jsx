import React, { useReducer, useState } from "react";
import personReducer from "./reducer/personReducer";
import { useImmer } from "use-immer";

export default function MentosImmer() {
  const [person, updatePerson] = useImmer(info);

  const handleChange = () => {
    const answer = prompt("단짝 이름을 입력해주세요.");
    const findCheck = person.mentos.find((m) => m.name === answer);
    if (findCheck) {
      const changeName = prompt("바꿀 이름을 입력해주세요.");
      updatePerson((person) => {
        const changeMento = person.mentos.find((m) => m.name === answer);
        changeMento.name = changeName;
      });
    } else {
      alert("그런 이름 없는디?");
    }
  };

  const handleNameAdd = () => {
    const newMento = prompt("추가할 이름을 넣어");
    const newMentoTitle = prompt("타이.. 넣어");
    updatePerson((person) => {
      person.mentos.push({
        id: person.mentos.length,
        name: newMento,
        title: newMentoTitle,
      });
    });
  };

  const handelDelete = () => {
    const deleteMento = prompt("제거할 이름");
    const index = person.mentos.findIndex((m) => m.name === deleteMento);
    updatePerson((person) => {
      const index = person.mentos.findIndex((m) => m.name === deleteMento);
      person.mentos.splice(index, 1);
    });
  };

  return (
    <div>
      <h1>보자보자 알아보자</h1>
      <p>
        {person.name}는 {person.title}이다.
        <br></br>그런데 단짝은!?
      </p>
      <ul>
        {person.mentos.map((mentos) => (
          <li key={mentos.id}>
            {mentos.name} / {mentos.title}
          </li>
        ))}
      </ul>
      <button onClick={handleChange}>단짝 이름 바꾼다!!</button>
      <button onClick={handleNameAdd}>추가추가</button>
      <button onClick={handelDelete}>삭제삭제</button>
    </div>
  );
}

const info = {
  name: "젤리클",
  title: "홈프로텍터",
  mentos: [
    { id: 0, name: "kk", title: "지배자" },
    { id: 1, name: "cc", title: "플로워어리어" },
    { id: 2, name: "ss", title: "한량" },
  ],
};
