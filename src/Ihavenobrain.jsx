import React, { useState, useEffect } from "react";
import "./Ihavenobrain.css";

export default function Ihavenobrain() {
  const [footerText, setFooterText] = useState(
    <>
      어차피 아무도 신경쓰지 않는 푸터.
      <br />
      나도 당신을 거부 하겠어요.
    </>
  );

  // 확률로 메뉴를 보여줄지 메시지를 보여줄지 결정하는 상태
  const [showMenu, setShowMenu] = useState(true);

  // Footer의 랜덤 left 값을 관리하는 상태
  const [footerLeft, setFooterLeft] = useState(0);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const randomLeft = Math.floor(Math.random() * 100); // 0 ~ 100vw 사이의 랜덤한 값
    setFooterLeft(randomLeft + "vw");

    // 페이지가 로드된 후에 Footer를 부드럽게 나타내기 위한 타이머 설정
    setTimeout(() => {
      setIsFooterVisible(true); // Footer가 부드럽게 나타나도록 상태 업데이트
    }, 500); // 500ms 후에 Footer가 나타남
  }, []);

  // 페이지 로드 시 40% 확률로 메뉴 대신 메시지를 보여주기 위한 로직
  useEffect(() => {
    const randomValue = Math.random();
    if (randomValue > 0.4) {
      setShowMenu(false); // 70% 확률로 메시지를 표시
    }

    // 페이지 로드 시 Footer의 left 값을 랜덤하게 설정
    const randomLeft = Math.floor(Math.random() * 100); // 0 ~ 100vw 사이의 랜덤한 값
    setFooterLeft(randomLeft + "vw");
  }, []);

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

  // 푸터 마우스 호버시 발작
  const handleHover = (e) => {
    const randomX = Math.floor(Math.random() * 1000) + 1;
    const randomY = Math.floor(Math.random() * 1000) + 1;

    const directions = [
      `translate(${randomX + 2000}px, ${-randomY + 2000}px)`,
      `translate(${randomX + 2000}px, ${randomY + 2000}px)`,
      `translate(0px, ${-randomY - 2000}px)`,
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
      {showMenu ? (
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
      ) : (
        <div className="Header_none">
          <div className="Header_spin">
            당연히 있을꺼라 생각했겠지만, 당연한 것은 없어 바보야 바보야
            바보바보
          </div>
        </div>
      )}
      <div> - 절대 못 찾을 수 없는 메뉴 효과 추가</div>
      <div> - 인간의 손길을 거부하는 푸터 추가 </div>
      <div> - 계속 눌러보고 싶은 강려크한 메뉴 버튼 클릭 피드백 </div>
      <div> - 나타나고 싶을 때, 나타나고 싶은 곳에 나타나는 존재들 </div>
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
        className={`Footer ${isFooterVisible ? "FooterVisible" : ""}`}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        style={{ left: footerLeft }}
      >
        <div className="Footer-content">{footerText}</div>
      </div>
    </div>
  );
}
