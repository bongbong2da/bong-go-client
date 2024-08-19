"use client";

import React from "react";
import tw from "tailwind-styled-components";
import { Content } from "antd/lib/layout/layout";
import { Button, Flex, Form, Input } from "antd";
import Text from "antd/lib/typography/Text";
import FormItem from "antd/lib/form/FormItem";
import Password from "antd/lib/input/Password";

type FieldType = {
  email: string;
  password: string;
};

export default function SignInPage() {
  const handleOnFinish = () => {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "/";
  };

  return (
    <Container>
      <ContentContainer onFinish={handleOnFinish}>
        <LogoContainer>
          <LogoText>🚙 봉-고</LogoText>
        </LogoContainer>
        <FormItem<FieldType>
          label={"아이디"}
          name={"email"}
          rules={[{ required: true, message: "아이디를 입력해주세요" }]}
        >
          <EmailInput type={"email"} placeholder={"bongo@email.com"} />
        </FormItem>
        <FormItem<FieldType>
          label={"비밀번호"}
          name={"password"}
          rules={[{ required: true, message: "비밀번호를 입력해주세요" }]}
        >
          <PasswordInput type={"password"} placeholder={"******"} />
        </FormItem>
        <FormItem>
          <Button type={"primary"} htmlType={"submit"}>
            로그인
          </Button>
        </FormItem>
        <SocialLoginOptionContainer>
          <OptionButton>카카오</OptionButton>
          <OptionButton>구글</OptionButton>
        </SocialLoginOptionContainer>
        <FooterContainer>
          <OptionButton>회원가입</OptionButton>
          <OptionButton>비밀번호 찾기</OptionButton>
        </FooterContainer>
      </ContentContainer>
    </Container>
  );
}

const Container = tw(Content)`
  flex
  h-[100svh]
  align-middle
  items-center
  justify-center
`;

const LogoContainer = tw(Flex)`
  flex
  items-center
  justify-center
`;

const LogoText = tw(Text)`
  text-primary1-700
  text-[40px]
  mobile:max-laptop:text-[48px]
  tracking-[10px]
  select-none
`;

const ContentContainer = tw(Form)`
  flex
  flex-col
  w-[30vw]
  mobile:max-laptop:w-[80vw]
  bg-dark2-900
  dark:bg-dark2-400
  h-fit
  px-10
  py-20
  gap-4
  rounded-xl
`;

const EmailInput = tw(Input)`
  h-[40px]
  mobile:max-laptop:h-[48px]
  rounded-md
  px-4
  text-dark1-100
`;
const PasswordInput = tw(Password)`
  h-[40px]
  mobile:max-laptop:h-[48px]
  rounded-md
  px-4
  text-dark1-100
`;

const SocialLoginOptionContainer = tw(Flex)`
  flex
  flex-row
  justify-center
  gap-4
`;

const FooterContainer = tw(Flex)`
  flex
  flex-row
  items-center
  justify-end
  gap-2
`;

const OptionButton = tw(Button)`
`;
