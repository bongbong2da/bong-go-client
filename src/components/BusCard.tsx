"use client";

import React from "react";
import tw from "tailwind-styled-components";
import Item from "antd/lib/list/Item";
import { Avatar, Flex } from "antd";
import Text from "antd/lib/typography/Text";
import { SampleBus } from "types/CustomTypes";

interface BusCardProps {
  bus: SampleBus;
  onClick?: (bus: SampleBus) => void;
}

const BusCard = (props: BusCardProps) => {
  const renderIcon = () => {
    switch (props.bus.status) {
      case "open":
        return "🚀";
      case "closed":
        return "❌";
      case "full":
        return "‼️";
      case "approaching":
        return "⏳";
      default:
        return "🟢";
    }
  };

  const handleClickBus = () => {
    if (props.onClick) {
      props.onClick(props.bus);
    }
  };

  return (
    <Container onClick={handleClickBus} status={props.bus.status}>
      <TitleContainer vertical>
        <TitleText>
          {renderIcon()} [3/4] {props.bus.title}
        </TitleText>
        <GameTitleText>{props.bus.gameTitle}</GameTitleText>
      </TitleContainer>
      <FooterContainer>
        <UserContainer>
          <Avatar size={30}>{props.bus.username.charAt(1)}</Avatar>
          <div>{props.bus.username}</div>
        </UserContainer>
        <DateText>{props.bus.date}</DateText>
      </FooterContainer>
    </Container>
  );
};

const Container = tw(Item)<{
  status?: "open" | "closed" | "full" | "approaching";
}>`
  w-[100%]
  h-fit
  text-dark1-100
  flex
  align-middle
  justify-between
  cursor-pointer
  max-w-screen-lg
  items-center
  ${(props) => props.status === "closed" && "opacity-50"}
`;

const TitleContainer = tw(Flex)`
  items-center
  gap-2
  max-w-100
`;

const TitleText = tw(Flex)`
  text-2xl
  mobile:max-laptop:text-[16px]
  line-clamp-1
`;

const GameTitleText = tw(Flex)`
  mobile:max-laptop:text-[12px]
  line-clamp-1
`;

const FooterContainer = tw(Flex)`
  flex
  items-center
  gap-10
`;

const UserContainer = tw(Flex)`
  flex items-center gap-1
  mobile:max-tablet:text-[12px]
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

const DateText = tw(Text)`
  mobile:max-laptop:text-[12px]
`;

export default BusCard;
