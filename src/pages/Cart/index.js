import React from "react";

import {
  Stack,
  Column,
  Row,
  Img,
  Text,
  Grid,
  Button,
  Line,
  Input,
  Radio,
  List,
} from "components";
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemState,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";

const CartPage = () => {
  return (
    <>
      <Stack
        className="bg-white_A700 font-inter h-[1080px] 2xl:h-[1081px] 3xl:h-[1297px] lg:h-[840px] xl:h-[961px] mx-[auto] w-[100%]"
        compId="43812:52345"
        comWidth={1440}
        comHeight={1080}
        compLeft={0}
        compRight={0}
        compType="Stack"
      >
        <Stack
          className="absolute bottom-[0] lg:h-[1197px] xl:h-[1369px] h-[1538px] 2xl:h-[1540px] 3xl:h-[1847px] w-[100%]"
          compId="1098"
          comWidth={1440}
          comHeight={1538}
          compLeft={0}
          compRight={0}
          compType="Stack"
        >
          <Column
            className="absolute bottom-[3%] w-[100%]"
            compId="1097"
            comWidth={1440}
            comHeight={1490}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="bg-white_A700 items-center justify-end p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] w-[100%]"
              compId="43812:52391"
              comWidth={1440}
              comHeight={60}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Img
                src="images/img_microphone.png"
                className="lg:h-[22px] xl:h-[25px] h-[28px] 2xl:h-[29px] 3xl:h-[34px] w-[1%]"
                compId="I43812:52391;43807:13258"
                comWidth={21}
                comHeight={28}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="microphone"
              />
              <Text
                className="font-medium lg:ml-[169px] xl:ml-[193px] ml-[218px] 3xl:ml-[261px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                compId="I43812:52391;234:259667"
                comWidth={133}
                comHeight={22}
                compLeft={218}
                compRight={0}
                compType="Text"
              >
                Welcomback, Team!
              </Text>
              <Row
                className="bg-white_A700 border border-bluegray_200 border-solid items-center justify-center lg:ml-[171px] xl:ml-[196px] ml-[221px] 3xl:ml-[265px] p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius4 w-[30%]"
                compId="I43812:52391;234:259514"
                comWidth={426}
                comHeight={40}
                compLeft={221}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_search.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I43812:52391;234:259514;234:259505"
                  comWidth={20}
                  comHeight={20}
                  compLeft={6}
                  compRight={0}
                  compType="Image"
                  alt="search"
                />
                <Text
                  className="font-medium lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:mr-[250px] xl:mr-[286px] mr-[322px] 3xl:mr-[386px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                  compId="I43812:52391;234:259514;234:259506"
                  comWidth={50}
                  comHeight={16}
                  compLeft={8}
                  compRight={322}
                  compType="Text"
                >
                  Search...
                </Text>
              </Row>
              <Img
                src="images/img_vector.png"
                className="lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] lg:ml-[105px] xl:ml-[120px] ml-[136px] 3xl:ml-[163px] w-[1%]"
                compId="I43812:52391;531:315836;5:32"
                comWidth={20}
                comHeight={22}
                compLeft={136}
                compRight={0}
                compType="Image"
                alt="Vector"
              />
              <Stack
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] w-[9%]"
                compId="1096"
                comWidth={126}
                comHeight={24}
                compLeft={29}
                compRight={0}
                compType="Stack"
              >
                <Img
                  src="images/img_user_bluegray_900.png"
                  className="absolute lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] inset-y-[0] left-[0] my-[auto] w-[14%]"
                  compId="I43812:52391;37:1285;37:1283"
                  comWidth={18}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="user"
                />
                <Row
                  className="absolute right-[0] w-[90%]"
                  compId="653"
                  comWidth={113}
                  comHeight={24}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <div
                    className="bg-red_600 3xl:h-[10px] lg:h-[7px] h-[8px] 2xl:h-[9px] mt-[1px] outline outline-[2px] outline-white_A700 rounded-radius50 lg:w-[6px] xl:w-[7px] w-[8px] 3xl:w-[9px]"
                    compId="I43812:52391;530:301660"
                    comWidth={8}
                    comHeight={8}
                    compLeft={0}
                    compRight={0}
                    compType="View"
                  ></div>
                  <Text
                    className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_500 w-[auto]"
                    compId="I43812:52391;37:1272"
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
                compId="I43812:52391;483:292004;43812:47214"
                comWidth={40}
                comHeight={40}
                compLeft={13}
                compRight={13}
                compType="CircleImage"
                alt="SherlockToyFa"
              />
            </Row>
            <Column
              className="bg-gray_50 font-poppins lg:ml-[206px] xl:ml-[235px] ml-[265px] 3xl:ml-[318px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[80%]"
              compId="43812:52346"
              comWidth={1152}
              comHeight={1398}
              compLeft={265}
              compRight={0}
              compType="Column"
            >
              <Stack
                className="lg:h-[1031px] xl:h-[1179px] h-[1325px] 2xl:h-[1326px] 3xl:h-[1591px] w-[100%]"
                compId="1095"
                comWidth={1152}
                comHeight={1325}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <div
                  className="absolute overflow-x-auto top-[0] w-[100%]"
                  compId="1118"
                  comWidth={1152}
                  comHeight={988}
                  compLeft={0}
                  compRight={0}
                  compType="HorizontalScroll"
                >
                  <Stack
                    className="3xl:h-[1187px] lg:h-[769px] xl:h-[879px] h-[988px] 2xl:h-[989px] w-[100%]"
                    compId="356"
                    comWidth={1152}
                    comHeight={988}
                    compLeft={0}
                    compRight={0}
                    compType="Stack"
                  >
                    <div
                      className="absolute bg-gray_50 h-[1020px] 2xl:h-[1021px] 3xl:h-[1225px] lg:h-[794px] xl:h-[908px] inset-[0] justify-center m-[auto] w-[100%]"
                      compId="355"
                      comWidth={1199}
                      comHeight={1020}
                      compLeft={0}
                      compRight={0}
                      compType="View"
                    ></div>
                    <Row
                      className="absolute justify-evenly top-[0] w-[100%]"
                      compId="1101"
                      comWidth={1152}
                      comHeight={867}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Column
                        className="items-center w-[25%]"
                        compId="43812:52348"
                        comWidth={293}
                        comHeight={867}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-medium lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]"
                          compId="43812:52347"
                          comWidth={162}
                          comHeight={32}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          Shopping centre
                        </Text>
                        <Column
                          className="font-inter lg:mt-[609px] xl:mt-[696px] mt-[783px] 3xl:mt-[940px] w-[19%]"
                          compId="1109"
                          comWidth={55}
                          comHeight={52}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-normal ml-[3px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                            compId="43812:52349"
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
                            compId="43812:52350"
                            comWidth={39}
                            comHeight={28}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            $0.0
                          </Text>
                        </Column>
                      </Column>
                      <Column
                        className="font-inter items-end lg:mt-[49px] xl:mt-[56px] mt-[64px] 3xl:mt-[76px] w-[75%]"
                        compId="1100"
                        comWidth={859}
                        comHeight={392}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Row
                          className="bg-white_A700 items-center lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] rounded-radius4 shadow-bs1 w-[100%]"
                          compId="43812:52351"
                          comWidth={859}
                          comHeight={56}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <Img
                            src="images/img_search_bluegray_900.png"
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            compId="43812:52352"
                            comWidth={24}
                            comHeight={24}
                            compLeft={16}
                            compRight={0}
                            compType="Image"
                            alt="search Two"
                          />
                          <Text
                            className="font-normal lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                            compId="43812:52353"
                            comWidth={151}
                            comHeight={24}
                            compLeft={16}
                            compRight={0}
                            compType="Text"
                          >
                            Seach name, type,...
                          </Text>
                          <Img
                            src="images/img_settings_bluegray_900.png"
                            className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[451px] xl:ml-[515px] ml-[580px] 3xl:ml-[696px] w-[3%]"
                            compId="I43812:52354;5:190"
                            comWidth={24}
                            comHeight={20}
                            compLeft={580}
                            compRight={0}
                            compType="Image"
                            alt="settings"
                          />
                        </Row>
                        <Row
                          className="items-center justify-end ml-[auto] lg:mt-[21px] xl:mt-[24px] mt-[28px] 3xl:mt-[33px] w-[66%]"
                          compId="1099"
                          comWidth={566}
                          comHeight={308}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <div
                            className="bg-white_A700 lg:h-[240px] xl:h-[274px] h-[308px] 2xl:h-[309px] 3xl:h-[370px] rounded-radius4 shadow-bs1 w-[48%]"
                            compId="43812:52355"
                            comWidth={273}
                            comHeight={308}
                            compLeft={0}
                            compRight={0}
                            compType="View"
                          ></div>
                          <div
                            className="bg-white_A700 lg:h-[240px] xl:h-[274px] h-[308px] 2xl:h-[309px] 3xl:h-[370px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] rounded-radius4 shadow-bs1 w-[48%]"
                            compId="43812:52356"
                            comWidth={273}
                            comHeight={308}
                            compLeft={20}
                            compRight={0}
                            compType="View"
                          ></div>
                        </Row>
                      </Column>
                    </Row>
                  </Stack>
                </div>
                <Grid
                  className="absolute bottom-[0] font-inter lg:gap-[15px] xl:gap-[17px] gap-[20px] 3xl:gap-[24px] grid grid-cols-3 right-[0] w-[75%]"
                  compId="1116"
                  comWidth={859}
                  comHeight={1186}
                  compLeft={0}
                  compRight={0}
                  compType="Grid"
                >
                  <Column
                    className="bg-white_A700 items-center lg:pb-[24px] xl:pb-[28px] pb-[32px] 3xl:pb-[38px] rounded-radius8 shadow-bs1 w-[100%]"
                    compId="43812:52359"
                    comWidth={273}
                    comHeight={583}
                    compLeft={0}
                    compRight={586}
                    compType="Column"
                  >
                    <Row
                      className="bg-cover bg-repeat justify-end lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px] w-[100%]"
                      compId="I43812:52359;600:312074"
                      style={{
                        backgroundImage: "url('images/img_frame_353X273.png')",
                      }}
                      comWidth={273}
                      comHeight={353}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Row
                        className="bg-red_400_19 items-center justify-center lg:mb-[220px] xl:mb-[251px] mb-[283px] 3xl:mb-[339px] lg:p-[5px] xl:p-[6px] p-[7px] 3xl:p-[8px] rounded-radius4 w-[35%]"
                        compId="I43812:52359;600:312075;485:292761"
                        comWidth={82}
                        comHeight={30}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-normal ml-[1px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-red_600 w-[auto]"
                          compId="I43812:52359;600:312075;485:292762"
                          comWidth={43}
                          comHeight={16}
                          compLeft={1}
                          compRight={0}
                          compType="Text"
                        >
                          Feature
                        </Text>
                        <Img
                          src="images/img_cursor_red_600.png"
                          className="xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mr-[2px] w-[15%]"
                          compId="I43812:52359;600:312075;485:292763;1:1622"
                          comWidth={10}
                          comHeight={11}
                          compLeft={12}
                          compRight={2}
                          compType="Image"
                          alt="cursor"
                        />
                      </Row>
                      <Row
                        className="bg-indigo_400_19 items-center justify-center lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:p-[5px] xl:p-[6px] p-[7px] 3xl:p-[8px] rounded-radius4 w-[42%]"
                        compId="I43812:52359;600:312076;485:292757"
                        comWidth={98}
                        comHeight={30}
                        compLeft={8}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-normal ml-[1px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-indigo_401 w-[auto]"
                          compId="I43812:52359;600:312076;485:292758"
                          comWidth={56}
                          comHeight={16}
                          compLeft={1}
                          compRight={0}
                          compType="Text"
                        >
                          Flash sale
                        </Text>
                        <Img
                          src="images/img_offer.png"
                          className="h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] mr-[1px] w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"
                          compId="I43812:52359;600:312076;485:292759;1:1518"
                          comWidth={10}
                          comHeight={10}
                          compLeft={14}
                          compRight={1}
                          compType="Image"
                          alt="offer"
                        />
                      </Row>
                    </Row>
                    <Text
                      className="font-medium lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]"
                      compId="I43812:52359;600:312059"
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
                      compId="1110"
                      comWidth={112}
                      comHeight={135}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="justify-evenly w-[96%]"
                        compId="I43812:52359;600:312060"
                        comWidth={107}
                        comHeight={28}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-bold font-inter lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                          compId="I43812:52359;600:312061"
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
                          compId="I43812:52359;600:312062"
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
                        compId="I43812:52359;600:312063"
                        comWidth={77}
                        comHeight={11}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Frame Two"
                      />
                      <Row
                        className="items-center justify-between lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]"
                        compId="1102"
                        comWidth={112}
                        comHeight={48}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Button
                          className="flex lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                          compId="I43812:52359;600:312070"
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
                            compId="I43812:52359;600:312070"
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
                          compId="I43812:52359;600:312072"
                          comWidth={48}
                          comHeight={48}
                          compLeft={0}
                          compRight={0}
                          compType="IconButton"
                        >
                          <Img
                            src="images/img_favorite.png"
                            className="flex items-center justify-center"
                            compId="I43812:52359;600:312072"
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
                    compId="43812:52360"
                    comWidth={273}
                    comHeight={583}
                    compLeft={293}
                    compRight={293}
                    compType="Column"
                  >
                    <Row
                      className="bg-cover bg-repeat justify-end lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px] w-[100%]"
                      compId="I43812:52360;600:312074"
                      style={{
                        backgroundImage: "url('images/img_frame_1.png')",
                      }}
                      comWidth={273}
                      comHeight={353}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Row
                        className="bg-red_400_19 items-center justify-center lg:mb-[220px] xl:mb-[251px] mb-[283px] 3xl:mb-[339px] lg:p-[5px] xl:p-[6px] p-[7px] 3xl:p-[8px] rounded-radius4 w-[35%]"
                        compId="I43812:52360;600:312075;485:292761"
                        comWidth={82}
                        comHeight={30}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-normal ml-[1px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-red_600 w-[auto]"
                          compId="I43812:52360;600:312075;485:292762"
                          comWidth={43}
                          comHeight={16}
                          compLeft={1}
                          compRight={0}
                          compType="Text"
                        >
                          Feature
                        </Text>
                        <Img
                          src="images/img_cursor_red_600.png"
                          className="xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mr-[2px] w-[15%]"
                          compId="I43812:52360;600:312075;485:292763;1:1622"
                          comWidth={10}
                          comHeight={11}
                          compLeft={12}
                          compRight={2}
                          compType="Image"
                          alt="cursor One"
                        />
                      </Row>
                      <Row
                        className="bg-indigo_400_19 items-center justify-center lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:p-[5px] xl:p-[6px] p-[7px] 3xl:p-[8px] rounded-radius4 w-[42%]"
                        compId="I43812:52360;600:312076;485:292757"
                        comWidth={98}
                        comHeight={30}
                        compLeft={8}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-normal ml-[1px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-indigo_401 w-[auto]"
                          compId="I43812:52360;600:312076;485:292758"
                          comWidth={56}
                          comHeight={16}
                          compLeft={1}
                          compRight={0}
                          compType="Text"
                        >
                          Flash sale
                        </Text>
                        <Img
                          src="images/img_offer.png"
                          className="h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] mr-[1px] w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"
                          compId="I43812:52360;600:312076;485:292759;1:1518"
                          comWidth={10}
                          comHeight={10}
                          compLeft={14}
                          compRight={1}
                          compType="Image"
                          alt="offer One"
                        />
                      </Row>
                    </Row>
                    <Text
                      className="font-medium lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]"
                      compId="I43812:52360;600:312059"
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
                      compId="1111"
                      comWidth={112}
                      comHeight={135}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="justify-evenly w-[96%]"
                        compId="I43812:52360;600:312060"
                        comWidth={107}
                        comHeight={28}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-bold font-inter lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                          compId="I43812:52360;600:312061"
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
                          compId="I43812:52360;600:312062"
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
                        compId="I43812:52360;600:312063"
                        comWidth={77}
                        comHeight={11}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Frame Three"
                      />
                      <Row
                        className="items-center justify-between lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]"
                        compId="1103"
                        comWidth={112}
                        comHeight={48}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Button
                          className="flex lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                          compId="I43812:52360;600:312070"
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
                            compId="I43812:52360;600:312070"
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
                          compId="I43812:52360;600:312072"
                          comWidth={48}
                          comHeight={48}
                          compLeft={0}
                          compRight={0}
                          compType="IconButton"
                        >
                          <Img
                            src="images/img_favorite.png"
                            className="flex items-center justify-center"
                            compId="I43812:52360;600:312072"
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
                    compId="43812:52361"
                    comWidth={273}
                    comHeight={583}
                    compLeft={586}
                    compRight={0}
                    compType="Column"
                  >
                    <Row
                      className="bg-cover bg-repeat justify-end lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px] w-[100%]"
                      compId="I43812:52361;600:312074"
                      style={{
                        backgroundImage: "url('images/img_frame_2.png')",
                      }}
                      comWidth={273}
                      comHeight={353}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Row
                        className="bg-red_400_19 items-center justify-center lg:mb-[220px] xl:mb-[251px] mb-[283px] 3xl:mb-[339px] lg:p-[5px] xl:p-[6px] p-[7px] 3xl:p-[8px] rounded-radius4 w-[35%]"
                        compId="I43812:52361;600:312075;485:292761"
                        comWidth={82}
                        comHeight={30}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-normal ml-[1px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-red_600 w-[auto]"
                          compId="I43812:52361;600:312075;485:292762"
                          comWidth={43}
                          comHeight={16}
                          compLeft={1}
                          compRight={0}
                          compType="Text"
                        >
                          Feature
                        </Text>
                        <Img
                          src="images/img_cursor_red_600.png"
                          className="xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mr-[2px] w-[15%]"
                          compId="I43812:52361;600:312075;485:292763;1:1622"
                          comWidth={10}
                          comHeight={11}
                          compLeft={12}
                          compRight={2}
                          compType="Image"
                          alt="cursor Two"
                        />
                      </Row>
                      <Row
                        className="bg-indigo_400_19 items-center justify-center lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:p-[5px] xl:p-[6px] p-[7px] 3xl:p-[8px] rounded-radius4 w-[42%]"
                        compId="I43812:52361;600:312076;485:292757"
                        comWidth={98}
                        comHeight={30}
                        compLeft={8}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-normal ml-[1px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-indigo_401 w-[auto]"
                          compId="I43812:52361;600:312076;485:292758"
                          comWidth={56}
                          comHeight={16}
                          compLeft={1}
                          compRight={0}
                          compType="Text"
                        >
                          Flash sale
                        </Text>
                        <Img
                          src="images/img_offer.png"
                          className="h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] mr-[1px] w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"
                          compId="I43812:52361;600:312076;485:292759;1:1518"
                          comWidth={10}
                          comHeight={10}
                          compLeft={14}
                          compRight={1}
                          compType="Image"
                          alt="offer Two"
                        />
                      </Row>
                    </Row>
                    <Text
                      className="font-medium lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]"
                      compId="I43812:52361;600:312059"
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
                      compId="1112"
                      comWidth={112}
                      comHeight={135}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="justify-evenly w-[96%]"
                        compId="I43812:52361;600:312060"
                        comWidth={107}
                        comHeight={28}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-bold font-inter lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                          compId="I43812:52361;600:312061"
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
                          compId="I43812:52361;600:312062"
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
                        compId="I43812:52361;600:312063"
                        comWidth={77}
                        comHeight={11}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Frame Four"
                      />
                      <Row
                        className="items-center justify-between lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]"
                        compId="1104"
                        comWidth={112}
                        comHeight={48}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Button
                          className="flex lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                          compId="I43812:52361;600:312070"
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
                            compId="I43812:52361;600:312070"
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
                          compId="I43812:52361;600:312072"
                          comWidth={48}
                          comHeight={48}
                          compLeft={0}
                          compRight={0}
                          compType="IconButton"
                        >
                          <Img
                            src="images/img_favorite.png"
                            className="flex items-center justify-center"
                            compId="I43812:52361;600:312072"
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
                    compId="43812:52363"
                    comWidth={273}
                    comHeight={583}
                    compLeft={0}
                    compRight={586}
                    compType="Column"
                  >
                    <Row
                      className="bg-cover bg-repeat justify-end lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px] w-[100%]"
                      compId="I43812:52363;600:312074"
                      style={{
                        backgroundImage: "url('images/img_frame_3.png')",
                      }}
                      comWidth={273}
                      comHeight={353}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Row
                        className="bg-red_400_19 items-center justify-center lg:mb-[220px] xl:mb-[251px] mb-[283px] 3xl:mb-[339px] lg:p-[5px] xl:p-[6px] p-[7px] 3xl:p-[8px] rounded-radius4 w-[35%]"
                        compId="I43812:52363;600:312075;485:292761"
                        comWidth={82}
                        comHeight={30}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-normal ml-[1px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-red_600 w-[auto]"
                          compId="I43812:52363;600:312075;485:292762"
                          comWidth={43}
                          comHeight={16}
                          compLeft={1}
                          compRight={0}
                          compType="Text"
                        >
                          Feature
                        </Text>
                        <Img
                          src="images/img_cursor_red_600.png"
                          className="xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mr-[2px] w-[15%]"
                          compId="I43812:52363;600:312075;485:292763;1:1622"
                          comWidth={10}
                          comHeight={11}
                          compLeft={12}
                          compRight={2}
                          compType="Image"
                          alt="cursor Three"
                        />
                      </Row>
                      <Row
                        className="bg-indigo_400_19 items-center justify-center lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:p-[5px] xl:p-[6px] p-[7px] 3xl:p-[8px] rounded-radius4 w-[42%]"
                        compId="I43812:52363;600:312076;485:292757"
                        comWidth={98}
                        comHeight={30}
                        compLeft={8}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-normal ml-[1px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-indigo_401 w-[auto]"
                          compId="I43812:52363;600:312076;485:292758"
                          comWidth={56}
                          comHeight={16}
                          compLeft={1}
                          compRight={0}
                          compType="Text"
                        >
                          Flash sale
                        </Text>
                        <Img
                          src="images/img_offer.png"
                          className="h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] mr-[1px] w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"
                          compId="I43812:52363;600:312076;485:292759;1:1518"
                          comWidth={10}
                          comHeight={10}
                          compLeft={14}
                          compRight={1}
                          compType="Image"
                          alt="offer Three"
                        />
                      </Row>
                    </Row>
                    <Text
                      className="font-medium 3xl:ml-[116px] lg:ml-[75px] xl:ml-[86px] ml-[97px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]"
                      compId="I43812:52363;600:312059"
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
                      compId="1113"
                      comWidth={112}
                      comHeight={135}
                      compLeft={81}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="justify-evenly w-[96%]"
                        compId="I43812:52363;600:312060"
                        comWidth={107}
                        comHeight={28}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-bold font-inter lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                          compId="I43812:52363;600:312061"
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
                          compId="I43812:52363;600:312062"
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
                        compId="I43812:52363;600:312063"
                        comWidth={77}
                        comHeight={11}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Frame Five"
                      />
                      <Row
                        className="items-center justify-between lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]"
                        compId="1105"
                        comWidth={112}
                        comHeight={48}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Button
                          className="flex lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                          compId="I43812:52363;600:312070"
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
                            compId="I43812:52363;600:312070"
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
                          compId="I43812:52363;600:312072"
                          comWidth={48}
                          comHeight={48}
                          compLeft={0}
                          compRight={0}
                          compType="IconButton"
                        >
                          <Img
                            src="images/img_favorite.png"
                            className="flex items-center justify-center"
                            compId="I43812:52363;600:312072"
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
                    compId="43812:52364"
                    comWidth={273}
                    comHeight={583}
                    compLeft={293}
                    compRight={293}
                    compType="Column"
                  >
                    <Row
                      className="bg-cover bg-repeat justify-end lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px] w-[100%]"
                      compId="I43812:52364;600:312074"
                      style={{
                        backgroundImage: "url('images/img_frame_4.png')",
                      }}
                      comWidth={273}
                      comHeight={353}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Row
                        className="bg-red_400_19 items-center justify-center lg:mb-[220px] xl:mb-[251px] mb-[283px] 3xl:mb-[339px] lg:p-[5px] xl:p-[6px] p-[7px] 3xl:p-[8px] rounded-radius4 w-[35%]"
                        compId="I43812:52364;600:312075;485:292761"
                        comWidth={82}
                        comHeight={30}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-normal ml-[1px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-red_600 w-[auto]"
                          compId="I43812:52364;600:312075;485:292762"
                          comWidth={43}
                          comHeight={16}
                          compLeft={1}
                          compRight={0}
                          compType="Text"
                        >
                          Feature
                        </Text>
                        <Img
                          src="images/img_cursor_red_600.png"
                          className="xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mr-[2px] w-[15%]"
                          compId="I43812:52364;600:312075;485:292763;1:1622"
                          comWidth={10}
                          comHeight={11}
                          compLeft={12}
                          compRight={2}
                          compType="Image"
                          alt="cursor Four"
                        />
                      </Row>
                      <Row
                        className="bg-indigo_400_19 items-center justify-center lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:p-[5px] xl:p-[6px] p-[7px] 3xl:p-[8px] rounded-radius4 w-[42%]"
                        compId="I43812:52364;600:312076;485:292757"
                        comWidth={98}
                        comHeight={30}
                        compLeft={8}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-normal ml-[1px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-indigo_401 w-[auto]"
                          compId="I43812:52364;600:312076;485:292758"
                          comWidth={56}
                          comHeight={16}
                          compLeft={1}
                          compRight={0}
                          compType="Text"
                        >
                          Flash sale
                        </Text>
                        <Img
                          src="images/img_offer.png"
                          className="h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] mr-[1px] w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"
                          compId="I43812:52364;600:312076;485:292759;1:1518"
                          comWidth={10}
                          comHeight={10}
                          compLeft={14}
                          compRight={1}
                          compType="Image"
                          alt="offer Four"
                        />
                      </Row>
                    </Row>
                    <Text
                      className="font-medium 3xl:ml-[116px] lg:ml-[75px] xl:ml-[86px] ml-[97px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]"
                      compId="I43812:52364;600:312059"
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
                      compId="1114"
                      comWidth={112}
                      comHeight={135}
                      compLeft={81}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="justify-evenly w-[96%]"
                        compId="I43812:52364;600:312060"
                        comWidth={107}
                        comHeight={28}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-bold font-inter lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                          compId="I43812:52364;600:312061"
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
                          compId="I43812:52364;600:312062"
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
                        compId="I43812:52364;600:312063"
                        comWidth={77}
                        comHeight={11}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Frame Six"
                      />
                      <Row
                        className="items-center justify-between lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]"
                        compId="1106"
                        comWidth={112}
                        comHeight={48}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Button
                          className="flex lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                          compId="I43812:52364;600:312070"
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
                            compId="I43812:52364;600:312070"
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
                          compId="I43812:52364;600:312072"
                          comWidth={48}
                          comHeight={48}
                          compLeft={0}
                          compRight={0}
                          compType="IconButton"
                        >
                          <Img
                            src="images/img_favorite.png"
                            className="flex items-center justify-center"
                            compId="I43812:52364;600:312072"
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
                    compId="43812:52365"
                    comWidth={273}
                    comHeight={583}
                    compLeft={586}
                    compRight={0}
                    compType="Column"
                  >
                    <Row
                      className="bg-cover bg-repeat justify-end lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px] w-[100%]"
                      compId="I43812:52365;600:312074"
                      style={{
                        backgroundImage: "url('images/img_frame_5.png')",
                      }}
                      comWidth={273}
                      comHeight={353}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Row
                        className="bg-red_400_19 items-center justify-center lg:mb-[220px] xl:mb-[251px] mb-[283px] 3xl:mb-[339px] lg:p-[5px] xl:p-[6px] p-[7px] 3xl:p-[8px] rounded-radius4 w-[35%]"
                        compId="I43812:52365;600:312075;485:292761"
                        comWidth={82}
                        comHeight={30}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-normal ml-[1px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-red_600 w-[auto]"
                          compId="I43812:52365;600:312075;485:292762"
                          comWidth={43}
                          comHeight={16}
                          compLeft={1}
                          compRight={0}
                          compType="Text"
                        >
                          Feature
                        </Text>
                        <Img
                          src="images/img_cursor_red_600.png"
                          className="xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mr-[2px] w-[15%]"
                          compId="I43812:52365;600:312075;485:292763;1:1622"
                          comWidth={10}
                          comHeight={11}
                          compLeft={12}
                          compRight={2}
                          compType="Image"
                          alt="cursor Five"
                        />
                      </Row>
                      <Row
                        className="bg-indigo_400_19 items-center justify-center lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:p-[5px] xl:p-[6px] p-[7px] 3xl:p-[8px] rounded-radius4 w-[42%]"
                        compId="I43812:52365;600:312076;485:292757"
                        comWidth={98}
                        comHeight={30}
                        compLeft={8}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-normal ml-[1px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-indigo_401 w-[auto]"
                          compId="I43812:52365;600:312076;485:292758"
                          comWidth={56}
                          comHeight={16}
                          compLeft={1}
                          compRight={0}
                          compType="Text"
                        >
                          Flash sale
                        </Text>
                        <Img
                          src="images/img_offer.png"
                          className="h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] mr-[1px] w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"
                          compId="I43812:52365;600:312076;485:292759;1:1518"
                          comWidth={10}
                          comHeight={10}
                          compLeft={14}
                          compRight={1}
                          compType="Image"
                          alt="offer Five"
                        />
                      </Row>
                    </Row>
                    <Text
                      className="font-medium 3xl:ml-[116px] lg:ml-[75px] xl:ml-[86px] ml-[97px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]"
                      compId="I43812:52365;600:312059"
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
                      compId="1115"
                      comWidth={112}
                      comHeight={135}
                      compLeft={81}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="justify-evenly w-[96%]"
                        compId="I43812:52365;600:312060"
                        comWidth={107}
                        comHeight={28}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-bold font-inter lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                          compId="I43812:52365;600:312061"
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
                          compId="I43812:52365;600:312062"
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
                        compId="I43812:52365;600:312063"
                        comWidth={77}
                        comHeight={11}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Frame Seven"
                      />
                      <Row
                        className="items-center justify-between lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]"
                        compId="1107"
                        comWidth={112}
                        comHeight={48}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Button
                          className="flex lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                          compId="I43812:52365;600:312070"
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
                            compId="I43812:52365;600:312070"
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
                          compId="I43812:52365;600:312072"
                          comWidth={48}
                          comHeight={48}
                          compLeft={0}
                          compRight={0}
                          compType="IconButton"
                        >
                          <Img
                            src="images/img_favorite.png"
                            className="flex items-center justify-center"
                            compId="I43812:52365;600:312072"
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
                <Column
                  className="absolute bg-white_A700 font-inter left-[0] lg:p-[24px] xl:p-[27px] p-[31px] 3xl:p-[37px] rounded-radius4 shadow-bs1 top-[5%] w-[24%]"
                  compId="43812:52390"
                  comWidth={273}
                  comHeight={1050}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold ml-[1px] mt-[1px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                    compId="I43812:52390;600:311923"
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
                    compId="652"
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
                          compId="648"
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
                                    compId="I43812:52390;600:311925"
                                    comWidth={204}
                                    comHeight={24}
                                    compLeft={0}
                                    compRight={0}
                                    compType="Row"
                                  >
                                    <Text
                                      className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                                      compId="I43812:52390;600:311926"
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
                                        compId="I43812:52390;600:311927;1:1064"
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
                                        compId="I43812:52390;600:311935;1:1053"
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
                              compId="646"
                              comWidth={61}
                              comHeight={104}
                              compLeft={0}
                              compRight={0}
                              compType="Column"
                            >
                              <Text
                                className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                                compId="I43812:52390;600:311929"
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
                                compId="I43812:52390;600:311930"
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
                                compId="I43812:52390;600:311931"
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
                          compId="I43812:52390;600:311932"
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
                    compId="I43812:52390;600:311946"
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
                    compId="I43812:52390;600:311948"
                    comWidth={209}
                    comHeight={14}
                    compLeft={1}
                    compRight={0}
                    compType="Image"
                    alt="Group"
                  />
                  <Row
                    className="items-center justify-between lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[100%]"
                    compId="I43812:52390;600:311953"
                    comWidth={210}
                    comHeight={16}
                    compLeft={1}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="flex font-medium items-center xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]"
                      compId="I43812:52390;600:311954"
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
                      compId="I43812:52390;600:311955"
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
                    compId="I43812:52390;600:311957"
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
                    compId="I43812:52390;600:311959"
                    comWidth={209}
                    comHeight={20}
                    compLeft={1}
                    compRight={0}
                    compType="Row"
                  >
                    <Img
                      src="images/img_download_bluegray_400.png"
                      className="lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] mt-[1px] w-[9%]"
                      compId="I43812:52390;600:311960;27:503"
                      comWidth={18}
                      comHeight={17}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="download"
                    />
                    <Text
                      className="font-medium ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                      compId="I43812:52390;600:311960;27:487"
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
                      compId="I43812:52390;600:311961"
                      comWidth={77}
                      comHeight={11}
                      compLeft={51}
                      compRight={0}
                      compType="Image"
                      alt="Frame Eight"
                    />
                  </Row>
                  <Row
                    className="justify-end ml-[1px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] pl-[2px] pt-[2px] w-[99%]"
                    compId="I43812:52390;600:311967"
                    comWidth={209}
                    comHeight={20}
                    compLeft={1}
                    compRight={0}
                    compType="Row"
                  >
                    <Img
                      src="images/img_download_bluegray_400.png"
                      className="lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] mt-[1px] w-[9%]"
                      compId="I43812:52390;600:311968;27:503"
                      comWidth={18}
                      comHeight={17}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="download One"
                    />
                    <Text
                      className="font-medium ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                      compId="I43812:52390;600:311968;27:487"
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
                      compId="I43812:52390;600:311969"
                      comWidth={61}
                      comHeight={11}
                      compLeft={67}
                      compRight={0}
                      compType="Image"
                      alt="Frame Nine"
                    />
                  </Row>
                  <Row
                    className="justify-end ml-[1px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] pl-[2px] pt-[2px] w-[99%]"
                    compId="I43812:52390;600:311974"
                    comWidth={209}
                    comHeight={20}
                    compLeft={1}
                    compRight={0}
                    compType="Row"
                  >
                    <Img
                      src="images/img_download_bluegray_400.png"
                      className="lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] mt-[1px] w-[9%]"
                      compId="I43812:52390;600:311975;27:503"
                      comWidth={18}
                      comHeight={17}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="download Two"
                    />
                    <Text
                      className="font-medium ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                      compId="I43812:52390;600:311975;27:487"
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
                      compId="I43812:52390;600:311976"
                      comWidth={45}
                      comHeight={11}
                      compLeft={83}
                      compRight={0}
                      compType="Image"
                      alt="Frame Ten"
                    />
                  </Row>
                  <Row
                    className="justify-end ml-[1px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] pl-[2px] pt-[2px] w-[99%]"
                    compId="I43812:52390;600:311980"
                    comWidth={209}
                    comHeight={20}
                    compLeft={1}
                    compRight={0}
                    compType="Row"
                  >
                    <Img
                      src="images/img_download_bluegray_400.png"
                      className="lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] mt-[1px] w-[9%]"
                      compId="I43812:52390;600:311981;27:503"
                      comWidth={18}
                      comHeight={17}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="download Three"
                    />
                    <Text
                      className="font-medium ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                      compId="I43812:52390;600:311981;27:487"
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
                      compId="I43812:52390;600:311982"
                      comWidth={28}
                      comHeight={11}
                      compLeft={100}
                      compRight={0}
                      compType="Image"
                      alt="Frame Eleven"
                    />
                  </Row>
                  <Row
                    className="justify-end ml-[1px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] pl-[2px] pt-[2px] w-[99%]"
                    compId="I43812:52390;600:311985"
                    comWidth={209}
                    comHeight={20}
                    compLeft={1}
                    compRight={0}
                    compType="Row"
                  >
                    <Img
                      src="images/img_download_bluegray_400.png"
                      className="lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] mt-[1px] w-[9%]"
                      compId="I43812:52390;600:311986;27:503"
                      comWidth={18}
                      comHeight={17}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="download Four"
                    />
                    <Text
                      className="font-medium ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                      compId="I43812:52390;600:311986;27:487"
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
                      compId="I43812:52390;600:311988"
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
                    compId="I43812:52390;600:311990"
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
                    compId="I43812:52390;600:311992"
                    comWidth={151}
                    comHeight={24}
                    compLeft={2}
                    compRight={0}
                    compType="Row"
                  >
                    <div
                      className="bg-bluegray_400 lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] rounded-radius50 lg:w-[17px] xl:w-[19px] w-[22px] 3xl:w-[26px]"
                      compId="I43812:52390;600:311993;531:321049"
                      comWidth={22}
                      comHeight={22}
                      compLeft={0}
                      compRight={0}
                      compType="View"
                    ></div>
                    <Column
                      className="bg-light_blue_A700 lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] items-center 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] lg:px-[4px] xl:px-[5px] px-[6px] 3xl:px-[7px] rounded-radius50 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      compId="I43812:52390;600:311994"
                      comWidth={24}
                      comHeight={24}
                      compLeft={9}
                      compRight={0}
                      compType="Column"
                    >
                      <div
                        className="bg-white_A700 lg:h-[10px] xl:h-[11px] h-[12px] 2xl:h-[13px] 3xl:h-[15px] rounded-radius50 xl:w-[10px] w-[12px] 3xl:w-[14px] lg:w-[9px]"
                        compId="I43812:52390;600:311994;732:21356"
                        comWidth={12}
                        comHeight={12}
                        compLeft={0}
                        compRight={0}
                        compType="View"
                      ></div>
                    </Column>
                    <div
                      className="bg-pink_400 lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] rounded-radius50 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      compId="I43812:52390;600:311995;732:21371"
                      comWidth={24}
                      comHeight={24}
                      compLeft={8}
                      compRight={0}
                      compType="View"
                    ></div>
                    <div
                      className="bg-amber_301 lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] rounded-radius50 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      compId="I43812:52390;600:311996;732:21371"
                      comWidth={24}
                      comHeight={24}
                      compLeft={8}
                      compRight={0}
                      compType="View"
                    ></div>
                    <div
                      className="bg-pink_A100 lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] rounded-radius50 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      compId="I43812:52390;600:311997;732:21371"
                      comWidth={24}
                      comHeight={24}
                      compLeft={8}
                      compRight={0}
                      compType="View"
                    ></div>
                  </Row>
                  <Row
                    className="bg-deep_orange_300 items-center justify-between lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:p-[10px] xl:p-[11px] p-[13px] 3xl:p-[15px] rounded-radius24 w-[100%]"
                    compId="I43812:52390;600:313197"
                    comWidth={210}
                    comHeight={48}
                    compLeft={1}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-normal lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                      compId="I43812:52390;600:313197;596:302873"
                      comWidth={71}
                      comHeight={22}
                      compLeft={5}
                      compRight={0}
                      compType="Text"
                    >
                      Apply filter
                    </Text>
                    <Img
                      src="images/img_plus_white_A700.png"
                      className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] mr-[3px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                      compId="I43812:52390;600:313197;596:302874"
                      comWidth={20}
                      comHeight={20}
                      compLeft={0}
                      compRight={3}
                      compType="Image"
                      alt="plus Six"
                    />
                  </Row>
                  <Input
                    className="font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_900 text-bluegray_900 w-[100%]"
                    wrapClassName="3xl:mt-[14px] flex lg:mt-[9px] mb-[1px] mt-[12px] w-[100%] xl:mt-[10px]"
                    compId="I43812:52390;600:313253"
                    comWidth={0}
                    comHeight={48}
                    compLeft={0}
                    compRight={0}
                    compType="EditText"
                    name="Button"
                    placeholder="Clear all"
                    suffix={
                      <Img
                        src="images/img_delete.png"
                        className="w-[16.67px] ml-[35px] mr-[17px] lg:w-[12px] lg:ml-[27px] lg:mr-[13px] xl:w-[14px] xl:ml-[31px] xl:mr-[15px] 2xl:w-[16px] 3xl:w-[20px] 3xl:ml-[42px] 3xl:mr-[20px] my-[auto]"
                        compId="I43812:52390;600:313253;596:302874;5:189"
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
              <Row
                className="font-inter items-center justify-end ml-[auto] lg:mt-[31px] xl:mt-[36px] mt-[41px] 3xl:mt-[49px] w-[20%]"
                compId="43812:52366"
                comWidth={232}
                comHeight={32}
                compLeft={607}
                compRight={0}
                compType="Row"
              >
                <Button
                  className="flex lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] items-center justify-center lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                  compId="43812:52367"
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
                    compId="43812:52367"
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
                  compId="43812:52371"
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
                  compId="43812:52375"
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
                  compId="43812:52379"
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
                  compId="43812:52383"
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
                  compId="43812:52387"
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
                    compId="43812:52387"
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
          </Column>
          <Line
            className="absolute bg-indigo_50 lg:h-[537px] xl:h-[614px] h-[690px] 2xl:h-[691px] 3xl:h-[829px] left-[15%] top-[4%] w-[1px]"
            compId="43812:52392"
            comWidth={1}
            comHeight={690}
            compLeft={219}
            compRight={0}
            compType="Line"
          />
          <aside className="absolute items-center left-[0] top-[4%] w-[17%]">
            <Column
              className=""
              compId="644"
              comWidth={241}
              comHeight={1020}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Column
                className="bg-white_A700 justify-center lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] w-[100%]"
                compId="43812:52393"
                comWidth={241}
                comHeight={1020}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="items-center lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[62%]"
                  compId="I43812:52393;41:948"
                  comWidth={109}
                  comHeight={22}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Img
                    src="images/img_menu_bluegray_400_20X20.png"
                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                    compId="I43812:52393;531:321438"
                    comWidth={20}
                    comHeight={20}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="menu"
                  />
                  <Text
                    className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                    compId="I43812:52393;41:950"
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
                  compId="I43812:52393;41:951"
                  comWidth={100}
                  comHeight={22}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Img
                    src="images/img_user_bluegray_400.png"
                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                    compId="I43812:52393;531:322607"
                    comWidth={20}
                    comHeight={20}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="user One"
                  />
                  <Text
                    className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                    compId="I43812:52393;41:953"
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
                  compId="I43812:52393;43809:15240"
                  comWidth={155}
                  comHeight={24}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Img
                    src="images/img_icon.png"
                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] mt-[1px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                    compId="I43812:52393;41:955"
                    comWidth={20}
                    comHeight={20}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Icon"
                  />
                  <Text
                    className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] mt-[1px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                    compId="I43812:52393;41:956"
                    comWidth={61}
                    comHeight={22}
                    compLeft={16}
                    compRight={0}
                    compType="Text"
                  >
                    Message
                  </Text>
                  <Column
                    className="bg-red_600 lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] items-center lg:ml-[26px] xl:ml-[30px] ml-[34px] 3xl:ml-[40px] lg:px-[5px] xl:px-[6px] px-[7px] 3xl:px-[8px] rounded-radius50 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    compId="I43812:52393;235:259292"
                    comWidth={24}
                    comHeight={24}
                    compLeft={34}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]"
                      compId="I43812:52393;235:259204"
                      comWidth={8}
                      comHeight={10}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      3
                    </Text>
                  </Column>
                </Row>
                <Row
                  className="items-center ml-[1px] lg:mt-[24px] xl:mt-[27px] mt-[31px] 3xl:mt-[37px] w-[32%]"
                  compId="I43812:52393;41:957"
                  comWidth={57}
                  comHeight={22}
                  compLeft={1}
                  compRight={0}
                  compType="Row"
                >
                  <Img
                    src="images/img_folder_bluegray_400.png"
                    className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] w-[32%]"
                    compId="I43812:52393;533:294113;531:320466"
                    comWidth={18}
                    comHeight={16}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="folder"
                  />
                  <Text
                    className="flex font-medium items-center lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                    compId="I43812:52393;41:959"
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
                  compId="I43812:52393;41:960"
                  comWidth={95}
                  comHeight={22}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Img
                    src="images/img_settings.png"
                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                    compId="I43812:52393;41:961"
                    comWidth={20}
                    comHeight={20}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="settings One"
                  />
                  <Text
                    className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                    compId="I43812:52393;41:962"
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
                  compId="I43812:52393;41:963"
                  comWidth={68}
                  comHeight={22}
                  compLeft={1}
                  compRight={0}
                  compType="Row"
                >
                  <Img
                    src="images/img_trash.png"
                    className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] mt-[1px] lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                    compId="I43812:52393;41:964;485:292315"
                    comWidth={16}
                    comHeight={16}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="trash"
                  />
                  <Text
                    className="font-medium lg:ml-[13px] xl:ml-[15px] ml-[17px] 3xl:ml-[20px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                    compId="I43812:52393;41:965"
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
                  compId="I43812:52393;41:966"
                  comWidth={62}
                  comHeight={22}
                  compLeft={1}
                  compRight={0}
                  compType="Row"
                >
                  <Img
                    src="images/img_vector_bluegray_400.png"
                    className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] w-[26%]"
                    compId="I43812:52393;614:13885;531:320955"
                    comWidth={16}
                    comHeight={18}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Vector Three"
                  />
                  <Text
                    className="font-medium lg:ml-[13px] xl:ml-[15px] ml-[17px] 3xl:ml-[20px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                    compId="I43812:52393;41:968"
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
                  value="Settings13"
                  className="font-medium lg:mb-[426px] xl:mb-[487px] mb-[548px] 3xl:mb-[657px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400"
                  inputClassName="h-[20px] mr-[5px] w-[20px]"
                  compId="I43812:52393;531:316827"
                  comWidth={91}
                  comHeight={22}
                  compLeft={0}
                  compRight={0}
                  compType="Radio"
                  checked={false}
                  name="Settings Two"
                  label="Settings13"
                  variant="illBluegray400"
                ></Radio>
              </Column>
            </Column>
          </aside>
          <Line
            className="absolute bg-indigo_50 lg:h-[1197px] xl:h-[1369px] h-[1538px] 2xl:h-[1540px] 3xl:h-[1847px] left-[17%] w-[1px]"
            compId="43812:52394"
            comWidth={1}
            comHeight={1538}
            compLeft={241}
            compRight={0}
            compType="Line"
          />
        </Stack>
        <div
          className="absolute bg-bluegray_900_97 h-[1080px] 2xl:h-[1081px] 3xl:h-[1297px] lg:h-[840px] xl:h-[961px] w-[100%]"
          compId="43812:52395"
          comWidth={1440}
          comHeight={1080}
          compLeft={0}
          compRight={0}
          compType="View"
        ></div>
        <Column
          className="absolute bg-white_A700 justify-center lg:p-[35px] xl:p-[40px] p-[45px] 3xl:p-[54px] right-[0] w-[34%]"
          compId="43812:52823"
          comWidth={488}
          comHeight={1080}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Row
            className="items-center justify-between ml-[3px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] w-[99%]"
            compId="43812:52881"
            comWidth={395}
            comHeight={32}
            compLeft={3}
            compRight={0}
            compType="Row"
          >
            <Text
              className="font-bold lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_800 w-[auto]"
              compId="43812:52882"
              comWidth={94}
              comHeight={32}
              compLeft={0}
              compRight={0}
              compType="Text"
            >
              My Cart
            </Text>
            <Img
              src="images/img_close.png"
              className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
              compId="43812:52883"
              comWidth={32}
              comHeight={32}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="close"
            />
          </Row>
          <List
            className="gap-[0] min-h-[auto] ml-[3px] lg:mt-[37px] xl:mt-[42px] mt-[48px] 3xl:mt-[57px] w-[99%]"
            compId="1117"
            comWidth={395}
            comHeight={384}
            compLeft={3}
            compRight={0}
            compType="List"
            orientation="vertical"
          >
            <Row
              className="justify-between lg:my-[24px] xl:my-[28px] my-[32px] 3xl:my-[38px] w-[100%]"
              compId="43812:52826"
              comWidth={395}
              comHeight={160}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Img
                src="images/img_rectangle.png"
                className="xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] w-[28%]"
                compId="43812:52827"
                comWidth={110}
                comHeight={118}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Rectangle"
              />
              <Column
                className="w-[66%]"
                compId="43812:52828"
                comWidth={261}
                comHeight={160}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="items-center justify-between w-[98%]"
                  compId="43812:52830"
                  comWidth={257}
                  comHeight={28}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                    compId="43812:52831"
                    comWidth={85}
                    comHeight={28}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Polo Shirt
                  </Text>
                  <div
                    className="bg-bluegray_900 h-[2px] 3xl:h-[3px] 2xl:h-[3px] rounded-radius1 w-[6%]"
                    compId="I43812:52832;1:1328"
                    comWidth={16}
                    comHeight={2}
                    compLeft={0}
                    compRight={0}
                    compType="View"
                  ></div>
                </Row>
                <Text
                  className="font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="43812:52833"
                  comWidth={90}
                  comHeight={22}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  Color: Grey, S
                </Text>
                <Row
                  className="items-center lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[43%]"
                  compId="43812:52834"
                  comWidth={112}
                  comHeight={32}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Column
                    className="border border-indigo_50 border-solid lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] items-center 3xl:px-[10px] lg:px-[7px] xl:px-[8px] px-[9px] lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                    compId="43812:52835"
                    comWidth={32}
                    comHeight={32}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <div
                      className="bg-bluegray_900 h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] rounded-radius50 w-[1px]"
                      compId="I43812:52837;1:1328"
                      comWidth={1}
                      comHeight={1}
                      compLeft={0}
                      compRight={0}
                      compType="View"
                    ></div>
                  </Column>
                  <Text
                    className="font-medium lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]"
                    compId="43812:52839"
                    comWidth={7}
                    comHeight={22}
                    compLeft={20}
                    compRight={0}
                    compType="Text"
                  >
                    1
                  </Text>
                  <Button
                    className="flex lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] items-center justify-center lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                    compId="43812:52840"
                    comWidth={32}
                    comHeight={32}
                    compLeft={20}
                    compRight={0}
                    compType="IconButton"
                    size="smIcn"
                    variant="icbOutlineIndigo50"
                  >
                    <Img
                      src="images/img_close.png"
                      className="h-[20px] flex items-center justify-center lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                      compId="43812:52840"
                      comWidth={32}
                      comHeight={32}
                      compLeft={20}
                      compRight={0}
                      compType="IconButton"
                      alt="close One"
                    />
                  </Button>
                </Row>
                <Row
                  className="items-center justify-between lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]"
                  compId="43812:52844"
                  comWidth={261}
                  comHeight={22}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                    compId="43812:52845"
                    comWidth={33}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Price
                  </Text>
                  <Text
                    className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                    compId="43812:52846"
                    comWidth={46}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    $120.0
                  </Text>
                </Row>
              </Column>
            </Row>
            <Line
              className="self-center w-[100%] h-[1px] bg-indigo_50"
              compId="43812:52869"
              comWidth={395}
              comHeight={1}
              compLeft={0}
              compRight={0}
              compType="Line"
            />
            <Row
              className="justify-between lg:my-[24px] xl:my-[28px] my-[32px] 3xl:my-[38px] w-[100%]"
              compId="43812:52848"
              comWidth={395}
              comHeight={160}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Img
                src="images/img_frame_1.png"
                className="xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] w-[28%]"
                compId="43812:52849"
                comWidth={110}
                comHeight={118}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Rectangle One"
              />
              <Column
                className="w-[66%]"
                compId="43812:52850"
                comWidth={261}
                comHeight={160}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="items-center justify-between w-[98%]"
                  compId="43812:52852"
                  comWidth={257}
                  comHeight={28}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                    compId="43812:52853"
                    comWidth={111}
                    comHeight={28}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Basic T-shirt
                  </Text>
                  <div
                    className="bg-bluegray_900 h-[2px] 3xl:h-[3px] 2xl:h-[3px] rounded-radius1 w-[6%]"
                    compId="I43812:52854;1:1328"
                    comWidth={16}
                    comHeight={2}
                    compLeft={0}
                    compRight={0}
                    compType="View"
                  ></div>
                </Row>
                <Text
                  className="font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="43812:52855"
                  comWidth={90}
                  comHeight={22}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  Color: Grey, S
                </Text>
                <Row
                  className="items-center lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[43%]"
                  compId="43812:52856"
                  comWidth={112}
                  comHeight={32}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Column
                    className="border border-indigo_50 border-solid lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] items-center 3xl:px-[10px] lg:px-[7px] xl:px-[8px] px-[9px] lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                    compId="43812:52857"
                    comWidth={32}
                    comHeight={32}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <div
                      className="bg-bluegray_900 h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] rounded-radius50 w-[1px]"
                      compId="I43812:52859;1:1328"
                      comWidth={1}
                      comHeight={1}
                      compLeft={0}
                      compRight={0}
                      compType="View"
                    ></div>
                  </Column>
                  <Text
                    className="font-medium lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]"
                    compId="43812:52861"
                    comWidth={7}
                    comHeight={22}
                    compLeft={20}
                    compRight={0}
                    compType="Text"
                  >
                    1
                  </Text>
                  <Button
                    className="flex lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] items-center justify-center lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                    compId="43812:52862"
                    comWidth={32}
                    comHeight={32}
                    compLeft={20}
                    compRight={0}
                    compType="IconButton"
                    size="smIcn"
                    variant="icbOutlineIndigo50"
                  >
                    <Img
                      src="images/img_close.png"
                      className="h-[20px] flex items-center justify-center lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                      compId="43812:52862"
                      comWidth={32}
                      comHeight={32}
                      compLeft={20}
                      compRight={0}
                      compType="IconButton"
                      alt="close Two"
                    />
                  </Button>
                </Row>
                <Row
                  className="items-center justify-between lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]"
                  compId="43812:52866"
                  comWidth={261}
                  comHeight={22}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                    compId="43812:52867"
                    comWidth={33}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Price
                  </Text>
                  <Text
                    className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                    compId="43812:52868"
                    comWidth={46}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    $120.0
                  </Text>
                </Row>
              </Column>
            </Row>
          </List>
          <Row
            className="justify-between ml-[4px] lg:mt-[49px] xl:mt-[56px] mt-[64px] 3xl:mt-[76px] w-[99%]"
            compId="43812:52870"
            comWidth={394}
            comHeight={28}
            compLeft={4}
            compRight={0}
            compType="Row"
          >
            <Text
              className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
              compId="43812:52871"
              comWidth={38}
              comHeight={24}
              compLeft={0}
              compRight={0}
              compType="Text"
            >
              Total
            </Text>
            <Text
              className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_800 w-[auto]"
              compId="43812:52872"
              comWidth={62}
              comHeight={28}
              compLeft={0}
              compRight={0}
              compType="Text"
            >
              $240.0
            </Text>
          </Row>
          <Row
            className="items-center ml-[3px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[97%]"
            compId="43812:52873"
            comWidth={387}
            comHeight={48}
            compLeft={3}
            compRight={0}
            compType="Row"
          >
            <Button
              className="font-bold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[48%]"
              compId="43812:52874"
              comWidth={186}
              comHeight={48}
              compLeft={0}
              compRight={0}
              compType="Button"
              shape="CircleBorder24"
              size="lg"
              variant="FillDeeporange300"
            >
              Purchase now
            </Button>
            <Button
              className="font-bold lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[48%]"
              compId="43812:52875"
              comWidth={185}
              comHeight={48}
              compLeft={16}
              compRight={0}
              compType="Button"
              shape="CircleBorder24"
              size="lg"
              variant="FillDeeporange50"
            >
              Add to cart
            </Button>
          </Row>
          <Row
            className="items-center lg:mb-[206px] xl:mb-[235px] mb-[265px] 3xl:mb-[318px] ml-[3px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] w-[64%]"
            compId="43812:52876"
            comWidth={256}
            comHeight={50}
            compLeft={3}
            compRight={0}
            compType="Row"
          >
            <Img
              src="images/img_mobile_bluegray_900.png"
              className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] w-[10%]"
              compId="I43812:52877;5:184"
              comWidth={24}
              comHeight={20}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="mobile"
            />
            <Column
              className="lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] w-[80%]"
              compId="43812:52878"
              comWidth={198}
              comHeight={50}
              compLeft={24}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-bold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                compId="43812:52879"
                comWidth={198}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                Free nationwide shipping
              </Text>
              <Text
                className="font-normal mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]"
                compId="43812:52880"
                comWidth={161}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                (For order begin $100.0)
              </Text>
            </Column>
          </Row>
        </Column>
      </Stack>
    </>
  );
};

export default CartPage;
