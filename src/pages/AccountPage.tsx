"use client";

import tw from "tailwind-styled-components";
import { Content } from "antd/lib/layout/layout";
import { Avatar, Button, Flex } from "antd";

const AccountPage = () => {
  return (
    <Container>
      <ContentContainer>
        <AvatarContainer>
          <Avatar size={30}>홍</Avatar>
          <div className={"text-black"}>홍길동</div>
        </AvatarContainer>
        <InformationContainer>
          <InformationRow>
            <div>이메일</div>
            <div>email@email.com</div>
          </InformationRow>
          <InformationRow>
            <div>가입일</div>
            <div>2020-02-20</div>
          </InformationRow>
          <InformationRow>
            <div>이메일</div>
            <div>email@email.com</div>
          </InformationRow>
        </InformationContainer>
        <OptionContainer>
          <OptionButton danger>회원탈퇴</OptionButton>
          <OptionButton>로그아웃</OptionButton>
        </OptionContainer>
      </ContentContainer>
    </Container>
  );
};

const Container = tw(Content)`
  flex
  w-[100%]
  h-[100%]
  laptop:flex-row
  mobile:flex-col
  laptop:p-16
  mobile:p-4
`;

const ContentContainer = tw(Flex)`
  flex
  flex-col
  gap-4
  w-[100%]
  h-fit
  laptop:p-16
  mobile:p-4
  rounded-md
`;

const AvatarContainer = tw(Flex)`
  flex
  flex-col
  h-fit
  gap-4
  align-middle
  items-center
`;

const InformationContainer = tw(Flex)`
  flex
  flex-col
  gap-4
  w-[100%]
  h-fit
  bg-white
  rounded-md
  p-4
  text-dark1-100
`;

const InformationRow = tw(Flex)`
  flex
  flex-row
  align-middle
  gap-2
  justify-between
`;

const OptionContainer = tw(Flex)`
  flex
  flex-row
  align-middle
  gap-4
  justify-end
`;

const OptionButton = tw(Button)`
  cursor-pointer
`;

export default AccountPage;
