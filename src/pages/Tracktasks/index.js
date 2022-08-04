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

const TracktasksPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column
        className="font-inter items-center mx-[auto] w-[100%]"
        compId="598:308339"
        comWidth={1440}
        comHeight={950}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Stack
          className="bg-white_A700 3xl:h-[1141px] lg:h-[739px] xl:h-[846px] h-[950px] 2xl:h-[951px] w-[100%]"
          compId="598:308341"
          comWidth={1440}
          comHeight={950}
          compLeft={0}
          compRight={0}
          compType="Stack"
        >
          <Column
            className="absolute items-end w-[100%]"
            compId="834"
            comWidth={1440}
            comHeight={950}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <header
              className="w-[100%]"
              compId="571"
              comWidth={1440}
              comHeight={60}
              compLeft={0}
              compRight={0}
              compType="Header"
            >
              <Row
                className="bg-white_A700 items-center justify-end p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] w-[100%]"
                compId="43812:48082"
                comWidth={1440}
                comHeight={60}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_microphone.png"
                  className="lg:h-[22px] xl:h-[25px] h-[28px] 2xl:h-[29px] 3xl:h-[34px] w-[1%]"
                  compId="I43812:48082;43807:13258"
                  comWidth={21}
                  comHeight={28}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="microphone"
                />
                <Text
                  className="font-medium lg:ml-[169px] xl:ml-[193px] ml-[218px] 3xl:ml-[261px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                  compId="I43812:48082;234:259667"
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
                  compId="I43812:48082;234:259514"
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
                      compId="I43812:48082;234:259514;234:259505"
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
                  compId="I43812:48082;531:315836;5:32"
                  comWidth={20}
                  comHeight={22}
                  compLeft={136}
                  compRight={0}
                  compType="Image"
                  alt="Vector"
                />
                <Stack
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] w-[9%]"
                  compId="833"
                  comWidth={126}
                  comHeight={24}
                  compLeft={29}
                  compRight={0}
                  compType="Stack"
                >
                  <Img
                    src="images/img_user_bluegray_900.png"
                    className="absolute lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] inset-y-[0] left-[0] my-[auto] w-[14%]"
                    compId="I43812:48082;37:1285;37:1283"
                    comWidth={18}
                    comHeight={20}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="user"
                  />
                  <Row
                    className="absolute right-[0] w-[90%]"
                    compId="572"
                    comWidth={113}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <div
                      className="bg-red_600 3xl:h-[10px] lg:h-[7px] h-[8px] 2xl:h-[9px] mt-[1px] outline outline-[2px] outline-white_A700 rounded-radius50 lg:w-[6px] xl:w-[7px] w-[8px] 3xl:w-[9px]"
                      compId="I43812:48082;530:301660"
                      comWidth={8}
                      comHeight={8}
                      compLeft={0}
                      compRight={0}
                      compType="View"
                    ></div>
                    <Text
                      className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_500 w-[auto]"
                      compId="I43812:48082;37:1272"
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
                  compId="I43812:48082;483:292004;43812:47214"
                  comWidth={40}
                  comHeight={40}
                  compLeft={13}
                  compRight={13}
                  compType="CircleImage"
                  alt="SherlockToyFa"
                />
              </Row>
            </header>
            <Column
              className="bg-gray_50 font-poppins items-center lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px] w-[83%]"
              compId="598:308342"
              comWidth={1199}
              comHeight={890}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="justify-between xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[98%]"
                compId="851"
                comWidth={1133}
                comHeight={32}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-medium lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]"
                  compId="598:308343"
                  comWidth={152}
                  comHeight={32}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  Product design
                </Text>
                <Text
                  className="font-normal lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                  compId="598:308344"
                  comWidth={274}
                  comHeight={24}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  <span className="text-bluegray_400 font-poppins">
                    File management/
                  </span>
                  <span className="text-bluegray_800 font-poppins">
                    {" "}
                    Product design
                  </span>
                </Text>
              </Row>
              <Column
                className="bg-white_A700 items-center lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:py-[18px] xl:py-[21px] py-[24px] 3xl:py-[28px] rounded-radius4 shadow-bs1 w-[99%]"
                compId="598:308346"
                comWidth={1151}
                comHeight={460}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="items-center w-[94%]"
                  compId="I598:308346;596:308010"
                  comWidth={1079}
                  comHeight={40}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Img
                    src="images/img_vector_bluegray_400_5X9.png"
                    className="lg:h-[4px] h-[5px] 2xl:h-[6px] 3xl:h-[7px] rounded-radius03 w-[1%]"
                    compId="I598:308346;596:308011;30197:37"
                    comWidth={9}
                    comHeight={5}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Vector One"
                  />
                  <Img
                    src="images/img_folder_indigo_401.png"
                    className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] w-[2%]"
                    compId="I598:308346;596:308013;40:1382"
                    comWidth={22}
                    comHeight={18}
                    compLeft={24}
                    compRight={0}
                    compType="Image"
                    alt="folder"
                  />
                  <Text
                    className="font-normal font-poppins lg:ml-[10px] xl:ml-[11px] ml-[13px] 3xl:ml-[15px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                    compId="I598:308346;596:308014"
                    comWidth={116}
                    comHeight={24}
                    compLeft={13}
                    compRight={0}
                    compType="Text"
                  >
                    In process (10)
                  </Text>
                  <Button
                    className="font-inter font-normal lg:ml-[619px] xl:ml-[708px] ml-[797px] 3xl:ml-[956px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[9%]"
                    compId="I598:308346;596:308016"
                    comWidth={98}
                    comHeight={40}
                    compLeft={797}
                    compRight={0}
                    compType="Button"
                    shape="CircleBorder20"
                    size="md"
                    variant="FillGray50"
                  >
                    Edit
                  </Button>
                </Row>
                <Line
                  className="bg-indigo_50 h-[1px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[1px]"
                  compId="I598:308346;596:308015"
                  comWidth={1}
                  comHeight={1}
                  compLeft={0}
                  compRight={0}
                  compType="Line"
                />
                <Row
                  className="items-center lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] lg:mt-[24px] xl:mt-[27px] mt-[31px] 3xl:mt-[37px] w-[95%]"
                  compId="I598:308346;596:308017"
                  comWidth={1088}
                  comHeight={316}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Column
                    className="border-2 border-indigo_50 border-solid items-center lg:p-[42px] xl:p-[48px] p-[55px] 3xl:p-[66px] rounded-radius4 w-[24%]"
                    compId="I598:308346;596:308018"
                    comWidth={257}
                    comHeight={316}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="items-center lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] w-[42%]"
                      compId="853"
                      comWidth={62}
                      comHeight={120}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Button
                        className="flex lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] items-center justify-center rounded-radius50 lg:w-[43px] xl:w-[49px] w-[56px] 3xl:w-[67px]"
                        compId="I598:308346;596:308018;596:307672"
                        comWidth={56}
                        comHeight={56}
                        compLeft={0}
                        compRight={0}
                        compType="IconButton"
                        size="2xlIcn"
                        variant="icbFillRed50"
                      >
                        <Img
                          src="images/img_plus.png"
                          className="h-[20px] flex items-center justify-center lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                          compId="I598:308346;596:308018;596:307672"
                          comWidth={56}
                          comHeight={56}
                          compLeft={0}
                          compRight={0}
                          compType="IconButton"
                          alt="plus"
                        />
                      </Button>
                      <Text
                        className="font-bold lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="I598:308346;596:308018;596:307675"
                        comWidth={62}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Add file
                      </Text>
                    </Column>
                    <Text
                      className="font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] lg:mb-[13px] xl:mb-[15px] mb-[17px] 3xl:mb-[20px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 text-center w-[99%]"
                      compId="I598:308346;596:308018;596:307676"
                      comWidth={146}
                      comHeight={44}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Add file to manage your vital task
                    </Text>
                  </Column>
                  <List
                    className="lg:gap-[15px] xl:gap-[17px] gap-[20px] 3xl:gap-[24px] grid grid-cols-3 min-h-[auto] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] w-[75%]"
                    compId="855"
                    comWidth={811}
                    comHeight={316}
                    compLeft={20}
                    compRight={0}
                    compType="List"
                    orientation="horizontal"
                  >
                    <Column
                      className="bg-white_A700 justify-center lg:p-[24px] xl:p-[27px] p-[31px] 3xl:p-[37px] rounded-radius4 shadow-bs1 w-[100%]"
                      compId="I598:308346;596:308019"
                      comWidth={257}
                      comHeight={316}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-bold ml-[1px] mt-[1px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                        compId="I598:308346;596:308019;596:307683"
                        comWidth={178}
                        comHeight={28}
                        compLeft={1}
                        compRight={0}
                        compType="Text"
                      >
                        LD presentation file
                      </Text>
                      <Text
                        className="font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] ml-[1px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[91%]"
                        compId="I598:308346;596:308019;596:307684"
                        comWidth={178}
                        comHeight={44}
                        compLeft={1}
                        compRight={0}
                        compType="Text"
                      >
                        Introduction about LD
                        <br />
                        Project in detail
                      </Text>
                      <Text
                        className="font-normal ml-[1px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                        compId="I598:308346;596:308019;596:307686"
                        comWidth={113}
                        comHeight={24}
                        compLeft={1}
                        compRight={0}
                        compType="Text"
                      >
                        Process (80%)
                      </Text>
                      <Row
                        className="items-center ml-[1px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[99%]"
                        compId="837"
                        comWidth={194}
                        comHeight={5}
                        compLeft={1}
                        compRight={0}
                        compType="Row"
                      >
                        <Line
                          className="bg-indigo_401 h-[5px] w-[18%]"
                          compId="I598:308346;596:308019;596:307688"
                          comWidth={34}
                          comHeight={5}
                          compLeft={0}
                          compRight={0}
                          compType="Line"
                        />
                        <Line
                          className="bg-indigo_401 h-[5px] lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] w-[18%]"
                          compId="I598:308346;596:308019;596:307689"
                          comWidth={34}
                          comHeight={5}
                          compLeft={6}
                          compRight={0}
                          compType="Line"
                        />
                        <Line
                          className="bg-indigo_401 h-[5px] lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] w-[18%]"
                          compId="I598:308346;596:308019;596:307690"
                          comWidth={34}
                          comHeight={5}
                          compLeft={6}
                          compRight={0}
                          compType="Line"
                        />
                        <Line
                          className="bg-indigo_401 h-[5px] lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] w-[18%]"
                          compId="I598:308346;596:308019;596:307691"
                          comWidth={34}
                          comHeight={5}
                          compLeft={6}
                          compRight={0}
                          compType="Line"
                        />
                        <Line
                          className="bg-indigo_50 h-[5px] lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] w-[18%]"
                          compId="I598:308346;596:308019;596:307692"
                          comWidth={34}
                          comHeight={5}
                          compLeft={6}
                          compRight={0}
                          compType="Line"
                        />
                      </Row>
                      <Row
                        className="items-end mb-[1px] ml-[1px] lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] w-[99%]"
                        compId="839"
                        comWidth={193}
                        comHeight={72}
                        compLeft={1}
                        compRight={0}
                        compType="Row"
                      >
                        <Column
                          className="w-[83%]"
                          compId="I598:308346;596:308019;596:307693"
                          comWidth={161}
                          comHeight={72}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                            compId="I598:308346;596:308019;596:307694"
                            comWidth={76}
                            comHeight={24}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            Members
                          </Text>
                          <Stack
                            className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[30%]"
                            compId="I598:308346;596:308019;596:307695"
                            comWidth={48}
                            comHeight={32}
                            compLeft={0}
                            compRight={0}
                            compType="Stack"
                          >
                            <Img
                              src="images/img_robototoyfacefi.png"
                              className="absolute lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] left-[0] rounded-radius50 lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                              compId="I598:308346;596:308019;596:307696;341:279749"
                              comWidth={32}
                              comHeight={32}
                              compLeft={0}
                              compRight={0}
                              compType="CircleImage"
                              alt="RobotoToyFaceFi"
                            />
                            <Img
                              src="images/img_fidenza978toy.png"
                              className="absolute lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] right-[0] rounded-radius50 lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                              compId="I598:308346;596:308019;596:307697;444:290026"
                              comWidth={32}
                              comHeight={32}
                              compLeft={0}
                              compRight={0}
                              compType="CircleImage"
                              alt="Fidenza978Toy"
                            />
                          </Stack>
                        </Column>
                        <Button
                          className="flex lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] items-center justify-center lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] rounded-radius50 lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                          compId="I598:308346;596:308019;596:307698"
                          comWidth={32}
                          comHeight={32}
                          compLeft={0}
                          compRight={0}
                          compType="IconButton"
                          size="smIcn"
                        >
                          <Img
                            src="images/img_overflowmenu.png"
                            className="h-[20px] flex items-center justify-center lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                            compId="I598:308346;596:308019;596:307698"
                            comWidth={32}
                            comHeight={32}
                            compLeft={0}
                            compRight={0}
                            compType="IconButton"
                            alt="overflowmenu"
                          />
                        </Button>
                      </Row>
                    </Column>
                    <Column
                      className="bg-white_A700 justify-center lg:p-[24px] xl:p-[27px] p-[31px] 3xl:p-[37px] rounded-radius4 shadow-bs1 w-[100%]"
                      compId="I598:308346;596:308020"
                      comWidth={257}
                      comHeight={316}
                      compLeft={20}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-bold ml-[1px] mt-[1px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                        compId="I598:308346;596:308020;596:307683"
                        comWidth={122}
                        comHeight={28}
                        compLeft={1}
                        compRight={0}
                        compType="Text"
                      >
                        Urgent Tasks
                      </Text>
                      <Text
                        className="font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] ml-[1px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[91%]"
                        compId="I598:308346;596:308020;596:307684"
                        comWidth={178}
                        comHeight={44}
                        compLeft={1}
                        compRight={0}
                        compType="Text"
                      >
                        Introduction about LD
                        <br />
                        Project in detail
                      </Text>
                      <Text
                        className="font-normal ml-[1px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                        compId="I598:308346;596:308020;596:307686"
                        comWidth={108}
                        comHeight={24}
                        compLeft={1}
                        compRight={0}
                        compType="Text"
                      >
                        Process (10%)
                      </Text>
                      <Row
                        className="items-center ml-[1px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[99%]"
                        compId="842"
                        comWidth={194}
                        comHeight={5}
                        compLeft={1}
                        compRight={0}
                        compType="Row"
                      >
                        <Line
                          className="bg-indigo_401 h-[5px] w-[18%]"
                          compId="I598:308346;596:308020;596:307688"
                          comWidth={34}
                          comHeight={5}
                          compLeft={0}
                          compRight={0}
                          compType="Line"
                        />
                        <Line
                          className="bg-indigo_50 h-[5px] lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] w-[18%]"
                          compId="I598:308346;596:308020;596:307689"
                          comWidth={34}
                          comHeight={5}
                          compLeft={6}
                          compRight={0}
                          compType="Line"
                        />
                        <Line
                          className="bg-indigo_50 h-[5px] lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] w-[18%]"
                          compId="I598:308346;596:308020;596:307690"
                          comWidth={34}
                          comHeight={5}
                          compLeft={6}
                          compRight={0}
                          compType="Line"
                        />
                        <Line
                          className="bg-indigo_50 h-[5px] lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] w-[18%]"
                          compId="I598:308346;596:308020;596:307691"
                          comWidth={34}
                          comHeight={5}
                          compLeft={6}
                          compRight={0}
                          compType="Line"
                        />
                        <Line
                          className="bg-indigo_50 h-[5px] lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] w-[18%]"
                          compId="I598:308346;596:308020;596:307692"
                          comWidth={34}
                          comHeight={5}
                          compLeft={6}
                          compRight={0}
                          compType="Line"
                        />
                      </Row>
                      <Row
                        className="items-end mb-[1px] ml-[1px] lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] w-[99%]"
                        compId="844"
                        comWidth={193}
                        comHeight={72}
                        compLeft={1}
                        compRight={0}
                        compType="Row"
                      >
                        <Column
                          className="w-[83%]"
                          compId="I598:308346;596:308020;596:307693"
                          comWidth={161}
                          comHeight={72}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                            compId="I598:308346;596:308020;596:307694"
                            comWidth={76}
                            comHeight={24}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            Members
                          </Text>
                          <Stack
                            className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[30%]"
                            compId="I598:308346;596:308020;596:307695"
                            comWidth={48}
                            comHeight={32}
                            compLeft={0}
                            compRight={0}
                            compType="Stack"
                          >
                            <Img
                              src="images/img_robototoyfacefi.png"
                              className="absolute lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] left-[0] rounded-radius50 lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                              compId="I598:308346;596:308020;596:307696;341:279749"
                              comWidth={32}
                              comHeight={32}
                              compLeft={0}
                              compRight={0}
                              compType="CircleImage"
                              alt="RobotoToyFaceFi One"
                            />
                            <Img
                              src="images/img_fidenza978toy.png"
                              className="absolute lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] right-[0] rounded-radius50 lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                              compId="I598:308346;596:308020;596:307697;444:290026"
                              comWidth={32}
                              comHeight={32}
                              compLeft={0}
                              compRight={0}
                              compType="CircleImage"
                              alt="Fidenza978Toy One"
                            />
                          </Stack>
                        </Column>
                        <Button
                          className="flex lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] items-center justify-center lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] rounded-radius50 lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                          compId="I598:308346;596:308020;596:307698"
                          comWidth={32}
                          comHeight={32}
                          compLeft={0}
                          compRight={0}
                          compType="IconButton"
                          size="smIcn"
                        >
                          <Img
                            src="images/img_overflowmenu.png"
                            className="h-[20px] flex items-center justify-center lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                            compId="I598:308346;596:308020;596:307698"
                            comWidth={32}
                            comHeight={32}
                            compLeft={0}
                            compRight={0}
                            compType="IconButton"
                            alt="overflowmenu One"
                          />
                        </Button>
                      </Row>
                    </Column>
                    <Column
                      className="bg-white_A700 justify-center lg:p-[24px] xl:p-[27px] p-[31px] 3xl:p-[37px] rounded-radius4 shadow-bs1 w-[100%]"
                      compId="I598:308346;596:308021"
                      comWidth={257}
                      comHeight={316}
                      compLeft={20}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-bold ml-[1px] mt-[1px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                        compId="I598:308346;596:308021;596:307683"
                        comWidth={117}
                        comHeight={28}
                        compLeft={1}
                        compRight={0}
                        compType="Text"
                      >
                        Plan for 2022
                      </Text>
                      <Text
                        className="font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] ml-[1px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[91%]"
                        compId="I598:308346;596:308021;596:307684"
                        comWidth={178}
                        comHeight={44}
                        compLeft={1}
                        compRight={0}
                        compType="Text"
                      >
                        Introduction about LD
                        <br />
                        Project in detail
                      </Text>
                      <Text
                        className="font-normal ml-[1px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                        compId="I598:308346;596:308021;596:307686"
                        comWidth={103}
                        comHeight={24}
                        compLeft={1}
                        compRight={0}
                        compType="Text"
                      >
                        Process (0%)
                      </Text>
                      <Row
                        className="items-center ml-[1px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[99%]"
                        compId="847"
                        comWidth={194}
                        comHeight={5}
                        compLeft={1}
                        compRight={0}
                        compType="Row"
                      >
                        <Line
                          className="bg-indigo_50 h-[5px] w-[18%]"
                          compId="I598:308346;596:308021;596:307688"
                          comWidth={34}
                          comHeight={5}
                          compLeft={0}
                          compRight={0}
                          compType="Line"
                        />
                        <Line
                          className="bg-indigo_50 h-[5px] lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] w-[18%]"
                          compId="I598:308346;596:308021;596:307689"
                          comWidth={34}
                          comHeight={5}
                          compLeft={6}
                          compRight={0}
                          compType="Line"
                        />
                        <Line
                          className="bg-indigo_50 h-[5px] lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] w-[18%]"
                          compId="I598:308346;596:308021;596:307690"
                          comWidth={34}
                          comHeight={5}
                          compLeft={6}
                          compRight={0}
                          compType="Line"
                        />
                        <Line
                          className="bg-indigo_50 h-[5px] lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] w-[18%]"
                          compId="I598:308346;596:308021;596:307691"
                          comWidth={34}
                          comHeight={5}
                          compLeft={6}
                          compRight={0}
                          compType="Line"
                        />
                        <Line
                          className="bg-indigo_50 h-[5px] lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] w-[18%]"
                          compId="I598:308346;596:308021;596:307692"
                          comWidth={34}
                          comHeight={5}
                          compLeft={6}
                          compRight={0}
                          compType="Line"
                        />
                      </Row>
                      <Row
                        className="items-end mb-[1px] ml-[1px] lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] w-[99%]"
                        compId="849"
                        comWidth={193}
                        comHeight={72}
                        compLeft={1}
                        compRight={0}
                        compType="Row"
                      >
                        <Column
                          className="w-[83%]"
                          compId="I598:308346;596:308021;596:307693"
                          comWidth={161}
                          comHeight={72}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                            compId="I598:308346;596:308021;596:307694"
                            comWidth={76}
                            comHeight={24}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            Members
                          </Text>
                          <Img
                            src="images/img_tintin22.png"
                            className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] rounded-radius50 lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                            compId="I598:308346;596:308021;596:307696;444:290035"
                            comWidth={32}
                            comHeight={32}
                            compLeft={0}
                            compRight={0}
                            compType="CircleImage"
                            alt="TinTinTwentyTwo"
                          />
                        </Column>
                        <Button
                          className="flex lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] items-center justify-center lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] rounded-radius50 lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                          compId="I598:308346;596:308021;596:307698"
                          comWidth={32}
                          comHeight={32}
                          compLeft={0}
                          compRight={0}
                          compType="IconButton"
                          size="smIcn"
                        >
                          <Img
                            src="images/img_overflowmenu.png"
                            className="h-[20px] flex items-center justify-center lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                            compId="I598:308346;596:308021;596:307698"
                            comWidth={32}
                            comHeight={32}
                            compLeft={0}
                            compRight={0}
                            compType="IconButton"
                            alt="overflowmenu Two"
                          />
                        </Button>
                      </Row>
                    </Column>
                  </List>
                </Row>
              </Column>
              <List
                className="gap-[0] 3xl:mb-[117px] lg:mb-[76px] xl:mb-[87px] mb-[98px] min-h-[auto] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[99%]"
                compId="854"
                comWidth={1151}
                comHeight={196}
                compLeft={0}
                compRight={0}
                compType="List"
                orientation="vertical"
              >
                <Row
                  className="bg-white_A700 items-center justify-end my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:p-[18px] xl:p-[21px] p-[24px] 3xl:p-[28px] rounded-radius4 shadow-bs1 w-[100%]"
                  compId="598:308347"
                  comWidth={1151}
                  comHeight={88}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Img
                    src="images/img_vector_5X9.png"
                    className="lg:h-[4px] h-[5px] 2xl:h-[6px] 3xl:h-[7px] rounded-radius03 w-[1%]"
                    compId="I598:308347;596:308111;30197:35"
                    comWidth={9}
                    comHeight={5}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Vector Two"
                  />
                  <Img
                    src="images/img_folder_indigo_401.png"
                    className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] w-[2%]"
                    compId="I598:308347;596:308113;40:1382"
                    comWidth={22}
                    comHeight={18}
                    compLeft={24}
                    compRight={0}
                    compType="Image"
                    alt="folder One"
                  />
                  <Text
                    className="font-normal font-poppins lg:ml-[10px] xl:ml-[11px] ml-[13px] 3xl:ml-[15px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                    compId="I598:308347;596:308114"
                    comWidth={99}
                    comHeight={24}
                    compLeft={13}
                    compRight={0}
                    compType="Text"
                  >
                    In review (0)
                  </Text>
                  <Button
                    className="font-inter font-normal lg:ml-[632px] xl:ml-[723px] ml-[813px] 3xl:ml-[976px] lg:mr-[6px] xl:mr-[7px] mr-[8px] 3xl:mr-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[9%]"
                    compId="I598:308347;596:308115"
                    comWidth={98}
                    comHeight={40}
                    compLeft={813}
                    compRight={8}
                    compType="Button"
                    shape="CircleBorder20"
                    size="md"
                    variant="FillGray50"
                  >
                    Edit
                  </Button>
                </Row>
                <Row
                  className="bg-white_A700 items-center justify-end my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:p-[18px] xl:p-[21px] p-[24px] 3xl:p-[28px] rounded-radius4 shadow-bs1 w-[100%]"
                  compId="598:308348"
                  comWidth={1151}
                  comHeight={88}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Img
                    src="images/img_vector_5X9.png"
                    className="lg:h-[4px] h-[5px] 2xl:h-[6px] 3xl:h-[7px] rounded-radius03 w-[1%]"
                    compId="I598:308348;596:308111;30197:35"
                    comWidth={9}
                    comHeight={5}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Vector Three"
                  />
                  <Img
                    src="images/img_folder_indigo_401.png"
                    className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] w-[2%]"
                    compId="I598:308348;596:308113;40:1382"
                    comWidth={22}
                    comHeight={18}
                    compLeft={24}
                    compRight={0}
                    compType="Image"
                    alt="folder Two"
                  />
                  <Text
                    className="font-normal font-poppins lg:ml-[13px] xl:ml-[15px] ml-[17px] 3xl:ml-[20px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                    compId="I598:308348;596:308114"
                    comWidth={92}
                    comHeight={24}
                    compLeft={17}
                    compRight={0}
                    compType="Text"
                  >
                    Finished (0)
                  </Text>
                  <Button
                    className="font-inter font-normal lg:ml-[634px] xl:ml-[725px] ml-[816px] 3xl:ml-[979px] lg:mr-[6px] xl:mr-[7px] mr-[8px] 3xl:mr-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[9%]"
                    compId="I598:308348;596:308115"
                    comWidth={98}
                    comHeight={40}
                    compLeft={816}
                    compRight={8}
                    compType="Button"
                    shape="CircleBorder20"
                    size="md"
                    variant="FillGray50"
                  >
                    Edit
                  </Button>
                </Row>
              </List>
            </Column>
          </Column>
          <Line
            className="absolute bg-indigo_50 lg:h-[537px] xl:h-[614px] h-[690px] 2xl:h-[691px] 3xl:h-[829px] left-[15%] top-[6%] w-[1px]"
            compId="598:308350"
            comWidth={1}
            comHeight={690}
            compLeft={219}
            compRight={0}
            compType="Line"
          />
          <Line
            className="absolute bg-indigo_50 lg:h-[584px] xl:h-[668px] h-[750px] 2xl:h-[751px] 3xl:h-[901px] left-[17%] top-[0] w-[1px]"
            compId="598:308352"
            comWidth={1}
            comHeight={750}
            compLeft={241}
            compRight={0}
            compType="Line"
          />
          <aside className="absolute bottom-[0] font-poppins items-center left-[0] w-[17%]">
            <Column
              className=""
              compId="569"
              comWidth={241}
              comHeight={890}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Column
                className="bg-white_A700 justify-center lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] w-[100%]"
                compId="616:15642"
                comWidth={241}
                comHeight={890}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="items-center lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[63%]"
                  compId="I616:15642;41:948"
                  comWidth={112}
                  comHeight={22}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Img
                    src="images/img_menu_bluegray_400_20X20.png"
                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                    compId="I616:15642;531:321438"
                    comWidth={20}
                    comHeight={20}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="menu"
                  />
                  <Text
                    className="font-normal lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                    compId="I616:15642;41:950"
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
                  compId="I616:15642;41:951"
                  comWidth={106}
                  comHeight={22}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Img
                    src="images/img_user_bluegray_400.png"
                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                    compId="I616:15642;531:322607"
                    comWidth={20}
                    comHeight={20}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="user One"
                  />
                  <Text
                    className="font-normal lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                    compId="I616:15642;41:953"
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
                  compId="I616:15642;43809:15240"
                  comWidth={155}
                  comHeight={24}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Img
                    src="images/img_icon.png"
                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] mt-[1px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                    compId="I616:15642;41:955"
                    comWidth={20}
                    comHeight={20}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Icon"
                  />
                  <Text
                    className="font-normal lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] mt-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                    compId="I616:15642;41:956"
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
                    compId="I616:15642;235:259292"
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
                  compId="I616:15642;41:957"
                  comWidth={57}
                  comHeight={22}
                  compLeft={1}
                  compRight={0}
                  compType="Row"
                >
                  <Img
                    src="images/img_folder_deep_orange_300.png"
                    className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] w-[32%]"
                    compId="I616:15642;533:294113;533:294112"
                    comWidth={18}
                    comHeight={16}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="folder Three"
                  />
                  <Text
                    className="flex font-normal items-center lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                    compId="I616:15642;41:959"
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
                  compId="I616:15642;41:960"
                  comWidth={100}
                  comHeight={22}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Img
                    src="images/img_settings.png"
                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                    compId="I616:15642;41:961"
                    comWidth={20}
                    comHeight={20}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="settings"
                  />
                  <Text
                    className="font-normal lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                    compId="I616:15642;41:962"
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
                  compId="I616:15642;41:963"
                  comWidth={71}
                  comHeight={22}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Img
                    src="images/img_cart.png"
                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                    compId="I616:15642;41:964"
                    comWidth={20}
                    comHeight={20}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="cart"
                  />
                  <Text
                    className="font-normal lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                    compId="I616:15642;41:965"
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
                  compId="I616:15642;41:966"
                  comWidth={65}
                  comHeight={22}
                  compLeft={1}
                  compRight={0}
                  compType="Row"
                >
                  <Img
                    src="images/img_vector_bluegray_400.png"
                    className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] w-[25%]"
                    compId="I616:15642;614:13885;531:320955"
                    comWidth={16}
                    comHeight={18}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Vector Four"
                  />
                  <Text
                    className="font-normal lg:ml-[13px] xl:ml-[15px] ml-[17px] 3xl:ml-[20px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                    compId="I616:15642;41:968"
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
                  value="Settings2"
                  className="font-normal lg:mb-[325px] xl:mb-[371px] mb-[418px] 3xl:mb-[501px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400"
                  inputClassName="h-[20px] mr-[5px] w-[20px]"
                  compId="I616:15642;531:316827"
                  comWidth={93}
                  comHeight={22}
                  compLeft={0}
                  compRight={0}
                  compType="Radio"
                  checked={false}
                  name="Settings One"
                  label="Settings2"
                  variant="illBluegray400"
                ></Radio>
              </Column>
            </Column>
          </aside>
        </Stack>
      </Column>
    </>
  );
};

export default TracktasksPage;
