import React, { useEffect, useState } from "react";
import Usehooks from "../hooks/Usehooks";

export default function LiList() {
  const [sale, setSale] = useState(false);
  const [loading, error, product] = Usehooks({ urlCheck: sale });

  const handleChange = () => {
    setSale((prev) => !prev);
  };

  useEffect(() => {
    return () => {
      console.log("list의 로딩 값 : ", loading);
      console.log("list의 에러 값 : ", error);
      console.log("list의 프로덕 값 : ", loading);
    };
  });

  if (loading) return <h1>로딩딩링딩동</h1>;

  // if (error) return <h3>어!?!? 이러면 안돼!!!</h3>;

  return (
    <div>
      <input id="checkBox" type="checkbox" onChange={handleChange} />
      <label htmlFor="checkBox">딴거딴거 🤪🤪</label>
      <ul>
        {product.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
