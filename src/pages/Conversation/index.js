import React from "react";

import {
  Column,
  Stack,
  Row,
  Img,
  Text,
  Input,
  Button,
  List,
  Line,
  Radio,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const ConversationPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");
  const [inputvalue1, setInputvalue1] = React.useState("");

  return (
    <>
      <Column
        className="font-inter items-center mx-[auto] w-[100%]"
        compId="528:312791"
        comWidth={1440}
        comHeight={927}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Stack
          className="bg-white_A700 3xl:h-[1114px] lg:h-[721px] xl:h-[825px] h-[927px] 2xl:h-[928px] w-[100%]"
          compId="528:313317"
          comWidth={1440}
          comHeight={927}
          compLeft={0}
          compRight={0}
          compType="Stack"
        >
          <Column
            className="absolute items-end w-[100%]"
            compId="1260"
            comWidth={1440}
            comHeight={927}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <header
              className="w-[100%]"
              compId="700"
              comWidth={1440}
              comHeight={60}
              compLeft={0}
              compRight={0}
              compType="Header"
            >
              <Row
                className="bg-white_A700 items-center justify-end p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] w-[100%]"
                compId="43812:48062"
                comWidth={1440}
                comHeight={60}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_microphone.png"
                  className="lg:h-[22px] xl:h-[25px] h-[28px] 2xl:h-[29px] 3xl:h-[34px] w-[1%]"
                  compId="I43812:48062;43807:13258"
                  comWidth={21}
                  comHeight={28}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="microphone"
                />
                <Text
                  className="font-medium lg:ml-[169px] xl:ml-[193px] ml-[218px] 3xl:ml-[261px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                  compId="I43812:48062;234:259667"
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
                  compId="I43812:48062;234:259514"
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
                      compId="I43812:48062;234:259514;234:259505"
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
                  compId="I43812:48062;531:315836;5:32"
                  comWidth={20}
                  comHeight={22}
                  compLeft={136}
                  compRight={0}
                  compType="Image"
                  alt="Vector"
                />
                <Stack
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] w-[9%]"
                  compId="1258"
                  comWidth={126}
                  comHeight={24}
                  compLeft={29}
                  compRight={0}
                  compType="Stack"
                >
                  <Img
                    src="images/img_user_bluegray_900.png"
                    className="absolute lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] inset-y-[0] left-[0] my-[auto] w-[14%]"
                    compId="I43812:48062;37:1285;37:1283"
                    comWidth={18}
                    comHeight={20}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="user"
                  />
                  <Row
                    className="absolute right-[0] w-[90%]"
                    compId="701"
                    comWidth={113}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <div
                      className="bg-red_600 3xl:h-[10px] lg:h-[7px] h-[8px] 2xl:h-[9px] mt-[1px] outline outline-[2px] outline-white_A700 rounded-radius50 lg:w-[6px] xl:w-[7px] w-[8px] 3xl:w-[9px]"
                      compId="I43812:48062;530:301660"
                      comWidth={8}
                      comHeight={8}
                      compLeft={0}
                      compRight={0}
                      compType="View"
                    ></div>
                    <Text
                      className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_500 w-[auto]"
                      compId="I43812:48062;37:1272"
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
                  compId="I43812:48062;483:292004;43812:47214"
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
              className="bg-gray_50 font-poppins justify-end lg:p-[18px] xl:p-[21px] p-[24px] 3xl:p-[28px] w-[83%]"
              compId="528:313318"
              comWidth={1199}
              comHeight={867}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-medium lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]"
                compId="528:313319"
                comWidth={91}
                comHeight={32}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                Message
              </Text>
              <Row
                className="bg-white_A700 font-inter items-center lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:pl-[24px] xl:pl-[28px] pl-[32px] 3xl:pl-[38px] rounded-radius4 shadow-bs1 w-[100%]"
                compId="528:313320"
                comWidth={1151}
                comHeight={747}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Column
                  className="lg:pb-[16px] xl:pb-[18px] pb-[21px] 3xl:pb-[25px] lg:pr-[16px] xl:pr-[18px] pr-[21px] 3xl:pr-[25px] w-[37%]"
                  compId="1263"
                  comWidth={414}
                  comHeight={692}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="items-center 3xl:pr-[10px] lg:pr-[7px] xl:pr-[8px] pr-[9px] w-[45%]"
                    compId="528:313322"
                    comWidth={176}
                    comHeight={62}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Button
                      className="flex lg:h-[49px] xl:h-[56px] h-[62px] 2xl:h-[63px] 3xl:h-[75px] items-center justify-center rounded-radius50 lg:w-[48px] xl:w-[55px] w-[62px] 3xl:w-[74px]"
                      compId="528:313323"
                      comWidth={62}
                      comHeight={62}
                      compLeft={0}
                      compRight={0}
                      compType="IconButton"
                      size="mdIcn"
                      variant="icbOutlineGreen700"
                    >
                      <Img
                        src="images/img_robototoyfacefi.png"
                        className="h-[48px] flex items-center justify-center lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px]"
                        compId="528:313323"
                        comWidth={62}
                        comHeight={62}
                        compLeft={0}
                        compRight={0}
                        compType="IconButton"
                        alt="Group"
                      />
                    </Button>
                    <Column
                      className="lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] w-[53%]"
                      compId="528:313326"
                      comWidth={89}
                      comHeight={54}
                      compLeft={16}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_800 w-[auto]"
                        compId="528:313327"
                        comWidth={89}
                        comHeight={28}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Ackerman
                      </Text>
                      <Text
                        className="font-normal mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                        compId="528:313328"
                        comWidth={69}
                        comHeight={22}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        My accout
                      </Text>
                    </Column>
                  </Row>
                  <Text
                    className="font-normal lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                    compId="528:313336"
                    comWidth={71}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Online (10)
                  </Text>
                  <Row
                    className="items-center lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[97%]"
                    compId="528:313337"
                    comWidth={380}
                    comHeight={83}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <List
                      className="lg:gap-[18px] xl:gap-[21px] gap-[24px] 3xl:gap-[28px] grid grid-cols-5 min-h-[auto] w-[89%]"
                      compId="1267"
                      comWidth={338}
                      comHeight={83}
                      compLeft={0}
                      compRight={0}
                      compType="List"
                      orientation="horizontal"
                    >
                      <Column
                        className="items-center w-[100%]"
                        compId="528:313338"
                        comWidth={48}
                        comHeight={83}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Stack
                          className="lg:h-[40px] xl:h-[46px] h-[51px] 2xl:h-[52px] 3xl:h-[62px] w-[100%]"
                          compId="528:313339"
                          comWidth={48}
                          comHeight={51}
                          compLeft={0}
                          compRight={0}
                          compType="Stack"
                        >
                          <Img
                            src="images/img_punktoyface1.png"
                            className="absolute lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius50 top-[0] w-[100%]"
                            compId="I528:313341;341:279747"
                            comWidth={48}
                            comHeight={48}
                            compLeft={0}
                            compRight={0}
                            compType="CircleImage"
                            alt="PunkToyFaceOne"
                          />
                          <div
                            className="absolute bg-green_700 bottom-[0] xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] outline outline-[2px] outline-white_A700 right-[4%] rounded-radius50 w-[11px] 3xl:w-[13px] lg:w-[8px] xl:w-[9px]"
                            compId="528:313342"
                            comWidth={11}
                            comHeight={11}
                            compLeft={0}
                            compRight={2}
                            compType="View"
                          ></div>
                        </Stack>
                        <Text
                          className="font-medium lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                          compId="528:313343"
                          comWidth={27}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          Lee
                        </Text>
                      </Column>
                      <Column
                        className="items-center w-[100%]"
                        compId="528:313344"
                        comWidth={48}
                        comHeight={83}
                        compLeft={24}
                        compRight={0}
                        compType="Column"
                      >
                        <Stack
                          className="lg:h-[40px] xl:h-[46px] h-[51px] 2xl:h-[52px] 3xl:h-[62px] w-[100%]"
                          compId="528:313345"
                          comWidth={48}
                          comHeight={51}
                          compLeft={0}
                          compRight={0}
                          compType="Stack"
                        >
                          <Img
                            src="images/img_indiahigh.png"
                            className="absolute lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius50 top-[0] w-[100%]"
                            compId="I528:313347;444:290029"
                            comWidth={48}
                            comHeight={48}
                            compLeft={0}
                            compRight={0}
                            compType="CircleImage"
                            alt="Indiahigh"
                          />
                          <div
                            className="absolute bg-bluegray_200 bottom-[0] xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] outline outline-[2px] outline-white_A700 right-[4%] rounded-radius50 w-[11px] 3xl:w-[13px] lg:w-[8px] xl:w-[9px]"
                            compId="528:313348"
                            comWidth={11}
                            comHeight={11}
                            compLeft={0}
                            compRight={2}
                            compType="View"
                          ></div>
                        </Stack>
                        <Text
                          className="flex font-medium items-center lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                          compId="528:313349"
                          comWidth={24}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          Riri
                        </Text>
                      </Column>
                      <Column
                        className="w-[100%]"
                        compId="528:313350"
                        comWidth={48}
                        comHeight={83}
                        compLeft={24}
                        compRight={0}
                        compType="Column"
                      >
                        <Stack
                          className="lg:h-[40px] xl:h-[46px] h-[51px] 2xl:h-[52px] 3xl:h-[62px] w-[100%]"
                          compId="528:313351"
                          comWidth={48}
                          comHeight={51}
                          compLeft={0}
                          compRight={0}
                          compType="Stack"
                        >
                          <Img
                            src="images/img_tintin22.png"
                            className="absolute lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius50 top-[0] w-[100%]"
                            compId="I528:313353;444:290035"
                            comWidth={48}
                            comHeight={48}
                            compLeft={0}
                            compRight={0}
                            compType="CircleImage"
                            alt="TinTinTwentyTwo"
                          />
                          <div
                            className="absolute bg-bluegray_200 bottom-[0] xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] outline outline-[2px] outline-white_A700 right-[4%] rounded-radius50 w-[11px] 3xl:w-[13px] lg:w-[8px] xl:w-[9px]"
                            compId="528:313354"
                            comWidth={11}
                            comHeight={11}
                            compLeft={0}
                            compRight={2}
                            compType="View"
                          ></div>
                        </Stack>
                        <Text
                          className="font-medium ml-[3px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                          compId="528:313355"
                          comWidth={37}
                          comHeight={24}
                          compLeft={3}
                          compRight={0}
                          compType="Text"
                        >
                          Jimo
                        </Text>
                      </Column>
                      <Column
                        className="w-[100%]"
                        compId="528:313356"
                        comWidth={48}
                        comHeight={83}
                        compLeft={24}
                        compRight={0}
                        compType="Column"
                      >
                        <Stack
                          className="lg:h-[40px] xl:h-[46px] h-[51px] 2xl:h-[52px] 3xl:h-[62px] w-[100%]"
                          compId="528:313357"
                          comWidth={48}
                          comHeight={51}
                          compLeft={0}
                          compRight={0}
                          compType="Stack"
                        >
                          <Img
                            src="images/img_vangoghbyamrit.png"
                            className="absolute lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius50 top-[0] w-[100%]"
                            compId="I528:313359;341:279748"
                            comWidth={48}
                            comHeight={48}
                            compLeft={0}
                            compRight={0}
                            compType="CircleImage"
                            alt="VanGoghByAmrit"
                          />
                          <div
                            className="absolute bg-bluegray_200 bottom-[0] xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] outline outline-[2px] outline-white_A700 right-[4%] rounded-radius50 w-[11px] 3xl:w-[13px] lg:w-[8px] xl:w-[9px]"
                            compId="528:313360"
                            comWidth={11}
                            comHeight={11}
                            compLeft={0}
                            compRight={2}
                            compType="View"
                          ></div>
                        </Stack>
                        <Text
                          className="font-medium ml-[1px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                          compId="528:313361"
                          comWidth={44}
                          comHeight={24}
                          compLeft={1}
                          compRight={0}
                          compType="Text"
                        >
                          Acker
                        </Text>
                      </Column>
                      <Column
                        className="w-[100%]"
                        compId="528:313362"
                        comWidth={50}
                        comHeight={83}
                        compLeft={24}
                        compRight={0}
                        compType="Column"
                      >
                        <Stack
                          className="lg:h-[40px] xl:h-[46px] h-[51px] 2xl:h-[52px] 3xl:h-[62px] ml-[2px] w-[96%]"
                          compId="528:313363"
                          comWidth={48}
                          comHeight={51}
                          compLeft={2}
                          compRight={0}
                          compType="Stack"
                        >
                          <Img
                            src="images/img_punk9252toyface.png"
                            className="absolute lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius50 top-[0] w-[100%]"
                            compId="I528:313365;444:290030"
                            comWidth={48}
                            comHeight={48}
                            compLeft={0}
                            compRight={0}
                            compType="CircleImage"
                            alt="Punk9252ToyFace"
                          />
                          <div
                            className="absolute bg-bluegray_200 bottom-[0] xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] outline outline-[2px] outline-white_A700 right-[4%] rounded-radius50 w-[11px] 3xl:w-[13px] lg:w-[8px] xl:w-[9px]"
                            compId="528:313366"
                            comWidth={11}
                            comHeight={11}
                            compLeft={0}
                            compRight={2}
                            compType="View"
                          ></div>
                        </Stack>
                        <Text
                          className="font-medium lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                          compId="528:313367"
                          comWidth={48}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          Momo
                        </Text>
                      </Column>
                    </List>
                    <Img
                      src="images/img_arrowright_bluegray_400_14X8.png"
                      className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] lg:ml-[26px] xl:ml-[30px] ml-[34px] 3xl:ml-[40px] w-[2%]"
                      compId="I528:313368;1:1055"
                      comWidth={8}
                      comHeight={14}
                      compLeft={34}
                      compRight={0}
                      compType="Image"
                      alt="arrowright"
                    />
                  </Row>
                  <Input
                    value={inputvalue1}
                    onChange={(e) => setInputvalue1(e?.target?.value)}
                    className="font-medium p-[0] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                    wrapClassName="3xl:mt-[38px] flex lg:mt-[24px] mt-[32px] w-[97%] xl:mt-[28px]"
                    compId="528:313321"
                    comWidth={0}
                    comHeight={40}
                    compLeft={0}
                    compRight={0}
                    compType="SearchView"
                    name="SearchBox One"
                    placeholder="Search..."
                    prefix={
                      <Img
                        src="images/img_search.png"
                        className="cursor-pointer w-[20px] h-[20px] ml-[16px] mr-[8px] lg:w-[15px] lg:h-[16px] lg:ml-[12px] lg:mr-[6px] xl:w-[17px] xl:h-[18px] xl:ml-[14px] xl:mr-[7px] 2xl:h-[21px] 3xl:w-[24px] 3xl:h-[25px] 3xl:ml-[19px] 3xl:mr-[9px] my-[auto]"
                        compId="I528:313321;234:259505"
                        comWidth={20}
                        comHeight={20}
                        compLeft={16}
                        compRight={8}
                        compType="Image"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue1?.length > 0 ? (
                        <CloseSVG
                          color="#828fa2"
                          className="cursor-pointer w-[20px] h-[20px] ml-[10px] mr-[22px] lg:w-[15px] lg:h-[16px] lg:ml-[7px] lg:mr-[17px] xl:w-[17px] xl:h-[18px] xl:ml-[8px] xl:mr-[19px] 2xl:h-[21px] 3xl:w-[24px] 3xl:h-[25px] 3xl:ml-[12px] 3xl:mr-[26px] my-[auto]"
                          onClick={() => setInputvalue1("")}
                        />
                      ) : (
                        ""
                      )
                    }
                    shape="srcRoundedBorder4"
                    size="smSrc"
                    variant="srcFillGray50"
                  ></Input>
                  <Row
                    className="items-center lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[97%]"
                    compId="528:313370"
                    comWidth={382}
                    comHeight={56}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Stack
                      className="lg:h-[40px] xl:h-[46px] h-[51px] 2xl:h-[52px] 3xl:h-[62px] w-[13%]"
                      compId="528:313371"
                      comWidth={48}
                      comHeight={51}
                      compLeft={0}
                      compRight={0}
                      compType="Stack"
                    >
                      <Img
                        src="images/img_punktoyface1.png"
                        className="absolute lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius50 top-[0] w-[100%]"
                        compId="I528:313373;341:279747"
                        comWidth={48}
                        comHeight={48}
                        compLeft={0}
                        compRight={0}
                        compType="CircleImage"
                        alt="PunkToyFaceOne One"
                      />
                      <div
                        className="absolute bg-green_700 bottom-[0] xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] outline outline-[2px] outline-white_A700 right-[4%] rounded-radius50 w-[11px] 3xl:w-[13px] lg:w-[8px] xl:w-[9px]"
                        compId="528:313374"
                        comWidth={11}
                        comHeight={11}
                        compLeft={0}
                        compRight={2}
                        compType="View"
                      ></div>
                    </Stack>
                    <Column
                      className="lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] w-[70%]"
                      compId="528:313376"
                      comWidth={267}
                      comHeight={56}
                      compLeft={20}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_800 w-[auto]"
                        compId="528:313377"
                        comWidth={87}
                        comHeight={28}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Lee Ankar
                      </Text>
                      <Text
                        className="font-medium mt-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="528:313378"
                        comWidth={231}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Hey! Can i meet you for a sec?
                      </Text>
                    </Column>
                    <Column
                      className="lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] w-[7%]"
                      compId="528:313379"
                      comWidth={27}
                      comHeight={56}
                      compLeft={20}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                        compId="528:313380"
                        comWidth={27}
                        comHeight={22}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        now
                      </Text>
                      <Text
                        className="bg-red_600 flex font-bold items-center justify-center ml-[3px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius50 xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[24px]"
                        compId="528:313381"
                        comWidth={24}
                        comHeight={24}
                        compLeft={3}
                        compRight={0}
                        compType="Text"
                      >
                        3
                      </Text>
                    </Column>
                  </Row>
                  <List
                    className="gap-[0] min-h-[auto] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] w-[97%]"
                    compId="1266"
                    comWidth={382}
                    comHeight={248}
                    compLeft={0}
                    compRight={0}
                    compType="List"
                    orientation="vertical"
                  >
                    <Row
                      className="justify-between lg:my-[15px] xl:my-[17px] my-[20px] 3xl:my-[24px] w-[100%]"
                      compId="528:313385"
                      comWidth={382}
                      comHeight={56}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Stack
                        className="lg:h-[40px] xl:h-[46px] h-[51px] 2xl:h-[52px] 3xl:h-[62px] mt-[2px] w-[13%]"
                        compId="528:313386"
                        comWidth={48}
                        comHeight={51}
                        compLeft={0}
                        compRight={0}
                        compType="Stack"
                      >
                        <Img
                          src="images/img_tintin22.png"
                          className="absolute lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius50 top-[0] w-[100%]"
                          compId="I528:313388;444:290035"
                          comWidth={48}
                          comHeight={48}
                          compLeft={0}
                          compRight={0}
                          compType="CircleImage"
                          alt="TinTinTwentyTwo One"
                        />
                        <div
                          className="absolute bg-bluegray_200 bottom-[0] xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] outline outline-[2px] outline-white_A700 right-[4%] rounded-radius50 w-[11px] 3xl:w-[13px] lg:w-[8px] xl:w-[9px]"
                          compId="528:313389"
                          comWidth={11}
                          comHeight={11}
                          compLeft={0}
                          compRight={2}
                          compType="View"
                        ></div>
                      </Stack>
                      <Column
                        className="w-[64%]"
                        compId="528:313391"
                        comWidth={243}
                        comHeight={56}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_800 w-[auto]"
                          compId="528:313392"
                          comWidth={42}
                          comHeight={28}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          Jimo
                        </Text>
                        <Text
                          className="font-normal mt-[4px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                          compId="528:313393"
                          comWidth={185}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          Sorry for my mistaken ✓
                        </Text>
                      </Column>
                      <Text
                        className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                        compId="528:313395"
                        comWidth={51}
                        comHeight={22}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        23 mins
                      </Text>
                    </Row>
                    <Line
                      className="self-center w-[82%] h-[1px] bg-indigo_50"
                      compId="528:313420"
                      comWidth={314}
                      comHeight={1}
                      compLeft={0}
                      compRight={0}
                      compType="Line"
                    />
                    <Row
                      className="justify-between lg:my-[15px] xl:my-[17px] my-[20px] 3xl:my-[24px] w-[100%]"
                      compId="528:313397"
                      comWidth={382}
                      comHeight={56}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Stack
                        className="lg:h-[40px] xl:h-[46px] h-[51px] 2xl:h-[52px] 3xl:h-[62px] mt-[2px] w-[13%]"
                        compId="528:313398"
                        comWidth={48}
                        comHeight={51}
                        compLeft={0}
                        compRight={0}
                        compType="Stack"
                      >
                        <Img
                          src="images/img_punk9252toyface.png"
                          className="absolute lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius50 top-[0] w-[100%]"
                          compId="I528:313400;444:290030"
                          comWidth={48}
                          comHeight={48}
                          compLeft={0}
                          compRight={0}
                          compType="CircleImage"
                          alt="Punk9252ToyFace One"
                        />
                        <div
                          className="absolute bg-bluegray_200 bottom-[0] xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] outline outline-[2px] outline-white_A700 right-[4%] rounded-radius50 w-[11px] 3xl:w-[13px] lg:w-[8px] xl:w-[9px]"
                          compId="528:313401"
                          comWidth={11}
                          comHeight={11}
                          compLeft={0}
                          compRight={2}
                          compType="View"
                        ></div>
                      </Stack>
                      <Column
                        className="w-[64%]"
                        compId="528:313403"
                        comWidth={243}
                        comHeight={56}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_800 w-[auto]"
                          compId="528:313404"
                          comWidth={54}
                          comHeight={28}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          Momo
                        </Text>
                        <Text
                          className="font-normal mt-[4px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                          compId="528:313405"
                          comWidth={185}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          Sorry for my mistaken ✓
                        </Text>
                      </Column>
                      <Text
                        className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                        compId="528:313407"
                        comWidth={51}
                        comHeight={22}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        23 mins
                      </Text>
                    </Row>
                    <Line
                      className="self-center w-[82%] h-[1px] bg-indigo_50"
                      compId="528:313420"
                      comWidth={314}
                      comHeight={1}
                      compLeft={0}
                      compRight={0}
                      compType="Line"
                    />
                    <Row
                      className="justify-between lg:my-[15px] xl:my-[17px] my-[20px] 3xl:my-[24px] w-[100%]"
                      compId="528:313409"
                      comWidth={382}
                      comHeight={56}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Stack
                        className="lg:h-[40px] xl:h-[46px] h-[51px] 2xl:h-[52px] 3xl:h-[62px] mt-[2px] w-[13%]"
                        compId="528:313410"
                        comWidth={48}
                        comHeight={51}
                        compLeft={0}
                        compRight={0}
                        compType="Stack"
                      >
                        <Img
                          src="images/img_indiahigh.png"
                          className="absolute lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius50 top-[0] w-[100%]"
                          compId="I528:313412;444:290029"
                          comWidth={48}
                          comHeight={48}
                          compLeft={0}
                          compRight={0}
                          compType="CircleImage"
                          alt="Indiahigh One"
                        />
                        <div
                          className="absolute bg-bluegray_200 bottom-[0] xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] outline outline-[2px] outline-white_A700 right-[4%] rounded-radius50 w-[11px] 3xl:w-[13px] lg:w-[8px] xl:w-[9px]"
                          compId="528:313413"
                          comWidth={11}
                          comHeight={11}
                          compLeft={0}
                          compRight={2}
                          compType="View"
                        ></div>
                      </Stack>
                      <Column
                        className="w-[64%]"
                        compId="528:313415"
                        comWidth={243}
                        comHeight={56}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_800 w-[auto]"
                          compId="528:313416"
                          comWidth={65}
                          comHeight={28}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          Riri Lee
                        </Text>
                        <Text
                          className="font-normal mt-[4px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                          compId="528:313417"
                          comWidth={185}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          Sorry for my mistaken ✓
                        </Text>
                      </Column>
                      <Text
                        className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                        compId="528:313419"
                        comWidth={51}
                        comHeight={22}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        23 mins
                      </Text>
                    </Row>
                  </List>
                </Column>
                <Stack
                  className="lg:h-[581px] xl:h-[665px] h-[747px] 2xl:h-[748px] 3xl:h-[897px] w-[63%]"
                  compId="1265"
                  comWidth={705}
                  comHeight={747}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Column
                    className="absolute left-[5%] top-[4%] w-[12%]"
                    compId="528:313329"
                    comWidth={87}
                    comHeight={58}
                    compLeft={32}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_800 w-[auto]"
                      compId="528:313330"
                      comWidth={87}
                      comHeight={28}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Lee Ankar
                    </Text>
                    <Radio
                      value="Online"
                      className="font-medium lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:pl-[6px] xl:pl-[7px] pl-[8px] 3xl:pl-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800"
                      inputClassName="h-[8px] mr-[5px] w-[8px]"
                      compId="528:313332"
                      comWidth={57}
                      comHeight={22}
                      compLeft={0}
                      compRight={0}
                      compType="Radio"
                      checked={false}
                      name="ProfileViews One"
                      label="Online"
                      variant="illGreen700"
                    ></Radio>
                  </Column>
                  <Stack
                    className="absolute lg:h-[581px] xl:h-[665px] h-[747px] 2xl:h-[748px] 3xl:h-[897px] w-[100%]"
                    compId="1257"
                    comWidth={705}
                    comHeight={747}
                    compLeft={0}
                    compRight={0}
                    compType="Stack"
                  >
                    <Line
                      className="absolute bg-indigo_50 lg:h-[581px] xl:h-[665px] h-[747px] 2xl:h-[748px] 3xl:h-[897px] left-[0] w-[1px]"
                      compId="528:313421"
                      comWidth={1}
                      comHeight={747}
                      compLeft={0}
                      compRight={0}
                      compType="Line"
                    />
                    <Row
                      className="absolute items-center justify-center right-[5%] top-[4%] w-[16%]"
                      compId="1261"
                      comWidth={112}
                      comHeight={48}
                      compLeft={0}
                      compRight={32}
                      compType="Row"
                    >
                      <Button
                        className="flex lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                        compId="528:313423"
                        comWidth={48}
                        comHeight={48}
                        compLeft={0}
                        compRight={0}
                        compType="IconButton"
                      >
                        <Img
                          src="images/img_search_bluegray_900.png"
                          className="h-[20px] flex items-center justify-center lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                          compId="528:313423"
                          comWidth={48}
                          comHeight={48}
                          compLeft={0}
                          compRight={0}
                          compType="IconButton"
                          alt="search"
                        />
                      </Button>
                      <Button
                        className="flex lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] rounded-radius50 lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                        compId="528:313425"
                        comWidth={48}
                        comHeight={48}
                        compLeft={16}
                        compRight={0}
                        compType="IconButton"
                      >
                        <Img
                          src="images/img_overflowmenu.png"
                          className="h-[20px] flex items-center justify-center lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                          compId="528:313425"
                          comWidth={48}
                          comHeight={48}
                          compLeft={16}
                          compRight={0}
                          compType="IconButton"
                          alt="overflowmenu"
                        />
                      </Button>
                    </Row>
                    <Line
                      className="absolute bg-indigo_50 h-[1px] inset-x-[0] mx-[auto] top-[15%] w-[1px]"
                      compId="528:313427"
                      comWidth={1}
                      comHeight={1}
                      compLeft={0}
                      compRight={0}
                      compType="Line"
                    />
                    <Column
                      className="absolute bottom-[3%] inset-x-[0] mx-[auto] w-[91%]"
                      compId="1262"
                      comWidth={641}
                      comHeight={577}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Stack
                        className="h-[104px] 2xl:h-[105px] 3xl:h-[125px] lg:h-[81px] xl:h-[93px] w-[50%]"
                        compId="528:313448"
                        comWidth={319}
                        comHeight={104}
                        compLeft={0}
                        compRight={0}
                        compType="Stack"
                      >
                        <Column
                          className="absolute top-[0] w-[100%]"
                          compId="528:313449"
                          comWidth={319}
                          comHeight={86}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-normal lg:ml-[28px] xl:ml-[32px] ml-[36px] 3xl:ml-[43px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                            compId="528:313456"
                            comWidth={66}
                            comHeight={22}
                            compLeft={36}
                            compRight={0}
                            compType="Text"
                          >
                            Lee Ankar
                          </Text>
                          <Row
                            className="justify-between lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[100%]"
                            compId="528:313450"
                            comWidth={319}
                            comHeight={56}
                            compLeft={0}
                            compRight={0}
                            compType="Row"
                          >
                            <Img
                              src="images/img_punktoyface1.png"
                              className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] rounded-radius50 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                              compId="I528:313452;341:279747"
                              comWidth={24}
                              comHeight={24}
                              compLeft={0}
                              compRight={0}
                              compType="CircleImage"
                              alt="PunkToyFaceOne Two"
                            />
                            <Column
                              className="bg-gray_50 lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] rounded-bl-[4px] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px] w-[89%]"
                              compId="528:313453"
                              comWidth={283}
                              comHeight={56}
                              compLeft={0}
                              compRight={0}
                              compType="Column"
                            >
                              <Text
                                className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                                compId="528:313455"
                                comWidth={231}
                                comHeight={24}
                                compLeft={0}
                                compRight={0}
                                compType="Text"
                              >
                                Hey! Can i meet you for a sec?
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                        <Text
                          className="absolute bg-gray_50 border-2 border-solid border-white_A700 bottom-[0] flex font-normal items-center not-italic lg:pl-[4px] xl:pl-[5px] pl-[6px] 3xl:pl-[7px] right-[3%] rounded-radius50 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[28px]"
                          compId="528:313457"
                          comWidth={28}
                          comHeight={28}
                          compLeft={0}
                          compRight={11}
                          compType="Text"
                        >
                          😍
                        </Text>
                      </Stack>
                      <Row
                        className="items-end justify-end ml-[auto] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[48%]"
                        compId="598:308710"
                        comWidth={310}
                        comHeight={56}
                        compLeft={330}
                        compRight={0}
                        compType="Row"
                      >
                        <Input
                          className="font-medium p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-white_A700 text-white_A700 w-[100%]"
                          wrapClassName="w-[91%]"
                          compId="528:313429"
                          comWidth={283}
                          comHeight={56}
                          compLeft={0}
                          compRight={0}
                          compType="EditText"
                          name="Group Three"
                          placeholder="Hey! Can i meet you for a sec?"
                          shape="CustomBorderBL4"
                          variant="FillDeeporange300"
                        ></Input>
                        <Button
                          className="flex lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] items-center justify-center mb-[1px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] lg:w-[14px] xl:w-[16px] w-[18px] 3xl:w-[21px]"
                          compId="I528:313460;29151:35"
                          comWidth={18}
                          comHeight={18}
                          compLeft={8}
                          compRight={0}
                          compType="IconButton"
                          shape="icbCircleBorder9"
                          size="smIcn"
                          variant="icbFillDeeporange300"
                        >
                          <Img
                            src="images/img_vector_white_A700_20X20.png"
                            className="flex items-center justify-center"
                            compId="I528:313460;29151:35"
                            comWidth={18}
                            comHeight={18}
                            compLeft={8}
                            compRight={0}
                            compType="IconButton"
                            alt="VectorStroke"
                          />
                        </Button>
                      </Row>
                      <Row
                        className="items-end justify-end ml-[auto] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[48%]"
                        compId="598:308711"
                        comWidth={310}
                        comHeight={235}
                        compLeft={330}
                        compRight={0}
                        compType="Row"
                      >
                        <Column
                          className="bg-gray_50 lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] rounded-bl-[8px] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px] w-[91%]"
                          compId="528:313432"
                          comWidth={283}
                          comHeight={235}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Column
                            className="bg-cover bg-repeat items-end justify-end lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] w-[100%]"
                            compId="539"
                            style={{
                              backgroundImage: "url('images/img_group539.png')",
                            }}
                            comWidth={251}
                            comHeight={133}
                            compLeft={0}
                            compRight={0}
                            compType="Column"
                          >
                            <Button
                              className="font-medium mb-[1px] 3xl:mt-[110px] lg:mt-[71px] xl:mt-[81px] mt-[92px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-center w-[17%]"
                              compId="528:313439"
                              comWidth={41}
                              comHeight={24}
                              compLeft={0}
                              compRight={0}
                              compType="Button"
                              shape="RoundedBorder10"
                              size="sm"
                              variant="FillBlack90066"
                            >
                              1:00
                            </Button>
                          </Column>
                          <Text
                            className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                            compId="528:313435"
                            comWidth={148}
                            comHeight={24}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            ☕️ Life Style Coffee
                          </Text>
                          <Text
                            className="font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_401 w-[auto]"
                            compId="528:313436"
                            comWidth={206}
                            comHeight={22}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            8350 Melrose Ave, Los Angeles
                          </Text>
                        </Column>
                        <Button
                          className="flex lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] items-center justify-center mb-[1px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:mt-[167px] xl:mt-[191px] mt-[215px] 3xl:mt-[258px] lg:w-[14px] xl:w-[16px] w-[18px] 3xl:w-[21px]"
                          compId="I528:313461;29151:35"
                          comWidth={18}
                          comHeight={18}
                          compLeft={8}
                          compRight={0}
                          compType="IconButton"
                          shape="icbCircleBorder9"
                          size="smIcn"
                          variant="icbFillDeeporange300"
                        >
                          <Img
                            src="images/img_vector_white_A700_20X20.png"
                            className="flex items-center justify-center"
                            compId="I528:313461;29151:35"
                            comWidth={18}
                            comHeight={18}
                            compLeft={8}
                            compRight={0}
                            compType="IconButton"
                            alt="VectorStroke One"
                          />
                        </Button>
                      </Row>
                      <Row
                        className="bg-gray_50 items-center mt-[105px] 3xl:mt-[126px] lg:mt-[81px] xl:mt-[93px] lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] rounded-radius4 w-[100%]"
                        compId="528:313441"
                        comWidth={641}
                        comHeight={56}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                          compId="528:313447"
                          comWidth={124}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          Enter message...
                        </Text>
                        <Img
                          src="images/img_share.png"
                          className="lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] lg:ml-[276px] xl:ml-[315px] ml-[355px] 3xl:ml-[426px] w-[3%]"
                          compId="I528:313444;5:192"
                          comWidth={20}
                          comHeight={22}
                          compLeft={355}
                          compRight={0}
                          compType="Image"
                          alt="share"
                        />
                        <Img
                          src="images/img_link.png"
                          className="lg:h-[10px] xl:h-[11px] h-[12px] 2xl:h-[13px] 3xl:h-[15px] lg:ml-[20px] xl:ml-[23px] ml-[26px] 3xl:ml-[31px] w-[4%]"
                          compId="I528:313445;4:35"
                          comWidth={24}
                          comHeight={12}
                          compLeft={26}
                          compRight={0}
                          compType="Image"
                          alt="link"
                        />
                        <Img
                          src="images/img_plus_bluegray_400.png"
                          className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                          compId="528:313446"
                          comWidth={24}
                          comHeight={24}
                          compLeft={24}
                          compRight={0}
                          compType="Image"
                          alt="plus"
                        />
                      </Row>
                    </Column>
                  </Stack>
                </Stack>
              </Row>
            </Column>
          </Column>
          <aside className="absolute items-center left-[0] top-[0] w-[17%]">
            <Column
              className=""
              compId="698"
              comWidth={242}
              comHeight={750}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-end justify-evenly w-[100%]"
                compId="697"
                comWidth={242}
                comHeight={750}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Stack
                  className="lg:h-[537px] xl:h-[614px] h-[690px] 2xl:h-[691px] 3xl:h-[829px] lg:mt-[46px] xl:mt-[53px] mt-[60px] 3xl:mt-[72px] w-[100%]"
                  compId="1259"
                  comWidth={241}
                  comHeight={690}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Line
                    className="absolute bg-indigo_50 lg:h-[537px] xl:h-[614px] h-[690px] 2xl:h-[691px] 3xl:h-[829px] right-[9%] w-[1px]"
                    compId="528:313463"
                    comWidth={1}
                    comHeight={690}
                    compLeft={0}
                    compRight={21}
                    compType="Line"
                  />
                  <Column
                    className="absolute bg-white_A700 justify-center lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] w-[100%]"
                    compId="528:313464"
                    comWidth={241}
                    comHeight={690}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Row
                      className="items-center lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[62%]"
                      compId="I528:313464;41:948"
                      comWidth={109}
                      comHeight={22}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Img
                        src="images/img_menu_bluegray_400_20X20.png"
                        className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                        compId="I528:313464;531:321438"
                        comWidth={20}
                        comHeight={20}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="menu"
                      />
                      <Text
                        className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                        compId="I528:313464;41:950"
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
                      compId="I528:313464;41:951"
                      comWidth={100}
                      comHeight={22}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Img
                        src="images/img_user_bluegray_400.png"
                        className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                        compId="I528:313464;531:322607"
                        comWidth={20}
                        comHeight={20}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="user One"
                      />
                      <Text
                        className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                        compId="I528:313464;41:953"
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
                      className="lg:mt-[24px] xl:mt-[27px] mt-[31px] 3xl:mt-[37px] pl-[1px] w-[88%]"
                      compId="I528:313464;43809:15240"
                      comWidth={155}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Img
                        src="images/img_creditcard_deep_orange_300.png"
                        className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] mt-[2px] lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                        compId="I528:313464;41:955;471:291516"
                        comWidth={16}
                        comHeight={16}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="creditcard"
                      />
                      <Text
                        className="font-medium lg:ml-[13px] xl:ml-[15px] ml-[17px] 3xl:ml-[20px] mt-[1px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                        compId="I528:313464;41:956"
                        comWidth={61}
                        comHeight={22}
                        compLeft={17}
                        compRight={0}
                        compType="Text"
                      >
                        Message
                      </Text>
                      <Text
                        className="bg-red_600 flex font-bold items-center justify-center lg:ml-[26px] xl:ml-[30px] ml-[34px] 3xl:ml-[40px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius50 xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[24px]"
                        compId="I528:313464;235:259292"
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
                      compId="I528:313464;41:957"
                      comWidth={57}
                      comHeight={22}
                      compLeft={1}
                      compRight={0}
                      compType="Row"
                    >
                      <Img
                        src="images/img_folder_bluegray_400.png"
                        className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] w-[32%]"
                        compId="I528:313464;533:294113;531:320466"
                        comWidth={18}
                        comHeight={16}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="folder"
                      />
                      <Text
                        className="flex font-medium items-center lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                        compId="I528:313464;41:959"
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
                      compId="I528:313464;41:960"
                      comWidth={95}
                      comHeight={22}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Img
                        src="images/img_settings.png"
                        className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                        compId="I528:313464;41:961"
                        comWidth={20}
                        comHeight={20}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="settings"
                      />
                      <Text
                        className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                        compId="I528:313464;41:962"
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
                      compId="I528:313464;41:963"
                      comWidth={70}
                      comHeight={22}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Img
                        src="images/img_cart.png"
                        className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                        compId="I528:313464;41:964"
                        comWidth={20}
                        comHeight={20}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="cart"
                      />
                      <Text
                        className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                        compId="I528:313464;41:965"
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
                      compId="I528:313464;41:966"
                      comWidth={62}
                      comHeight={22}
                      compLeft={1}
                      compRight={0}
                      compType="Row"
                    >
                      <Img
                        src="images/img_vector_bluegray_400.png"
                        className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] w-[26%]"
                        compId="I528:313464;614:13885;531:320955"
                        comWidth={16}
                        comHeight={18}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Vector One"
                      />
                      <Text
                        className="font-medium lg:ml-[13px] xl:ml-[15px] ml-[17px] 3xl:ml-[20px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                        compId="I528:313464;41:968"
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
                      value="Settings18"
                      className="font-medium lg:mb-[169px] xl:mb-[193px] mb-[218px] 3xl:mb-[261px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400"
                      inputClassName="h-[20px] mr-[5px] w-[20px]"
                      compId="I528:313464;531:316827"
                      comWidth={91}
                      comHeight={22}
                      compLeft={0}
                      compRight={0}
                      compType="Radio"
                      checked={false}
                      name="Settings One"
                      label="Settings18"
                      variant="illBluegray400"
                    ></Radio>
                  </Column>
                </Stack>
                <Line
                  className="bg-indigo_50 lg:h-[584px] xl:h-[668px] h-[750px] 2xl:h-[751px] 3xl:h-[901px] w-[1px]"
                  compId="528:313465"
                  comWidth={1}
                  comHeight={750}
                  compLeft={0}
                  compRight={0}
                  compType="Line"
                />
              </Row>
            </Column>
          </aside>
        </Stack>
      </Column>
    </>
  );
};

export default ConversationPage;
