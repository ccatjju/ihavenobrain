import React, { useEffect, useState } from "react";

export default function Usehooks({ urlCheck }) {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`data/${urlCheck ? "sale_" : ""}test.json`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
        console.log("휴우 배열로 만들었다.");
        console.log("프로덕트값 : ", data);
      })
      .catch((error) => {
        setError(true);
        console.log("fetch error code : ", error);
      });
    return () => {
      console.log("닫힐 때 나타나지 두두등장. 청소 슥삭슥삭");
    };
  }, [urlCheck]);

  return [loading, error, product];
}
