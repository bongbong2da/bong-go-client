import React from "react";
import tw from "tailwind-styled-components";
import { SampleBus } from "types/CustomTypes";
import { Button, Flex } from "antd";

interface BusContentContainerProps {
  bus: SampleBus;
  onClose?: () => void;
}

const BusContentContainer = (props: BusContentContainerProps) => {
  return (
    <Container>
      <ContentContainer>
        <RowContainer className={`text-xl`}>{props.bus.title}</RowContainer>
        <RowContainer>행선지 : {props.bus.gameTitle}</RowContainer>
        <RowContainer>
          <div>기사 :</div>
          <AvatarContainer>
            <AvatarInner>{props.bus.username.charAt(0)}</AvatarInner>
          </AvatarContainer>
          <div>{props.bus.username}</div>
        </RowContainer>
        <RowContainer>일시 : 2022-09-13</RowContainer>
      </ContentContainer>
      <CrewContainer>
        <div>[3/4] 참가 인원</div>
        <CrewRow>
          <AvatarContainer>
            <AvatarInner>홍</AvatarInner>
          </AvatarContainer>
          홍길동
        </CrewRow>
        <CrewRow>
          <AvatarContainer>
            <AvatarInner>김</AvatarInner>
          </AvatarContainer>
          김철수
        </CrewRow>
        <CrewRow>
          <AvatarContainer>
            <AvatarInner>이</AvatarInner>
          </AvatarContainer>
          이영희
        </CrewRow>
        <CrewRow>비어있음</CrewRow>
      </CrewContainer>
      <OptionContainer>
        <OptionButton className={"bg-primary1 text-dark2-900"}>
          참가 요청
        </OptionButton>
        <OptionButton className={"bg-warning"}>시간 변경 신청</OptionButton>
        <OptionButton
          className={"bg-dark2-400 text-dark2-900"}
          onClick={props.onClose}
        >
          닫기
        </OptionButton>
      </OptionContainer>
    </Container>
  );
};

const Container = tw(Flex)`
  flex
  flex-col
  gap-4
  h-[100vh]
  min-w-[30vw]
  border-l
  border-dark2-900
  p-10
  bg-dark2-900
  overflow-auto
  overscroll-none
  scrollbar-none
  
  // Mobile Modal
  mobile:max-laptop:absolute
  mobile:max-laptop:m-auto
  mobile:max-laptop:p-4
  mobile:max-laptop:inset-0
  mobile:max-laptop:w-[80vw]
  mobile:max-laptop:h-[70vh]
  mobile:max-laptop:rounded-xl
  mobile:max-laptop:border
  mobile:max-laptop:border-dark2-600
`;

const ContentContainer = tw(Flex)`
  flex
  w-[100%]
  flex-col
  gap-4
  text-dark1-100
`;

const RowContainer = tw(Flex)`
  flex
  flex-row
  gap-2
  align-middle
  w-[100%]
  border
  border-dark2-700
  px-4
  py-2
  rounded-md
  h-fit
  bg-white
`;

const CrewContainer = tw(Flex)`
  flex
  w-[100%]
  flex-col
  p-2
  gap-4
  text-dark1-100
  border
  border-dark2-700
  rounded-md
  bg-white
`;

const CrewRow = tw(Flex)`
  flex
  flex-row
  items-center
  gap-2
  w-[100%]
  border
  border-dark2-700
  px-4
  py-2
  rounded-md
  h-fit
  bg-white
`;

const AvatarContainer = tw(Flex)`
  flex 
  h-[36px] 
  w-[36px] 
  mobile:max-laptop:h-[20px] 
  mobile:max-laptop:w-[20px] 
  rounded-full size-8 bg-background1-900 p-[2px]
`;

const AvatarInner = tw(Flex)`
  flex
  flex-col
  h-full
  w-full
  rounded-full
  bg-primary5-900
  text-center
  justify-center
  align-middle
  text-[16px]
  mobile:max-laptop:text-[11px]
`;

const OptionContainer = tw(Flex)`
  flex
  flex-col
  gap-4
  w-[100%]
  h-fit
`;

const OptionButton = tw(Button)`
  flex
  justify-center
  items-center
  h-[40px]
  rounded-md
  bg-dark2-700
  text-dark1-100
`;

export default BusContentContainer;
