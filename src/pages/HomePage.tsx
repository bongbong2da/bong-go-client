import { useState } from "react";
import { SampleBus } from "types/CustomTypes";
import {
  AutoComplete,
  AutoCompleteProps,
  Button,
  Cascader,
  Flex,
  Layout,
  List,
} from "antd";
import tw from "tailwind-styled-components";
import BusContentContainer from "components/BusContentContainer";
import BusCard from "components/BusCard";

const sampleBuses: SampleBus[] = [
  {
    title: "겜할분~",
    gameTitle: "레인보우 식스 시즈",
    username: "봉봉",
    date: "2022-09-13",
    status: "open",
  },
  {
    title: "롤 할 사람",
    gameTitle: "리그 오브 레전드",
    username: "고고",
    date: "2022-09-13",
    status: "closed",
  },
  {
    title: "배그 할 사람",
    gameTitle: "배틀그라운드",
    username: "봉봉",
    date: "2022-09-13",
    status: "open",
  },
  {
    title: "포트나이트 할 사람",
    gameTitle: "포트나이트",
    username: "고고",
    date: "2022-09-13",
    status: "approaching",
  },
  {
    title: "오버워치 할 사람",
    gameTitle: "오버워치",
    username: "봉봉",
    date: "2022-09-13",
    status: "open",
  },
  {
    title: "롤 할 사람",
    gameTitle: "리그 오브 레전드",
    username: "고고",
    date: "2022-09-13",
    status: "approaching",
  },
  {
    title: "배그 할 사람",
    gameTitle: "배틀그라운드",
    username: "봉봉",
    date: "2022-09-13",
    status: "full",
  },
  {
    title: "포트나이트 할 사람",
    gameTitle: "포트나이트",
    username: "고고",
    date: "2022-09-13",
    status: "approaching",
  },
  {
    title: "오버워치 할 사람",
    gameTitle: "오버워치",
    username: "봉봉",
    date: "2022-09-13",
    status: "closed",
  },
  {
    title: "롤 할 사람",
    gameTitle: "리그 오브 레전드",
    username: "고고",
    date: "2022-09-13",
    status: "closed",
  },
  {
    title: "겜할분~",
    gameTitle: "레인보우 식스 시즈",
    username: "봉봉",
    date: "2022-09-13",
    status: "open",
  },
  {
    title: "롤 할 사람",
    gameTitle: "리그 오브 레전드",
    username: "고고",
    date: "2022-09-13",
    status: "closed",
  },
  {
    title: "배그 할 사람",
    gameTitle: "배틀그라운드",
    username: "봉봉",
    date: "2022-09-13",
    status: "open",
  },
  {
    title: "포트나이트 할 사람",
    gameTitle: "포트나이트",
    username: "고고",
    date: "2022-09-13",
    status: "approaching",
  },
  {
    title: "오버워치 할 사람",
    gameTitle: "오버워치",
    username: "봉봉",
    date: "2022-09-13",
    status: "open",
  },
  {
    title: "롤 할 사람",
    gameTitle: "리그 오브 레전드",
    username: "고고",
    date: "2022-09-13",
    status: "approaching",
  },
  {
    title: "배그 할 사람",
    gameTitle: "배틀그라운드",
    username: "봉봉",
    date: "2022-09-13",
    status: "full",
  },
  {
    title: "포트나이트 할 사람",
    gameTitle: "포트나이트",
    username: "고고",
    date: "2022-09-13",
    status: "approaching",
  },
  {
    title: "오버워치 할 사람",
    gameTitle: "오버워치",
    username: "봉봉",
    date: "2022-09-13",
    status: "closed",
  },
  {
    title: "롤 할 사람",
    gameTitle: "리그 오브 레전드",
    username: "고고",
    date: "2022-09-13",
    status: "closed",
  },
];

const gameTitles = [
  "발로란트",
  "오버워치",
  "리그 오브 레전드",
  "레인보우 식스 시즈",
  "어둠의 전설",
];

const HomePage = () => {
  const [currentBus, setCurrentBus] = useState<SampleBus>();
  const [currentGame, setCurrentGame] = useState<string>("");
  const [currentGameFilter, setCurrentGameFilter] = useState<string>("");
  const [options, setOptions] = useState<AutoCompleteProps["options"]>([]);

  const filteredBuses = () => {
    if (currentGame === "") {
      return sampleBuses;
    } else {
      return sampleBuses.filter((bus) => bus.gameTitle === currentGame);
    }
  };

  const handleSearchGameTitle = (keyword: string) => {
    setOptions(
      gameTitles
        .filter((title) => title.includes(keyword))
        .map((title) => ({ value: title })),
    );
  };

  return (
    <Container>
      <ContentContainer>
        <FilterContainer>
          <DropdownContainer>
            <AutoComplete
              className={"w-64"}
              placeholder={"게임을 검색하세요"}
              value={currentGameFilter}
              options={options}
              onChange={setCurrentGameFilter}
              onSelect={setCurrentGame}
              onSearch={handleSearchGameTitle}
            />
            <Cascader
              defaultValue={["전체"]}
              options={[
                {
                  value: "전체",
                  label: "전체",
                },
                {
                  value: "팔로잉",
                  label: "팔로잉",
                },
              ]}
              allowClear={false}
            />
          </DropdownContainer>
          <CreateBusContainer>
            <CreateBusButton>배차하기</CreateBusButton>
          </CreateBusContainer>
        </FilterContainer>
        <List
          dataSource={filteredBuses()}
          renderItem={(bus) => <BusCard bus={bus} onClick={setCurrentBus} />}
        />
      </ContentContainer>
      {currentBus && (
        <BusContentContainer
          bus={currentBus}
          onClose={() => setCurrentBus(undefined)}
        />
      )}
    </Container>
  );
};

const Container = tw(Layout.Content)`
  flex
  w-100%
  h-100%
`;

const FilterContainer = tw(Flex)`
  flex
  flex-row
  justify-between
`;

const ContentContainer = tw(Flex)`
  flex
  flex-col
  w-[100%]
  h-[100%]
  gap-4
  laptop:py-10
  laptop:px-16
  mobile:px-4
  mobile:py-4
  overflow-auto
  scrollbar-none
`;

const DropdownContainer = tw(Flex)`
  flex
  flex-row
  align-middle
  gap-4
`;

const CreateBusContainer = tw(Flex)`
  flex
  flex-row
  align-middle
  gap-4
`;

const CreateBusButton = tw(Button)`
  flex
  px-4
  py-2
  align-middle
  justify-center
  bg-primary1
  text-white
  rounded-md
`;

export default HomePage;
