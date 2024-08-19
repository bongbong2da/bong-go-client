"use client";

import React from "react";
import { useUIStore } from "stores/UIStore";
import tw from "tailwind-styled-components";
import { Divider, Modal } from "antd";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";

const Confirm = () => {
  const uiStore = useUIStore();

  return (
    <Container
      open={uiStore.isShowConfirm}
      onOk={uiStore.confirmProps.onConfirm}
      onCancel={uiStore.confirmProps.onCancel}
      okText={uiStore.confirmProps?.confirmText || "확인"}
      cancelText={uiStore.confirmProps?.cancelText || "취소"}
    >
      <TitleText>{uiStore.confirmProps?.title}</TitleText>
      <Text>{uiStore.confirmProps?.content}</Text>
      <Divider />
    </Container>
  );
};

const Container = tw(Modal)`

`;

const TitleText = tw(Title)``;

export default Confirm;
