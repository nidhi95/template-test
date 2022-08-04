import React from "react";

import {
  Stack,
  Column,
  Row,
  Img,
  Text,
  Input,
  Button,
  Grid,
  Line,
  List,
  Radio,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Dashboard0TwoPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Stack
        className="bg-white_A700 font-inter lg:h-[1200px] xl:h-[1372px] h-[1542px] 2xl:h-[1544px] 3xl:h-[1852px] mx-[auto] w-[100%]"
        compId="528:301070"
        comWidth={1440}
        comHeight={1542}
        compLeft={0}
        compRight={0}
        compType="Stack"
      >
        <Column
          className="absolute items-end w-[100%]"
          compId="881"
          comWidth={1440}
          comHeight={1542}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Row
            className="bg-white_A700 items-center justify-end p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] w-[100%]"
            compId="43812:47902"
            comWidth={1440}
            comHeight={60}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Img
              src="images/img_microphone.png"
              className="lg:h-[22px] xl:h-[25px] h-[28px] 2xl:h-[29px] 3xl:h-[34px] w-[1%]"
              compId="I43812:47902;43807:13258"
              comWidth={21}
              comHeight={28}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="microphone"
            />
            <Text
              className="font-medium lg:ml-[169px] xl:ml-[193px] ml-[218px] 3xl:ml-[261px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
              compId="I43812:47902;234:259667"
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
              compId="I43812:47902;234:259514"
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
                  compId="I43812:47902;234:259514;234:259505"
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
              compId="I43812:47902;531:315836;5:32"
              comWidth={20}
              comHeight={22}
              compLeft={136}
              compRight={0}
              compType="Image"
              alt="Vector"
            />
            <Stack
              className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] w-[9%]"
              compId="880"
              comWidth={126}
              comHeight={24}
              compLeft={29}
              compRight={0}
              compType="Stack"
            >
              <Img
                src="images/img_user_bluegray_900.png"
                className="absolute lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] inset-y-[0] left-[0] my-[auto] w-[14%]"
                compId="I43812:47902;37:1285;37:1283"
                comWidth={18}
                comHeight={20}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="user"
              />
              <Row
                className="absolute right-[0] w-[90%]"
                compId="590"
                comWidth={113}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <div
                  className="bg-red_600 3xl:h-[10px] lg:h-[7px] h-[8px] 2xl:h-[9px] mt-[1px] outline outline-[2px] outline-white_A700 rounded-radius50 lg:w-[6px] xl:w-[7px] w-[8px] 3xl:w-[9px]"
                  compId="I43812:47902;530:301660"
                  comWidth={8}
                  comHeight={8}
                  compLeft={0}
                  compRight={0}
                  compType="View"
                ></div>
                <Text
                  className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_500 w-[auto]"
                  compId="I43812:47902;37:1272"
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
              compId="I43812:47902;483:292004;43812:47214"
              comWidth={40}
              comHeight={40}
              compLeft={13}
              compRight={13}
              compType="CircleImage"
              alt="SherlockToyFa"
            />
          </Row>
          <Row
            className="bg-gray_50 font-poppins items-center justify-end ml-[auto] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] w-[83%]"
            compId="907"
            comWidth={1199}
            comHeight={1482}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Column
              className="items-center w-[73%]"
              compId="906"
              comWidth={858}
              comHeight={1426}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-center w-[99%]"
                compId="528:301073"
                comWidth={850}
                comHeight={48}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-medium lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]"
                  compId="528:301072"
                  comWidth={93}
                  comHeight={32}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  Overview
                </Text>
                <Button
                  className="flex lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center lg:ml-[427px] xl:ml-[488px] ml-[549px] 3xl:ml-[659px] lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                  compId="528:301074"
                  comWidth={48}
                  comHeight={48}
                  compLeft={549}
                  compRight={0}
                  compType="IconButton"
                  shape="icbRoundedBorder4"
                  variant="icbFillWhiteA700"
                >
                  <Img
                    src="images/img_download.png"
                    className="h-[20px] flex items-center justify-center lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                    compId="528:301074"
                    comWidth={48}
                    comHeight={48}
                    compLeft={549}
                    compRight={0}
                    compType="IconButton"
                    alt="download"
                  />
                </Button>
                <Row
                  className="bg-deep_orange_300 font-inter items-center justify-between xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:p-[10px] xl:p-[11px] p-[13px] 3xl:p-[15px] rounded-radius4 w-[17%]"
                  compId="528:301076"
                  comWidth={148}
                  comHeight={48}
                  compLeft={12}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-medium ml-[4px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                    compId="528:301077"
                    comWidth={60}
                    comHeight={22}
                    compLeft={4}
                    compRight={0}
                    compType="Text"
                  >
                    Add task
                  </Text>
                  <Img
                    src="images/img_plus_white_A700.png"
                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] mr-[3px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                    compId="528:301078"
                    comWidth={20}
                    comHeight={20}
                    compLeft={0}
                    compRight={3}
                    compType="Image"
                    alt="plus"
                  />
                </Row>
              </Row>
              <Column
                className="font-inter items-center lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]"
                compId="913"
                comWidth={858}
                comHeight={1354}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="items-center justify-between w-[100%]"
                  compId="902"
                  comWidth={858}
                  comHeight={384}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Grid
                    className="lg:gap-[15px] xl:gap-[17px] gap-[20px] 3xl:gap-[24px] grid grid-cols-2 w-[43%]"
                    compId="914"
                    comWidth={370}
                    comHeight={384}
                    compLeft={0}
                    compRight={0}
                    compType="Grid"
                  >
                    <Column
                      className="bg-white_A700 items-center lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs1 w-[100%]"
                      compId="556:313242"
                      comWidth={175}
                      comHeight={182}
                      compLeft={0}
                      compRight={195}
                      compType="Column"
                    >
                      <Button
                        className="flex lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                        compId="I556:313242;556:313073"
                        comWidth={48}
                        comHeight={48}
                        compLeft={0}
                        compRight={0}
                        compType="IconButton"
                        shape="icbRoundedBorder4"
                        variant="icbFillGray104"
                      >
                        <Img
                          src="images/img_signal.png"
                          className="h-[18.33px] flex items-center justify-center lg:h-[15px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px]"
                          compId="I556:313242;556:313073"
                          comWidth={48}
                          comHeight={48}
                          compLeft={0}
                          compRight={0}
                          compType="IconButton"
                          alt="signal"
                        />
                      </Button>
                      <Text
                        className="font-bold lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_800 w-[auto]"
                        compId="I556:313242;556:313076"
                        comWidth={36}
                        comHeight={28}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        50+
                      </Text>
                      <Text
                        className="font-normal mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                        compId="I556:313242;556:313077"
                        comWidth={100}
                        comHeight={22}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Available Tasks
                      </Text>
                    </Column>
                    <Column
                      className="bg-white_A700 items-center lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs1 w-[100%]"
                      compId="556:313243"
                      comWidth={175}
                      comHeight={182}
                      compLeft={195}
                      compRight={0}
                      compType="Column"
                    >
                      <Button
                        className="flex lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                        compId="I556:313243;556:313073"
                        comWidth={48}
                        comHeight={48}
                        compLeft={0}
                        compRight={0}
                        compType="IconButton"
                        shape="icbRoundedBorder4"
                        variant="icbFillYellow50"
                      >
                        <Img
                          src="images/img_buttonprimary_amber_300.png"
                          className="flex items-center justify-center"
                          compId="I556:313243;556:313073"
                          comWidth={48}
                          comHeight={48}
                          compLeft={0}
                          compRight={0}
                          compType="IconButton"
                          alt="ButtonPrimary"
                        />
                      </Button>
                      <Text
                        className="font-bold lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_800 w-[auto]"
                        compId="I556:313243;556:313076"
                        comWidth={23}
                        comHeight={28}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        20
                      </Text>
                      <Text
                        className="font-normal mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                        compId="I556:313243;556:313077"
                        comWidth={101}
                        comHeight={22}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Obsolete Tasks
                      </Text>
                    </Column>
                    <Column
                      className="bg-white_A700 lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs1 w-[100%]"
                      compId="556:313245"
                      comWidth={175}
                      comHeight={182}
                      compLeft={0}
                      compRight={195}
                      compType="Column"
                    >
                      <Button
                        className="flex lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                        compId="I556:313245;556:313073"
                        comWidth={48}
                        comHeight={48}
                        compLeft={32}
                        compRight={0}
                        compType="IconButton"
                        shape="icbRoundedBorder4"
                        variant="icbFillGray105"
                      >
                        <Img
                          src="images/img_folder_red_600.png"
                          className="flex items-center justify-center"
                          compId="I556:313245;556:313073"
                          comWidth={48}
                          comHeight={48}
                          compLeft={32}
                          compRight={0}
                          compType="IconButton"
                          alt="folder"
                        />
                      </Button>
                      <Text
                        className="font-bold lg:ml-[29px] xl:ml-[33px] ml-[38px] 3xl:ml-[45px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_800 w-[auto]"
                        compId="I556:313245;556:313076"
                        comWidth={23}
                        comHeight={28}
                        compLeft={38}
                        compRight={0}
                        compType="Text"
                      >
                        23
                      </Text>
                      <Text
                        className="font-normal ml-[2px] lg:mr-[27px] xl:mr-[31px] mr-[35px] 3xl:mr-[42px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                        compId="I556:313245;556:313077"
                        comWidth={74}
                        comHeight={22}
                        compLeft={2}
                        compRight={35}
                        compType="Text"
                      >
                        In Progress
                      </Text>
                    </Column>
                    <Column
                      className="bg-white_A700 lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs1 w-[100%]"
                      compId="556:313246"
                      comWidth={175}
                      comHeight={182}
                      compLeft={195}
                      compRight={0}
                      compType="Column"
                    >
                      <Button
                        className="flex lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                        compId="I556:313246;556:313073"
                        comWidth={48}
                        comHeight={48}
                        compLeft={32}
                        compRight={0}
                        compType="IconButton"
                        shape="icbRoundedBorder4"
                        variant="icbFillGray51"
                      >
                        <Img
                          src="images/img_checkmark_indigo_401.png"
                          className="h-[18.33px] flex items-center justify-center lg:h-[15px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px]"
                          compId="I556:313246;556:313073"
                          comWidth={48}
                          comHeight={48}
                          compLeft={32}
                          compRight={0}
                          compType="IconButton"
                          alt="checkmark"
                        />
                      </Button>
                      <Text
                        className="font-bold lg:ml-[29px] xl:ml-[33px] ml-[38px] 3xl:ml-[45px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_800 w-[auto]"
                        compId="I556:313246;556:313076"
                        comWidth={24}
                        comHeight={28}
                        compLeft={38}
                        compRight={0}
                        compType="Text"
                      >
                        35
                      </Text>
                      <Text
                        className="font-normal ml-[2px] lg:mr-[25px] xl:mr-[29px] mr-[33px] 3xl:mr-[39px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                        compId="I556:313246;556:313077"
                        comWidth={76}
                        comHeight={22}
                        compLeft={2}
                        compRight={33}
                        compType="Text"
                      >
                        Done Tasks
                      </Text>
                    </Column>
                  </Grid>
                  <Column
                    className="bg-white_A700 lg:p-[18px] xl:p-[21px] p-[24px] 3xl:p-[28px] rounded-radius4 shadow-bs1 w-[55%]"
                    compId="556:313805"
                    comWidth={468}
                    comHeight={384}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Row
                      className="items-end justify-between lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[96%]"
                      compId="892"
                      comWidth={404}
                      comHeight={40}
                      compLeft={8}
                      compRight={0}
                      compType="Row"
                    >
                      <Text
                        className="font-bold mb-[4px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                        compId="I556:313805;556:312874"
                        comWidth={84}
                        comHeight={28}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Statistics
                      </Text>
                      <Button
                        className="flex items-center justify-center text-center w-[43%]"
                        compId="I556:313805;43809:21476"
                        comWidth={0}
                        comHeight={40}
                        compLeft={0}
                        compRight={0}
                        compType="Button"
                        leftIcon={
                          <Img
                            src="images/img_calendar.png"
                            className="w-[16.67px] mr-[13px] text-center lg:w-[12px] lg:mr-[10px] xl:w-[14px] xl:mr-[11px] 2xl:w-[16px] 3xl:w-[20px] 3xl:mr-[15px]"
                            compId="I556:313805;43809:21478;5:156"
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
                      className="items-center lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:mt-[21px] xl:mt-[24px] mt-[28px] 3xl:mt-[33px] w-[95%]"
                      compId="893"
                      comWidth={398}
                      comHeight={176}
                      compLeft={8}
                      compRight={0}
                      compType="Row"
                    >
                      <Column
                        className="w-[14%]"
                        compId="I556:313805;556:312875"
                        comWidth={54}
                        comHeight={176}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-normal not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                          compId="I556:313805;556:312876"
                          comWidth={23}
                          comHeight={16}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          800
                        </Text>
                        <Text
                          className="font-normal lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                          compId="I556:313805;556:312877"
                          comWidth={23}
                          comHeight={16}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          600
                        </Text>
                        <Text
                          className="font-normal lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                          compId="I556:313805;556:312878"
                          comWidth={23}
                          comHeight={16}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          400
                        </Text>
                        <Text
                          className="font-normal lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                          compId="I556:313805;556:312879"
                          comWidth={23}
                          comHeight={16}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          200
                        </Text>
                        <Text
                          className="font-normal lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                          compId="I556:313805;556:312880"
                          comWidth={8}
                          comHeight={16}
                          compLeft={15}
                          compRight={0}
                          compType="Text"
                        >
                          0
                        </Text>
                      </Column>
                      <Img
                        src="images/img_frame_176X344.png"
                        className="lg:h-[137px] xl:h-[157px] h-[176px] 2xl:h-[177px] 3xl:h-[212px] w-[86%]"
                        compId="I556:313805;556:312890"
                        comWidth={344}
                        comHeight={176}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Frame"
                      />
                    </Row>
                    <Row
                      className="items-center justify-end ml-[auto] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[84%]"
                      compId="I556:313805;556:312882"
                      comWidth={354}
                      comHeight={16}
                      compLeft={53}
                      compRight={0}
                      compType="Row"
                    >
                      <Text
                        className="font-normal not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                        compId="I556:313805;556:312883"
                        comWidth={25}
                        comHeight={16}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Mon
                      </Text>
                      <Text
                        className="font-normal lg:ml-[26px] xl:ml-[30px] ml-[34px] 3xl:ml-[40px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                        compId="I556:313805;556:312884"
                        comWidth={21}
                        comHeight={16}
                        compLeft={34}
                        compRight={0}
                        compType="Text"
                      >
                        Tue
                      </Text>
                      <Text
                        className="font-normal lg:ml-[27px] xl:ml-[31px] ml-[35px] 3xl:ml-[42px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                        compId="I556:313805;556:312885"
                        comWidth={24}
                        comHeight={16}
                        compLeft={35}
                        compRight={0}
                        compType="Text"
                      >
                        Wed
                      </Text>
                      <Text
                        className="font-normal lg:ml-[27px] xl:ml-[31px] ml-[35px] 3xl:ml-[42px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                        compId="I556:313805;556:312886"
                        comWidth={22}
                        comHeight={16}
                        compLeft={35}
                        compRight={0}
                        compType="Text"
                      >
                        Thu
                      </Text>
                      <Text
                        className="font-normal lg:ml-[26px] xl:ml-[30px] ml-[34px] 3xl:ml-[40px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                        compId="I556:313805;556:312887"
                        comWidth={14}
                        comHeight={16}
                        compLeft={34}
                        compRight={0}
                        compType="Text"
                      >
                        Fri
                      </Text>
                      <Text
                        className="font-normal lg:ml-[26px] xl:ml-[30px] ml-[34px] 3xl:ml-[40px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                        compId="I556:313805;556:312888"
                        comWidth={19}
                        comHeight={16}
                        compLeft={34}
                        compRight={0}
                        compType="Text"
                      >
                        Sat
                      </Text>
                      <Text
                        className="font-normal lg:ml-[26px] xl:ml-[30px] ml-[34px] 3xl:ml-[40px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                        compId="I556:313805;556:312889"
                        comWidth={22}
                        comHeight={16}
                        compLeft={34}
                        compRight={0}
                        compType="Text"
                      >
                        Sun
                      </Text>
                    </Row>
                    <Row
                      className="items-center justify-center lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] lg:ml-[103px] xl:ml-[118px] ml-[133px] 3xl:ml-[159px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] pr-[2px] w-[36%]"
                      compId="I556:313805;556:312917"
                      comWidth={151}
                      comHeight={16}
                      compLeft={133}
                      compRight={0}
                      compType="Row"
                    >
                      <div
                        className="bg-amber_300 lg:h-[5px] h-[6px] 2xl:h-[7px] 3xl:h-[8px] rounded-radius50 lg:w-[4px] xl:w-[5px] w-[6px] 3xl:w-[7px]"
                        compId="I556:313805;556:312920"
                        comWidth={6}
                        comHeight={6}
                        compLeft={0}
                        compRight={0}
                        compType="View"
                      ></div>
                      <Text
                        className="font-medium lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                        compId="I556:313805;556:312921"
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
                        compId="I556:313805;556:312923"
                        comWidth={6}
                        comHeight={6}
                        compLeft={25}
                        compRight={0}
                        compType="View"
                      ></div>
                      <Text
                        className="font-medium lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                        compId="I556:313805;556:312924"
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
                </Row>
                <Row
                  className="items-center justify-between lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]"
                  compId="903"
                  comWidth={858}
                  comHeight={378}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Column
                    className="bg-white_A700 items-center lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs1 w-[43%]"
                    compId="556:313665"
                    comWidth={370}
                    comHeight={378}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Row
                      className="justify-between w-[100%]"
                      compId="887"
                      comWidth={306}
                      comHeight={32}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Text
                        className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                        compId="I556:313665;556:312959"
                        comWidth={73}
                        comHeight={28}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Projects
                      </Text>
                      <Img
                        src="images/img_menu_bluegray_400.png"
                        className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                        compId="I556:313665;556:312960"
                        comWidth={32}
                        comHeight={32}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="menu"
                      />
                    </Row>
                    <Stack
                      className="lg:h-[148px] xl:h-[170px] h-[190px] 2xl:h-[191px] 3xl:h-[229px] lg:mt-[21px] xl:mt-[24px] mt-[28px] 3xl:mt-[33px] lg:w-[147px] xl:w-[169px] w-[190px] 3xl:w-[228px]"
                      compId="I556:313665;556:312961"
                      comWidth={190}
                      comHeight={190}
                      compLeft={0}
                      compRight={0}
                      compType="Stack"
                    >
                      <Stack
                        className="absolute lg:h-[148px] xl:h-[170px] h-[190px] 2xl:h-[191px] 3xl:h-[229px] lg:w-[147px] xl:w-[169px] w-[190px] 3xl:w-[228px]"
                        compId="I556:313665;556:312962"
                        comWidth={190}
                        comHeight={190}
                        compLeft={0}
                        compRight={0}
                        compType="Stack"
                      >
                        <CircularProgressbar
                          className="absolute border-solid lg:h-[148px] xl:h-[170px] h-[190px] 2xl:h-[191px] 3xl:h-[229px] overflow-visible w-[100%]"
                          compId="587"
                          comWidth={190}
                          comHeight={190}
                          compLeft={0}
                          compRight={0}
                          compType="CircleProgressBar"
                          value="17"
                          name="Group587"
                          strokeWidth={1}
                          styles={{
                            trail: { strokeWidth: 1, stroke: "" },
                            path: {
                              strokeLinecap: "square",
                              height: "100%",
                              "transform-origin": "center",
                              transform: "rotate(-23deg)",
                            },
                          }}
                        ></CircularProgressbar>
                        <CircularProgressbar
                          className="absolute border-solid lg:h-[148px] xl:h-[170px] h-[190px] 2xl:h-[191px] 3xl:h-[229px] overflow-visible w-[100%]"
                          compId="588"
                          comWidth={190}
                          comHeight={190}
                          compLeft={0}
                          compRight={0}
                          compType="CircleProgressBar"
                          value="24"
                          name="Group588"
                          strokeWidth={1}
                          styles={{
                            trail: { strokeWidth: 1, stroke: "" },
                            path: {
                              strokeLinecap: "square",
                              height: "100%",
                              "transform-origin": "center",
                              transform: "rotate(51deg)",
                            },
                          }}
                        ></CircularProgressbar>
                      </Stack>
                      <Column
                        className="absolute h-[max-content] inset-y-[0] items-center my-[auto] right-[31%] w-[34%]"
                        compId="I556:313665;556:312966"
                        comWidth={64}
                        comHeight={58}
                        compLeft={0}
                        compRight={59}
                        compType="Column"
                      >
                        <Text
                          className="font-bold lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_800 w-[auto]"
                          compId="I556:313665;556:312967"
                          comWidth={64}
                          comHeight={32}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          230+
                        </Text>
                        <Text
                          className="font-normal mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                          compId="I556:313665;556:312968"
                          comWidth={53}
                          comHeight={22}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          Projects
                        </Text>
                      </Column>
                    </Stack>
                    <Row
                      className="items-center justify-center lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[72%]"
                      compId="I556:313665;556:312969"
                      comWidth={219}
                      comHeight={40}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <div
                        className="bg-green_700 lg:h-[5px] h-[6px] 2xl:h-[7px] 3xl:h-[8px] rounded-radius50 lg:w-[4px] xl:w-[5px] w-[6px] 3xl:w-[7px]"
                        compId="I556:313665;556:312972"
                        comWidth={6}
                        comHeight={6}
                        compLeft={0}
                        compRight={0}
                        compType="View"
                      ></div>
                      <Column
                        className="xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] w-[23%]"
                        compId="I556:313665;556:312973"
                        comWidth={50}
                        comHeight={40}
                        compLeft={12}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                          compId="I556:313665;556:312974"
                          comWidth={27}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          100
                        </Text>
                        <Text
                          className="font-medium xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                          compId="I556:313665;556:312975"
                          comWidth={26}
                          comHeight={16}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          High
                        </Text>
                      </Column>
                      <div
                        className="bg-indigo_401 lg:h-[5px] h-[6px] 2xl:h-[7px] 3xl:h-[8px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] rounded-radius50 lg:w-[4px] xl:w-[5px] w-[6px] 3xl:w-[7px]"
                        compId="I556:313665;556:312978"
                        comWidth={6}
                        comHeight={6}
                        compLeft={12}
                        compRight={0}
                        compType="View"
                      ></div>
                      <Column
                        className="xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] w-[20%]"
                        compId="I556:313665;556:312979"
                        comWidth={44}
                        comHeight={40}
                        compLeft={12}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                          compId="I556:313665;556:312980"
                          comWidth={20}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          30
                        </Text>
                        <Text
                          className="font-medium xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                          compId="I556:313665;556:312981"
                          comWidth={24}
                          comHeight={16}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          Low
                        </Text>
                      </Column>
                      <div
                        className="bg-amber_300 lg:h-[5px] h-[6px] 2xl:h-[7px] 3xl:h-[8px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] rounded-radius50 lg:w-[4px] xl:w-[5px] w-[6px] 3xl:w-[7px]"
                        compId="I556:313665;556:312984"
                        comWidth={6}
                        comHeight={6}
                        compLeft={12}
                        compRight={0}
                        compType="View"
                      ></div>
                      <Column
                        className="xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] w-[21%]"
                        compId="I556:313665;556:312985"
                        comWidth={47}
                        comHeight={40}
                        compLeft={12}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                          compId="I556:313665;556:312986"
                          comWidth={27}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          100
                        </Text>
                        <Text
                          className="font-medium xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                          compId="I556:313665;556:312987"
                          comWidth={47}
                          comHeight={16}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          Medium
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Column
                    className="bg-white_A700 items-center lg:p-[20px] xl:p-[23px] p-[26px] 3xl:p-[31px] rounded-radius4 shadow-bs1 w-[55%]"
                    compId="556:313698"
                    comWidth={468}
                    comHeight={378}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Row
                      className="items-center w-[97%]"
                      compId="I556:313698;556:312927"
                      comWidth={404}
                      comHeight={40}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Text
                        className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                        compId="I556:313698;556:312926"
                        comWidth={109}
                        comHeight={28}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Active tasks
                      </Text>
                      <Button
                        className="font-normal lg:ml-[42px] xl:ml-[48px] ml-[54px] 3xl:ml-[64px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[19%]"
                        compId="I556:313698;556:312928"
                        comWidth={75}
                        comHeight={40}
                        compLeft={54}
                        compRight={0}
                        compType="Button"
                        size="md"
                        variant="FillBluegray900"
                      >
                        Day
                      </Button>
                      <Button
                        className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[19%]"
                        compId="I556:313698;556:312930"
                        comWidth={75}
                        comHeight={40}
                        compLeft={8}
                        compRight={0}
                        compType="Button"
                        size="md"
                        variant="OutlineIndigo50"
                      >
                        Week
                      </Button>
                      <Button
                        className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[19%]"
                        compId="I556:313698;556:312932"
                        comWidth={75}
                        comHeight={40}
                        compLeft={8}
                        compRight={0}
                        compType="Button"
                        size="md"
                        variant="OutlineIndigo50"
                      >
                        Month
                      </Button>
                    </Row>
                    <Row
                      className="items-center lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:pr-[202px] xl:pr-[231px] pr-[260px] 3xl:pr-[312px] w-[96%]"
                      compId="I556:313698;556:312935"
                      comWidth={401}
                      comHeight={48}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Img
                        src="images/img_mobile.png"
                        className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                        compId="I556:313698;556:312936;1:1488"
                        comWidth={20}
                        comHeight={20}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="mobile"
                      />
                      <Column
                        className="items-center lg:ml-[17px] xl:ml-[19px] ml-[22px] 3xl:ml-[26px] w-[70%]"
                        compId="I556:313698;556:312937"
                        comWidth={99}
                        comHeight={48}
                        compLeft={22}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-medium xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                          compId="I556:313698;556:312938"
                          comWidth={99}
                          comHeight={16}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          ACKERMAN_LHN
                        </Text>
                        <Row
                          className="items-center lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[100%]"
                          compId="I556:313698;556:312939"
                          comWidth={99}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <Line
                            className="bg-red_600 lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] w-[4px]"
                            compId="I556:313698;556:312940"
                            comWidth={4}
                            comHeight={16}
                            compLeft={0}
                            compRight={0}
                            compType="Line"
                          />
                          <Text
                            className="font-medium lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                            compId="I556:313698;556:312941"
                            comWidth={87}
                            comHeight={24}
                            compLeft={8}
                            compRight={0}
                            compType="Text"
                          >
                            <span className="text-bluegray_900 font-inter">
                              Changelog Revamp{" "}
                            </span>
                            <span className="text-red_600 font-inter">
                              #ver 1.0
                            </span>
                            <span className="text-bluegray_900 font-inter">
                              {" "}
                              Homescreen{" "}
                            </span>
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Line
                      className="bg-indigo_50 h-[1px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[1px]"
                      compId="I556:313698;556:312942"
                      comWidth={1}
                      comHeight={1}
                      compLeft={0}
                      compRight={0}
                      compType="Line"
                    />
                    <Row
                      className="items-center lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] lg:pr-[232px] xl:pr-[265px] pr-[299px] 3xl:pr-[359px] w-[96%]"
                      compId="I556:313698;556:312943"
                      comWidth={401}
                      comHeight={48}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Button
                        className="flex lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] items-center justify-center lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                        compId="I556:313698;556:312944;30146:26"
                        comWidth={20}
                        comHeight={20}
                        compLeft={0}
                        compRight={0}
                        compType="IconButton"
                        shape="icbRoundedBorder4"
                        size="smIcn"
                        variant="icbFillDeeporange300"
                      >
                        <Img
                          src="images/img_vector_white_A700_20X20.png"
                          className="flex items-center justify-center"
                          compId="I556:313698;556:312944;30146:26"
                          comWidth={20}
                          comHeight={20}
                          compLeft={0}
                          compRight={0}
                          compType="IconButton"
                          alt="Vector One"
                        />
                      </Button>
                      <Column
                        className="items-center lg:ml-[17px] xl:ml-[19px] ml-[22px] 3xl:ml-[26px] w-[59%]"
                        compId="I556:313698;556:312945"
                        comWidth={60}
                        comHeight={48}
                        compLeft={22}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-medium xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                          compId="I556:313698;556:312946"
                          comWidth={60}
                          comHeight={16}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          JOHNSON
                        </Text>
                        <Row
                          className="items-center lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[100%]"
                          compId="I556:313698;556:312947"
                          comWidth={60}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <Line
                            className="bg-deep_orange_300 lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] w-[4px]"
                            compId="I556:313698;556:312948"
                            comWidth={4}
                            comHeight={16}
                            compLeft={0}
                            compRight={0}
                            compType="Line"
                          />
                          <Text
                            className="font-medium lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                            compId="I556:313698;556:312949"
                            comWidth={48}
                            comHeight={24}
                            compLeft={8}
                            compRight={0}
                            compType="Text"
                          >
                            Create user flow for Data Projects
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Line
                      className="bg-indigo_50 h-[1px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[1px]"
                      compId="I556:313698;556:312950"
                      comWidth={1}
                      comHeight={1}
                      compLeft={0}
                      compRight={0}
                      compType="Line"
                    />
                    <Row
                      className="items-center lg:mb-[4px] xl:mb-[5px] mb-[6px] 3xl:mb-[7px] lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] w-[96%]"
                      compId="I556:313698;556:312951"
                      comWidth={401}
                      comHeight={72}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Img
                        src="images/img_mobile.png"
                        className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                        compId="I556:313698;556:312952;1:1488"
                        comWidth={20}
                        comHeight={20}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="mobile One"
                      />
                      <Column
                        className="lg:ml-[17px] xl:ml-[19px] ml-[22px] 3xl:ml-[26px] w-[90%]"
                        compId="I556:313698;556:312953"
                        comWidth={359}
                        comHeight={72}
                        compLeft={22}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-medium xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                          compId="I556:313698;556:312954"
                          comWidth={35}
                          comHeight={16}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          AVORI
                        </Text>
                        <Row
                          className="items-center lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[96%]"
                          compId="I556:313698;556:312955"
                          comWidth={346}
                          comHeight={48}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <Line
                            className="bg-indigo_401 lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] w-[4px]"
                            compId="I556:313698;556:312956"
                            comWidth={4}
                            comHeight={16}
                            compLeft={0}
                            compRight={0}
                            compType="Line"
                          />
                          <Text
                            className="font-medium lg:leading-[18px] xl:leading-[21px] leading-[24.00px] 2xl:leading-[24px] 3xl:leading-[28px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[97%]"
                            compId="I556:313698;556:312957"
                            comWidth={334}
                            comHeight={48}
                            compLeft={8}
                            compRight={0}
                            compType="Text"
                          >
                            Gather to discuss about new project deriving from
                            Avocado
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                  </Column>
                </Row>
                <Column
                  className="bg-white_A700 lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:p-[23px] xl:p-[26px] p-[30px] 3xl:p-[36px] rounded-radius4 shadow-bs1 w-[100%]"
                  compId="556:313736"
                  comWidth={858}
                  comHeight={552}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="justify-between mt-[2px] w-[100%]"
                    compId="889"
                    comWidth={795}
                    comHeight={32}
                    compLeft={2}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                      compId="I556:313736;556:312989"
                      comWidth={122}
                      comHeight={28}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Posting Tasks
                    </Text>
                    <Img
                      src="images/img_menu_bluegray_400.png"
                      className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                      compId="I556:313736;556:313015"
                      comWidth={32}
                      comHeight={32}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="menu One"
                    />
                  </Row>
                  <Text
                    className="font-normal ml-[2px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]"
                    compId="I556:313736;556:312990"
                    comWidth={274}
                    comHeight={22}
                    compLeft={2}
                    compRight={0}
                    compType="Text"
                  >
                    <span className="text-bluegray_900 font-inter underline">
                      Crucial tasks
                    </span>
                    <span className="text-bluegray_900 font-inter">/ </span>
                    <span className="text-bluegray_900 font-inter underline">
                      Urgent tasks
                    </span>
                    <span className="text-bluegray_900 font-inter">/ </span>
                    <span className="text-bluegray_900 font-inter underline">
                      Normal tasks
                    </span>
                  </Text>
                  <Row
                    className="items-center mb-[2px] lg:mt-[22px] xl:mt-[25px] mt-[29px] 3xl:mt-[34px] w-[100%]"
                    compId="890"
                    comWidth={796}
                    comHeight={401}
                    compLeft={2}
                    compRight={0}
                    compType="Row"
                  >
                    <Stack
                      className="lg:h-[312px] xl:h-[357px] h-[401px] 2xl:h-[402px] 3xl:h-[482px] w-[100%]"
                      compId="877"
                      comWidth={795}
                      comHeight={401}
                      compLeft={0}
                      compRight={0}
                      compType="Stack"
                    >
                      <Stack
                        className="absolute lg:h-[312px] xl:h-[357px] h-[401px] 2xl:h-[402px] 3xl:h-[482px] w-[100%]"
                        compId="882"
                        comWidth={795}
                        comHeight={401}
                        compLeft={0}
                        compRight={0}
                        compType="Stack"
                      >
                        <Stack
                          className="absolute lg:h-[312px] xl:h-[357px] h-[401px] 2xl:h-[402px] 3xl:h-[482px] w-[100%]"
                          compId="883"
                          comWidth={795}
                          comHeight={401}
                          compLeft={0}
                          compRight={0}
                          compType="Stack"
                        >
                          <Row
                            className="absolute bg-gray_50 items-center lg:pr-[21px] xl:pr-[24px] pr-[28px] 3xl:pr-[33px] top-[0] w-[100%]"
                            compId="I556:313736;556:312991"
                            comWidth={795}
                            comHeight={48}
                            compLeft={0}
                            compRight={0}
                            compType="Row"
                          >
                            <Stack
                              className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] w-[13%]"
                              compId="878"
                              comWidth={102}
                              comHeight={48}
                              compLeft={0}
                              compRight={0}
                              compType="Stack"
                            >
                              <Text
                                className="absolute bottom-[21%] font-normal not-italic right-[25%] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]"
                                compId="I556:313736;556:312992"
                                comWidth={32}
                                comHeight={22}
                                compLeft={0}
                                compRight={26}
                                compType="Text"
                              >
                                Time
                              </Text>
                              <Button
                                className="absolute font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[100%]"
                                compId="I556:313736;556:312993"
                                comWidth={102}
                                comHeight={48}
                                compLeft={0}
                                compRight={0}
                                compType="Button"
                                size="lg"
                                variant="FillDeeporange300"
                              >
                                Time
                              </Button>
                            </Stack>
                            <Text
                              className="font-medium lg:ml-[58px] xl:ml-[66px] ml-[75px] 3xl:ml-[90px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                              compId="I556:313736;556:312997"
                              comWidth={49}
                              comHeight={22}
                              compLeft={75}
                              compRight={0}
                              compType="Text"
                            >
                              Mon 10
                            </Text>
                            <Text
                              className="font-medium ml-[103px] 3xl:ml-[123px] lg:ml-[80px] xl:ml-[91px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                              compId="I556:313736;556:312999"
                              comWidth={42}
                              comHeight={22}
                              compLeft={103}
                              compRight={0}
                              compType="Text"
                            >
                              Tue 11
                            </Text>
                            <Text
                              className="font-medium lg:ml-[40px] xl:ml-[46px] ml-[52px] 3xl:ml-[62px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                              compId="I556:313736;556:313001"
                              comWidth={49}
                              comHeight={22}
                              compLeft={52}
                              compRight={0}
                              compType="Text"
                            >
                              Wed 12
                            </Text>
                            <Text
                              className="font-medium lg:ml-[41px] xl:ml-[47px] ml-[53px] 3xl:ml-[63px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                              compId="I556:313736;556:313003"
                              comWidth={45}
                              comHeight={22}
                              compLeft={53}
                              compRight={0}
                              compType="Text"
                            >
                              Thu 13
                            </Text>
                            <Text
                              className="font-medium lg:ml-[45px] xl:ml-[51px] ml-[58px] 3xl:ml-[69px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                              compId="I556:313736;556:313005"
                              comWidth={36}
                              comHeight={22}
                              compLeft={58}
                              compRight={0}
                              compType="Text"
                            >
                              Fri 14
                            </Text>
                            <Text
                              className="font-medium lg:ml-[45px] xl:ml-[52px] ml-[59px] 3xl:ml-[70px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                              compId="I556:313736;556:313007"
                              comWidth={42}
                              comHeight={22}
                              compLeft={59}
                              compRight={0}
                              compType="Text"
                            >
                              Sat 15
                            </Text>
                          </Row>
                          <Line
                            className="absolute bg-indigo_50 lg:h-[312px] xl:h-[357px] h-[401px] 2xl:h-[402px] 3xl:h-[482px] left-[37%] w-[1px]"
                            compId="I556:313736;556:313009"
                            comWidth={1}
                            comHeight={401}
                            compLeft={295}
                            compRight={0}
                            compType="Line"
                          />
                          <Line
                            className="absolute bg-indigo_50 lg:h-[312px] xl:h-[357px] h-[401px] 2xl:h-[402px] 3xl:h-[482px] inset-x-[50%] w-[1px]"
                            compId="I556:313736;556:313010"
                            comWidth={1}
                            comHeight={401}
                            compLeft={395}
                            compRight={399}
                            compType="Line"
                          />
                          <Line
                            className="absolute bg-indigo_50 lg:h-[312px] xl:h-[357px] h-[401px] 2xl:h-[402px] 3xl:h-[482px] right-[38%] w-[1px]"
                            compId="I556:313736;556:313011"
                            comWidth={1}
                            comHeight={401}
                            compLeft={0}
                            compRight={299}
                            compType="Line"
                          />
                          <Line
                            className="absolute bg-indigo_50 lg:h-[312px] xl:h-[357px] h-[401px] 2xl:h-[402px] 3xl:h-[482px] right-[25%] w-[1px]"
                            compId="I556:313736;556:313012"
                            comWidth={1}
                            comHeight={401}
                            compLeft={0}
                            compRight={199}
                            compType="Line"
                          />
                          <Line
                            className="absolute bg-indigo_50 lg:h-[312px] xl:h-[357px] h-[401px] 2xl:h-[402px] 3xl:h-[482px] right-[12%] w-[1px]"
                            compId="I556:313736;556:313013"
                            comWidth={1}
                            comHeight={401}
                            compLeft={0}
                            compRight={99}
                            compType="Line"
                          />
                        </Stack>
                        <Column
                          className="absolute bottom-[7%] left-[2%] w-[5%]"
                          compId="I556:313736;556:313016"
                          comWidth={39}
                          comHeight={304}
                          compLeft={13}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-normal ml-[4px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                            compId="I556:313736;556:313017"
                            comWidth={35}
                            comHeight={16}
                            compLeft={4}
                            compRight={0}
                            compType="Text"
                          >
                            09 am
                          </Text>
                          <Text
                            className="font-normal ml-[2px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                            compId="I556:313736;556:313018"
                            comWidth={34}
                            comHeight={16}
                            compLeft={2}
                            compRight={0}
                            compType="Text"
                          >
                            10 am
                          </Text>
                          <Text
                            className="font-normal lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                            compId="I556:313736;556:313019"
                            comWidth={32}
                            comHeight={16}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            11 am
                          </Text>
                          <Text
                            className="font-normal ml-[2px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                            compId="I556:313736;556:313020"
                            comWidth={33}
                            comHeight={16}
                            compLeft={2}
                            compRight={0}
                            compType="Text"
                          >
                            12 pm
                          </Text>
                          <Text
                            className="font-normal ml-[2px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                            compId="I556:313736;556:313021"
                            comWidth={34}
                            comHeight={16}
                            compLeft={2}
                            compRight={0}
                            compType="Text"
                          >
                            01 pm
                          </Text>
                          <Text
                            className="font-normal ml-[4px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                            compId="I556:313736;556:313022"
                            comWidth={35}
                            comHeight={16}
                            compLeft={4}
                            compRight={0}
                            compType="Text"
                          >
                            02 pm
                          </Text>
                          <Text
                            className="font-normal ml-[3px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                            compId="I556:313736;556:313023"
                            comWidth={36}
                            comHeight={16}
                            compLeft={3}
                            compRight={0}
                            compType="Text"
                          >
                            03 pm
                          </Text>
                        </Column>
                        <Line
                          className="absolute bg-indigo_50 bottom-[7%] h-[1px] right-[0] rotate-[90deg] w-[1px]"
                          compId="I556:313736;556:313025"
                          comWidth={1}
                          comHeight={1}
                          compLeft={0}
                          compRight={0}
                          compType="Line"
                        />
                        <Line
                          className="absolute bg-indigo_50 bottom-[19%] h-[1px] right-[0] rotate-[90deg] w-[1px]"
                          compId="I556:313736;556:313026"
                          comWidth={1}
                          comHeight={1}
                          compLeft={0}
                          compRight={0}
                          compType="Line"
                        />
                        <Line
                          className="absolute bg-indigo_50 bottom-[31%] h-[1px] right-[0] rotate-[90deg] w-[1px]"
                          compId="I556:313736;556:313027"
                          comWidth={1}
                          comHeight={1}
                          compLeft={0}
                          compRight={0}
                          compType="Line"
                        />
                        <Line
                          className="absolute bg-indigo_50 bottom-[43%] h-[1px] right-[0] rotate-[90deg] w-[1px]"
                          compId="I556:313736;556:313028"
                          comWidth={1}
                          comHeight={1}
                          compLeft={0}
                          compRight={0}
                          compType="Line"
                        />
                        <Line
                          className="absolute bg-indigo_50 h-[1px] right-[0] rotate-[90deg] top-[44%] w-[1px]"
                          compId="I556:313736;556:313029"
                          comWidth={1}
                          comHeight={1}
                          compLeft={0}
                          compRight={0}
                          compType="Line"
                        />
                        <Line
                          className="absolute bg-indigo_50 h-[1px] right-[0] rotate-[90deg] top-[32%] w-[1px]"
                          compId="I556:313736;556:313030"
                          comWidth={1}
                          comHeight={1}
                          compLeft={0}
                          compRight={0}
                          compType="Line"
                        />
                        <Line
                          className="absolute bg-indigo_50 h-[1px] right-[0] rotate-[90deg] top-[20%] w-[1px]"
                          compId="I556:313736;556:313031"
                          comWidth={1}
                          comHeight={1}
                          compLeft={0}
                          compRight={0}
                          compType="Line"
                        />
                      </Stack>
                      <Row
                        className="absolute bg-white_A700 bottom-[3%] items-center justify-center lg:pr-[20px] xl:pr-[23px] pr-[26px] 3xl:pr-[31px] right-[38%] rounded-radius4 shadow-bs1 w-[12%]"
                        compId="909"
                        comWidth={99}
                        comHeight={137}
                        compLeft={0}
                        compRight={300}
                        compType="Row"
                      >
                        <Line
                          className="bg-indigo_401 lg:h-[107px] xl:h-[122px] h-[137px] 2xl:h-[138px] 3xl:h-[165px] rounded-radius2 w-[4px]"
                          compId="I556:313736;556:313040"
                          comWidth={4}
                          comHeight={137}
                          compLeft={0}
                          compRight={0}
                          compType="Line"
                        />
                        <Column
                          className="lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] w-[73%]"
                          compId="908"
                          comWidth={53}
                          comHeight={105}
                          compLeft={16}
                          compRight={0}
                          compType="Column"
                        >
                          <Button
                            className="font-poppins font-semibold text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-center w-[92%]"
                            compId="I556:313736;556:313037"
                            comWidth={49}
                            comHeight={24}
                            compLeft={0}
                            compRight={0}
                            compType="Button"
                            size="sm"
                            variant="FillIndigo401"
                          >
                            #2011
                          </Button>
                          <Text
                            className="font-inter font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                            compId="I556:313736;556:313039"
                            comWidth={53}
                            comHeight={22}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            Meeting
                          </Text>
                          <Stack
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[21px] xl:mt-[24px] mt-[27px] 3xl:mt-[32px] w-[68%]"
                            compId="I556:313736;556:313034"
                            comWidth={36}
                            comHeight={24}
                            compLeft={0}
                            compRight={0}
                            compType="Stack"
                          >
                            <Img
                              src="images/img_robototoyfacefi.png"
                              className="absolute lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] left-[0] rounded-radius50 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                              compId="I556:313736;556:313035;341:279749"
                              comWidth={24}
                              comHeight={24}
                              compLeft={0}
                              compRight={0}
                              compType="CircleImage"
                              alt="RobotoToyFaceFi"
                            />
                            <Img
                              src="images/img_fidenza978toy.png"
                              className="absolute lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] right-[0] rounded-radius50 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                              compId="I556:313736;556:313036;444:290026"
                              comWidth={24}
                              comHeight={24}
                              compLeft={0}
                              compRight={0}
                              compType="CircleImage"
                              alt="Fidenza978Toy"
                            />
                          </Stack>
                        </Column>
                      </Row>
                      <Row
                        className="absolute bg-white_A700 items-center justify-center left-[17%] lg:pr-[37px] xl:pr-[42px] pr-[48px] 3xl:pr-[57px] rounded-radius4 shadow-bs1 top-[18%] w-[21%]"
                        compId="911"
                        comWidth={167}
                        comHeight={171}
                        compLeft={139}
                        compRight={0}
                        compType="Row"
                      >
                        <Line
                          className="bg-green_700 lg:h-[133px] xl:h-[153px] h-[171px] 2xl:h-[172px] 3xl:h-[206px] rounded-radius2 w-[4px]"
                          compId="I556:313736;556:313049"
                          comWidth={4}
                          comHeight={171}
                          compLeft={0}
                          compRight={0}
                          compType="Line"
                        />
                        <Column
                          className="lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] w-[83%]"
                          compId="910"
                          comWidth={99}
                          comHeight={139}
                          compLeft={16}
                          compRight={0}
                          compType="Column"
                        >
                          <Button
                            className="font-poppins font-semibold text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-center w-[94%]"
                            compId="I556:313736;556:313046"
                            comWidth={93}
                            comHeight={24}
                            compLeft={0}
                            compRight={0}
                            compType="Button"
                            size="sm"
                            variant="FillDeeporange300"
                          >
                            #Data projects
                          </Button>
                          <Text
                            className="font-inter font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                            compId="I556:313736;556:313048"
                            comWidth={99}
                            comHeight={22}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            Revamp UI, UX
                          </Text>
                          <Stack
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[47px] xl:mt-[54px] mt-[61px] 3xl:mt-[73px] w-[36%]"
                            compId="I556:313736;556:313043"
                            comWidth={36}
                            comHeight={24}
                            compLeft={0}
                            compRight={0}
                            compType="Stack"
                          >
                            <Img
                              src="images/img_robototoyfacefi.png"
                              className="absolute lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] left-[0] rounded-radius50 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                              compId="I556:313736;556:313044;341:279749"
                              comWidth={24}
                              comHeight={24}
                              compLeft={0}
                              compRight={0}
                              compType="CircleImage"
                              alt="RobotoToyFaceFi One"
                            />
                            <Img
                              src="images/img_fidenza978toy.png"
                              className="absolute lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] right-[0] rounded-radius50 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                              compId="I556:313736;556:313045;444:290026"
                              comWidth={24}
                              comHeight={24}
                              compLeft={0}
                              compRight={0}
                              compType="CircleImage"
                              alt="Fidenza978Toy One"
                            />
                          </Stack>
                        </Column>
                      </Row>
                    </Stack>
                    <Line
                      className="bg-indigo_50 lg:h-[312px] xl:h-[357px] h-[401px] 2xl:h-[402px] 3xl:h-[482px] w-[1px]"
                      compId="I556:313736;556:313014"
                      comWidth={1}
                      comHeight={401}
                      compLeft={0}
                      compRight={0}
                      compType="Line"
                    />
                  </Row>
                </Column>
              </Column>
            </Column>
            <Column
              className="bg-white_A700 font-inter lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs1 w-[25%]"
              compId="593:299016"
              comWidth={297}
              comHeight={1482}
              compLeft={20}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-center justify-between w-[100%]"
                compId="I593:299016;593:298893"
                comWidth={233}
                comHeight={40}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Button
                  className="flex lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                  compId="I593:299016;593:298894"
                  comWidth={40}
                  comHeight={40}
                  compLeft={0}
                  compRight={0}
                  compType="IconButton"
                >
                  <Img
                    src="images/img_arrowdown.png"
                    className="flex items-center justify-center"
                    compId="I593:299016;593:298894"
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
                  compId="I593:299016;593:298896"
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
                  compId="I593:299016;593:298897"
                  comWidth={40}
                  comHeight={40}
                  compLeft={0}
                  compRight={0}
                  compType="IconButton"
                >
                  <Img
                    src="images/img_arrowright_bluegray_900.png"
                    className="flex items-center justify-center"
                    compId="I593:299016;593:298897"
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
                compId="915"
                comWidth={232}
                comHeight={59}
                compLeft={0}
                compRight={0}
                compType="List"
                orientation="vertical"
              >
                <Row
                  className="items-center justify-between my-[10.5px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] w-[100%]"
                  compId="I593:299016;593:298900"
                  comWidth={232}
                  comHeight={19}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                    compId="I593:299016;593:298901"
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
                    compId="I593:299016;593:298902"
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
                    compId="I593:299016;593:298903"
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
                    compId="I593:299016;593:298904"
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
                    compId="I593:299016;593:298905"
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
                    compId="I593:299016;593:298906"
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
                    compId="I593:299016;593:298907"
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
                  compId="I593:299016;593:299004"
                  comWidth={233}
                  comHeight={1}
                  compLeft={0}
                  compRight={0}
                  compType="Line"
                />
                <Row
                  className="items-center justify-between my-[10.5px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] w-[100%]"
                  compId="I593:299016;593:298909"
                  comWidth={232}
                  comHeight={19}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                    compId="I593:299016;593:298910"
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
                    compId="I593:299016;593:298911"
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
                    compId="I593:299016;593:298912"
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
                    compId="I593:299016;593:298913"
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
                    compId="I593:299016;593:298914"
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
                    compId="I593:299016;593:298915"
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
                    compId="I593:299016;593:298916"
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
                compId="916"
                comWidth={231}
                comHeight={56}
                compLeft={2}
                compRight={0}
                compType="List"
                orientation="vertical"
              >
                <Row
                  className="items-center justify-between ml-[2px] lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] w-[99%]"
                  compId="I593:299016;593:298917"
                  comWidth={229}
                  comHeight={22}
                  compLeft={2}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                    compId="I593:299016;593:298918"
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
                    compId="I593:299016;593:298919"
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
                    compId="I593:299016;593:298920"
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
                    compId="I593:299016;593:298921"
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
                    compId="I593:299016;593:298922"
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
                    compId="I593:299016;593:298923"
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
                    compId="I593:299016;593:298924"
                    comWidth={9}
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
                  compId="I593:299016;593:299004"
                  comWidth={233}
                  comHeight={1}
                  compLeft={0}
                  compRight={0}
                  compType="Line"
                />
                <Row
                  className="items-center justify-between lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] w-[100%]"
                  compId="I593:299016;593:298925"
                  comWidth={231}
                  comHeight={22}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                    compId="I593:299016;593:298926"
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
                    compId="I593:299016;593:298927"
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
                    compId="I593:299016;593:298928"
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
                    compId="I593:299016;593:298929"
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
                    compId="I593:299016;593:298930"
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
                    compId="I593:299016;593:298931"
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
                    compId="I593:299016;593:298932"
                    comWidth={12}
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
                className="items-center ml-[3px] mt-[4px] w-[99%]"
                compId="I593:299016;593:298933"
                comWidth={230}
                comHeight={38}
                compLeft={3}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                  compId="I593:299016;593:298937"
                  comWidth={16}
                  comHeight={22}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  19
                </Text>
                <Text
                  className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                  compId="I593:299016;593:298938"
                  comWidth={17}
                  comHeight={22}
                  compLeft={24}
                  compRight={0}
                  compType="Text"
                >
                  20
                </Text>
                <Text
                  className="font-normal lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                  compId="I593:299016;593:298939"
                  comWidth={15}
                  comHeight={22}
                  compLeft={25}
                  compRight={0}
                  compType="Text"
                >
                  21
                </Text>
                <Text
                  className="font-normal lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                  compId="I593:299016;593:298940"
                  comWidth={16}
                  comHeight={22}
                  compLeft={23}
                  compRight={0}
                  compType="Text"
                >
                  22
                </Text>
                <Text
                  className="font-normal lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                  compId="I593:299016;593:298941"
                  comWidth={17}
                  comHeight={22}
                  compLeft={15}
                  compRight={0}
                  compType="Text"
                >
                  23
                </Text>
                <Stack
                  className="lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] lg:w-[29px] xl:w-[33px] w-[38px] 3xl:w-[45px]"
                  compId="879"
                  comWidth={38}
                  comHeight={38}
                  compLeft={6}
                  compRight={0}
                  compType="Stack"
                >
                  <div
                    className="absolute bg-deep_orange_300 lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                    compId="I593:299016;593:298934"
                    comWidth={32}
                    comHeight={32}
                    compLeft={3}
                    compRight={3}
                    compType="View"
                  ></div>
                  <Column
                    className="absolute bg-gray_104 lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-end px-[3px] rounded-radius50 w-[100%]"
                    compId="82"
                    comWidth={38}
                    comHeight={38}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-medium lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-deep_orange_300 w-[auto]"
                      compId="I593:299016;593:298942"
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
                      compId="I593:299016;593:298936"
                      comWidth={4}
                      comHeight={4}
                      compLeft={0}
                      compRight={0}
                      compType="View"
                    ></div>
                  </Column>
                </Stack>
                <Text
                  className="font-normal ml-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                  compId="I593:299016;593:298943"
                  comWidth={14}
                  comHeight={22}
                  compLeft={4}
                  compRight={0}
                  compType="Text"
                >
                  25
                </Text>
              </Row>
              <Row
                className="items-center ml-[1px] mt-[4px] w-[73%]"
                compId="I593:299016;593:298944"
                comWidth={171}
                comHeight={19}
                compLeft={1}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                  compId="I593:299016;593:298945"
                  comWidth={17}
                  comHeight={19}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  26
                </Text>
                <Text
                  className="font-normal lg:ml-[20px] xl:ml-[23px] ml-[26px] 3xl:ml-[31px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                  compId="I593:299016;593:298946"
                  comWidth={16}
                  comHeight={19}
                  compLeft={26}
                  compRight={0}
                  compType="Text"
                >
                  27
                </Text>
                <Text
                  className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                  compId="I593:299016;593:298947"
                  comWidth={17}
                  comHeight={19}
                  compLeft={24}
                  compRight={0}
                  compType="Text"
                >
                  28
                </Text>
                <Text
                  className="font-normal lg:ml-[16px] xl:ml-[18px] ml-[21px] 3xl:ml-[25px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                  compId="I593:299016;593:298948"
                  comWidth={17}
                  comHeight={19}
                  compLeft={21}
                  compRight={0}
                  compType="Text"
                >
                  29
                </Text>
                <Text
                  className="font-normal lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                  compId="I593:299016;593:298949"
                  comWidth={18}
                  comHeight={19}
                  compLeft={15}
                  compRight={0}
                  compType="Text"
                >
                  30
                </Text>
              </Row>
              <Row
                className="font-poppins items-center justify-between lg:mt-[49px] xl:mt-[56px] mt-[64px] 3xl:mt-[76px] w-[100%]"
                compId="897"
                comWidth={233}
                comHeight={32}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-medium lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                  compId="I593:299016;593:298892"
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
                  compId="I593:299016;593:298951"
                  comWidth={32}
                  comHeight={32}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="menu Two"
                />
              </Row>
              <Text
                className="font-medium lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                compId="I593:299016;593:298953"
                comWidth={88}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                Feb 24, 2022
              </Text>
              <Text
                className="font-medium lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                compId="I593:299016;593:298956"
                comWidth={107}
                comHeight={16}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                8:00 AM -9:00 AM
              </Text>
              <Row
                className="font-inter items-center lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[46%]"
                compId="I593:299016;593:298957"
                comWidth={107}
                comHeight={48}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Line
                  className="bg-red_600 lg:h-[37px] xl:h-[42px] h-[47px] 2xl:h-[48px] 3xl:h-[57px] w-[4px]"
                  compId="I593:299016;593:298958"
                  comWidth={4}
                  comHeight={47}
                  compLeft={0}
                  compRight={0}
                  compType="Line"
                />
                <Text
                  className="font-medium lg:leading-[18px] xl:leading-[21px] leading-[24.00px] 2xl:leading-[24px] 3xl:leading-[28px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[89%]"
                  compId="I593:299016;593:298959"
                  comWidth={95}
                  comHeight={48}
                  compLeft={8}
                  compRight={0}
                  compType="Text"
                >
                  Changelog Revamp Homescreen
                </Text>
              </Row>
              <Text
                className="font-medium lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                compId="I593:299016;593:298962"
                comWidth={107}
                comHeight={16}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                8:00 AM -9:00 AM
              </Text>
              <Row
                className="font-inter items-center lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[46%]"
                compId="I593:299016;593:298963"
                comWidth={107}
                comHeight={48}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Line
                  className="bg-indigo_401 lg:h-[37px] xl:h-[42px] h-[47px] 2xl:h-[48px] 3xl:h-[57px] w-[4px]"
                  compId="I593:299016;593:298964"
                  comWidth={4}
                  comHeight={47}
                  compLeft={0}
                  compRight={0}
                  compType="Line"
                />
                <Text
                  className="font-medium lg:leading-[18px] xl:leading-[21px] leading-[24.00px] 2xl:leading-[24px] 3xl:leading-[28px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[89%]"
                  compId="I593:299016;593:298965"
                  comWidth={95}
                  comHeight={48}
                  compLeft={8}
                  compRight={0}
                  compType="Text"
                >
                  Create user flow for Data Projects
                </Text>
              </Row>
              <Text
                className="font-medium lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                compId="I593:299016;593:298968"
                comWidth={107}
                comHeight={16}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                8:00 AM -9:00 AM
              </Text>
              <Row
                className="font-inter items-center lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[46%]"
                compId="I593:299016;593:298969"
                comWidth={107}
                comHeight={48}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Line
                  className="bg-green_700 lg:h-[37px] xl:h-[42px] h-[47px] 2xl:h-[48px] 3xl:h-[57px] w-[4px]"
                  compId="I593:299016;593:298970"
                  comWidth={4}
                  comHeight={47}
                  compLeft={0}
                  compRight={0}
                  compType="Line"
                />
                <Text
                  className="font-medium lg:leading-[18px] xl:leading-[21px] leading-[24.00px] 2xl:leading-[24px] 3xl:leading-[28px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[89%]"
                  compId="I593:299016;593:298971"
                  comWidth={95}
                  comHeight={48}
                  compLeft={8}
                  compRight={0}
                  compType="Text"
                >
                  Gather to discuss about new project deriving
                </Text>
              </Row>
              <Text
                className="font-medium lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                compId="I593:299016;593:298974"
                comWidth={107}
                comHeight={16}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                8:00 AM -9:00 AM
              </Text>
              <Row
                className="font-inter items-center lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[46%]"
                compId="I593:299016;593:298975"
                comWidth={107}
                comHeight={48}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Line
                  className="bg-indigo_401 lg:h-[37px] xl:h-[42px] h-[47px] 2xl:h-[48px] 3xl:h-[57px] w-[4px]"
                  compId="I593:299016;593:298976"
                  comWidth={4}
                  comHeight={47}
                  compLeft={0}
                  compRight={0}
                  compType="Line"
                />
                <Text
                  className="font-medium lg:leading-[18px] xl:leading-[21px] leading-[24.00px] 2xl:leading-[24px] 3xl:leading-[28px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[89%]"
                  compId="I593:299016;593:298977"
                  comWidth={95}
                  comHeight={48}
                  compLeft={8}
                  compRight={0}
                  compType="Text"
                >
                  Urgent meeting with CEO
                </Text>
              </Row>
              <Text
                className="font-medium lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                compId="I593:299016;593:298979"
                comWidth={88}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                Feb 24, 2022
              </Text>
              <Text
                className="font-medium lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                compId="I593:299016;593:298982"
                comWidth={107}
                comHeight={16}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                8:00 AM -9:00 AM
              </Text>
              <Row
                className="font-inter items-center lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[46%]"
                compId="I593:299016;593:298983"
                comWidth={107}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Line
                  className="bg-red_600 lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] w-[4px]"
                  compId="I593:299016;593:298984"
                  comWidth={4}
                  comHeight={24}
                  compLeft={0}
                  compRight={0}
                  compType="Line"
                />
                <Text
                  className="font-medium lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                  compId="I593:299016;593:298985"
                  comWidth={95}
                  comHeight={24}
                  compLeft={8}
                  compRight={0}
                  compType="Text"
                >
                  Daily meeting with tem
                </Text>
              </Row>
              <Text
                className="font-medium lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                compId="I593:299016;593:298988"
                comWidth={107}
                comHeight={16}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                8:00 AM -9:00 AM
              </Text>
              <Row
                className="font-inter items-center lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[46%]"
                compId="I593:299016;593:298989"
                comWidth={107}
                comHeight={48}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Line
                  className="bg-indigo_401 lg:h-[37px] xl:h-[42px] h-[47px] 2xl:h-[48px] 3xl:h-[57px] w-[4px]"
                  compId="I593:299016;593:298990"
                  comWidth={4}
                  comHeight={47}
                  compLeft={0}
                  compRight={0}
                  compType="Line"
                />
                <Text
                  className="font-medium lg:leading-[18px] xl:leading-[21px] leading-[24.00px] 2xl:leading-[24px] 3xl:leading-[28px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[89%]"
                  compId="I593:299016;593:298991"
                  comWidth={95}
                  comHeight={48}
                  compLeft={8}
                  compRight={0}
                  compType="Text"
                >
                  Revision design system
                </Text>
              </Row>
              <Text
                className="font-medium lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                compId="I593:299016;593:298994"
                comWidth={107}
                comHeight={16}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                8:00 AM -9:00 AM
              </Text>
              <Row
                className="font-inter items-center lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[46%]"
                compId="I593:299016;593:298995"
                comWidth={107}
                comHeight={48}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Line
                  className="bg-green_700 lg:h-[37px] xl:h-[42px] h-[47px] 2xl:h-[48px] 3xl:h-[57px] w-[4px]"
                  compId="I593:299016;593:298996"
                  comWidth={4}
                  comHeight={47}
                  compLeft={0}
                  compRight={0}
                  compType="Line"
                />
                <Text
                  className="font-medium lg:leading-[18px] xl:leading-[21px] leading-[24.00px] 2xl:leading-[24px] 3xl:leading-[28px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[89%]"
                  compId="I593:299016;593:298997"
                  comWidth={95}
                  comHeight={48}
                  compLeft={8}
                  compRight={0}
                  compType="Text"
                >
                  Changelog authentication
                </Text>
              </Row>
              <Text
                className="font-medium lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                compId="I593:299016;593:299000"
                comWidth={107}
                comHeight={16}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                8:00 AM -9:00 AM
              </Text>
              <Row
                className="font-inter items-center lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[46%]"
                compId="I593:299016;593:299001"
                comWidth={107}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Line
                  className="bg-indigo_401 lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] w-[4px]"
                  compId="I593:299016;593:299002"
                  comWidth={4}
                  comHeight={22}
                  compLeft={0}
                  compRight={0}
                  compType="Line"
                />
                <Text
                  className="font-medium lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                  compId="I593:299016;593:299003"
                  comWidth={95}
                  comHeight={24}
                  compLeft={8}
                  compRight={0}
                  compType="Text"
                >
                  Pitching with client
                </Text>
              </Row>
              <Text
                className="font-medium lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                compId="I593:299016;593:299006"
                comWidth={107}
                comHeight={16}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                8:00 AM -9:00 AM
              </Text>
              <Row
                className="font-inter items-center mb-[11px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[46%]"
                compId="I593:299016;593:299007"
                comWidth={107}
                comHeight={48}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Line
                  className="bg-red_600 lg:h-[37px] xl:h-[42px] h-[47px] 2xl:h-[48px] 3xl:h-[57px] w-[4px]"
                  compId="I593:299016;593:299008"
                  comWidth={4}
                  comHeight={47}
                  compLeft={0}
                  compRight={0}
                  compType="Line"
                />
                <Text
                  className="font-medium lg:leading-[18px] xl:leading-[21px] leading-[24.00px] 2xl:leading-[24px] 3xl:leading-[28px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[89%]"
                  compId="I593:299016;593:299009"
                  comWidth={95}
                  comHeight={48}
                  compLeft={8}
                  compRight={0}
                  compType="Text"
                >
                  Year end party and plan for 2022
                </Text>
              </Row>
            </Column>
          </Row>
        </Column>
        <Line
          className="absolute bg-indigo_50 lg:h-[537px] xl:h-[614px] h-[690px] 2xl:h-[691px] 3xl:h-[829px] left-[15%] top-[4%] w-[1px]"
          compId="528:301411"
          comWidth={1}
          comHeight={690}
          compLeft={219}
          compRight={0}
          compType="Line"
        />
        <aside className="absolute h-[max-content] inset-y-[0] items-center left-[0] my-[auto] w-[17%]">
          <Column
            className=""
            compId="585"
            comWidth={241}
            comHeight={1482}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Column
              className="bg-white_A700 justify-center lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] w-[100%]"
              compId="528:301412"
              comWidth={241}
              comHeight={1482}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-center lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[62%]"
                compId="I528:301412;41:948"
                comWidth={109}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_grid.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I528:301412;531:321438"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="grid"
                />
                <Text
                  className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                  compId="I528:301412;41:950"
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
                compId="I528:301412;41:951"
                comWidth={100}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_user_bluegray_400.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I528:301412;531:322607"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="user One"
                />
                <Text
                  className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I528:301412;41:953"
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
                compId="I528:301412;43809:15240"
                comWidth={155}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_icon.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] mt-[1px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I528:301412;41:955"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Icon"
                />
                <Text
                  className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] mt-[1px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I528:301412;41:956"
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
                  compId="I528:301412;235:259292"
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
                compId="I528:301412;41:957"
                comWidth={57}
                comHeight={22}
                compLeft={1}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_folder_bluegray_400.png"
                  className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] w-[32%]"
                  compId="I528:301412;533:294113;531:320466"
                  comWidth={18}
                  comHeight={16}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="folder One"
                />
                <Text
                  className="flex font-medium items-center lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I528:301412;41:959"
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
                compId="I528:301412;41:960"
                comWidth={95}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_settings.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I528:301412;41:961"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="settings"
                />
                <Text
                  className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I528:301412;41:962"
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
                compId="I528:301412;41:963"
                comWidth={70}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_cart.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I528:301412;41:964"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="cart"
                />
                <Text
                  className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I528:301412;41:965"
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
                compId="I528:301412;41:966"
                comWidth={62}
                comHeight={22}
                compLeft={1}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_vector_bluegray_400.png"
                  className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] w-[26%]"
                  compId="I528:301412;614:13885;531:320955"
                  comWidth={16}
                  comHeight={18}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Vector Two"
                />
                <Text
                  className="font-medium lg:ml-[13px] xl:ml-[15px] ml-[17px] 3xl:ml-[20px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I528:301412;41:968"
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
                value="Settings5"
                className="font-medium mb-[1010px] 3xl:mb-[1212px] lg:mb-[785px] xl:mb-[898px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400"
                inputClassName="h-[20px] mr-[5px] w-[20px]"
                compId="I528:301412;531:316827"
                comWidth={91}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Radio"
                checked={false}
                name="Settings One"
                label="Settings5"
                variant="illBluegray400"
              ></Radio>
            </Column>
          </Column>
        </aside>
        <Line
          className="absolute bg-indigo_50 lg:h-[584px] xl:h-[668px] h-[750px] 2xl:h-[751px] 3xl:h-[901px] left-[17%] top-[0] w-[1px]"
          compId="528:301413"
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

export default Dashboard0TwoPage;
