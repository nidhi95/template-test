import React from "react";

import { Stack, Column, Row, Img, Text, Input, Button, Line } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const EKYCIntroductionStepOnePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Stack
        className="bg-white_A700 font-inter 3xl:h-[1141px] lg:h-[739px] xl:h-[846px] h-[950px] 2xl:h-[951px] mx-[auto] w-[100%]"
        compId="530:294053"
        comWidth={1440}
        comHeight={950}
        compLeft={0}
        compRight={0}
        compType="Stack"
      >
        <Column
          className="absolute items-end w-[100%]"
          compId="1186"
          comWidth={1440}
          comHeight={950}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Row
            className="bg-white_A700 items-center justify-end p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] w-[100%]"
            compId="43812:48242"
            comWidth={1440}
            comHeight={60}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Img
              src="images/img_microphone.png"
              className="lg:h-[22px] xl:h-[25px] h-[28px] 2xl:h-[29px] 3xl:h-[34px] w-[1%]"
              compId="I43812:48242;43807:13258"
              comWidth={21}
              comHeight={28}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="microphone"
            />
            <Text
              className="font-medium lg:ml-[169px] xl:ml-[193px] ml-[218px] 3xl:ml-[261px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
              compId="I43812:48242;234:259667"
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
              compId="I43812:48242;234:259514"
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
                  compId="I43812:48242;234:259514;234:259505"
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
              compId="I43812:48242;531:315836;5:32"
              comWidth={20}
              comHeight={22}
              compLeft={136}
              compRight={0}
              compType="Image"
              alt="Vector"
            />
            <Stack
              className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] w-[9%]"
              compId="1185"
              comWidth={126}
              comHeight={24}
              compLeft={29}
              compRight={0}
              compType="Stack"
            >
              <Img
                src="images/img_user_bluegray_900.png"
                className="absolute lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] inset-y-[0] left-[0] my-[auto] w-[14%]"
                compId="I43812:48242;37:1285;37:1283"
                comWidth={18}
                comHeight={20}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="user"
              />
              <Row
                className="absolute right-[0] w-[90%]"
                compId="689"
                comWidth={113}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <div
                  className="bg-red_600 3xl:h-[10px] lg:h-[7px] h-[8px] 2xl:h-[9px] mt-[1px] outline outline-[2px] outline-white_A700 rounded-radius50 lg:w-[6px] xl:w-[7px] w-[8px] 3xl:w-[9px]"
                  compId="I43812:48242;530:301660"
                  comWidth={8}
                  comHeight={8}
                  compLeft={0}
                  compRight={0}
                  compType="View"
                ></div>
                <Text
                  className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_500 w-[auto]"
                  compId="I43812:48242;37:1272"
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
              compId="I43812:48242;483:292004;43812:47214"
              comWidth={40}
              comHeight={40}
              compLeft={13}
              compRight={13}
              compType="CircleImage"
              alt="SherlockToyFa"
            />
          </Row>
          <Column
            className="bg-gray_50 items-center justify-end lg:p-[18px] xl:p-[21px] p-[24px] 3xl:p-[28px] w-[83%]"
            compId="530:294054"
            comWidth={1199}
            comHeight={890}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="justify-between lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[100%]"
              compId="1189"
              comWidth={1151}
              comHeight={32}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Text
                className="font-medium font-poppins lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]"
                compId="530:294055"
                comWidth={52}
                comHeight={32}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                eKYC
              </Text>
              <Text
                className="font-inter font-normal lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                compId="530:294056"
                comWidth={106}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                <span className="text-bluegray_400">Setting/</span>
                <span className="text-bluegray_800"> eKYC</span>
              </Text>
            </Row>
            <Column
              className="bg-white_A700 items-center lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:p-[62px] xl:p-[71px] p-[80px] 3xl:p-[96px] rounded-radius4 shadow-bs1 w-[100%]"
              compId="530:294057"
              comWidth={1151}
              comHeight={770}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-bold lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_900 w-[auto]"
                compId="530:294109"
                comWidth={145}
                comHeight={32}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                Introduction
              </Text>
              <Column
                className="items-center lg:my-[45px] xl:my-[52px] my-[59px] 3xl:my-[70px] w-[45%]"
                compId="1192"
                comWidth={449}
                comHeight={460}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="bg-white_A700 items-center justify-between lg:p-[19px] xl:p-[22px] p-[25px] 3xl:p-[30px] rounded-radius4 shadow-bs5 w-[100%]"
                  compId="530:294059"
                  comWidth={449}
                  comHeight={100}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Row
                    className="items-center justify-center lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:pr-[4px] xl:pr-[5px] pr-[6px] 3xl:pr-[7px] rounded-radius4 w-[38%]"
                    compId="530:294062"
                    comWidth={152}
                    comHeight={50}
                    compLeft={8}
                    compRight={0}
                    compType="Row"
                  >
                    <Column
                      className="items-end outline outline-[0.9px] outline-deep_orange_300 p-[2px] rounded-radius2 w-[17%]"
                      compId="530:294064"
                      comWidth={25}
                      comHeight={18}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Img
                        src="images/img_vector415_deep_orange_300.png"
                        className="h-[1px] 3xl:h-[2px] 2xl:h-[2px] mt-[1px] w-[1px]"
                        compId="530:294066"
                        comWidth={1}
                        comHeight={1}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Vector415"
                      />
                      <Row
                        className="justify-evenly mr-[2px] my-[1px] w-[86%]"
                        compId="1187"
                        comWidth={18}
                        comHeight={9}
                        compLeft={0}
                        compRight={2}
                        compType="Row"
                      >
                        <Img
                          src="images/img_user_deep_orange_300.png"
                          className="lg:h-[6px] h-[7px] 2xl:h-[8px] 3xl:h-[9px] mt-[1px] w-[33%]"
                          compId="I530:294068;12:74"
                          comWidth={6}
                          comHeight={7}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="user One"
                        />
                        <Img
                          src="images/img_vector415_deep_orange_300.png"
                          className="h-[1px] 3xl:h-[2px] 2xl:h-[2px] w-[1px]"
                          compId="530:294067"
                          comWidth={1}
                          comHeight={1}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="Vector416"
                        />
                      </Row>
                    </Column>
                    <Column
                      className="lg:ml-[16px] xl:ml-[18px] ml-[21px] 3xl:ml-[25px] w-[68%]"
                      compId="530:294074"
                      comWidth={100}
                      comHeight={50}
                      compLeft={21}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                        compId="530:294075"
                        comWidth={49}
                        comHeight={22}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Bước 1:
                      </Text>
                      <Text
                        className="font-bold mt-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="530:294076"
                        comWidth={100}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Scan ID Card
                      </Text>
                    </Column>
                  </Row>
                  <Img
                    src="images/img_arrowright.png"
                    className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] mr-[11px] 3xl:mr-[13px] lg:mr-[8px] xl:mr-[9px] lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                    compId="I530:294061;1:1683"
                    comWidth={16}
                    comHeight={16}
                    compLeft={0}
                    compRight={11}
                    compType="Image"
                    alt="arrowright"
                  />
                </Row>
                <Row
                  className="border border-indigo_50 border-solid items-center justify-between lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:p-[19px] xl:p-[22px] p-[25px] 3xl:p-[30px] rounded-radius4 shadow-bs3 w-[100%]"
                  compId="530:294077"
                  comWidth={449}
                  comHeight={100}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Row
                    className="items-center lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] px-[1px] rounded-radius4 w-[33%]"
                    compId="530:294080"
                    comWidth={132}
                    comHeight={50}
                    compLeft={7}
                    compRight={0}
                    compType="Row"
                  >
                    <Stack
                      className="lg:h-[21px] xl:h-[24px] h-[26px] 2xl:h-[27px] 3xl:h-[32px] lg:w-[20px] xl:w-[23px] w-[26px] 3xl:w-[31px]"
                      compId="530:294081"
                      comWidth={26}
                      comHeight={26}
                      compLeft={0}
                      compRight={0}
                      compType="Stack"
                    >
                      <Img
                        src="images/img_user_bluegray_400_21X18.png"
                        className="absolute lg:h-[17px] xl:h-[19px] h-[21px] 2xl:h-[22px] 3xl:h-[26px] inset-[0] justify-center m-[auto] w-[69%]"
                        compId="I530:294082;638:5805"
                        comWidth={18}
                        comHeight={21}
                        compLeft={3}
                        compRight={3}
                        compType="Image"
                        alt="user Two"
                      />
                      <Img
                        src="images/img_group_bluegray_400_26X26.png"
                        className="absolute lg:h-[21px] xl:h-[24px] h-[26px] 2xl:h-[27px] 3xl:h-[32px] lg:w-[20px] xl:w-[23px] w-[26px] 3xl:w-[31px]"
                        compId="530:294083"
                        comWidth={26}
                        comHeight={26}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Group"
                      />
                    </Stack>
                    <Column
                      className="lg:ml-[16px] xl:ml-[18px] ml-[21px] 3xl:ml-[25px] w-[61%]"
                      compId="530:294088"
                      comWidth={79}
                      comHeight={50}
                      compLeft={21}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                        compId="530:294089"
                        comWidth={50}
                        comHeight={22}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Bước 2:
                      </Text>
                      <Text
                        className="font-bold mt-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="530:294090"
                        comWidth={79}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Scan Face
                      </Text>
                    </Column>
                  </Row>
                  <Img
                    src="images/img_lock_bluegray_400_24X24.png"
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mr-[5px] xl:mr-[6px] mr-[7px] 3xl:mr-[8px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    compId="530:294079"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={7}
                    compType="Image"
                    alt="lock"
                  />
                </Row>
                <Row
                  className="border border-indigo_50 border-solid items-center justify-between lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:p-[19px] xl:p-[22px] p-[25px] 3xl:p-[30px] rounded-radius4 shadow-bs3 w-[100%]"
                  compId="530:294091"
                  comWidth={449}
                  comHeight={100}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Row
                    className="items-center lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] px-[2px] rounded-radius4 w-[55%]"
                    compId="530:294094"
                    comWidth={218}
                    comHeight={50}
                    compLeft={7}
                    compRight={0}
                    compType="Row"
                  >
                    <Stack
                      className="lg:h-[21px] xl:h-[24px] h-[26px] 2xl:h-[27px] 3xl:h-[32px] w-[11%]"
                      compId="530:294095"
                      comWidth={24}
                      comHeight={26}
                      compLeft={0}
                      compRight={0}
                      compType="Stack"
                    >
                      <Img
                        src="images/img_file_bluegray_400.png"
                        className="absolute lg:h-[18px] xl:h-[21px] h-[23px] 2xl:h-[24px] 3xl:h-[28px] left-[0] top-[0] w-[83%]"
                        compId="I530:294096;609:12055"
                        comWidth={20}
                        comHeight={23}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="file"
                      />
                      <Button
                        className="absolute bottom-[0] flex lg:h-[11px] xl:h-[12px] h-[13px] 2xl:h-[14px] 3xl:h-[16px] items-center justify-center right-[0] lg:w-[10px] xl:w-[11px] w-[13px] 3xl:w-[15px]"
                        compId="I530:294097;609:13080"
                        comWidth={13}
                        comHeight={13}
                        compLeft={0}
                        compRight={0}
                        compType="IconButton"
                        shape="icbRoundedBorder6"
                        size="smIcn"
                        variant="icbOutlineBluegray400"
                      >
                        <Img
                          src="images/img_stroke_bluegray_400_13X13.png"
                          className="flex items-center justify-center"
                          compId="I530:294097;609:13080"
                          comWidth={13}
                          comHeight={13}
                          compLeft={0}
                          compRight={0}
                          compType="IconButton"
                          alt="stroke"
                        />
                      </Button>
                    </Stack>
                    <Column
                      className="lg:ml-[16px] xl:ml-[18px] ml-[21px] 3xl:ml-[25px] w-[74%]"
                      compId="530:294098"
                      comWidth={159}
                      comHeight={50}
                      compLeft={21}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                        compId="530:294099"
                        comWidth={51}
                        comHeight={22}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Bước 3:
                      </Text>
                      <Text
                        className="font-bold mt-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="530:294100"
                        comWidth={159}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Confirm Information
                      </Text>
                    </Column>
                  </Row>
                  <Img
                    src="images/img_lock_bluegray_400_24X24.png"
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mr-[5px] xl:mr-[6px] mr-[7px] 3xl:mr-[8px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    compId="530:294093"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={7}
                    compType="Image"
                    alt="lock One"
                  />
                </Row>
                <Row
                  className="border border-indigo_50 border-solid items-center lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:p-[19px] xl:p-[22px] p-[25px] 3xl:p-[30px] rounded-radius4 shadow-bs3 w-[100%]"
                  compId="530:294101"
                  comWidth={449}
                  comHeight={100}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Img
                    src="images/img_stroke_bluegray_400.png"
                    className="xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[5%]"
                    compId="I530:294105;609:12130"
                    comWidth={21}
                    comHeight={11}
                    compLeft={10}
                    compRight={0}
                    compType="Image"
                    alt="Stroke One"
                  />
                  <Column
                    className="lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] w-[72%]"
                    compId="530:294106"
                    comWidth={289}
                    comHeight={50}
                    compLeft={23}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                      compId="530:294107"
                      comWidth={51}
                      comHeight={22}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Bước 4:
                    </Text>
                    <Text
                      className="font-bold mt-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                      compId="530:294108"
                      comWidth={76}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Signature
                    </Text>
                  </Column>
                  <Img
                    src="images/img_lock_bluegray_400_24X24.png"
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    compId="530:294103"
                    comWidth={24}
                    comHeight={24}
                    compLeft={23}
                    compRight={0}
                    compType="Image"
                    alt="lock Two"
                  />
                </Row>
              </Column>
            </Column>
          </Column>
        </Column>
        <Line
          className="absolute bg-indigo_50 lg:h-[584px] xl:h-[668px] h-[750px] 2xl:h-[751px] 3xl:h-[901px] left-[17%] top-[0] w-[1px]"
          compId="530:294113"
          comWidth={1}
          comHeight={750}
          compLeft={241}
          compRight={0}
          compType="Line"
        />
        <aside className="absolute bottom-[0] items-center left-[0] w-[17%]">
          <Column
            className=""
            compId="687"
            comWidth={241}
            comHeight={890}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Column
              className="bg-white_A700 justify-center lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] w-[100%]"
              compId="616:15161"
              comWidth={241}
              comHeight={890}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-center lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[62%]"
                compId="I616:15161;41:948"
                comWidth={109}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_menu_bluegray_400_20X20.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I616:15161;531:321438"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="menu"
                />
                <Text
                  className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I616:15161;41:950"
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
                compId="I616:15161;41:951"
                comWidth={100}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_user_bluegray_400.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I616:15161;531:322607"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="user Three"
                />
                <Text
                  className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I616:15161;41:953"
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
                compId="I616:15161;43809:15240"
                comWidth={155}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_icon.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] mt-[1px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I616:15161;41:955"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Icon"
                />
                <Text
                  className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] mt-[1px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I616:15161;41:956"
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
                  compId="I616:15161;235:259292"
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
                compId="I616:15161;41:957"
                comWidth={57}
                comHeight={22}
                compLeft={1}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_folder_bluegray_400.png"
                  className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] w-[32%]"
                  compId="I616:15161;533:294113;531:320466"
                  comWidth={18}
                  comHeight={16}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="folder"
                />
                <Text
                  className="flex font-medium items-center lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I616:15161;41:959"
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
                compId="I616:15161;41:960"
                comWidth={95}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_settings.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I616:15161;41:961"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="settings"
                />
                <Text
                  className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I616:15161;41:962"
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
                compId="I616:15161;41:963"
                comWidth={70}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_cart.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I616:15161;41:964"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="cart"
                />
                <Text
                  className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I616:15161;41:965"
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
                compId="I616:15161;41:966"
                comWidth={62}
                comHeight={22}
                compLeft={1}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_vector_bluegray_400.png"
                  className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] w-[26%]"
                  compId="I616:15161;614:13885;531:320955"
                  comWidth={16}
                  comHeight={18}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Vector One"
                />
                <Text
                  className="font-medium lg:ml-[13px] xl:ml-[15px] ml-[17px] 3xl:ml-[20px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I616:15161;41:968"
                  comWidth={28}
                  comHeight={22}
                  compLeft={17}
                  compRight={0}
                  compType="Text"
                >
                  Cart
                </Text>
              </Row>
              <Row
                className="items-center lg:mb-[325px] xl:mb-[371px] mb-[418px] 3xl:mb-[501px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[51%]"
                compId="I616:15161;531:316827"
                comWidth={91}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_settings_deep_orange_300.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I616:15161;533:294557;533:294556"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="settings One"
                />
                <Text
                  className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                  compId="I616:15161;531:316829"
                  comWidth={55}
                  comHeight={22}
                  compLeft={16}
                  compRight={0}
                  compType="Text"
                >
                  Settings
                </Text>
              </Row>
            </Column>
          </Column>
        </aside>
      </Stack>
    </>
  );
};

export default EKYCIntroductionStepOnePage;
