import React from "react";

import {
  Stack,
  Column,
  Row,
  Img,
  Text,
  Input,
  Grid,
  Button,
  Line,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const EKYCConfirmInformationPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Stack
        className="bg-white_A700 font-inter 3xl:h-[1141px] lg:h-[739px] xl:h-[846px] h-[950px] 2xl:h-[951px] mx-[auto] w-[100%]"
        compId="530:296154"
        comWidth={1440}
        comHeight={950}
        compLeft={0}
        compRight={0}
        compType="Stack"
      >
        <Column
          className="absolute items-end w-[100%]"
          compId="1179"
          comWidth={1440}
          comHeight={953}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Row
            className="bg-white_A700 items-center justify-end p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] w-[100%]"
            compId="43812:48202"
            comWidth={1440}
            comHeight={60}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Img
              src="images/img_microphone.png"
              className="lg:h-[22px] xl:h-[25px] h-[28px] 2xl:h-[29px] 3xl:h-[34px] w-[1%]"
              compId="I43812:48202;43807:13258"
              comWidth={21}
              comHeight={28}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="microphone"
            />
            <Text
              className="font-medium lg:ml-[169px] xl:ml-[193px] ml-[218px] 3xl:ml-[261px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
              compId="I43812:48202;234:259667"
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
              compId="I43812:48202;234:259514"
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
                  compId="I43812:48202;234:259514;234:259505"
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
              compId="I43812:48202;531:315836;5:32"
              comWidth={20}
              comHeight={22}
              compLeft={136}
              compRight={0}
              compType="Image"
              alt="Vector"
            />
            <Stack
              className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] w-[9%]"
              compId="1178"
              comWidth={126}
              comHeight={24}
              compLeft={29}
              compRight={0}
              compType="Stack"
            >
              <Img
                src="images/img_user_bluegray_900.png"
                className="absolute lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] inset-y-[0] left-[0] my-[auto] w-[14%]"
                compId="I43812:48202;37:1285;37:1283"
                comWidth={18}
                comHeight={20}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="user"
              />
              <Row
                className="absolute right-[0] w-[90%]"
                compId="685"
                comWidth={113}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <div
                  className="bg-red_600 3xl:h-[10px] lg:h-[7px] h-[8px] 2xl:h-[9px] mt-[1px] outline outline-[2px] outline-white_A700 rounded-radius50 lg:w-[6px] xl:w-[7px] w-[8px] 3xl:w-[9px]"
                  compId="I43812:48202;530:301660"
                  comWidth={8}
                  comHeight={8}
                  compLeft={0}
                  compRight={0}
                  compType="View"
                ></div>
                <Text
                  className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_500 w-[auto]"
                  compId="I43812:48202;37:1272"
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
              compId="I43812:48202;483:292004;43812:47214"
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
            compId="530:296155"
            comWidth={1199}
            comHeight={893}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="justify-between lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[100%]"
              compId="1180"
              comWidth={1151}
              comHeight={32}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Text
                className="font-medium font-poppins lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]"
                compId="530:296156"
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
                compId="530:296157"
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
              className="bg-white_A700 items-center lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:p-[37px] xl:p-[42px] p-[48px] 3xl:p-[57px] rounded-radius4 shadow-bs1 w-[100%]"
              compId="530:296158"
              comWidth={1151}
              comHeight={773}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-bold lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_900 w-[auto]"
                compId="530:296160"
                comWidth={238}
                comHeight={32}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                Confirm Information
              </Text>
              <Text
                className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                compId="530:296161"
                comWidth={303}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                Make sure that all your information are precise
              </Text>
              <Column
                className="lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[66%]"
                compId="1183"
                comWidth={697}
                comHeight={575}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                  compId="530:296167"
                  comWidth={75}
                  comHeight={22}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  <span className="text-bluegray_800 font-inter">
                    Full name{" "}
                  </span>
                  <span className="text-red_600 font-inter">*</span>
                </Text>
                <Input
                  className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
                  wrapClassName="3xl:mt-[9px] lg:mt-[6px] mt-[8px] w-[100%] xl:mt-[7px]"
                  compId="451"
                  comWidth={697}
                  comHeight={56}
                  compLeft={0}
                  compRight={0}
                  compType="EditText"
                  name="Group451"
                  placeholder="Mustermann Galer"
                ></Input>
                <Text
                  className="font-medium lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                  compId="530:296172"
                  comWidth={81}
                  comHeight={22}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  <span className="text-bluegray_800 font-inter">
                    ID number{" "}
                  </span>
                  <span className="text-red_600 font-inter">*</span>
                </Text>
                <Input
                  className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
                  wrapClassName="3xl:mt-[9px] lg:mt-[6px] mt-[8px] w-[100%] xl:mt-[7px]"
                  compId="452"
                  comWidth={697}
                  comHeight={56}
                  compLeft={0}
                  compRight={0}
                  compType="EditText"
                  name="Group452"
                  placeholder="L01X00T47"
                ></Input>
                <Grid
                  className="lg:gap-[17px] xl:gap-[20px] gap-[23px] 3xl:gap-[27px] grid grid-cols-2 lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]"
                  compId="1184"
                  comWidth={697}
                  comHeight={196}
                  compLeft={0}
                  compRight={0}
                  compType="Grid"
                >
                  <Column
                    className="w-[100%]"
                    compId="530:296174"
                    comWidth={337}
                    comHeight={86}
                    compLeft={0}
                    compRight={360}
                    compType="Column"
                  >
                    <Text
                      className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                      compId="530:296178"
                      comWidth={61}
                      comHeight={22}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      <span className="text-bluegray_800 font-inter">
                        Gender{" "}
                      </span>
                      <span className="text-red_600 font-inter">*</span>
                    </Text>
                    <Input
                      className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
                      wrapClassName="3xl:mt-[9px] lg:mt-[6px] mt-[8px] w-[100%] xl:mt-[7px]"
                      compId="453"
                      comWidth={337}
                      comHeight={56}
                      compLeft={0}
                      compRight={0}
                      compType="EditText"
                      name="gender One"
                      placeholder="Female"
                    ></Input>
                  </Column>
                  <Column
                    className="w-[100%]"
                    compId="530:296179"
                    comWidth={337}
                    comHeight={86}
                    compLeft={360}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                      compId="530:296183"
                      comWidth={84}
                      comHeight={22}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      <span className="text-bluegray_800 font-inter">
                        Nationality{" "}
                      </span>
                      <span className="text-red_600 font-inter">*</span>
                    </Text>
                    <Input
                      className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
                      wrapClassName="3xl:mt-[9px] lg:mt-[6px] mt-[8px] w-[100%] xl:mt-[7px]"
                      compId="454"
                      comWidth={337}
                      comHeight={56}
                      compLeft={0}
                      compRight={0}
                      compType="EditText"
                      name="Group454"
                      placeholder="Deitsch"
                    ></Input>
                  </Column>
                  <Column
                    className="w-[100%]"
                    compId="530:296185"
                    comWidth={337}
                    comHeight={86}
                    compLeft={0}
                    compRight={360}
                    compType="Column"
                  >
                    <Text
                      className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                      compId="530:296189"
                      comWidth={96}
                      comHeight={22}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      <span className="text-bluegray_800 font-inter">
                        Date of birth{" "}
                      </span>
                      <span className="text-red_600 font-inter">*</span>
                    </Text>
                    <Input
                      className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
                      wrapClassName="3xl:mt-[9px] lg:mt-[6px] mt-[8px] w-[100%] xl:mt-[7px]"
                      compId="455"
                      comWidth={337}
                      comHeight={56}
                      compLeft={0}
                      compRight={0}
                      compType="EditText"
                      name="Group455"
                      placeholder="12.08.1983"
                    ></Input>
                  </Column>
                  <Column
                    className="w-[100%]"
                    compId="530:296190"
                    comWidth={337}
                    comHeight={86}
                    compLeft={360}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                      compId="530:296194"
                      comWidth={101}
                      comHeight={22}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      <span className="text-bluegray_800 font-inter">
                        Place of birth{" "}
                      </span>
                      <span className="text-red_600 font-inter">*</span>
                    </Text>
                    <Input
                      className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
                      wrapClassName="3xl:mt-[9px] lg:mt-[6px] mt-[8px] w-[100%] xl:mt-[7px]"
                      compId="456"
                      comWidth={337}
                      comHeight={56}
                      compLeft={0}
                      compRight={0}
                      compType="EditText"
                      name="Group456"
                      placeholder="Berlin"
                    ></Input>
                  </Column>
                </Grid>
                <Row
                  className="lg:ml-[54px] xl:ml-[62px] ml-[70px] 3xl:ml-[84px] lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] w-[76%]"
                  compId="530:296195"
                  comWidth={529}
                  comHeight={22}
                  compLeft={70}
                  compRight={0}
                  compType="Row"
                >
                  <Img
                    src="images/img_download_bluegray_400.png"
                    className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] mt-[1px] lg:w-[14px] xl:w-[16px] w-[18px] 3xl:w-[21px]"
                    compId="I530:296195;27:503"
                    comWidth={18}
                    comHeight={18}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="download"
                  />
                  <Text
                    className="font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                    compId="I530:296195;27:487"
                    comWidth={500}
                    comHeight={22}
                    compLeft={11}
                    compRight={0}
                    compType="Text"
                  >
                    By clicking button “Confirm", I take all responsibility of
                    the information above
                  </Text>
                </Row>
                <Button
                  className="font-bold lg:ml-[166px] xl:ml-[190px] ml-[214px] 3xl:ml-[256px] lg:mt-[30px] xl:mt-[34px] mt-[39px] 3xl:mt-[46px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[39%]"
                  compId="530:296196"
                  comWidth={270}
                  comHeight={48}
                  compLeft={214}
                  compRight={0}
                  compType="Button"
                  shape="CircleBorder24"
                  size="lg"
                  variant="FillDeeporange300"
                >
                  Confirm
                </Button>
              </Column>
            </Column>
          </Column>
        </Column>
        <Line
          className="absolute bg-indigo_50 lg:h-[584px] xl:h-[668px] h-[750px] 2xl:h-[751px] 3xl:h-[901px] left-[17%] top-[0] w-[1px]"
          compId="530:296200"
          comWidth={1}
          comHeight={750}
          compLeft={241}
          compRight={0}
          compType="Line"
        />
        <aside className="absolute bottom-[0] items-center left-[0] w-[17%]">
          <Column
            className=""
            compId="683"
            comWidth={241}
            comHeight={890}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Column
              className="bg-white_A700 justify-center lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] w-[100%]"
              compId="616:15443"
              comWidth={241}
              comHeight={890}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-center lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[62%]"
                compId="I616:15443;41:948"
                comWidth={109}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_menu_bluegray_400_20X20.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I616:15443;531:321438"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="menu"
                />
                <Text
                  className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I616:15443;41:950"
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
                compId="I616:15443;41:951"
                comWidth={100}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_user_bluegray_400.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I616:15443;531:322607"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="user One"
                />
                <Text
                  className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I616:15443;41:953"
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
                compId="I616:15443;43809:15240"
                comWidth={155}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_icon.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] mt-[1px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I616:15443;41:955"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Icon"
                />
                <Text
                  className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] mt-[1px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I616:15443;41:956"
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
                  compId="I616:15443;235:259292"
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
                compId="I616:15443;41:957"
                comWidth={57}
                comHeight={22}
                compLeft={1}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_folder_bluegray_400.png"
                  className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] w-[32%]"
                  compId="I616:15443;533:294113;531:320466"
                  comWidth={18}
                  comHeight={16}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="folder"
                />
                <Text
                  className="flex font-medium items-center lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I616:15443;41:959"
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
                compId="I616:15443;41:960"
                comWidth={95}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_settings.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I616:15443;41:961"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="settings"
                />
                <Text
                  className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I616:15443;41:962"
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
                compId="I616:15443;41:963"
                comWidth={70}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_cart.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I616:15443;41:964"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="cart"
                />
                <Text
                  className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I616:15443;41:965"
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
                compId="I616:15443;41:966"
                comWidth={62}
                comHeight={22}
                compLeft={1}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_vector_bluegray_400.png"
                  className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] w-[26%]"
                  compId="I616:15443;614:13885;531:320955"
                  comWidth={16}
                  comHeight={18}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Vector One"
                />
                <Text
                  className="font-medium lg:ml-[13px] xl:ml-[15px] ml-[17px] 3xl:ml-[20px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I616:15443;41:968"
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
                compId="I616:15443;531:316827"
                comWidth={91}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_settings_deep_orange_300.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I616:15443;533:294557;533:294556"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="settings One"
                />
                <Text
                  className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                  compId="I616:15443;531:316829"
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

export default EKYCConfirmInformationPage;
