import React, { useState } from "react";
import "./Ihavenobrain.css";

export default function Ihavenobrain() {
  const [footerText, setFooterText] = useState(
    <>
      어차피 아무도 신경쓰지 않는 푸터.
      <br />
      나도 당신을 거부 하겠어요.
    </>
  );

  // 무작위 색상 생성 함수
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Menu 클릭 시 무작위 배경색 적용
  const handleMenuClick = (e) => {
    e.currentTarget.style.backgroundColor = getRandomColor();
  };

  const handleHover = (e) => {
    const randomX = Math.floor(Math.random() * 1000) + 1;
    const randomY = Math.floor(Math.random() * 1000) + 1;

    const directions = [
      `translate(${randomX + 100}px, ${-randomY + 100}px)`,
      `translate(${randomX + 100}px, ${randomY + 100}px)`,
      `translate(0px, ${-randomY - 100}px)`,
    ];
    const randomDirection =
      directions[Math.floor(Math.random() * directions.length)];

    e.currentTarget.style.transform = randomDirection;

    setFooterText("으아아아아 손 대지마!! 싫어어어!!!");
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "translate(0, 0)";
    setFooterText(
      <>
        어차피 아무도 신경쓰지 않는 푸터.
        <br />
        나도 당신을 거부 하겠어요.
      </>
    );
  };

  return (
    <div>
      <div className="Header">
        <div className="Menu" onClick={handleMenuClick}>
          메뉴1
        </div>
        <div className="Menu_2" onClick={handleMenuClick}>
          메뉴2
        </div>
        <div className="Menu" onClick={handleMenuClick}>
          메뉴3
        </div>
        <div className="Menu_4" onClick={handleMenuClick}>
          메뉴4
        </div>
        <div className="Menu" onClick={handleMenuClick}>
          메뉴5
        </div>
      </div>
      <div> - 절대 못 찾을 수 없는 메뉴 효과 추가</div>
      <div> - 인간의 손길을 거부하는 푸터 추가 </div>
      <div> - 계속 눌러보고 싶은 강려크한 메뉴 버튼 클릭 피드백 </div>
      <div className="body">
        <h1>보지 아니하지 아니할 수 없는 대자보</h1>
        <div className="scroll">
          <div>
            <span>
              나날이 사람들은 문해력이 낮아지고 있다. 그래서 중요한 내용을 보지
              않고 넘어간다. 참을 수 엄따.
            </span>
            <span>
              나날이 사람들은 문해력이 낮아지고 있다. 그래서 중요한 내용을 보지
              않고 넘어간다. 참을 수 엄따.
            </span>
          </div>
        </div>
        <div className="topdown">
          <div>
            <span>
              보아라 사랑이 고픈 소년들아 보아라 사랑을 나눌 소녀들아 청춘의
              환상과 정열 가득 모아 정글은 언제나 맑음 뒤 흐림!
            </span>
            <span>
              보아라 사랑이 고픈 소년들아 보아라 사랑을 나눌 소녀들아 청춘의
              환상과 정열 가득 모아 정글은 언제나 맑음 뒤 흐림!
            </span>
            <span>
              보아라 사랑이 고픈 소년들아 보아라 사랑을 나눌 소녀들아 청춘의
              환상과 정열 가득 모아 정글은 언제나 맑음 뒤 흐림!
            </span>
            <span>
              보아라 사랑이 고픈 소년들아 보아라 사랑을 나눌 소녀들아 청춘의
              환상과 정열 가득 모아 정글은 언제나 맑음 뒤 흐림!
            </span>
          </div>
        </div>
      </div>
      <div
        className="Footer"
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <div className="Footer-content">{footerText}</div>
      </div>
    </div>
  );
}
