"use client";

import tw from "tailwind-styled-components";
import { Avatar, Button, Flex, Input, List, Segmented } from "antd";
import { Content } from "antd/lib/layout/layout";
import Item from "antd/lib/list/Item";
import { NotificationTwoTone } from "@ant-design/icons";
import Text from "antd/lib/typography/Text";

interface NotificationInterface {
  message: string;
  date: string;
  sender: string;
  isRead?: boolean;
}

const sampleNotifications: NotificationInterface[] = [
  {
    message: "봉봉님이 친구 요청을 보냈습니다.",
    date: "2022-09-13",
    sender: "봉봉",
  },
  {
    message: "고고님이 친구 요청을 보냈습니다.",
    date: "2022-09-13",
    sender: "고고",
    isRead: true,
  },
  {
    message: "봉봉님이 친구 요청을 보냈습니다.",
    date: "2022-09-13",
    sender: "봉봉",
  },
  {
    message: "고고님이 친구 요청을 보냈습니다.",
    date: "2022-09-13",
    sender: "고고",
    isRead: true,
  },
  {
    message: "봉봉님이 친구 요청을 보냈습니다.",
    date: "2022-09-13",
    sender: "봉봉",
  },
  {
    message: "고고님이 친구 요청을 보냈습니다.",
    date: "2022-09-13",
    sender: "고고",
  },
];

const NotificationsPage = () => {
  const renderItem = (item: any, index: number) => {
    const notification = item as NotificationInterface;
    return (
      <NotificationItem key={index} isRead={notification?.isRead}>
        <NotificationLeft>
          <NotificationTwoTone />
          <Text>{notification.message}</Text>
        </NotificationLeft>
        <NotificationRight>
          <Avatar>{notification.sender.charAt(0)}</Avatar>
          <Text>{notification.sender}</Text>
          <Text>{notification.date}</Text>
        </NotificationRight>
      </NotificationItem>
    );
  };

  return (
    <ContentContainer>
      <Container>
        <FilterContainer>
          <NotificationLeft>
            <Input placeholder={"검색어를 입력해주세요"} />
          </NotificationLeft>
          <NotificationRight>
            <Segmented options={["전체", "친구만"]} />
            <Segmented options={["전체", "읽음", "안읽음"]} />
            <Button type={"primary"}>전체 읽기</Button>
          </NotificationRight>
        </FilterContainer>
        <NotificationList
          dataSource={sampleNotifications}
          renderItem={renderItem}
        />
      </Container>
    </ContentContainer>
  );
};

const ContentContainer = tw(Content)`
  flex
  flex-col
  w-[100%]
  v-[100%]
  overflow-auto
  scrollbar-none
  laptop:p-16
  mobile:p-4
`;

const Container = tw(Flex)`
  flex
  flex-col
  gap-2
  bg-white
  rounded-md
  laptop:p-16
  mobile:p-4
`;

const NotificationList = tw(List)`
  w-[100%]
  rounded-md
`;

const NotificationItem = tw(Item)<{ isRead?: boolean }>`
  flex
  flex-row
  bg-white
  align-middle
  items-center
  justify-between
  ${(props) => props?.isRead && "opacity-50"}
  cursor-pointer
  select-none
`;

const NotificationLeft = tw(Flex)`
  flex
  flex-row
  gap-2
  align-middle
`;

const NotificationRight = tw(Flex)`
  flex
  flex-row
  gap-2
  items-center
`;

const FilterContainer = tw(Flex)`
  flex
  flex-row
  items-center
  justify-between
`;

export default NotificationsPage;
