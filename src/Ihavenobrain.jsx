import React, { useState } from "react";
import "./Ihavenobrain.css";

export default function Ihavenobrain() {
  // Footer-content의 문구 상태 관리
  const [footerText, setFooterText] = useState(
    <>
      어차피 아무도 신경쓰지 않는 푸터.
      <br />
      나도 당신을 거부 하겠어요.
    </>
  );

  // Footer가 이동하는 함수
  const handleHover = (e) => {
    // 랜덤한 X와 Y 이동 거리 생성
    const randomX = Math.floor(Math.random() * 1000) + 1; // 1~1000px 사이의 랜덤한 값
    const randomY = Math.floor(Math.random() * 1000) + 1;

    // 우측 대각선 방향(양수, 양수), 위쪽(-Y), 오른쪽(+X) 중 하나를 랜덤하게 선택
    const directions = [
      `translate(${randomX + 100}px, ${-randomY + 100}px)`, // 위쪽으로 이동
      `translate(${randomX + 100}px, ${randomY + 100}px)`, // 우측 대각선으로 이동
      `translate(0px, ${-randomY - 100}px)`, // 위로 이동
    ];
    const randomDirection =
      directions[Math.floor(Math.random() * directions.length)];

    // Footer 요소에 transform 스타일 적용
    e.currentTarget.style.transform = randomDirection;

    // Footer-content 문구 변경
    setFooterText("으아아아아 손 대지마!! 싫어어어!!!");
  };

  // Footer가 원래 위치로 돌아오는 함수
  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "translate(0, 0)"; // 원래 위치로 복귀
    setFooterText(
      "어차피 아무도 신경쓰지 않는 푸터.\n나도 당신을 거부 하겠어요."
    ); // 원래 문구로 복구
  };

  return (
    <div>
      <div className="Header">
        <div className="Menu">메뉴1</div>
        <div className="Menu_2">메뉴2</div>
        <div className="Menu">메뉴3</div>
        <div className="Menu_4">메뉴4</div>
        <div className="Menu">메뉴5</div>
      </div>
      <div> - 으아아아앙 메뉴 효과 추가</div>
      <div> - 인간의 손길을 거부하는 푸터 추가 </div>
      <div className="body">
        <h1>보지 아니하지 아니할 수 없는 대자보</h1>
        <div className="scroll">
          <div>
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
