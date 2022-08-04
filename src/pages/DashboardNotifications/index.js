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
  Line,
  Radio,
  List,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const DashboardNotificationsPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Stack
        className="bg-white_A700 font-inter xl:h-[1046px] h-[1175px] 2xl:h-[1176px] 3xl:h-[1411px] lg:h-[914px] mx-[auto] w-[100%]"
        compId="43809:39281"
        comWidth={1440}
        comHeight={1175}
        compLeft={0}
        compRight={0}
        compType="Stack"
      >
        <Column
          className="absolute items-end w-[100%]"
          compId="767"
          comWidth={1440}
          comHeight={1175}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Row
            className="bg-white_A700 items-center justify-end p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] w-[100%]"
            compId="43812:47922"
            comWidth={1440}
            comHeight={60}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Img
              src="images/img_microphone.png"
              className="lg:h-[22px] xl:h-[25px] h-[28px] 2xl:h-[29px] 3xl:h-[34px] w-[1%]"
              compId="I43812:47922;43807:13258"
              comWidth={21}
              comHeight={28}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="microphone"
            />
            <Text
              className="font-medium lg:ml-[169px] xl:ml-[193px] ml-[218px] 3xl:ml-[261px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
              compId="I43812:47922;234:259667"
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
              compId="I43812:47922;234:259514"
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
                  compId="I43812:47922;234:259514;234:259505"
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
              compId="I43812:47922;531:315836;5:32"
              comWidth={20}
              comHeight={22}
              compLeft={136}
              compRight={0}
              compType="Image"
              alt="Vector"
            />
            <Stack
              className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] w-[9%]"
              compId="766"
              comWidth={126}
              comHeight={24}
              compLeft={29}
              compRight={0}
              compType="Stack"
            >
              <Img
                src="images/img_user_bluegray_900.png"
                className="absolute lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] inset-y-[0] left-[0] my-[auto] w-[14%]"
                compId="I43812:47922;37:1285;37:1283"
                comWidth={18}
                comHeight={20}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="user"
              />
              <Row
                className="absolute right-[0] w-[90%]"
                compId="563"
                comWidth={113}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <div
                  className="bg-red_600 3xl:h-[10px] lg:h-[7px] h-[8px] 2xl:h-[9px] mt-[1px] outline outline-[2px] outline-white_A700 rounded-radius50 lg:w-[6px] xl:w-[7px] w-[8px] 3xl:w-[9px]"
                  compId="I43812:47922;530:301660"
                  comWidth={8}
                  comHeight={8}
                  compLeft={0}
                  compRight={0}
                  compType="View"
                ></div>
                <Text
                  className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_500 w-[auto]"
                  compId="I43812:47922;37:1272"
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
              compId="I43812:47922;483:292004;43812:47214"
              comWidth={40}
              comHeight={40}
              compLeft={13}
              compRight={13}
              compType="CircleImage"
              alt="SherlockToyFa"
            />
          </Row>
          <Column
            className="bg-gray_50 font-poppins items-center lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px] w-[83%]"
            compId="43809:39282"
            comWidth={1199}
            comHeight={1115}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Stack
              className="lg:h-[491px] xl:h-[562px] h-[631px] 2xl:h-[632px] 3xl:h-[758px] w-[98%]"
              compId="819"
              comWidth={1163}
              comHeight={631}
              compLeft={0}
              compRight={0}
              compType="Stack"
            >
              <Text
                className="absolute font-medium left-[0] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_900 top-[4%] w-[auto]"
                compId="43809:39283"
                comWidth={93}
                comHeight={32}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                Overview
              </Text>
              <Stack
                className="absolute font-inter lg:h-[491px] xl:h-[562px] h-[631px] 2xl:h-[632px] 3xl:h-[758px] w-[100%]"
                compId="760"
                comWidth={1163}
                comHeight={631}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Column
                  className="absolute h-[max-content] inset-[0] items-end justify-center m-[auto] w-[99%]"
                  compId="768"
                  comWidth={1151}
                  comHeight={612}
                  compLeft={0}
                  compRight={12}
                  compType="Column"
                >
                  <Row
                    className="items-center justify-end ml-[auto] w-[16%]"
                    compId="43809:39284"
                    comWidth={189}
                    comHeight={48}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Button
                      className="flex items-center justify-center w-[24%]"
                      compId="43809:39285"
                      comWidth={46}
                      comHeight={48}
                      compLeft={0}
                      compRight={0}
                      compType="IconButton"
                      shape="icbRoundedBorder4"
                      variant="icbFillWhiteA700"
                    >
                      <Img
                        src="images/img_download.png"
                        className="h-[20px] flex items-center justify-center lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                        compId="43809:39285"
                        comWidth={46}
                        comHeight={48}
                        compLeft={0}
                        compRight={0}
                        compType="IconButton"
                        alt="download"
                      />
                    </Button>
                    <SelectBox
                      className="bg-transparent font-medium xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[69%]"
                      compId="43809:39287"
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
                          compId="I43809:39289;1:1053"
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
                    compId="43809:39293"
                    comWidth={1150}
                    comHeight={110}
                    compLeft={0}
                    compRight={1}
                    compType="Row"
                  >
                    <Row
                      className="bg-white_A700 items-center lg:p-[18px] xl:p-[21px] p-[24px] 3xl:p-[28px] rounded-radius4 shadow-bs1 w-[32%]"
                      compId="I43809:39294;556:303037"
                      comWidth={370}
                      comHeight={110}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Img
                        src="images/img_group.png"
                        className="lg:h-[21px] xl:h-[24px] h-[26px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[17px] xl:ml-[19px] ml-[22px] 3xl:ml-[26px] w-[22%]"
                        compId="I43809:39294;556:303038"
                        comWidth={70}
                        comHeight={26}
                        compLeft={22}
                        compRight={0}
                        compType="Image"
                        alt="Group"
                      />
                      <Column
                        className="lg:ml-[31px] xl:ml-[36px] ml-[41px] 3xl:ml-[49px] w-[52%]"
                        compId="I43809:39294;556:303041"
                        comWidth={167}
                        comHeight={62}
                        compLeft={41}
                        compRight={0}
                        compType="Column"
                      >
                        <Row
                          className="items-center justify-evenly w-[100%]"
                          compId="786"
                          comWidth={167}
                          comHeight={40}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <Text
                            className="font-bold lg:text-[21px] xl:text-[24px] text-[28px] 3xl:text-[33px] text-bluegray_800 w-[auto]"
                            compId="I43809:39294;556:303044"
                            comWidth={114}
                            comHeight={40}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            $10.000
                          </Text>
                          <Button
                            className="3xl:pb-[6px] 3xl:pl-[6px] 3xl:pt-[7px] flex items-center justify-center lg:pb-[3px] lg:pl-[3px] lg:pt-[4px] pb-[5px] pl-[5px] pr-[3px] pt-[6px] text-center w-[31%] xl:pb-[4px] xl:pl-[4px] xl:pt-[5px]"
                            compId="I43809:39294;556:303047"
                            comWidth={0}
                            comHeight={21}
                            compLeft={0}
                            compRight={0}
                            compType="Button"
                            leftIcon={
                              <Img
                                src="images/img_arrowup.png"
                                className="w-[6px] mr-[4px] text-center lg:w-[4px] xl:w-[5px] 3xl:w-[7px]"
                                compId="I43809:39294;556:303049;172:253014"
                                comWidth={6}
                                comHeight={9.33}
                                compLeft={0}
                                compRight={4}
                                compType="Image"
                                alt="arrow_up"
                              />
                            }
                            variant="FillGreen70063"
                          >
                            <div className="bg-transparent font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px]">
                              0.2%
                            </div>
                          </Button>
                        </Row>
                        <Row
                          className="items-center w-[57%]"
                          compId="787"
                          comWidth={95}
                          comHeight={22}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <div
                            className="bg-indigo_400 lg:h-[5px] h-[6px] 2xl:h-[7px] 3xl:h-[8px] rounded-radius50 lg:w-[4px] xl:w-[5px] w-[6px] 3xl:w-[7px]"
                            compId="I43809:39294;556:303043"
                            comWidth={6}
                            comHeight={6}
                            compLeft={0}
                            compRight={0}
                            compType="View"
                          ></div>
                          <Text
                            className="font-normal lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                            compId="I43809:39294;556:303042"
                            comWidth={83}
                            comHeight={22}
                            compLeft={6}
                            compRight={0}
                            compType="Text"
                          >
                            Total income
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row
                      className="bg-white_A700 items-center lg:p-[18px] xl:p-[21px] p-[24px] 3xl:p-[28px] rounded-radius4 shadow-bs1 w-[32%]"
                      compId="I43809:39295;556:303699"
                      comWidth={370}
                      comHeight={110}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Img
                        src="images/img_group_red_600.png"
                        className="lg:h-[21px] xl:h-[24px] h-[26px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[17px] xl:ml-[19px] ml-[22px] 3xl:ml-[26px] w-[22%]"
                        compId="I43809:39295;556:303700"
                        comWidth={70}
                        comHeight={26}
                        compLeft={22}
                        compRight={0}
                        compType="Image"
                        alt="Group One"
                      />
                      <Column
                        className="lg:ml-[31px] xl:ml-[36px] ml-[41px] 3xl:ml-[49px] w-[35%]"
                        compId="I43809:39295;556:303704"
                        comWidth={114}
                        comHeight={62}
                        compLeft={41}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-bold lg:text-[21px] xl:text-[24px] text-[28px] 3xl:text-[33px] text-bluegray_800 w-[auto]"
                          compId="I43809:39295;556:303707"
                          comWidth={114}
                          comHeight={40}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          $10.000
                        </Text>
                        <Row
                          className="items-center justify-evenly w-[96%]"
                          compId="789"
                          comWidth={109}
                          comHeight={22}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <div
                            className="bg-indigo_400 lg:h-[5px] h-[6px] 2xl:h-[7px] 3xl:h-[8px] rounded-radius50 lg:w-[4px] xl:w-[5px] w-[6px] 3xl:w-[7px]"
                            compId="I43809:39295;556:303706"
                            comWidth={6}
                            comHeight={6}
                            compLeft={0}
                            compRight={0}
                            compType="View"
                          ></div>
                          <Text
                            className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                            compId="I43809:39295;556:303705"
                            comWidth={99}
                            comHeight={22}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            Total Expenses
                          </Text>
                        </Row>
                      </Column>
                      <Button
                        className="3xl:pb-[6px] 3xl:pl-[6px] 3xl:pt-[7px] flex items-center justify-center lg:pb-[3px] lg:pl-[3px] lg:pt-[4px] ml-[1px] pb-[5px] pl-[5px] pr-[3px] pt-[6px] text-center w-[16%] xl:pb-[4px] xl:pl-[4px] xl:pt-[5px]"
                        compId="I43809:39295;556:303710"
                        comWidth={0}
                        comHeight={21}
                        compLeft={0}
                        compRight={0}
                        compType="Button"
                        leftIcon={
                          <Img
                            src="images/img_arrowdown_red_600.png"
                            className="w-[6px] mr-[4px] text-center lg:w-[4px] xl:w-[5px] 3xl:w-[7px]"
                            compId="I43809:39295;556:303712;172:253014"
                            comWidth={6}
                            comHeight={9.33}
                            compLeft={0}
                            compRight={4}
                            compType="Image"
                            alt="arrow_down"
                          />
                        }
                        variant="FillRed60063"
                      >
                        <div className="bg-transparent font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px]">
                          0.2%
                        </div>
                      </Button>
                    </Row>
                    <Row
                      className="bg-white_A700 items-center justify-center lg:p-[18px] xl:p-[21px] p-[24px] 3xl:p-[28px] rounded-radius4 shadow-bs1 w-[32%]"
                      compId="I43809:39296;556:303037"
                      comWidth={370}
                      comHeight={110}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Img
                        src="images/img_group.png"
                        className="lg:h-[21px] xl:h-[24px] h-[26px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[17px] xl:ml-[19px] ml-[22px] 3xl:ml-[26px] w-[22%]"
                        compId="I43809:39296;556:303038"
                        comWidth={70}
                        comHeight={26}
                        compLeft={22}
                        compRight={0}
                        compType="Image"
                        alt="Group Two"
                      />
                      <Column
                        className="lg:ml-[31px] xl:ml-[36px] ml-[41px] 3xl:ml-[49px] lg:mr-[17px] xl:mr-[19px] mr-[22px] 3xl:mr-[26px] w-[52%]"
                        compId="I43809:39296;556:303041"
                        comWidth={167}
                        comHeight={62}
                        compLeft={41}
                        compRight={22}
                        compType="Column"
                      >
                        <Row
                          className="items-center justify-evenly w-[100%]"
                          compId="791"
                          comWidth={167}
                          comHeight={40}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <Text
                            className="font-bold lg:text-[21px] xl:text-[24px] text-[28px] 3xl:text-[33px] text-bluegray_800 w-[auto]"
                            compId="I43809:39296;556:303044"
                            comWidth={114}
                            comHeight={40}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            $10.000
                          </Text>
                          <Row
                            className="bg-green_700_63 items-center justify-end px-[3px] rounded-radius4 w-[31%]"
                            compId="I43809:39296;556:303047"
                            comWidth={52}
                            comHeight={21}
                            compLeft={0}
                            compRight={0}
                            compType="Row"
                          >
                            <Img
                              src="images/img_arrowup.png"
                              className="2xl:h-[10px] 3xl:h-[11px] lg:h-[7px] h-[9px] w-[13%]"
                              compId="I43809:39296;556:303049;172:253014"
                              comWidth={6}
                              comHeight={9}
                              compLeft={0}
                              compRight={0}
                              compType="Image"
                              alt="arrowup One"
                            />
                            <Text
                              className="font-normal ml-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-green_700 w-[auto]"
                              compId="I43809:39296;556:303050"
                              comWidth={33}
                              comHeight={21}
                              compLeft={4}
                              compRight={0}
                              compType="Text"
                            >
                              0.2%
                            </Text>
                          </Row>
                        </Row>
                        <Row
                          className="items-center w-[63%]"
                          compId="792"
                          comWidth={105}
                          comHeight={22}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <div
                            className="bg-indigo_400 lg:h-[5px] h-[6px] 2xl:h-[7px] 3xl:h-[8px] rounded-radius50 lg:w-[4px] xl:w-[5px] w-[6px] 3xl:w-[7px]"
                            compId="I43809:39296;556:303043"
                            comWidth={6}
                            comHeight={6}
                            compLeft={0}
                            compRight={0}
                            compType="View"
                          ></div>
                          <Text
                            className="font-normal lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                            compId="I43809:39296;556:303042"
                            comWidth={93}
                            comHeight={22}
                            compLeft={6}
                            compRight={0}
                            compType="Text"
                          >
                            Total Revenue
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                  </Row>
                  <Stack
                    className="lg:h-[319px] xl:h-[365px] h-[410px] 2xl:h-[411px] 3xl:h-[493px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[32%]"
                    compId="43809:39297"
                    comWidth={370}
                    comHeight={410}
                    compLeft={0}
                    compRight={0}
                    compType="Stack"
                  >
                    <Stack
                      className="absolute xl:h-[104px] h-[116px] 2xl:h-[117px] 3xl:h-[140px] lg:h-[91px] top-[23%] w-[100%]"
                      compId="769"
                      comWidth={370}
                      comHeight={116}
                      compLeft={0}
                      compRight={0}
                      compType="Stack"
                    >
                      <Img
                        src="images/img_ellipse.png"
                        className="absolute lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] right-[0] top-[0] w-[6%]"
                        compId="I43809:39297;556:303149"
                        comWidth={23}
                        comHeight={46}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Ellipse One"
                      />
                      <Img
                        src="images/img_vector_white_A700.png"
                        className="absolute bottom-[0] h-[100px] 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] inset-x-[0] w-[100%]"
                        compId="I43809:39297;556:303150"
                        comWidth={369}
                        comHeight={100}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Vector One"
                      />
                    </Stack>
                    <Stack
                      className="absolute lg:h-[165px] xl:h-[188px] h-[211px] 2xl:h-[212px] 3xl:h-[254px] top-[0] w-[100%]"
                      compId="I43809:39297;43809:27374"
                      comWidth={370}
                      comHeight={211}
                      compLeft={0}
                      compRight={0}
                      compType="Stack"
                    >
                      <div
                        className="absolute bg-deep_orange_300 bottom-[0] lg:h-[165px] xl:h-[188px] h-[211px] 2xl:h-[212px] 3xl:h-[254px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] shadow-bs1 w-[100%]"
                        compId="I43809:39297;556:303148"
                        comWidth={370}
                        comHeight={211}
                        compLeft={0}
                        compRight={0}
                        compType="View"
                      ></div>
                      <Column
                        className="absolute inset-x-[6%] items-center justify-end lg:p-[10px] xl:p-[12px] p-[14px] 3xl:p-[16px] rounded-radius200 w-[88%]"
                        compId="I43809:39297;556:303151"
                        comWidth={326}
                        comHeight={211}
                        compLeft={22}
                        compRight={22}
                        compType="Column"
                      >
                        <Stack
                          className="lg:h-[121px] xl:h-[138px] h-[155px] 2xl:h-[156px] 3xl:h-[187px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] w-[83%]"
                          compId="762"
                          comWidth={246}
                          comHeight={155}
                          compLeft={0}
                          compRight={0}
                          compType="Stack"
                        >
                          <Stack
                            className="absolute bottom-[0] lg:h-[109px] xl:h-[124px] h-[139px] 2xl:h-[140px] 3xl:h-[167px] w-[100%]"
                            compId="770"
                            comWidth={246}
                            comHeight={139}
                            compLeft={0}
                            compRight={0}
                            compType="Stack"
                          >
                            <Stack
                              className="absolute lg:h-[109px] xl:h-[124px] h-[139px] 2xl:h-[140px] 3xl:h-[167px] w-[100%]"
                              compId="771"
                              comWidth={246}
                              comHeight={139}
                              compLeft={0}
                              compRight={0}
                              compType="Stack"
                            >
                              <Stack
                                className="absolute lg:h-[109px] xl:h-[124px] h-[139px] 2xl:h-[140px] 3xl:h-[167px] left-[0] w-[89%]"
                                compId="772"
                                comWidth={220}
                                comHeight={139}
                                compLeft={0}
                                compRight={0}
                                compType="Stack"
                              >
                                <Stack
                                  className="absolute lg:h-[109px] xl:h-[124px] h-[139px] 2xl:h-[140px] 3xl:h-[167px] right-[0] w-[100%]"
                                  compId="773"
                                  comWidth={219}
                                  comHeight={139}
                                  compLeft={0}
                                  compRight={1}
                                  compType="Stack"
                                >
                                  <Column
                                    className="absolute bg-cover bg-repeat lg:h-[48px] xl:h-[55px] h-[61px] 2xl:h-[62px] 3xl:h-[74px] items-center left-[0] top-[20%] lg:w-[47px] xl:w-[54px] w-[61px] 3xl:w-[73px]"
                                    compId="I43809:39297;556:303154"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_sphere.png')",
                                    }}
                                    comWidth={61}
                                    comHeight={61}
                                    compLeft={0}
                                    compRight={0}
                                    compType="Column"
                                  >
                                    <Column
                                      className="bg-white_A700 lg:h-[48px] xl:h-[55px] h-[61px] 2xl:h-[62px] 3xl:h-[74px] items-center w-[100%]"
                                      compId="1"
                                      comWidth={61}
                                      comHeight={61}
                                      compLeft={0}
                                      compRight={0}
                                      compType="Column"
                                    >
                                      <Column
                                        className="bg-cover bg-repeat lg:h-[48px] xl:h-[55px] h-[61px] 2xl:h-[62px] 3xl:h-[74px] items-center w-[100%]"
                                        compId="I43809:39297;556:303159"
                                        style={{
                                          backgroundImage:
                                            "url('images/img_specular.png')",
                                        }}
                                        comWidth={61}
                                        comHeight={61}
                                        compLeft={0}
                                        compRight={0}
                                        compType="Column"
                                      >
                                        <Stack
                                          className="bg-cover bg-repeat lg:h-[48px] xl:h-[55px] h-[61px] 2xl:h-[62px] 3xl:h-[74px] lg:w-[47px] xl:w-[54px] w-[61px] 3xl:w-[73px]"
                                          compId="19"
                                          style={{
                                            backgroundImage:
                                              "url('images/img_specular.png')",
                                          }}
                                          comWidth={61}
                                          comHeight={61}
                                          compLeft={0}
                                          compRight={0}
                                          compType="Stack"
                                        >
                                          <Img
                                            src="images/img_specular.png"
                                            className="absolute lg:h-[48px] xl:h-[55px] h-[61px] 2xl:h-[62px] 3xl:h-[74px] lg:w-[47px] xl:w-[54px] w-[61px] 3xl:w-[73px]"
                                            compId="I43809:39297;556:303162"
                                            comWidth={61}
                                            comHeight={61}
                                            compLeft={0}
                                            compRight={0}
                                            compType="Image"
                                            alt="imageFour"
                                          />
                                        </Stack>
                                      </Column>
                                    </Column>
                                  </Column>
                                  <div
                                    className="absolute inset-y-[0] my-[auto] overflow-x-auto right-[0] w-[100%]"
                                    compId="821"
                                    comWidth={326}
                                    comHeight={211}
                                    compLeft={0}
                                    compRight={0}
                                    compType="HorizontalScroll"
                                  >
                                    <Stack
                                      className="lg:h-[165px] xl:h-[188px] h-[211px] 2xl:h-[212px] 3xl:h-[254px] px-[11px] 3xl:px-[13px] lg:px-[8px] xl:px-[9px] w-[100%]"
                                      compId="I43809:39297;556:303165"
                                      comWidth={326}
                                      comHeight={211}
                                      compLeft={0}
                                      compRight={0}
                                      compType="Stack"
                                    >
                                      <Column
                                        className="absolute bg-cover bg-repeat bottom-[0] items-center right-[7%] w-[64%]"
                                        compId="I43809:39297;556:303166"
                                        style={{
                                          backgroundImage:
                                            "url('images/img_shadow.png')",
                                        }}
                                        comWidth={208}
                                        comHeight={112}
                                        compLeft={0}
                                        compRight={22}
                                        compType="Column"
                                      >
                                        <Stack
                                          className="bg-cover bg-repeat xl:h-[100px] h-[112px] 2xl:h-[113px] 3xl:h-[135px] lg:h-[88px] px-[3px] w-[100%]"
                                          compId="20"
                                          style={{
                                            backgroundImage:
                                              "url('images/img_shadow.png')",
                                          }}
                                          comWidth={208}
                                          comHeight={112}
                                          compLeft={0}
                                          compRight={0}
                                          compType="Stack"
                                        >
                                          <Stack
                                            className="absolute h-[108px] 2xl:h-[109px] 3xl:h-[130px] lg:h-[84px] xl:h-[97px] inset-y-[0] my-[auto] right-[4%] w-[64%]"
                                            compId="774"
                                            comWidth={133}
                                            comHeight={108}
                                            compLeft={0}
                                            compRight={9}
                                            compType="Stack"
                                          >
                                            <Row
                                              className="absolute justify-between w-[100%]"
                                              compId="794"
                                              comWidth={133}
                                              comHeight={108}
                                              compLeft={0}
                                              compRight={0}
                                              compType="Row"
                                            >
                                              <Img
                                                src="images/img_stand.png"
                                                className="3xl:h-[106px] lg:h-[69px] xl:h-[79px] h-[88px] 2xl:h-[89px] lg:mb-[15px] xl:mb-[17px] mb-[20px] 3xl:mb-[24px] w-[27%]"
                                                compId="I43809:39297;556:303190"
                                                comWidth={36}
                                                comHeight={88}
                                                compLeft={0}
                                                compRight={0}
                                                compType="Image"
                                                alt="stand"
                                              />
                                              <Stack
                                                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] 3xl:mt-[100px] lg:mt-[65px] xl:mt-[74px] mt-[84px] w-[47%]"
                                                compId="I43809:39297;556:303172"
                                                comWidth={62}
                                                comHeight={24}
                                                compLeft={0}
                                                compRight={0}
                                                compType="Stack"
                                              >
                                                <Img
                                                  src="images/img_shadow_11X62.png"
                                                  className="absolute bottom-[0] xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] w-[100%]"
                                                  compId="I43809:39297;556:303173"
                                                  comWidth={62}
                                                  comHeight={11}
                                                  compLeft={0}
                                                  compRight={0}
                                                  compType="Image"
                                                  alt="shadow"
                                                />
                                                <Column
                                                  className="absolute bg-cover bg-repeat bottom-[4%] items-center left-[18%] w-[40%]"
                                                  compId="I43809:39297;556:303175"
                                                  style={{
                                                    backgroundImage:
                                                      "url('images/img_1.png')",
                                                  }}
                                                  comWidth={25}
                                                  comHeight={19}
                                                  compLeft={11}
                                                  compRight={0}
                                                  compType="Column"
                                                >
                                                  <div
                                                    className="bg-orange_A100 lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] rounded-radius997 w-[100%]"
                                                    compId="I43809:39297;556:303179"
                                                    comWidth={25}
                                                    comHeight={19}
                                                    compLeft={0}
                                                    compRight={0}
                                                    compType="View"
                                                  ></div>
                                                </Column>
                                                <Column
                                                  className="absolute bg-cover bg-repeat items-center right-[6%] top-[0] w-[76%]"
                                                  compId="I43809:39297;556:303180"
                                                  style={{
                                                    backgroundImage:
                                                      "url('images/img_2.png')",
                                                  }}
                                                  comWidth={47}
                                                  comHeight={23}
                                                  compLeft={0}
                                                  compRight={4}
                                                  compType="Column"
                                                >
                                                  <Column
                                                    className="bg-gray_100 items-center rounded-radius1165 w-[100%]"
                                                    compId="I43809:39297;556:303182"
                                                    comWidth={47}
                                                    comHeight={23}
                                                    compLeft={0}
                                                    compRight={0}
                                                    compType="Column"
                                                  >
                                                    <Column
                                                      className="bg-cover bg-repeat items-center w-[100%]"
                                                      compId="I43809:39297;556:303186"
                                                      style={{
                                                        backgroundImage:
                                                          "url('images/img_specular_23X47.png')",
                                                      }}
                                                      comWidth={47}
                                                      comHeight={23}
                                                      compLeft={0}
                                                      compRight={0}
                                                      compType="Column"
                                                    >
                                                      <Stack
                                                        className="bg-cover bg-repeat lg:h-[18px] xl:h-[21px] h-[23px] 2xl:h-[24px] 3xl:h-[28px] w-[100%]"
                                                        compId="22"
                                                        style={{
                                                          backgroundImage:
                                                            "url('images/img_specular_23X47.png')",
                                                        }}
                                                        comWidth={47}
                                                        comHeight={23}
                                                        compLeft={0}
                                                        compRight={0}
                                                        compType="Stack"
                                                      >
                                                        <Img
                                                          src="images/img_specular_23X47.png"
                                                          className="absolute lg:h-[18px] xl:h-[21px] h-[23px] 2xl:h-[24px] 3xl:h-[28px] w-[100%]"
                                                          compId="I43809:39297;556:303189"
                                                          comWidth={47}
                                                          comHeight={23}
                                                          compLeft={0}
                                                          compRight={0}
                                                          compType="Image"
                                                          alt="specular"
                                                        />
                                                      </Stack>
                                                    </Column>
                                                  </Column>
                                                </Column>
                                              </Stack>
                                            </Row>
                                            <div
                                              className="absolute bg-gray_100 bottom-[19%] lg:h-[40px] xl:h-[46px] h-[51px] 2xl:h-[52px] 3xl:h-[62px] left-[0] rounded-radius200 w-[27%]"
                                              compId="I43809:39297;556:303193"
                                              comWidth={36}
                                              comHeight={51}
                                              compLeft={0}
                                              compRight={0}
                                              compType="View"
                                            ></div>
                                          </Stack>
                                          <Column
                                            className="absolute bg-cover bg-repeat items-center left-[27%] top-[0] w-[17%]"
                                            compId="21"
                                            style={{
                                              backgroundImage:
                                                "url('images/img_group21.png')",
                                            }}
                                            comWidth={36}
                                            comHeight={88}
                                            compLeft={57}
                                            compRight={0}
                                            compType="Column"
                                          >
                                            <Stack
                                              className="bg-cover bg-repeat 3xl:h-[106px] lg:h-[69px] xl:h-[79px] h-[88px] 2xl:h-[89px] w-[100%]"
                                              compId="23"
                                              style={{
                                                backgroundImage:
                                                  "url('images/img_group21.png')",
                                              }}
                                              comWidth={36}
                                              comHeight={88}
                                              compLeft={0}
                                              compRight={0}
                                              compType="Stack"
                                            >
                                              <Img
                                                src="images/img_group21.png"
                                                className="absolute 3xl:h-[106px] lg:h-[69px] xl:h-[79px] h-[88px] 2xl:h-[89px] w-[100%]"
                                                compId="I43809:39297;556:303196"
                                                comWidth={36}
                                                comHeight={88}
                                                compLeft={0}
                                                compRight={0}
                                                compType="Image"
                                                alt="specular One"
                                              />
                                            </Stack>
                                          </Column>
                                        </Stack>
                                      </Column>
                                      <Column
                                        className="absolute bg-cover bg-repeat inset-x-[0] items-center mx-[auto] top-[11%] w-[53%]"
                                        compId="I43809:39297;556:303197"
                                        style={{
                                          backgroundImage:
                                            "url('images/img_screen.png')",
                                        }}
                                        comWidth={174}
                                        comHeight={115}
                                        compLeft={0}
                                        compRight={0}
                                        compType="Column"
                                      >
                                        <Column
                                          className="bg-gray_100 items-center rounded-radius200 w-[100%]"
                                          compId="2"
                                          comWidth={174}
                                          comHeight={115}
                                          compLeft={0}
                                          compRight={0}
                                          compType="Column"
                                        >
                                          <Column
                                            className="bg-cover bg-repeat items-center w-[100%]"
                                            compId="24"
                                            style={{
                                              backgroundImage:
                                                "url('images/img_group24.png')",
                                            }}
                                            comWidth={174}
                                            comHeight={115}
                                            compLeft={0}
                                            compRight={0}
                                            compType="Column"
                                          >
                                            <Stack
                                              className="bg-cover bg-repeat xl:h-[103px] h-[115px] 2xl:h-[116px] 3xl:h-[139px] lg:h-[90px] w-[100%]"
                                              compId="25"
                                              style={{
                                                backgroundImage:
                                                  "url('images/img_group24.png')",
                                              }}
                                              comWidth={174}
                                              comHeight={115}
                                              compLeft={0}
                                              compRight={0}
                                              compType="Stack"
                                            >
                                              <Img
                                                src="images/img_group24.png"
                                                className="absolute xl:h-[103px] h-[115px] 2xl:h-[116px] 3xl:h-[139px] lg:h-[90px] w-[100%]"
                                                compId="I43809:39297;556:303204"
                                                comWidth={174}
                                                comHeight={115}
                                                compLeft={0}
                                                compRight={0}
                                                compType="Image"
                                                alt="specular Two"
                                              />
                                            </Stack>
                                          </Column>
                                        </Column>
                                      </Column>
                                    </Stack>
                                  </div>
                                </Stack>
                                <Img
                                  src="images/img_sceneshadow.png"
                                  className="absolute xl:h-[102px] h-[114px] 2xl:h-[115px] 3xl:h-[137px] lg:h-[89px] right-[0] top-[3%] w-[79%]"
                                  compId="I43809:39297;556:303219"
                                  comWidth={173}
                                  comHeight={114}
                                  compLeft={0}
                                  compRight={0}
                                  compType="Image"
                                  alt="SceneShadow"
                                />
                              </Stack>
                              <Stack
                                className="absolute h-[105px] 2xl:h-[106px] 3xl:h-[127px] lg:h-[82px] xl:h-[94px] right-[0] top-[3%] w-[79%]"
                                compId="I43809:39297;556:303220"
                                comWidth={195}
                                comHeight={105}
                                compLeft={0}
                                compRight={0}
                                compType="Stack"
                              >
                                <Stack
                                  className="absolute h-[105px] 2xl:h-[106px] 3xl:h-[127px] lg:h-[82px] xl:h-[94px] left-[0] w-[85%]"
                                  compId="776"
                                  comWidth={166}
                                  comHeight={105}
                                  compLeft={0}
                                  compRight={0}
                                  compType="Stack"
                                >
                                  <Column
                                    className="absolute bg-cover bg-repeat items-center right-[1%] w-[98%]"
                                    compId="I43809:39297;556:303222"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_base.png')",
                                    }}
                                    comWidth={163}
                                    comHeight={105}
                                    compLeft={0}
                                    compRight={2}
                                    compType="Column"
                                  >
                                    <Column
                                      className="bg-blue_50 items-center rounded-radius200 w-[100%]"
                                      compId="3"
                                      comWidth={163}
                                      comHeight={105}
                                      compLeft={0}
                                      compRight={0}
                                      compType="Column"
                                    >
                                      <Column
                                        className="bg-cover bg-repeat items-center lg:pb-[3px] xl:pb-[4px] pb-[5px] 3xl:pb-[6px] w-[100%]"
                                        compId="27"
                                        style={{
                                          backgroundImage:
                                            "url('images/img_group27.png')",
                                        }}
                                        comWidth={163}
                                        comHeight={105}
                                        compLeft={0}
                                        compRight={0}
                                        compType="Column"
                                      >
                                        <Column
                                          className="bg-cover bg-repeat items-center w-[100%]"
                                          compId="29"
                                          style={{
                                            backgroundImage:
                                              "url('images/img_group29.png')",
                                          }}
                                          comWidth={163}
                                          comHeight={10}
                                          compLeft={0}
                                          compRight={0}
                                          compType="Column"
                                        >
                                          <Column
                                            className="bg-blue_50 items-center rounded-radius200 w-[100%]"
                                            compId="I43809:39297;556:303232"
                                            comWidth={163}
                                            comHeight={10}
                                            compLeft={0}
                                            compRight={0}
                                            compType="Column"
                                          >
                                            <Stack
                                              className="bg-cover bg-repeat h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] px-[3px] w-[100%]"
                                              compId="I43809:39297;556:303237"
                                              style={{
                                                backgroundImage:
                                                  "url('images/img_dots.png')",
                                              }}
                                              comWidth={163}
                                              comHeight={10}
                                              compLeft={0}
                                              compRight={0}
                                              compType="Stack"
                                            >
                                              <Stack
                                                className="absolute bottom-[0] lg:h-[11px] xl:h-[12px] h-[13px] 2xl:h-[14px] 3xl:h-[16px] left-[1%] w-[14%]"
                                                compId="778"
                                                comWidth={23}
                                                comHeight={13}
                                                compLeft={2}
                                                compRight={0}
                                                compType="Stack"
                                              >
                                                <Column
                                                  className="absolute left-[0] w-[74%]"
                                                  compId="I43809:39297;556:303239"
                                                  comWidth={17}
                                                  comHeight={13}
                                                  compLeft={0}
                                                  compRight={0}
                                                  compType="Column"
                                                >
                                                  <Column
                                                    className="bg-cover bg-repeat h-[4px] 3xl:h-[5px] 2xl:h-[5px] ml-[1px] px-[1px] xl:w-[3px] lg:w-[3px] w-[4px]"
                                                    compId="35"
                                                    style={{
                                                      backgroundImage:
                                                        "url('images/img_group35.png')",
                                                    }}
                                                    comWidth={4}
                                                    comHeight={4}
                                                    compLeft={1}
                                                    compRight={0}
                                                    compType="Column"
                                                  >
                                                    <Column
                                                      className="bg-teal_300 h-[3px] 3xl:h-[4px] 2xl:h-[4px] items-center mb-[1px] ml-[1px] px-[1px] rounded-radius50 xl:w-[2px] lg:w-[2px] w-[3px]"
                                                      compId="4"
                                                      comWidth={3}
                                                      comHeight={3}
                                                      compLeft={1}
                                                      compRight={0}
                                                      compType="Column"
                                                    >
                                                      <Column
                                                        className="bg-cover bg-repeat h-[3px] 3xl:h-[4px] 2xl:h-[4px] items-center w-[100%]"
                                                        compId="36"
                                                        style={{
                                                          backgroundImage:
                                                            "url('images/img_group36.png')",
                                                        }}
                                                        comWidth={3}
                                                        comHeight={3}
                                                        compLeft={0}
                                                        compRight={0}
                                                        compType="Column"
                                                      >
                                                        <Stack
                                                          className="bg-cover bg-repeat h-[3px] 3xl:h-[4px] 2xl:h-[4px] xl:w-[2px] lg:w-[2px] w-[3px]"
                                                          compId="37"
                                                          style={{
                                                            backgroundImage:
                                                              "url('images/img_group36.png')",
                                                          }}
                                                          comWidth={3}
                                                          comHeight={3}
                                                          compLeft={0}
                                                          compRight={0}
                                                          compType="Stack"
                                                        >
                                                          <Img
                                                            src="images/img_group36.png"
                                                            className="absolute h-[3px] 3xl:h-[4px] 2xl:h-[4px] xl:w-[2px] lg:w-[2px] w-[3px]"
                                                            compId="I43809:39297;556:303247"
                                                            comWidth={3}
                                                            comHeight={3}
                                                            compLeft={0}
                                                            compRight={0}
                                                            compType="Image"
                                                            alt="specular Three"
                                                          />
                                                        </Stack>
                                                      </Column>
                                                    </Column>
                                                  </Column>
                                                  <Img
                                                    src="images/img_shadow_13X17.png"
                                                    className="lg:h-[11px] xl:h-[12px] h-[13px] 2xl:h-[14px] 3xl:h-[16px] w-[100%]"
                                                    compId="I43809:39297;556:303240"
                                                    comWidth={17}
                                                    comHeight={13}
                                                    compLeft={0}
                                                    compRight={0}
                                                    compType="Image"
                                                    alt="shadow One"
                                                  />
                                                </Column>
                                                <Column
                                                  className="absolute right-[0] w-[74%]"
                                                  compId="I43809:39297;556:303249"
                                                  comWidth={17}
                                                  comHeight={13}
                                                  compLeft={0}
                                                  compRight={0}
                                                  compType="Column"
                                                >
                                                  <Column
                                                    className="bg-cover bg-repeat h-[4px] 3xl:h-[5px] 2xl:h-[5px] ml-[1px] px-[1px] xl:w-[3px] lg:w-[3px] w-[4px]"
                                                    compId="38"
                                                    style={{
                                                      backgroundImage:
                                                        "url('images/img_group35.png')",
                                                    }}
                                                    comWidth={4}
                                                    comHeight={4}
                                                    compLeft={1}
                                                    compRight={0}
                                                    compType="Column"
                                                  >
                                                    <Column
                                                      className="bg-orange_200 h-[3px] 3xl:h-[4px] 2xl:h-[4px] items-center mb-[1px] px-[1px] rounded-radius50 xl:w-[2px] lg:w-[2px] w-[3px]"
                                                      compId="5"
                                                      comWidth={3}
                                                      comHeight={3}
                                                      compLeft={0}
                                                      compRight={0}
                                                      compType="Column"
                                                    >
                                                      <Column
                                                        className="bg-cover bg-repeat h-[3px] 3xl:h-[4px] 2xl:h-[4px] items-center w-[100%]"
                                                        compId="39"
                                                        style={{
                                                          backgroundImage:
                                                            "url('images/img_group36.png')",
                                                        }}
                                                        comWidth={3}
                                                        comHeight={3}
                                                        compLeft={0}
                                                        compRight={0}
                                                        compType="Column"
                                                      >
                                                        <Stack
                                                          className="bg-cover bg-repeat h-[3px] 3xl:h-[4px] 2xl:h-[4px] xl:w-[2px] lg:w-[2px] w-[3px]"
                                                          compId="40"
                                                          style={{
                                                            backgroundImage:
                                                              "url('images/img_group36.png')",
                                                          }}
                                                          comWidth={3}
                                                          comHeight={3}
                                                          compLeft={0}
                                                          compRight={0}
                                                          compType="Stack"
                                                        >
                                                          <Img
                                                            src="images/img_group36.png"
                                                            className="absolute h-[3px] 3xl:h-[4px] 2xl:h-[4px] xl:w-[2px] lg:w-[2px] w-[3px]"
                                                            compId="I43809:39297;556:303257"
                                                            comWidth={3}
                                                            comHeight={3}
                                                            compLeft={0}
                                                            compRight={0}
                                                            compType="Image"
                                                            alt="specular Four"
                                                          />
                                                        </Stack>
                                                      </Column>
                                                    </Column>
                                                  </Column>
                                                  <Img
                                                    src="images/img_shadow_13X17.png"
                                                    className="lg:h-[11px] xl:h-[12px] h-[13px] 2xl:h-[14px] 3xl:h-[16px] w-[100%]"
                                                    compId="I43809:39297;556:303250"
                                                    comWidth={17}
                                                    comHeight={13}
                                                    compLeft={0}
                                                    compRight={0}
                                                    compType="Image"
                                                    alt="shadow Two"
                                                  />
                                                </Column>
                                              </Stack>
                                              <div
                                                className="absolute bottom-[0] left-[8%] overflow-x-auto w-[10%]"
                                                compId="822"
                                                comWidth={17}
                                                comHeight={13}
                                                compLeft={13}
                                                compRight={0}
                                                compType="HorizontalScroll"
                                              >
                                                <Column
                                                  className="w-[100%]"
                                                  compId="I43809:39297;556:303259"
                                                  comWidth={17}
                                                  comHeight={13}
                                                  compLeft={0}
                                                  compRight={0}
                                                  compType="Column"
                                                >
                                                  <Column
                                                    className="bg-cover bg-repeat h-[4px] 3xl:h-[5px] 2xl:h-[5px] ml-[1px] px-[1px] xl:w-[3px] lg:w-[3px] w-[4px]"
                                                    compId="41"
                                                    style={{
                                                      backgroundImage:
                                                        "url('images/img_group35.png')",
                                                    }}
                                                    comWidth={4}
                                                    comHeight={4}
                                                    compLeft={1}
                                                    compRight={0}
                                                    compType="Column"
                                                  >
                                                    <Column
                                                      className="bg-red_A200 h-[3px] 3xl:h-[4px] 2xl:h-[4px] items-center mb-[1px] px-[1px] rounded-radius50 xl:w-[2px] lg:w-[2px] w-[3px]"
                                                      compId="6"
                                                      comWidth={3}
                                                      comHeight={3}
                                                      compLeft={0}
                                                      compRight={0}
                                                      compType="Column"
                                                    >
                                                      <Column
                                                        className="bg-cover bg-repeat h-[3px] 3xl:h-[4px] 2xl:h-[4px] items-center w-[100%]"
                                                        compId="42"
                                                        style={{
                                                          backgroundImage:
                                                            "url('images/img_group36.png')",
                                                        }}
                                                        comWidth={3}
                                                        comHeight={3}
                                                        compLeft={0}
                                                        compRight={0}
                                                        compType="Column"
                                                      >
                                                        <Stack
                                                          className="bg-cover bg-repeat h-[3px] 3xl:h-[4px] 2xl:h-[4px] xl:w-[2px] lg:w-[2px] w-[3px]"
                                                          compId="43"
                                                          style={{
                                                            backgroundImage:
                                                              "url('images/img_group36.png')",
                                                          }}
                                                          comWidth={3}
                                                          comHeight={3}
                                                          compLeft={0}
                                                          compRight={0}
                                                          compType="Stack"
                                                        >
                                                          <Img
                                                            src="images/img_group36.png"
                                                            className="absolute h-[3px] 3xl:h-[4px] 2xl:h-[4px] xl:w-[2px] lg:w-[2px] w-[3px]"
                                                            compId="I43809:39297;556:303267"
                                                            comWidth={3}
                                                            comHeight={3}
                                                            compLeft={0}
                                                            compRight={0}
                                                            compType="Image"
                                                            alt="specular Five"
                                                          />
                                                        </Stack>
                                                      </Column>
                                                    </Column>
                                                  </Column>
                                                  <Img
                                                    src="images/img_shadow_13X17.png"
                                                    className="lg:h-[11px] xl:h-[12px] h-[13px] 2xl:h-[14px] 3xl:h-[16px] w-[100%]"
                                                    compId="I43809:39297;556:303260"
                                                    comWidth={17}
                                                    comHeight={13}
                                                    compLeft={0}
                                                    compRight={0}
                                                    compType="Image"
                                                    alt="shadow Three"
                                                  />
                                                </Column>
                                              </div>
                                            </Stack>
                                          </Column>
                                        </Column>
                                        <Stack
                                          className="bg-cover bg-repeat lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] px-[3px] w-[100%]"
                                          compId="I43809:39297;556:303270"
                                          style={{
                                            backgroundImage:
                                              "url('images/img_search_16X163.png')",
                                          }}
                                          comWidth={163}
                                          comHeight={16}
                                          compLeft={0}
                                          compRight={0}
                                          compType="Stack"
                                        >
                                          <Stack
                                            className="absolute bottom-[0] lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] inset-x-[0] mx-[auto] w-[94%]"
                                            compId="777"
                                            comWidth={154}
                                            comHeight={18}
                                            compLeft={0}
                                            compRight={0}
                                            compType="Stack"
                                          >
                                            <Img
                                              src="images/img_shadow_18X154.png"
                                              className="absolute lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] top-[6%] w-[100%]"
                                              compId="I43809:39297;556:303271"
                                              comWidth={154}
                                              comHeight={18}
                                              compLeft={0}
                                              compRight={0}
                                              compType="Image"
                                              alt="shadow Four"
                                            />
                                            <Column
                                              className="absolute bg-cover bg-repeat inset-x-[0] items-center mx-[auto] top-[0] w-[97%]"
                                              compId="30"
                                              style={{
                                                backgroundImage:
                                                  "url('images/img_group30.png')",
                                              }}
                                              comWidth={150}
                                              comHeight={10}
                                              compLeft={0}
                                              compRight={0}
                                              compType="Column"
                                            >
                                              <Column
                                                className="bg-white_A700 items-center w-[100%]"
                                                compId="7"
                                                comWidth={150}
                                                comHeight={10}
                                                compLeft={0}
                                                compRight={0}
                                                compType="Column"
                                              >
                                                <Column
                                                  className="bg-cover bg-repeat justify-end p-[1px] w-[100%]"
                                                  compId="31"
                                                  style={{
                                                    backgroundImage:
                                                      "url('images/img_group31.png')",
                                                  }}
                                                  comWidth={150}
                                                  comHeight={10}
                                                  compLeft={0}
                                                  compRight={0}
                                                  compType="Column"
                                                >
                                                  <Column
                                                    className="bg-cover bg-repeat lg:h-[5px] h-[6px] 2xl:h-[7px] 3xl:h-[8px] ml-[2px] mt-[1px] pr-[1px] lg:w-[4px] xl:w-[5px] w-[6px] 3xl:w-[7px]"
                                                    compId="I43809:39297;556:303277"
                                                    style={{
                                                      backgroundImage:
                                                        "url('images/img_loupe.png')",
                                                    }}
                                                    comWidth={6}
                                                    comHeight={6}
                                                    compLeft={2}
                                                    compRight={0}
                                                    compType="Column"
                                                  >
                                                    <Column
                                                      className="bg-cover bg-repeat items-center w-[100%]"
                                                      compId="32"
                                                      style={{
                                                        backgroundImage:
                                                          "url('images/img_group32.png')",
                                                      }}
                                                      comWidth={5}
                                                      comHeight={6}
                                                      compLeft={0}
                                                      compRight={0}
                                                      compType="Column"
                                                    >
                                                      <Stack
                                                        className="bg-white_A700 lg:h-[5px] h-[6px] 2xl:h-[7px] 3xl:h-[8px] w-[100%]"
                                                        compId="8"
                                                        comWidth={5}
                                                        comHeight={6}
                                                        compLeft={0}
                                                        compRight={0}
                                                        compType="Stack"
                                                      >
                                                        <Img
                                                          src="images/img_specular_6X5.png"
                                                          className="absolute lg:h-[5px] h-[6px] 2xl:h-[7px] 3xl:h-[8px] w-[100%]"
                                                          compId="I43809:39297;556:303283"
                                                          comWidth={5}
                                                          comHeight={6}
                                                          compLeft={0}
                                                          compRight={0}
                                                          compType="Image"
                                                          alt="specular Six"
                                                        />
                                                      </Stack>
                                                    </Column>
                                                  </Column>
                                                </Column>
                                              </Column>
                                            </Column>
                                          </Stack>
                                          <Column
                                            className="absolute bottom-[0] left-[9%] w-[18%]"
                                            compId="I43809:39297;556:303285"
                                            comWidth={29}
                                            comHeight={11}
                                            compLeft={14}
                                            compRight={0}
                                            compType="Column"
                                          >
                                            <Column
                                              className="bg-cover bg-repeat items-center ml-[1px] p-[1px] w-[62%]"
                                              compId="33"
                                              style={{
                                                backgroundImage:
                                                  "url('images/img_group33.png')",
                                              }}
                                              comWidth={18}
                                              comHeight={2}
                                              compLeft={1}
                                              compRight={0}
                                              compType="Column"
                                            >
                                              <Stack
                                                className="bg-blue_50 h-[2px] 3xl:h-[3px] 2xl:h-[3px] mb-[1px] rounded-radius200 w-[100%]"
                                                compId="9"
                                                comWidth={17}
                                                comHeight={2}
                                                compLeft={0}
                                                compRight={0}
                                                compType="Stack"
                                              >
                                                <Img
                                                  src="images/img_specular_2X17.png"
                                                  className="absolute h-[2px] 3xl:h-[3px] 2xl:h-[3px] w-[100%]"
                                                  compId="I43809:39297;556:303291"
                                                  comWidth={17}
                                                  comHeight={2}
                                                  compLeft={0}
                                                  compRight={0}
                                                  compType="Image"
                                                  alt="specular Seven"
                                                />
                                              </Stack>
                                            </Column>
                                            <Img
                                              src="images/img_shadow_11X29.png"
                                              className="xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] w-[100%]"
                                              compId="I43809:39297;556:303286"
                                              comWidth={29}
                                              comHeight={11}
                                              compLeft={0}
                                              compRight={0}
                                              compType="Image"
                                              alt="shadow Five"
                                            />
                                          </Column>
                                        </Stack>
                                        <Row
                                          className="mt-[1px] w-[94%]"
                                          compId="814"
                                          comWidth={153}
                                          comHeight={73}
                                          compLeft={0}
                                          compRight={0}
                                          compType="Row"
                                        >
                                          <div
                                            className="mt-[2px] overflow-x-auto w-[78%]"
                                            compId="823"
                                            comWidth={119}
                                            comHeight={94}
                                            compLeft={0}
                                            compRight={0}
                                            compType="HorizontalScroll"
                                          >
                                            <Stack
                                              className="3xl:h-[113px] lg:h-[74px] xl:h-[84px] h-[94px] 2xl:h-[95px] w-[100%]"
                                              compId="I43809:39297;556:303384"
                                              comWidth={119}
                                              comHeight={94}
                                              compLeft={0}
                                              compRight={0}
                                              compType="Stack"
                                            >
                                              <Img
                                                src="images/img_shadow_94X119.png"
                                                className="absolute 3xl:h-[113px] lg:h-[74px] xl:h-[84px] h-[94px] 2xl:h-[95px] top-[1%] w-[100%]"
                                                compId="I43809:39297;556:303385"
                                                comWidth={119}
                                                comHeight={94}
                                                compLeft={0}
                                                compRight={0}
                                                compType="Image"
                                                alt="shadow Six"
                                              />
                                              <Column
                                                className="absolute bg-cover bg-repeat items-center left-[1%] top-[0] w-[82%]"
                                                compId="62"
                                                style={{
                                                  backgroundImage:
                                                    "url('images/img_group62.png')",
                                                }}
                                                comWidth={98}
                                                comHeight={69}
                                                compLeft={1}
                                                compRight={0}
                                                compType="Column"
                                              >
                                                <Column
                                                  className="bg-white_A700 items-center w-[100%]"
                                                  compId="13"
                                                  comWidth={98}
                                                  comHeight={69}
                                                  compLeft={0}
                                                  compRight={0}
                                                  compType="Column"
                                                >
                                                  <Stack
                                                    className="bg-cover bg-repeat lg:h-[54px] xl:h-[62px] h-[69px] 2xl:h-[70px] 3xl:h-[83px] px-[2px] w-[100%]"
                                                    compId="63"
                                                    style={{
                                                      backgroundImage:
                                                        "url('images/img_group63.png')",
                                                    }}
                                                    comWidth={98}
                                                    comHeight={69}
                                                    compLeft={0}
                                                    compRight={0}
                                                    compType="Stack"
                                                  >
                                                    <Stack
                                                      className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] inset-[0] justify-center m-[auto] w-[71%]"
                                                      compId="I43809:39297;556:303391"
                                                      comWidth={70}
                                                      comHeight={36}
                                                      compLeft={11}
                                                      compRight={11}
                                                      compType="Stack"
                                                    >
                                                      <Stack
                                                        className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[0] w-[86%]"
                                                        compId="779"
                                                        comWidth={60}
                                                        comHeight={36}
                                                        compLeft={0}
                                                        compRight={0}
                                                        compType="Stack"
                                                      >
                                                        <Stack
                                                          className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[0] w-[83%]"
                                                          compId="780"
                                                          comWidth={50}
                                                          comHeight={36}
                                                          compLeft={0}
                                                          compRight={0}
                                                          compType="Stack"
                                                        >
                                                          <Stack
                                                            className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[0] w-[80%]"
                                                            compId="781"
                                                            comWidth={40}
                                                            comHeight={36}
                                                            compLeft={0}
                                                            compRight={0}
                                                            compType="Stack"
                                                          >
                                                            <Stack
                                                              className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[0] w-[78%]"
                                                              compId="782"
                                                              comWidth={31}
                                                              comHeight={36}
                                                              compLeft={0}
                                                              compRight={0}
                                                              compType="Stack"
                                                            >
                                                              <Stack
                                                                className="absolute bottom-[0] lg:h-[22px] xl:h-[25px] h-[28px] 2xl:h-[29px] 3xl:h-[34px] left-[0] w-[68%]"
                                                                compId="783"
                                                                comWidth={21}
                                                                comHeight={28}
                                                                compLeft={0}
                                                                compRight={0}
                                                                compType="Stack"
                                                              >
                                                                <Column
                                                                  className="absolute bg-cover bg-repeat bottom-[4%] left-[0] p-[1px] w-[52%]"
                                                                  compId="I43809:39297;556:303392"
                                                                  style={{
                                                                    backgroundImage:
                                                                      "url('images/img_1_19X11.png')",
                                                                  }}
                                                                  comWidth={11}
                                                                  comHeight={19}
                                                                  compLeft={0}
                                                                  compRight={0}
                                                                  compType="Column"
                                                                >
                                                                  <Column
                                                                    className="bg-cover bg-repeat items-center lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] ml-[1px] w-[56%]"
                                                                    compId="64"
                                                                    style={{
                                                                      backgroundImage:
                                                                        "url('images/img_group64.png')",
                                                                    }}
                                                                    comWidth={5}
                                                                    comHeight={
                                                                      13
                                                                    }
                                                                    compLeft={1}
                                                                    compRight={
                                                                      0
                                                                    }
                                                                    compType="Column"
                                                                  >
                                                                    <Stack
                                                                      className="bg-green_700 lg:h-[11px] xl:h-[12px] h-[13px] 2xl:h-[14px] 3xl:h-[16px] w-[100%]"
                                                                      compId="14"
                                                                      comWidth={
                                                                        5
                                                                      }
                                                                      comHeight={
                                                                        13
                                                                      }
                                                                      compLeft={
                                                                        0
                                                                      }
                                                                      compRight={
                                                                        0
                                                                      }
                                                                      compType="Stack"
                                                                    >
                                                                      <Img
                                                                        src="images/img_specular_13X5.png"
                                                                        className="absolute lg:h-[11px] xl:h-[12px] h-[13px] 2xl:h-[14px] 3xl:h-[16px] w-[100%]"
                                                                        compId="I43809:39297;556:303398"
                                                                        comWidth={
                                                                          5
                                                                        }
                                                                        comHeight={
                                                                          13
                                                                        }
                                                                        compLeft={
                                                                          0
                                                                        }
                                                                        compRight={
                                                                          0
                                                                        }
                                                                        compType="Image"
                                                                        alt="specular Eight"
                                                                      />
                                                                    </Stack>
                                                                  </Column>
                                                                </Column>
                                                                <Column
                                                                  className="absolute bg-cover bg-repeat p-[1px] right-[0] w-[52%]"
                                                                  compId="I43809:39297;556:303399"
                                                                  style={{
                                                                    backgroundImage:
                                                                      "url('images/img_2_28X11.png')",
                                                                  }}
                                                                  comWidth={11}
                                                                  comHeight={28}
                                                                  compLeft={0}
                                                                  compRight={0}
                                                                  compType="Column"
                                                                >
                                                                  <Stack
                                                                    className="bg-cover bg-repeat lg:h-[17px] xl:h-[19px] h-[21px] 2xl:h-[22px] 3xl:h-[26px] lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] ml-[1px] w-[56%]"
                                                                    compId="66"
                                                                    style={{
                                                                      backgroundImage:
                                                                        "url('images/img_group66.png')",
                                                                    }}
                                                                    comWidth={5}
                                                                    comHeight={
                                                                      21
                                                                    }
                                                                    compLeft={1}
                                                                    compRight={
                                                                      0
                                                                    }
                                                                    compType="Stack"
                                                                  >
                                                                    <Line
                                                                      className="absolute bg-green_700 lg:h-[17px] xl:h-[19px] h-[21px] 2xl:h-[22px] 3xl:h-[26px] w-[5px]"
                                                                      compId="I43809:39297;556:303404"
                                                                      comWidth={
                                                                        5
                                                                      }
                                                                      comHeight={
                                                                        21
                                                                      }
                                                                      compLeft={
                                                                        0
                                                                      }
                                                                      compRight={
                                                                        0
                                                                      }
                                                                      compType="Line"
                                                                    />
                                                                    <Img
                                                                      src="images/img_specular_21X5.png"
                                                                      className="absolute lg:h-[17px] xl:h-[19px] h-[21px] 2xl:h-[22px] 3xl:h-[26px] w-[100%]"
                                                                      compId="I43809:39297;556:303405"
                                                                      comWidth={
                                                                        5
                                                                      }
                                                                      comHeight={
                                                                        21
                                                                      }
                                                                      compLeft={
                                                                        0
                                                                      }
                                                                      compRight={
                                                                        0
                                                                      }
                                                                      compType="Image"
                                                                      alt="specular Nine"
                                                                    />
                                                                  </Stack>
                                                                </Column>
                                                              </Stack>
                                                              <Column
                                                                className="absolute bg-cover bg-repeat p-[1px] right-[0] w-[35%]"
                                                                compId="I43809:39297;556:303406"
                                                                style={{
                                                                  backgroundImage:
                                                                    "url('images/img_3.png')",
                                                                }}
                                                                comWidth={11}
                                                                comHeight={36}
                                                                compLeft={0}
                                                                compRight={0}
                                                                compType="Column"
                                                              >
                                                                <Stack
                                                                  className="bg-cover bg-repeat lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] lg:mb-[4px] xl:mb-[5px] mb-[6px] 3xl:mb-[7px] ml-[1px] w-[56%]"
                                                                  compId="68"
                                                                  style={{
                                                                    backgroundImage:
                                                                      "url('images/img_group68.png')",
                                                                  }}
                                                                  comWidth={5}
                                                                  comHeight={30}
                                                                  compLeft={1}
                                                                  compRight={0}
                                                                  compType="Stack"
                                                                >
                                                                  <Line
                                                                    className="absolute bg-green_700 lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] w-[5px]"
                                                                    compId="I43809:39297;556:303411"
                                                                    comWidth={5}
                                                                    comHeight={
                                                                      30
                                                                    }
                                                                    compLeft={0}
                                                                    compRight={
                                                                      0
                                                                    }
                                                                    compType="Line"
                                                                  />
                                                                  <Img
                                                                    src="images/img_specular_30X5.png"
                                                                    className="absolute lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] w-[100%]"
                                                                    compId="I43809:39297;556:303412"
                                                                    comWidth={5}
                                                                    comHeight={
                                                                      30
                                                                    }
                                                                    compLeft={0}
                                                                    compRight={
                                                                      0
                                                                    }
                                                                    compType="Image"
                                                                    alt="specular Ten"
                                                                  />
                                                                </Stack>
                                                              </Column>
                                                            </Stack>
                                                            <Column
                                                              className="absolute bg-cover bg-repeat bottom-[3%] p-[1px] right-[0] w-[28%]"
                                                              compId="I43809:39297;556:303413"
                                                              style={{
                                                                backgroundImage:
                                                                  "url('images/img_4.png')",
                                                              }}
                                                              comWidth={11}
                                                              comHeight={19}
                                                              compLeft={0}
                                                              compRight={0}
                                                              compType="Column"
                                                            >
                                                              <Column
                                                                className="bg-cover bg-repeat items-center lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] ml-[1px] w-[56%]"
                                                                compId="69"
                                                                style={{
                                                                  backgroundImage:
                                                                    "url('images/img_group64.png')",
                                                                }}
                                                                comWidth={5}
                                                                comHeight={13}
                                                                compLeft={1}
                                                                compRight={0}
                                                                compType="Column"
                                                              >
                                                                <Stack
                                                                  className="bg-green_700 lg:h-[11px] xl:h-[12px] h-[13px] 2xl:h-[14px] 3xl:h-[16px] w-[100%]"
                                                                  compId="15"
                                                                  comWidth={5}
                                                                  comHeight={13}
                                                                  compLeft={0}
                                                                  compRight={0}
                                                                  compType="Stack"
                                                                >
                                                                  <Img
                                                                    src="images/img_specular_13X5.png"
                                                                    className="absolute lg:h-[11px] xl:h-[12px] h-[13px] 2xl:h-[14px] 3xl:h-[16px] w-[100%]"
                                                                    compId="I43809:39297;556:303419"
                                                                    comWidth={5}
                                                                    comHeight={
                                                                      13
                                                                    }
                                                                    compLeft={0}
                                                                    compRight={
                                                                      0
                                                                    }
                                                                    compType="Image"
                                                                    alt="specular Eleven"
                                                                  />
                                                                </Stack>
                                                              </Column>
                                                            </Column>
                                                          </Stack>
                                                          <Column
                                                            className="absolute bg-cover bg-repeat bottom-[0] p-[1px] right-[0] w-[22%]"
                                                            compId="I43809:39297;556:303420"
                                                            style={{
                                                              backgroundImage:
                                                                "url('images/img_5.png')",
                                                            }}
                                                            comWidth={11}
                                                            comHeight={28}
                                                            compLeft={0}
                                                            compRight={0}
                                                            compType="Column"
                                                          >
                                                            <Stack
                                                              className="bg-cover bg-repeat lg:h-[17px] xl:h-[19px] h-[21px] 2xl:h-[22px] 3xl:h-[26px] lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] ml-[1px] w-[56%]"
                                                              compId="71"
                                                              style={{
                                                                backgroundImage:
                                                                  "url('images/img_group66.png')",
                                                              }}
                                                              comWidth={5}
                                                              comHeight={21}
                                                              compLeft={1}
                                                              compRight={0}
                                                              compType="Stack"
                                                            >
                                                              <Line
                                                                className="absolute bg-green_700 lg:h-[17px] xl:h-[19px] h-[21px] 2xl:h-[22px] 3xl:h-[26px] w-[5px]"
                                                                compId="I43809:39297;556:303425"
                                                                comWidth={5}
                                                                comHeight={21}
                                                                compLeft={0}
                                                                compRight={0}
                                                                compType="Line"
                                                              />
                                                              <Img
                                                                src="images/img_specular_21X5.png"
                                                                className="absolute lg:h-[17px] xl:h-[19px] h-[21px] 2xl:h-[22px] 3xl:h-[26px] w-[100%]"
                                                                compId="I43809:39297;556:303426"
                                                                comWidth={5}
                                                                comHeight={21}
                                                                compLeft={0}
                                                                compRight={0}
                                                                compType="Image"
                                                                alt="specular Twelve"
                                                              />
                                                            </Stack>
                                                          </Column>
                                                        </Stack>
                                                        <Column
                                                          className="absolute bg-cover bg-repeat bottom-[0] p-[1px] right-[0] w-[18%]"
                                                          compId="I43809:39297;556:303427"
                                                          style={{
                                                            backgroundImage:
                                                              "url('images/img_6.png')",
                                                          }}
                                                          comWidth={11}
                                                          comHeight={28}
                                                          compLeft={0}
                                                          compRight={0}
                                                          compType="Column"
                                                        >
                                                          <Stack
                                                            className="bg-cover bg-repeat lg:h-[17px] xl:h-[19px] h-[21px] 2xl:h-[22px] 3xl:h-[26px] lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] ml-[1px] w-[56%]"
                                                            compId="73"
                                                            style={{
                                                              backgroundImage:
                                                                "url('images/img_group66.png')",
                                                            }}
                                                            comWidth={5}
                                                            comHeight={21}
                                                            compLeft={1}
                                                            compRight={0}
                                                            compType="Stack"
                                                          >
                                                            <Line
                                                              className="absolute bg-green_700 lg:h-[17px] xl:h-[19px] h-[21px] 2xl:h-[22px] 3xl:h-[26px] w-[5px]"
                                                              compId="I43809:39297;556:303432"
                                                              comWidth={5}
                                                              comHeight={21}
                                                              compLeft={0}
                                                              compRight={0}
                                                              compType="Line"
                                                            />
                                                            <Img
                                                              src="images/img_specular_21X5.png"
                                                              className="absolute lg:h-[17px] xl:h-[19px] h-[21px] 2xl:h-[22px] 3xl:h-[26px] w-[100%]"
                                                              compId="I43809:39297;556:303433"
                                                              comWidth={5}
                                                              comHeight={21}
                                                              compLeft={0}
                                                              compRight={0}
                                                              compType="Image"
                                                              alt="specular Thirteen"
                                                            />
                                                          </Stack>
                                                        </Column>
                                                      </Stack>
                                                      <Column
                                                        className="absolute bg-cover bg-repeat p-[1px] right-[0] w-[16%]"
                                                        compId="I43809:39297;556:303434"
                                                        style={{
                                                          backgroundImage:
                                                            "url('images/img_7.png')",
                                                        }}
                                                        comWidth={11}
                                                        comHeight={36}
                                                        compLeft={0}
                                                        compRight={0}
                                                        compType="Column"
                                                      >
                                                        <Stack
                                                          className="bg-cover bg-repeat lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] lg:mb-[4px] xl:mb-[5px] mb-[6px] 3xl:mb-[7px] ml-[1px] w-[56%]"
                                                          compId="75"
                                                          style={{
                                                            backgroundImage:
                                                              "url('images/img_group68.png')",
                                                          }}
                                                          comWidth={5}
                                                          comHeight={30}
                                                          compLeft={1}
                                                          compRight={0}
                                                          compType="Stack"
                                                        >
                                                          <Line
                                                            className="absolute bg-green_700 lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] w-[5px]"
                                                            compId="I43809:39297;556:303439"
                                                            comWidth={5}
                                                            comHeight={30}
                                                            compLeft={0}
                                                            compRight={0}
                                                            compType="Line"
                                                          />
                                                          <Img
                                                            src="images/img_specular_30X5.png"
                                                            className="absolute lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] w-[100%]"
                                                            compId="I43809:39297;556:303440"
                                                            comWidth={5}
                                                            comHeight={30}
                                                            compLeft={0}
                                                            compRight={0}
                                                            compType="Image"
                                                            alt="specular Fourteen"
                                                          />
                                                        </Stack>
                                                      </Column>
                                                    </Stack>
                                                    <Img
                                                      src="images/img_folder.png"
                                                      className="absolute lg:h-[51px] xl:h-[58px] h-[65px] 2xl:h-[66px] 3xl:h-[79px] inset-[0] justify-center m-[auto] w-[96%]"
                                                      compId="I43809:39297;556:303441"
                                                      comWidth={94}
                                                      comHeight={65}
                                                      compLeft={1}
                                                      compRight={1}
                                                      compType="Image"
                                                      alt="folder"
                                                    />
                                                  </Stack>
                                                </Column>
                                              </Column>
                                            </Stack>
                                          </div>
                                          <Column
                                            className="items-center w-[35%]"
                                            compId="813"
                                            comWidth={54}
                                            comHeight={73}
                                            compLeft={0}
                                            compRight={0}
                                            compType="Column"
                                          >
                                            <Stack
                                              className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] w-[100%]"
                                              compId="I43809:39297;556:303338"
                                              comWidth={54}
                                              comHeight={30}
                                              compLeft={0}
                                              compRight={0}
                                              compType="Stack"
                                            >
                                              <Img
                                                src="images/img_shadow_27X49.png"
                                                className="absolute lg:h-[21px] xl:h-[25px] h-[27px] 2xl:h-[28px] 3xl:h-[33px] inset-[0] justify-center m-[auto] w-[91%]"
                                                compId="I43809:39297;556:303339"
                                                comWidth={49}
                                                comHeight={27}
                                                compLeft={1}
                                                compRight={1}
                                                compType="Image"
                                                alt="shadow Seven"
                                              />
                                              <Column
                                                className="absolute bg-cover bg-repeat items-center justify-end p-[2px] w-[100%]"
                                                compId="52"
                                                style={{
                                                  backgroundImage:
                                                    "url('images/img_group52.png')",
                                                }}
                                                comWidth={54}
                                                comHeight={30}
                                                compLeft={0}
                                                compRight={0}
                                                compType="Column"
                                              >
                                                <Row
                                                  className="bg-cover bg-repeat justify-end mt-[1px] p-[1px] w-[94%]"
                                                  compId="I43809:39297;556:303344"
                                                  style={{
                                                    backgroundImage:
                                                      "url('images/img_1_bluegray_300.png')",
                                                  }}
                                                  comWidth={47}
                                                  comHeight={25}
                                                  compLeft={0}
                                                  compRight={0}
                                                  compType="Row"
                                                >
                                                  <Column
                                                    className="bg-cover bg-repeat lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] px-[1px] lg:w-[10px] xl:w-[12px] w-[14px] 3xl:w-[16px]"
                                                    compId="I43809:39297;556:303345"
                                                    style={{
                                                      backgroundImage:
                                                        "url('images/img_profile.png')",
                                                    }}
                                                    comWidth={14}
                                                    comHeight={14}
                                                    compLeft={0}
                                                    compRight={0}
                                                    compType="Column"
                                                  >
                                                    <Column
                                                      className="bg-cover bg-repeat lg:h-[11px] xl:h-[12px] h-[13px] 2xl:h-[14px] 3xl:h-[16px] items-center mb-[1px] ml-[1px] lg:w-[10px] xl:w-[11px] w-[13px] 3xl:w-[15px]"
                                                      compId="I43809:39297;556:303348"
                                                      style={{
                                                        backgroundImage:
                                                          "url('images/img_bg.png')",
                                                      }}
                                                      comWidth={13}
                                                      comHeight={13}
                                                      compLeft={1}
                                                      compRight={0}
                                                      compType="Column"
                                                    >
                                                      <Stack
                                                        className="bg-cover bg-repeat lg:h-[11px] xl:h-[12px] h-[13px] 2xl:h-[14px] 3xl:h-[16px] lg:w-[10px] xl:w-[11px] w-[13px] 3xl:w-[15px]"
                                                        compId="54"
                                                        style={{
                                                          backgroundImage:
                                                            "url('images/img_group54.png')",
                                                        }}
                                                        comWidth={13}
                                                        comHeight={13}
                                                        compLeft={0}
                                                        compRight={0}
                                                        compType="Stack"
                                                      >
                                                        <Column
                                                          className="absolute bottom-[8%] inset-x-[0] items-center mx-[auto] w-[77%]"
                                                          compId="810"
                                                          comWidth={10}
                                                          comHeight={11}
                                                          compLeft={0}
                                                          compRight={0}
                                                          compType="Column"
                                                        >
                                                          <Column
                                                            className="bg-cover bg-repeat h-[4px] 3xl:h-[5px] 2xl:h-[5px] items-center xl:w-[3px] lg:w-[3px] w-[4px]"
                                                            compId="I43809:39297;556:303356"
                                                            style={{
                                                              backgroundImage:
                                                                "url('images/img_head.png')",
                                                            }}
                                                            comWidth={4}
                                                            comHeight={4}
                                                            compLeft={0}
                                                            compRight={0}
                                                            compType="Column"
                                                          >
                                                            <div
                                                              className="bg-white_A700 h-[4px] 3xl:h-[5px] 2xl:h-[5px] xl:w-[3px] lg:w-[3px] w-[4px]"
                                                              compId="I43809:39297;556:303359"
                                                              comWidth={4}
                                                              comHeight={4}
                                                              compLeft={0}
                                                              compRight={0}
                                                              compType="View"
                                                            ></div>
                                                          </Column>
                                                          <Column
                                                            className="bg-cover bg-repeat items-center mt-[1px] w-[100%]"
                                                            compId="I43809:39297;556:303352"
                                                            style={{
                                                              backgroundImage:
                                                                "url('images/img_body.png')",
                                                            }}
                                                            comWidth={10}
                                                            comHeight={5}
                                                            compLeft={0}
                                                            compRight={0}
                                                            compType="Column"
                                                          >
                                                            <div
                                                              className="bg-white_A700 lg:h-[4px] h-[5px] 2xl:h-[6px] 3xl:h-[7px] w-[100%]"
                                                              compId="I43809:39297;556:303355"
                                                              comWidth={10}
                                                              comHeight={5}
                                                              compLeft={0}
                                                              compRight={0}
                                                              compType="View"
                                                            ></div>
                                                          </Column>
                                                        </Column>
                                                        <Stack
                                                          className="absolute bg-cover bg-repeat lg:h-[11px] xl:h-[12px] h-[13px] 2xl:h-[14px] 3xl:h-[16px] lg:w-[10px] xl:w-[11px] w-[13px] 3xl:w-[15px]"
                                                          compId="55"
                                                          style={{
                                                            backgroundImage:
                                                              "url('images/img_group55.png')",
                                                          }}
                                                          comWidth={13}
                                                          comHeight={13}
                                                          compLeft={0}
                                                          compRight={0}
                                                          compType="Stack"
                                                        >
                                                          <Img
                                                            src="images/img_group55.png"
                                                            className="absolute lg:h-[11px] xl:h-[12px] h-[13px] 2xl:h-[14px] 3xl:h-[16px] lg:w-[10px] xl:w-[11px] w-[13px] 3xl:w-[15px]"
                                                            compId="I43809:39297;556:303361"
                                                            comWidth={13}
                                                            comHeight={13}
                                                            compLeft={0}
                                                            compRight={0}
                                                            compType="Image"
                                                            alt="specular Fifteen"
                                                          />
                                                        </Stack>
                                                      </Stack>
                                                    </Column>
                                                  </Column>
                                                  <Stack
                                                    className="lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] mb-[1px] ml-[1px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] w-[58%]"
                                                    compId="763"
                                                    comWidth={26}
                                                    comHeight={15}
                                                    compLeft={1}
                                                    compRight={0}
                                                    compType="Stack"
                                                  >
                                                    <Column
                                                      className="absolute bottom-[0] w-[100%]"
                                                      compId="I43809:39297;556:303364"
                                                      comWidth={26}
                                                      comHeight={10}
                                                      compLeft={0}
                                                      compRight={0}
                                                      compType="Column"
                                                    >
                                                      <Column
                                                        className="bg-cover bg-repeat items-center ml-[1px] p-[1px] w-[62%]"
                                                        compId="56"
                                                        style={{
                                                          backgroundImage:
                                                            "url('images/img_group56.png')",
                                                        }}
                                                        comWidth={16}
                                                        comHeight={2}
                                                        compLeft={1}
                                                        compRight={0}
                                                        compType="Column"
                                                      >
                                                        <Column
                                                          className="bg-bluegray_300 items-center mb-[1px] rounded-radius200 w-[100%]"
                                                          compId="11"
                                                          comWidth={15}
                                                          comHeight={2}
                                                          compLeft={0}
                                                          compRight={0}
                                                          compType="Column"
                                                        >
                                                          <Column
                                                            className="bg-cover bg-repeat items-center w-[100%]"
                                                            compId="57"
                                                            style={{
                                                              backgroundImage:
                                                                "url('images/img_specular_2X17.png')",
                                                            }}
                                                            comWidth={15}
                                                            comHeight={2}
                                                            compLeft={0}
                                                            compRight={0}
                                                            compType="Column"
                                                          >
                                                            <Stack
                                                              className="bg-cover bg-repeat h-[2px] 3xl:h-[3px] 2xl:h-[3px] w-[100%]"
                                                              compId="58"
                                                              style={{
                                                                backgroundImage:
                                                                  "url('images/img_specular_2X17.png')",
                                                              }}
                                                              comWidth={15}
                                                              comHeight={2}
                                                              compLeft={0}
                                                              compRight={0}
                                                              compType="Stack"
                                                            >
                                                              <Img
                                                                src="images/img_specular_2X17.png"
                                                                className="absolute h-[2px] 3xl:h-[3px] 2xl:h-[3px] w-[100%]"
                                                                compId="I43809:39297;556:303372"
                                                                comWidth={15}
                                                                comHeight={2}
                                                                compLeft={0}
                                                                compRight={0}
                                                                compType="Image"
                                                                alt="specular Sixteen"
                                                              />
                                                            </Stack>
                                                          </Column>
                                                        </Column>
                                                      </Column>
                                                      <Img
                                                        src="images/img_shadow_11X29.png"
                                                        className="2xl:h-[10px] 3xl:h-[11px] lg:h-[7px] h-[9px] w-[100%]"
                                                        compId="I43809:39297;556:303365"
                                                        comWidth={26}
                                                        comHeight={9}
                                                        compLeft={0}
                                                        compRight={0}
                                                        compType="Image"
                                                        alt="shadow Eight"
                                                      />
                                                    </Column>
                                                    <Column
                                                      className="absolute top-[0] w-[100%]"
                                                      compId="I43809:39297;556:303374"
                                                      comWidth={26}
                                                      comHeight={10}
                                                      compLeft={0}
                                                      compRight={0}
                                                      compType="Column"
                                                    >
                                                      <Column
                                                        className="bg-cover bg-repeat items-center ml-[1px] p-[1px] w-[62%]"
                                                        compId="59"
                                                        style={{
                                                          backgroundImage:
                                                            "url('images/img_group56.png')",
                                                        }}
                                                        comWidth={16}
                                                        comHeight={2}
                                                        compLeft={1}
                                                        compRight={0}
                                                        compType="Column"
                                                      >
                                                        <Column
                                                          className="bg-bluegray_300 items-center mb-[1px] rounded-radius200 w-[100%]"
                                                          compId="12"
                                                          comWidth={15}
                                                          comHeight={2}
                                                          compLeft={0}
                                                          compRight={0}
                                                          compType="Column"
                                                        >
                                                          <Column
                                                            className="bg-cover bg-repeat items-center w-[100%]"
                                                            compId="60"
                                                            style={{
                                                              backgroundImage:
                                                                "url('images/img_specular_2X17.png')",
                                                            }}
                                                            comWidth={15}
                                                            comHeight={2}
                                                            compLeft={0}
                                                            compRight={0}
                                                            compType="Column"
                                                          >
                                                            <Stack
                                                              className="bg-cover bg-repeat h-[2px] 3xl:h-[3px] 2xl:h-[3px] w-[100%]"
                                                              compId="61"
                                                              style={{
                                                                backgroundImage:
                                                                  "url('images/img_specular_2X17.png')",
                                                              }}
                                                              comWidth={15}
                                                              comHeight={2}
                                                              compLeft={0}
                                                              compRight={0}
                                                              compType="Stack"
                                                            >
                                                              <Img
                                                                src="images/img_specular_2X17.png"
                                                                className="absolute h-[2px] 3xl:h-[3px] 2xl:h-[3px] w-[100%]"
                                                                compId="I43809:39297;556:303382"
                                                                comWidth={15}
                                                                comHeight={2}
                                                                compLeft={0}
                                                                compRight={0}
                                                                compType="Image"
                                                                alt="specular Seventeen"
                                                              />
                                                            </Stack>
                                                          </Column>
                                                        </Column>
                                                      </Column>
                                                      <Img
                                                        src="images/img_shadow_11X29.png"
                                                        className="2xl:h-[10px] 3xl:h-[11px] lg:h-[7px] h-[9px] w-[100%]"
                                                        compId="I43809:39297;556:303375"
                                                        comWidth={26}
                                                        comHeight={9}
                                                        compLeft={0}
                                                        compRight={0}
                                                        compType="Image"
                                                        alt="shadow Nine"
                                                      />
                                                    </Column>
                                                  </Stack>
                                                </Row>
                                              </Column>
                                            </Stack>
                                            <Stack
                                              className="lg:h-[11px] xl:h-[12px] h-[13px] 2xl:h-[14px] 3xl:h-[16px] w-[91%]"
                                              compId="I43809:39297;556:303324"
                                              comWidth={49}
                                              comHeight={13}
                                              compLeft={0}
                                              compRight={0}
                                              compType="Stack"
                                            >
                                              <Column
                                                className="absolute bg-cover bg-repeat items-center p-[1px] w-[100%]"
                                                compId="49"
                                                style={{
                                                  backgroundImage:
                                                    "url('images/img_group49.png')",
                                                }}
                                                comWidth={49}
                                                comHeight={13}
                                                compLeft={0}
                                                compRight={0}
                                                compType="Column"
                                              >
                                                <Stack
                                                  className="bg-cover bg-repeat xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] mb-[1px] px-[4px] w-[100%]"
                                                  compId="50"
                                                  style={{
                                                    backgroundImage:
                                                      "url('images/img_group50.png')",
                                                  }}
                                                  comWidth={47}
                                                  comHeight={11}
                                                  compLeft={0}
                                                  compRight={0}
                                                  compType="Stack"
                                                >
                                                  <Img
                                                    src="images/img_eye_bluegray_900.png"
                                                    className="absolute h-[3px] 3xl:h-[4px] 2xl:h-[4px] inset-y-[0] my-[auto] right-[2%] w-[11%]"
                                                    compId="I43809:39297;556:303335"
                                                    comWidth={5}
                                                    comHeight={3}
                                                    compLeft={0}
                                                    compRight={1}
                                                    compType="Image"
                                                    alt="Eye"
                                                  />
                                                </Stack>
                                              </Column>
                                              <Column
                                                className="absolute bottom-[0] left-[6%] w-[53%]"
                                                compId="I43809:39297;556:303328"
                                                comWidth={26}
                                                comHeight={10}
                                                compLeft={3}
                                                compRight={0}
                                                compType="Column"
                                              >
                                                <Column
                                                  className="bg-cover bg-repeat items-center ml-[1px] p-[1px] w-[62%]"
                                                  compId="51"
                                                  style={{
                                                    backgroundImage:
                                                      "url('images/img_group51.png')",
                                                  }}
                                                  comWidth={16}
                                                  comHeight={2}
                                                  compLeft={1}
                                                  compRight={0}
                                                  compType="Column"
                                                >
                                                  <Stack
                                                    className="bg-bluegray_900 h-[2px] 3xl:h-[3px] 2xl:h-[3px] my-[1px] w-[100%]"
                                                    compId="10"
                                                    comWidth={15}
                                                    comHeight={2}
                                                    compLeft={0}
                                                    compRight={0}
                                                    compType="Stack"
                                                  >
                                                    <Img
                                                      src="images/img_specular_2X17.png"
                                                      className="absolute h-[2px] 3xl:h-[3px] 2xl:h-[3px] w-[100%]"
                                                      compId="I43809:39297;556:303334"
                                                      comWidth={15}
                                                      comHeight={2}
                                                      compLeft={0}
                                                      compRight={0}
                                                      compType="Image"
                                                      alt="specular Eighteen"
                                                    />
                                                  </Stack>
                                                </Column>
                                                <Img
                                                  src="images/img_shadow_11X29.png"
                                                  className="2xl:h-[10px] 3xl:h-[11px] lg:h-[7px] h-[9px] w-[100%]"
                                                  compId="I43809:39297;556:303329"
                                                  comWidth={26}
                                                  comHeight={9}
                                                  compLeft={0}
                                                  compRight={0}
                                                  compType="Image"
                                                  alt="shadow Ten"
                                                />
                                              </Column>
                                            </Stack>
                                            <Img
                                              src="images/img_menu.png"
                                              className="xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] mt-[1px] w-[87%]"
                                              compId="I43809:39297;556:303320"
                                              comWidth={47}
                                              comHeight={11}
                                              compLeft={0}
                                              compRight={0}
                                              compType="Image"
                                              alt="menu"
                                            />
                                            <Stack
                                              className="lg:h-[11px] xl:h-[12px] h-[13px] 2xl:h-[14px] 3xl:h-[16px] mt-[2px] w-[91%]"
                                              compId="I43809:39297;556:303293"
                                              comWidth={49}
                                              comHeight={13}
                                              compLeft={0}
                                              compRight={0}
                                              compType="Stack"
                                            >
                                              <Column
                                                className="absolute bg-cover bg-repeat items-center p-[1px] w-[100%]"
                                                compId="I43809:39297;556:303294"
                                                style={{
                                                  backgroundImage:
                                                    "url('images/img_bg_13X49.png')",
                                                }}
                                                comWidth={49}
                                                comHeight={13}
                                                compLeft={0}
                                                compRight={0}
                                                compType="Column"
                                              >
                                                <Column
                                                  className="bg-cover bg-repeat items-center mb-[1px] py-[1px] w-[100%]"
                                                  compId="44"
                                                  style={{
                                                    backgroundImage:
                                                      "url('images/img_group44.png')",
                                                  }}
                                                  comWidth={47}
                                                  comHeight={11}
                                                  compLeft={0}
                                                  compRight={0}
                                                  compType="Column"
                                                >
                                                  <Stack
                                                    className="bg-cover bg-repeat xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] px-[3px] w-[100%]"
                                                    compId="45"
                                                    style={{
                                                      backgroundImage:
                                                        "url('images/img_folder.png')",
                                                    }}
                                                    comWidth={47}
                                                    comHeight={11}
                                                    compLeft={0}
                                                    compRight={0}
                                                    compType="Stack"
                                                  >
                                                    <Img
                                                      src="images/img_eye_bluegray_900_3X6.png"
                                                      className="absolute bottom-[0] h-[3px] 3xl:h-[4px] 2xl:h-[4px] right-[2%] w-[13%]"
                                                      compId="I43809:39297;556:303311"
                                                      comWidth={6}
                                                      comHeight={3}
                                                      compLeft={0}
                                                      compRight={1}
                                                      compType="Image"
                                                      alt="Eye One"
                                                    />
                                                  </Stack>
                                                </Column>
                                              </Column>
                                              <Column
                                                className="absolute bottom-[0] left-[8%] w-[53%]"
                                                compId="I43809:39297;556:303301"
                                                comWidth={26}
                                                comHeight={10}
                                                compLeft={4}
                                                compRight={0}
                                                compType="Column"
                                              >
                                                <Column
                                                  className="bg-cover bg-repeat items-center ml-[1px] p-[1px] w-[62%]"
                                                  compId="46"
                                                  style={{
                                                    backgroundImage:
                                                      "url('images/img_group51.png')",
                                                  }}
                                                  comWidth={16}
                                                  comHeight={2}
                                                  compLeft={1}
                                                  compRight={0}
                                                  compType="Column"
                                                >
                                                  <Column
                                                    className="bg-bluegray_900_60 items-center my-[1px] rounded-radius200 w-[100%]"
                                                    compId="I43809:39297;556:303304"
                                                    comWidth={15}
                                                    comHeight={2}
                                                    compLeft={0}
                                                    compRight={0}
                                                    compType="Column"
                                                  >
                                                    <Column
                                                      className="bg-cover bg-repeat items-center w-[100%]"
                                                      compId="47"
                                                      style={{
                                                        backgroundImage:
                                                          "url('images/img_specular_2X17.png')",
                                                      }}
                                                      comWidth={15}
                                                      comHeight={2}
                                                      compLeft={0}
                                                      compRight={0}
                                                      compType="Column"
                                                    >
                                                      <Stack
                                                        className="bg-cover bg-repeat h-[2px] 3xl:h-[3px] 2xl:h-[3px] w-[100%]"
                                                        compId="48"
                                                        style={{
                                                          backgroundImage:
                                                            "url('images/img_specular_2X17.png')",
                                                        }}
                                                        comWidth={15}
                                                        comHeight={2}
                                                        compLeft={0}
                                                        compRight={0}
                                                        compType="Stack"
                                                      >
                                                        <Img
                                                          src="images/img_specular_2X17.png"
                                                          className="absolute h-[2px] 3xl:h-[3px] 2xl:h-[3px] w-[100%]"
                                                          compId="I43809:39297;556:303310"
                                                          comWidth={15}
                                                          comHeight={2}
                                                          compLeft={0}
                                                          compRight={0}
                                                          compType="Image"
                                                          alt="specular Nineteen"
                                                        />
                                                      </Stack>
                                                    </Column>
                                                  </Column>
                                                </Column>
                                                <Img
                                                  src="images/img_shadow_11X29.png"
                                                  className="2xl:h-[10px] 3xl:h-[11px] lg:h-[7px] h-[9px] w-[100%]"
                                                  compId="I43809:39297;556:303302"
                                                  comWidth={26}
                                                  comHeight={9}
                                                  compLeft={0}
                                                  compRight={0}
                                                  compType="Image"
                                                  alt="shadow Eleven"
                                                />
                                              </Column>
                                            </Stack>
                                          </Column>
                                        </Row>
                                      </Column>
                                    </Column>
                                  </Column>
                                  <Stack
                                    className="absolute bottom-[15%] lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] right-[0] w-[29%]"
                                    compId="I43809:39297;556:303444"
                                    comWidth={48}
                                    comHeight={22}
                                    compLeft={0}
                                    compRight={0}
                                    compType="Stack"
                                  >
                                    <Img
                                      src="images/img_layer.png"
                                      className="absolute lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] left-[0] w-[96%]"
                                      compId="I43809:39297;556:303447"
                                      comWidth={46}
                                      comHeight={22}
                                      compLeft={0}
                                      compRight={0}
                                      compType="Image"
                                      alt="Layer"
                                    />
                                    <Stack
                                      className="absolute xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] inset-x-[0] mx-[auto] top-[5%] w-[98%]"
                                      compId="I43809:39297;556:303521"
                                      comWidth={47}
                                      comHeight={11}
                                      compLeft={0}
                                      compRight={0}
                                      compType="Stack"
                                    >
                                      <Stack
                                        className="absolute bg-cover bg-repeat xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] px-[4px] w-[100%]"
                                        compId="76"
                                        style={{
                                          backgroundImage:
                                            "url('images/img_group76.png')",
                                        }}
                                        comWidth={47}
                                        comHeight={11}
                                        compLeft={0}
                                        compRight={0}
                                        compType="Stack"
                                      >
                                        <Img
                                          src="images/img_group_gray_101.png"
                                          className="absolute h-[3px] 3xl:h-[4px] 2xl:h-[4px] inset-y-[0] my-[auto] right-[2%] w-[11%]"
                                          compId="I43809:39297;556:303531"
                                          comWidth={5}
                                          comHeight={3}
                                          compLeft={0}
                                          compRight={1}
                                          compType="Image"
                                          alt="Group Three"
                                        />
                                      </Stack>
                                      <Column
                                        className="absolute bottom-[0] left-[6%] w-[55%]"
                                        compId="I43809:39297;556:303524"
                                        comWidth={26}
                                        comHeight={10}
                                        compLeft={3}
                                        compRight={0}
                                        compType="Column"
                                      >
                                        <Column
                                          className="bg-cover bg-repeat items-center ml-[1px] w-[58%]"
                                          compId="77"
                                          style={{
                                            backgroundImage:
                                              "url('images/img_group77.png')",
                                          }}
                                          comWidth={15}
                                          comHeight={2}
                                          compLeft={1}
                                          compRight={0}
                                          compType="Column"
                                        >
                                          <Stack
                                            className="bg-gray_102 h-[2px] 3xl:h-[3px] 2xl:h-[3px] w-[100%]"
                                            compId="16"
                                            comWidth={15}
                                            comHeight={2}
                                            compLeft={0}
                                            compRight={0}
                                            compType="Stack"
                                          >
                                            <Img
                                              src="images/img_specular_2X17.png"
                                              className="absolute h-[2px] 3xl:h-[3px] 2xl:h-[3px] w-[100%]"
                                              compId="I43809:39297;556:303530"
                                              comWidth={15}
                                              comHeight={2}
                                              compLeft={0}
                                              compRight={0}
                                              compType="Image"
                                              alt="specular Twenty"
                                            />
                                          </Stack>
                                        </Column>
                                        <Img
                                          src="images/img_shadow_11X29.png"
                                          className="2xl:h-[10px] 3xl:h-[11px] lg:h-[7px] h-[9px] w-[100%]"
                                          compId="I43809:39297;556:303525"
                                          comWidth={26}
                                          comHeight={9}
                                          compLeft={0}
                                          compRight={0}
                                          compType="Image"
                                          alt="shadow Twelve"
                                        />
                                      </Column>
                                    </Stack>
                                  </Stack>
                                </Stack>
                                <Column
                                  className="absolute bg-cover bg-repeat bottom-[15%] items-center right-[0] rotate-[180deg] w-[23%]"
                                  compId="I43809:39297;556:303534"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_cursor.png')",
                                  }}
                                  comWidth={45}
                                  comHeight={47}
                                  compLeft={0}
                                  compRight={0}
                                  compType="Column"
                                >
                                  <Stack
                                    className="bg-white_A700 lg:h-[37px] xl:h-[42px] h-[47px] 2xl:h-[48px] 3xl:h-[57px] w-[100%]"
                                    compId="17"
                                    comWidth={45}
                                    comHeight={47}
                                    compLeft={0}
                                    compRight={0}
                                    compType="Stack"
                                  >
                                    <Img
                                      src="images/img_specular_47X45.png"
                                      className="absolute lg:h-[37px] xl:h-[42px] h-[47px] 2xl:h-[48px] 3xl:h-[57px] w-[100%]"
                                      compId="I43809:39297;556:303539"
                                      comWidth={45}
                                      comHeight={47}
                                      compLeft={0}
                                      compRight={0}
                                      compType="Image"
                                      alt="specular TwentyOne"
                                    />
                                  </Stack>
                                </Column>
                              </Stack>
                            </Stack>
                            <Img
                              src="images/img_shadow_40X54.png"
                              className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] right-[11%] top-[0] w-[22%]"
                              compId="I43809:39297;556:303542"
                              comWidth={54}
                              comHeight={40}
                              compLeft={0}
                              compRight={26}
                              compType="Image"
                              alt="shadow Thirteen"
                            />
                          </Stack>
                          <Column
                            className="absolute bg-cover bg-repeat items-center right-[19%] top-[0] w-[13%]"
                            compId="I43809:39297;556:303543"
                            style={{
                              backgroundImage: "url('images/img_sphere.png')",
                            }}
                            comWidth={32}
                            comHeight={33}
                            compLeft={0}
                            compRight={46}
                            compType="Column"
                          >
                            <Column
                              className="bg-purple_200 items-center rounded-radius200 w-[100%]"
                              compId="18"
                              comWidth={32}
                              comHeight={33}
                              compLeft={0}
                              compRight={0}
                              compType="Column"
                            >
                              <Column
                                className="bg-cover bg-repeat items-center w-[100%]"
                                compId="I43809:39297;556:303548"
                                style={{
                                  backgroundImage:
                                    "url('images/img_specular.png')",
                                }}
                                comWidth={32}
                                comHeight={33}
                                compLeft={0}
                                compRight={0}
                                compType="Column"
                              >
                                <Stack
                                  className="bg-cover bg-repeat lg:h-[26px] xl:h-[30px] h-[33px] 2xl:h-[34px] 3xl:h-[40px] w-[100%]"
                                  compId="78"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_specular.png')",
                                  }}
                                  comWidth={32}
                                  comHeight={33}
                                  compLeft={0}
                                  compRight={0}
                                  compType="Stack"
                                >
                                  <Img
                                    src="images/img_specular.png"
                                    className="absolute lg:h-[26px] xl:h-[30px] h-[33px] 2xl:h-[34px] 3xl:h-[40px] w-[100%]"
                                    compId="I43809:39297;556:303551"
                                    comWidth={32}
                                    comHeight={33}
                                    compLeft={0}
                                    compRight={0}
                                    compType="Image"
                                    alt="imageFour One"
                                  />
                                </Stack>
                              </Column>
                            </Column>
                          </Column>
                        </Stack>
                        <Stack
                          className="xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] w-[36%]"
                          compId="I43809:39297;556:303205"
                          comWidth={108}
                          comHeight={11}
                          compLeft={0}
                          compRight={0}
                          compType="Stack"
                        >
                          <Stack
                            className="absolute xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] w-[100%]"
                            compId="784"
                            comWidth={108}
                            comHeight={11}
                            compLeft={0}
                            compRight={0}
                            compType="Stack"
                          >
                            <Stack
                              className="absolute xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] top-[9%] w-[100%]"
                              compId="785"
                              comWidth={108}
                              comHeight={11}
                              compLeft={0}
                              compRight={0}
                              compType="Stack"
                            >
                              <Img
                                src="images/img_shadow_11X108.png"
                                className="absolute xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] top-[9%] w-[100%]"
                                compId="I43809:39297;556:303206"
                                comWidth={108}
                                comHeight={11}
                                compLeft={0}
                                compRight={0}
                                compType="Image"
                                alt="shadow Fourteen"
                              />
                              <Img
                                src="images/img_keyboard.png"
                                className="absolute h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] inset-x-[0] mx-[auto] top-[0] w-[89%]"
                                compId="I43809:39297;556:303207"
                                comWidth={96}
                                comHeight={10}
                                compLeft={0}
                                compRight={0}
                                compType="Image"
                                alt="Keyboard"
                              />
                            </Stack>
                            <Stack
                              className="absolute h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] inset-x-[0] mx-[auto] top-[0] w-[89%]"
                              compId="I43809:39297;556:303208"
                              comWidth={96}
                              comHeight={10}
                              compLeft={0}
                              compRight={0}
                              compType="Stack"
                            >
                              <div
                                className="absolute bg-gray_100 h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] rounded-radius200 top-[10%] w-[100%]"
                                compId="I43809:39297;556:303211"
                                comWidth={96}
                                comHeight={10}
                                compLeft={0}
                                compRight={0}
                                compType="View"
                              ></div>
                              <Column
                                className="absolute bg-cover bg-repeat inset-x-[0] items-center mx-[auto] top-[0] w-[93%]"
                                compId="I43809:39297;556:303212"
                                style={{
                                  backgroundImage: "url('images/img_keys.png')",
                                }}
                                comWidth={89}
                                comHeight={7}
                                compLeft={0}
                                compRight={0}
                                compType="Column"
                              >
                                <div
                                  className="bg-white_A700 lg:h-[6px] h-[7px] 2xl:h-[8px] 3xl:h-[9px] w-[100%]"
                                  compId="I43809:39297;556:303215"
                                  comWidth={89}
                                  comHeight={7}
                                  compLeft={0}
                                  compRight={0}
                                  compType="View"
                                ></div>
                              </Column>
                            </Stack>
                          </Stack>
                          <Stack
                            className="absolute bg-cover bg-repeat h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] inset-x-[0] mx-[auto] top-[9%] w-[89%]"
                            compId="26"
                            style={{
                              backgroundImage: "url('images/img_group26.png')",
                            }}
                            comWidth={96}
                            comHeight={10}
                            compLeft={0}
                            compRight={0}
                            compType="Stack"
                          >
                            <Img
                              src="images/img_group26.png"
                              className="absolute h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] w-[100%]"
                              compId="I43809:39297;556:303218"
                              comWidth={96}
                              comHeight={10}
                              compLeft={0}
                              compRight={0}
                              compType="Image"
                              alt="specular TwentyTwo"
                            />
                          </Stack>
                        </Stack>
                      </Column>
                    </Stack>
                    <Column
                      className="absolute bg-white_A700 bottom-[0] justify-end lg:p-[18px] xl:p-[21px] p-[24px] 3xl:p-[28px] rounded-bl-[4px] rounded-br-[4px] rounded-tl-[0] rounded-tr-[0] shadow-bs1 w-[100%]"
                      compId="I43809:39297;43809:24070"
                      comWidth={370}
                      comHeight={198}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-bold lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] mt-[1px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_800 w-[auto]"
                        compId="I43809:39297;556:303557"
                        comWidth={109}
                        comHeight={28}
                        compLeft={7}
                        compRight={0}
                        compType="Text"
                      >
                        Subcrible us
                      </Text>
                      <Text
                        className="font-normal lg:leading-[18px] xl:leading-[21px] leading-[24.00px] 2xl:leading-[24px] 3xl:leading-[28px] lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[69%]"
                        compId="I43809:39297;556:303558"
                        comWidth={223}
                        comHeight={48}
                        compLeft={7}
                        compRight={0}
                        compType="Text"
                      >
                        To make friend with others in our community
                      </Text>
                      <Row
                        className="items-center lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] mr-[auto] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[75%]"
                        compId="795"
                        comWidth={243}
                        comHeight={48}
                        compLeft={7}
                        compRight={0}
                        compType="Row"
                      >
                        <Button
                          className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[61%]"
                          compId="I43809:39297;556:303553"
                          comWidth={149}
                          comHeight={48}
                          compLeft={0}
                          compRight={0}
                          compType="Button"
                          shape="CircleBorder24"
                          size="lg"
                          variant="FillDeeporange300"
                        >
                          Subcrible now
                        </Button>
                        <Button
                          className="font-normal lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[32%]"
                          compId="I43809:39297;556:303555"
                          comWidth={78}
                          comHeight={48}
                          compLeft={16}
                          compRight={0}
                          compType="Button"
                          shape="CircleBorder24"
                          size="lg"
                          variant="FillGray50"
                        >
                          skip
                        </Button>
                      </Row>
                    </Column>
                  </Stack>
                </Column>
                <Column
                  className="absolute bg-white_A700 bottom-[0] items-center left-[0] lg:p-[20px] xl:p-[23px] p-[26px] 3xl:p-[31px] rounded-radius4 shadow-bs1 w-[65%]"
                  compId="43809:39301"
                  comWidth={761}
                  comHeight={409}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="items-center justify-between w-[98%]"
                    compId="800"
                    comWidth={697}
                    comHeight={40}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                      compId="I43809:39301;556:303146"
                      comWidth={84}
                      comHeight={28}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Statistics
                    </Text>
                    <Button
                      className="flex items-center justify-center text-center w-[25%]"
                      compId="I43809:39301;556:303135"
                      comWidth={0}
                      comHeight={40}
                      compLeft={0}
                      compRight={0}
                      compType="Button"
                      leftIcon={
                        <Img
                          src="images/img_calendar.png"
                          className="w-[16.67px] mr-[13px] text-center lg:w-[12px] lg:mr-[10px] xl:w-[14px] xl:mr-[11px] 2xl:w-[16px] 3xl:w-[20px] 3xl:mr-[15px]"
                          compId="I43809:39301;556:303136;5:156"
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
                    className="lg:mb-[10px] xl:mb-[12px] mb-[14px] 3xl:mb-[16px] lg:mt-[24px] xl:mt-[27px] mt-[31px] 3xl:mt-[37px] w-[98%]"
                    compId="801"
                    comWidth={697}
                    comHeight={271}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Column
                      className="w-[16%]"
                      compId="I43809:39301;556:303138"
                      comWidth={114}
                      comHeight={48}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-center w-[49%]"
                        compId="I43809:39301;556:303140"
                        comWidth={56}
                        comHeight={16}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <div
                          className="bg-indigo_401 lg:h-[5px] h-[6px] 2xl:h-[7px] 3xl:h-[8px] rounded-radius50 lg:w-[4px] xl:w-[5px] w-[6px] 3xl:w-[7px]"
                          compId="I43809:39301;556:303141"
                          comWidth={6}
                          comHeight={6}
                          compLeft={0}
                          compRight={0}
                          compType="View"
                        ></div>
                        <Text
                          className="font-medium lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                          compId="I43809:39301;556:303142"
                          comWidth={42}
                          comHeight={16}
                          compLeft={8}
                          compRight={0}
                          compType="Text"
                        >
                          Income
                        </Text>
                      </Row>
                      <Row
                        className="items-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[60%]"
                        compId="I43809:39301;556:303143"
                        comWidth={68}
                        comHeight={16}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <div
                          className="bg-amber_300 lg:h-[5px] h-[6px] 2xl:h-[7px] 3xl:h-[8px] rounded-radius50 lg:w-[4px] xl:w-[5px] w-[6px] 3xl:w-[7px]"
                          compId="I43809:39301;556:303144"
                          comWidth={6}
                          comHeight={6}
                          compLeft={0}
                          compRight={0}
                          compType="View"
                        ></div>
                        <Text
                          className="font-medium lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                          compId="I43809:39301;556:303145"
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
                    <Column
                      className="w-[84%]"
                      compId="I43809:39301;556:303085"
                      comWidth={582}
                      comHeight={271}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-center justify-evenly w-[100%]"
                        compId="798"
                        comWidth={582}
                        comHeight={240}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Column
                          className="items-end w-[9%]"
                          compId="I43809:39301;556:303104"
                          comWidth={54}
                          comHeight={240}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-normal not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                            compId="I43809:39301;556:303105"
                            comWidth={32}
                            comHeight={16}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            1,400
                          </Text>
                          <Text
                            className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                            compId="I43809:39301;556:303106"
                            comWidth={31}
                            comHeight={16}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            1,200
                          </Text>
                          <Text
                            className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                            compId="I43809:39301;556:303107"
                            comWidth={31}
                            comHeight={16}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            1,000
                          </Text>
                          <Text
                            className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                            compId="I43809:39301;556:303108"
                            comWidth={23}
                            comHeight={16}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            800
                          </Text>
                          <Text
                            className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                            compId="I43809:39301;556:303109"
                            comWidth={23}
                            comHeight={16}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            600
                          </Text>
                          <Text
                            className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                            compId="I43809:39301;556:303110"
                            comWidth={23}
                            comHeight={16}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            400
                          </Text>
                          <Text
                            className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                            compId="I43809:39301;556:303111"
                            comWidth={23}
                            comHeight={16}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            200
                          </Text>
                          <Text
                            className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                            compId="I43809:39301;556:303112"
                            comWidth={8}
                            comHeight={16}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            0
                          </Text>
                        </Column>
                        <Stack
                          className="bg-cover bg-repeat font-poppins lg:h-[177px] xl:h-[202px] h-[227px] 2xl:h-[228px] 3xl:h-[273px] lg:px-[13px] xl:px-[15px] px-[17px] 3xl:px-[20px] w-[91%]"
                          compId="79"
                          style={{
                            backgroundImage: "url('images/img_group79.png')",
                          }}
                          comWidth={528}
                          comHeight={227}
                          compLeft={0}
                          compRight={0}
                          compType="Stack"
                        >
                          <Img
                            src="images/img_frame.png"
                            className="absolute bottom-[0] lg:h-[161px] xl:h-[184px] h-[206px] 2xl:h-[207px] 3xl:h-[248px] inset-x-[0] mx-[auto] w-[85%]"
                            compId="I43809:39301;556:303113"
                            comWidth={450}
                            comHeight={206}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="Frame"
                          />
                          <Stack
                            className="absolute bg-cover bg-repeat 3xl:h-[101px] lg:h-[66px] xl:h-[75px] h-[84px] 2xl:h-[85px] left-[0] lg:px-[10px] xl:px-[11px] px-[13px] 3xl:px-[15px] shadow-bs3 top-[12%] w-[29%]"
                            compId="43809:39302"
                            style={{
                              backgroundImage:
                                "url('images/img_group_white_A700.png')",
                            }}
                            comWidth={154}
                            comHeight={84}
                            compLeft={0}
                            compRight={0}
                            compType="Stack"
                          >
                            <Row
                              className="absolute items-center justify-center left-[0] top-[4%] w-[31%]"
                              compId="43809:39306"
                              comWidth={48}
                              comHeight={16}
                              compLeft={0}
                              compRight={0}
                              compType="Row"
                            >
                              <div
                                className="bg-indigo_401 lg:h-[5px] h-[6px] 2xl:h-[7px] 3xl:h-[8px] rounded-radius50 lg:w-[4px] xl:w-[5px] w-[6px] 3xl:w-[7px]"
                                compId="43809:39308"
                                comWidth={6}
                                comHeight={6}
                                compLeft={0}
                                compRight={0}
                                compType="View"
                              ></div>
                              <Text
                                className="font-semibold lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_900 w-[auto]"
                                compId="43809:39307"
                                comWidth={34}
                                comHeight={16}
                                compLeft={8}
                                compRight={0}
                                compType="Text"
                              >
                                200.0
                              </Text>
                            </Row>
                            <Column
                              className="absolute left-[0] top-[4%] w-[74%]"
                              compId="43809:39309"
                              comWidth={114}
                              comHeight={45}
                              compLeft={0}
                              compRight={0}
                              compType="Column"
                            >
                              <Row
                                className="items-center justify-end ml-[auto] w-[42%]"
                                compId="796"
                                comWidth={48}
                                comHeight={16}
                                compLeft={66}
                                compRight={0}
                                compType="Row"
                              >
                                <div
                                  className="bg-amber_300 lg:h-[5px] h-[6px] 2xl:h-[7px] 3xl:h-[8px] rounded-radius50 lg:w-[4px] xl:w-[5px] w-[6px] 3xl:w-[7px]"
                                  compId="43809:39312"
                                  comWidth={6}
                                  comHeight={6}
                                  compLeft={0}
                                  compRight={0}
                                  compType="View"
                                ></div>
                                <Text
                                  className="font-semibold lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_900 w-[auto]"
                                  compId="43809:39310"
                                  comWidth={34}
                                  comHeight={16}
                                  compLeft={8}
                                  compRight={0}
                                  compType="Text"
                                >
                                  2,000
                                </Text>
                              </Row>
                              <Text
                                className="font-medium lg:mr-[14px] xl:mr-[16px] mr-[19px] 3xl:mr-[22px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-bluegray_400 w-[auto]"
                                compId="43809:39311"
                                comWidth={95}
                                comHeight={16}
                                compLeft={0}
                                compRight={19}
                                compType="Text"
                              >
                                21 September, 2021
                              </Text>
                            </Column>
                          </Stack>
                        </Stack>
                      </Row>
                      <Row
                        className="items-center justify-end ml-[auto] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] w-[78%]"
                        compId="I43809:39301;556:303096"
                        comWidth={455}
                        comHeight={16}
                        compLeft={91}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-normal not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                          compId="I43809:39301;556:303097"
                          comWidth={25}
                          comHeight={16}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          Mon
                        </Text>
                        <Text
                          className="font-normal lg:ml-[35px] xl:ml-[40px] ml-[46px] 3xl:ml-[55px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                          compId="I43809:39301;556:303098"
                          comWidth={21}
                          comHeight={16}
                          compLeft={46}
                          compRight={0}
                          compType="Text"
                        >
                          Tue
                        </Text>
                        <Text
                          className="font-normal lg:ml-[41px] xl:ml-[47px] ml-[53px] 3xl:ml-[63px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                          compId="I43809:39301;556:303099"
                          comWidth={24}
                          comHeight={16}
                          compLeft={53}
                          compRight={0}
                          compType="Text"
                        >
                          Wed
                        </Text>
                        <Text
                          className="font-normal lg:ml-[36px] xl:ml-[41px] ml-[47px] 3xl:ml-[56px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                          compId="I43809:39301;556:303100"
                          comWidth={22}
                          comHeight={16}
                          compLeft={47}
                          compRight={0}
                          compType="Text"
                        >
                          Thu
                        </Text>
                        <Text
                          className="font-normal lg:ml-[42px] xl:ml-[48px] ml-[55px] 3xl:ml-[66px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                          compId="I43809:39301;556:303101"
                          comWidth={14}
                          comHeight={16}
                          compLeft={55}
                          compRight={0}
                          compType="Text"
                        >
                          Fri
                        </Text>
                        <Text
                          className="font-normal lg:ml-[42px] xl:ml-[48px] ml-[55px] 3xl:ml-[66px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                          compId="I43809:39301;556:303102"
                          comWidth={19}
                          comHeight={16}
                          compLeft={55}
                          compRight={0}
                          compType="Text"
                        >
                          Sat
                        </Text>
                        <Text
                          className="font-normal lg:ml-[39px] xl:ml-[45px] ml-[51px] 3xl:ml-[61px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                          compId="I43809:39301;556:303103"
                          comWidth={22}
                          comHeight={16}
                          compLeft={51}
                          compRight={0}
                          compType="Text"
                        >
                          Sun
                        </Text>
                      </Row>
                    </Column>
                  </Row>
                </Column>
                <Column
                  className="absolute bg-cover bg-repeat justify-end lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] right-[0] shadow-bs3 top-[0] w-[32%]"
                  compId="43809:40081"
                  style={{ backgroundImage: "url('images/img_popup.png')" }}
                  comWidth={376}
                  comHeight={466}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="items-center mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]"
                    compId="I43809:40081;43809:40208"
                    comWidth={311}
                    comHeight={56}
                    compLeft={1}
                    compRight={0}
                    compType="Row"
                  >
                    <Img
                      src="images/img_sherlocktoyfa.png"
                      className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                      compId="I43809:40081;43809:40211;43812:47214"
                      comWidth={48}
                      comHeight={48}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="SherlockToyFa One"
                    />
                    <Column
                      className="lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] w-[66%]"
                      compId="I43809:40081;43809:40212"
                      comWidth={205}
                      comHeight={56}
                      compLeft={20}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_800 w-[auto]"
                        compId="I43809:40081;43809:40213"
                        comWidth={98}
                        comHeight={28}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Sam Brown
                      </Text>
                      <Text
                        className="font-normal mt-[4px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                        compId="I43809:40081;43809:40214"
                        comWidth={171}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        sambrown@gmail.com
                      </Text>
                    </Column>
                    <Img
                      src="images/img_lock_bluegray_400.png"
                      className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:w-[14px] xl:w-[16px] w-[18px] 3xl:w-[21px]"
                      compId="I43809:40081;43809:40215"
                      comWidth={18}
                      comHeight={18}
                      compLeft={20}
                      compRight={0}
                      compType="Image"
                      alt="lock"
                    />
                  </Row>
                  <Button
                    className="font-bold lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[100%]"
                    compId="I43809:40081;596:306421"
                    comWidth={312}
                    comHeight={56}
                    compLeft={0}
                    compRight={0}
                    compType="Button"
                    shape="CircleBorder28"
                    size="xl"
                    variant="FillDeeporange300"
                  >
                    Recharge money
                  </Button>
                  <Row
                    className="items-center mr-[auto] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[35%]"
                    compId="I43809:40081;596:306406"
                    comWidth={109}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Img
                      src="images/img_creditcard.png"
                      className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] w-[22%]"
                      compId="I43809:40081;596:306407;1:1772"
                      comWidth={24}
                      comHeight={18}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="creditcard"
                    />
                    <Text
                      className="font-medium lg:ml-[10px] xl:ml-[11px] ml-[13px] 3xl:ml-[15px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                      compId="I43809:40081;596:306408"
                      comWidth={72}
                      comHeight={24}
                      compLeft={13}
                      compRight={0}
                      compType="Text"
                    >
                      My wallet
                    </Text>
                  </Row>
                  <Line
                    className="bg-indigo_50 h-[1px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[1px]"
                    compId="I43809:40081;596:306409"
                    comWidth={1}
                    comHeight={1}
                    compLeft={0}
                    compRight={0}
                    compType="Line"
                  />
                  <Row
                    className="items-center mr-[auto] lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] w-[36%]"
                    compId="I43809:40081;596:306410"
                    comWidth={112}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Img
                      src="images/img_user_bluegray_900_24X24.png"
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      compId="I43809:40081;596:306411"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="user One"
                    />
                    <Text
                      className="font-medium xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                      compId="I43809:40081;596:306412"
                      comWidth={76}
                      comHeight={24}
                      compLeft={12}
                      compRight={0}
                      compType="Text"
                    >
                      My profile
                    </Text>
                  </Row>
                  <Line
                    className="bg-indigo_50 h-[1px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[1px]"
                    compId="I43809:40081;596:306413"
                    comWidth={1}
                    comHeight={1}
                    compLeft={0}
                    compRight={0}
                    compType="Line"
                  />
                  <Radio
                    value="Settings"
                    className="font-medium lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900"
                    inputClassName="h-[24px] mr-[5px] w-[24px]"
                    compId="I43809:40081;596:306414"
                    comWidth={100}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Radio"
                    checked={false}
                    name="Settings"
                    label="Settings"
                    variant="illBluegray900"
                  ></Radio>
                  <Line
                    className="bg-indigo_50 h-[1px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[1px]"
                    compId="I43809:40081;596:306417"
                    comWidth={1}
                    comHeight={1}
                    compLeft={0}
                    compRight={0}
                    compType="Line"
                  />
                  <Row
                    className="items-center mr-[auto] lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] w-[29%]"
                    compId="I43809:40081;596:306418"
                    comWidth={90}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Img
                      src="images/img_logout.png"
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      compId="I43809:40081;596:306419"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="logout"
                    />
                    <Text
                      className="font-medium xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                      compId="I43809:40081;596:306420"
                      comWidth={54}
                      comHeight={24}
                      compLeft={12}
                      compRight={0}
                      compType="Text"
                    >
                      Logout
                    </Text>
                  </Row>
                </Column>
              </Stack>
            </Stack>
            <Row
              className="font-inter items-center justify-between lg:my-[14px] xl:my-[16px] my-[19px] 3xl:my-[22px] w-[97%]"
              compId="809"
              comWidth={1150}
              comHeight={436}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Stack
                className="lg:h-[340px] xl:h-[388px] h-[436px] 2xl:h-[437px] 3xl:h-[524px] w-[66%]"
                compId="761"
                comWidth={761}
                comHeight={436}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Column
                  className="absolute h-[max-content] inset-y-[0] left-[7%] my-[auto] w-[7%]"
                  compId="43809:39290"
                  comWidth={55}
                  comHeight={52}
                  compLeft={54}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal ml-[3px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                    compId="43809:39291"
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
                    compId="43809:39292"
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
                  className="absolute bg-white_A700 lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs1 w-[100%]"
                  compId="43809:39298"
                  comWidth={761}
                  comHeight={436}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="justify-between w-[100%]"
                    compId="803"
                    comWidth={697}
                    comHeight={32}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                      compId="I43809:39298;556:303621"
                      comWidth={70}
                      comHeight={28}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      My card
                    </Text>
                    <Img
                      src="images/img_menu_bluegray_400.png"
                      className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                      compId="I43809:39298;556:303660"
                      comWidth={32}
                      comHeight={32}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="menu One"
                    />
                  </Row>
                  <SelectBox
                    className="bg-transparent font-medium p-[0] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[100%]"
                    compId="I43809:39298;556:303605"
                    comWidth={0}
                    comHeight={48}
                    compLeft={0}
                    compRight={0}
                    compType="Dropdown"
                    placeholderClassName="bg-transparent text-bluegray_800"
                    name="language"
                    placeholder="1234 **** 4567 8901"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown.png"
                        className="w-[11.67px] h-[6.67px] mr-[20px] lg:w-[9px] lg:h-[6px] lg:mr-[15px] xl:w-[10px] xl:h-[6px] xl:mr-[17px] 2xl:w-[11px] 2xl:h-[7px] 3xl:w-[14px] 3xl:h-[9px] 3xl:mr-[24px]"
                        compId="I43809:39298;556:303617;1:1053"
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
                    variant="utlineIndigo50"
                  ></SelectBox>
                  <Row
                    className="lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[98%]"
                    compId="806"
                    comWidth={685}
                    comHeight={248}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Column
                      className="w-[51%]"
                      compId="805"
                      comWidth={349}
                      comHeight={248}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="bg-indigo_401 lg:pt-[4px] xl:pt-[5px] pt-[6px] 3xl:pt-[7px] rounded-radius4 w-[86%]"
                        compId="I43809:39298;556:303622"
                        comWidth={301}
                        comHeight={184}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Stack
                          className="3xl:h-[100px] lg:h-[65px] xl:h-[74px] h-[83px] 2xl:h-[84px] 3xl:mt-[112px] lg:mt-[73px] xl:mt-[83px] mt-[94px] w-[60%]"
                          compId="764"
                          comWidth={181}
                          comHeight={83}
                          compLeft={0}
                          compRight={0}
                          compType="Stack"
                        >
                          <Text
                            className="absolute bottom-[29%] font-medium right-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]"
                            compId="I43809:39298;556:303627"
                            comWidth={159}
                            comHeight={24}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            1234 **** 4567 8901
                          </Text>
                          <Img
                            src="images/img_group_83X96.png"
                            className="absolute 3xl:h-[100px] lg:h-[65px] xl:h-[74px] h-[83px] 2xl:h-[84px] left-[0] rounded-radius4 w-[53%]"
                            compId="I43809:39298;556:303633"
                            comWidth={96}
                            comHeight={83}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="Group Four"
                          />
                        </Stack>
                        <Stack
                          className="lg:h-[126px] xl:h-[144px] h-[161px] 2xl:h-[162px] 3xl:h-[194px] lg:mb-[12px] xl:mb-[14px] mb-[16px] 3xl:mb-[19px] lg:ml-[32px] xl:ml-[37px] ml-[42px] 3xl:ml-[50px] w-[26%]"
                          compId="765"
                          comWidth={77}
                          comHeight={161}
                          compLeft={42}
                          compRight={0}
                          compType="Stack"
                        >
                          <Img
                            src="images/img_dollar_white_A700.png"
                            className="absolute lg:h-[10px] xl:h-[11px] h-[12px] 2xl:h-[13px] 3xl:h-[15px] inset-x-[0] mx-[auto] rounded-radius4 top-[8%] w-[52%]"
                            compId="I43809:39298;556:303628"
                            comWidth={40}
                            comHeight={12}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="dollar"
                          />
                          <Img
                            src="images/img_group_161X77.png"
                            className="absolute lg:h-[126px] xl:h-[144px] h-[161px] 2xl:h-[162px] 3xl:h-[194px] rounded-radius4 w-[100%]"
                            compId="I43809:39298;556:303637"
                            comWidth={77}
                            comHeight={161}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="Group Five"
                          />
                        </Stack>
                      </Row>
                      <Button
                        className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[86%]"
                        compId="I43809:39298;556:303618"
                        comWidth={301}
                        comHeight={48}
                        compLeft={0}
                        compRight={0}
                        compType="Button"
                        size="lg"
                        variant="FillWhiteA700"
                      >
                        Add new card
                      </Button>
                    </Column>
                    <Column
                      className="w-[49%]"
                      compId="I43809:39298;556:303641"
                      comWidth={336}
                      comHeight={224}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-center ml-[2px] w-[60%]"
                        compId="I43809:39298;556:303642"
                        comWidth={203}
                        comHeight={24}
                        compLeft={2}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                          compId="I43809:39298;556:303643"
                          comWidth={79}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          Card Type
                        </Text>
                        <Text
                          className="font-medium 3xl:ml-[109px] lg:ml-[70px] xl:ml-[80px] ml-[91px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                          compId="I43809:39298;556:303644"
                          comWidth={33}
                          comHeight={24}
                          compLeft={91}
                          compRight={0}
                          compType="Text"
                        >
                          Visa
                        </Text>
                      </Row>
                      <Row
                        className="items-center ml-[4px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[63%]"
                        compId="I43809:39298;556:303645"
                        comWidth={211}
                        comHeight={24}
                        compLeft={4}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                          compId="I43809:39298;556:303646"
                          comWidth={89}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          Card holder
                        </Text>
                        <Text
                          className="font-medium lg:ml-[61px] xl:ml-[70px] ml-[79px] 3xl:ml-[94px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                          compId="I43809:39298;556:303647"
                          comWidth={43}
                          comHeight={24}
                          compLeft={79}
                          compRight={0}
                          compType="Text"
                        >
                          AvoRi
                        </Text>
                      </Row>
                      <Row
                        className="items-center justify-between lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[97%]"
                        compId="I43809:39298;556:303648"
                        comWidth={326}
                        comHeight={24}
                        compLeft={5}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                          compId="I43809:39298;556:303649"
                          comWidth={99}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          Card number
                        </Text>
                        <Text
                          className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                          compId="I43809:39298;556:303650"
                          comWidth={159}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          1234 **** 4567 8901
                        </Text>
                      </Row>
                      <Row
                        className="items-center ml-[1px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[64%]"
                        compId="I43809:39298;556:303651"
                        comWidth={215}
                        comHeight={24}
                        compLeft={1}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                          compId="I43809:39298;556:303652"
                          comWidth={57}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          Expired
                        </Text>
                        <Text
                          className="font-medium xl:ml-[101px] ml-[114px] 3xl:ml-[136px] lg:ml-[88px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                          compId="I43809:39298;556:303653"
                          comWidth={44}
                          comHeight={24}
                          compLeft={114}
                          compRight={0}
                          compType="Text"
                        >
                          21/09
                        </Text>
                      </Row>
                      <Row
                        className="items-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[59%]"
                        compId="I43809:39298;556:303654"
                        comWidth={198}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                          compId="I43809:39298;556:303655"
                          comWidth={34}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          CVV
                        </Text>
                        <Text
                          className="flex font-medium items-center lg:ml-[108px] xl:ml-[124px] ml-[140px] 3xl:ml-[168px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                          compId="I43809:39298;556:303656"
                          comWidth={24}
                          comHeight={24}
                          compLeft={140}
                          compRight={0}
                          compType="Text"
                        >
                          ***
                        </Text>
                      </Row>
                      <Row
                        className="items-center ml-[4px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[60%]"
                        compId="I43809:39298;556:303657"
                        comWidth={203}
                        comHeight={24}
                        compLeft={4}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                          compId="I43809:39298;556:303658"
                          comWidth={102}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          Total balance
                        </Text>
                        <Text
                          className="font-medium lg:ml-[51px] xl:ml-[58px] ml-[66px] 3xl:ml-[79px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                          compId="I43809:39298;556:303659"
                          comWidth={35}
                          comHeight={24}
                          compLeft={66}
                          compRight={0}
                          compType="Text"
                        >
                          $0.0
                        </Text>
                      </Row>
                    </Column>
                  </Row>
                </Column>
              </Stack>
              <Column
                className="bg-white_A700 lg:pt-[12px] xl:pt-[14px] pt-[16px] 3xl:pt-[19px] lg:px-[12px] xl:px-[14px] px-[16px] 3xl:px-[19px] rounded-radius4 shadow-bs1 w-[32%]"
                compId="43809:39299"
                comWidth={370}
                comHeight={435}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                  compId="I43809:39299;556:303560"
                  comWidth={114}
                  comHeight={28}
                  compLeft={16}
                  compRight={0}
                  compType="Text"
                >
                  Transactions
                </Text>
                <Row
                  className="justify-end lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[95%]"
                  compId="807"
                  comWidth={322}
                  comHeight={343}
                  compLeft={16}
                  compRight={0}
                  compType="Row"
                >
                  <Column
                    className="w-[99%]"
                    compId="I43809:39299;556:303561"
                    comWidth={318}
                    comHeight={343}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <List
                      className="gap-[0] min-h-[auto] w-[90%]"
                      compId="820"
                      comWidth={286}
                      comHeight={296}
                      compLeft={0}
                      compRight={0}
                      compType="List"
                      orientation="vertical"
                    >
                      <Row
                        className="items-center justify-between lg:my-[12px] xl:my-[14px] my-[16px] 3xl:my-[19px] w-[100%]"
                        compId="I43809:39299;556:303562"
                        comWidth={286}
                        comHeight={50}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Img
                          src="images/img_robototoyfacefi.png"
                          className="lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]"
                          compId="I43809:39299;556:303564;341:279749"
                          comWidth={46}
                          comHeight={46}
                          compLeft={0}
                          compRight={0}
                          compType="CircleImage"
                          alt="RobotoToyFaceFi"
                        />
                        <Column
                          className="w-[56%]"
                          compId="I43809:39299;556:303565"
                          comWidth={159}
                          comHeight={50}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                            compId="I43809:39299;556:303566"
                            comWidth={76}
                            comHeight={24}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            Ackerman
                          </Text>
                          <Text
                            className="font-normal mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                            compId="I43809:39299;556:303567"
                            comWidth={110}
                            comHeight={22}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            7:00 • 21/10/2021
                          </Text>
                        </Column>
                        <Text
                          className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                          compId="I43809:39299;556:303568"
                          comWidth={49}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          -$12.0
                        </Text>
                      </Row>
                      <Line
                        className="self-center w-[100%] h-[1px] bg-indigo_50"
                        compId="I43809:39299;556:303593"
                        comWidth={286}
                        comHeight={1}
                        compLeft={0}
                        compRight={0}
                        compType="Line"
                      />
                      <Row
                        className="items-center justify-between lg:my-[12px] xl:my-[14px] my-[16px] 3xl:my-[19px] w-[100%]"
                        compId="I43809:39299;556:303570"
                        comWidth={286}
                        comHeight={50}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Img
                          src="images/img_punktoyface1.png"
                          className="lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]"
                          compId="I43809:39299;556:303572;341:279747"
                          comWidth={46}
                          comHeight={46}
                          compLeft={0}
                          compRight={0}
                          compType="CircleImage"
                          alt="PunkToyFaceOne"
                        />
                        <Column
                          className="w-[51%]"
                          compId="I43809:39299;556:303573"
                          comWidth={145}
                          comHeight={50}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                            compId="I43809:39299;556:303574"
                            comWidth={56}
                            comHeight={24}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            Blanker
                          </Text>
                          <Text
                            className="font-normal mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                            compId="I43809:39299;556:303575"
                            comWidth={110}
                            comHeight={22}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            7:00 • 21/10/2021
                          </Text>
                        </Column>
                        <Text
                          className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                          compId="I43809:39299;556:303576"
                          comWidth={63}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          +$100.0
                        </Text>
                      </Row>
                      <Line
                        className="self-center w-[100%] h-[1px] bg-indigo_50"
                        compId="I43809:39299;556:303593"
                        comWidth={286}
                        comHeight={1}
                        compLeft={0}
                        compRight={0}
                        compType="Line"
                      />
                      <Row
                        className="items-center justify-between lg:my-[12px] xl:my-[14px] my-[16px] 3xl:my-[19px] w-[100%]"
                        compId="I43809:39299;556:303578"
                        comWidth={286}
                        comHeight={50}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Img
                          src="images/img_vangoghbyamrit.png"
                          className="lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]"
                          compId="I43809:39299;556:303580;341:279748"
                          comWidth={46}
                          comHeight={46}
                          compLeft={0}
                          compRight={0}
                          compType="CircleImage"
                          alt="VanGoghByAmrit"
                        />
                        <Column
                          className="w-[56%]"
                          compId="I43809:39299;556:303581"
                          comWidth={159}
                          comHeight={50}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                            compId="I43809:39299;556:303582"
                            comWidth={46}
                            comHeight={24}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            Lee Ri
                          </Text>
                          <Text
                            className="font-normal mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                            compId="I43809:39299;556:303583"
                            comWidth={110}
                            comHeight={22}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            7:00 • 21/10/2021
                          </Text>
                        </Column>
                        <Text
                          className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                          compId="I43809:39299;556:303584"
                          comWidth={49}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          -$12.0
                        </Text>
                      </Row>
                      <Line
                        className="self-center w-[100%] h-[1px] bg-indigo_50"
                        compId="I43809:39299;556:303593"
                        comWidth={286}
                        comHeight={1}
                        compLeft={0}
                        compRight={0}
                        compType="Line"
                      />
                      <Row
                        className="items-center justify-between lg:my-[12px] xl:my-[14px] my-[16px] 3xl:my-[19px] w-[100%]"
                        compId="I43809:39299;556:303586"
                        comWidth={286}
                        comHeight={50}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Img
                          src="images/img_rarepepenakam.png"
                          className="lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] rounded-radius50 lg:w-[35px] xl:w-[40px] w-[46px] 3xl:w-[55px]"
                          compId="I43809:39299;556:303588;444:290032"
                          comWidth={46}
                          comHeight={46}
                          compLeft={0}
                          compRight={0}
                          compType="CircleImage"
                          alt="RarePepeNakam"
                        />
                        <Column
                          className="w-[55%]"
                          compId="I43809:39299;556:303589"
                          comWidth={158}
                          comHeight={50}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                            compId="I43809:39299;556:303590"
                            comWidth={63}
                            comHeight={24}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            Jackson
                          </Text>
                          <Text
                            className="font-normal mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                            compId="I43809:39299;556:303591"
                            comWidth={110}
                            comHeight={22}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            7:00 • 21/10/2021
                          </Text>
                        </Column>
                        <Text
                          className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                          compId="I43809:39299;556:303592"
                          comWidth={50}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          -$10.0
                        </Text>
                      </Row>
                    </List>
                    <Row
                      className="lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[90%]"
                      compId="I43809:39299;556:303594"
                      comWidth={286}
                      comHeight={15}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Img
                        src="images/img_tintin22.png"
                        className="lg:h-[11px] xl:h-[12px] h-[13px] 2xl:h-[14px] 3xl:h-[16px] mt-[2px] rounded-radius23 w-[16%]"
                        compId="I43809:39299;556:303596;444:290035"
                        comWidth={46}
                        comHeight={13}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="TinTinTwentyTwo"
                      />
                      <Column
                        className="lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] w-[55%]"
                        compId="I43809:39299;556:303597"
                        comWidth={158}
                        comHeight={15}
                        compLeft={16}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                          compId="I43809:39299;556:303598"
                          comWidth={61}
                          comHeight={15}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          Yomaha
                        </Text>
                        <Text
                          className="flex font-normal items-center lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                          compId="I43809:39299;556:303599"
                          comWidth={1}
                          comHeight={1}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          7:00 • 21/10/2021
                        </Text>
                      </Column>
                      <Text
                        className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                        compId="I43809:39299;556:303600"
                        comWidth={50}
                        comHeight={2}
                        compLeft={16}
                        compRight={0}
                        compType="Text"
                      >
                        -$10.0
                      </Text>
                    </Row>
                  </Column>
                  <Column
                    className="bg-gray_50 items-center lg:pb-[137px] xl:pb-[157px] pb-[177px] 3xl:pb-[212px] rounded-radius2 w-[1%]"
                    compId="I43809:39299;556:303601"
                    comWidth={4}
                    comHeight={311}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Line
                      className="bg-deep_orange_300 lg:h-[105px] xl:h-[120px] h-[134px] 2xl:h-[135px] 3xl:h-[161px] w-[4px]"
                      compId="I43809:39299;556:303602"
                      comWidth={4}
                      comHeight={134}
                      compLeft={0}
                      compRight={0}
                      compType="Line"
                    />
                  </Column>
                </Row>
              </Column>
            </Row>
          </Column>
        </Column>
        <Line
          className="absolute bg-indigo_50 lg:h-[537px] xl:h-[614px] h-[690px] 2xl:h-[691px] 3xl:h-[829px] left-[15%] top-[5%] w-[1px]"
          compId="43809:39315"
          comWidth={1}
          comHeight={690}
          compLeft={219}
          compRight={0}
          compType="Line"
        />
        <aside className="absolute bottom-[0] items-center left-[0] w-[17%]">
          <Column
            className=""
            compId="559"
            comWidth={241}
            comHeight={1115}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Column
              className="bg-white_A700 justify-center lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] w-[100%]"
              compId="43809:39316"
              comWidth={241}
              comHeight={1115}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-center lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[62%]"
                compId="I43809:39316;41:948"
                comWidth={109}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_grid.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I43809:39316;531:321438"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="grid"
                />
                <Text
                  className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                  compId="I43809:39316;41:950"
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
                compId="I43809:39316;41:951"
                comWidth={100}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_user_bluegray_400.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I43809:39316;531:322607"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="user Two"
                />
                <Text
                  className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I43809:39316;41:953"
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
                compId="I43809:39316;43809:15240"
                comWidth={155}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_icon.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] mt-[1px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I43809:39316;41:955"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Icon"
                />
                <Text
                  className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] mt-[1px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I43809:39316;41:956"
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
                  compId="I43809:39316;235:259292"
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
                compId="I43809:39316;41:957"
                comWidth={57}
                comHeight={22}
                compLeft={1}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_folder_bluegray_400.png"
                  className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] w-[32%]"
                  compId="I43809:39316;533:294113;531:320466"
                  comWidth={18}
                  comHeight={16}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="folder One"
                />
                <Text
                  className="flex font-medium items-center lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I43809:39316;41:959"
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
                compId="I43809:39316;41:960"
                comWidth={95}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_settings.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I43809:39316;41:961"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="settings One"
                />
                <Text
                  className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I43809:39316;41:962"
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
                compId="I43809:39316;41:963"
                comWidth={70}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_cart.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I43809:39316;41:964"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="cart"
                />
                <Text
                  className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I43809:39316;41:965"
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
                compId="I43809:39316;41:966"
                comWidth={62}
                comHeight={22}
                compLeft={1}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_vector_bluegray_400.png"
                  className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] w-[26%]"
                  compId="I43809:39316;614:13885;531:320955"
                  comWidth={16}
                  comHeight={18}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Vector Two"
                />
                <Text
                  className="font-medium lg:ml-[13px] xl:ml-[15px] ml-[17px] 3xl:ml-[20px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I43809:39316;41:968"
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
                value="Settings1"
                className="font-medium lg:mb-[500px] xl:mb-[572px] mb-[643px] 3xl:mb-[772px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400"
                inputClassName="h-[20px] mr-[5px] w-[20px]"
                compId="I43809:39316;531:316827"
                comWidth={91}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Radio"
                checked={false}
                name="Settings Two"
                label="Settings1"
                variant="illBluegray400"
              ></Radio>
            </Column>
          </Column>
        </aside>
        <Line
          className="absolute bg-indigo_50 lg:h-[584px] xl:h-[668px] h-[750px] 2xl:h-[751px] 3xl:h-[901px] left-[17%] top-[0] w-[1px]"
          compId="43809:39317"
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

export default DashboardNotificationsPage;
