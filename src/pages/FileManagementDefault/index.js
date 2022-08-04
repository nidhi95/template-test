import React from "react";

import {
  Stack,
  Column,
  Row,
  Img,
  Text,
  Input,
  List,
  Button,
  Grid,
  Radio,
  Line,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const FileManagementDefaultPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Stack
        className="bg-white_A700 font-inter 3xl:h-[1141px] lg:h-[739px] xl:h-[846px] h-[950px] 2xl:h-[951px] mx-[auto] w-[100%]"
        compId="596:307101"
        comWidth={1440}
        comHeight={950}
        compLeft={0}
        compRight={0}
        compType="Stack"
      >
        <Column
          className="absolute items-end w-[100%]"
          compId="1403"
          comWidth={1440}
          comHeight={950}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Row
            className="bg-white_A700 items-center justify-end p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] w-[100%]"
            compId="43812:48102"
            comWidth={1440}
            comHeight={60}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Img
              src="images/img_microphone.png"
              className="lg:h-[22px] xl:h-[25px] h-[28px] 2xl:h-[29px] 3xl:h-[34px] w-[1%]"
              compId="I43812:48102;43807:13258"
              comWidth={21}
              comHeight={28}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="microphone"
            />
            <Text
              className="font-medium lg:ml-[169px] xl:ml-[193px] ml-[218px] 3xl:ml-[261px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
              compId="I43812:48102;234:259667"
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
              compId="I43812:48102;234:259514"
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
                  compId="I43812:48102;234:259514;234:259505"
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
              compId="I43812:48102;531:315836;5:32"
              comWidth={20}
              comHeight={22}
              compLeft={136}
              compRight={0}
              compType="Image"
              alt="Vector"
            />
            <Stack
              className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] w-[9%]"
              compId="1402"
              comWidth={126}
              comHeight={24}
              compLeft={29}
              compRight={0}
              compType="Stack"
            >
              <Img
                src="images/img_user_bluegray_900.png"
                className="absolute lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] inset-y-[0] left-[0] my-[auto] w-[14%]"
                compId="I43812:48102;37:1285;37:1283"
                comWidth={18}
                comHeight={20}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="user"
              />
              <Row
                className="absolute right-[0] w-[90%]"
                compId="743"
                comWidth={113}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <div
                  className="bg-red_600 3xl:h-[10px] lg:h-[7px] h-[8px] 2xl:h-[9px] mt-[1px] outline outline-[2px] outline-white_A700 rounded-radius50 lg:w-[6px] xl:w-[7px] w-[8px] 3xl:w-[9px]"
                  compId="I43812:48102;530:301660"
                  comWidth={8}
                  comHeight={8}
                  compLeft={0}
                  compRight={0}
                  compType="View"
                ></div>
                <Text
                  className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_500 w-[auto]"
                  compId="I43812:48102;37:1272"
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
              compId="I43812:48102;483:292004;43812:47214"
              comWidth={40}
              comHeight={40}
              compLeft={13}
              compRight={13}
              compType="CircleImage"
              alt="SherlockToyFa"
            />
          </Row>
          <Column
            className="bg-gray_50 font-poppins justify-end lg:p-[18px] xl:p-[21px] p-[24px] 3xl:p-[28px] w-[83%]"
            compId="596:307102"
            comWidth={1199}
            comHeight={890}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-medium lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]"
              compId="596:307103"
              comWidth={173}
              comHeight={32}
              compLeft={0}
              compRight={0}
              compType="Text"
            >
              File Management
            </Text>
            <Row
              className="font-inter items-center justify-between lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]"
              compId="1422"
              comWidth={1151}
              comHeight={770}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Stack
                className="lg:h-[599px] xl:h-[685px] h-[770px] 2xl:h-[771px] 3xl:h-[925px] w-[24%]"
                compId="1399"
                comWidth={273}
                comHeight={770}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Column
                  className="absolute items-center w-[100%]"
                  compId="1404"
                  comWidth={273}
                  comHeight={770}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="bg-white_A700 items-center lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs1 w-[100%]"
                    compId="596:307106"
                    comWidth={273}
                    comHeight={416}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Row
                      className="font-inter justify-end pl-[1px] w-[97%]"
                      compId="I596:307106;596:306813"
                      comWidth={202}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Img
                        src="images/img_folder_indigo_401.png"
                        className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] mt-[3px] w-[11%]"
                        compId="I596:307106;596:306815;40:1382"
                        comWidth={22}
                        comHeight={18}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="folder"
                      />
                      <Text
                        className="font-medium lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                        compId="I596:307106;596:306816"
                        comWidth={67}
                        comHeight={24}
                        compLeft={14}
                        compRight={0}
                        compType="Text"
                      >
                        Main File
                      </Text>
                      <Img
                        src="images/img_vector_bluegray_400_5X9.png"
                        className="lg:h-[4px] h-[5px] 2xl:h-[6px] 3xl:h-[7px] 3xl:ml-[105px] lg:ml-[68px] xl:ml-[78px] ml-[88px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] rounded-radius03 w-[4%]"
                        compId="I596:307106;596:306817;30197:37"
                        comWidth={9}
                        comHeight={5}
                        compLeft={88}
                        compRight={0}
                        compType="Image"
                        alt="Vector One"
                      />
                    </Row>
                    <Text
                      className="font-normal font-poppins lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                      compId="I596:307106;596:306823"
                      comWidth={120}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Product Design
                    </Text>
                    <Text
                      className="font-normal font-poppins lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                      compId="I596:307106;596:306825"
                      comWidth={83}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Outsource
                    </Text>
                    <Text
                      className="font-normal font-poppins lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                      compId="I596:307106;596:306824"
                      comWidth={72}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Graphics
                    </Text>
                    <Text
                      className="font-normal font-poppins lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                      compId="I596:307106;596:306826"
                      comWidth={104}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Empty states
                    </Text>
                    <List
                      className="font-inter gap-[0] min-h-[auto] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[97%]"
                      compId="1427"
                      comWidth={202}
                      comHeight={72}
                      compLeft={0}
                      compRight={0}
                      compType="List"
                      orientation="vertical"
                    >
                      <Row
                        className="justify-end xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] pl-[1px] w-[100%]"
                        compId="I596:307106;596:306818"
                        comWidth={202}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Img
                          src="images/img_folder_indigo_401.png"
                          className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] mt-[3px] w-[11%]"
                          compId="I596:307106;596:306820;40:1382"
                          comWidth={22}
                          comHeight={18}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="folder One"
                        />
                        <Text
                          className="font-medium lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                          compId="I596:307106;596:306821"
                          comWidth={80}
                          comHeight={24}
                          compLeft={15}
                          compRight={0}
                          compType="Text"
                        >
                          Private file
                        </Text>
                        <Img
                          src="images/img_vector_bluegray_400_5X9.png"
                          className="lg:h-[4px] h-[5px] 2xl:h-[6px] 3xl:h-[7px] lg:ml-[58px] xl:ml-[66px] ml-[75px] 3xl:ml-[90px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] rounded-radius03 w-[4%]"
                          compId="I596:307106;596:306822;30197:37"
                          comWidth={9}
                          comHeight={5}
                          compLeft={75}
                          compRight={0}
                          compType="Image"
                          alt="Vector Two"
                        />
                      </Row>
                      <Row
                        className="justify-end xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] pl-[1px] w-[100%]"
                        compId="I596:307106;596:306827"
                        comWidth={202}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Img
                          src="images/img_folder_indigo_401.png"
                          className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] mt-[3px] w-[11%]"
                          compId="I596:307106;596:306829;40:1382"
                          comWidth={22}
                          comHeight={18}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="folder Two"
                        />
                        <Text
                          className="font-medium lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                          compId="I596:307106;596:306830"
                          comWidth={72}
                          comHeight={24}
                          compLeft={14}
                          compRight={0}
                          compType="Text"
                        >
                          My folder
                        </Text>
                        <Img
                          src="images/img_vector_bluegray_400_5X9.png"
                          className="lg:h-[4px] h-[5px] 2xl:h-[6px] 3xl:h-[7px] lg:ml-[64px] xl:ml-[73px] ml-[83px] 3xl:ml-[99px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] rounded-radius03 w-[4%]"
                          compId="I596:307106;596:306831;30197:37"
                          comWidth={9}
                          comHeight={5}
                          compLeft={83}
                          compRight={0}
                          compType="Image"
                          alt="Vector Three"
                        />
                      </Row>
                    </List>
                    <Input
                      className="font-bold font-poppins p-[0] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-deep_orange_300 text-deep_orange_300 w-[100%]"
                      wrapClassName="3xl:mt-[28px] flex lg:mt-[18px] mt-[24px] w-[100%] xl:mt-[21px]"
                      compId="I596:307106;596:306832"
                      comWidth={0}
                      comHeight={48}
                      compLeft={0}
                      compRight={0}
                      compType="EditText"
                      name="Button"
                      placeholder="Add new folder"
                      suffix={
                        <Img
                          src="images/img_plus.png"
                          className="w-[20px] h-[20px] ml-[35px] mr-[16px] lg:w-[15px] lg:h-[16px] lg:ml-[27px] lg:mr-[12px] xl:w-[17px] xl:h-[18px] xl:ml-[31px] xl:mr-[14px] 2xl:h-[21px] 3xl:w-[24px] 3xl:h-[25px] 3xl:ml-[42px] 3xl:mr-[19px] my-[auto]"
                          compId="I596:307106;596:306832;596:302874"
                          comWidth={20}
                          comHeight={20}
                          compLeft={35}
                          compRight={16}
                          compType="Image"
                          alt="plus"
                        />
                      }
                      shape="CircleBorder24"
                      size="sm"
                      variant="FillRed55"
                    ></Input>
                  </Column>
                  <Column
                    className="bg-white_A700 lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:pr-[12px] xl:pr-[14px] pr-[16px] 3xl:pr-[19px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius4 shadow-bs1 w-[100%]"
                    compId="596:307107"
                    comWidth={273}
                    comHeight={334}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Img
                      src="images/img_plus_bluegray_400.png"
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[181px] xl:ml-[207px] ml-[233px] 3xl:ml-[279px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      compId="I596:307107;596:306904"
                      comWidth={24}
                      comHeight={24}
                      compLeft={233}
                      compRight={0}
                      compType="Image"
                      alt="plus"
                    />
                    <Stack
                      className="lg:h-[150px] xl:h-[171px] h-[192px] 2xl:h-[193px] 3xl:h-[231px] lg:mr-[5px] xl:mr-[6px] mr-[7px] 3xl:mr-[8px] mt-[1px] w-[97%]"
                      compId="1400"
                      comWidth={250}
                      comHeight={192}
                      compLeft={0}
                      compRight={7}
                      compType="Stack"
                    >
                      <Stack
                        className="absolute xl:h-[113px] h-[126px] 2xl:h-[127px] 3xl:h-[152px] lg:h-[98px] inset-x-[0] mx-[auto] top-[0] w-[97%]"
                        compId="I596:307107;596:306882"
                        comWidth={243}
                        comHeight={126}
                        compLeft={0}
                        compRight={0}
                        compType="Stack"
                      >
                        <div
                          className="absolute bottom-[0] overflow-x-auto w-[100%]"
                          compId="1429"
                          comWidth={243}
                          comHeight={69}
                          compLeft={0}
                          compRight={0}
                          compType="HorizontalScroll"
                        >
                          <Stack
                            className="lg:h-[54px] xl:h-[62px] h-[69px] 2xl:h-[70px] 3xl:h-[83px] w-[100%]"
                            compId="I596:307107;596:306883"
                            comWidth={243}
                            comHeight={69}
                            compLeft={0}
                            compRight={0}
                            compType="Stack"
                          >
                            <Img
                              src="images/img_shadow_69X288.png"
                              className="absolute lg:h-[54px] xl:h-[62px] h-[69px] 2xl:h-[70px] 3xl:h-[83px] left-[0] w-[100%]"
                              compId="I596:307107;596:306884"
                              comWidth={288}
                              comHeight={69}
                              compLeft={0}
                              compRight={0}
                              compType="Image"
                              alt="shadow"
                            />
                            <Img
                              src="images/img_shadow_69X288.png"
                              className="absolute lg:h-[37px] xl:h-[42px] h-[47px] 2xl:h-[48px] 3xl:h-[57px] right-[18%] top-[0] w-[53%]"
                              compId="I596:307107;596:306886"
                              comWidth={128}
                              comHeight={47}
                              compLeft={0}
                              compRight={43}
                              compType="Image"
                              alt="shadow One"
                            />
                          </Stack>
                        </div>
                        <Column
                          className="absolute bg-cover bg-repeat items-center right-[24%] top-[0] w-[40%]"
                          compId="I596:307107;596:306887"
                          style={{
                            backgroundImage: "url('images/img_base_81X97.png')",
                          }}
                          comWidth={97}
                          comHeight={81}
                          compLeft={0}
                          compRight={58}
                          compType="Column"
                        >
                          <Stack
                            className="bg-deep_orange_300 lg:h-[63px] xl:h-[73px] h-[81px] 2xl:h-[82px] 3xl:h-[98px] rounded-radius200 w-[100%]"
                            compId="550"
                            comWidth={97}
                            comHeight={81}
                            compLeft={0}
                            compRight={0}
                            compType="Stack"
                          >
                            <Column
                              className="absolute bg-cover bg-repeat h-[max-content] inset-[0] items-center justify-center m-[auto] w-[90%]"
                              compId="I596:307107;596:306892"
                              style={{
                                backgroundImage: "url('images/img_paper.png')",
                              }}
                              comWidth={87}
                              comHeight={65}
                              compLeft={4}
                              compRight={4}
                              compType="Column"
                            >
                              <div
                                className="bg-gray_100 lg:h-[51px] xl:h-[58px] h-[65px] 2xl:h-[66px] 3xl:h-[79px] rounded-radius200 w-[100%]"
                                compId="I596:307107;596:306896"
                                comWidth={87}
                                comHeight={65}
                                compLeft={0}
                                compRight={0}
                                compType="View"
                              ></div>
                            </Column>
                            <Column
                              className="absolute bg-cover bg-repeat items-center w-[100%]"
                              compId="I596:307107;596:306897"
                              style={{
                                backgroundImage:
                                  "url('images/img_specular_81X97.png')",
                              }}
                              comWidth={97}
                              comHeight={81}
                              compLeft={0}
                              compRight={0}
                              compType="Column"
                            >
                              <Stack
                                className="bg-cover bg-repeat lg:h-[63px] xl:h-[73px] h-[81px] 2xl:h-[82px] 3xl:h-[98px] w-[100%]"
                                compId="551"
                                style={{
                                  backgroundImage:
                                    "url('images/img_specular_81X97.png')",
                                }}
                                comWidth={97}
                                comHeight={81}
                                compLeft={0}
                                compRight={0}
                                compType="Stack"
                              >
                                <Img
                                  src="images/img_specular_81X97.png"
                                  className="absolute lg:h-[63px] xl:h-[73px] h-[81px] 2xl:h-[82px] 3xl:h-[98px] w-[100%]"
                                  compId="I596:307107;596:306900"
                                  comWidth={97}
                                  comHeight={81}
                                  compLeft={0}
                                  compRight={0}
                                  compType="Image"
                                  alt="specular"
                                />
                              </Stack>
                            </Column>
                          </Stack>
                        </Column>
                      </Stack>
                      <Column
                        className="absolute bottom-[0] items-center right-[0] w-[90%]"
                        compId="I596:307107;596:306901"
                        comWidth={226}
                        comHeight={76}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-bold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                          compId="I596:307107;596:306902"
                          comWidth={140}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          Upgrade Features
                        </Text>
                        <Text
                          className="font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 text-center w-[100%]"
                          compId="I596:307107;596:306903"
                          comWidth={226}
                          comHeight={44}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          Upgrade account to access multiple features
                        </Text>
                      </Column>
                    </Stack>
                    <Row
                      className="justify-center lg:mb-[12px] xl:mb-[14px] mb-[16px] 3xl:mb-[19px] lg:ml-[58px] xl:ml-[66px] ml-[75px] 3xl:ml-[90px] lg:mt-[34px] xl:mt-[39px] mt-[44px] 3xl:mt-[52px] w-[49%]"
                      compId="I596:307107;596:306905"
                      comWidth={126}
                      comHeight={24}
                      compLeft={75}
                      compRight={0}
                      compType="Row"
                    >
                      <Text
                        className="font-bold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-deep_orange_300 w-[auto]"
                        compId="I596:307107;596:306906"
                        comWidth={92}
                        comHeight={22}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Upgrade now
                      </Text>
                      <Img
                        src="images/img_forward.png"
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        compId="I596:307107;596:306907"
                        comWidth={24}
                        comHeight={24}
                        compLeft={10}
                        compRight={0}
                        compType="Image"
                        alt="forward"
                      />
                    </Row>
                  </Column>
                </Column>
                <Column
                  className="absolute bg-cover bg-repeat bottom-[35%] justify-end lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px] right-[12%] shadow-bs3 w-[63%]"
                  compId="596:307109"
                  style={{ backgroundImage: "url('images/img_popup.png')" }}
                  comWidth={172}
                  comHeight={106}
                  compLeft={0}
                  compRight={32}
                  compType="Column"
                >
                  <Row
                    className="items-center ml-[2px] mr-[auto] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] w-[76%]"
                    compId="I596:307109;596:306513"
                    comWidth={100}
                    comHeight={22}
                    compLeft={2}
                    compRight={0}
                    compType="Row"
                  >
                    <Img
                      src="images/img_folder_bluegray_900.png"
                      className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                      compId="I596:307109;596:306514"
                      comWidth={20}
                      comHeight={20}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="folder Three"
                    />
                    <Text
                      className="font-medium lg:ml-[10px] xl:ml-[11px] ml-[13px] 3xl:ml-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]"
                      compId="I596:307109;596:306515"
                      comWidth={67}
                      comHeight={22}
                      compLeft={13}
                      compRight={0}
                      compType="Text"
                    >
                      Create file
                    </Text>
                  </Row>
                  <Row
                    className="items-center justify-center lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[88%]"
                    compId="I596:307109;596:306516"
                    comWidth={116}
                    comHeight={22}
                    compLeft={5}
                    compRight={0}
                    compType="Row"
                  >
                    <Img
                      src="images/img_file_bluegray_900.png"
                      className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] w-[13%]"
                      compId="I596:307109;596:306517;1:1786"
                      comWidth={15}
                      comHeight={18}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="file"
                    />
                    <Text
                      className="font-medium lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]"
                      compId="I596:307109;596:306518"
                      comWidth={86}
                      comHeight={22}
                      compLeft={15}
                      compRight={0}
                      compType="Text"
                    >
                      Create folder
                    </Text>
                  </Row>
                </Column>
              </Stack>
              <Stack
                className="bg-white_A700 lg:h-[599px] xl:h-[685px] h-[770px] 2xl:h-[771px] 3xl:h-[925px] lg:px-[20px] xl:px-[23px] px-[26px] 3xl:px-[31px] rounded-radius4 shadow-bs1 w-[49%]"
                compId="596:307104"
                comWidth={565}
                comHeight={770}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Column
                  className="absolute h-[max-content] inset-[0] justify-center m-[auto] w-[89%]"
                  compId="I596:307104;596:306594"
                  comWidth={502}
                  comHeight={702}
                  compLeft={5}
                  compRight={5}
                  compType="Column"
                >
                  <Row
                    className="items-center w-[100%]"
                    compId="1416"
                    comWidth={501}
                    comHeight={40}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                      compId="I596:307104;596:306597"
                      comWidth={78}
                      comHeight={28}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Main File
                    </Text>
                    <Button
                      className="flex lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:ml-[254px] xl:ml-[290px] ml-[327px] 3xl:ml-[392px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                      compId="I596:307104;596:306599"
                      comWidth={40}
                      comHeight={40}
                      compLeft={327}
                      compRight={0}
                      compType="IconButton"
                      size="lgIcn"
                    >
                      <Img
                        src="images/img_search_bluegray_900.png"
                        className="h-[20px] flex items-center justify-center lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                        compId="I596:307104;596:306599"
                        comWidth={40}
                        comHeight={40}
                        compLeft={327}
                        compRight={0}
                        compType="IconButton"
                        alt="search"
                      />
                    </Button>
                    <Button
                      className="flex lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                      compId="I596:307104;596:306601"
                      comWidth={40}
                      comHeight={40}
                      compLeft={16}
                      compRight={0}
                      compType="IconButton"
                      size="lgIcn"
                    >
                      <Img
                        src="images/img_overflowmenu.png"
                        className="h-[20px] flex items-center justify-center lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                        compId="I596:307104;596:306601"
                        comWidth={40}
                        comHeight={40}
                        compLeft={16}
                        compRight={0}
                        compType="IconButton"
                        alt="overflowmenu"
                      />
                    </Button>
                  </Row>
                  <Grid
                    className="lg:gap-[15px] xl:gap-[17px] gap-[20px] 3xl:gap-[24px] grid grid-cols-2 lg:mt-[20px] xl:mt-[23px] mt-[26px] 3xl:mt-[31px] w-[100%]"
                    compId="1426"
                    comWidth={502}
                    comHeight={312}
                    compLeft={0}
                    compRight={0}
                    compType="Grid"
                  >
                    <Column
                      className="bg-white_A700 border border-indigo_50 border-solid items-center lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px] rounded-radius4 w-[100%]"
                      compId="I596:307104;596:306605"
                      comWidth={241}
                      comHeight={146}
                      compLeft={0}
                      compRight={261}
                      compType="Column"
                    >
                      <Row
                        className="items-center justify-between w-[100%]"
                        compId="1405"
                        comWidth={200}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Img
                          src="images/img_folder_indigo_401_18X22.png"
                          className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] w-[11%]"
                          compId="I596:307104;596:306605;596:305919;480:291756"
                          comWidth={22}
                          comHeight={18}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="folder Four"
                        />
                        <Img
                          src="images/img_menu_bluegray_400.png"
                          className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                          compId="I596:307104;596:306605;596:305923"
                          comWidth={24}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="menu"
                        />
                      </Row>
                      <Row
                        className="items-end lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]"
                        compId="I596:307104;596:306605;596:305928"
                        comWidth={201}
                        comHeight={50}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Column
                          className="w-[86%]"
                          compId="I596:307104;596:306605;596:305920"
                          comWidth={173}
                          comHeight={50}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-bold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                            compId="I596:307104;596:306605;596:305921"
                            comWidth={121}
                            comHeight={24}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            Product Design
                          </Text>
                          <Text
                            className="font-normal mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                            compId="I596:307104;596:306605;596:305922"
                            comWidth={48}
                            comHeight={22}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            12 Files
                          </Text>
                        </Column>
                        <Text
                          className="font-medium lg:mt-[21px] xl:mt-[24px] mt-[28px] 3xl:mt-[33px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                          compId="I596:307104;596:306605;596:305918"
                          comWidth={28}
                          comHeight={22}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          3GB
                        </Text>
                      </Row>
                    </Column>
                    <Column
                      className="bg-white_A700 border border-indigo_50 border-solid items-center lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px] rounded-radius4 w-[100%]"
                      compId="I596:307104;596:306606"
                      comWidth={241}
                      comHeight={146}
                      compLeft={261}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-center justify-between w-[100%]"
                        compId="1407"
                        comWidth={200}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Img
                          src="images/img_folder_indigo_401_18X22.png"
                          className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] w-[11%]"
                          compId="I596:307104;596:306606;596:305919;480:291756"
                          comWidth={22}
                          comHeight={18}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="folder Five"
                        />
                        <Img
                          src="images/img_menu_bluegray_400.png"
                          className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                          compId="I596:307104;596:306606;596:305923"
                          comWidth={24}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="menu One"
                        />
                      </Row>
                      <Row
                        className="items-end lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]"
                        compId="I596:307104;596:306606;596:305928"
                        comWidth={201}
                        comHeight={50}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Column
                          className="w-[86%]"
                          compId="I596:307104;596:306606;596:305920"
                          comWidth={173}
                          comHeight={50}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-bold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                            compId="I596:307104;596:306606;596:305921"
                            comWidth={83}
                            comHeight={24}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            Outsource
                          </Text>
                          <Text
                            className="font-normal mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                            compId="I596:307104;596:306606;596:305922"
                            comWidth={48}
                            comHeight={22}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            12 Files
                          </Text>
                        </Column>
                        <Text
                          className="font-medium lg:mt-[21px] xl:mt-[24px] mt-[28px] 3xl:mt-[33px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                          compId="I596:307104;596:306606;596:305918"
                          comWidth={28}
                          comHeight={22}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          3GB
                        </Text>
                      </Row>
                    </Column>
                    <Column
                      className="bg-white_A700 border border-indigo_50 border-solid items-center lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px] rounded-radius4 w-[100%]"
                      compId="I596:307104;596:306608"
                      comWidth={241}
                      comHeight={146}
                      compLeft={0}
                      compRight={261}
                      compType="Column"
                    >
                      <Row
                        className="items-center justify-between w-[100%]"
                        compId="1409"
                        comWidth={200}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Img
                          src="images/img_folder_indigo_401_18X22.png"
                          className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] w-[11%]"
                          compId="I596:307104;596:306608;596:305919;480:291756"
                          comWidth={22}
                          comHeight={18}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="folder Six"
                        />
                        <Img
                          src="images/img_menu_bluegray_400.png"
                          className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                          compId="I596:307104;596:306608;596:305923"
                          comWidth={24}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="menu Two"
                        />
                      </Row>
                      <Row
                        className="items-end lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]"
                        compId="I596:307104;596:306608;596:305928"
                        comWidth={201}
                        comHeight={50}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Column
                          className="w-[86%]"
                          compId="I596:307104;596:306608;596:305920"
                          comWidth={173}
                          comHeight={50}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-bold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                            compId="I596:307104;596:306608;596:305921"
                            comWidth={70}
                            comHeight={24}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            Graphics
                          </Text>
                          <Text
                            className="font-normal mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                            compId="I596:307104;596:306608;596:305922"
                            comWidth={48}
                            comHeight={22}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            12 Files
                          </Text>
                        </Column>
                        <Text
                          className="font-medium lg:mt-[21px] xl:mt-[24px] mt-[28px] 3xl:mt-[33px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                          compId="I596:307104;596:306608;596:305918"
                          comWidth={28}
                          comHeight={22}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          3GB
                        </Text>
                      </Row>
                    </Column>
                    <Column
                      className="bg-white_A700 border border-indigo_50 border-solid items-center lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px] rounded-radius4 w-[100%]"
                      compId="I596:307104;596:306609"
                      comWidth={241}
                      comHeight={146}
                      compLeft={261}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-center justify-between w-[100%]"
                        compId="1411"
                        comWidth={200}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Img
                          src="images/img_folder_indigo_401_18X22.png"
                          className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] w-[11%]"
                          compId="I596:307104;596:306609;596:305919;480:291756"
                          comWidth={22}
                          comHeight={18}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="folder Seven"
                        />
                        <Img
                          src="images/img_menu_bluegray_400.png"
                          className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                          compId="I596:307104;596:306609;596:305923"
                          comWidth={24}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="menu Three"
                        />
                      </Row>
                      <Row
                        className="items-end lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]"
                        compId="I596:307104;596:306609;596:305928"
                        comWidth={201}
                        comHeight={50}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Column
                          className="w-[86%]"
                          compId="I596:307104;596:306609;596:305920"
                          comWidth={173}
                          comHeight={50}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-bold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                            compId="I596:307104;596:306609;596:305921"
                            comWidth={104}
                            comHeight={24}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            Empty States
                          </Text>
                          <Text
                            className="font-normal mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                            compId="I596:307104;596:306609;596:305922"
                            comWidth={48}
                            comHeight={22}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            12 Files
                          </Text>
                        </Column>
                        <Text
                          className="font-medium lg:mt-[21px] xl:mt-[24px] mt-[28px] 3xl:mt-[33px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                          compId="I596:307104;596:306609;596:305918"
                          comWidth={28}
                          comHeight={22}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          3GB
                        </Text>
                      </Row>
                    </Column>
                  </Grid>
                  <Row
                    className="items-center lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[99%]"
                    compId="I596:307104;596:306613"
                    comWidth={497}
                    comHeight={28}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                      compId="I596:307104;596:306612"
                      comWidth={104}
                      comHeight={28}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Recent files
                    </Text>
                    <Text
                      className="font-medium lg:ml-[247px] xl:ml-[282px] ml-[318px] 3xl:ml-[381px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                      compId="I596:307104;596:306614"
                      comWidth={51}
                      comHeight={22}
                      compLeft={318}
                      compRight={0}
                      compType="Text"
                    >
                      View all
                    </Text>
                    <Img
                      src="images/img_arrowright_bluegray_800.png"
                      className="lg:h-[11px] xl:h-[12px] h-[13px] 2xl:h-[14px] 3xl:h-[16px] ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:w-[10px] xl:w-[11px] w-[13px] 3xl:w-[15px]"
                      compId="I596:307104;596:306615;1:1683"
                      comWidth={13}
                      comHeight={13}
                      compLeft={11}
                      compRight={0}
                      compType="Image"
                      alt="arrowright"
                    />
                  </Row>
                  <Row
                    className="items-center lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[81%]"
                    compId="I596:307104;596:306617"
                    comWidth={408}
                    comHeight={24}
                    compLeft={20}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                      compId="I596:307104;596:306618"
                      comWidth={44}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Name
                    </Text>
                    <Text
                      className="font-normal lg:ml-[114px] xl:ml-[130px] ml-[147px] 3xl:ml-[176px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                      compId="I596:307104;596:306619"
                      comWidth={102}
                      comHeight={24}
                      compLeft={147}
                      compRight={0}
                      compType="Text"
                    >
                      Date motified
                    </Text>
                    <Text
                      className="font-normal lg:ml-[64px] xl:ml-[73px] ml-[83px] 3xl:ml-[99px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                      compId="I596:307104;596:306620"
                      comWidth={32}
                      comHeight={24}
                      compLeft={83}
                      compRight={0}
                      compType="Text"
                    >
                      Size
                    </Text>
                  </Row>
                  <Row
                    className="bg-gray_50 items-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px] w-[100%]"
                    compId="I596:307104;596:306622"
                    comWidth={501}
                    comHeight={64}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Img
                      src="images/img_file_bluegray_900_22X18.png"
                      className="lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] ml-[3px] w-[4%]"
                      compId="I596:307104;596:306626;1:1782"
                      comWidth={18}
                      comHeight={22}
                      compLeft={3}
                      compRight={0}
                      compType="Image"
                      alt="file One"
                    />
                    <Text
                      className="font-normal lg:ml-[13px] xl:ml-[15px] ml-[17px] 3xl:ml-[20px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                      compId="I596:307104;596:306627"
                      comWidth={78}
                      comHeight={24}
                      compLeft={17}
                      compRight={0}
                      compType="Text"
                    >
                      index.html
                    </Text>
                    <Text
                      className="font-normal lg:ml-[57px] xl:ml-[65px] ml-[74px] 3xl:ml-[88px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                      compId="I596:307104;596:306623"
                      comWidth={130}
                      comHeight={24}
                      compLeft={74}
                      compRight={0}
                      compType="Text"
                    >
                      10.10.2021, 09:45
                    </Text>
                    <Text
                      className="font-normal lg:ml-[42px] xl:ml-[48px] ml-[55px] 3xl:ml-[66px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                      compId="I596:307104;596:306624"
                      comWidth={45}
                      comHeight={24}
                      compLeft={55}
                      compRight={0}
                      compType="Text"
                    >
                      09 KB
                    </Text>
                  </Row>
                  <Row
                    className="bg-white_A700 items-center justify-between lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px] w-[100%]"
                    compId="I596:307104;596:306636"
                    comWidth={501}
                    comHeight={64}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Radio
                      value="imagepng"
                      className="font-normal ml-[2px] not-italic lg:pl-[14px] xl:pl-[16px] pl-[18px] 3xl:pl-[21px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900"
                      inputClassName="h-[20px] mr-[5px] w-[20px]"
                      compId="I596:307104;596:306639"
                      comWidth={117}
                      comHeight={24}
                      compLeft={2}
                      compRight={0}
                      compType="Radio"
                      checked={false}
                      name="imagepng"
                      label="imagepng"
                      variant="illBluegray9001_2"
                    ></Radio>
                    <Text
                      className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                      compId="I596:307104;596:306637"
                      comWidth={130}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      10.10.2021, 09:45
                    </Text>
                    <Text
                      className="font-normal lg:mr-[28px] xl:mr-[32px] mr-[36px] 3xl:mr-[43px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                      compId="I596:307104;596:306638"
                      comWidth={49}
                      comHeight={24}
                      compLeft={0}
                      compRight={36}
                      compType="Text"
                    >
                      110 KB
                    </Text>
                  </Row>
                  <Row
                    className="bg-gray_50 items-center lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px] w-[100%]"
                    compId="I596:307104;596:306629"
                    comWidth={501}
                    comHeight={64}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Img
                      src="images/img_vector_bluegray_900_22X18.png"
                      className="lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] ml-[3px] w-[4%]"
                      compId="I596:307104;596:306633;5:80"
                      comWidth={18}
                      comHeight={22}
                      compLeft={3}
                      compRight={0}
                      compType="Image"
                      alt="Vector Four"
                    />
                    <Text
                      className="font-normal lg:ml-[13px] xl:ml-[15px] ml-[17px] 3xl:ml-[20px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                      compId="I596:307104;596:306634"
                      comWidth={103}
                      comHeight={24}
                      compLeft={17}
                      compRight={0}
                      compType="Text"
                    >
                      Document.txt
                    </Text>
                    <Text
                      className="font-normal lg:ml-[38px] xl:ml-[44px] ml-[50px] 3xl:ml-[60px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                      compId="I596:307104;596:306630"
                      comWidth={130}
                      comHeight={24}
                      compLeft={50}
                      compRight={0}
                      compType="Text"
                    >
                      10.10.2021, 09:45
                    </Text>
                    <Text
                      className="font-normal lg:ml-[42px] xl:ml-[48px] ml-[55px] 3xl:ml-[66px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                      compId="I596:307104;596:306631"
                      comWidth={42}
                      comHeight={24}
                      compLeft={55}
                      compRight={0}
                      compType="Text"
                    >
                      10 KB
                    </Text>
                  </Row>
                </Column>
                <Column
                  className="absolute bg-cover bg-repeat justify-end lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px] right-[1%] shadow-bs3 top-[15%] w-[30%]"
                  compId="596:307105"
                  style={{ backgroundImage: "url('images/img_popup.png')" }}
                  comWidth={172}
                  comHeight={198}
                  compLeft={0}
                  compRight={4}
                  compType="Column"
                >
                  <Row
                    className="items-center mr-[auto] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] w-[52%]"
                    compId="I596:307105;596:306495"
                    comWidth={68}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Img
                      src="images/img_eye_bluegray_900_20X20.png"
                      className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                      compId="I596:307105;596:306496"
                      comWidth={20}
                      comHeight={20}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="eye"
                    />
                    <Text
                      className="font-medium xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]"
                      compId="I596:307105;596:306497"
                      comWidth={36}
                      comHeight={22}
                      compLeft={12}
                      compRight={0}
                      compType="Text"
                    >
                      Open
                    </Text>
                  </Row>
                  <Row
                    className="items-center mr-[auto] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[65%]"
                    compId="I596:307105;596:306498"
                    comWidth={86}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Img
                      src="images/img_maximize.png"
                      className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                      compId="I596:307105;596:306499"
                      comWidth={20}
                      comHeight={20}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="maximize"
                    />
                    <Text
                      className="font-medium lg:ml-[10px] xl:ml-[11px] ml-[13px] 3xl:ml-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]"
                      compId="I596:307105;596:306500"
                      comWidth={53}
                      comHeight={22}
                      compLeft={13}
                      compRight={0}
                      compType="Text"
                    >
                      Rename
                    </Text>
                  </Row>
                  <Row
                    className="items-center mr-[auto] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[43%]"
                    compId="I596:307105;596:306501"
                    comWidth={57}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Img
                      src="images/img_edit_bluegray_900.png"
                      className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                      compId="I596:307105;596:306502"
                      comWidth={20}
                      comHeight={20}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="edit"
                    />
                    <Text
                      className="font-medium xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]"
                      compId="I596:307105;596:306503"
                      comWidth={25}
                      comHeight={22}
                      compLeft={12}
                      compRight={0}
                      compType="Text"
                    >
                      Edit
                    </Text>
                  </Row>
                  <Line
                    className="bg-indigo_50 h-[1px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[1px]"
                    compId="I596:307105;596:306504"
                    comWidth={1}
                    comHeight={1}
                    compLeft={0}
                    compRight={0}
                    compType="Line"
                  />
                  <Row
                    className="items-center ml-[1px] mr-[auto] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] w-[63%]"
                    compId="I596:307105;596:306505"
                    comWidth={83}
                    comHeight={22}
                    compLeft={1}
                    compRight={0}
                    compType="Row"
                  >
                    <Img
                      src="images/img_delete.png"
                      className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] w-[19%]"
                      compId="I596:307105;596:306506;5:189"
                      comWidth={16}
                      comHeight={18}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="delete"
                    />
                    <Text
                      className="font-medium lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]"
                      compId="I596:307105;596:306507"
                      comWidth={53}
                      comHeight={22}
                      compLeft={14}
                      compRight={0}
                      compType="Text"
                    >
                      Remove
                    </Text>
                  </Row>
                </Column>
              </Stack>
              <Column
                className="bg-white_A700 lg:p-[24px] xl:p-[27px] p-[31px] 3xl:p-[37px] rounded-radius4 shadow-bs1 w-[24%]"
                compId="596:307108"
                comWidth={273}
                comHeight={770}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold ml-[1px] mt-[1px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                  compId="I596:307108;596:306953"
                  comWidth={69}
                  comHeight={28}
                  compLeft={1}
                  compRight={0}
                  compType="Text"
                >
                  Storage
                </Text>
                <Stack
                  className="lg:h-[378px] xl:h-[432px] h-[485px] 2xl:h-[486px] 3xl:h-[583px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]"
                  compId="1401"
                  comWidth={210}
                  comHeight={485}
                  compLeft={1}
                  compRight={0}
                  compType="Stack"
                >
                  <Stack
                    className="absolute lg:h-[148px] xl:h-[170px] h-[190px] 2xl:h-[191px] 3xl:h-[229px] inset-x-[0] mx-[auto] top-[0] lg:w-[147px] xl:w-[169px] w-[190px] 3xl:w-[228px]"
                    compId="I596:307108;596:306954"
                    comWidth={190}
                    comHeight={190}
                    compLeft={0}
                    compRight={0}
                    compType="Stack"
                  >
                    <CircularProgressbar
                      className="absolute border-solid lg:h-[148px] xl:h-[170px] h-[190px] 2xl:h-[191px] 3xl:h-[229px] overflow-visible w-[100%]"
                      compId="I596:307108;596:306955"
                      comWidth={190}
                      comHeight={190}
                      compLeft={0}
                      compRight={0}
                      compType="CircleProgressBar"
                      value="16"
                      name="Group"
                      strokeWidth={1}
                      styles={{
                        trail: { strokeWidth: 1, stroke: "" },
                        path: {
                          strokeLinecap: "square",
                          height: "100%",
                          "transform-origin": "center",
                          transform: "rotate(-90deg)",
                        },
                      }}
                    ></CircularProgressbar>
                    <Column
                      className="absolute inset-x-[0] items-center mx-[auto] top-[32%] w-[48%]"
                      compId="I596:307108;596:306958"
                      comWidth={92}
                      comHeight={58}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-bold lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_800 w-[auto]"
                        compId="I596:307108;596:306959"
                        comWidth={63}
                        comHeight={32}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        25Gb
                      </Text>
                      <Text
                        className="font-normal mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                        compId="I596:307108;596:306960"
                        comWidth={92}
                        comHeight={22}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Used of 50GB
                      </Text>
                    </Column>
                  </Stack>
                  <Column
                    className="absolute bottom-[0] items-center w-[100%]"
                    compId="I596:307108;596:306965"
                    comWidth={210}
                    comHeight={320}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Row
                      className="justify-between w-[99%]"
                      compId="I596:307108;596:306966"
                      comWidth={208}
                      comHeight={50}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <div
                        className="bg-indigo_401 lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] rounded-radius50 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                        compId="I596:307108;596:306967;1:1794"
                        comWidth={20}
                        comHeight={20}
                        compLeft={0}
                        compRight={0}
                        compType="View"
                      ></div>
                      <Column
                        className="w-[60%]"
                        compId="I596:307108;596:306969"
                        comWidth={124}
                        comHeight={50}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-bold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                          compId="I596:307108;596:306970"
                          comWidth={48}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          Image
                        </Text>
                        <Text
                          className="font-normal mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                          compId="I596:307108;596:306971"
                          comWidth={47}
                          comHeight={22}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          23 files
                        </Text>
                      </Column>
                      <Text
                        className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                        compId="I596:307108;596:306972"
                        comWidth={28}
                        comHeight={22}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        3GB
                      </Text>
                    </Row>
                    <List
                      className="gap-[0] min-h-[auto] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] w-[100%]"
                      compId="1428"
                      comWidth={209}
                      comHeight={230}
                      compLeft={0}
                      compRight={0}
                      compType="List"
                      orientation="vertical"
                    >
                      <Row
                        className="justify-between lg:my-[15px] xl:my-[17px] my-[20px] 3xl:my-[24px] w-[100%]"
                        compId="I596:307108;596:306974"
                        comWidth={209}
                        comHeight={50}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Img
                          src="images/img_playcircle.png"
                          className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                          compId="I596:307108;596:306975"
                          comWidth={24}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="playcircle"
                        />
                        <Column
                          className="w-[60%]"
                          compId="I596:307108;596:306977"
                          comWidth={125}
                          comHeight={50}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-bold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                            compId="I596:307108;596:306978"
                            comWidth={55}
                            comHeight={24}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            Videos
                          </Text>
                          <Text
                            className="font-normal mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                            compId="I596:307108;596:306979"
                            comWidth={47}
                            comHeight={22}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            23 files
                          </Text>
                        </Column>
                        <Text
                          className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                          compId="I596:307108;596:306980"
                          comWidth={28}
                          comHeight={22}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          3GB
                        </Text>
                      </Row>
                      <Line
                        className="self-center w-[100%] h-[1px] bg-indigo_50"
                        compId="I596:307108;596:306989"
                        comWidth={209}
                        comHeight={1}
                        compLeft={0}
                        compRight={0}
                        compType="Line"
                      />
                      <Row
                        className="justify-between ml-[2px] lg:my-[15px] xl:my-[17px] my-[20px] 3xl:my-[24px] w-[99%]"
                        compId="I596:307108;596:306982"
                        comWidth={207}
                        comHeight={50}
                        compLeft={2}
                        compRight={0}
                        compType="Row"
                      >
                        <Img
                          src="images/img_music_amber_300.png"
                          className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                          compId="I596:307108;596:306983;5:29"
                          comWidth={20}
                          comHeight={20}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="music"
                        />
                        <Column
                          className="w-[59%]"
                          compId="I596:307108;596:306985"
                          comWidth={123}
                          comHeight={50}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-bold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                            compId="I596:307108;596:306986"
                            comWidth={65}
                            comHeight={24}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            Muscics
                          </Text>
                          <Text
                            className="font-normal mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                            compId="I596:307108;596:306987"
                            comWidth={47}
                            comHeight={22}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            23 files
                          </Text>
                        </Column>
                        <Text
                          className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                          compId="I596:307108;596:306988"
                          comWidth={28}
                          comHeight={22}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          3GB
                        </Text>
                      </Row>
                      <Line
                        className="self-center w-[100%] h-[1px] bg-indigo_50"
                        compId="I596:307108;596:306989"
                        comWidth={209}
                        comHeight={1}
                        compLeft={0}
                        compRight={0}
                        compType="Line"
                      />
                      <Row
                        className="justify-between lg:my-[15px] xl:my-[17px] my-[20px] 3xl:my-[24px] w-[100%]"
                        compId="I596:307108;596:306990"
                        comWidth={209}
                        comHeight={50}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Img
                          src="images/img_calendar_green_700.png"
                          className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] w-[11%]"
                          compId="I596:307108;596:306991;5:67"
                          comWidth={24}
                          comHeight={20}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="calendar"
                        />
                        <Column
                          className="w-[60%]"
                          compId="I596:307108;596:306993"
                          comWidth={125}
                          comHeight={50}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-bold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                            compId="I596:307108;596:306994"
                            comWidth={54}
                            comHeight={24}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            Others
                          </Text>
                          <Text
                            className="font-normal mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                            compId="I596:307108;596:306995"
                            comWidth={47}
                            comHeight={22}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            23 files
                          </Text>
                        </Column>
                        <Text
                          className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                          compId="I596:307108;596:306996"
                          comWidth={28}
                          comHeight={22}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          3GB
                        </Text>
                      </Row>
                    </List>
                  </Column>
                </Stack>
                <Column
                  className="border-2 border-indigo_50 border-solid items-center mb-[1px] ml-[1px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:p-[27px] xl:p-[31px] p-[35px] 3xl:p-[42px] rounded-radius4 w-[99%]"
                  compId="I596:307108;596:307006"
                  comWidth={209}
                  comHeight={129}
                  compLeft={1}
                  compRight={0}
                  compType="Column"
                >
                  <Img
                    src="images/img_download_bluegray_400_24X24.png"
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    compId="I596:307108;596:306963"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="download"
                  />
                  <Text
                    className="font-normal xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                    compId="I596:307108;596:306964"
                    comWidth={66}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Import file
                  </Text>
                </Column>
              </Column>
            </Row>
          </Column>
        </Column>
        <Line
          className="absolute bg-indigo_50 lg:h-[537px] xl:h-[614px] h-[690px] 2xl:h-[691px] 3xl:h-[829px] left-[15%] top-[6%] w-[1px]"
          compId="596:307111"
          comWidth={1}
          comHeight={690}
          compLeft={219}
          compRight={0}
          compType="Line"
        />
        <aside className="absolute bottom-[0] font-poppins items-center left-[0] w-[17%]">
          <Column
            className=""
            compId="741"
            comWidth={241}
            comHeight={890}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Column
              className="bg-white_A700 justify-center lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] w-[100%]"
              compId="596:307112"
              comWidth={241}
              comHeight={890}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-center lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[63%]"
                compId="I596:307112;41:948"
                comWidth={112}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_menu_bluegray_400_20X20.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I596:307112;531:321438"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="menu Four"
                />
                <Text
                  className="font-normal lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I596:307112;41:950"
                  comWidth={76}
                  comHeight={22}
                  compLeft={16}
                  compRight={0}
                  compType="Text"
                >
                  Dashboard
                </Text>
              </Row>
              <Row
                className="items-center lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[60%]"
                compId="I596:307112;41:951"
                comWidth={106}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_user_bluegray_400.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I596:307112;531:322607"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="user One"
                />
                <Text
                  className="font-normal lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I596:307112;41:953"
                  comWidth={70}
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
                compId="I596:307112;43809:15240"
                comWidth={155}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_icon.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] mt-[1px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I596:307112;41:955"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Icon"
                />
                <Text
                  className="font-normal lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] mt-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I596:307112;41:956"
                  comWidth={62}
                  comHeight={22}
                  compLeft={16}
                  compRight={0}
                  compType="Text"
                >
                  Message
                </Text>
                <Text
                  className="bg-red_600 flex font-bold items-center justify-center lg:ml-[25px] xl:ml-[29px] ml-[33px] 3xl:ml-[39px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius50 xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[24px]"
                  compId="I596:307112;235:259292"
                  comWidth={24}
                  comHeight={24}
                  compLeft={33}
                  compRight={0}
                  compType="Text"
                >
                  3
                </Text>
              </Row>
              <Row
                className="items-center ml-[1px] lg:mt-[24px] xl:mt-[27px] mt-[31px] 3xl:mt-[37px] w-[32%]"
                compId="I596:307112;41:957"
                comWidth={57}
                comHeight={22}
                compLeft={1}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_folder_deep_orange_300.png"
                  className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] w-[32%]"
                  compId="I596:307112;533:294113;533:294112"
                  comWidth={18}
                  comHeight={16}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="folder Eight"
                />
                <Text
                  className="flex font-normal items-center lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                  compId="I596:307112;41:959"
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
                className="lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[56%]"
                compId="I596:307112;41:960"
                comWidth={100}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_settings.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I596:307112;41:961"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="settings"
                />
                <Text
                  className="font-normal lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I596:307112;41:962"
                  comWidth={64}
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
                compId="I596:307112;41:963"
                comWidth={71}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_cart.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I596:307112;41:964"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="cart"
                />
                <Text
                  className="font-normal lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I596:307112;41:965"
                  comWidth={35}
                  comHeight={22}
                  compLeft={16}
                  compRight={0}
                  compType="Text"
                >
                  Shop
                </Text>
              </Row>
              <Row
                className="items-center ml-[1px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[37%]"
                compId="I596:307112;41:966"
                comWidth={65}
                comHeight={22}
                compLeft={1}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_vector_bluegray_400.png"
                  className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] w-[25%]"
                  compId="I596:307112;614:13885;531:320955"
                  comWidth={16}
                  comHeight={18}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Vector Six"
                />
                <Text
                  className="font-normal lg:ml-[13px] xl:ml-[15px] ml-[17px] 3xl:ml-[20px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I596:307112;41:968"
                  comWidth={31}
                  comHeight={22}
                  compLeft={17}
                  compRight={0}
                  compType="Text"
                >
                  Cart
                </Text>
              </Row>
              <Radio
                value="Settings23"
                className="font-normal lg:mb-[325px] xl:mb-[371px] mb-[418px] 3xl:mb-[501px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400"
                inputClassName="h-[20px] mr-[5px] w-[20px]"
                compId="I596:307112;531:316827"
                comWidth={93}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Radio"
                checked={false}
                name="Settings One"
                label="Settings23"
                variant="illBluegray400"
              ></Radio>
            </Column>
          </Column>
        </aside>
        <Line
          className="absolute bg-indigo_50 lg:h-[584px] xl:h-[668px] h-[750px] 2xl:h-[751px] 3xl:h-[901px] left-[17%] top-[0] w-[1px]"
          compId="596:307113"
          comWidth={1}
          comHeight={750}
          compLeft={241}
          compRight={0}
          compType="Line"
        />
      </Stack>
    </>
  );
};

export default FileManagementDefaultPage;
