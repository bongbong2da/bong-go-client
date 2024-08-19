import React from "react";
import { ConfigProvider, Layout, ThemeConfig } from "antd";
import tw from "tailwind-styled-components";
import CustomHeader from "components/CustomHeader";
import router from "routes/router";
import { RouterProvider } from "react-router-dom";
import Confirm from "./components/Confirm";

const antdConfig: ThemeConfig = {
  token: {
    colorPrimary: "#0466c8",
    colorBgLayout: "#f4f4f4",
    colorBgContainer: "#ffffff",
    colorBgBase: "#eaeaea",
  },
};

const App = () => {
  return (
    <ConfigProvider theme={antdConfig}>
      <RootLayout>
        <Wrapper>
          <Confirm />
          <CustomHeader />
          <RouterProvider router={router} />
        </Wrapper>
      </RootLayout>
    </ConfigProvider>
  );
};

const RootLayout = tw.div`
  w-[100%]
  h-[100%]
  m-0
  p-0
  bg-warning
`;

const Wrapper = tw(Layout)`
  flex
  w-[100%]
  h-[100%]
  laptop:flex-row
  mobile:flex-col
`;

export default App;
