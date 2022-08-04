import React from "react";

import {
  Stack,
  Column,
  Row,
  Img,
  Text,
  Input,
  Grid,
  Switch,
  SelectBox,
  Button,
  Line,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const SettingsPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Stack
        className="bg-white_A700 font-inter 3xl:h-[1045px] lg:h-[677px] xl:h-[774px] h-[870px] 2xl:h-[871px] mx-[auto] w-[100%]"
        compId="600:310498"
        comWidth={1440}
        comHeight={870}
        compLeft={0}
        compRight={0}
        compType="Stack"
      >
        <Column
          className="absolute items-end w-[100%]"
          compId="1433"
          comWidth={1440}
          comHeight={870}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Row
            className="bg-white_A700 items-center justify-end p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] w-[100%]"
            compId="43812:48042"
            comWidth={1440}
            comHeight={60}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Img
              src="images/img_microphone.png"
              className="lg:h-[22px] xl:h-[25px] h-[28px] 2xl:h-[29px] 3xl:h-[34px] w-[1%]"
              compId="I43812:48042;43807:13258"
              comWidth={21}
              comHeight={28}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="microphone"
            />
            <Text
              className="font-medium lg:ml-[169px] xl:ml-[193px] ml-[218px] 3xl:ml-[261px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
              compId="I43812:48042;234:259667"
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
              compId="I43812:48042;234:259514"
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
                  compId="I43812:48042;234:259514;234:259505"
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
              compId="I43812:48042;531:315836;5:32"
              comWidth={20}
              comHeight={22}
              compLeft={136}
              compRight={0}
              compType="Image"
              alt="Vector"
            />
            <Stack
              className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] w-[9%]"
              compId="1432"
              comWidth={126}
              comHeight={24}
              compLeft={29}
              compRight={0}
              compType="Stack"
            >
              <Img
                src="images/img_user_bluegray_900.png"
                className="absolute lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] inset-y-[0] left-[0] my-[auto] w-[14%]"
                compId="I43812:48042;37:1285;37:1283"
                comWidth={18}
                comHeight={20}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="user"
              />
              <Row
                className="absolute right-[0] w-[90%]"
                compId="747"
                comWidth={113}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <div
                  className="bg-red_600 3xl:h-[10px] lg:h-[7px] h-[8px] 2xl:h-[9px] mt-[1px] outline outline-[2px] outline-white_A700 rounded-radius50 lg:w-[6px] xl:w-[7px] w-[8px] 3xl:w-[9px]"
                  compId="I43812:48042;530:301660"
                  comWidth={8}
                  comHeight={8}
                  compLeft={0}
                  compRight={0}
                  compType="View"
                ></div>
                <Text
                  className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_500 w-[auto]"
                  compId="I43812:48042;37:1272"
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
              compId="I43812:48042;483:292004;43812:47214"
              comWidth={40}
              comHeight={40}
              compLeft={13}
              compRight={13}
              compType="CircleImage"
              alt="SherlockToyFa"
            />
          </Row>
          <Row
            className="bg-gray_50 font-poppins items-end ml-[auto] lg:p-[18px] xl:p-[21px] p-[24px] 3xl:p-[28px] w-[83%]"
            compId="1436"
            comWidth={1199}
            comHeight={810}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Column
              className="lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[66%]"
              compId="1435"
              comWidth={761}
              comHeight={754}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-medium lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]"
                compId="600:310500"
                comWidth={82}
                comHeight={32}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                Settings
              </Text>
              <Column
                className="bg-white_A700 font-inter lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs1 w-[100%]"
                compId="600:310504"
                comWidth={761}
                comHeight={350}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                  compId="I600:310504;599:310030"
                  comWidth={118}
                  comHeight={28}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  Account info.
                </Text>
                <Text
                  className="font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]"
                  compId="I600:310504;599:310031"
                  comWidth={398}
                  comHeight={22}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  <span className="text-bluegray_900 font-inter">
                    Verify your information to proctect your account.{" "}
                  </span>
                  <span className="text-deep_orange_300 font-inter">
                    Verify now
                  </span>
                </Text>
                <Grid
                  className="lg:gap-[15px] xl:gap-[17px] gap-[20px] 3xl:gap-[24px] grid grid-cols-2 lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]"
                  compId="1438"
                  comWidth={697}
                  comHeight={196}
                  compLeft={0}
                  compRight={0}
                  compType="Grid"
                >
                  <Column
                    className="w-[100%]"
                    compId="I600:310504;599:310032"
                    comWidth={338}
                    comHeight={86}
                    compLeft={0}
                    compRight={359}
                    compType="Column"
                  >
                    <Text
                      className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                      compId="I600:310504;599:310036"
                      comWidth={67}
                      comHeight={22}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Username
                    </Text>
                    <Input
                      className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
                      wrapClassName="3xl:mt-[9px] lg:mt-[6px] mt-[8px] w-[100%] xl:mt-[7px]"
                      compId="555"
                      comWidth={338}
                      comHeight={56}
                      compLeft={0}
                      compRight={0}
                      compType="EditText"
                      name="Group555"
                      placeholder="Sam"
                    ></Input>
                  </Column>
                  <Column
                    className="w-[100%]"
                    compId="I600:310504;599:310042"
                    comWidth={339}
                    comHeight={86}
                    compLeft={358}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                      compId="I600:310504;599:310046"
                      comWidth={93}
                      comHeight={22}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Email address
                    </Text>
                    <Input
                      className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
                      wrapClassName="3xl:mt-[9px] lg:mt-[6px] mt-[8px] w-[100%] xl:mt-[7px]"
                      compId="556"
                      type="email"
                      comWidth={339}
                      comHeight={56}
                      compLeft={0}
                      compRight={0}
                      compType="EditText"
                      name="email"
                      placeholder="sambrown@gmail.com"
                    ></Input>
                  </Column>
                  <Column
                    className="w-[100%]"
                    compId="I600:310504;599:310037"
                    comWidth={338}
                    comHeight={86}
                    compLeft={0}
                    compRight={359}
                    compType="Column"
                  >
                    <Text
                      className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                      compId="I600:310504;599:310041"
                      comWidth={69}
                      comHeight={22}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      First name
                    </Text>
                    <Input
                      className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
                      wrapClassName="3xl:mt-[9px] lg:mt-[6px] mt-[8px] w-[100%] xl:mt-[7px]"
                      compId="557"
                      comWidth={338}
                      comHeight={56}
                      compLeft={0}
                      compRight={0}
                      compType="EditText"
                      name="Group557"
                      placeholder="Sam"
                    ></Input>
                  </Column>
                  <Column
                    className="w-[100%]"
                    compId="I600:310504;599:310047"
                    comWidth={339}
                    comHeight={86}
                    compLeft={358}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                      compId="I600:310504;599:310051"
                      comWidth={69}
                      comHeight={22}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Last name
                    </Text>
                    <Input
                      className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
                      wrapClassName="3xl:mt-[9px] lg:mt-[6px] mt-[8px] w-[100%] xl:mt-[7px]"
                      compId="558"
                      comWidth={339}
                      comHeight={56}
                      compLeft={0}
                      compRight={0}
                      compType="EditText"
                      name="Group558"
                      placeholder="Brown"
                    ></Input>
                  </Column>
                </Grid>
              </Column>
              <Row
                className="font-inter items-center justify-between lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]"
                compId="1434"
                comWidth={761}
                comHeight={320}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Column
                  className="bg-white_A700 lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs1 w-[49%]"
                  compId="600:310501"
                  comWidth={370}
                  comHeight={320}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                    compId="I600:310501;599:310056"
                    comWidth={141}
                    comHeight={28}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Password Reset
                  </Text>
                  <Text
                    className="font-medium lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                    compId="I600:310501;599:310061"
                    comWidth={120}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Current password
                  </Text>
                  <Input
                    className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
                    wrapClassName="3xl:mt-[9px] lg:mt-[6px] mt-[8px] w-[100%] xl:mt-[7px]"
                    compId="552"
                    type="password"
                    comWidth={306}
                    comHeight={56}
                    compLeft={0}
                    compRight={0}
                    compType="EditText"
                    name="password"
                    placeholder="************"
                  ></Input>
                  <Text
                    className="font-medium lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                    compId="I600:310501;599:310066"
                    comWidth={100}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    New password
                  </Text>
                  <Input
                    className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
                    wrapClassName="3xl:mt-[9px] lg:mt-[6px] mt-[8px] w-[100%] xl:mt-[7px]"
                    compId="553"
                    type="password"
                    comWidth={306}
                    comHeight={56}
                    compLeft={0}
                    compRight={0}
                    compType="EditText"
                    name="password One"
                    placeholder="************"
                  ></Input>
                </Column>
                <Column
                  className="bg-white_A700 lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs1 w-[49%]"
                  compId="600:310502"
                  comWidth={371}
                  comHeight={320}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                    compId="I600:310502;599:310071"
                    comWidth={113}
                    comHeight={28}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Notifications
                  </Text>
                  <Text
                    className="font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                    compId="I600:310502;599:310072"
                    comWidth={284}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Open notification to receive our news fastly
                  </Text>
                  <Row
                    className="items-center lg:mt-[32px] xl:mt-[37px] mt-[42px] 3xl:mt-[50px] w-[83%]"
                    compId="I600:310502;599:310073"
                    comWidth={255}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Switch
                      compId="I600:310502;599:310074"
                      comWidth={48}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Switch"
                      value={true}
                      className="w-[19%]"
                    />
                    <Text
                      className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                      compId="I600:310502;599:310075"
                      comWidth={183}
                      comHeight={24}
                      compLeft={24}
                      compRight={0}
                      compType="Text"
                    >
                      Send notification to mail
                    </Text>
                  </Row>
                  <Row
                    className="items-center lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[75%]"
                    compId="I600:310502;599:310076"
                    comWidth={229}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Switch
                      compId="I600:310502;599:310077"
                      comWidth={48}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Switch"
                      value={true}
                      className="w-[21%]"
                    />
                    <Text
                      className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                      compId="I600:310502;599:310078"
                      comWidth={157}
                      comHeight={24}
                      compLeft={24}
                      compRight={0}
                      compType="Text"
                    >
                      Send new promotion
                    </Text>
                  </Row>
                  <Row
                    className="items-center lg:mb-[15px] xl:mb-[17px] mb-[20px] 3xl:mb-[24px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[69%]"
                    compId="I600:310502;599:310079"
                    comWidth={213}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Switch
                      compId="I600:310502;599:310080"
                      comWidth={48}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Switch"
                      value={false}
                      className="w-[23%]"
                    />
                    <Text
                      className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                      compId="I600:310502;599:310081"
                      comWidth={141}
                      comHeight={24}
                      compLeft={24}
                      compRight={0}
                      compType="Text"
                    >
                      Notice my balance
                    </Text>
                  </Row>
                </Column>
              </Row>
            </Column>
            <Column
              className="bg-white_A700 font-inter lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:mt-[56px] xl:mt-[64px] mt-[72px] 3xl:mt-[86px] lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs1 w-[32%]"
              compId="600:310503"
              comWidth={370}
              comHeight={690}
              compLeft={20}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                compId="I600:310503;599:310086"
                comWidth={78}
                comHeight={28}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                Payment
              </Text>
              <SelectBox
                className="bg-transparent font-normal lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[100%]"
                compId="I600:310503;599:310089"
                comWidth={306}
                comHeight={56}
                compLeft={0}
                compRight={0}
                compType="Dropdown"
                placeholderClassName="bg-transparent text-bluegray_800"
                name="Group"
                placeholder="Paypal"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown.png"
                    className="w-[11.67px] h-[6.67px] mr-[24px] lg:w-[9px] lg:h-[6px] lg:mr-[18px] xl:w-[10px] xl:h-[6px] xl:mr-[21px] 2xl:w-[11px] 2xl:h-[7px] 3xl:w-[14px] 3xl:h-[9px] 3xl:mr-[28px]"
                    compId="I600:310503;599:310091;1:1053"
                    comWidth={11.67}
                    comHeight={6.67}
                    compLeft={0}
                    compRight={24}
                    compType="Image"
                    alt="arrow_down"
                  />
                }
                shape="oundedBorder4"
                variant="utlineIndigo501_2"
              ></SelectBox>
              <Row
                className="bg-indigo_401 justify-between lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:pt-[4px] xl:pt-[5px] pt-[6px] 3xl:pt-[7px] rounded-radius4 w-[100%]"
                compId="I600:310503;599:310093"
                comWidth={306}
                comHeight={184}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Stack
                  className="3xl:h-[100px] lg:h-[65px] xl:h-[74px] h-[83px] 2xl:h-[84px] 3xl:mt-[112px] lg:mt-[73px] xl:mt-[83px] mt-[94px] w-[59%]"
                  compId="1430"
                  comWidth={181}
                  comHeight={83}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Text
                    className="absolute bottom-[29%] font-medium right-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]"
                    compId="I600:310503;599:310098"
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
                    className="absolute 3xl:h-[100px] lg:h-[65px] xl:h-[74px] h-[83px] 2xl:h-[84px] left-[0] rounded-radius4 w-[54%]"
                    compId="I600:310503;599:310104"
                    comWidth={97}
                    comHeight={83}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Group One"
                  />
                </Stack>
                <Stack
                  className="lg:h-[126px] xl:h-[144px] h-[161px] 2xl:h-[162px] 3xl:h-[194px] lg:mb-[12px] xl:mb-[14px] mb-[16px] 3xl:mb-[19px] w-[26%]"
                  compId="1431"
                  comWidth={79}
                  comHeight={161}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Img
                    src="images/img_dollar_white_A700.png"
                    className="absolute lg:h-[10px] xl:h-[11px] h-[12px] 2xl:h-[13px] 3xl:h-[15px] inset-x-[0] mx-[auto] rounded-radius4 top-[8%] w-[51%]"
                    compId="I600:310503;599:310099"
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
                    compId="I600:310503;599:310108"
                    comWidth={79}
                    comHeight={161}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Group Two"
                  />
                </Stack>
              </Row>
              <Text
                className="font-medium lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                compId="I600:310503;599:310116"
                comWidth={104}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                Type your email
              </Text>
              <Input
                className="font-medium p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
                wrapClassName="3xl:mt-[9px] lg:mt-[6px] mt-[8px] w-[100%] xl:mt-[7px]"
                compId="554"
                type="email"
                comWidth={306}
                comHeight={56}
                compLeft={0}
                compRight={0}
                compType="EditText"
                name="email One"
                placeholder="Ackermanlhn@gmail.com"
              ></Input>
              <Text
                className="font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] lg:ml-[35px] xl:ml-[40px] ml-[45px] 3xl:ml-[54px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 text-center w-[69%]"
                compId="I600:310503;599:310118"
                comWidth={212}
                comHeight={44}
                compLeft={45}
                compRight={0}
                compType="Text"
              >
                Please make sure that all your information precisely
              </Text>
              <Button
                className="font-bold lg:mt-[46px] xl:mt-[53px] mt-[60px] 3xl:mt-[72px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[100%]"
                compId="I600:310503;599:310117"
                comWidth={306}
                comHeight={48}
                compLeft={0}
                compRight={0}
                compType="Button"
                shape="CircleBorder24"
                size="lg"
                variant="FillDeeporange300"
              >
                Save change
              </Button>
            </Column>
          </Row>
        </Column>
        <Line
          className="absolute bg-indigo_50 lg:h-[537px] xl:h-[614px] h-[690px] 2xl:h-[691px] 3xl:h-[829px] left-[15%] top-[7%] w-[1px]"
          compId="600:310506"
          comWidth={1}
          comHeight={690}
          compLeft={219}
          compRight={0}
          compType="Line"
        />
        <Line
          className="absolute bg-indigo_50 lg:h-[584px] xl:h-[668px] h-[750px] 2xl:h-[751px] 3xl:h-[901px] left-[17%] top-[0] w-[1px]"
          compId="600:310508"
          comWidth={1}
          comHeight={750}
          compLeft={241}
          compRight={0}
          compType="Line"
        />
        <aside className="absolute bottom-[0] items-center justify-end left-[0] w-[17%]">
          <Column
            className=""
            compId="745"
            comWidth={241}
            comHeight={890}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Column
              className="bg-white_A700 justify-center lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] w-[100%]"
              compId="616:15696"
              comWidth={241}
              comHeight={890}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-center lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[62%]"
                compId="I616:15696;41:948"
                comWidth={109}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_menu_bluegray_400_20X20.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I616:15696;531:321438"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="menu"
                />
                <Text
                  className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I616:15696;41:950"
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
                compId="I616:15696;41:951"
                comWidth={100}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_user_bluegray_400.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I616:15696;531:322607"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="user One"
                />
                <Text
                  className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I616:15696;41:953"
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
                compId="I616:15696;43809:15240"
                comWidth={155}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_icon.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] mt-[1px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I616:15696;41:955"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Icon"
                />
                <Text
                  className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] mt-[1px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I616:15696;41:956"
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
                  compId="I616:15696;235:259292"
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
                compId="I616:15696;41:957"
                comWidth={57}
                comHeight={22}
                compLeft={1}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_folder_bluegray_400.png"
                  className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] w-[32%]"
                  compId="I616:15696;533:294113;531:320466"
                  comWidth={18}
                  comHeight={16}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="folder"
                />
                <Text
                  className="flex font-medium items-center lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I616:15696;41:959"
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
                compId="I616:15696;41:960"
                comWidth={95}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_settings.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I616:15696;41:961"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="settings One"
                />
                <Text
                  className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I616:15696;41:962"
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
                compId="I616:15696;41:963"
                comWidth={70}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_cart.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I616:15696;41:964"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="cart"
                />
                <Text
                  className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I616:15696;41:965"
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
                compId="I616:15696;41:966"
                comWidth={62}
                comHeight={22}
                compLeft={1}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_vector_bluegray_400.png"
                  className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] w-[26%]"
                  compId="I616:15696;614:13885;531:320955"
                  comWidth={16}
                  comHeight={18}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Vector One"
                />
                <Text
                  className="font-medium lg:ml-[13px] xl:ml-[15px] ml-[17px] 3xl:ml-[20px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I616:15696;41:968"
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
                compId="I616:15696;531:316827"
                comWidth={91}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_settings_deep_orange_300.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I616:15696;533:294557;533:294556"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="settings Two"
                />
                <Text
                  className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                  compId="I616:15696;531:316829"
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

export default SettingsPage;
