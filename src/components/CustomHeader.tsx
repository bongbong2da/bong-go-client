"use client";

import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { Badge, Button, Divider, Flex } from "antd";
import Text from "antd/lib/typography/Text";
import {
  AlertTwoTone,
  BookTwoTone,
  InfoCircleTwoTone,
  NotificationTwoTone,
  SettingTwoTone,
} from "@ant-design/icons";
import { Header } from "antd/es/layout/layout";
import { useUIStore } from "stores/UIStore";

const CustomHeader = () => {
  const uiStore = useUIStore();

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleClickLogo = () => {
    window.location.href = "/";
  };

  const handleClickLogin = () => {
    if (isLoggedIn) {
      uiStore.showConfirm({
        title: "로그아웃",
        content: "로그아웃 하시겠습니까?",
        onConfirm: () => {
          localStorage.setItem("isLoggedIn", "false");
          setIsLoggedIn(false);
        },
        onCancel: () => {},
      });
    } else {
      window.location.href = "/sign-in";
    }
  };

  const handleClickNotifications = () => {
    window.location.href = "/notifications";
  };

  const handleClickAccount = () => {
    window.location.href = "/account";
  };

  const handleClickHelp = () => {
    window.location.href = "/help";
  };

  useEffect(() => {
    const isLoggedInString = localStorage.getItem("isLoggedIn");
    if (isLoggedInString === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Container>
      <ContentContainer>
        <LogoContainer onClick={handleClickLogo}>
          <LogoText>🚙봉고</LogoText>
        </LogoContainer>
        <HeaderDivider />
        <OptionContainer>
          {isLoggedIn && (
            <>
              <Badge count={5}>
                <OptionButton
                  icon={<NotificationTwoTone />}
                  onClick={handleClickNotifications}
                >
                  알림
                </OptionButton>
              </Badge>
              <OptionButton
                icon={<SettingTwoTone />}
                onClick={handleClickAccount}
              >
                설정
              </OptionButton>
            </>
          )}
          <OptionButton icon={<BookTwoTone />} onClick={handleClickHelp}>
            도움말
          </OptionButton>
          <OptionButton
            type={"primary"}
            icon={isLoggedIn ? <AlertTwoTone /> : <InfoCircleTwoTone />}
            onClick={handleClickLogin}
            danger
          >
            {isLoggedIn ? "로그아웃" : "로그인"}
          </OptionButton>
        </OptionContainer>
        <MenuContainer>
          <MenuButton>리그 오브 레전드</MenuButton>
          <MenuButton>발로란트</MenuButton>
          <MenuButton>오버워치 2</MenuButton>
          <MenuButton>서든어택</MenuButton>
        </MenuContainer>
        <HeaderDivider />
      </ContentContainer>
      <FooterContainer>
        <div>github:bongbong2da</div>
        <div>snk3981@gmail.com</div>
      </FooterContainer>
    </Container>
  );
};

const Container = tw(Header)`
  flex
  laptop:h-[100svh]
  laptop:flex-col
  mobile:flex-row
  laptop:rounded-br-xl
  laptop:rounded-tr-xl
  mobile:rounded-br-none
  mobile:rounded-tr-none
  justify-between
`;

const ContentContainer = tw(Flex)`
  flex
  w-[100%]
  h-[100%]
  laptop:flex-col
  mobile:flex-row
  laptop:p-16
  mobile:p-4
  gap-10
  items-center
  laptop:justify-normal
  mobile:justify-between
`;

const FooterContainer = tw(Flex)`
  laptop:flex
  mobile:hidden
  flex-col
  align-middle
  items-center
  justify-center
  p-4
  py-20
  gap-4
  text-white
`;

const LogoContainer = tw(Flex)`
  flex
  cursor-pointer
  w-fit
`;

const LogoText = tw(Text)`
  text-[32px]
  text-primary1-900
  tracking-[16px]
  w-fit
`;

const OptionContainer = tw(Flex)`
  gap-2
`;

const OptionButton = tw(Button)`
  w-max
  cursor-pointer
  text-primary2-200
  grid-1
`;

const MenuContainer = tw(Flex)`
  w-[100%]
  laptop:flex
  mobile:hidden
  flex-col
  gap-4
`;

const MenuButton = tw(Button)`
  cursor-pointer
`;

const HeaderDivider = tw(Divider)`
  laptop:flex
  mobile:hidden
`;

export default CustomHeader;
