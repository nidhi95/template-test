import React from "react";

import {
  Stack,
  Column,
  Row,
  Img,
  Text,
  Input,
  Line,
  Grid,
  Button,
  Radio,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemState,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";

const ShopSearchPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");
  const [inputvalue1, setInputvalue1] = React.useState("");

  return (
    <>
      <Stack
        className="bg-white_A700 font-inter lg:h-[1197px] xl:h-[1369px] h-[1538px] 2xl:h-[1540px] 3xl:h-[1847px] mx-[auto] w-[100%]"
        compId="600:313488"
        comWidth={1440}
        comHeight={1538}
        compLeft={0}
        compRight={0}
        compType="Stack"
      >
        <Column
          className="absolute items-end w-[100%]"
          compId="1137"
          comWidth={1440}
          comHeight={1538}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Row
            className="bg-white_A700 items-center justify-end p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] w-[100%]"
            compId="43812:48422"
            comWidth={1440}
            comHeight={60}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Img
              src="images/img_microphone.png"
              className="lg:h-[22px] xl:h-[25px] h-[28px] 2xl:h-[29px] 3xl:h-[34px] w-[1%]"
              compId="I43812:48422;43807:13258"
              comWidth={21}
              comHeight={28}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="microphone"
            />
            <Text
              className="font-medium lg:ml-[169px] xl:ml-[193px] ml-[218px] 3xl:ml-[261px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
              compId="I43812:48422;234:259667"
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
              compId="I43812:48422;234:259514"
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
                  compId="I43812:48422;234:259514;234:259505"
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
              compId="I43812:48422;531:315836;5:32"
              comWidth={20}
              comHeight={22}
              compLeft={136}
              compRight={0}
              compType="Image"
              alt="Vector"
            />
            <Stack
              className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] w-[9%]"
              compId="1136"
              comWidth={126}
              comHeight={24}
              compLeft={29}
              compRight={0}
              compType="Stack"
            >
              <Img
                src="images/img_user_bluegray_900.png"
                className="absolute lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] inset-y-[0] left-[0] my-[auto] w-[14%]"
                compId="I43812:48422;37:1285;37:1283"
                comWidth={18}
                comHeight={20}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="user"
              />
              <Row
                className="absolute right-[0] w-[90%]"
                compId="668"
                comWidth={113}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <div
                  className="bg-red_600 3xl:h-[10px] lg:h-[7px] h-[8px] 2xl:h-[9px] mt-[1px] outline outline-[2px] outline-white_A700 rounded-radius50 lg:w-[6px] xl:w-[7px] w-[8px] 3xl:w-[9px]"
                  compId="I43812:48422;530:301660"
                  comWidth={8}
                  comHeight={8}
                  compLeft={0}
                  compRight={0}
                  compType="View"
                ></div>
                <Text
                  className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_500 w-[auto]"
                  compId="I43812:48422;37:1272"
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
              compId="I43812:48422;483:292004;43812:47214"
              comWidth={40}
              comHeight={40}
              compLeft={13}
              compRight={13}
              compType="CircleImage"
              alt="SherlockToyFa"
            />
          </Row>
          <Row
            className="bg-gray_50 font-poppins justify-end ml-[auto] lg:p-[17px] xl:p-[20px] p-[23px] 3xl:p-[27px] w-[83%]"
            compId="1146"
            comWidth={1199}
            comHeight={1478}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Column
              className="3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] w-[24%]"
              compId="1144"
              comWidth={273}
              comHeight={1114}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-medium lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]"
                compId="600:313490"
                comWidth={162}
                comHeight={32}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                Shopping centre
              </Text>
              <Stack
                className="font-inter h-[1050px] 2xl:h-[1051px] 3xl:h-[1261px] lg:h-[817px] xl:h-[935px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]"
                compId="1134"
                comWidth={273}
                comHeight={1050}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Column
                  className="absolute bottom-[24%] left-[20%] w-[20%]"
                  compId="600:313491"
                  comWidth={55}
                  comHeight={52}
                  compLeft={54}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal ml-[3px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                    compId="600:313492"
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
                    compId="600:313493"
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
                  className="absolute bg-white_A700 lg:p-[24px] xl:p-[27px] p-[31px] 3xl:p-[37px] rounded-radius4 shadow-bs1 w-[100%]"
                  compId="600:313533"
                  comWidth={273}
                  comHeight={1050}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold ml-[1px] mt-[1px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                    compId="I600:313533;600:311923"
                    comWidth={97}
                    comHeight={28}
                    compLeft={1}
                    compRight={0}
                    compType="Text"
                  >
                    Categories
                  </Text>
                  <Accordion
                    preExpanded={[0]}
                    className="ml-[1px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[99%]"
                    compId="667"
                    comWidth={209}
                    comHeight={361}
                    compLeft={1}
                    compRight={0}
                    compType="ExpandableList"
                  >
                    {" "}
                    {[...Array(4)].map((item, index) => (
                      <AccordionItem uuid={index}>
                        <Column
                          className="pb-[4px] pr-[4px] w-[100%]"
                          compId="663"
                          comWidth={209}
                          comHeight={169}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <AccordionItemHeading className="w-full">
                            <AccordionItemButton>
                              <AccordionItemState>
                                {({ expanded }) => (
                                  <Row
                                    className="items-center justify-between w-[100%]"
                                    compId="I600:313533;600:311925"
                                    comWidth={204}
                                    comHeight={24}
                                    compLeft={0}
                                    compRight={0}
                                    compType="Row"
                                  >
                                    <Text
                                      className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                                      compId="I600:313533;600:311926"
                                      comWidth={60}
                                      comHeight={24}
                                      compLeft={0}
                                      compRight={0}
                                      compType="Text"
                                    >
                                      Clothes
                                    </Text>
                                    {expanded && (
                                      <Img
                                        src="images/img_arrowup_bluegray_900.png"
                                        className="lg:h-[5px] h-[6px] 2xl:h-[7px] 3xl:h-[8px] w-[5%]"
                                        compId="I600:313533;600:311927;1:1064"
                                        comWidth={11}
                                        comHeight={6}
                                        compLeft={0}
                                        compRight={0}
                                        compType="Image"
                                        alt="arrowup"
                                      />
                                    )}
                                    {!expanded && (
                                      <Img
                                        src="images/img_arrowdown.png"
                                        className="lg:h-[5px] h-[6px] 2xl:h-[7px] 3xl:h-[8px] w-[5%]"
                                        compId="I600:313533;600:311935;1:1053"
                                        comWidth={11}
                                        comHeight={6}
                                        compLeft={0}
                                        compRight={0}
                                        compType="Image"
                                        alt="arrowdown"
                                      />
                                    )}
                                  </Row>
                                )}
                              </AccordionItemState>
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel className="w-full">
                            <Column
                              className="lg:mb-[12px] xl:mb-[14px] mb-[16px] 3xl:mb-[19px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[30%]"
                              compId="661"
                              comWidth={61}
                              comHeight={104}
                              compLeft={0}
                              compRight={0}
                              compType="Column"
                            >
                              <Text
                                className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                                compId="I600:313533;600:311929"
                                comWidth={61}
                                comHeight={24}
                                compLeft={0}
                                compRight={0}
                                compType="Text"
                              >
                                T-shirts
                              </Text>
                              <Text
                                className="font-medium lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                                compId="I600:313533;600:311930"
                                comWidth={46}
                                comHeight={24}
                                compLeft={0}
                                compRight={0}
                                compType="Text"
                              >
                                Jeans
                              </Text>
                              <Text
                                className="font-medium lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                                compId="I600:313533;600:311931"
                                comWidth={60}
                                comHeight={24}
                                compLeft={0}
                                compRight={0}
                                compType="Text"
                              >
                                Jackets
                              </Text>
                            </Column>
                          </AccordionItemPanel>
                        </Column>
                        <Line
                          className="self-center w-[100%] h-[1px] bg-indigo_50"
                          compId="I600:313533;600:311932"
                          comWidth={209}
                          comHeight={1}
                          compLeft={0}
                          compRight={0}
                          compType="Line"
                        />
                      </AccordionItem>
                    ))}
                  </Accordion>
                  <Text
                    className="font-medium ml-[1px] lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                    compId="I600:313533;600:311946"
                    comWidth={38}
                    comHeight={24}
                    compLeft={1}
                    compRight={0}
                    compType="Text"
                  >
                    Price
                  </Text>
                  <Img
                    src="images/img_group_indigo_50.png"
                    className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] ml-[1px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[99%]"
                    compId="I600:313533;600:311948"
                    comWidth={209}
                    comHeight={14}
                    compLeft={1}
                    compRight={0}
                    compType="Image"
                    alt="Group"
                  />
                  <Row
                    className="items-center justify-between lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[100%]"
                    compId="I600:313533;600:311953"
                    comWidth={210}
                    comHeight={16}
                    compLeft={1}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="flex font-medium items-center xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                      compId="I600:313533;600:311954"
                      comWidth={16}
                      comHeight={16}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      $0
                    </Text>
                    <Text
                      className="font-medium xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                      compId="I600:313533;600:311955"
                      comWidth={48}
                      comHeight={16}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      $10,000
                    </Text>
                  </Row>
                  <Text
                    className="font-medium ml-[1px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                    compId="I600:313533;600:311957"
                    comWidth={49}
                    comHeight={24}
                    compLeft={1}
                    compRight={0}
                    compType="Text"
                  >
                    Rating
                  </Text>
                  <Row
                    className="justify-end ml-[1px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] pl-[2px] pt-[2px] w-[99%]"
                    compId="I600:313533;600:311959"
                    comWidth={209}
                    comHeight={20}
                    compLeft={1}
                    compRight={0}
                    compType="Row"
                  >
                    <Img
                      src="images/img_download_bluegray_400.png"
                      className="lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] mt-[1px] w-[9%]"
                      compId="I600:313533;600:311960;27:503"
                      comWidth={18}
                      comHeight={17}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="download"
                    />
                    <Text
                      className="font-medium ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                      compId="I600:313533;600:311960;27:487"
                      comWidth={48}
                      comHeight={18}
                      compLeft={11}
                      compRight={0}
                      compType="Text"
                    >
                      5 Stars
                    </Text>
                    <Img
                      src="images/img_frame_11X77.png"
                      className="xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] lg:ml-[39px] xl:ml-[45px] ml-[51px] 3xl:ml-[61px] mt-[4px] w-[37%]"
                      compId="I600:313533;600:311961"
                      comWidth={77}
                      comHeight={11}
                      compLeft={51}
                      compRight={0}
                      compType="Image"
                      alt="Frame"
                    />
                  </Row>
                  <Row
                    className="justify-end ml-[1px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] pl-[2px] pt-[2px] w-[99%]"
                    compId="I600:313533;600:311967"
                    comWidth={209}
                    comHeight={20}
                    compLeft={1}
                    compRight={0}
                    compType="Row"
                  >
                    <Img
                      src="images/img_download_bluegray_400.png"
                      className="lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] mt-[1px] w-[9%]"
                      compId="I600:313533;600:311968;27:503"
                      comWidth={18}
                      comHeight={17}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="download One"
                    />
                    <Text
                      className="font-medium ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                      compId="I600:313533;600:311968;27:487"
                      comWidth={48}
                      comHeight={18}
                      compLeft={11}
                      compRight={0}
                      compType="Text"
                    >
                      4 Stars
                    </Text>
                    <Img
                      src="images/img_frame_11X61.png"
                      className="xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] lg:ml-[52px] xl:ml-[59px] ml-[67px] 3xl:ml-[80px] mt-[4px] w-[29%]"
                      compId="I600:313533;600:311969"
                      comWidth={61}
                      comHeight={11}
                      compLeft={67}
                      compRight={0}
                      compType="Image"
                      alt="Frame One"
                    />
                  </Row>
                  <Row
                    className="justify-end ml-[1px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] pl-[2px] pt-[2px] w-[99%]"
                    compId="I600:313533;600:311974"
                    comWidth={209}
                    comHeight={20}
                    compLeft={1}
                    compRight={0}
                    compType="Row"
                  >
                    <Img
                      src="images/img_download_bluegray_400.png"
                      className="lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] mt-[1px] w-[9%]"
                      compId="I600:313533;600:311975;27:503"
                      comWidth={18}
                      comHeight={17}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="download Two"
                    />
                    <Text
                      className="font-medium ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                      compId="I600:313533;600:311975;27:487"
                      comWidth={48}
                      comHeight={18}
                      compLeft={11}
                      compRight={0}
                      compType="Text"
                    >
                      3 Stars
                    </Text>
                    <Img
                      src="images/img_frame_11X45.png"
                      className="xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] lg:ml-[64px] xl:ml-[73px] ml-[83px] 3xl:ml-[99px] mt-[4px] w-[22%]"
                      compId="I600:313533;600:311976"
                      comWidth={45}
                      comHeight={11}
                      compLeft={83}
                      compRight={0}
                      compType="Image"
                      alt="Frame Two"
                    />
                  </Row>
                  <Row
                    className="justify-end ml-[1px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] pl-[2px] pt-[2px] w-[99%]"
                    compId="I600:313533;600:311980"
                    comWidth={209}
                    comHeight={20}
                    compLeft={1}
                    compRight={0}
                    compType="Row"
                  >
                    <Img
                      src="images/img_download_bluegray_400.png"
                      className="lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] mt-[1px] w-[9%]"
                      compId="I600:313533;600:311981;27:503"
                      comWidth={18}
                      comHeight={17}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="download Three"
                    />
                    <Text
                      className="font-medium ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                      compId="I600:313533;600:311981;27:487"
                      comWidth={48}
                      comHeight={18}
                      compLeft={11}
                      compRight={0}
                      compType="Text"
                    >
                      2 Stars
                    </Text>
                    <Img
                      src="images/img_frame_11X28.png"
                      className="xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] ml-[100px] 3xl:ml-[120px] lg:ml-[77px] xl:ml-[88px] mt-[4px] w-[14%]"
                      compId="I600:313533;600:311982"
                      comWidth={28}
                      comHeight={11}
                      compLeft={100}
                      compRight={0}
                      compType="Image"
                      alt="Frame Three"
                    />
                  </Row>
                  <Row
                    className="justify-end ml-[1px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] pl-[2px] pt-[2px] w-[99%]"
                    compId="I600:313533;600:311985"
                    comWidth={209}
                    comHeight={20}
                    compLeft={1}
                    compRight={0}
                    compType="Row"
                  >
                    <Img
                      src="images/img_download_bluegray_400.png"
                      className="lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] mt-[1px] w-[9%]"
                      compId="I600:313533;600:311986;27:503"
                      comWidth={18}
                      comHeight={17}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="download Four"
                    />
                    <Text
                      className="font-medium ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                      compId="I600:313533;600:311986;27:487"
                      comWidth={38}
                      comHeight={18}
                      compLeft={11}
                      compRight={0}
                      compType="Text"
                    >
                      1 Star
                    </Text>
                    <Img
                      src="images/img_vector_11X12.png"
                      className="xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] xl:ml-[112px] ml-[126px] 3xl:ml-[151px] lg:ml-[98px] mt-[4px] w-[6%]"
                      compId="I600:313533;600:311988"
                      comWidth={12}
                      comHeight={11}
                      compLeft={126}
                      compRight={0}
                      compType="Image"
                      alt="Vector One"
                    />
                  </Row>
                  <Text
                    className="font-medium ml-[1px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                    compId="I600:313533;600:311990"
                    comWidth={42}
                    comHeight={24}
                    compLeft={1}
                    compRight={0}
                    compType="Text"
                  >
                    Color
                  </Text>
                  <Row
                    className="items-center ml-[2px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[72%]"
                    compId="I600:313533;600:311992"
                    comWidth={151}
                    comHeight={24}
                    compLeft={2}
                    compRight={0}
                    compType="Row"
                  >
                    <div
                      className="bg-bluegray_400 lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] rounded-radius50 lg:w-[17px] xl:w-[19px] w-[22px] 3xl:w-[26px]"
                      compId="I600:313533;600:311993;531:321049"
                      comWidth={22}
                      comHeight={22}
                      compLeft={0}
                      compRight={0}
                      compType="View"
                    ></div>
                    <Column
                      className="bg-light_blue_A700 lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] items-center 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] lg:px-[4px] xl:px-[5px] px-[6px] 3xl:px-[7px] rounded-radius50 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      compId="I600:313533;600:311994"
                      comWidth={24}
                      comHeight={24}
                      compLeft={9}
                      compRight={0}
                      compType="Column"
                    >
                      <div
                        className="bg-white_A700 lg:h-[10px] xl:h-[11px] h-[12px] 2xl:h-[13px] 3xl:h-[15px] rounded-radius50 xl:w-[10px] w-[12px] 3xl:w-[14px] lg:w-[9px]"
                        compId="I600:313533;600:311994;732:21356"
                        comWidth={12}
                        comHeight={12}
                        compLeft={0}
                        compRight={0}
                        compType="View"
                      ></div>
                    </Column>
                    <div
                      className="bg-pink_400 lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] rounded-radius50 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      compId="I600:313533;600:311995;732:21371"
                      comWidth={24}
                      comHeight={24}
                      compLeft={8}
                      compRight={0}
                      compType="View"
                    ></div>
                    <div
                      className="bg-amber_301 lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] rounded-radius50 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      compId="I600:313533;600:311996;732:21371"
                      comWidth={24}
                      comHeight={24}
                      compLeft={8}
                      compRight={0}
                      compType="View"
                    ></div>
                    <div
                      className="bg-pink_A100 lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] rounded-radius50 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      compId="I600:313533;600:311997;732:21371"
                      comWidth={24}
                      comHeight={24}
                      compLeft={8}
                      compRight={0}
                      compType="View"
                    ></div>
                  </Row>
                  <Input
                    className="font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-white_A700 text-white_A700 w-[100%]"
                    wrapClassName="3xl:mt-[38px] flex lg:mt-[24px] mt-[32px] w-[100%] xl:mt-[28px]"
                    compId="I600:313533;600:313197"
                    comWidth={0}
                    comHeight={48}
                    compLeft={0}
                    compRight={0}
                    compType="EditText"
                    name="Button"
                    placeholder="Apply filter"
                    suffix={
                      <Img
                        src="images/img_plus_white_A700.png"
                        className="w-[20px] h-[20px] ml-[35px] mr-[16px] lg:w-[15px] lg:h-[16px] lg:ml-[27px] lg:mr-[12px] xl:w-[17px] xl:h-[18px] xl:ml-[31px] xl:mr-[14px] 2xl:h-[21px] 3xl:w-[24px] 3xl:h-[25px] 3xl:ml-[42px] 3xl:mr-[19px] my-[auto]"
                        compId="I600:313533;600:313197;596:302874"
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
                    variant="FillDeeporange300"
                  ></Input>
                  <Input
                    className="font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_900 text-bluegray_900 w-[100%]"
                    wrapClassName="3xl:mt-[14px] flex lg:mt-[9px] mb-[1px] mt-[12px] w-[100%] xl:mt-[10px]"
                    compId="I600:313533;600:313253"
                    comWidth={0}
                    comHeight={48}
                    compLeft={0}
                    compRight={0}
                    compType="EditText"
                    name="Button One"
                    placeholder="Clear all"
                    suffix={
                      <Img
                        src="images/img_delete.png"
                        className="w-[16.67px] ml-[35px] mr-[17px] lg:w-[12px] lg:ml-[27px] lg:mr-[13px] xl:w-[14px] xl:ml-[31px] xl:mr-[15px] 2xl:w-[16px] 3xl:w-[20px] 3xl:ml-[42px] 3xl:mr-[20px] my-[auto]"
                        compId="I600:313533;600:313253;596:302874;5:189"
                        comWidth={16.67}
                        comHeight={18.33}
                        compLeft={35}
                        compRight={17}
                        compType="Image"
                        alt="delete"
                      />
                    }
                    shape="CircleBorder24"
                    size="sm"
                    variant="FillGray50"
                  ></Input>
                </Column>
              </Stack>
            </Column>
            <Column
              className="font-inter items-center lg:mb-[19px] xl:mb-[22px] mb-[25px] 3xl:mb-[30px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:mt-[56px] xl:mt-[64px] mt-[73px] 3xl:mt-[87px] w-[75%]"
              compId="1145"
              comWidth={859}
              comHeight={1334}
              compLeft={20}
              compRight={0}
              compType="Column"
            >
              <Input
                value={inputvalue1}
                onChange={(e) => setInputvalue1(e?.target?.value)}
                className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                wrapClassName="flex w-[100%]"
                compId="600:313494"
                comWidth={0}
                comHeight={56}
                compLeft={0}
                compRight={0}
                compType="SearchView"
                name="Frame Four"
                placeholder="Seach name, type,..."
                prefix={
                  <Img
                    src="images/img_search_bluegray_900.png"
                    className="cursor-pointer w-[24px] h-[24px] ml-[32px] mr-[16px] lg:w-[18px] lg:h-[19px] lg:ml-[24px] lg:mr-[12px] xl:w-[21px] xl:h-[22px] xl:ml-[28px] xl:mr-[14px] 2xl:h-[25px] 3xl:w-[28px] 3xl:h-[29px] 3xl:ml-[38px] 3xl:mr-[19px] my-[auto]"
                    compId="600:313495"
                    comWidth={24}
                    comHeight={24}
                    compLeft={32}
                    compRight={16}
                    compType="Image"
                    alt="search"
                  />
                }
                suffix={
                  inputvalue1?.length > 0 ? (
                    <CloseSVG
                      className="cursor-pointer w-[24px] h-[24px] ml-[10px] mr-[22px] lg:w-[18px] lg:h-[19px] lg:ml-[7px] lg:mr-[17px] xl:w-[21px] xl:h-[22px] xl:ml-[8px] xl:mr-[19px] 2xl:h-[25px] 3xl:w-[28px] 3xl:h-[29px] 3xl:ml-[12px] 3xl:mr-[26px] my-[auto]"
                      onClick={() => setInputvalue1("")}
                      color="#828fa2"
                    />
                  ) : inputvalue1?.length > 0 ? (
                    <CloseSVG
                      color="#828fa2"
                      className="cursor-pointer w-[24px] h-[24px] ml-[10px] mr-[22px] lg:w-[18px] lg:h-[19px] lg:ml-[7px] lg:mr-[17px] xl:w-[21px] xl:h-[22px] xl:ml-[8px] xl:mr-[19px] 2xl:h-[25px] 3xl:w-[28px] 3xl:h-[29px] 3xl:ml-[12px] 3xl:mr-[26px] my-[auto]"
                      onClick={() => setInputvalue1("")}
                    />
                  ) : (
                    ""
                  )
                }
                shape="srcRoundedBorder4"
                size="mdSrc"
                variant="srcOutlineBlack9000c"
              ></Input>
              <Stack
                className="xl:h-[1056px] h-[1186px] 2xl:h-[1187px] 3xl:h-[1425px] lg:h-[923px] lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] w-[100%]"
                compId="1135"
                comWidth={859}
                comHeight={1186}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <div
                  className="absolute bg-white_A700 lg:h-[240px] xl:h-[274px] h-[308px] 2xl:h-[309px] 3xl:h-[370px] inset-x-[0] mx-[auto] rounded-radius4 shadow-bs1 top-[1%] w-[32%]"
                  compId="600:313498"
                  comWidth={273}
                  comHeight={308}
                  compLeft={0}
                  compRight={0}
                  compType="View"
                ></div>
                <div
                  className="absolute bg-white_A700 lg:h-[240px] xl:h-[274px] h-[308px] 2xl:h-[309px] 3xl:h-[370px] right-[0] rounded-radius4 shadow-bs1 top-[1%] w-[32%]"
                  compId="600:313499"
                  comWidth={273}
                  comHeight={308}
                  compLeft={0}
                  compRight={0}
                  compType="View"
                ></div>
                <Grid
                  className="absolute lg:gap-[15px] xl:gap-[17px] gap-[20px] 3xl:gap-[24px] grid grid-cols-3 w-[100%]"
                  compId="1154"
                  comWidth={859}
                  comHeight={1186}
                  compLeft={0}
                  compRight={0}
                  compType="Grid"
                >
                  <Column
                    className="bg-white_A700 items-center lg:pb-[24px] xl:pb-[28px] pb-[32px] 3xl:pb-[38px] rounded-radius8 shadow-bs1 w-[100%]"
                    compId="600:313502"
                    comWidth={273}
                    comHeight={583}
                    compLeft={0}
                    compRight={586}
                    compType="Column"
                  >
                    <Row
                      className="bg-cover bg-repeat justify-end lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px] w-[100%]"
                      compId="I600:313502;600:312074"
                      style={{
                        backgroundImage: "url('images/img_frame_353X273.png')",
                      }}
                      comWidth={273}
                      comHeight={353}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Button
                        className="3xl:mb-[339px] flex items-center justify-center lg:mb-[220px] mb-[283px] text-center w-[35%] xl:mb-[251px]"
                        compId="I600:313502;600:312075"
                        comWidth={0}
                        comHeight={30}
                        compLeft={0}
                        compRight={0}
                        compType="Button"
                        rightIcon={
                          <Img
                            src="images/img_cursor_red_600.png"
                            className="w-[10px] ml-[12px] text-center lg:w-[7px] lg:ml-[9px] xl:w-[8px] xl:ml-[10px] 3xl:w-[12px] 3xl:ml-[14px]"
                            compId="I600:313502;600:312075;485:292763;1:1622"
                            comWidth={10}
                            comHeight={11}
                            compLeft={12}
                            compRight={0}
                            compType="Image"
                            alt="cursor"
                          />
                        }
                        size="md"
                        variant="FillRed40019"
                      >
                        <div className="bg-transparent font-normal not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px]">
                          Feature
                        </div>
                      </Button>
                      <Button
                        className="3xl:ml-[9px] flex items-center justify-center lg:ml-[6px] ml-[8px] text-center w-[42%] xl:ml-[7px]"
                        compId="I600:313502;600:312076"
                        comWidth={0}
                        comHeight={30}
                        compLeft={0}
                        compRight={0}
                        compType="Button"
                        rightIcon={
                          <Img
                            src="images/img_offer.png"
                            className="w-[10.59px] ml-[14px] text-center lg:w-[8px] lg:ml-[10px] xl:w-[9px] xl:ml-[12px] 2xl:w-[10px] 3xl:w-[12px] 3xl:ml-[16px]"
                            compId="I600:313502;600:312076;485:292759;1:1518"
                            comWidth={10.59}
                            comHeight={10.58}
                            compLeft={14}
                            compRight={0}
                            compType="Image"
                            alt="offer"
                          />
                        }
                        size="md"
                        variant="FillIndigo40019"
                      >
                        <div className="bg-transparent font-normal not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px]">
                          Flash sale
                        </div>
                      </Button>
                    </Row>
                    <Text
                      className="font-medium lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]"
                      compId="I600:313502;600:312059"
                      comWidth={73}
                      comHeight={22}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Avo T-Shirt
                    </Text>
                    <Column
                      className="items-center lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[41%]"
                      compId="1148"
                      comWidth={112}
                      comHeight={135}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="justify-evenly w-[96%]"
                        compId="I600:313502;600:312060"
                        comWidth={107}
                        comHeight={28}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-bold font-inter lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                          compId="I600:313502;600:312061"
                          comWidth={59}
                          comHeight={28}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          $120.0
                        </Text>
                        <Text
                          className="font-normal font-poppins line-through mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                          compId="I600:313502;600:312062"
                          comWidth={43}
                          comHeight={22}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          $140.0
                        </Text>
                      </Row>
                      <Img
                        src="images/img_frame_11X77.png"
                        className="xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[69%]"
                        compId="I600:313502;600:312063"
                        comWidth={77}
                        comHeight={11}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Frame Seven"
                      />
                      <Row
                        className="items-center justify-between lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]"
                        compId="1138"
                        comWidth={112}
                        comHeight={48}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Button
                          className="flex lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                          compId="I600:313502;600:312070"
                          comWidth={48}
                          comHeight={48}
                          compLeft={0}
                          compRight={0}
                          compType="IconButton"
                          variant="icbFillDeeporange300"
                        >
                          <Img
                            src="images/img_plus_white_A700.png"
                            className="h-[20px] flex items-center justify-center lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                            compId="I600:313502;600:312070"
                            comWidth={48}
                            comHeight={48}
                            compLeft={0}
                            compRight={0}
                            compType="IconButton"
                            alt="plus"
                          />
                        </Button>
                        <Button
                          className="flex lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                          compId="I600:313502;600:312072"
                          comWidth={48}
                          comHeight={48}
                          compLeft={0}
                          compRight={0}
                          compType="IconButton"
                        >
                          <Img
                            src="images/img_favorite.png"
                            className="flex items-center justify-center"
                            compId="I600:313502;600:312072"
                            comWidth={48}
                            comHeight={48}
                            compLeft={0}
                            compRight={0}
                            compType="IconButton"
                            alt="favorite"
                          />
                        </Button>
                      </Row>
                    </Column>
                  </Column>
                  <Column
                    className="bg-white_A700 items-center lg:pb-[24px] xl:pb-[28px] pb-[32px] 3xl:pb-[38px] rounded-radius8 shadow-bs1 w-[100%]"
                    compId="600:313503"
                    comWidth={273}
                    comHeight={583}
                    compLeft={293}
                    compRight={293}
                    compType="Column"
                  >
                    <Row
                      className="bg-cover bg-repeat justify-end lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px] w-[100%]"
                      compId="I600:313503;600:312074"
                      style={{
                        backgroundImage: "url('images/img_frame_1.png')",
                      }}
                      comWidth={273}
                      comHeight={353}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Button
                        className="3xl:mb-[339px] flex items-center justify-center lg:mb-[220px] mb-[283px] text-center w-[35%] xl:mb-[251px]"
                        compId="I600:313503;600:312075"
                        comWidth={0}
                        comHeight={30}
                        compLeft={0}
                        compRight={0}
                        compType="Button"
                        rightIcon={
                          <Img
                            src="images/img_cursor_red_600.png"
                            className="w-[10px] ml-[12px] text-center lg:w-[7px] lg:ml-[9px] xl:w-[8px] xl:ml-[10px] 3xl:w-[12px] 3xl:ml-[14px]"
                            compId="I600:313503;600:312075;485:292763;1:1622"
                            comWidth={10}
                            comHeight={11}
                            compLeft={12}
                            compRight={0}
                            compType="Image"
                            alt="cursor"
                          />
                        }
                        size="md"
                        variant="FillRed40019"
                      >
                        <div className="bg-transparent font-normal not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px]">
                          Feature
                        </div>
                      </Button>
                      <Button
                        className="3xl:ml-[9px] flex items-center justify-center lg:ml-[6px] ml-[8px] text-center w-[42%] xl:ml-[7px]"
                        compId="I600:313503;600:312076"
                        comWidth={0}
                        comHeight={30}
                        compLeft={0}
                        compRight={0}
                        compType="Button"
                        rightIcon={
                          <Img
                            src="images/img_offer.png"
                            className="w-[10.59px] ml-[14px] text-center lg:w-[8px] lg:ml-[10px] xl:w-[9px] xl:ml-[12px] 2xl:w-[10px] 3xl:w-[12px] 3xl:ml-[16px]"
                            compId="I600:313503;600:312076;485:292759;1:1518"
                            comWidth={10.59}
                            comHeight={10.58}
                            compLeft={14}
                            compRight={0}
                            compType="Image"
                            alt="offer"
                          />
                        }
                        size="md"
                        variant="FillIndigo40019"
                      >
                        <div className="bg-transparent font-normal not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px]">
                          Flash sale
                        </div>
                      </Button>
                    </Row>
                    <Text
                      className="font-medium lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]"
                      compId="I600:313503;600:312059"
                      comWidth={84}
                      comHeight={22}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Basic T-Shirt
                    </Text>
                    <Column
                      className="items-center lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[41%]"
                      compId="1149"
                      comWidth={112}
                      comHeight={135}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="justify-evenly w-[96%]"
                        compId="I600:313503;600:312060"
                        comWidth={107}
                        comHeight={28}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-bold font-inter lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                          compId="I600:313503;600:312061"
                          comWidth={59}
                          comHeight={28}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          $120.0
                        </Text>
                        <Text
                          className="font-normal font-poppins line-through mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                          compId="I600:313503;600:312062"
                          comWidth={43}
                          comHeight={22}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          $140.0
                        </Text>
                      </Row>
                      <Img
                        src="images/img_frame_11X77.png"
                        className="xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[69%]"
                        compId="I600:313503;600:312063"
                        comWidth={77}
                        comHeight={11}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Frame Eight"
                      />
                      <Row
                        className="items-center justify-between lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]"
                        compId="1139"
                        comWidth={112}
                        comHeight={48}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Button
                          className="flex lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                          compId="I600:313503;600:312070"
                          comWidth={48}
                          comHeight={48}
                          compLeft={0}
                          compRight={0}
                          compType="IconButton"
                          variant="icbFillDeeporange300"
                        >
                          <Img
                            src="images/img_plus_white_A700.png"
                            className="h-[20px] flex items-center justify-center lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                            compId="I600:313503;600:312070"
                            comWidth={48}
                            comHeight={48}
                            compLeft={0}
                            compRight={0}
                            compType="IconButton"
                            alt="plus One"
                          />
                        </Button>
                        <Button
                          className="flex lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                          compId="I600:313503;600:312072"
                          comWidth={48}
                          comHeight={48}
                          compLeft={0}
                          compRight={0}
                          compType="IconButton"
                        >
                          <Img
                            src="images/img_favorite.png"
                            className="flex items-center justify-center"
                            compId="I600:313503;600:312072"
                            comWidth={48}
                            comHeight={48}
                            compLeft={0}
                            compRight={0}
                            compType="IconButton"
                            alt="favorite One"
                          />
                        </Button>
                      </Row>
                    </Column>
                  </Column>
                  <Column
                    className="bg-white_A700 items-center lg:pb-[24px] xl:pb-[28px] pb-[32px] 3xl:pb-[38px] rounded-radius8 shadow-bs1 w-[100%]"
                    compId="600:313504"
                    comWidth={273}
                    comHeight={583}
                    compLeft={586}
                    compRight={0}
                    compType="Column"
                  >
                    <Row
                      className="bg-cover bg-repeat justify-end lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px] w-[100%]"
                      compId="I600:313504;600:312074"
                      style={{
                        backgroundImage: "url('images/img_frame_2.png')",
                      }}
                      comWidth={273}
                      comHeight={353}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Button
                        className="3xl:mb-[339px] flex items-center justify-center lg:mb-[220px] mb-[283px] text-center w-[35%] xl:mb-[251px]"
                        compId="I600:313504;600:312075"
                        comWidth={0}
                        comHeight={30}
                        compLeft={0}
                        compRight={0}
                        compType="Button"
                        rightIcon={
                          <Img
                            src="images/img_cursor_red_600.png"
                            className="w-[10px] ml-[12px] text-center lg:w-[7px] lg:ml-[9px] xl:w-[8px] xl:ml-[10px] 3xl:w-[12px] 3xl:ml-[14px]"
                            compId="I600:313504;600:312075;485:292763;1:1622"
                            comWidth={10}
                            comHeight={11}
                            compLeft={12}
                            compRight={0}
                            compType="Image"
                            alt="cursor"
                          />
                        }
                        size="md"
                        variant="FillRed40019"
                      >
                        <div className="bg-transparent font-normal not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px]">
                          Feature
                        </div>
                      </Button>
                      <Button
                        className="3xl:ml-[9px] flex items-center justify-center lg:ml-[6px] ml-[8px] text-center w-[42%] xl:ml-[7px]"
                        compId="I600:313504;600:312076"
                        comWidth={0}
                        comHeight={30}
                        compLeft={0}
                        compRight={0}
                        compType="Button"
                        rightIcon={
                          <Img
                            src="images/img_offer.png"
                            className="w-[10.59px] ml-[14px] text-center lg:w-[8px] lg:ml-[10px] xl:w-[9px] xl:ml-[12px] 2xl:w-[10px] 3xl:w-[12px] 3xl:ml-[16px]"
                            compId="I600:313504;600:312076;485:292759;1:1518"
                            comWidth={10.59}
                            comHeight={10.58}
                            compLeft={14}
                            compRight={0}
                            compType="Image"
                            alt="offer"
                          />
                        }
                        size="md"
                        variant="FillIndigo40019"
                      >
                        <div className="bg-transparent font-normal not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px]">
                          Flash sale
                        </div>
                      </Button>
                    </Row>
                    <Text
                      className="font-medium lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]"
                      compId="I600:313504;600:312059"
                      comWidth={78}
                      comHeight={22}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Trendy Polo
                    </Text>
                    <Column
                      className="items-center lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[41%]"
                      compId="1150"
                      comWidth={112}
                      comHeight={135}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="justify-evenly w-[96%]"
                        compId="I600:313504;600:312060"
                        comWidth={107}
                        comHeight={28}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-bold font-inter lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                          compId="I600:313504;600:312061"
                          comWidth={59}
                          comHeight={28}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          $120.0
                        </Text>
                        <Text
                          className="font-normal font-poppins line-through mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                          compId="I600:313504;600:312062"
                          comWidth={43}
                          comHeight={22}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          $140.0
                        </Text>
                      </Row>
                      <Img
                        src="images/img_frame_11X77.png"
                        className="xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[69%]"
                        compId="I600:313504;600:312063"
                        comWidth={77}
                        comHeight={11}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Frame Nine"
                      />
                      <Row
                        className="items-center justify-between lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]"
                        compId="1140"
                        comWidth={112}
                        comHeight={48}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Button
                          className="flex lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                          compId="I600:313504;600:312070"
                          comWidth={48}
                          comHeight={48}
                          compLeft={0}
                          compRight={0}
                          compType="IconButton"
                          variant="icbFillDeeporange300"
                        >
                          <Img
                            src="images/img_plus_white_A700.png"
                            className="h-[20px] flex items-center justify-center lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                            compId="I600:313504;600:312070"
                            comWidth={48}
                            comHeight={48}
                            compLeft={0}
                            compRight={0}
                            compType="IconButton"
                            alt="plus Two"
                          />
                        </Button>
                        <Button
                          className="flex lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                          compId="I600:313504;600:312072"
                          comWidth={48}
                          comHeight={48}
                          compLeft={0}
                          compRight={0}
                          compType="IconButton"
                        >
                          <Img
                            src="images/img_favorite.png"
                            className="flex items-center justify-center"
                            compId="I600:313504;600:312072"
                            comWidth={48}
                            comHeight={48}
                            compLeft={0}
                            compRight={0}
                            compType="IconButton"
                            alt="favorite Two"
                          />
                        </Button>
                      </Row>
                    </Column>
                  </Column>
                  <Column
                    className="bg-white_A700 lg:pb-[24px] xl:pb-[28px] pb-[32px] 3xl:pb-[38px] rounded-radius8 shadow-bs1 w-[100%]"
                    compId="600:313506"
                    comWidth={273}
                    comHeight={583}
                    compLeft={0}
                    compRight={586}
                    compType="Column"
                  >
                    <Row
                      className="bg-cover bg-repeat justify-end lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px] w-[100%]"
                      compId="I600:313506;600:312074"
                      style={{
                        backgroundImage: "url('images/img_frame_3.png')",
                      }}
                      comWidth={273}
                      comHeight={353}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Button
                        className="3xl:mb-[339px] flex items-center justify-center lg:mb-[220px] mb-[283px] text-center w-[35%] xl:mb-[251px]"
                        compId="I600:313506;600:312075"
                        comWidth={0}
                        comHeight={30}
                        compLeft={0}
                        compRight={0}
                        compType="Button"
                        rightIcon={
                          <Img
                            src="images/img_cursor_red_600.png"
                            className="w-[10px] ml-[12px] text-center lg:w-[7px] lg:ml-[9px] xl:w-[8px] xl:ml-[10px] 3xl:w-[12px] 3xl:ml-[14px]"
                            compId="I600:313506;600:312075;485:292763;1:1622"
                            comWidth={10}
                            comHeight={11}
                            compLeft={12}
                            compRight={0}
                            compType="Image"
                            alt="cursor"
                          />
                        }
                        size="md"
                        variant="FillRed40019"
                      >
                        <div className="bg-transparent font-normal not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px]">
                          Feature
                        </div>
                      </Button>
                      <Button
                        className="3xl:ml-[9px] flex items-center justify-center lg:ml-[6px] ml-[8px] text-center w-[42%] xl:ml-[7px]"
                        compId="I600:313506;600:312076"
                        comWidth={0}
                        comHeight={30}
                        compLeft={0}
                        compRight={0}
                        compType="Button"
                        rightIcon={
                          <Img
                            src="images/img_offer.png"
                            className="w-[10.59px] ml-[14px] text-center lg:w-[8px] lg:ml-[10px] xl:w-[9px] xl:ml-[12px] 2xl:w-[10px] 3xl:w-[12px] 3xl:ml-[16px]"
                            compId="I600:313506;600:312076;485:292759;1:1518"
                            comWidth={10.59}
                            comHeight={10.58}
                            compLeft={14}
                            compRight={0}
                            compType="Image"
                            alt="offer"
                          />
                        }
                        size="md"
                        variant="FillIndigo40019"
                      >
                        <div className="bg-transparent font-normal not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px]">
                          Flash sale
                        </div>
                      </Button>
                    </Row>
                    <Text
                      className="font-medium 3xl:ml-[116px] lg:ml-[75px] xl:ml-[86px] ml-[97px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]"
                      compId="I600:313506;600:312059"
                      comWidth={62}
                      comHeight={22}
                      compLeft={97}
                      compRight={0}
                      compType="Text"
                    >
                      Polo Shirt
                    </Text>
                    <Column
                      className="items-center lg:ml-[63px] xl:ml-[72px] ml-[81px] 3xl:ml-[97px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[41%]"
                      compId="1151"
                      comWidth={112}
                      comHeight={135}
                      compLeft={81}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="justify-evenly w-[96%]"
                        compId="I600:313506;600:312060"
                        comWidth={107}
                        comHeight={28}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-bold font-inter lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                          compId="I600:313506;600:312061"
                          comWidth={59}
                          comHeight={28}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          $120.0
                        </Text>
                        <Text
                          className="font-normal font-poppins line-through mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                          compId="I600:313506;600:312062"
                          comWidth={43}
                          comHeight={22}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          $140.0
                        </Text>
                      </Row>
                      <Img
                        src="images/img_frame_11X77.png"
                        className="xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[69%]"
                        compId="I600:313506;600:312063"
                        comWidth={77}
                        comHeight={11}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Frame Ten"
                      />
                      <Row
                        className="items-center justify-between lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]"
                        compId="1141"
                        comWidth={112}
                        comHeight={48}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Button
                          className="flex lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                          compId="I600:313506;600:312070"
                          comWidth={48}
                          comHeight={48}
                          compLeft={0}
                          compRight={0}
                          compType="IconButton"
                          variant="icbFillDeeporange300"
                        >
                          <Img
                            src="images/img_plus_white_A700.png"
                            className="h-[20px] flex items-center justify-center lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                            compId="I600:313506;600:312070"
                            comWidth={48}
                            comHeight={48}
                            compLeft={0}
                            compRight={0}
                            compType="IconButton"
                            alt="plus Three"
                          />
                        </Button>
                        <Button
                          className="flex lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                          compId="I600:313506;600:312072"
                          comWidth={48}
                          comHeight={48}
                          compLeft={0}
                          compRight={0}
                          compType="IconButton"
                        >
                          <Img
                            src="images/img_favorite.png"
                            className="flex items-center justify-center"
                            compId="I600:313506;600:312072"
                            comWidth={48}
                            comHeight={48}
                            compLeft={0}
                            compRight={0}
                            compType="IconButton"
                            alt="favorite Three"
                          />
                        </Button>
                      </Row>
                    </Column>
                  </Column>
                  <Column
                    className="bg-white_A700 lg:pb-[24px] xl:pb-[28px] pb-[32px] 3xl:pb-[38px] rounded-radius8 shadow-bs1 w-[100%]"
                    compId="600:313507"
                    comWidth={273}
                    comHeight={583}
                    compLeft={293}
                    compRight={293}
                    compType="Column"
                  >
                    <Row
                      className="bg-cover bg-repeat justify-end lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px] w-[100%]"
                      compId="I600:313507;600:312074"
                      style={{
                        backgroundImage: "url('images/img_frame_4.png')",
                      }}
                      comWidth={273}
                      comHeight={353}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Button
                        className="3xl:mb-[339px] flex items-center justify-center lg:mb-[220px] mb-[283px] text-center w-[35%] xl:mb-[251px]"
                        compId="I600:313507;600:312075"
                        comWidth={0}
                        comHeight={30}
                        compLeft={0}
                        compRight={0}
                        compType="Button"
                        rightIcon={
                          <Img
                            src="images/img_cursor_red_600.png"
                            className="w-[10px] ml-[12px] text-center lg:w-[7px] lg:ml-[9px] xl:w-[8px] xl:ml-[10px] 3xl:w-[12px] 3xl:ml-[14px]"
                            compId="I600:313507;600:312075;485:292763;1:1622"
                            comWidth={10}
                            comHeight={11}
                            compLeft={12}
                            compRight={0}
                            compType="Image"
                            alt="cursor"
                          />
                        }
                        size="md"
                        variant="FillRed40019"
                      >
                        <div className="bg-transparent font-normal not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px]">
                          Feature
                        </div>
                      </Button>
                      <Button
                        className="3xl:ml-[9px] flex items-center justify-center lg:ml-[6px] ml-[8px] text-center w-[42%] xl:ml-[7px]"
                        compId="I600:313507;600:312076"
                        comWidth={0}
                        comHeight={30}
                        compLeft={0}
                        compRight={0}
                        compType="Button"
                        rightIcon={
                          <Img
                            src="images/img_offer.png"
                            className="w-[10.59px] ml-[14px] text-center lg:w-[8px] lg:ml-[10px] xl:w-[9px] xl:ml-[12px] 2xl:w-[10px] 3xl:w-[12px] 3xl:ml-[16px]"
                            compId="I600:313507;600:312076;485:292759;1:1518"
                            comWidth={10.59}
                            comHeight={10.58}
                            compLeft={14}
                            compRight={0}
                            compType="Image"
                            alt="offer"
                          />
                        }
                        size="md"
                        variant="FillIndigo40019"
                      >
                        <div className="bg-transparent font-normal not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px]">
                          Flash sale
                        </div>
                      </Button>
                    </Row>
                    <Text
                      className="font-medium 3xl:ml-[116px] lg:ml-[75px] xl:ml-[86px] ml-[97px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]"
                      compId="I600:313507;600:312059"
                      comWidth={51}
                      comHeight={22}
                      compLeft={97}
                      compRight={0}
                      compType="Text"
                    >
                      Bomber
                    </Text>
                    <Column
                      className="items-center lg:ml-[63px] xl:ml-[72px] ml-[81px] 3xl:ml-[97px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[41%]"
                      compId="1152"
                      comWidth={112}
                      comHeight={135}
                      compLeft={81}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="justify-evenly w-[96%]"
                        compId="I600:313507;600:312060"
                        comWidth={107}
                        comHeight={28}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-bold font-inter lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                          compId="I600:313507;600:312061"
                          comWidth={59}
                          comHeight={28}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          $120.0
                        </Text>
                        <Text
                          className="font-normal font-poppins line-through mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                          compId="I600:313507;600:312062"
                          comWidth={43}
                          comHeight={22}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          $140.0
                        </Text>
                      </Row>
                      <Img
                        src="images/img_frame_11X77.png"
                        className="xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[69%]"
                        compId="I600:313507;600:312063"
                        comWidth={77}
                        comHeight={11}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Frame Eleven"
                      />
                      <Row
                        className="items-center justify-between lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]"
                        compId="1142"
                        comWidth={112}
                        comHeight={48}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Button
                          className="flex lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                          compId="I600:313507;600:312070"
                          comWidth={48}
                          comHeight={48}
                          compLeft={0}
                          compRight={0}
                          compType="IconButton"
                          variant="icbFillDeeporange300"
                        >
                          <Img
                            src="images/img_plus_white_A700.png"
                            className="h-[20px] flex items-center justify-center lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                            compId="I600:313507;600:312070"
                            comWidth={48}
                            comHeight={48}
                            compLeft={0}
                            compRight={0}
                            compType="IconButton"
                            alt="plus Four"
                          />
                        </Button>
                        <Button
                          className="flex lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                          compId="I600:313507;600:312072"
                          comWidth={48}
                          comHeight={48}
                          compLeft={0}
                          compRight={0}
                          compType="IconButton"
                        >
                          <Img
                            src="images/img_favorite.png"
                            className="flex items-center justify-center"
                            compId="I600:313507;600:312072"
                            comWidth={48}
                            comHeight={48}
                            compLeft={0}
                            compRight={0}
                            compType="IconButton"
                            alt="favorite Four"
                          />
                        </Button>
                      </Row>
                    </Column>
                  </Column>
                  <Column
                    className="bg-white_A700 lg:pb-[24px] xl:pb-[28px] pb-[32px] 3xl:pb-[38px] rounded-radius8 shadow-bs1 w-[100%]"
                    compId="600:313508"
                    comWidth={273}
                    comHeight={583}
                    compLeft={586}
                    compRight={0}
                    compType="Column"
                  >
                    <Row
                      className="bg-cover bg-repeat justify-end lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px] w-[100%]"
                      compId="I600:313508;600:312074"
                      style={{
                        backgroundImage: "url('images/img_frame_5.png')",
                      }}
                      comWidth={273}
                      comHeight={353}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Button
                        className="3xl:mb-[339px] flex items-center justify-center lg:mb-[220px] mb-[283px] text-center w-[35%] xl:mb-[251px]"
                        compId="I600:313508;600:312075"
                        comWidth={0}
                        comHeight={30}
                        compLeft={0}
                        compRight={0}
                        compType="Button"
                        rightIcon={
                          <Img
                            src="images/img_cursor_red_600.png"
                            className="w-[10px] ml-[12px] text-center lg:w-[7px] lg:ml-[9px] xl:w-[8px] xl:ml-[10px] 3xl:w-[12px] 3xl:ml-[14px]"
                            compId="I600:313508;600:312075;485:292763;1:1622"
                            comWidth={10}
                            comHeight={11}
                            compLeft={12}
                            compRight={0}
                            compType="Image"
                            alt="cursor"
                          />
                        }
                        size="md"
                        variant="FillRed40019"
                      >
                        <div className="bg-transparent font-normal not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px]">
                          Feature
                        </div>
                      </Button>
                      <Button
                        className="3xl:ml-[9px] flex items-center justify-center lg:ml-[6px] ml-[8px] text-center w-[42%] xl:ml-[7px]"
                        compId="I600:313508;600:312076"
                        comWidth={0}
                        comHeight={30}
                        compLeft={0}
                        compRight={0}
                        compType="Button"
                        rightIcon={
                          <Img
                            src="images/img_offer.png"
                            className="w-[10.59px] ml-[14px] text-center lg:w-[8px] lg:ml-[10px] xl:w-[9px] xl:ml-[12px] 2xl:w-[10px] 3xl:w-[12px] 3xl:ml-[16px]"
                            compId="I600:313508;600:312076;485:292759;1:1518"
                            comWidth={10.59}
                            comHeight={10.58}
                            compLeft={14}
                            compRight={0}
                            compType="Image"
                            alt="offer"
                          />
                        }
                        size="md"
                        variant="FillIndigo40019"
                      >
                        <div className="bg-transparent font-normal not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px]">
                          Flash sale
                        </div>
                      </Button>
                    </Row>
                    <Text
                      className="font-medium 3xl:ml-[116px] lg:ml-[75px] xl:ml-[86px] ml-[97px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]"
                      compId="I600:313508;600:312059"
                      comWidth={66}
                      comHeight={22}
                      compLeft={97}
                      compRight={0}
                      compType="Text"
                    >
                      Over Shirt
                    </Text>
                    <Column
                      className="items-center lg:ml-[63px] xl:ml-[72px] ml-[81px] 3xl:ml-[97px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[41%]"
                      compId="1153"
                      comWidth={112}
                      comHeight={135}
                      compLeft={81}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="justify-evenly w-[96%]"
                        compId="I600:313508;600:312060"
                        comWidth={107}
                        comHeight={28}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-bold font-inter lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                          compId="I600:313508;600:312061"
                          comWidth={59}
                          comHeight={28}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          $120.0
                        </Text>
                        <Text
                          className="font-normal font-poppins line-through mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                          compId="I600:313508;600:312062"
                          comWidth={43}
                          comHeight={22}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          $140.0
                        </Text>
                      </Row>
                      <Img
                        src="images/img_frame_11X77.png"
                        className="xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[69%]"
                        compId="I600:313508;600:312063"
                        comWidth={77}
                        comHeight={11}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Frame Twelve"
                      />
                      <Row
                        className="items-center justify-between lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]"
                        compId="1143"
                        comWidth={112}
                        comHeight={48}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Button
                          className="flex lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                          compId="I600:313508;600:312070"
                          comWidth={48}
                          comHeight={48}
                          compLeft={0}
                          compRight={0}
                          compType="IconButton"
                          variant="icbFillDeeporange300"
                        >
                          <Img
                            src="images/img_plus_white_A700.png"
                            className="h-[20px] flex items-center justify-center lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                            compId="I600:313508;600:312070"
                            comWidth={48}
                            comHeight={48}
                            compLeft={0}
                            compRight={0}
                            compType="IconButton"
                            alt="plus Five"
                          />
                        </Button>
                        <Button
                          className="flex lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                          compId="I600:313508;600:312072"
                          comWidth={48}
                          comHeight={48}
                          compLeft={0}
                          compRight={0}
                          compType="IconButton"
                        >
                          <Img
                            src="images/img_favorite.png"
                            className="flex items-center justify-center"
                            compId="I600:313508;600:312072"
                            comWidth={48}
                            comHeight={48}
                            compLeft={0}
                            compRight={0}
                            compType="IconButton"
                            alt="favorite Five"
                          />
                        </Button>
                      </Row>
                    </Column>
                  </Column>
                </Grid>
              </Stack>
              <Row
                className="items-center justify-center lg:mt-[31px] xl:mt-[36px] mt-[41px] 3xl:mt-[49px] w-[27%]"
                compId="600:313509"
                comWidth={232}
                comHeight={32}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Button
                  className="flex lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] items-center justify-center lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                  compId="600:313510"
                  comWidth={32}
                  comHeight={32}
                  compLeft={0}
                  compRight={0}
                  compType="IconButton"
                  size="lgIcn"
                  variant="icbOutlineIndigo50"
                >
                  <Img
                    src="images/img_arrowleft.png"
                    className="flex items-center justify-center"
                    compId="600:313510"
                    comWidth={32}
                    comHeight={32}
                    compLeft={0}
                    compRight={0}
                    compType="IconButton"
                    alt="arrowleft"
                  />
                </Button>
                <Button
                  className="font-medium lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                  compId="600:313514"
                  comWidth={32}
                  comHeight={32}
                  compLeft={8}
                  compRight={0}
                  compType="Button"
                  size="sm"
                  variant="OutlineBluegray900"
                >
                  1
                </Button>
                <Button
                  className="font-medium lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                  compId="600:313518"
                  comWidth={32}
                  comHeight={32}
                  compLeft={8}
                  compRight={0}
                  compType="Button"
                  size="sm"
                  variant="OutlineIndigo50"
                >
                  2
                </Button>
                <Button
                  className="font-medium lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                  compId="600:313522"
                  comWidth={32}
                  comHeight={32}
                  compLeft={8}
                  compRight={0}
                  compType="Button"
                  size="sm"
                  variant="OutlineIndigo50"
                >
                  ...
                </Button>
                <Button
                  className="font-medium lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                  compId="600:313526"
                  comWidth={32}
                  comHeight={32}
                  compLeft={8}
                  compRight={0}
                  compType="Button"
                  size="sm"
                  variant="OutlineIndigo50"
                >
                  9
                </Button>
                <Button
                  className="flex lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] items-center justify-center lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] rotate-[180deg] lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                  compId="600:313530"
                  comWidth={32}
                  comHeight={32}
                  compLeft={8}
                  compRight={0}
                  compType="IconButton"
                  size="lgIcn"
                  variant="icbOutlineIndigo50"
                >
                  <Img
                    src="images/img_arrowleft_bluegray_400.png"
                    className="flex items-center justify-center"
                    compId="600:313530"
                    comWidth={32}
                    comHeight={32}
                    compLeft={8}
                    compRight={0}
                    compType="IconButton"
                    alt="arrowleft One"
                  />
                </Button>
              </Row>
            </Column>
          </Row>
        </Column>
        <Line
          className="absolute bg-indigo_50 lg:h-[537px] xl:h-[614px] h-[690px] 2xl:h-[691px] 3xl:h-[829px] left-[15%] top-[4%] w-[1px]"
          compId="600:313535"
          comWidth={1}
          comHeight={690}
          compLeft={219}
          compRight={0}
          compType="Line"
        />
        <aside className="absolute h-[max-content] inset-y-[0] items-center left-[0] my-[auto] w-[17%]">
          <Column
            className=""
            compId="659"
            comWidth={241}
            comHeight={1478}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Column
              className="bg-white_A700 justify-center lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] w-[100%]"
              compId="600:313536"
              comWidth={241}
              comHeight={1478}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-center lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[62%]"
                compId="I600:313536;41:948"
                comWidth={109}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_menu_bluegray_400_20X20.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I600:313536;531:321438"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="menu"
                />
                <Text
                  className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I600:313536;41:950"
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
                compId="I600:313536;41:951"
                comWidth={100}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_user_bluegray_400.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I600:313536;531:322607"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="user One"
                />
                <Text
                  className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I600:313536;41:953"
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
                compId="I600:313536;43809:15240"
                comWidth={155}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_icon.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] mt-[1px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I600:313536;41:955"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Icon"
                />
                <Text
                  className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] mt-[1px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I600:313536;41:956"
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
                  compId="I600:313536;235:259292"
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
                compId="I600:313536;41:957"
                comWidth={57}
                comHeight={22}
                compLeft={1}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_folder_bluegray_400.png"
                  className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] w-[32%]"
                  compId="I600:313536;533:294113;531:320466"
                  comWidth={18}
                  comHeight={16}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="folder"
                />
                <Text
                  className="flex font-medium items-center lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I600:313536;41:959"
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
                compId="I600:313536;41:960"
                comWidth={95}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_settings.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I600:313536;41:961"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="settings"
                />
                <Text
                  className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I600:313536;41:962"
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
                className="ml-[1px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[38%]"
                compId="I600:313536;41:963"
                comWidth={68}
                comHeight={22}
                compLeft={1}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_trash.png"
                  className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] mt-[1px] lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                  compId="I600:313536;41:964;485:292315"
                  comWidth={16}
                  comHeight={16}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="trash"
                />
                <Text
                  className="font-medium lg:ml-[13px] xl:ml-[15px] ml-[17px] 3xl:ml-[20px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                  compId="I600:313536;41:965"
                  comWidth={34}
                  comHeight={22}
                  compLeft={17}
                  compRight={0}
                  compType="Text"
                >
                  Shop
                </Text>
              </Row>
              <Row
                className="items-center ml-[1px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[35%]"
                compId="I600:313536;41:966"
                comWidth={62}
                comHeight={22}
                compLeft={1}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_vector_bluegray_400.png"
                  className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] w-[26%]"
                  compId="I600:313536;614:13885;531:320955"
                  comWidth={16}
                  comHeight={18}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Vector Three"
                />
                <Text
                  className="font-medium lg:ml-[13px] xl:ml-[15px] ml-[17px] 3xl:ml-[20px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I600:313536;41:968"
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
                value="Settings14"
                className="font-medium mb-[1006px] 3xl:mb-[1207px] lg:mb-[782px] xl:mb-[894px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400"
                inputClassName="h-[20px] mr-[5px] w-[20px]"
                compId="I600:313536;531:316827"
                comWidth={91}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Radio"
                checked={false}
                name="Settings One"
                label="Settings14"
                variant="illBluegray400"
              ></Radio>
            </Column>
          </Column>
        </aside>
        <Line
          className="absolute bg-indigo_50 lg:h-[1197px] xl:h-[1369px] h-[1538px] 2xl:h-[1540px] 3xl:h-[1847px] left-[17%] w-[1px]"
          compId="600:313537"
          comWidth={1}
          comHeight={1538}
          compLeft={241}
          compRight={0}
          compType="Line"
        />
      </Stack>
    </>
  );
};

export default ShopSearchPage;
