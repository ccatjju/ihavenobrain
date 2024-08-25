import logo from "./logo.svg";
import "./App.css";

function AppJSX() {
  const name = "사과아아";
  const name1 = "ccatjju";
  const list = ["noru", "ccatjju", "jjeny", "horang"];

  return (
    <>
      <h1>Heeeelllloooo~~~</h1>
      <h2 className="name">{name}</h2>
      <h3>{`My hosue kiper is ${name1}`}</h3>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default AppJSX;
