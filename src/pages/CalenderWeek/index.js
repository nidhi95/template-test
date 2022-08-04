import React from "react";

import {
  Stack,
  Column,
  Row,
  Img,
  Text,
  Input,
  RadioGroup,
  Radio,
  Line,
  Button,
  List,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const CalenderWeekPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Stack
        className="bg-white_A700 font-inter 3xl:h-[1141px] lg:h-[739px] xl:h-[846px] h-[950px] 2xl:h-[951px] mx-[auto] w-[100%]"
        compId="556:311818"
        comWidth={1440}
        comHeight={950}
        compLeft={0}
        compRight={0}
        compType="Stack"
      >
        <Column
          className="absolute items-end w-[100%]"
          compId="869"
          comWidth={1440}
          comHeight={950}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Row
            className="bg-white_A700 items-center justify-end p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] w-[100%]"
            compId="43812:48022"
            comWidth={1440}
            comHeight={60}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Img
              src="images/img_microphone.png"
              className="lg:h-[22px] xl:h-[25px] h-[28px] 2xl:h-[29px] 3xl:h-[34px] w-[1%]"
              compId="I43812:48022;43807:13258"
              comWidth={21}
              comHeight={28}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="microphone"
            />
            <Text
              className="font-medium lg:ml-[169px] xl:ml-[193px] ml-[218px] 3xl:ml-[261px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
              compId="I43812:48022;234:259667"
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
              compId="I43812:48022;234:259514"
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
                  compId="I43812:48022;234:259514;234:259505"
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
              compId="I43812:48022;531:315836;5:32"
              comWidth={20}
              comHeight={22}
              compLeft={136}
              compRight={0}
              compType="Image"
              alt="Vector"
            />
            <Stack
              className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] w-[9%]"
              compId="868"
              comWidth={126}
              comHeight={24}
              compLeft={29}
              compRight={0}
              compType="Stack"
            >
              <Img
                src="images/img_user_bluegray_900.png"
                className="absolute lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] inset-y-[0] left-[0] my-[auto] w-[14%]"
                compId="I43812:48022;37:1285;37:1283"
                comWidth={18}
                comHeight={20}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="user"
              />
              <Row
                className="absolute right-[0] w-[90%]"
                compId="583"
                comWidth={113}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <div
                  className="bg-red_600 3xl:h-[10px] lg:h-[7px] h-[8px] 2xl:h-[9px] mt-[1px] outline outline-[2px] outline-white_A700 rounded-radius50 lg:w-[6px] xl:w-[7px] w-[8px] 3xl:w-[9px]"
                  compId="I43812:48022;530:301660"
                  comWidth={8}
                  comHeight={8}
                  compLeft={0}
                  compRight={0}
                  compType="View"
                ></div>
                <Text
                  className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_500 w-[auto]"
                  compId="I43812:48022;37:1272"
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
              compId="I43812:48022;483:292004;43812:47214"
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
            compId="556:311819"
            comWidth={1199}
            comHeight={890}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-medium lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]"
              compId="556:311820"
              comWidth={94}
              comHeight={32}
              compLeft={0}
              compRight={0}
              compType="Text"
            >
              Calendar
            </Text>
            <Row
              className="font-inter items-center justify-between lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]"
              compId="871"
              comWidth={1151}
              comHeight={770}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Column
                className="bg-white_A700 lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs1 w-[24%]"
                compId="43810:45459"
                comWidth={273}
                comHeight={770}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[100%]"
                  compId="43810:45462"
                  comWidth={209}
                  comHeight={44}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  Click in the calendar to create event
                </Text>
                <Input
                  className="font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-white_A700 text-white_A700 w-[100%]"
                  wrapClassName="3xl:mt-[28px] flex lg:mt-[18px] mt-[24px] w-[100%] xl:mt-[21px]"
                  compId="43810:45463"
                  comWidth={0}
                  comHeight={48}
                  compLeft={0}
                  compRight={0}
                  compType="EditText"
                  name="ButtonPrimary"
                  placeholder="Create new event"
                  suffix={
                    <Img
                      src="images/img_plus_white_A700.png"
                      className="w-[20px] h-[20px] ml-[35px] mr-[16px] lg:w-[15px] lg:h-[16px] lg:ml-[27px] lg:mr-[12px] xl:w-[17px] xl:h-[18px] xl:ml-[31px] xl:mr-[14px] 2xl:h-[21px] 3xl:w-[24px] 3xl:h-[25px] 3xl:ml-[42px] 3xl:mr-[19px] my-[auto]"
                      compId="43810:45465"
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
                <RadioGroup
                  className="lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[60%]"
                  compId="874"
                  comWidth={126}
                  comHeight={156}
                  compLeft={0}
                  compRight={0}
                  compType="RadioGroup"
                  name="radiogroupprofileviews one"
                >
                  <Radio
                    value="NewEvent"
                    className="font-medium lg:mr-[21px] xl:mr-[24px] mr-[28px] 3xl:mr-[33px] lg:pl-[6px] xl:pl-[7px] pl-[8px] 3xl:pl-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800"
                    inputClassName="h-[8px] mr-[5px] w-[8px]"
                    compId="43810:45468"
                    comWidth={98}
                    comHeight={24}
                    compLeft={0}
                    compRight={28}
                    compType="Radio"
                    checked={false}
                    name="radiogroupprofileviews one"
                    label="New Event"
                    variant="illGreen700"
                  ></Radio>
                  <Radio
                    value="MyEventOnly"
                    className="font-medium lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:pl-[6px] xl:pl-[7px] pl-[8px] 3xl:pl-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[100%]"
                    inputClassName="h-[8px] mr-[5px] w-[8px]"
                    compId="43810:45471"
                    comWidth={126}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Radio"
                    checked={false}
                    name="radiogroupprofileviews one"
                    label="My Event Only"
                    variant="illIndigo401"
                  ></Radio>
                  <Radio
                    value="Meeting"
                    className="font-medium lg:mr-[37px] xl:mr-[42px] mr-[48px] 3xl:mr-[57px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:pl-[6px] xl:pl-[7px] pl-[8px] 3xl:pl-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800"
                    inputClassName="h-[8px] mr-[5px] w-[8px]"
                    compId="43810:45474"
                    comWidth={78}
                    comHeight={24}
                    compLeft={0}
                    compRight={48}
                    compType="Radio"
                    checked={false}
                    name="radiogroupprofileviews one"
                    label="Meeting"
                    variant="illAmber300"
                  ></Radio>
                  <Radio
                    value="Error"
                    className="font-medium lg:mr-[56px] xl:mr-[64px] mr-[72px] 3xl:mr-[86px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:pl-[6px] xl:pl-[7px] pl-[8px] 3xl:pl-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800"
                    inputClassName="h-[8px] mr-[5px] w-[8px]"
                    compId="43810:45477"
                    comWidth={54}
                    comHeight={24}
                    compLeft={0}
                    compRight={72}
                    compType="Radio"
                    checked={false}
                    name="radiogroupprofileviews one"
                    label="Error"
                    variant="illRed600"
                  ></Radio>
                </RadioGroup>
                <Line
                  className="bg-indigo_50 h-[1px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[1px]"
                  compId="43810:45480"
                  comWidth={1}
                  comHeight={1}
                  compLeft={0}
                  compRight={0}
                  compType="Line"
                />
                <Text
                  className="font-normal lg:mt-[24px] xl:mt-[27px] mt-[31px] 3xl:mt-[37px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="43810:45481"
                  comWidth={101}
                  comHeight={22}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  Team members
                </Text>
                <Row
                  className="items-center lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]"
                  compId="43810:45483"
                  comWidth={209}
                  comHeight={28}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_800 w-[auto]"
                    compId="43810:45484"
                    comWidth={18}
                    comHeight={28}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    🚗
                  </Text>
                  <Text
                    className="font-medium lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                    compId="43810:45485"
                    comWidth={44}
                    comHeight={24}
                    compLeft={8}
                    compRight={0}
                    compType="Text"
                  >
                    @Avo
                  </Text>
                  <Button
                    className="font-medium lg:ml-[28px] xl:ml-[32px] ml-[37px] 3xl:ml-[44px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-center w-[49%]"
                    compId="43810:45486"
                    comWidth={102}
                    comHeight={28}
                    compLeft={37}
                    compRight={0}
                    compType="Button"
                    size="sm"
                    variant="FillGray103"
                  >
                    Lead design
                  </Button>
                </Row>
                <Row
                  className="items-center lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]"
                  compId="43810:45488"
                  comWidth={209}
                  comHeight={28}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_800 w-[auto]"
                    compId="43810:45489"
                    comWidth={18}
                    comHeight={28}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    ⚽
                  </Text>
                  <Text
                    className="font-medium lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                    compId="43810:45490"
                    comWidth={57}
                    comHeight={24}
                    compLeft={8}
                    compRight={0}
                    compType="Text"
                  >
                    @Nhun
                  </Text>
                  <Button
                    className="font-medium lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-center w-[49%]"
                    compId="43810:45491"
                    comWidth={102}
                    comHeight={28}
                    compLeft={24}
                    compRight={0}
                    compType="Button"
                    size="sm"
                    variant="FillGray103"
                  >
                    Product design
                  </Button>
                </Row>
                <Row
                  className="items-center lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]"
                  compId="43810:45493"
                  comWidth={209}
                  comHeight={28}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_800 w-[auto]"
                    compId="43810:45494"
                    comWidth={18}
                    comHeight={28}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    👑
                  </Text>
                  <Text
                    className="font-medium lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                    compId="43810:45495"
                    comWidth={39}
                    comHeight={24}
                    compLeft={8}
                    compRight={0}
                    compType="Text"
                  >
                    @Riri
                  </Text>
                  <Button
                    className="font-medium lg:ml-[32px] xl:ml-[37px] ml-[42px] 3xl:ml-[50px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-center w-[49%]"
                    compId="43810:45496"
                    comWidth={102}
                    comHeight={28}
                    compLeft={42}
                    compRight={0}
                    compType="Button"
                    size="sm"
                    variant="FillGray103"
                  >
                    Product design
                  </Button>
                </Row>
                <Row
                  className="items-center lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]"
                  compId="43810:45498"
                  comWidth={209}
                  comHeight={28}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_800 w-[auto]"
                    compId="43810:45499"
                    comWidth={18}
                    comHeight={28}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    ✈
                  </Text>
                  <Text
                    className="font-medium lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                    compId="43810:45500"
                    comWidth={47}
                    comHeight={24}
                    compLeft={8}
                    compRight={0}
                    compType="Text"
                  >
                    @Juki
                  </Text>
                  <Button
                    className="font-medium lg:ml-[26px] xl:ml-[30px] ml-[34px] 3xl:ml-[40px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-center w-[49%]"
                    compId="43810:45501"
                    comWidth={102}
                    comHeight={28}
                    compLeft={34}
                    compRight={0}
                    compType="Button"
                    size="sm"
                    variant="FillGray103"
                  >
                    Product design
                  </Button>
                </Row>
                <Row
                  className="items-center lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]"
                  compId="43810:45503"
                  comWidth={209}
                  comHeight={28}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_800 w-[auto]"
                    compId="43810:45504"
                    comWidth={18}
                    comHeight={28}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    💣
                  </Text>
                  <Text
                    className="font-medium lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                    compId="43810:45505"
                    comWidth={51}
                    comHeight={24}
                    compLeft={8}
                    compRight={0}
                    compType="Text"
                  >
                    @Nobi
                  </Text>
                  <Button
                    className="font-medium lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-center w-[49%]"
                    compId="43810:45506"
                    comWidth={102}
                    comHeight={28}
                    compLeft={30}
                    compRight={0}
                    compType="Button"
                    size="sm"
                    variant="FillGray103"
                  >
                    Product design
                  </Button>
                </Row>
                <Row
                  className="items-center lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[62%]"
                  compId="43810:45508"
                  comWidth={130}
                  comHeight={24}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Img
                    src="images/img_plus.png"
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    compId="43810:45509"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="plus"
                  />
                  <Text
                    className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-deep_orange_300 w-[auto]"
                    compId="43810:45510"
                    comWidth={98}
                    comHeight={24}
                    compLeft={8}
                    compRight={0}
                    compType="Text"
                  >
                    Add member
                  </Text>
                </Row>
              </Column>
              <Column
                className="bg-white_A700 items-center lg:p-[20px] xl:p-[23px] p-[26px] 3xl:p-[31px] rounded-radius4 shadow-bs1 w-[75%]"
                compId="556:311873"
                comWidth={858}
                comHeight={770}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="items-center w-[99%]"
                  compId="870"
                  comWidth={794}
                  comHeight={40}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-bold lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_900 w-[auto]"
                    compId="43811:45526"
                    comWidth={200}
                    comHeight={32}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    <span className="text-bluegray_900 font-inter">24 </span>
                    <span className="text-bluegray_900 font-inter">
                      January{" "}
                    </span>
                    <span className="text-indigo_401 font-inter">2022</span>
                  </Text>
                  <Button
                    className="flex lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:ml-[26px] xl:ml-[30px] ml-[34px] 3xl:ml-[40px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                    compId="43811:45528"
                    comWidth={40}
                    comHeight={40}
                    compLeft={34}
                    compRight={0}
                    compType="IconButton"
                  >
                    <Img
                      src="images/img_arrowdown.png"
                      className="flex items-center justify-center"
                      compId="43811:45528"
                      comWidth={40}
                      comHeight={40}
                      compLeft={34}
                      compRight={0}
                      compType="IconButton"
                      alt="arrowleft"
                    />
                  </Button>
                  <Button
                    className="flex lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                    compId="43811:45530"
                    comWidth={40}
                    comHeight={40}
                    compLeft={16}
                    compRight={0}
                    compType="IconButton"
                  >
                    <Img
                      src="images/img_arrowright_bluegray_900.png"
                      className="flex items-center justify-center"
                      compId="43811:45530"
                      comWidth={40}
                      comHeight={40}
                      compLeft={16}
                      compRight={0}
                      compType="IconButton"
                      alt="arrowright"
                    />
                  </Button>
                  <Button
                    className="font-normal lg:ml-[173px] xl:ml-[198px] ml-[223px] 3xl:ml-[267px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[9%]"
                    compId="596:304190"
                    comWidth={75}
                    comHeight={40}
                    compLeft={223}
                    compRight={0}
                    compType="Button"
                    shape="CircleBorder20"
                    size="md"
                    variant="OutlineIndigo50"
                  >
                    Day
                  </Button>
                  <Button
                    className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[9%]"
                    compId="596:304189"
                    comWidth={75}
                    comHeight={40}
                    compLeft={8}
                    compRight={0}
                    compType="Button"
                    shape="CircleBorder20"
                    size="md"
                    variant="FillBluegray900"
                  >
                    Week
                  </Button>
                  <Button
                    className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[9%]"
                    compId="596:304191"
                    comWidth={75}
                    comHeight={40}
                    compLeft={8}
                    compRight={0}
                    compType="Button"
                    shape="CircleBorder20"
                    size="md"
                    variant="OutlineIndigo50"
                  >
                    Month
                  </Button>
                </Row>
                <Row
                  className="items-center lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] w-[99%]"
                  compId="556:311888"
                  comWidth={794}
                  comHeight={48}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <List
                    className="grid grid-cols-5 min-h-[auto] w-[71%]"
                    compId="875"
                    comWidth={566}
                    comHeight={48}
                    compLeft={0}
                    compRight={0}
                    compType="List"
                    orientation="horizontal"
                  >
                    <Column
                      className="border border-indigo_50 border-solid items-center xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] w-[100%]"
                      compId="556:311889"
                      comWidth={114}
                      comHeight={48}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="556:311890"
                        comWidth={56}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Sun 2/1
                      </Text>
                    </Column>
                    <Column
                      className="border border-indigo_50 border-solid items-center xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] w-[100%]"
                      compId="556:311891"
                      comWidth={114}
                      comHeight={48}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="556:311892"
                        comWidth={61}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Mon 3/1
                      </Text>
                    </Column>
                    <Column
                      className="border border-indigo_50 border-solid items-center xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] w-[100%]"
                      compId="556:311893"
                      comWidth={114}
                      comHeight={48}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="556:311894"
                        comWidth={55}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Tue 4/1
                      </Text>
                    </Column>
                    <Column
                      className="border border-indigo_50 border-solid items-center xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] w-[100%]"
                      compId="556:311895"
                      comWidth={114}
                      comHeight={48}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="556:311896"
                        comWidth={61}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Wed 5/1
                      </Text>
                    </Column>
                    <Column
                      className="border border-indigo_50 border-solid items-center xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] w-[100%]"
                      compId="556:311897"
                      comWidth={114}
                      comHeight={48}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="556:311898"
                        comWidth={56}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Thu 6/1
                      </Text>
                    </Column>
                  </List>
                  <List
                    className="grid grid-cols-2 min-h-[auto] w-[29%]"
                    compId="876"
                    comWidth={229}
                    comHeight={48}
                    compLeft={0}
                    compRight={0}
                    compType="List"
                    orientation="horizontal"
                  >
                    <Column
                      className="border border-indigo_50 border-solid items-center xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] w-[100%]"
                      compId="556:311899"
                      comWidth={115}
                      comHeight={48}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="556:311900"
                        comWidth={46}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Fri 7/1
                      </Text>
                    </Column>
                    <Column
                      className="border border-indigo_50 border-solid items-center xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] w-[100%]"
                      compId="556:311901"
                      comWidth={115}
                      comHeight={48}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="556:311902"
                        comWidth={47}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Sa 8/1
                      </Text>
                    </Column>
                  </List>
                </Row>
                <Row
                  className="items-center mb-[3px] w-[99%]"
                  compId="556:311903"
                  comWidth={794}
                  comHeight={598}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <div
                    className="border border-indigo_50 border-solid lg:h-[466px] xl:h-[532px] h-[598px] 2xl:h-[599px] 3xl:h-[719px] w-[14%]"
                    compId="556:311904"
                    comWidth={114}
                    comHeight={598}
                    compLeft={0}
                    compRight={0}
                    compType="View"
                  ></div>
                  <Column
                    className="border border-indigo_50 border-solid items-center p-[4px] w-[14%]"
                    compId="556:311907"
                    comWidth={114}
                    comHeight={598}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Row
                      className="bg-deep_orange_300 items-center justify-end lg:mb-[426px] xl:mb-[487px] mb-[548px] 3xl:mb-[657px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] pl-[4px] py-[4px] rounded-radius4 w-[100%]"
                      compId="556:311910"
                      comWidth={106}
                      comHeight={30}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Radio
                        value="am"
                        className="font-medium lg:pl-[6px] xl:pl-[7px] pl-[8px] 3xl:pl-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-white_A700"
                        inputClassName="h-[8px] mr-[5px] w-[8px]"
                        compId="581"
                        comWidth={69}
                        comHeight={22}
                        compLeft={0}
                        compRight={0}
                        compType="Radio"
                        checked={false}
                        name="ProfileViews Nineteen"
                        label="am"
                        variant="illWhiteA700"
                      ></Radio>
                      <Text
                        className="font-normal 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                        compId="556:311913"
                        comWidth={12}
                        comHeight={22}
                        compLeft={9}
                        compRight={0}
                        compType="Text"
                      >
                        Mêt
                      </Text>
                    </Row>
                  </Column>
                  <div
                    className="border border-indigo_50 border-solid lg:h-[466px] xl:h-[532px] h-[598px] 2xl:h-[599px] 3xl:h-[719px] w-[14%]"
                    compId="556:311905"
                    comWidth={114}
                    comHeight={598}
                    compLeft={0}
                    compRight={0}
                    compType="View"
                  ></div>
                  <div
                    className="border border-indigo_50 border-solid lg:h-[466px] xl:h-[532px] h-[598px] 2xl:h-[599px] 3xl:h-[719px] w-[14%]"
                    compId="556:311914"
                    comWidth={114}
                    comHeight={598}
                    compLeft={0}
                    compRight={0}
                    compType="View"
                  ></div>
                  <div
                    className="border border-indigo_50 border-solid lg:h-[466px] xl:h-[532px] h-[598px] 2xl:h-[599px] 3xl:h-[719px] w-[14%]"
                    compId="556:311906"
                    comWidth={114}
                    comHeight={598}
                    compLeft={0}
                    compRight={0}
                    compType="View"
                  ></div>
                  <div
                    className="border border-indigo_50 border-solid lg:h-[466px] xl:h-[532px] h-[598px] 2xl:h-[599px] 3xl:h-[719px] w-[14%]"
                    compId="556:311915"
                    comWidth={115}
                    comHeight={598}
                    compLeft={0}
                    compRight={0}
                    compType="View"
                  ></div>
                  <div
                    className="border border-indigo_50 border-solid lg:h-[466px] xl:h-[532px] h-[598px] 2xl:h-[599px] 3xl:h-[719px] w-[14%]"
                    compId="556:311916"
                    comWidth={115}
                    comHeight={598}
                    compLeft={0}
                    compRight={0}
                    compType="View"
                  ></div>
                </Row>
              </Column>
            </Row>
          </Column>
        </Column>
        <Line
          className="absolute bg-indigo_50 lg:h-[537px] xl:h-[614px] h-[690px] 2xl:h-[691px] 3xl:h-[829px] left-[15%] top-[6%] w-[1px]"
          compId="556:311918"
          comWidth={1}
          comHeight={690}
          compLeft={219}
          compRight={0}
          compType="Line"
        />
        <Line
          className="absolute bg-indigo_50 lg:h-[584px] xl:h-[668px] h-[750px] 2xl:h-[751px] 3xl:h-[901px] left-[17%] top-[0] w-[1px]"
          compId="556:311920"
          comWidth={1}
          comHeight={750}
          compLeft={241}
          compRight={0}
          compType="Line"
        />
        <aside className="absolute bottom-[0] items-center left-[0] w-[17%]">
          <Column
            className=""
            compId="579"
            comWidth={241}
            comHeight={890}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Column
              className="bg-white_A700 justify-center lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] w-[100%]"
              compId="614:12397"
              comWidth={241}
              comHeight={890}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-center lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[62%]"
                compId="I614:12397;41:948"
                comWidth={109}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_menu_bluegray_400_20X20.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I614:12397;531:321438"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="menu"
                />
                <Text
                  className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I614:12397;41:950"
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
                compId="I614:12397;41:951"
                comWidth={100}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_user_bluegray_400.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I614:12397;531:322607"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="user One"
                />
                <Text
                  className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I614:12397;41:953"
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
                compId="I614:12397;43809:15240"
                comWidth={155}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_icon.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] mt-[1px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I614:12397;41:955"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Icon"
                />
                <Text
                  className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] mt-[1px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I614:12397;41:956"
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
                  compId="I614:12397;235:259292"
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
                compId="I614:12397;41:957"
                comWidth={57}
                comHeight={22}
                compLeft={1}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_folder_bluegray_400.png"
                  className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] w-[32%]"
                  compId="I614:12397;533:294113;531:320466"
                  comWidth={18}
                  comHeight={16}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="folder"
                />
                <Text
                  className="flex font-medium items-center lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I614:12397;41:959"
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
                compId="I614:12397;41:960"
                comWidth={95}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_camera.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I614:12397;41:961"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="camera"
                />
                <Text
                  className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                  compId="I614:12397;41:962"
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
                compId="I614:12397;41:963"
                comWidth={70}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_cart.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I614:12397;41:964"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="cart"
                />
                <Text
                  className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I614:12397;41:965"
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
                compId="I614:12397;41:966"
                comWidth={62}
                comHeight={22}
                compLeft={1}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_vector_bluegray_400.png"
                  className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] w-[26%]"
                  compId="I614:12397;614:13885;531:320955"
                  comWidth={16}
                  comHeight={18}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Vector One"
                />
                <Text
                  className="font-medium lg:ml-[13px] xl:ml-[15px] ml-[17px] 3xl:ml-[20px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I614:12397;41:968"
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
                value="Settings4"
                className="font-medium lg:mb-[325px] xl:mb-[371px] mb-[418px] 3xl:mb-[501px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400"
                inputClassName="h-[20px] mr-[5px] w-[20px]"
                compId="I614:12397;531:316827"
                comWidth={91}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Radio"
                checked={false}
                name="Settings"
                label="Settings4"
                variant="illBluegray400"
              ></Radio>
            </Column>
          </Column>
        </aside>
      </Stack>
    </>
  );
};

export default CalenderWeekPage;
