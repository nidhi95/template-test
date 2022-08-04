import React from "react";

import {
  Column,
  Stack,
  Row,
  Img,
  Text,
  Input,
  Button,
  Line,
  List,
  Radio,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const FramePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column
        className="font-inter items-center mx-[auto] w-[100%]"
        compId="599:309309"
        comWidth={1440}
        comHeight={1038}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Stack
          className="bg-white_A700 h-[1038px] 2xl:h-[1039px] 3xl:h-[1247px] lg:h-[808px] xl:h-[924px] w-[100%]"
          compId="599:309310"
          comWidth={1440}
          comHeight={1038}
          compLeft={0}
          compRight={0}
          compType="Stack"
        >
          <Column
            className="absolute items-end w-[100%]"
            compId="858"
            comWidth={1440}
            comHeight={1038}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <header
              className="w-[100%]"
              compId="576"
              comWidth={1440}
              comHeight={60}
              compLeft={0}
              compRight={0}
              compType="Header"
            >
              <Row
                className="bg-white_A700 items-center justify-end p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] w-[100%]"
                compId="43812:48122"
                comWidth={1440}
                comHeight={60}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_microphone.png"
                  className="lg:h-[22px] xl:h-[25px] h-[28px] 2xl:h-[29px] 3xl:h-[34px] w-[1%]"
                  compId="I43812:48122;43807:13258"
                  comWidth={21}
                  comHeight={28}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="microphone"
                />
                <Text
                  className="font-medium lg:ml-[169px] xl:ml-[193px] ml-[218px] 3xl:ml-[261px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                  compId="I43812:48122;234:259667"
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
                  compId="I43812:48122;234:259514"
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
                      compId="I43812:48122;234:259514;234:259505"
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
                  compId="I43812:48122;531:315836;5:32"
                  comWidth={20}
                  comHeight={22}
                  compLeft={136}
                  compRight={0}
                  compType="Image"
                  alt="Vector"
                />
                <Stack
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] w-[9%]"
                  compId="857"
                  comWidth={126}
                  comHeight={24}
                  compLeft={29}
                  compRight={0}
                  compType="Stack"
                >
                  <Img
                    src="images/img_user_bluegray_900.png"
                    className="absolute lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] inset-y-[0] left-[0] my-[auto] w-[14%]"
                    compId="I43812:48122;37:1285;37:1283"
                    comWidth={18}
                    comHeight={20}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="user"
                  />
                  <Row
                    className="absolute right-[0] w-[90%]"
                    compId="577"
                    comWidth={113}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <div
                      className="bg-red_600 3xl:h-[10px] lg:h-[7px] h-[8px] 2xl:h-[9px] mt-[1px] outline outline-[2px] outline-white_A700 rounded-radius50 lg:w-[6px] xl:w-[7px] w-[8px] 3xl:w-[9px]"
                      compId="I43812:48122;530:301660"
                      comWidth={8}
                      comHeight={8}
                      compLeft={0}
                      compRight={0}
                      compType="View"
                    ></div>
                    <Text
                      className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_500 w-[auto]"
                      compId="I43812:48122;37:1272"
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
                  compId="I43812:48122;483:292004;43812:47214"
                  comWidth={40}
                  comHeight={40}
                  compLeft={13}
                  compRight={13}
                  compType="CircleImage"
                  alt="SherlockToyFa"
                />
              </Row>
            </header>
            <Row
              className="bg-gray_50 font-poppins items-end ml-[auto] lg:p-[18px] xl:p-[21px] p-[24px] 3xl:p-[28px] w-[83%]"
              compId="864"
              comWidth={1199}
              comHeight={978}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Column
                className="lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[32%]"
                compId="862"
                comWidth={370}
                comHeight={922}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-medium lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]"
                  compId="599:309312"
                  comWidth={61}
                  comHeight={32}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  Profile
                </Text>
                <Column
                  className="bg-white_A700 font-inter items-center lg:mt-[24px] xl:mt-[27px] mt-[31px] 3xl:mt-[37px] lg:pb-[24px] xl:pb-[28px] pb-[32px] 3xl:pb-[38px] rounded-radius4 shadow-bs1 w-[100%]"
                  compId="599:309314"
                  comWidth={370}
                  comHeight={578}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Stack
                    className="lg:h-[153px] xl:h-[175px] h-[196px] 2xl:h-[197px] 3xl:h-[236px] w-[100%]"
                    compId="856"
                    comWidth={370}
                    comHeight={196}
                    compLeft={0}
                    compRight={0}
                    compType="Stack"
                  >
                    <Img
                      src="images/img_imglibimg1.png"
                      className="absolute lg:h-[106px] xl:h-[121px] h-[136px] 2xl:h-[137px] 3xl:h-[164px] top-[0] w-[100%]"
                      compId="I599:309314;598:308713"
                      comWidth={370}
                      comHeight={136}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="ImgLibIMGOne"
                    />
                    <Img
                      src="images/img_sherlocktoyfa.png"
                      className="absolute bottom-[0] xl:h-[107px] h-[120px] 2xl:h-[121px] 3xl:h-[145px] lg:h-[94px] inset-x-[0] mx-[auto] rounded-radius24 xl:w-[106px] w-[120px] 3xl:w-[144px] lg:w-[93px]"
                      compId="I599:309314;598:308714;43812:47214"
                      comWidth={120}
                      comHeight={120}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="SherlockToyFa One"
                    />
                  </Stack>
                  <Text
                    className="font-bold lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_900 w-[auto]"
                    compId="I599:309314;598:308717"
                    comWidth={132}
                    comHeight={32}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Sam Brown
                  </Text>
                  <Column
                    className="items-center lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[40%]"
                    compId="866"
                    comWidth={148}
                    comHeight={200}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                      compId="I599:309314;598:308718"
                      comWidth={148}
                      comHeight={22}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      sambrown@gmail.com
                    </Text>
                    <Row
                      className="items-center lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[85%]"
                      compId="I599:309314;598:308719"
                      comWidth={126}
                      comHeight={22}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Img
                        src="images/img_globe.png"
                        className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] rounded-radius50 lg:w-[14px] xl:w-[16px] w-[18px] 3xl:w-[21px]"
                        compId="I599:309314;598:308720;1:1793"
                        comWidth={18}
                        comHeight={18}
                        compLeft={0}
                        compRight={0}
                        compType="CircleImage"
                        alt="globe"
                      />
                      <Text
                        className="font-medium lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                        compId="I599:309314;598:308721"
                        comWidth={102}
                        comHeight={22}
                        compLeft={6}
                        compRight={0}
                        compType="Text"
                      >
                        sambrown.com
                      </Text>
                    </Row>
                    <Button
                      className="font-bold lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[99%]"
                      compId="I599:309314;598:308723"
                      comWidth={147}
                      comHeight={48}
                      compLeft={0}
                      compRight={0}
                      compType="Button"
                      shape="CircleBorder24"
                      size="lg"
                      variant="FillRed600"
                    >
                      Logout
                    </Button>
                    <Img
                      src="images/img_socialicons.png"
                      className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[73%]"
                      compId="I599:309314;598:308728"
                      comWidth={108}
                      comHeight={20}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="socialicons"
                    />
                  </Column>
                  <Line
                    className="bg-indigo_50 h-[1px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[1px]"
                    compId="I599:309314;598:308738"
                    comWidth={1}
                    comHeight={1}
                    compLeft={0}
                    compRight={0}
                    compType="Line"
                  />
                  <Text
                    className="font-normal lg:mt-[24px] xl:mt-[27px] mt-[31px] 3xl:mt-[37px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                    compId="I599:309314;598:308722"
                    comWidth={128}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Member since 2021
                  </Text>
                </Column>
                <Column
                  className="bg-white_A700 font-inter items-center justify-end lg:mt-[16px] xl:mt-[18px] mt-[21px] 3xl:mt-[25px] lg:p-[18px] xl:p-[21px] p-[24px] 3xl:p-[28px] rounded-radius4 shadow-bs4 w-[100%]"
                  compId="599:309313"
                  comWidth={370}
                  comHeight={260}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="justify-between lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[95%]"
                    compId="859"
                    comWidth={306}
                    comHeight={32}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                      compId="I599:309313;598:308810"
                      comWidth={120}
                      comHeight={28}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Personal info.
                    </Text>
                    <Img
                      src="images/img_menu_bluegray_400.png"
                      className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                      compId="I599:309313;598:308824"
                      comWidth={32}
                      comHeight={32}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="menu"
                    />
                  </Row>
                  <Row
                    className="items-center justify-between lg:mt-[21px] xl:mt-[24px] mt-[28px] 3xl:mt-[33px] w-[94%]"
                    compId="I599:309313;598:308812"
                    comWidth={302}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                      compId="I599:309313;598:308813"
                      comWidth={71}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Full name
                    </Text>
                    <Text
                      className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                      compId="I599:309313;598:308814"
                      comWidth={39}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Avori
                    </Text>
                  </Row>
                  <Row
                    className="items-center justify-between lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[95%]"
                    compId="I599:309313;598:308815"
                    comWidth={305}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                      compId="I599:309313;598:308816"
                      comWidth={51}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Mobile
                    </Text>
                    <Text
                      className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                      compId="I599:309313;598:308817"
                      comWidth={111}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      701-565-0439
                    </Text>
                  </Row>
                  <Row
                    className="items-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[94%]"
                    compId="I599:309313;598:308818"
                    comWidth={304}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                      compId="I599:309313;598:308819"
                      comWidth={48}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      E-mail
                    </Text>
                    <Text
                      className="font-medium lg:ml-[49px] xl:ml-[56px] ml-[63px] 3xl:ml-[75px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                      compId="I599:309313;598:308820"
                      comWidth={193}
                      comHeight={24}
                      compLeft={63}
                      compRight={0}
                      compType="Text"
                    >
                      ackermanlhn@gmail.com
                    </Text>
                  </Row>
                  <Row
                    className="items-center justify-between lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[95%]"
                    compId="I599:309313;598:308821"
                    comWidth={305}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                      compId="I599:309313;598:308822"
                      comWidth={66}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Location
                    </Text>
                    <Text
                      className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                      compId="I599:309313;598:308823"
                      comWidth={117}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Hanoi, Vietnam
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Column
                className="font-inter items-center lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:mt-[55px] xl:mt-[63px] mt-[71px] 3xl:mt-[85px] w-[66%]"
                compId="863"
                comWidth={761}
                comHeight={859}
                compLeft={20}
                compRight={0}
                compType="Column"
              >
                <List
                  className="lg:gap-[14px] xl:gap-[16px] gap-[19px] 3xl:gap-[22px] grid grid-cols-2 min-h-[auto] w-[100%]"
                  compId="861"
                  comWidth={761}
                  comHeight={122}
                  compLeft={0}
                  compRight={0}
                  compType="List"
                  orientation="horizontal"
                >
                  <Row
                    className="bg-white_A700 items-center lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs4 w-[100%]"
                    compId="I599:309316;598:309256"
                    comWidth={371}
                    comHeight={122}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Button
                      className="flex lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                      compId="I599:309316;598:309246"
                      comWidth={48}
                      comHeight={48}
                      compLeft={0}
                      compRight={0}
                      compType="IconButton"
                      shape="icbRoundedBorder4"
                    >
                      <Img
                        src="images/img_buttonprimary.png"
                        className="h-[18.33px] flex items-center justify-center lg:h-[15px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px]"
                        compId="I599:309316;598:309246"
                        comWidth={48}
                        comHeight={48}
                        compLeft={0}
                        compRight={0}
                        compType="IconButton"
                        alt="ButtonPrimary"
                      />
                    </Button>
                    <Column
                      className="lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] w-[61%]"
                      compId="I599:309316;598:309248"
                      comWidth={187}
                      comHeight={58}
                      compLeft={20}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                        compId="I599:309316;598:309249"
                        comWidth={111}
                        comHeight={22}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Completed tasks
                      </Text>
                      <Text
                        className="font-bold lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_800 w-[auto]"
                        compId="I599:309316;598:309250"
                        comWidth={32}
                        comHeight={28}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        125
                      </Text>
                    </Column>
                    <Img
                      src="images/img_menu_bluegray_400.png"
                      className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                      compId="I599:309316;598:309251"
                      comWidth={32}
                      comHeight={32}
                      compLeft={20}
                      compRight={0}
                      compType="Image"
                      alt="menu One"
                    />
                  </Row>
                  <Row
                    className="bg-white_A700 items-center lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs4 w-[100%]"
                    compId="I599:309317;598:309256"
                    comWidth={371}
                    comHeight={122}
                    compLeft={19}
                    compRight={0}
                    compType="Row"
                  >
                    <Button
                      className="flex lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                      compId="I599:309317;598:309246"
                      comWidth={48}
                      comHeight={48}
                      compLeft={0}
                      compRight={0}
                      compType="IconButton"
                      shape="icbRoundedBorder4"
                    >
                      <Img
                        src="images/img_buttonprimary.png"
                        className="h-[18.33px] flex items-center justify-center lg:h-[15px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px]"
                        compId="I599:309317;598:309246"
                        comWidth={48}
                        comHeight={48}
                        compLeft={0}
                        compRight={0}
                        compType="IconButton"
                        alt="ButtonPrimary One"
                      />
                    </Button>
                    <Column
                      className="lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] w-[61%]"
                      compId="I599:309317;598:309248"
                      comWidth={187}
                      comHeight={58}
                      compLeft={20}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                        compId="I599:309317;598:309249"
                        comWidth={89}
                        comHeight={22}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Total revenue
                      </Text>
                      <Text
                        className="font-bold lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_800 w-[auto]"
                        compId="I599:309317;598:309250"
                        comWidth={72}
                        comHeight={28}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        $10,000
                      </Text>
                    </Column>
                    <Img
                      src="images/img_menu_bluegray_400.png"
                      className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                      compId="I599:309317;598:309251"
                      comWidth={32}
                      comHeight={32}
                      compLeft={20}
                      compRight={0}
                      compType="Image"
                      alt="menu Two"
                    />
                  </Row>
                </List>
                <Column
                  className="bg-white_A700 justify-end lg:mt-[16px] xl:mt-[18px] mt-[21px] 3xl:mt-[25px] lg:p-[23px] xl:p-[26px] p-[30px] 3xl:p-[36px] rounded-radius4 shadow-bs4 w-[100%]"
                  compId="599:309315"
                  comWidth={761}
                  comHeight={716}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="ml-[2px] mt-[2px] w-[99%]"
                    compId="860"
                    comWidth={697}
                    comHeight={32}
                    compLeft={2}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                      compId="I599:309315;598:308740"
                      comWidth={104}
                      comHeight={28}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      My projects
                    </Text>
                    <Img
                      src="images/img_search_bluegray_400.png"
                      className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[392px] xl:ml-[449px] ml-[505px] 3xl:ml-[606px] lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                      compId="I599:309315;598:308742"
                      comWidth={32}
                      comHeight={32}
                      compLeft={505}
                      compRight={0}
                      compType="Image"
                      alt="search"
                    />
                    <Img
                      src="images/img_menu_bluegray_400.png"
                      className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                      compId="I599:309315;598:308741"
                      comWidth={32}
                      comHeight={32}
                      compLeft={24}
                      compRight={0}
                      compType="Image"
                      alt="menu Three"
                    />
                  </Row>
                  <Row
                    className="items-center lg:ml-[17px] xl:ml-[19px] ml-[22px] 3xl:ml-[26px] mr-[auto] lg:mt-[24px] xl:mt-[27px] mt-[31px] 3xl:mt-[37px] w-[89%]"
                    compId="I599:309315;598:308744"
                    comWidth={621}
                    comHeight={24}
                    compLeft={22}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                      compId="I599:309315;598:308745"
                      comWidth={26}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      No.
                    </Text>
                    <Text
                      className="font-normal lg:ml-[53px] xl:ml-[61px] ml-[69px] 3xl:ml-[82px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                      compId="I599:309315;598:308746"
                      comWidth={62}
                      comHeight={24}
                      compLeft={69}
                      compRight={0}
                      compType="Text"
                    >
                      Projects
                    </Text>
                    <Text
                      className="font-normal lg:ml-[101px] xl:ml-[116px] ml-[131px] 3xl:ml-[157px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                      compId="I599:309315;598:308747"
                      comWidth={38}
                      comHeight={24}
                      compLeft={131}
                      compRight={0}
                      compType="Text"
                    >
                      Start
                    </Text>
                    <Text
                      className="font-normal 3xl:ml-[117px] lg:ml-[76px] xl:ml-[87px] ml-[98px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                      compId="I599:309315;598:308748"
                      comWidth={66}
                      comHeight={24}
                      compLeft={98}
                      compRight={0}
                      compType="Text"
                    >
                      Deadline
                    </Text>
                    <Text
                      className="font-normal lg:ml-[59px] xl:ml-[68px] ml-[77px] 3xl:ml-[92px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                      compId="I599:309315;598:308749"
                      comWidth={54}
                      comHeight={24}
                      compLeft={77}
                      compRight={0}
                      compType="Text"
                    >
                      Budget
                    </Text>
                  </Row>
                  <List
                    className="gap-[0] min-h-[auto] ml-[2px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[99%]"
                    compId="867"
                    comWidth={697}
                    comHeight={512}
                    compLeft={2}
                    compRight={0}
                    compType="List"
                    orientation="vertical"
                  >
                    <Row
                      className="bg-gray_50 items-center my-[0] lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px] w-[100%]"
                      compId="I599:309315;598:308752"
                      comWidth={697}
                      comHeight={64}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Text
                        className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="I599:309315;598:308753"
                        comWidth={8}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        1
                      </Text>
                      <Text
                        className="font-medium 3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] ml-[87px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="I599:309315;598:308754"
                        comWidth={143}
                        comHeight={24}
                        compLeft={87}
                        compRight={0}
                        compType="Text"
                      >
                        Branding guideline
                      </Text>
                      <Text
                        className="font-medium lg:ml-[38px] xl:ml-[44px] ml-[50px] 3xl:ml-[60px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="I599:309315;598:308755"
                        comWidth={92}
                        comHeight={24}
                        compLeft={50}
                        compRight={0}
                        compType="Text"
                      >
                        2 Sep, 2020
                      </Text>
                      <Text
                        className="font-medium lg:ml-[34px] xl:ml-[39px] ml-[44px] 3xl:ml-[52px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="I599:309315;598:308756"
                        comWidth={100}
                        comHeight={24}
                        compLeft={44}
                        compRight={0}
                        compType="Text"
                      >
                        10 Sep, 2020
                      </Text>
                      <Text
                        className="font-medium lg:ml-[33px] xl:ml-[38px] ml-[43px] 3xl:ml-[51px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="I599:309315;598:308757"
                        comWidth={52}
                        comHeight={24}
                        compLeft={43}
                        compRight={0}
                        compType="Text"
                      >
                        $1,000
                      </Text>
                    </Row>
                    <Row
                      className="bg-white_A700 items-center my-[0] lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px] w-[100%]"
                      compId="I599:309315;598:308759"
                      comWidth={697}
                      comHeight={64}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Text
                        className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="I599:309315;598:308760"
                        comWidth={10}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        2
                      </Text>
                      <Text
                        className="font-medium 3xl:ml-[102px] lg:ml-[66px] xl:ml-[75px] ml-[85px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="I599:309315;598:308761"
                        comWidth={107}
                        comHeight={24}
                        compLeft={85}
                        compRight={0}
                        compType="Text"
                      >
                        Mobile design
                      </Text>
                      <Text
                        className="font-medium 3xl:ml-[103px] lg:ml-[66px] xl:ml-[76px] ml-[86px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="I599:309315;598:308762"
                        comWidth={92}
                        comHeight={24}
                        compLeft={86}
                        compRight={0}
                        compType="Text"
                      >
                        2 Sep, 2020
                      </Text>
                      <Text
                        className="font-medium lg:ml-[34px] xl:ml-[39px] ml-[44px] 3xl:ml-[52px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="I599:309315;598:308763"
                        comWidth={100}
                        comHeight={24}
                        compLeft={44}
                        compRight={0}
                        compType="Text"
                      >
                        10 Sep, 2020
                      </Text>
                      <Text
                        className="font-medium lg:ml-[33px] xl:ml-[38px] ml-[43px] 3xl:ml-[51px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="I599:309315;598:308764"
                        comWidth={52}
                        comHeight={24}
                        compLeft={43}
                        compRight={0}
                        compType="Text"
                      >
                        $1,200
                      </Text>
                    </Row>
                    <Row
                      className="bg-gray_50 items-center my-[0] lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px] w-[100%]"
                      compId="I599:309315;598:308766"
                      comWidth={697}
                      comHeight={64}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Text
                        className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="I599:309315;598:308767"
                        comWidth={10}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        3
                      </Text>
                      <Text
                        className="font-medium 3xl:ml-[102px] lg:ml-[66px] xl:ml-[75px] ml-[85px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="I599:309315;598:308768"
                        comWidth={113}
                        comHeight={24}
                        compLeft={85}
                        compRight={0}
                        compType="Text"
                      >
                        Landing pages
                      </Text>
                      <Text
                        className="font-medium lg:ml-[62px] xl:ml-[71px] ml-[80px] 3xl:ml-[96px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="I599:309315;598:308769"
                        comWidth={92}
                        comHeight={24}
                        compLeft={80}
                        compRight={0}
                        compType="Text"
                      >
                        2 Sep, 2020
                      </Text>
                      <Text
                        className="font-medium lg:ml-[34px] xl:ml-[39px] ml-[44px] 3xl:ml-[52px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="I599:309315;598:308770"
                        comWidth={100}
                        comHeight={24}
                        compLeft={44}
                        compRight={0}
                        compType="Text"
                      >
                        10 Sep, 2020
                      </Text>
                      <Text
                        className="font-medium lg:ml-[33px] xl:ml-[38px] ml-[43px] 3xl:ml-[51px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="I599:309315;598:308771"
                        comWidth={52}
                        comHeight={24}
                        compLeft={43}
                        compRight={0}
                        compType="Text"
                      >
                        $1,800
                      </Text>
                    </Row>
                    <Row
                      className="bg-white_A700 items-center my-[0] lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px] w-[100%]"
                      compId="I599:309315;598:308773"
                      comWidth={697}
                      comHeight={64}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Text
                        className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="I599:309315;598:308774"
                        comWidth={10}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        2
                      </Text>
                      <Text
                        className="font-medium 3xl:ml-[102px] lg:ml-[66px] xl:ml-[75px] ml-[85px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="I599:309315;598:308775"
                        comWidth={107}
                        comHeight={24}
                        compLeft={85}
                        compRight={0}
                        compType="Text"
                      >
                        Mobile design
                      </Text>
                      <Text
                        className="font-medium 3xl:ml-[103px] lg:ml-[66px] xl:ml-[76px] ml-[86px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="I599:309315;598:308776"
                        comWidth={92}
                        comHeight={24}
                        compLeft={86}
                        compRight={0}
                        compType="Text"
                      >
                        2 Sep, 2020
                      </Text>
                      <Text
                        className="font-medium lg:ml-[34px] xl:ml-[39px] ml-[44px] 3xl:ml-[52px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="I599:309315;598:308777"
                        comWidth={100}
                        comHeight={24}
                        compLeft={44}
                        compRight={0}
                        compType="Text"
                      >
                        10 Sep, 2020
                      </Text>
                      <Text
                        className="font-medium lg:ml-[33px] xl:ml-[38px] ml-[43px] 3xl:ml-[51px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="I599:309315;598:308778"
                        comWidth={52}
                        comHeight={24}
                        compLeft={43}
                        compRight={0}
                        compType="Text"
                      >
                        $1,200
                      </Text>
                    </Row>
                    <Row
                      className="bg-gray_50 items-center my-[0] lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px] w-[100%]"
                      compId="I599:309315;598:308780"
                      comWidth={697}
                      comHeight={64}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Text
                        className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="I599:309315;598:308781"
                        comWidth={10}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        3
                      </Text>
                      <Text
                        className="font-medium 3xl:ml-[102px] lg:ml-[66px] xl:ml-[75px] ml-[85px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="I599:309315;598:308782"
                        comWidth={113}
                        comHeight={24}
                        compLeft={85}
                        compRight={0}
                        compType="Text"
                      >
                        Landing pages
                      </Text>
                      <Text
                        className="font-medium lg:ml-[62px] xl:ml-[71px] ml-[80px] 3xl:ml-[96px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="I599:309315;598:308783"
                        comWidth={92}
                        comHeight={24}
                        compLeft={80}
                        compRight={0}
                        compType="Text"
                      >
                        2 Sep, 2020
                      </Text>
                      <Text
                        className="font-medium lg:ml-[34px] xl:ml-[39px] ml-[44px] 3xl:ml-[52px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="I599:309315;598:308784"
                        comWidth={100}
                        comHeight={24}
                        compLeft={44}
                        compRight={0}
                        compType="Text"
                      >
                        10 Sep, 2020
                      </Text>
                      <Text
                        className="font-medium lg:ml-[33px] xl:ml-[38px] ml-[43px] 3xl:ml-[51px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="I599:309315;598:308785"
                        comWidth={52}
                        comHeight={24}
                        compLeft={43}
                        compRight={0}
                        compType="Text"
                      >
                        $1,800
                      </Text>
                    </Row>
                    <Row
                      className="bg-white_A700 items-center my-[0] lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px] w-[100%]"
                      compId="I599:309315;598:308787"
                      comWidth={697}
                      comHeight={64}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Text
                        className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="I599:309315;598:308788"
                        comWidth={10}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        2
                      </Text>
                      <Text
                        className="font-medium 3xl:ml-[102px] lg:ml-[66px] xl:ml-[75px] ml-[85px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="I599:309315;598:308789"
                        comWidth={107}
                        comHeight={24}
                        compLeft={85}
                        compRight={0}
                        compType="Text"
                      >
                        Mobile design
                      </Text>
                      <Text
                        className="font-medium 3xl:ml-[103px] lg:ml-[66px] xl:ml-[76px] ml-[86px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="I599:309315;598:308790"
                        comWidth={92}
                        comHeight={24}
                        compLeft={86}
                        compRight={0}
                        compType="Text"
                      >
                        2 Sep, 2020
                      </Text>
                      <Text
                        className="font-medium lg:ml-[34px] xl:ml-[39px] ml-[44px] 3xl:ml-[52px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="I599:309315;598:308791"
                        comWidth={100}
                        comHeight={24}
                        compLeft={44}
                        compRight={0}
                        compType="Text"
                      >
                        10 Sep, 2020
                      </Text>
                      <Text
                        className="font-medium lg:ml-[33px] xl:ml-[38px] ml-[43px] 3xl:ml-[51px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="I599:309315;598:308792"
                        comWidth={52}
                        comHeight={24}
                        compLeft={43}
                        compRight={0}
                        compType="Text"
                      >
                        $1,200
                      </Text>
                    </Row>
                    <Row
                      className="bg-gray_50 items-center my-[0] lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px] w-[100%]"
                      compId="I599:309315;598:308794"
                      comWidth={697}
                      comHeight={64}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Text
                        className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="I599:309315;598:308795"
                        comWidth={10}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        3
                      </Text>
                      <Text
                        className="font-medium 3xl:ml-[102px] lg:ml-[66px] xl:ml-[75px] ml-[85px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="I599:309315;598:308796"
                        comWidth={113}
                        comHeight={24}
                        compLeft={85}
                        compRight={0}
                        compType="Text"
                      >
                        Landing pages
                      </Text>
                      <Text
                        className="font-medium lg:ml-[62px] xl:ml-[71px] ml-[80px] 3xl:ml-[96px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="I599:309315;598:308797"
                        comWidth={92}
                        comHeight={24}
                        compLeft={80}
                        compRight={0}
                        compType="Text"
                      >
                        2 Sep, 2020
                      </Text>
                      <Text
                        className="font-medium lg:ml-[34px] xl:ml-[39px] ml-[44px] 3xl:ml-[52px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="I599:309315;598:308798"
                        comWidth={100}
                        comHeight={24}
                        compLeft={44}
                        compRight={0}
                        compType="Text"
                      >
                        10 Sep, 2020
                      </Text>
                      <Text
                        className="font-medium lg:ml-[33px] xl:ml-[38px] ml-[43px] 3xl:ml-[51px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="I599:309315;598:308799"
                        comWidth={52}
                        comHeight={24}
                        compLeft={43}
                        compRight={0}
                        compType="Text"
                      >
                        $1,800
                      </Text>
                    </Row>
                    <Row
                      className="bg-white_A700 items-center my-[0] lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px] w-[100%]"
                      compId="I599:309315;598:308801"
                      comWidth={697}
                      comHeight={64}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Text
                        className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="I599:309315;598:308802"
                        comWidth={10}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        2
                      </Text>
                      <Text
                        className="font-medium 3xl:ml-[102px] lg:ml-[66px] xl:ml-[75px] ml-[85px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="I599:309315;598:308803"
                        comWidth={107}
                        comHeight={24}
                        compLeft={85}
                        compRight={0}
                        compType="Text"
                      >
                        Mobile design
                      </Text>
                      <Text
                        className="font-medium 3xl:ml-[103px] lg:ml-[66px] xl:ml-[76px] ml-[86px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="I599:309315;598:308804"
                        comWidth={92}
                        comHeight={24}
                        compLeft={86}
                        compRight={0}
                        compType="Text"
                      >
                        2 Sep, 2020
                      </Text>
                      <Text
                        className="font-medium lg:ml-[34px] xl:ml-[39px] ml-[44px] 3xl:ml-[52px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="I599:309315;598:308805"
                        comWidth={100}
                        comHeight={24}
                        compLeft={44}
                        compRight={0}
                        compType="Text"
                      >
                        10 Sep, 2020
                      </Text>
                      <Text
                        className="font-medium lg:ml-[33px] xl:ml-[38px] ml-[43px] 3xl:ml-[51px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="I599:309315;598:308806"
                        comWidth={52}
                        comHeight={24}
                        compLeft={43}
                        compRight={0}
                        compType="Text"
                      >
                        $1,200
                      </Text>
                    </Row>
                  </List>
                  <Img
                    src="images/img_brightness.png"
                    className="lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] lg:ml-[264px] xl:ml-[302px] ml-[340px] 3xl:ml-[408px] lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] lg:w-[17px] xl:w-[19px] w-[22px] 3xl:w-[26px]"
                    compId="I599:309315;598:308808;5:198"
                    comWidth={22}
                    comHeight={22}
                    compLeft={340}
                    compRight={0}
                    compType="Image"
                    alt="brightness"
                  />
                </Column>
              </Column>
            </Row>
          </Column>
          <Line
            className="absolute bg-indigo_50 lg:h-[537px] xl:h-[614px] h-[690px] 2xl:h-[691px] 3xl:h-[829px] left-[15%] top-[6%] w-[1px]"
            compId="599:309319"
            comWidth={1}
            comHeight={690}
            compLeft={219}
            compRight={0}
            compType="Line"
          />
          <aside className="absolute bottom-[0] items-center left-[0] w-[17%]">
            <Column
              className=""
              compId="574"
              comWidth={241}
              comHeight={978}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Column
                className="bg-white_A700 justify-center lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] w-[100%]"
                compId="599:309320"
                comWidth={241}
                comHeight={978}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="items-center lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[62%]"
                  compId="I599:309320;41:948"
                  comWidth={109}
                  comHeight={22}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Img
                    src="images/img_grid.png"
                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                    compId="I599:309320;531:321438"
                    comWidth={20}
                    comHeight={20}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="grid"
                  />
                  <Text
                    className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                    compId="I599:309320;41:950"
                    comWidth={73}
                    comHeight={22}
                    compLeft={16}
                    compRight={0}
                    compType="Text"
                  >
                    Dashboard
                  </Text>
                </Row>
                <Row
                  className="items-center lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[56%]"
                  compId="I599:309320;41:951"
                  comWidth={100}
                  comHeight={22}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Img
                    src="images/img_user_bluegray_400.png"
                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                    compId="I599:309320;531:322607"
                    comWidth={20}
                    comHeight={20}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="user One"
                  />
                  <Text
                    className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                    compId="I599:309320;41:953"
                    comWidth={64}
                    comHeight={22}
                    compLeft={16}
                    compRight={0}
                    compType="Text"
                  >
                    Customer
                  </Text>
                </Row>
                <Row
                  className="lg:mt-[24px] xl:mt-[27px] mt-[31px] 3xl:mt-[37px] w-[88%]"
                  compId="I599:309320;43809:15240"
                  comWidth={155}
                  comHeight={24}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Img
                    src="images/img_icon.png"
                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] mt-[1px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                    compId="I599:309320;41:955"
                    comWidth={20}
                    comHeight={20}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Icon"
                  />
                  <Text
                    className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] mt-[1px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                    compId="I599:309320;41:956"
                    comWidth={61}
                    comHeight={22}
                    compLeft={16}
                    compRight={0}
                    compType="Text"
                  >
                    Message
                  </Text>
                  <Text
                    className="bg-red_600 flex font-bold items-center justify-center lg:ml-[26px] xl:ml-[30px] ml-[34px] 3xl:ml-[40px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius50 xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[24px]"
                    compId="I599:309320;235:259292"
                    comWidth={24}
                    comHeight={24}
                    compLeft={34}
                    compRight={0}
                    compType="Text"
                  >
                    3
                  </Text>
                </Row>
                <Row
                  className="items-center ml-[1px] lg:mt-[24px] xl:mt-[27px] mt-[31px] 3xl:mt-[37px] w-[32%]"
                  compId="I599:309320;41:957"
                  comWidth={57}
                  comHeight={22}
                  compLeft={1}
                  compRight={0}
                  compType="Row"
                >
                  <Img
                    src="images/img_folder_bluegray_400.png"
                    className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] w-[32%]"
                    compId="I599:309320;533:294113;531:320466"
                    comWidth={18}
                    comHeight={16}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="folder"
                  />
                  <Text
                    className="flex font-medium items-center lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                    compId="I599:309320;41:959"
                    comWidth={22}
                    comHeight={22}
                    compLeft={16}
                    compRight={0}
                    compType="Text"
                  >
                    File
                  </Text>
                </Row>
                <Row
                  className="lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[54%]"
                  compId="I599:309320;41:960"
                  comWidth={95}
                  comHeight={22}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Img
                    src="images/img_settings.png"
                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                    compId="I599:309320;41:961"
                    comWidth={20}
                    comHeight={20}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="settings"
                  />
                  <Text
                    className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                    compId="I599:309320;41:962"
                    comWidth={59}
                    comHeight={22}
                    compLeft={16}
                    compRight={0}
                    compType="Text"
                  >
                    Calender
                  </Text>
                </Row>
                <Row
                  className="lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[40%]"
                  compId="I599:309320;41:963"
                  comWidth={70}
                  comHeight={22}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Img
                    src="images/img_cart.png"
                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                    compId="I599:309320;41:964"
                    comWidth={20}
                    comHeight={20}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="cart"
                  />
                  <Text
                    className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                    compId="I599:309320;41:965"
                    comWidth={34}
                    comHeight={22}
                    compLeft={16}
                    compRight={0}
                    compType="Text"
                  >
                    Shop
                  </Text>
                </Row>
                <Row
                  className="items-center ml-[1px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[35%]"
                  compId="I599:309320;41:966"
                  comWidth={62}
                  comHeight={22}
                  compLeft={1}
                  compRight={0}
                  compType="Row"
                >
                  <Img
                    src="images/img_vector_bluegray_400.png"
                    className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] w-[26%]"
                    compId="I599:309320;614:13885;531:320955"
                    comWidth={16}
                    comHeight={18}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Vector One"
                  />
                  <Text
                    className="font-medium lg:ml-[13px] xl:ml-[15px] ml-[17px] 3xl:ml-[20px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                    compId="I599:309320;41:968"
                    comWidth={28}
                    comHeight={22}
                    compLeft={17}
                    compRight={0}
                    compType="Text"
                  >
                    Cart
                  </Text>
                </Row>
                <Radio
                  value="Settings3"
                  className="font-medium lg:mb-[393px] xl:mb-[450px] mb-[506px] 3xl:mb-[607px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400"
                  inputClassName="h-[20px] mr-[5px] w-[20px]"
                  compId="I599:309320;531:316827"
                  comWidth={91}
                  comHeight={22}
                  compLeft={0}
                  compRight={0}
                  compType="Radio"
                  checked={false}
                  name="Settings One"
                  label="Settings3"
                  variant="illBluegray400"
                ></Radio>
              </Column>
            </Column>
          </aside>
          <Line
            className="absolute bg-indigo_50 lg:h-[584px] xl:h-[668px] h-[750px] 2xl:h-[751px] 3xl:h-[901px] left-[17%] top-[0] w-[1px]"
            compId="599:309321"
            comWidth={1}
            comHeight={750}
            compLeft={241}
            compRight={0}
            compType="Line"
          />
        </Stack>
      </Column>
    </>
  );
};

export default FramePage;
