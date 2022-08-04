import React from "react";

import {
  Stack,
  Column,
  Row,
  Img,
  Text,
  Input,
  Button,
  SelectBox,
  List,
  Radio,
  Line,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Dashboard0ThreePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Stack
        className="bg-white_A700 font-inter lg:h-[1138px] xl:h-[1302px] h-[1463px] 2xl:h-[1465px] 3xl:h-[1757px] mx-[auto] w-[100%]"
        compId="593:300616"
        comWidth={1440}
        comHeight={1463}
        compLeft={0}
        compRight={0}
        compType="Stack"
      >
        <Column
          className="absolute items-end w-[100%]"
          compId="1310"
          comWidth={1440}
          comHeight={1463}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Row
            className="bg-white_A700 items-center justify-end p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] w-[100%]"
            compId="43812:47942"
            comWidth={1440}
            comHeight={60}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Img
              src="images/img_microphone.png"
              className="lg:h-[22px] xl:h-[25px] h-[28px] 2xl:h-[29px] 3xl:h-[34px] w-[1%]"
              compId="I43812:47942;43807:13258"
              comWidth={21}
              comHeight={28}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="microphone"
            />
            <Text
              className="font-medium lg:ml-[169px] xl:ml-[193px] ml-[218px] 3xl:ml-[261px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
              compId="I43812:47942;234:259667"
              comWidth={133}
              comHeight={22}
              compLeft={218}
              compRight={0}
              compType="Text"
            >
              Welcomback, Team!
            </Text>
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="font-medium p-[0] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
              wrapClassName="3xl:ml-[265px] flex lg:ml-[171px] ml-[221px] w-[30%] xl:ml-[196px]"
              compId="I43812:47942;234:259514"
              comWidth={0}
              comHeight={40}
              compLeft={0}
              compRight={0}
              compType="SearchView"
              name="SearchBox"
              placeholder="Search..."
              prefix={
                <Img
                  src="images/img_search.png"
                  className="cursor-pointer w-[20px] h-[20px] ml-[16px] mr-[8px] lg:w-[15px] lg:h-[16px] lg:ml-[12px] lg:mr-[6px] xl:w-[17px] xl:h-[18px] xl:ml-[14px] xl:mr-[7px] 2xl:h-[21px] 3xl:w-[24px] 3xl:h-[25px] 3xl:ml-[19px] 3xl:mr-[9px] my-[auto]"
                  compId="I43812:47942;234:259514;234:259505"
                  comWidth={20}
                  comHeight={20}
                  compLeft={16}
                  compRight={8}
                  compType="Image"
                  alt="search"
                />
              }
              suffix={
                inputvalue?.length > 0 ? (
                  <CloseSVG
                    color="#828fa2"
                    className="cursor-pointer w-[20px] h-[20px] ml-[10px] mr-[22px] lg:w-[15px] lg:h-[16px] lg:ml-[7px] lg:mr-[17px] xl:w-[17px] xl:h-[18px] xl:ml-[8px] xl:mr-[19px] 2xl:h-[21px] 3xl:w-[24px] 3xl:h-[25px] 3xl:ml-[12px] 3xl:mr-[26px] my-[auto]"
                    onClick={() => setInputvalue("")}
                  />
                ) : (
                  ""
                )
              }
              shape="srcRoundedBorder4"
              size="smSrc"
              variant="srcOutlineBluegray200"
            ></Input>
            <Img
              src="images/img_vector.png"
              className="lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] lg:ml-[105px] xl:ml-[120px] ml-[136px] 3xl:ml-[163px] w-[1%]"
              compId="I43812:47942;531:315836;5:32"
              comWidth={20}
              comHeight={22}
              compLeft={136}
              compRight={0}
              compType="Image"
              alt="Vector"
            />
            <Stack
              className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] w-[9%]"
              compId="1309"
              comWidth={126}
              comHeight={24}
              compLeft={29}
              compRight={0}
              compType="Stack"
            >
              <Img
                src="images/img_user_bluegray_900.png"
                className="absolute lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] inset-y-[0] left-[0] my-[auto] w-[14%]"
                compId="I43812:47942;37:1285;37:1283"
                comWidth={18}
                comHeight={20}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="user"
              />
              <Row
                className="absolute right-[0] w-[90%]"
                compId="725"
                comWidth={113}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <div
                  className="bg-red_600 3xl:h-[10px] lg:h-[7px] h-[8px] 2xl:h-[9px] mt-[1px] outline outline-[2px] outline-white_A700 rounded-radius50 lg:w-[6px] xl:w-[7px] w-[8px] 3xl:w-[9px]"
                  compId="I43812:47942;530:301660"
                  comWidth={8}
                  comHeight={8}
                  compLeft={0}
                  compRight={0}
                  compType="View"
                ></div>
                <Text
                  className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_500 w-[auto]"
                  compId="I43812:47942;37:1272"
                  comWidth={81}
                  comHeight={24}
                  compLeft={24}
                  compRight={0}
                  compType="Text"
                >
                  <span className="text-gray_500 font-inter">Hello,</span>
                  <span className="text-bluegray_900 font-inter"> </span>
                  <span className="text-bluegray_900 font-inter font-medium">
                    Sam
                  </span>
                </Text>
              </Row>
            </Stack>
            <Img
              src="images/img_sherlocktoyfa.png"
              className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mx-[10px] xl:mx-[11px] mx-[13px] 3xl:mx-[15px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
              compId="I43812:47942;483:292004;43812:47214"
              comWidth={40}
              comHeight={40}
              compLeft={13}
              compRight={13}
              compType="CircleImage"
              alt="SherlockToyFa"
            />
          </Row>
          <Row
            className="bg-gray_50 items-center justify-end ml-[auto] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] w-[94%]"
            compId="1352"
            comWidth={1356}
            comHeight={1403}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Column
              className="items-center w-[73%]"
              compId="1351"
              comWidth={976}
              comHeight={1355}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-center w-[100%]"
                compId="593:300619"
                comWidth={976}
                comHeight={48}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-medium font-poppins lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]"
                  compId="593:300618"
                  comWidth={93}
                  comHeight={32}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  Overview
                </Text>
                <Button
                  className="flex items-center justify-center lg:ml-[539px] xl:ml-[617px] ml-[694px] 3xl:ml-[833px] w-[5%]"
                  compId="593:300620"
                  comWidth={46}
                  comHeight={48}
                  compLeft={694}
                  compRight={0}
                  compType="IconButton"
                  shape="icbRoundedBorder4"
                  variant="icbFillWhiteA700"
                >
                  <Img
                    src="images/img_download.png"
                    className="h-[20px] flex items-center justify-center lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                    compId="593:300620"
                    comWidth={46}
                    comHeight={48}
                    compLeft={694}
                    compRight={0}
                    compType="IconButton"
                    alt="download"
                  />
                </Button>
                <SelectBox
                  className="bg-transparent font-inter font-medium xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[13%]"
                  compId="593:300622"
                  comWidth={131}
                  comHeight={48}
                  compLeft={12}
                  compRight={0}
                  compType="Dropdown"
                  placeholderClassName="bg-transparent text-bluegray_800"
                  name="ButtonPrimary"
                  placeholder="Last week"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown.png"
                      className="w-[11.67px] h-[6.67px] mr-[20px] lg:w-[9px] lg:h-[6px] lg:mr-[15px] xl:w-[10px] xl:h-[6px] xl:mr-[17px] 2xl:w-[11px] 2xl:h-[7px] 3xl:w-[14px] 3xl:h-[9px] 3xl:mr-[24px]"
                      compId="I593:300624;1:1053"
                      comWidth={11.67}
                      comHeight={6.67}
                      compLeft={0}
                      compRight={20}
                      compType="Image"
                      alt="arrow_down"
                    />
                  }
                  shape="oundedBorder4"
                  size="sm"
                  variant="illWhiteA700"
                ></SelectBox>
              </Row>
              <Row
                className="items-center justify-between lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]"
                compId="1346"
                comWidth={976}
                comHeight={419}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Column
                  className="items-center w-[21%]"
                  compId="1348"
                  comWidth={201}
                  comHeight={419}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="bg-white_A700 items-center justify-end lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs1 w-[100%]"
                    compId="593:300628"
                    comWidth={201}
                    comHeight={199}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Img
                      src="images/img_signal_indigo_401.png"
                      className="lg:h-[34px] xl:h-[39px] h-[43px] 2xl:h-[44px] 3xl:h-[52px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[55%]"
                      compId="I593:300628;556:314136"
                      comWidth={75}
                      comHeight={43}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="signal"
                    />
                    <Text
                      className="font-normal lg:mt-[21px] xl:mt-[24px] mt-[28px] 3xl:mt-[33px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                      compId="I593:300628;556:314134"
                      comWidth={74}
                      comHeight={22}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Total Tasks
                    </Text>
                    <Text
                      className="font-bold mt-[4px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_800 w-[auto]"
                      compId="I593:300628;556:314135"
                      comWidth={32}
                      comHeight={28}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      120
                    </Text>
                  </Column>
                  <Column
                    className="bg-white_A700 items-center justify-end lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs1 w-[100%]"
                    compId="593:300629"
                    comWidth={201}
                    comHeight={200}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Img
                      src="images/img_signal_green_700.png"
                      className="lg:h-[34px] xl:h-[39px] h-[43px] 2xl:h-[44px] 3xl:h-[52px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[53%]"
                      compId="I593:300629;556:314150"
                      comWidth={73}
                      comHeight={43}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="signal One"
                    />
                    <Text
                      className="font-normal lg:mt-[22px] xl:mt-[25px] mt-[29px] 3xl:mt-[34px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                      compId="I593:300629;556:314148"
                      comWidth={72}
                      comHeight={22}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      New Tasks
                    </Text>
                    <Text
                      className="font-bold mt-[4px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_800 w-[auto]"
                      compId="I593:300629;556:314149"
                      comWidth={24}
                      comHeight={28}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      60
                    </Text>
                  </Column>
                </Column>
                <Column
                  className="bg-white_A700 items-center lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs1 w-[43%]"
                  compId="593:300630"
                  comWidth={423}
                  comHeight={419}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="justify-between w-[100%]"
                    compId="1328"
                    comWidth={359}
                    comHeight={32}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                      compId="I593:300630;556:313890"
                      comWidth={84}
                      comHeight={28}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Statistics
                    </Text>
                    <Img
                      src="images/img_menu_bluegray_400.png"
                      className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                      compId="I593:300630;556:313915"
                      comWidth={32}
                      comHeight={32}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="menu"
                    />
                  </Row>
                  <Row
                    className="items-end justify-between lg:mt-[21px] xl:mt-[24px] mt-[28px] 3xl:mt-[33px] w-[96%]"
                    compId="1326"
                    comWidth={344}
                    comHeight={139}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <div
                      className="bg-indigo_401 lg:h-[46px] xl:h-[52px] h-[58px] 2xl:h-[59px] 3xl:h-[70px] lg:mt-[63px] xl:mt-[72px] mt-[81px] 3xl:mt-[97px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[2%]"
                      compId="I593:300630;556:313902"
                      comWidth={8}
                      comHeight={58}
                      compLeft={0}
                      compRight={0}
                      compType="View"
                    ></div>
                    <div
                      className="bg-indigo_401 3xl:h-[115px] lg:h-[74px] xl:h-[85px] h-[95px] 2xl:h-[96px] lg:mt-[34px] xl:mt-[39px] mt-[44px] 3xl:mt-[52px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[2%]"
                      compId="I593:300630;556:313904"
                      comWidth={8}
                      comHeight={95}
                      compLeft={0}
                      compRight={0}
                      compType="View"
                    ></div>
                    <div
                      className="bg-indigo_401 lg:h-[60px] xl:h-[69px] h-[77px] 2xl:h-[78px] 3xl:h-[93px] lg:mt-[48px] xl:mt-[55px] mt-[62px] 3xl:mt-[74px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[2%]"
                      compId="I593:300630;556:313906"
                      comWidth={8}
                      comHeight={77}
                      compLeft={0}
                      compRight={0}
                      compType="View"
                    ></div>
                    <div
                      className="bg-amber_300 lg:h-[109px] xl:h-[124px] h-[139px] 2xl:h-[140px] 3xl:h-[167px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[2%]"
                      compId="I593:300630;556:313908"
                      comWidth={8}
                      comHeight={139}
                      compLeft={0}
                      compRight={0}
                      compType="View"
                    ></div>
                    <div
                      className="bg-indigo_401 lg:h-[60px] xl:h-[69px] h-[77px] 2xl:h-[78px] 3xl:h-[93px] lg:mt-[48px] xl:mt-[55px] mt-[62px] 3xl:mt-[74px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[2%]"
                      compId="I593:300630;556:313910"
                      comWidth={8}
                      comHeight={77}
                      compLeft={0}
                      compRight={0}
                      compType="View"
                    ></div>
                    <div
                      className="bg-indigo_401 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] 3xl:mt-[118px] lg:mt-[77px] xl:mt-[88px] mt-[99px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[2%]"
                      compId="I593:300630;556:313912"
                      comWidth={8}
                      comHeight={40}
                      compLeft={0}
                      compRight={0}
                      compType="View"
                    ></div>
                    <div
                      className="bg-indigo_401 lg:h-[60px] xl:h-[69px] h-[77px] 2xl:h-[78px] 3xl:h-[93px] lg:mt-[48px] xl:mt-[55px] mt-[62px] 3xl:mt-[74px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[2%]"
                      compId="I593:300630;556:313914"
                      comWidth={8}
                      comHeight={77}
                      compLeft={0}
                      compRight={0}
                      compType="View"
                    ></div>
                  </Row>
                  <Row
                    className="items-center justify-between lg:mt-[16px] xl:mt-[18px] mt-[21px] 3xl:mt-[25px] w-[99%]"
                    compId="I593:300630;556:313892"
                    comWidth={354}
                    comHeight={16}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-normal not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                      compId="I593:300630;556:313893"
                      comWidth={25}
                      comHeight={16}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Mon
                    </Text>
                    <Text
                      className="font-normal not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                      compId="I593:300630;556:313894"
                      comWidth={21}
                      comHeight={16}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Tue
                    </Text>
                    <Text
                      className="font-normal not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                      compId="I593:300630;556:313895"
                      comWidth={24}
                      comHeight={16}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Wed
                    </Text>
                    <Text
                      className="font-normal not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                      compId="I593:300630;556:313896"
                      comWidth={22}
                      comHeight={16}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Thu
                    </Text>
                    <Text
                      className="font-normal not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                      compId="I593:300630;556:313897"
                      comWidth={14}
                      comHeight={16}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Fri
                    </Text>
                    <Text
                      className="font-normal not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                      compId="I593:300630;556:313898"
                      comWidth={19}
                      comHeight={16}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Sat
                    </Text>
                    <Text
                      className="font-normal not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                      compId="I593:300630;556:313899"
                      comWidth={22}
                      comHeight={16}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Sun
                    </Text>
                  </Row>
                  <Row
                    className="bg-gray_103 items-center lg:mt-[17px] xl:mt-[19px] mt-[22px] 3xl:mt-[26px] lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] rounded-radius4 w-[100%]"
                    compId="I593:300630;556:313917"
                    comWidth={358}
                    comHeight={96}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Column
                      className="lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[75%]"
                      compId="I593:300630;556:313918"
                      comWidth={246}
                      comHeight={50}
                      compLeft={8}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                        compId="I593:300630;556:313919"
                        comWidth={148}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Data project report
                      </Text>
                      <Text
                        className="font-normal mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]"
                        compId="I593:300630;556:313920"
                        comWidth={80}
                        comHeight={22}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        • In process
                      </Text>
                    </Column>
                    <Column
                      className="bg-indigo_51 lg:h-[50px] xl:h-[57px] h-[64px] 2xl:h-[65px] 3xl:h-[77px] items-center px-[4px] rounded-radius50 lg:w-[49px] xl:w-[56px] w-[64px] 3xl:w-[76px]"
                      compId="I593:300630;556:313921"
                      comWidth={64}
                      comHeight={64}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <div
                        className="bg-indigo_401 lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] rounded-radius50 shadow-bs6 lg:w-[43px] xl:w-[49px] w-[56px] 3xl:w-[67px]"
                        compId="I593:300630;556:313922"
                        comWidth={56}
                        comHeight={56}
                        compLeft={0}
                        compRight={0}
                        compType="View"
                      ></div>
                    </Column>
                  </Row>
                </Column>
                <Column
                  className="bg-white_A700 items-center lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs1 w-[32%]"
                  compId="593:300632"
                  comWidth={312}
                  comHeight={419}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="justify-between w-[100%]"
                    compId="1336"
                    comWidth={248}
                    comHeight={32}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                      compId="I593:300632;556:313924"
                      comWidth={48}
                      comHeight={28}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Sales
                    </Text>
                    <Img
                      src="images/img_menu_bluegray_400.png"
                      className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                      compId="I593:300632;556:313926"
                      comWidth={32}
                      comHeight={32}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="menu One"
                    />
                  </Row>
                  <Stack
                    className="lg:h-[148px] xl:h-[170px] h-[190px] 2xl:h-[191px] 3xl:h-[229px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:w-[147px] xl:w-[169px] w-[190px] 3xl:w-[228px]"
                    compId="545"
                    comWidth={190}
                    comHeight={190}
                    compLeft={0}
                    compRight={0}
                    compType="Stack"
                  >
                    <CircularProgressbar
                      className="absolute border-solid lg:h-[148px] xl:h-[170px] h-[190px] 2xl:h-[191px] 3xl:h-[229px] overflow-visible w-[100%]"
                      compId="I593:300632;556:313927"
                      comWidth={190}
                      comHeight={190}
                      compLeft={0}
                      compRight={0}
                      compType="CircleProgressBar"
                      value="28"
                      name="Group"
                      strokeWidth={1}
                      styles={{
                        trail: { strokeWidth: 1, stroke: "" },
                        path: {
                          strokeLinecap: "square",
                          height: "100%",
                          "transform-origin": "center",
                          transform: "rotate(225deg)",
                        },
                      }}
                    ></CircularProgressbar>
                    <Column
                      className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[46%]"
                      compId="I593:300632;556:313930"
                      comWidth={87}
                      comHeight={58}
                      compLeft={53}
                      compRight={50}
                      compType="Column"
                    >
                      <Text
                        className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                        compId="I593:300632;556:313931"
                        comWidth={32}
                        comHeight={22}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Total
                      </Text>
                      <Text
                        className="font-bold mt-[4px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_800 w-[auto]"
                        compId="I593:300632;556:313932"
                        comWidth={87}
                        comHeight={32}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        $2,000
                      </Text>
                    </Column>
                  </Stack>
                  <List
                    className="gap-[0] min-h-[auto] lg:mt-[28px] xl:mt-[32px] mt-[37px] 3xl:mt-[44px] w-[100%]"
                    compId="1355"
                    comWidth={248}
                    comHeight={64}
                    compLeft={0}
                    compRight={0}
                    compType="List"
                    orientation="vertical"
                  >
                    <Row
                      className="items-center my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] w-[100%]"
                      compId="I593:300632;556:313934"
                      comWidth={248}
                      comHeight={22}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Radio
                        value="CurrentWeek"
                        className="font-normal not-italic lg:pl-[6px] xl:pl-[7px] pl-[8px] 3xl:pl-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400"
                        inputClassName="h-[8px] mr-[5px] w-[8px]"
                        compId="I593:300632;556:313935"
                        comWidth={105}
                        comHeight={22}
                        compLeft={0}
                        compRight={0}
                        compType="Radio"
                        checked={false}
                        name="ProfileViews Two"
                        label="Current Week"
                        variant="illRed6001_2"
                      ></Radio>
                      <Text
                        className="font-medium lg:ml-[25px] xl:ml-[29px] ml-[33px] 3xl:ml-[39px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                        compId="I593:300632;556:313938"
                        comWidth={46}
                        comHeight={22}
                        compLeft={33}
                        compRight={0}
                        compType="Text"
                      >
                        $1,200
                      </Text>
                      <Stack
                        className="lg:h-[17px] xl:h-[19px] h-[21px] 2xl:h-[22px] 3xl:h-[26px] ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] w-[21%]"
                        compId="I593:300632;556:313941"
                        comWidth={52}
                        comHeight={21}
                        compLeft={11}
                        compRight={0}
                        compType="Stack"
                      >
                        <Stack
                          className="absolute bg-green_700_63 bottom-[5%] lg:h-[17px] xl:h-[19px] h-[21px] 2xl:h-[22px] 3xl:h-[26px] lg:px-[3px] xl:px-[4px] px-[5px] 3xl:px-[6px] rounded-radius4 w-[100%]"
                          compId="543"
                          comWidth={52}
                          comHeight={21}
                          compLeft={0}
                          compRight={0}
                          compType="Stack"
                        >
                          <Img
                            src="images/img_arrowup.png"
                            className="absolute bottom-[5%] 2xl:h-[10px] 3xl:h-[11px] lg:h-[7px] h-[9px] left-[0] w-[12%]"
                            compId="I593:300632;556:313943;172:253014"
                            comWidth={6}
                            comHeight={9}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="arrowup"
                          />
                        </Stack>
                        <Text
                          className="absolute font-normal not-italic right-[0] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-green_700 w-[auto]"
                          compId="I593:300632;556:313944"
                          comWidth={36}
                          comHeight={21}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          0.2%
                        </Text>
                      </Stack>
                    </Row>
                    <Row
                      className="items-center my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] w-[100%]"
                      compId="I593:300632;556:313946"
                      comWidth={248}
                      comHeight={22}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Radio
                        value="LastWeek"
                        className="font-normal not-italic lg:pl-[6px] xl:pl-[7px] pl-[8px] 3xl:pl-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400"
                        inputClassName="h-[8px] mr-[5px] w-[8px]"
                        compId="I593:300632;556:313947"
                        comWidth={84}
                        comHeight={22}
                        compLeft={0}
                        compRight={0}
                        compType="Radio"
                        checked={false}
                        name="ProfileViews Three"
                        label="Last Week"
                        variant="illGreen7001_2"
                      ></Radio>
                      <Text
                        className="font-medium lg:ml-[43px] xl:ml-[49px] ml-[56px] 3xl:ml-[67px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                        compId="I593:300632;556:313950"
                        comWidth={36}
                        comHeight={22}
                        compLeft={56}
                        compRight={0}
                        compType="Text"
                      >
                        $800
                      </Text>
                      <Stack
                        className="lg:h-[17px] xl:h-[19px] h-[21px] 2xl:h-[22px] 3xl:h-[26px] lg:ml-[14px] xl:ml-[16px] ml-[19px] 3xl:ml-[22px] w-[21%]"
                        compId="I593:300632;556:313953"
                        comWidth={52}
                        comHeight={21}
                        compLeft={19}
                        compRight={0}
                        compType="Stack"
                      >
                        <Stack
                          className="absolute bg-green_700_63 bottom-[5%] lg:h-[17px] xl:h-[19px] h-[21px] 2xl:h-[22px] 3xl:h-[26px] lg:px-[3px] xl:px-[4px] px-[5px] 3xl:px-[6px] rounded-radius4 w-[100%]"
                          compId="544"
                          comWidth={52}
                          comHeight={21}
                          compLeft={0}
                          compRight={0}
                          compType="Stack"
                        >
                          <Img
                            src="images/img_arrowup.png"
                            className="absolute bottom-[5%] 2xl:h-[10px] 3xl:h-[11px] lg:h-[7px] h-[9px] left-[0] w-[12%]"
                            compId="I593:300632;556:313955;172:253014"
                            comWidth={6}
                            comHeight={9}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="arrowup One"
                          />
                        </Stack>
                        <Text
                          className="absolute font-normal not-italic right-[0] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-green_700 w-[auto]"
                          compId="I593:300632;556:313956"
                          comWidth={36}
                          comHeight={21}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          0.2%
                        </Text>
                      </Stack>
                    </Row>
                  </List>
                </Column>
              </Row>
              <Row
                className="items-center justify-between lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]"
                compId="1347"
                comWidth={976}
                comHeight={465}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Stack
                  className="lg:h-[362px] xl:h-[414px] h-[465px] 2xl:h-[466px] 3xl:h-[559px] w-[55%]"
                  compId="1307"
                  comWidth={533}
                  comHeight={465}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Column
                    className="absolute bottom-[22%] left-[40%] w-[10%]"
                    compId="593:300625"
                    comWidth={55}
                    comHeight={52}
                    compLeft={211}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal ml-[3px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                      compId="593:300626"
                      comWidth={52}
                      comHeight={22}
                      compLeft={3}
                      compRight={0}
                      compType="Text"
                    >
                      Balance
                    </Text>
                    <Text
                      className="font-bold mt-[2px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]"
                      compId="593:300627"
                      comWidth={39}
                      comHeight={28}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      $0.0
                    </Text>
                  </Column>
                  <Column
                    className="absolute bg-white_A700 items-center lg:p-[18px] xl:p-[21px] p-[24px] 3xl:p-[28px] rounded-radius4 shadow-bs1 w-[100%]"
                    compId="593:300633"
                    comWidth={533}
                    comHeight={465}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Row
                      className="items-center justify-between mt-[2px] w-[97%]"
                      compId="1320"
                      comWidth={469}
                      comHeight={40}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Text
                        className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                        compId="I593:300633;556:313958"
                        comWidth={84}
                        comHeight={28}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Statistics
                      </Text>
                      <Button
                        className="flex items-center justify-center text-center w-[37%]"
                        compId="I593:300633;43809:30051"
                        comWidth={0}
                        comHeight={40}
                        compLeft={0}
                        compRight={0}
                        compType="Button"
                        leftIcon={
                          <Img
                            src="images/img_calendar.png"
                            className="w-[16.67px] mr-[13px] text-center lg:w-[12px] lg:mr-[10px] xl:w-[14px] xl:mr-[11px] 2xl:w-[16px] 3xl:w-[20px] 3xl:mr-[15px]"
                            compId="I593:300633;43809:30053;5:156"
                            comWidth={16.67}
                            comHeight={18.33}
                            compLeft={0}
                            compRight={13}
                            compType="Image"
                            alt="calendar"
                          />
                        }
                        size="md"
                        variant="OutlineBluegray200"
                      >
                        <div className="bg-transparent font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px]">
                          13 Aug - 20 Aug
                        </div>
                      </Button>
                    </Row>
                    <Row
                      className="items-center lg:mt-[20px] xl:mt-[23px] mt-[26px] 3xl:mt-[31px] w-[98%]"
                      compId="1318"
                      comWidth={477}
                      comHeight={256}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Column
                        className="w-[13%]"
                        compId="I593:300633;556:313959"
                        comWidth={60}
                        comHeight={256}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-normal not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                          compId="I593:300633;556:313960"
                          comWidth={15}
                          comHeight={16}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          Su
                        </Text>
                        <Text
                          className="font-normal lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                          compId="I593:300633;556:313961"
                          comWidth={15}
                          comHeight={16}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          Sa
                        </Text>
                        <Text
                          className="font-normal ml-[1px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                          compId="I593:300633;556:313962"
                          comWidth={11}
                          comHeight={16}
                          compLeft={1}
                          compRight={0}
                          compType="Text"
                        >
                          Fr
                        </Text>
                        <Text
                          className="font-normal lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                          compId="I593:300633;556:313963"
                          comWidth={15}
                          comHeight={16}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          Th
                        </Text>
                        <Text
                          className="font-normal ml-[1px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                          compId="I593:300633;556:313964"
                          comWidth={17}
                          comHeight={16}
                          compLeft={1}
                          compRight={0}
                          compType="Text"
                        >
                          We
                        </Text>
                        <Text
                          className="font-normal lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                          compId="I593:300633;556:313965"
                          comWidth={14}
                          comHeight={16}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          Tu
                        </Text>
                        <Text
                          className="font-normal lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                          compId="I593:300633;556:313966"
                          comWidth={18}
                          comHeight={16}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          Mo
                        </Text>
                      </Column>
                      <Line
                        className="bg-indigo_50 lg:h-[200px] xl:h-[228px] h-[256px] 2xl:h-[257px] 3xl:h-[308px] w-[1px]"
                        compId="I593:300633;556:313971"
                        comWidth={1}
                        comHeight={256}
                        compLeft={0}
                        compRight={0}
                        compType="Line"
                      />
                      <Stack
                        className="font-poppins lg:h-[200px] xl:h-[228px] h-[256px] 2xl:h-[257px] 3xl:h-[308px] lg:ml-[26px] xl:ml-[30px] ml-[34px] 3xl:ml-[40px] w-[80%]"
                        compId="1308"
                        comWidth={382}
                        comHeight={256}
                        compLeft={34}
                        compRight={0}
                        compType="Stack"
                      >
                        <Row
                          className="absolute items-center left-[0] w-[89%]"
                          compId="1311"
                          comWidth={340}
                          comHeight={256}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <Stack
                            className="lg:h-[200px] xl:h-[228px] h-[256px] 2xl:h-[257px] 3xl:h-[308px] w-[74%]"
                            compId="1354"
                            comWidth={252}
                            comHeight={256}
                            compLeft={0}
                            compRight={0}
                            compType="Stack"
                          >
                            <Row
                              className="absolute items-center justify-between left-[11%] right-[14%] w-[75%]"
                              compId="1315"
                              comWidth={188}
                              comHeight={256}
                              compLeft={27}
                              compRight={36}
                              compType="Row"
                            >
                              <Line
                                className="bg-indigo_50 lg:h-[200px] xl:h-[228px] h-[256px] 2xl:h-[257px] 3xl:h-[308px] w-[1px]"
                                compId="I593:300633;556:313972"
                                comWidth={1}
                                comHeight={256}
                                compLeft={0}
                                compRight={0}
                                compType="Line"
                              />
                              <Line
                                className="bg-indigo_50 lg:h-[200px] xl:h-[228px] h-[256px] 2xl:h-[257px] 3xl:h-[308px] w-[1px]"
                                compId="I593:300633;556:313973"
                                comWidth={1}
                                comHeight={256}
                                compLeft={0}
                                compRight={0}
                                compType="Line"
                              />
                              <Line
                                className="bg-indigo_50 lg:h-[200px] xl:h-[228px] h-[256px] 2xl:h-[257px] 3xl:h-[308px] w-[1px]"
                                compId="I593:300633;556:313974"
                                comWidth={1}
                                comHeight={256}
                                compLeft={0}
                                compRight={0}
                                compType="Line"
                              />
                              <Line
                                className="bg-indigo_50 lg:h-[200px] xl:h-[228px] h-[256px] 2xl:h-[257px] 3xl:h-[308px] w-[1px]"
                                compId="I593:300633;556:313975"
                                comWidth={1}
                                comHeight={256}
                                compLeft={0}
                                compRight={0}
                                compType="Line"
                              />
                            </Row>
                            <Img
                              src="images/img_frame_246X252.png"
                              className="absolute bottom-[1%] lg:h-[192px] xl:h-[219px] h-[246px] 2xl:h-[247px] 3xl:h-[296px] top-[3%] w-[100%]"
                              compId="I593:300633;556:313978"
                              comWidth={252}
                              comHeight={246}
                              compLeft={0}
                              compRight={0}
                              compType="Image"
                              alt="Frame"
                            />
                          </Stack>
                          <Line
                            className="bg-indigo_50 lg:h-[200px] xl:h-[228px] h-[256px] 2xl:h-[257px] 3xl:h-[308px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] w-[1px]"
                            compId="I593:300633;556:313976"
                            comWidth={1}
                            comHeight={256}
                            compLeft={24}
                            compRight={0}
                            compType="Line"
                          />
                          <Line
                            className="bg-indigo_50 lg:h-[200px] xl:h-[228px] h-[256px] 2xl:h-[257px] 3xl:h-[308px] lg:ml-[47px] xl:ml-[54px] ml-[61px] 3xl:ml-[73px] w-[1px]"
                            compId="I593:300633;556:313977"
                            comWidth={1}
                            comHeight={256}
                            compLeft={61}
                            compRight={0}
                            compType="Line"
                          />
                        </Row>
                        <Row
                          className="absolute bg-cover bg-repeat items-center justify-center lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] right-[0] shadow-bs3 top-[11%] w-[38%]"
                          compId="1317"
                          style={{
                            backgroundImage: "url('images/img_group1317.png')",
                          }}
                          comWidth={145}
                          comHeight={48}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <div
                            className="bg-indigo_401 lg:h-[5px] h-[6px] 2xl:h-[7px] 3xl:h-[8px] ml-[2px] rounded-radius50 lg:w-[4px] xl:w-[5px] w-[6px] 3xl:w-[7px]"
                            compId="I593:300633;556:313999"
                            comWidth={6}
                            comHeight={6}
                            compLeft={2}
                            compRight={0}
                            compType="View"
                          ></div>
                          <Text
                            className="font-semibold lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_900 w-[auto]"
                            compId="I593:300633;556:313998"
                            comWidth={31}
                            comHeight={16}
                            compLeft={8}
                            compRight={0}
                            compType="Text"
                          >
                            150.0
                          </Text>
                          <div
                            className="bg-amber_300 lg:h-[5px] h-[6px] 2xl:h-[7px] 3xl:h-[8px] lg:ml-[16px] xl:ml-[18px] ml-[21px] 3xl:ml-[25px] rounded-radius50 lg:w-[4px] xl:w-[5px] w-[6px] 3xl:w-[7px]"
                            compId="I593:300633;556:314002"
                            comWidth={6}
                            comHeight={6}
                            compLeft={21}
                            compRight={0}
                            compType="View"
                          ></div>
                          <Text
                            className="font-semibold lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] mr-[1px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_900 w-[auto]"
                            compId="I593:300633;556:314001"
                            comWidth={30}
                            comHeight={16}
                            compLeft={8}
                            compRight={1}
                            compType="Text"
                          >
                            120.0
                          </Text>
                        </Row>
                      </Stack>
                    </Row>
                    <Row
                      className="items-center justify-center lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[84%]"
                      compId="I593:300633;556:314011"
                      comWidth={405}
                      comHeight={16}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Text
                        className="font-normal not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                        compId="I593:300633;556:314012"
                        comWidth={29}
                        comHeight={16}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        -300
                      </Text>
                      <Text
                        className="font-normal lg:ml-[28px] xl:ml-[32px] ml-[37px] 3xl:ml-[44px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                        compId="I593:300633;556:314013"
                        comWidth={28}
                        comHeight={16}
                        compLeft={37}
                        compRight={0}
                        compType="Text"
                      >
                        -200
                      </Text>
                      <Text
                        className="font-normal lg:ml-[26px] xl:ml-[30px] ml-[34px] 3xl:ml-[40px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                        compId="I593:300633;556:314014"
                        comWidth={27}
                        comHeight={16}
                        compLeft={34}
                        compRight={0}
                        compType="Text"
                      >
                        -100
                      </Text>
                      <Text
                        className="font-normal lg:ml-[36px] xl:ml-[41px] ml-[47px] 3xl:ml-[56px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                        compId="I593:300633;556:314015"
                        comWidth={8}
                        comHeight={16}
                        compLeft={47}
                        compRight={0}
                        compType="Text"
                      >
                        0
                      </Text>
                      <Text
                        className="font-normal lg:ml-[36px] xl:ml-[41px] ml-[47px] 3xl:ml-[56px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                        compId="I593:300633;556:314016"
                        comWidth={21}
                        comHeight={16}
                        compLeft={47}
                        compRight={0}
                        compType="Text"
                      >
                        100
                      </Text>
                      <Text
                        className="font-normal lg:ml-[31px] xl:ml-[36px] ml-[41px] 3xl:ml-[49px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                        compId="I593:300633;556:314017"
                        comWidth={23}
                        comHeight={16}
                        compLeft={41}
                        compRight={0}
                        compType="Text"
                      >
                        200
                      </Text>
                      <Text
                        className="font-normal lg:ml-[29px] xl:ml-[33px] ml-[38px] 3xl:ml-[45px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                        compId="I593:300633;556:314018"
                        comWidth={23}
                        comHeight={16}
                        compLeft={38}
                        compRight={0}
                        compType="Text"
                      >
                        300
                      </Text>
                    </Row>
                    <Row
                      className="items-center justify-center 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] mb-[9px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] pr-[2px] w-[31%]"
                      compId="I593:300633;556:314003"
                      comWidth={151}
                      comHeight={16}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <div
                        className="bg-amber_300 lg:h-[5px] h-[6px] 2xl:h-[7px] 3xl:h-[8px] rounded-radius50 lg:w-[4px] xl:w-[5px] w-[6px] 3xl:w-[7px]"
                        compId="I593:300633;556:314006"
                        comWidth={6}
                        comHeight={6}
                        compLeft={0}
                        compRight={0}
                        compType="View"
                      ></div>
                      <Text
                        className="font-medium lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                        compId="I593:300633;556:314007"
                        comWidth={42}
                        comHeight={16}
                        compLeft={8}
                        compRight={0}
                        compType="Text"
                      >
                        Income
                      </Text>
                      <div
                        className="bg-indigo_401 lg:h-[5px] h-[6px] 2xl:h-[7px] 3xl:h-[8px] lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] rounded-radius50 lg:w-[4px] xl:w-[5px] w-[6px] 3xl:w-[7px]"
                        compId="I593:300633;556:314009"
                        comWidth={6}
                        comHeight={6}
                        compLeft={25}
                        compRight={0}
                        compType="View"
                      ></div>
                      <Text
                        className="font-medium lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                        compId="I593:300633;556:314010"
                        comWidth={54}
                        comHeight={16}
                        compLeft={8}
                        compRight={0}
                        compType="Text"
                      >
                        Expenses
                      </Text>
                    </Row>
                  </Column>
                </Stack>
                <Column
                  className="bg-white_A700 lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs1 w-[43%]"
                  compId="593:300634"
                  comWidth={423}
                  comHeight={465}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="justify-between w-[100%]"
                    compId="1340"
                    comWidth={359}
                    comHeight={32}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                      compId="I593:300634;556:314068"
                      comWidth={121}
                      comHeight={28}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Total projects
                    </Text>
                    <Img
                      src="images/img_menu_bluegray_400.png"
                      className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                      compId="I593:300634;556:314069"
                      comWidth={32}
                      comHeight={32}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="menu Two"
                    />
                  </Row>
                  <Text
                    className="font-normal lg:mt-[22px] xl:mt-[25px] mt-[29px] 3xl:mt-[34px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                    compId="I593:300634;556:314072"
                    comWidth={135}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Mobile app (4/12)
                  </Text>
                  <Row
                    className="items-center lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] w-[100%]"
                    compId="I593:300634;556:314073"
                    comWidth={359}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <div
                      className="3xl:h-[10px] lg:h-[7px] h-[8px] 2xl:h-[9px] overflow-hidden relative w-[84%]"
                      compId="I593:300634;556:314075"
                      comWidth={300}
                      comHeight={8}
                      compLeft={0}
                      compRight={0}
                      compType="ProgressBar"
                      name="Group One"
                    >
                      <div className="w-full h-full absolute bg-gray_50 rounded-[4px]"></div>
                      <div
                        className="h-full absolute bg-indigo_401  rounded-[4px]"
                        style={{ width: "27%" }}
                      ></div>
                    </div>
                    <Text
                      className="font-normal lg:ml-[20px] xl:ml-[23px] ml-[26px] 3xl:ml-[31px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                      compId="I593:300634;556:314074"
                      comWidth={33}
                      comHeight={24}
                      compLeft={26}
                      compRight={0}
                      compType="Text"
                    >
                      34%
                    </Text>
                  </Row>
                  <Line
                    className="bg-indigo_50 h-[1px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[1px]"
                    compId="I593:300634;556:314078"
                    comWidth={1}
                    comHeight={1}
                    compLeft={0}
                    compRight={0}
                    compType="Line"
                  />
                  <Text
                    className="font-normal lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                    compId="I593:300634;556:314080"
                    comWidth={146}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Landing page (2/4)
                  </Text>
                  <Row
                    className="items-center lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] w-[100%]"
                    compId="I593:300634;556:314081"
                    comWidth={359}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <div
                      className="3xl:h-[10px] lg:h-[7px] h-[8px] 2xl:h-[9px] overflow-hidden relative w-[84%]"
                      compId="I593:300634;556:314083"
                      comWidth={300}
                      comHeight={8}
                      compLeft={0}
                      compRight={0}
                      compType="ProgressBar"
                      name="Group Two"
                    >
                      <div className="w-full h-full absolute bg-gray_50 rounded-[4px]"></div>
                      <div
                        className="h-full absolute bg-green_700  rounded-[4px]"
                        style={{ width: "62%" }}
                      ></div>
                    </div>
                    <Text
                      className="font-normal lg:ml-[20px] xl:ml-[23px] ml-[26px] 3xl:ml-[31px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                      compId="I593:300634;556:314082"
                      comWidth={33}
                      comHeight={24}
                      compLeft={26}
                      compRight={0}
                      compType="Text"
                    >
                      50%
                    </Text>
                  </Row>
                  <Line
                    className="bg-indigo_50 h-[1px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[1px]"
                    compId="I593:300634;556:314086"
                    comWidth={1}
                    comHeight={1}
                    compLeft={0}
                    compRight={0}
                    compType="Line"
                  />
                  <Text
                    className="font-normal lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                    compId="I593:300634;556:314088"
                    comWidth={110}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Branding (2/2)
                  </Text>
                  <Row
                    className="items-center lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] w-[100%]"
                    compId="I593:300634;556:314089"
                    comWidth={359}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <div
                      className="3xl:h-[10px] lg:h-[7px] h-[8px] 2xl:h-[9px] overflow-hidden relative w-[87%]"
                      compId="I593:300634;556:314091"
                      comWidth={311}
                      comHeight={8}
                      compLeft={0}
                      compRight={0}
                      compType="ProgressBar"
                      name="Group Three"
                    >
                      <div className="w-full h-full absolute bg-gray_50 rounded-[4px]"></div>
                      <div
                        className="h-full absolute bg-amber_300  rounded-[4px]"
                        style={{ width: "96%" }}
                      ></div>
                    </div>
                    <Text
                      className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                      compId="I593:300634;556:314090"
                      comWidth={40}
                      comHeight={24}
                      compLeft={8}
                      compRight={0}
                      compType="Text"
                    >
                      100%
                    </Text>
                  </Row>
                  <Line
                    className="bg-indigo_50 h-[1px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[1px]"
                    compId="I593:300634;556:314094"
                    comWidth={1}
                    comHeight={1}
                    compLeft={0}
                    compRight={0}
                    compType="Line"
                  />
                  <Text
                    className="font-normal lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                    compId="I593:300634;556:314096"
                    comWidth={110}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Branding (2/8)
                  </Text>
                  <Row
                    className="items-center lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] w-[100%]"
                    compId="I593:300634;556:314097"
                    comWidth={359}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <div
                      className="3xl:h-[10px] lg:h-[7px] h-[8px] 2xl:h-[9px] overflow-hidden relative w-[87%]"
                      compId="I593:300634;556:314099"
                      comWidth={311}
                      comHeight={8}
                      compLeft={0}
                      compRight={0}
                      compType="ProgressBar"
                      name="Group Four"
                    >
                      <div className="w-full h-full absolute bg-gray_50 rounded-[4px]"></div>
                      <div
                        className="h-full absolute bg-red_600  rounded-[4px]"
                        style={{ width: "17%" }}
                      ></div>
                    </div>
                    <Text
                      className="font-normal lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                      compId="I593:300634;556:314098"
                      comWidth={33}
                      comHeight={24}
                      compLeft={15}
                      compRight={0}
                      compType="Text"
                    >
                      25%
                    </Text>
                  </Row>
                </Column>
              </Row>
              <Column
                className="bg-white_A700 lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:p-[20px] xl:p-[23px] p-[26px] 3xl:p-[31px] rounded-radius4 shadow-bs1 w-[100%]"
                compId="593:300635"
                comWidth={976}
                comHeight={359}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="items-center justify-between lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] w-[99%]"
                  compId="1341"
                  comWidth={912}
                  comHeight={40}
                  compLeft={6}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                    compId="I593:300635;556:314020"
                    comWidth={180}
                    comHeight={28}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Transactions history
                  </Text>
                  <Button
                    className="flex items-center justify-center text-center w-[19%]"
                    compId="I593:300635;43809:30188"
                    comWidth={0}
                    comHeight={40}
                    compLeft={0}
                    compRight={0}
                    compType="Button"
                    leftIcon={
                      <Img
                        src="images/img_calendar.png"
                        className="w-[16.67px] mr-[13px] text-center lg:w-[12px] lg:mr-[10px] xl:w-[14px] xl:mr-[11px] 2xl:w-[16px] 3xl:w-[20px] 3xl:mr-[15px]"
                        compId="I593:300635;43809:30190;5:156"
                        comWidth={16.67}
                        comHeight={18.33}
                        compLeft={0}
                        compRight={13}
                        compType="Image"
                        alt="calendar"
                      />
                    }
                    size="md"
                    variant="OutlineBluegray200"
                  >
                    <div className="bg-transparent font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px]">
                      13 Aug - 20 Aug
                    </div>
                  </Button>
                </Row>
                <Row
                  className="items-center lg:ml-[20px] xl:ml-[23px] ml-[26px] 3xl:ml-[31px] lg:mt-[22px] xl:mt-[25px] mt-[29px] 3xl:mt-[34px] w-[84%]"
                  compId="I593:300635;556:314024"
                  comWidth={772}
                  comHeight={24}
                  compLeft={26}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                    compId="I593:300635;556:314025"
                    comWidth={26}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    No.
                  </Text>
                  <Text
                    className="font-normal lg:ml-[38px] xl:ml-[43px] ml-[49px] 3xl:ml-[58px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                    compId="I593:300635;556:314026"
                    comWidth={74}
                    comHeight={24}
                    compLeft={49}
                    compRight={0}
                    compType="Text"
                  >
                    Customer
                  </Text>
                  <Text
                    className="font-normal ml-[104px] 3xl:ml-[124px] lg:ml-[80px] xl:ml-[92px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                    compId="I593:300635;556:314027"
                    comWidth={36}
                    comHeight={24}
                    compLeft={104}
                    compRight={0}
                    compType="Text"
                  >
                    Date
                  </Text>
                  <Text
                    className="font-normal ml-[112px] 3xl:ml-[134px] lg:ml-[87px] xl:ml-[99px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                    compId="I593:300635;556:314028"
                    comWidth={59}
                    comHeight={24}
                    compLeft={112}
                    compRight={0}
                    compType="Text"
                  >
                    Amount
                  </Text>
                  <Text
                    className="font-normal lg:ml-[56px] xl:ml-[64px] ml-[73px] 3xl:ml-[87px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                    compId="I593:300635;556:314029"
                    comWidth={74}
                    comHeight={24}
                    compLeft={73}
                    compRight={0}
                    compType="Text"
                  >
                    Order No.
                  </Text>
                  <Text
                    className="font-normal lg:ml-[45px] xl:ml-[52px] ml-[59px] 3xl:ml-[70px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                    compId="I593:300635;556:314030"
                    comWidth={105}
                    comHeight={24}
                    compLeft={59}
                    compRight={0}
                    compType="Text"
                  >
                    Payment type
                  </Text>
                </Row>
                <List
                  className="gap-[0] lg:mb-[4px] xl:mb-[5px] mb-[6px] 3xl:mb-[7px] min-h-[auto] lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[99%]"
                  compId="1356"
                  comWidth={912}
                  comHeight={192}
                  compLeft={6}
                  compRight={0}
                  compType="List"
                  orientation="vertical"
                >
                  <Row
                    className="bg-gray_50 items-center my-[0] lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px] w-[100%]"
                    compId="I593:300635;556:314032"
                    comWidth={912}
                    comHeight={64}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                      compId="I593:300635;556:314033"
                      comWidth={8}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      1
                    </Text>
                    <Img
                      src="images/img_robototoyfacefi.png"
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[52px] xl:ml-[59px] ml-[67px] 3xl:ml-[80px] rounded-radius50 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      compId="I593:300635;556:314039;341:279749"
                      comWidth={24}
                      comHeight={24}
                      compLeft={67}
                      compRight={0}
                      compType="CircleImage"
                      alt="RobotoToyFaceFi"
                    />
                    <Text
                      className="font-medium xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                      compId="I593:300635;556:314041"
                      comWidth={77}
                      comHeight={24}
                      compLeft={12}
                      compRight={0}
                      compType="Text"
                    >
                      Ackerman
                    </Text>
                    <Text
                      className="font-medium lg:ml-[50px] xl:ml-[57px] ml-[65px] 3xl:ml-[78px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                      compId="I593:300635;556:314034"
                      comWidth={86}
                      comHeight={24}
                      compLeft={65}
                      compRight={0}
                      compType="Text"
                    >
                      12.02.2022
                    </Text>
                    <Text
                      className="font-medium lg:ml-[48px] xl:ml-[55px] ml-[62px] 3xl:ml-[74px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                      compId="I593:300635;556:314035"
                      comWidth={45}
                      comHeight={24}
                      compLeft={62}
                      compRight={0}
                      compType="Text"
                    >
                      $20.0
                    </Text>
                    <Text
                      className="font-medium 3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] ml-[87px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                      compId="I593:300635;556:314036"
                      comWidth={58}
                      comHeight={24}
                      compLeft={87}
                      compRight={0}
                      compType="Text"
                    >
                      #21033
                    </Text>
                    <Text
                      className="font-medium lg:ml-[58px] xl:ml-[66px] ml-[75px] 3xl:ml-[90px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                      compId="I593:300635;556:314037"
                      comWidth={74}
                      comHeight={24}
                      compLeft={75}
                      compRight={0}
                      compType="Text"
                    >
                      Visa Card
                    </Text>
                    <Img
                      src="images/img_menu_bluegray_400.png"
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] ml-[107px] 3xl:ml-[128px] lg:ml-[83px] xl:ml-[95px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      compId="I593:300635;556:314042"
                      comWidth={24}
                      comHeight={24}
                      compLeft={107}
                      compRight={0}
                      compType="Image"
                      alt="menu Three"
                    />
                  </Row>
                  <Row
                    className="bg-white_A700 items-center my-[0] lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px] w-[100%]"
                    compId="I593:300635;556:314056"
                    comWidth={912}
                    comHeight={64}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                      compId="I593:300635;556:314057"
                      comWidth={10}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      2
                    </Text>
                    <Img
                      src="images/img_fidenza978toy.png"
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[50px] xl:ml-[57px] ml-[65px] 3xl:ml-[78px] rounded-radius50 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      compId="I593:300635;556:314063;444:290026"
                      comWidth={24}
                      comHeight={24}
                      compLeft={65}
                      compRight={0}
                      compType="CircleImage"
                      alt="Fidenza978Toy"
                    />
                    <Text
                      className="font-medium xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                      compId="I593:300635;556:314065"
                      comWidth={39}
                      comHeight={24}
                      compLeft={12}
                      compRight={0}
                      compType="Text"
                    >
                      Avori
                    </Text>
                    <Text
                      className="font-medium ml-[103px] 3xl:ml-[123px] lg:ml-[80px] xl:ml-[91px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                      compId="I593:300635;556:314058"
                      comWidth={86}
                      comHeight={24}
                      compLeft={103}
                      compRight={0}
                      compType="Text"
                    >
                      12.02.2022
                    </Text>
                    <Text
                      className="font-medium lg:ml-[48px] xl:ml-[55px] ml-[62px] 3xl:ml-[74px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                      compId="I593:300635;556:314059"
                      comWidth={45}
                      comHeight={24}
                      compLeft={62}
                      compRight={0}
                      compType="Text"
                    >
                      $32.0
                    </Text>
                    <Text
                      className="font-medium 3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] ml-[87px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                      compId="I593:300635;556:314060"
                      comWidth={58}
                      comHeight={24}
                      compLeft={87}
                      compRight={0}
                      compType="Text"
                    >
                      #21034
                    </Text>
                    <Text
                      className="font-medium lg:ml-[58px] xl:ml-[66px] ml-[75px] 3xl:ml-[90px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                      compId="I593:300635;556:314061"
                      comWidth={74}
                      comHeight={24}
                      compLeft={75}
                      compRight={0}
                      compType="Text"
                    >
                      Visa Card
                    </Text>
                    <Img
                      src="images/img_menu_bluegray_400.png"
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] ml-[107px] 3xl:ml-[128px] lg:ml-[83px] xl:ml-[95px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      compId="I593:300635;556:314066"
                      comWidth={24}
                      comHeight={24}
                      compLeft={107}
                      compRight={0}
                      compType="Image"
                      alt="menu Four"
                    />
                  </Row>
                  <Row
                    className="bg-gray_50 items-center my-[0] lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px] w-[100%]"
                    compId="I593:300635;556:314044"
                    comWidth={912}
                    comHeight={64}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                      compId="I593:300635;556:314045"
                      comWidth={10}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      3
                    </Text>
                    <Img
                      src="images/img_vangoghbyamrit.png"
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[50px] xl:ml-[57px] ml-[65px] 3xl:ml-[78px] rounded-radius50 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      compId="I593:300635;556:314051;341:279748"
                      comWidth={24}
                      comHeight={24}
                      compLeft={65}
                      compRight={0}
                      compType="CircleImage"
                      alt="VanGoghByAmrit"
                    />
                    <Text
                      className="font-medium xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                      compId="I593:300635;556:314053"
                      comWidth={70}
                      comHeight={24}
                      compLeft={12}
                      compRight={0}
                      compType="Text"
                    >
                      Benjamin
                    </Text>
                    <Text
                      className="font-medium lg:ml-[56px] xl:ml-[64px] ml-[72px] 3xl:ml-[86px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                      compId="I593:300635;556:314046"
                      comWidth={86}
                      comHeight={24}
                      compLeft={72}
                      compRight={0}
                      compType="Text"
                    >
                      24.01.2022
                    </Text>
                    <Text
                      className="font-medium lg:ml-[48px] xl:ml-[55px] ml-[62px] 3xl:ml-[74px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                      compId="I593:300635;556:314047"
                      comWidth={42}
                      comHeight={24}
                      compLeft={62}
                      compRight={0}
                      compType="Text"
                    >
                      $16.0
                    </Text>
                    <Text
                      className="font-medium 3xl:ml-[108px] lg:ml-[70px] xl:ml-[80px] ml-[90px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                      compId="I593:300635;556:314048"
                      comWidth={58}
                      comHeight={24}
                      compLeft={90}
                      compRight={0}
                      compType="Text"
                    >
                      #21030
                    </Text>
                    <Text
                      className="font-medium lg:ml-[58px] xl:ml-[66px] ml-[75px] 3xl:ml-[90px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                      compId="I593:300635;556:314049"
                      comWidth={90}
                      comHeight={24}
                      compLeft={75}
                      compRight={0}
                      compType="Text"
                    >
                      MasterCard
                    </Text>
                    <Img
                      src="images/img_menu_bluegray_400.png"
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] 3xl:ml-[109px] lg:ml-[70px] xl:ml-[80px] ml-[91px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      compId="I593:300635;556:314054"
                      comWidth={24}
                      comHeight={24}
                      compLeft={91}
                      compRight={0}
                      compType="Image"
                      alt="menu Five"
                    />
                  </Row>
                </List>
              </Column>
            </Column>
            <Column
              className="bg-white_A700 lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs1 w-[25%]"
              compId="593:300631"
              comWidth={336}
              comHeight={1379}
              compLeft={20}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-center justify-between w-[100%]"
                compId="I593:300631;593:300072"
                comWidth={272}
                comHeight={40}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Button
                  className="flex lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                  compId="I593:300631;593:300073"
                  comWidth={40}
                  comHeight={40}
                  compLeft={0}
                  compRight={0}
                  compType="IconButton"
                >
                  <Img
                    src="images/img_arrowdown.png"
                    className="flex items-center justify-center"
                    compId="I593:300631;593:300073"
                    comWidth={40}
                    comHeight={40}
                    compLeft={0}
                    compRight={0}
                    compType="IconButton"
                    alt="arrowleft"
                  />
                </Button>
                <Text
                  className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                  compId="I593:300631;593:300075"
                  comWidth={95}
                  comHeight={22}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  <span className="text-bluegray_800 font-inter">Febuary </span>
                  <span className="text-bluegray_400 font-inter">2022</span>
                </Text>
                <Button
                  className="flex lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                  compId="I593:300631;593:300076"
                  comWidth={40}
                  comHeight={40}
                  compLeft={0}
                  compRight={0}
                  compType="IconButton"
                >
                  <Img
                    src="images/img_arrowright_bluegray_900.png"
                    className="flex items-center justify-center"
                    compId="I593:300631;593:300076"
                    comWidth={40}
                    comHeight={40}
                    compLeft={0}
                    compRight={0}
                    compType="IconButton"
                    alt="arrowright"
                  />
                </Button>
              </Row>
              <List
                className="gap-[0] min-h-[auto] lg:mt-[33px] xl:mt-[38px] mt-[43px] 3xl:mt-[51px] w-[100%]"
                compId="1357"
                comWidth={271}
                comHeight={59}
                compLeft={0}
                compRight={0}
                compType="List"
                orientation="vertical"
              >
                <Row
                  className="items-center justify-between my-[10.5px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] w-[100%]"
                  compId="I593:300631;593:300079"
                  comWidth={271}
                  comHeight={19}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                    compId="I593:300631;593:300080"
                    comWidth={20}
                    comHeight={19}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Mo
                  </Text>
                  <Text
                    className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                    compId="I593:300631;593:300081"
                    comWidth={16}
                    comHeight={19}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Tu
                  </Text>
                  <Text
                    className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                    compId="I593:300631;593:300082"
                    comWidth={20}
                    comHeight={19}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    We
                  </Text>
                  <Text
                    className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                    compId="I593:300631;593:300083"
                    comWidth={17}
                    comHeight={19}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Th
                  </Text>
                  <Text
                    className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                    compId="I593:300631;593:300084"
                    comWidth={13}
                    comHeight={19}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Fr
                  </Text>
                  <Text
                    className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                    compId="I593:300631;593:300085"
                    comWidth={17}
                    comHeight={19}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Sa
                  </Text>
                  <Text
                    className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                    compId="I593:300631;593:300086"
                    comWidth={17}
                    comHeight={19}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Su
                  </Text>
                </Row>
                <Line
                  className="self-center w-[100%] h-[1px] bg-indigo_50"
                  compId="I593:300631;593:300182"
                  comWidth={272}
                  comHeight={1}
                  compLeft={0}
                  compRight={0}
                  compType="Line"
                />
                <Row
                  className="items-center justify-between mr-[4px] my-[10.5px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] w-[99%]"
                  compId="I593:300631;593:300088"
                  comWidth={267}
                  comHeight={19}
                  compLeft={0}
                  compRight={4}
                  compType="Row"
                >
                  <Text
                    className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                    compId="I593:300631;593:300089"
                    comWidth={17}
                    comHeight={19}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    28
                  </Text>
                  <Text
                    className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                    compId="I593:300631;593:300090"
                    comWidth={17}
                    comHeight={19}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    29
                  </Text>
                  <Text
                    className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                    compId="I593:300631;593:300091"
                    comWidth={18}
                    comHeight={19}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    30
                  </Text>
                  <Text
                    className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                    compId="I593:300631;593:300092"
                    comWidth={7}
                    comHeight={19}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    1
                  </Text>
                  <Text
                    className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                    compId="I593:300631;593:300093"
                    comWidth={8}
                    comHeight={19}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    2
                  </Text>
                  <Text
                    className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                    compId="I593:300631;593:300094"
                    comWidth={9}
                    comHeight={19}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    3
                  </Text>
                  <Text
                    className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                    compId="I593:300631;593:300095"
                    comWidth={9}
                    comHeight={19}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    4
                  </Text>
                </Row>
              </List>
              <List
                className="gap-[0] min-h-[auto] ml-[2px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[99%]"
                compId="1358"
                comWidth={270}
                comHeight={56}
                compLeft={2}
                compRight={0}
                compType="List"
                orientation="vertical"
              >
                <Row
                  className="items-center justify-between ml-[2px] lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] w-[99%]"
                  compId="I593:300631;593:300096"
                  comWidth={268}
                  comHeight={22}
                  compLeft={2}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                    compId="I593:300631;593:300097"
                    comWidth={9}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    5
                  </Text>
                  <Text
                    className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                    compId="I593:300631;593:300098"
                    comWidth={9}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    6
                  </Text>
                  <Text
                    className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                    compId="I593:300631;593:300099"
                    comWidth={8}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    7
                  </Text>
                  <Text
                    className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                    compId="I593:300631;593:300100"
                    comWidth={9}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    8
                  </Text>
                  <Text
                    className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                    compId="I593:300631;593:300101"
                    comWidth={9}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    9
                  </Text>
                  <Text
                    className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                    compId="I593:300631;593:300102"
                    comWidth={16}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    10
                  </Text>
                  <Text
                    className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                    compId="I593:300631;593:300103"
                    comWidth={14}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    11
                  </Text>
                </Row>
                <Line
                  className="self-center w-[100%] h-[1px] bg-indigo_50"
                  compId="I593:300631;593:300182"
                  comWidth={272}
                  comHeight={1}
                  compLeft={0}
                  compRight={0}
                  compType="Line"
                />
                <Row
                  className="items-center justify-between lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] w-[100%]"
                  compId="I593:300631;593:300104"
                  comWidth={270}
                  comHeight={22}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                    compId="I593:300631;593:300105"
                    comWidth={15}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    12
                  </Text>
                  <Text
                    className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                    compId="I593:300631;593:300106"
                    comWidth={16}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    13
                  </Text>
                  <Text
                    className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                    compId="I593:300631;593:300107"
                    comWidth={16}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    14
                  </Text>
                  <Text
                    className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                    compId="I593:300631;593:300108"
                    comWidth={16}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    15
                  </Text>
                  <Text
                    className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                    compId="I593:300631;593:300109"
                    comWidth={16}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    16
                  </Text>
                  <Text
                    className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                    compId="I593:300631;593:300110"
                    comWidth={15}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    17
                  </Text>
                  <Text
                    className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                    compId="I593:300631;593:300111"
                    comWidth={16}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    18
                  </Text>
                </Row>
              </List>
              <Row
                className="items-center justify-between ml-[2px] mt-[4px] w-[99%]"
                compId="I593:300631;593:300112"
                comWidth={270}
                comHeight={38}
                compLeft={2}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                  compId="I593:300631;593:300115"
                  comWidth={16}
                  comHeight={22}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  19
                </Text>
                <Text
                  className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                  compId="I593:300631;593:300116"
                  comWidth={17}
                  comHeight={22}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  20
                </Text>
                <Text
                  className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                  compId="I593:300631;593:300117"
                  comWidth={15}
                  comHeight={22}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  21
                </Text>
                <Text
                  className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                  compId="I593:300631;593:300118"
                  comWidth={16}
                  comHeight={22}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  22
                </Text>
                <Text
                  className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                  compId="I593:300631;593:300119"
                  comWidth={17}
                  comHeight={22}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  23
                </Text>
                <Column
                  className="bg-gray_104 lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] items-center px-[3px] rounded-radius50 lg:w-[29px] xl:w-[33px] w-[38px] 3xl:w-[45px]"
                  compId="542"
                  comWidth={38}
                  comHeight={38}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-medium lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-deep_orange_300 w-[auto]"
                    compId="I593:300631;593:300120"
                    comWidth={18}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    24
                  </Text>
                  <div
                    className="bg-deep_orange_300 h-[4px] 3xl:h-[5px] 2xl:h-[5px] mt-[1px] rounded-radius50 xl:w-[3px] lg:w-[3px] w-[4px]"
                    compId="I593:300631;593:300114"
                    comWidth={4}
                    comHeight={4}
                    compLeft={0}
                    compRight={0}
                    compType="View"
                  ></div>
                </Column>
                <Text
                  className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                  compId="I593:300631;593:300121"
                  comWidth={17}
                  comHeight={22}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  25
                </Text>
              </Row>
              <Row
                className="items-center ml-[1px] mt-[4px] w-[70%]"
                compId="I593:300631;593:300122"
                comWidth={191}
                comHeight={19}
                compLeft={1}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                  compId="I593:300631;593:300123"
                  comWidth={17}
                  comHeight={19}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  26
                </Text>
                <Text
                  className="font-normal lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                  compId="I593:300631;593:300124"
                  comWidth={16}
                  comHeight={19}
                  compLeft={30}
                  compRight={0}
                  compType="Text"
                >
                  27
                </Text>
                <Text
                  className="font-normal lg:ml-[21px] xl:ml-[24px] ml-[28px] 3xl:ml-[33px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                  compId="I593:300631;593:300125"
                  comWidth={17}
                  comHeight={19}
                  compLeft={28}
                  compRight={0}
                  compType="Text"
                >
                  28
                </Text>
                <Text
                  className="font-normal lg:ml-[21px] xl:ml-[24px] ml-[27px] 3xl:ml-[32px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                  compId="I593:300631;593:300126"
                  comWidth={17}
                  comHeight={19}
                  compLeft={27}
                  compRight={0}
                  compType="Text"
                >
                  29
                </Text>
                <Text
                  className="font-normal lg:ml-[16px] xl:ml-[18px] ml-[21px] 3xl:ml-[25px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                  compId="I593:300631;593:300127"
                  comWidth={18}
                  comHeight={19}
                  compLeft={21}
                  compRight={0}
                  compType="Text"
                >
                  30
                </Text>
              </Row>
              <Row
                className="font-poppins items-center justify-between lg:mt-[49px] xl:mt-[56px] mt-[64px] 3xl:mt-[76px] w-[100%]"
                compId="1331"
                comWidth={272}
                comHeight={32}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-medium lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                  compId="I593:300631;593:300071"
                  comWidth={150}
                  comHeight={32}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  Recent activities
                </Text>
                <Img
                  src="images/img_menu_bluegray_400.png"
                  className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                  compId="I593:300631;593:300129"
                  comWidth={32}
                  comHeight={32}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="menu Six"
                />
              </Row>
              <Text
                className="font-medium lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                compId="I593:300631;593:300131"
                comWidth={88}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                Feb 24, 2022
              </Text>
              <List
                className="font-inter gap-[0] min-h-[auto] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[96%]"
                compId="1359"
                comWidth={262}
                comHeight={232}
                compLeft={0}
                compRight={0}
                compType="List"
                orientation="vertical"
              >
                <Row
                  className="items-center justify-between lg:my-[12px] xl:my-[14px] my-[16px] 3xl:my-[19px] w-[100%]"
                  compId="I593:300631;593:300134"
                  comWidth={262}
                  comHeight={100}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Img
                    src="images/img_robototoyfacefi.png"
                    className="lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]"
                    compId="I593:300631;593:300135;341:279749"
                    comWidth={46}
                    comHeight={46}
                    compLeft={0}
                    compRight={0}
                    compType="CircleImage"
                    alt="RobotoToyFaceFi One"
                  />
                  <Column
                    className="w-[76%]"
                    compId="I593:300631;593:300136"
                    comWidth={200}
                    comHeight={100}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]"
                      compId="I593:300631;593:300137"
                      comWidth={66}
                      comHeight={22}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Ackerman
                    </Text>
                    <Text
                      className="font-medium lg:leading-[18px] xl:leading-[21px] leading-[24.00px] 2xl:leading-[24px] 3xl:leading-[28px] mt-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[100%]"
                      compId="I593:300631;593:300138"
                      comWidth={200}
                      comHeight={48}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      <span className="text-bluegray_900 font-inter">
                        Changelog Revamp{" "}
                      </span>
                      <span className="text-red_600 font-inter">#ver 1.0</span>
                      <span className="text-bluegray_900 font-inter">
                        {" "}
                        Homescreen{" "}
                      </span>
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                      compId="I593:300631;593:300139"
                      comWidth={60}
                      comHeight={22}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      2min ago
                    </Text>
                  </Column>
                </Row>
                <Line
                  className="self-center w-[100%] h-[1px] bg-indigo_50"
                  compId="I593:300631;593:300182"
                  comWidth={272}
                  comHeight={1}
                  compLeft={0}
                  compRight={0}
                  compType="Line"
                />
                <Row
                  className="items-center justify-between lg:my-[12px] xl:my-[14px] my-[16px] 3xl:my-[19px] w-[100%]"
                  compId="I593:300631;593:300142"
                  comWidth={261}
                  comHeight={100}
                  compLeft={0}
                  compRight={1}
                  compType="Row"
                >
                  <Img
                    src="images/img_punktoyface1.png"
                    className="lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]"
                    compId="I593:300631;593:300143;341:279747"
                    comWidth={46}
                    comHeight={46}
                    compLeft={0}
                    compRight={0}
                    compType="CircleImage"
                    alt="PunkToyFaceOne"
                  />
                  <Column
                    className="w-[76%]"
                    compId="I593:300631;593:300144"
                    comWidth={199}
                    comHeight={100}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                      compId="I593:300631;593:300145"
                      comWidth={49}
                      comHeight={22}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Blanker
                    </Text>
                    <Text
                      className="font-medium lg:leading-[18px] xl:leading-[21px] leading-[24.00px] 2xl:leading-[24px] 3xl:leading-[28px] mt-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[100%]"
                      compId="I593:300631;593:300146"
                      comWidth={199}
                      comHeight={48}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Create user flow for Data Projects
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                      compId="I593:300631;593:300147"
                      comWidth={60}
                      comHeight={22}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      2min ago
                    </Text>
                  </Column>
                </Row>
              </List>
              <List
                className="font-inter gap-[0] min-h-[auto] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[96%]"
                compId="1360"
                comWidth={261}
                comHeight={292}
                compLeft={0}
                compRight={0}
                compType="List"
                orientation="vertical"
              >
                <Row
                  className="items-center justify-between mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:my-[12px] xl:my-[14px] my-[16px] 3xl:my-[19px] 3xl:pr-[10px] lg:pr-[7px] xl:pr-[8px] pr-[9px] w-[96%]"
                  compId="I593:300631;593:300150"
                  comWidth={251}
                  comHeight={76}
                  compLeft={0}
                  compRight={10}
                  compType="Row"
                >
                  <Img
                    src="images/img_vangoghbyamrit.png"
                    className="lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]"
                    compId="I593:300631;593:300151;341:279748"
                    comWidth={46}
                    comHeight={46}
                    compLeft={0}
                    compRight={0}
                    compType="CircleImage"
                    alt="VanGoghByAmrit One"
                  />
                  <Column
                    className="w-[74%]"
                    compId="I593:300631;593:300152"
                    comWidth={180}
                    comHeight={76}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                      compId="I593:300631;593:300153"
                      comWidth={40}
                      comHeight={22}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Lee Ri
                    </Text>
                    <Text
                      className="font-medium mt-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                      compId="I593:300631;593:300154"
                      comWidth={180}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Revision design system
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                      compId="I593:300631;593:300155"
                      comWidth={60}
                      comHeight={22}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      2min ago
                    </Text>
                  </Column>
                </Row>
                <Line
                  className="self-center w-[100%] h-[1px] bg-indigo_50"
                  compId="I593:300631;593:300182"
                  comWidth={272}
                  comHeight={1}
                  compLeft={0}
                  compRight={0}
                  compType="Line"
                />
                <Row
                  className="items-center justify-between lg:my-[12px] xl:my-[14px] my-[16px] 3xl:my-[19px] xl:pr-[10px] pr-[12px] 3xl:pr-[14px] lg:pr-[9px] w-[100%]"
                  compId="I593:300631;593:300158"
                  comWidth={261}
                  comHeight={76}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Img
                    src="images/img_rarepepenakam.png"
                    className="lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]"
                    compId="I593:300631;593:300159;444:290032"
                    comWidth={46}
                    comHeight={46}
                    compLeft={0}
                    compRight={0}
                    compType="CircleImage"
                    alt="RarePepeNakam"
                  />
                  <Column
                    className="w-[75%]"
                    compId="I593:300631;593:300160"
                    comWidth={187}
                    comHeight={76}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                      compId="I593:300631;593:300161"
                      comWidth={55}
                      comHeight={22}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Jackson
                    </Text>
                    <Text
                      className="font-medium mt-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                      compId="I593:300631;593:300162"
                      comWidth={187}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Changelog Scan ID Card
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                      compId="I593:300631;593:300163"
                      comWidth={60}
                      comHeight={22}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      2min ago
                    </Text>
                  </Column>
                </Row>
                <Line
                  className="self-center w-[100%] h-[1px] bg-indigo_50"
                  compId="I593:300631;593:300182"
                  comWidth={272}
                  comHeight={1}
                  compLeft={0}
                  compRight={0}
                  compType="Line"
                />
                <Row
                  className="items-center lg:mr-[36px] xl:mr-[41px] mr-[47px] 3xl:mr-[56px] lg:my-[12px] xl:my-[14px] my-[16px] 3xl:my-[19px] lg:pr-[4px] xl:pr-[5px] pr-[6px] 3xl:pr-[7px] w-[82%]"
                  compId="I593:300631;593:300166"
                  comWidth={214}
                  comHeight={76}
                  compLeft={0}
                  compRight={47}
                  compType="Row"
                >
                  <Img
                    src="images/img_tintin22.png"
                    className="lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]"
                    compId="I593:300631;593:300167;444:290035"
                    comWidth={46}
                    comHeight={46}
                    compLeft={0}
                    compRight={0}
                    compType="CircleImage"
                    alt="TinTinTwentyTwo"
                  />
                  <Column
                    className="lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] w-[70%]"
                    compId="I593:300631;593:300168"
                    comWidth={146}
                    comHeight={76}
                    compLeft={16}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                      compId="I593:300631;593:300169"
                      comWidth={52}
                      comHeight={22}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Yomaha
                    </Text>
                    <Text
                      className="font-medium mt-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                      compId="I593:300631;593:300170"
                      comWidth={146}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Pitching with client
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                      compId="I593:300631;593:300171"
                      comWidth={60}
                      comHeight={22}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      2min ago
                    </Text>
                  </Column>
                </Row>
              </List>
              <Text
                className="font-medium lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                compId="I593:300631;593:300173"
                comWidth={89}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                Feb 23, 2022
              </Text>
              <List
                className="font-inter gap-[0] min-h-[auto] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[96%]"
                compId="1361"
                comWidth={262}
                comHeight={232}
                compLeft={0}
                compRight={0}
                compType="List"
                orientation="vertical"
              >
                <Row
                  className="items-center justify-between lg:my-[12px] xl:my-[14px] my-[16px] 3xl:my-[19px] w-[100%]"
                  compId="I593:300631;593:300176"
                  comWidth={262}
                  comHeight={100}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Img
                    src="images/img_robototoyfacefi.png"
                    className="lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]"
                    compId="I593:300631;593:300177;341:279749"
                    comWidth={46}
                    comHeight={46}
                    compLeft={0}
                    compRight={0}
                    compType="CircleImage"
                    alt="RobotoToyFaceFi Two"
                  />
                  <Column
                    className="w-[76%]"
                    compId="I593:300631;593:300178"
                    comWidth={200}
                    comHeight={100}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]"
                      compId="I593:300631;593:300179"
                      comWidth={66}
                      comHeight={22}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Ackerman
                    </Text>
                    <Text
                      className="font-medium lg:leading-[18px] xl:leading-[21px] leading-[24.00px] 2xl:leading-[24px] 3xl:leading-[28px] mt-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[100%]"
                      compId="I593:300631;593:300180"
                      comWidth={200}
                      comHeight={48}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      <span className="text-bluegray_900 font-inter">
                        Changelog Revamp{" "}
                      </span>
                      <span className="text-red_600 font-inter">#ver 1.0</span>
                      <span className="text-bluegray_900 font-inter">
                        {" "}
                        Homescreen{" "}
                      </span>
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                      compId="I593:300631;593:300181"
                      comWidth={60}
                      comHeight={22}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      2min ago
                    </Text>
                  </Column>
                </Row>
                <Line
                  className="self-center w-[100%] h-[1px] bg-indigo_50"
                  compId="I593:300631;593:300182"
                  comWidth={272}
                  comHeight={1}
                  compLeft={0}
                  compRight={0}
                  compType="Line"
                />
                <Row
                  className="items-center justify-between lg:my-[12px] xl:my-[14px] my-[16px] 3xl:my-[19px] w-[100%]"
                  compId="I593:300631;593:300184"
                  comWidth={261}
                  comHeight={100}
                  compLeft={0}
                  compRight={1}
                  compType="Row"
                >
                  <Img
                    src="images/img_punktoyface1.png"
                    className="lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]"
                    compId="I593:300631;593:300185;341:279747"
                    comWidth={46}
                    comHeight={46}
                    compLeft={0}
                    compRight={0}
                    compType="CircleImage"
                    alt="PunkToyFaceOne One"
                  />
                  <Column
                    className="w-[76%]"
                    compId="I593:300631;593:300186"
                    comWidth={199}
                    comHeight={100}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                      compId="I593:300631;593:300187"
                      comWidth={49}
                      comHeight={22}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Blanker
                    </Text>
                    <Text
                      className="font-medium lg:leading-[18px] xl:leading-[21px] leading-[24.00px] 2xl:leading-[24px] 3xl:leading-[28px] mt-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[100%]"
                      compId="I593:300631;593:300188"
                      comWidth={199}
                      comHeight={48}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Create user flow for Data Projects
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                      compId="I593:300631;593:300189"
                      comWidth={60}
                      comHeight={22}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      2min ago
                    </Text>
                  </Column>
                </Row>
              </List>
            </Column>
          </Row>
        </Column>
        <Line
          className="absolute bg-indigo_50 xl:h-[1046px] h-[1175px] 2xl:h-[1176px] 3xl:h-[1411px] lg:h-[914px] left-[6%] top-[0] w-[1px]"
          compId="593:300637"
          comWidth={1}
          comHeight={1175}
          compLeft={84}
          compRight={0}
          compType="Line"
        />
        <aside className="absolute bottom-[0] items-center left-[0] w-[6%]">
          <Column
            className=""
            compId="723"
            comWidth={84}
            comHeight={1403}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Column
              className="bg-white_A700 items-center justify-center lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] w-[100%]"
              compId="593:300638"
              comWidth={84}
              comHeight={1403}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Img
                src="images/img_grid.png"
                className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                compId="I593:300638;531:322476"
                comWidth={20}
                comHeight={20}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="grid"
              />
              <Img
                src="images/img_user_bluegray_400.png"
                className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[26px] xl:mt-[30px] mt-[34px] 3xl:mt-[40px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                compId="I593:300638;614:14322"
                comWidth={20}
                comHeight={20}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="user One"
              />
              <Img
                src="images/img_icon.png"
                className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[26px] xl:mt-[30px] mt-[34px] 3xl:mt-[40px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                compId="I593:300638;41:1041"
                comWidth={20}
                comHeight={20}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Icon"
              />
              <Img
                src="images/img_folder_bluegray_400.png"
                className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:mt-[27px] xl:mt-[31px] mt-[35px] 3xl:mt-[42px] w-[90%]"
                compId="I593:300638;533:294493;531:320466"
                comWidth={18}
                comHeight={16}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="folder"
              />
              <Img
                src="images/img_settings.png"
                className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[27px] xl:mt-[31px] mt-[35px] 3xl:mt-[42px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                compId="I593:300638;41:1047"
                comWidth={20}
                comHeight={20}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="settings"
              />
              <Img
                src="images/img_cart.png"
                className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[26px] xl:mt-[30px] mt-[34px] 3xl:mt-[40px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                compId="I593:300638;41:1050"
                comWidth={20}
                comHeight={20}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="cart"
              />
              <Img
                src="images/img_vector_bluegray_400.png"
                className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] lg:mt-[26px] xl:mt-[30px] mt-[34px] 3xl:mt-[40px] w-[80%]"
                compId="I593:300638;614:14290;531:320955"
                comWidth={16}
                comHeight={18}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Vector One"
              />
              <div
                className="bg-bluegray_400 lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] 3xl:mb-[1120px] lg:mb-[725px] xl:mb-[829px] mb-[933px] lg:mt-[26px] xl:mt-[30px] mt-[34px] 3xl:mt-[40px] rounded-radius50 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                compId="I593:300638;533:295015;531:320442"
                comWidth={20}
                comHeight={20}
                compLeft={0}
                compRight={0}
                compType="View"
              ></div>
            </Column>
          </Column>
        </aside>
      </Stack>
    </>
  );
};

export default Dashboard0ThreePage;
