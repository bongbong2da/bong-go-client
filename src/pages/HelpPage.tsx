"use client";

import React from "react";
import tw from "tailwind-styled-components";
import { Flex } from "antd";

const HelpPage = () => {
  return (
    <Container>
      <ContentContainer>
        <div>도움말 페이지</div>
        <div>(버스 리스트 스크린샷)</div>
        <div>홈 화면에서 타고싶은 버스를 찾아보세요</div>
        <div>(필터링 스크린샷)</div>
        <div>
          원하는 게임 혹은 팔로잉 하고 있는 기사님의 버스만 볼 수 있어요
        </div>
        <div>(버스 배차하기 스크린샷)</div>
        <div>
          내가 기사가 되고 싶을 땐 배차하기를 눌러 직접 버스를 생성해보세요
        </div>
      </ContentContainer>
    </Container>
  );
};

const Container = tw(Flex)`
  w-[100%]
  flex
  laptop:p-24
  mobile:p-4
`;

const ContentContainer = tw(Flex)`
  flex
  flex-col
  w-[100%]
  bg-white
  p-4
  gap-4
  rounded-md
  overflow-auto
  scrollbar-none
`;

export default HelpPage;
