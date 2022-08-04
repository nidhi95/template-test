import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Input,
  Stack,
  Slider,
  List,
  Button,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const CustomerPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Column
        className="font-inter items-center mx-[auto] w-[100%]"
        compId="528:314867"
        comWidth={1440}
        comHeight={990}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Column
          className="bg-white_A700 items-end w-[100%]"
          compId="528:315042"
          comWidth={1440}
          comHeight={990}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <header
            className="w-[100%]"
            compId="752"
            comWidth={1440}
            comHeight={60}
            compLeft={0}
            compRight={0}
            compType="Header"
          >
            <Row
              className="bg-white_A700 items-center justify-end p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] w-[100%]"
              compId="43812:48142"
              comWidth={1440}
              comHeight={60}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Img
                src="images/img_microphone.png"
                className="lg:h-[22px] xl:h-[25px] h-[28px] 2xl:h-[29px] 3xl:h-[34px] w-[1%]"
                compId="I43812:48142;43807:13258"
                comWidth={21}
                comHeight={28}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="microphone"
              />
              <Text
                className="font-medium lg:ml-[169px] xl:ml-[193px] ml-[218px] 3xl:ml-[261px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                compId="I43812:48142;234:259667"
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
                compId="I43812:48142;234:259514"
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
                    compId="I43812:48142;234:259514;234:259505"
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
                compId="I43812:48142;531:315836;5:32"
                comWidth={20}
                comHeight={22}
                compLeft={136}
                compRight={0}
                compType="Image"
                alt="Vector"
              />
              <Stack
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] w-[9%]"
                compId="1440"
                comWidth={126}
                comHeight={24}
                compLeft={29}
                compRight={0}
                compType="Stack"
              >
                <Img
                  src="images/img_user_bluegray_900.png"
                  className="absolute lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] inset-y-[0] left-[0] my-[auto] w-[14%]"
                  compId="I43812:48142;37:1285;37:1283"
                  comWidth={18}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="user"
                />
                <Row
                  className="absolute right-[0] w-[90%]"
                  compId="753"
                  comWidth={113}
                  comHeight={24}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <div
                    className="bg-red_600 3xl:h-[10px] lg:h-[7px] h-[8px] 2xl:h-[9px] mt-[1px] outline outline-[2px] outline-white_A700 rounded-radius50 lg:w-[6px] xl:w-[7px] w-[8px] 3xl:w-[9px]"
                    compId="I43812:48142;530:301660"
                    comWidth={8}
                    comHeight={8}
                    compLeft={0}
                    compRight={0}
                    compType="View"
                  ></div>
                  <Text
                    className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_500 w-[auto]"
                    compId="I43812:48142;37:1272"
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
                compId="I43812:48142;483:292004;43812:47214"
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
            compId="528:315043"
            comWidth={1199}
            comHeight={930}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-medium lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]"
              compId="528:315044"
              comWidth={100}
              comHeight={32}
              compLeft={0}
              compRight={0}
              compType="Text"
            >
              Customer
            </Text>
            <Stack
              className="bg-white_A700 font-inter lg:h-[630px] xl:h-[721px] h-[810px] 2xl:h-[811px] 3xl:h-[973px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:pr-[24px] xl:pr-[28px] pr-[32px] 3xl:pr-[38px] rounded-radius4 shadow-bs1 w-[100%]"
              compId="600:310447"
              comWidth={1151}
              comHeight={810}
              compLeft={0}
              compRight={0}
              compType="Stack"
            >
              <Column
                className="absolute left-[3%] top-[4%] w-[90%]"
                compId="1444"
                comWidth={1039}
                comHeight={87}
                compLeft={32}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="justify-between w-[100%]"
                  compId="1443"
                  comWidth={1039}
                  comHeight={28}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                    compId="599:310228"
                    comWidth={123}
                    comHeight={28}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Customer List
                  </Text>
                  <Img
                    src="images/img_search_bluegray_900.png"
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    compId="599:310363"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="search"
                  />
                </Row>
                <Row
                  className="items-center lg:ml-[16px] xl:ml-[18px] ml-[21px] 3xl:ml-[25px] lg:mt-[27px] xl:mt-[31px] mt-[35px] 3xl:mt-[42px] w-[88%]"
                  compId="599:310229"
                  comWidth={917}
                  comHeight={24}
                  compLeft={21}
                  compRight={0}
                  compType="Row"
                >
                  <Img
                    src="images/img_download_bluegray_400_16X16.png"
                    className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                    compId="I599:310234;1:1488"
                    comWidth={16}
                    comHeight={16}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="download"
                  />
                  <Text
                    className="font-normal lg:ml-[43px] xl:ml-[49px] ml-[56px] 3xl:ml-[67px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                    compId="599:310230"
                    comWidth={74}
                    comHeight={24}
                    compLeft={56}
                    compRight={0}
                    compType="Text"
                  >
                    Customer
                  </Text>
                  <Text
                    className="font-normal ml-[104px] 3xl:ml-[124px] lg:ml-[80px] xl:ml-[92px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                    compId="599:310231"
                    comWidth={62}
                    comHeight={24}
                    compLeft={104}
                    compRight={0}
                    compType="Text"
                  >
                    Address
                  </Text>
                  <Text
                    className="font-normal lg:ml-[154px] xl:ml-[176px] ml-[198px] 3xl:ml-[237px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                    compId="599:310232"
                    comWidth={47}
                    comHeight={24}
                    compLeft={198}
                    compRight={0}
                    compType="Text"
                  >
                    Phone
                  </Text>
                  <Text
                    className="font-normal lg:ml-[121px] xl:ml-[138px] ml-[156px] 3xl:ml-[187px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                    compId="599:310233"
                    comWidth={74}
                    comHeight={24}
                    compLeft={156}
                    compRight={0}
                    compType="Text"
                  >
                    Order No.
                  </Text>
                  <Text
                    className="font-normal lg:ml-[62px] xl:ml-[71px] ml-[80px] 3xl:ml-[96px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                    compId="599:310235"
                    comWidth={48}
                    comHeight={24}
                    compLeft={80}
                    compRight={0}
                    compType="Text"
                  >
                    Status
                  </Text>
                </Row>
              </Column>
              <Column
                className="absolute left-[0] top-[0] w-[100%]"
                compId="756"
                comWidth={1384}
                comHeight={931}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Slider
                  slidesToShow={2}
                  activeIndex={sliderState}
                  onSlideChanged={(e) => {
                    setsliderState(e?.item);
                  }}
                  activeSlideCSS="scale-[1.00]"
                  ref={sliderRef}
                  className="w-[100%]"
                  items={[...Array(6)].map(() => (
                    <>
                      <List
                        className="gap-[0] min-h-[auto] w-[100%]"
                        compId="599:310236"
                        comWidth={1087}
                        comHeight={576}
                        compLeft={0}
                        compRight={0}
                        compType="List"
                        orientation="vertical"
                      >
                        <Row
                          className="bg-gray_50 items-center justify-end my-[0] lg:p-[13px] xl:p-[15px] p-[17px] 3xl:p-[20px] w-[100%]"
                          compId="599:310237"
                          comWidth={1087}
                          comHeight={64}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <Img
                            src="images/img_download_bluegray_400_16X16.png"
                            className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                            compId="I599:310247;1:1488"
                            comWidth={16}
                            comHeight={16}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="download One"
                          />
                          <Img
                            src="images/img_robototoyfacefi.png"
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[43px] xl:ml-[49px] ml-[56px] 3xl:ml-[67px] rounded-radius50 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            compId="I599:310243;341:279749"
                            comWidth={24}
                            comHeight={24}
                            compLeft={56}
                            compRight={0}
                            compType="CircleImage"
                            alt="RobotoToyFaceFi"
                          />
                          <Text
                            className="font-medium xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                            compId="599:310245"
                            comWidth={36}
                            comHeight={24}
                            compLeft={12}
                            compRight={0}
                            compType="Text"
                          >
                            Jack
                          </Text>
                          <Text
                            className="font-medium ml-[106px] 3xl:ml-[127px] lg:ml-[82px] xl:ml-[94px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                            compId="599:310239"
                            comWidth={184}
                            comHeight={24}
                            compLeft={106}
                            compRight={0}
                            compType="Text"
                          >
                            2371 Reppert Coal Road
                          </Text>
                          <Text
                            className="font-medium lg:ml-[59px] xl:ml-[67px] ml-[76px] 3xl:ml-[91px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-indigo_401 w-[auto]"
                            compId="599:310240"
                            comWidth={112}
                            comHeight={24}
                            compLeft={76}
                            compRight={0}
                            compType="Text"
                          >
                            601-540-6298
                          </Text>
                          <Text
                            className="font-medium 3xl:ml-[109px] lg:ml-[70px] xl:ml-[80px] ml-[91px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                            compId="599:310241"
                            comWidth={56}
                            comHeight={24}
                            compLeft={91}
                            compRight={0}
                            compType="Text"
                          >
                            #12931
                          </Text>
                          <Button
                            className="font-medium 3xl:ml-[117px] lg:ml-[76px] xl:ml-[87px] ml-[98px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[9%]"
                            compId="599:310248"
                            comWidth={93}
                            comHeight={30}
                            compLeft={98}
                            compRight={0}
                            compType="Button"
                            size="sm"
                            variant="FillGreen700"
                          >
                            Paid
                          </Button>
                          <Img
                            src="images/img_menu_bluegray_400.png"
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[45px] xl:ml-[52px] ml-[59px] 3xl:ml-[70px] mr-[3px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            compId="599:310246"
                            comWidth={24}
                            comHeight={24}
                            compLeft={59}
                            compRight={3}
                            compType="Image"
                            alt="menu"
                          />
                        </Row>
                        <Row
                          className="bg-white_A700 items-center justify-end my-[0] lg:p-[13px] xl:p-[15px] p-[17px] 3xl:p-[20px] w-[100%]"
                          compId="599:310251"
                          comWidth={1087}
                          comHeight={64}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <Img
                            src="images/img_download_bluegray_400_16X16.png"
                            className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                            compId="I599:310261;1:1488"
                            comWidth={16}
                            comHeight={16}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="download Two"
                          />
                          <Img
                            src="images/img_fidenza978toy.png"
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[43px] xl:ml-[49px] ml-[56px] 3xl:ml-[67px] rounded-radius50 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            compId="I599:310257;444:290026"
                            comWidth={24}
                            comHeight={24}
                            compLeft={56}
                            compRight={0}
                            compType="CircleImage"
                            alt="Fidenza978Toy"
                          />
                          <Text
                            className="font-medium xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                            compId="599:310259"
                            comWidth={82}
                            comHeight={24}
                            compLeft={12}
                            compRight={0}
                            compType="Text"
                          >
                            Fort Myers
                          </Text>
                          <Text
                            className="font-medium lg:ml-[46px] xl:ml-[53px] ml-[60px] 3xl:ml-[72px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                            compId="599:310253"
                            comWidth={148}
                            comHeight={24}
                            compLeft={60}
                            compRight={0}
                            compType="Text"
                          >
                            927 Sunburst Drive
                          </Text>
                          <Text
                            className="font-medium ml-[112px] 3xl:ml-[134px] lg:ml-[87px] xl:ml-[99px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-indigo_401 w-[auto]"
                            compId="599:310254"
                            comWidth={114}
                            comHeight={24}
                            compLeft={112}
                            compRight={0}
                            compType="Text"
                          >
                            239-346-5244
                          </Text>
                          <Text
                            className="font-medium 3xl:ml-[106px] lg:ml-[69px] xl:ml-[79px] ml-[89px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                            compId="599:310255"
                            comWidth={58}
                            comHeight={24}
                            compLeft={89}
                            compRight={0}
                            compType="Text"
                          >
                            #12932
                          </Text>
                          <Button
                            className="font-medium 3xl:ml-[115px] lg:ml-[74px] xl:ml-[85px] ml-[96px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[9%]"
                            compId="599:310262"
                            comWidth={93}
                            comHeight={30}
                            compLeft={96}
                            compRight={0}
                            compType="Button"
                            size="sm"
                            variant="FillGreen700"
                          >
                            Paid
                          </Button>
                          <Img
                            src="images/img_menu_bluegray_400.png"
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[45px] xl:ml-[52px] ml-[59px] 3xl:ml-[70px] mr-[3px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            compId="599:310260"
                            comWidth={24}
                            comHeight={24}
                            compLeft={59}
                            compRight={3}
                            compType="Image"
                            alt="menu One"
                          />
                        </Row>
                        <Row
                          className="bg-gray_50 items-center justify-end my-[0] lg:p-[13px] xl:p-[15px] p-[17px] 3xl:p-[20px] w-[100%]"
                          compId="599:310265"
                          comWidth={1087}
                          comHeight={64}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <Img
                            src="images/img_download_bluegray_400_16X16.png"
                            className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                            compId="I599:310275;1:1488"
                            comWidth={16}
                            comHeight={16}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="download Three"
                          />
                          <Img
                            src="images/img_vangoghbyamrit.png"
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[43px] xl:ml-[49px] ml-[56px] 3xl:ml-[67px] rounded-radius50 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            compId="I599:310271;341:279748"
                            comWidth={24}
                            comHeight={24}
                            compLeft={56}
                            compRight={0}
                            compType="CircleImage"
                            alt="VanGoghByAmrit"
                          />
                          <Text
                            className="font-medium xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                            compId="599:310273"
                            comWidth={70}
                            comHeight={24}
                            compLeft={12}
                            compRight={0}
                            compType="Text"
                          >
                            Benjamin
                          </Text>
                          <Text
                            className="font-medium lg:ml-[56px] xl:ml-[64px] ml-[72px] 3xl:ml-[86px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                            compId="599:310267"
                            comWidth={153}
                            comHeight={24}
                            compLeft={72}
                            compRight={0}
                            compType="Text"
                          >
                            1671 Carriage Court
                          </Text>
                          <Text
                            className="font-medium ml-[107px] 3xl:ml-[128px] lg:ml-[83px] xl:ml-[95px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-indigo_401 w-[auto]"
                            compId="599:310268"
                            comWidth={109}
                            comHeight={24}
                            compLeft={107}
                            compRight={0}
                            compType="Text"
                          >
                            760-390-1331
                          </Text>
                          <Text
                            className="font-medium 3xl:ml-[112px] lg:ml-[73px] xl:ml-[83px] ml-[94px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                            compId="599:310269"
                            comWidth={58}
                            comHeight={24}
                            compLeft={94}
                            compRight={0}
                            compType="Text"
                          >
                            #12933
                          </Text>
                          <Button
                            className="font-medium 3xl:ml-[115px] lg:ml-[74px] xl:ml-[85px] ml-[96px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[9%]"
                            compId="599:310276"
                            comWidth={93}
                            comHeight={30}
                            compLeft={96}
                            compRight={0}
                            compType="Button"
                            size="sm"
                            variant="FillGreen700"
                          >
                            Paid
                          </Button>
                          <Img
                            src="images/img_menu_bluegray_400.png"
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[45px] xl:ml-[52px] ml-[59px] 3xl:ml-[70px] mr-[3px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            compId="599:310274"
                            comWidth={24}
                            comHeight={24}
                            compLeft={59}
                            compRight={3}
                            compType="Image"
                            alt="menu Two"
                          />
                        </Row>
                        <Row
                          className="bg-white_A700 items-center justify-end my-[0] lg:p-[13px] xl:p-[15px] p-[17px] 3xl:p-[20px] w-[100%]"
                          compId="599:310279"
                          comWidth={1087}
                          comHeight={64}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <Img
                            src="images/img_download_bluegray_400_16X16.png"
                            className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                            compId="I599:310289;1:1488"
                            comWidth={16}
                            comHeight={16}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="download Four"
                          />
                          <Img
                            src="images/img_fidenza978toy.png"
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[43px] xl:ml-[49px] ml-[56px] 3xl:ml-[67px] rounded-radius50 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            compId="I599:310285;444:290026"
                            comWidth={24}
                            comHeight={24}
                            compLeft={56}
                            compRight={0}
                            compType="CircleImage"
                            alt="Fidenza978Toy One"
                          />
                          <Text
                            className="font-medium xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                            compId="599:310287"
                            comWidth={70}
                            comHeight={24}
                            compLeft={12}
                            compRight={0}
                            compType="Text"
                          >
                            Flanagan
                          </Text>
                          <Text
                            className="font-medium lg:ml-[56px] xl:ml-[64px] ml-[72px] 3xl:ml-[86px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                            compId="599:310281"
                            comWidth={160}
                            comHeight={24}
                            compLeft={72}
                            compRight={0}
                            compType="Text"
                          >
                            121 Courtright Street
                          </Text>
                          <Text
                            className="font-medium ml-[100px] 3xl:ml-[120px] lg:ml-[77px] xl:ml-[88px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-indigo_401 w-[auto]"
                            compId="599:310282"
                            comWidth={111}
                            comHeight={24}
                            compLeft={100}
                            compRight={0}
                            compType="Text"
                          >
                            701-565-0439
                          </Text>
                          <Text
                            className="font-medium 3xl:ml-[110px] lg:ml-[71px] xl:ml-[81px] ml-[92px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                            compId="599:310283"
                            comWidth={58}
                            comHeight={24}
                            compLeft={92}
                            compRight={0}
                            compType="Text"
                          >
                            #12934
                          </Text>
                          <Button
                            className="font-medium 3xl:ml-[115px] lg:ml-[74px] xl:ml-[85px] ml-[96px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[9%]"
                            compId="599:310290"
                            comWidth={93}
                            comHeight={30}
                            compLeft={96}
                            compRight={0}
                            compType="Button"
                            size="sm"
                            variant="FillRed600"
                          >
                            Error
                          </Button>
                          <Img
                            src="images/img_menu_bluegray_400.png"
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[45px] xl:ml-[52px] ml-[59px] 3xl:ml-[70px] mr-[3px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            compId="599:310288"
                            comWidth={24}
                            comHeight={24}
                            compLeft={59}
                            compRight={3}
                            compType="Image"
                            alt="menu Three"
                          />
                        </Row>
                        <Row
                          className="bg-gray_50 items-center justify-end my-[0] lg:p-[13px] xl:p-[15px] p-[17px] 3xl:p-[20px] w-[100%]"
                          compId="599:310293"
                          comWidth={1087}
                          comHeight={64}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <Img
                            src="images/img_download_bluegray_400_16X16.png"
                            className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                            compId="I599:310303;1:1488"
                            comWidth={16}
                            comHeight={16}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="download Five"
                          />
                          <Img
                            src="images/img_vangoghbyamrit.png"
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[43px] xl:ml-[49px] ml-[56px] 3xl:ml-[67px] rounded-radius50 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            compId="I599:310299;341:279748"
                            comWidth={24}
                            comHeight={24}
                            compLeft={56}
                            compRight={0}
                            compType="CircleImage"
                            alt="VanGoghByAmrit One"
                          />
                          <Text
                            className="font-medium xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                            compId="599:310301"
                            comWidth={64}
                            comHeight={24}
                            compLeft={12}
                            compRight={0}
                            compType="Text"
                          >
                            Nicoletti
                          </Text>
                          <Text
                            className="font-medium lg:ml-[60px] xl:ml-[69px] ml-[78px] 3xl:ml-[93px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                            compId="599:310295"
                            comWidth={182}
                            comHeight={24}
                            compLeft={78}
                            compRight={0}
                            compType="Text"
                          >
                            1060 Stark Hollow Road
                          </Text>
                          <Text
                            className="font-medium lg:ml-[60px] xl:ml-[69px] ml-[78px] 3xl:ml-[93px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-indigo_401 w-[auto]"
                            compId="599:310296"
                            comWidth={111}
                            comHeight={24}
                            compLeft={78}
                            compRight={0}
                            compType="Text"
                          >
                            970-757-0036
                          </Text>
                          <Text
                            className="font-medium 3xl:ml-[110px] lg:ml-[71px] xl:ml-[81px] ml-[92px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                            compId="599:310297"
                            comWidth={58}
                            comHeight={24}
                            compLeft={92}
                            compRight={0}
                            compType="Text"
                          >
                            #12935
                          </Text>
                          <Button
                            className="font-medium 3xl:ml-[115px] lg:ml-[74px] xl:ml-[85px] ml-[96px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[9%]"
                            compId="599:310304"
                            comWidth={93}
                            comHeight={30}
                            compLeft={96}
                            compRight={0}
                            compType="Button"
                            size="sm"
                            variant="FillGreen700"
                          >
                            Paid
                          </Button>
                          <Img
                            src="images/img_menu_bluegray_400.png"
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[45px] xl:ml-[52px] ml-[59px] 3xl:ml-[70px] mr-[3px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            compId="599:310302"
                            comWidth={24}
                            comHeight={24}
                            compLeft={59}
                            compRight={3}
                            compType="Image"
                            alt="menu Four"
                          />
                        </Row>
                        <Row
                          className="bg-white_A700 items-center justify-end my-[0] lg:p-[13px] xl:p-[15px] p-[17px] 3xl:p-[20px] w-[100%]"
                          compId="599:310307"
                          comWidth={1087}
                          comHeight={64}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <Img
                            src="images/img_download_bluegray_400_16X16.png"
                            className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                            compId="I599:310317;1:1488"
                            comWidth={16}
                            comHeight={16}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="download Six"
                          />
                          <Img
                            src="images/img_fidenza978toy.png"
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[43px] xl:ml-[49px] ml-[56px] 3xl:ml-[67px] rounded-radius50 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            compId="I599:310313;444:290026"
                            comWidth={24}
                            comHeight={24}
                            compLeft={56}
                            compRight={0}
                            compType="CircleImage"
                            alt="Fidenza978Toy Two"
                          />
                          <Text
                            className="font-medium xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                            compId="599:310315"
                            comWidth={52}
                            comHeight={24}
                            compLeft={12}
                            compRight={0}
                            compType="Text"
                          >
                            Robert
                          </Text>
                          <Text
                            className="font-medium 3xl:ml-[108px] lg:ml-[70px] xl:ml-[80px] ml-[90px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                            compId="599:310309"
                            comWidth={143}
                            comHeight={24}
                            compLeft={90}
                            compRight={0}
                            compType="Text"
                          >
                            424 Charter Street
                          </Text>
                          <Text
                            className="font-medium xl:ml-[104px] ml-[117px] 3xl:ml-[140px] lg:ml-[91px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-indigo_401 w-[auto]"
                            compId="599:310310"
                            comWidth={110}
                            comHeight={24}
                            compLeft={117}
                            compRight={0}
                            compType="Text"
                          >
                            913-207-2627
                          </Text>
                          <Text
                            className="font-medium 3xl:ml-[111px] lg:ml-[72px] xl:ml-[82px] ml-[93px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                            compId="599:310311"
                            comWidth={58}
                            comHeight={24}
                            compLeft={93}
                            compRight={0}
                            compType="Text"
                          >
                            #12936
                          </Text>
                          <Button
                            className="font-medium 3xl:ml-[115px] lg:ml-[74px] xl:ml-[85px] ml-[96px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[9%]"
                            compId="599:310318"
                            comWidth={93}
                            comHeight={30}
                            compLeft={96}
                            compRight={0}
                            compType="Button"
                            size="sm"
                            variant="FillGreen700"
                          >
                            Paid
                          </Button>
                          <Img
                            src="images/img_menu_bluegray_400.png"
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[45px] xl:ml-[52px] ml-[59px] 3xl:ml-[70px] mr-[3px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            compId="599:310316"
                            comWidth={24}
                            comHeight={24}
                            compLeft={59}
                            compRight={3}
                            compType="Image"
                            alt="menu Five"
                          />
                        </Row>
                        <Row
                          className="bg-gray_50 items-center justify-end my-[0] lg:p-[13px] xl:p-[15px] p-[17px] 3xl:p-[20px] w-[100%]"
                          compId="599:310321"
                          comWidth={1087}
                          comHeight={64}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <Img
                            src="images/img_download_bluegray_400_16X16.png"
                            className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                            compId="I599:310331;1:1488"
                            comWidth={16}
                            comHeight={16}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="download Seven"
                          />
                          <Img
                            src="images/img_vangoghbyamrit.png"
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[43px] xl:ml-[49px] ml-[56px] 3xl:ml-[67px] rounded-radius50 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            compId="I599:310327;341:279748"
                            comWidth={24}
                            comHeight={24}
                            compLeft={56}
                            compRight={0}
                            compType="CircleImage"
                            alt="VanGoghByAmrit Two"
                          />
                          <Text
                            className="font-medium xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                            compId="599:310329"
                            comWidth={52}
                            comHeight={24}
                            compLeft={12}
                            compRight={0}
                            compType="Text"
                          >
                            Rankin
                          </Text>
                          <Text
                            className="font-medium 3xl:ml-[108px] lg:ml-[70px] xl:ml-[80px] ml-[90px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                            compId="599:310323"
                            comWidth={149}
                            comHeight={24}
                            compLeft={90}
                            compRight={0}
                            compType="Text"
                          >
                            60 Corpening Drive
                          </Text>
                          <Text
                            className="font-medium ml-[111px] 3xl:ml-[133px] lg:ml-[86px] xl:ml-[98px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-indigo_401 w-[auto]"
                            compId="599:310324"
                            comWidth={113}
                            comHeight={24}
                            compLeft={111}
                            compRight={0}
                            compType="Text"
                          >
                            248-930-4978
                          </Text>
                          <Text
                            className="font-medium 3xl:ml-[108px] lg:ml-[70px] xl:ml-[80px] ml-[90px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                            compId="599:310325"
                            comWidth={57}
                            comHeight={24}
                            compLeft={90}
                            compRight={0}
                            compType="Text"
                          >
                            #12937
                          </Text>
                          <Button
                            className="font-medium 3xl:ml-[116px] lg:ml-[75px] xl:ml-[86px] ml-[97px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[9%]"
                            compId="599:310332"
                            comWidth={93}
                            comHeight={30}
                            compLeft={97}
                            compRight={0}
                            compType="Button"
                            size="sm"
                            variant="FillAmber300"
                          >
                            Pending
                          </Button>
                          <Img
                            src="images/img_menu_bluegray_400.png"
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[45px] xl:ml-[52px] ml-[59px] 3xl:ml-[70px] mr-[3px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            compId="599:310330"
                            comWidth={24}
                            comHeight={24}
                            compLeft={59}
                            compRight={3}
                            compType="Image"
                            alt="menu Six"
                          />
                        </Row>
                        <Row
                          className="bg-white_A700 items-center justify-end my-[0] lg:p-[13px] xl:p-[15px] p-[17px] 3xl:p-[20px] w-[100%]"
                          compId="599:310335"
                          comWidth={1087}
                          comHeight={64}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <Img
                            src="images/img_download_bluegray_400_16X16.png"
                            className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                            compId="I599:310345;1:1488"
                            comWidth={16}
                            comHeight={16}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="download Eight"
                          />
                          <Img
                            src="images/img_fidenza978toy.png"
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[43px] xl:ml-[49px] ml-[56px] 3xl:ml-[67px] rounded-radius50 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            compId="I599:310341;444:290026"
                            comWidth={24}
                            comHeight={24}
                            compLeft={56}
                            compRight={0}
                            compType="CircleImage"
                            alt="Fidenza978Toy Three"
                          />
                          <Text
                            className="font-medium xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                            compId="599:310343"
                            comWidth={87}
                            comHeight={24}
                            compLeft={12}
                            compRight={0}
                            compType="Text"
                          >
                            Clementine
                          </Text>
                          <Text
                            className="font-medium lg:ml-[42px] xl:ml-[48px] ml-[55px] 3xl:ml-[66px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                            compId="599:310337"
                            comWidth={140}
                            comHeight={24}
                            compLeft={55}
                            compRight={0}
                            compType="Text"
                          >
                            4337 Fleming Way
                          </Text>
                          <Text
                            className="font-medium xl:ml-[106px] ml-[120px] 3xl:ml-[144px] lg:ml-[93px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-indigo_401 w-[auto]"
                            compId="599:310338"
                            comWidth={110}
                            comHeight={24}
                            compLeft={120}
                            compRight={0}
                            compType="Text"
                          >
                            757-735-4769
                          </Text>
                          <Text
                            className="font-medium 3xl:ml-[111px] lg:ml-[72px] xl:ml-[82px] ml-[93px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                            compId="599:310339"
                            comWidth={58}
                            comHeight={24}
                            compLeft={93}
                            compRight={0}
                            compType="Text"
                          >
                            #12938
                          </Text>
                          <Button
                            className="font-medium 3xl:ml-[115px] lg:ml-[74px] xl:ml-[85px] ml-[96px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[9%]"
                            compId="599:310346"
                            comWidth={93}
                            comHeight={30}
                            compLeft={96}
                            compRight={0}
                            compType="Button"
                            size="sm"
                            variant="FillGreen700"
                          >
                            Paid
                          </Button>
                          <Img
                            src="images/img_menu_bluegray_400.png"
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[45px] xl:ml-[52px] ml-[59px] 3xl:ml-[70px] mr-[3px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            compId="599:310344"
                            comWidth={24}
                            comHeight={24}
                            compLeft={59}
                            compRight={3}
                            compType="Image"
                            alt="menu Seven"
                          />
                        </Row>
                        <Row
                          className="bg-gray_50 items-center justify-end my-[0] lg:p-[13px] xl:p-[15px] p-[17px] 3xl:p-[20px] w-[100%]"
                          compId="599:310349"
                          comWidth={1087}
                          comHeight={64}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <Img
                            src="images/img_download_bluegray_400_16X16.png"
                            className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                            compId="I599:310359;1:1488"
                            comWidth={16}
                            comHeight={16}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="download Nine"
                          />
                          <Img
                            src="images/img_vangoghbyamrit.png"
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[43px] xl:ml-[49px] ml-[56px] 3xl:ml-[67px] rounded-radius50 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            compId="I599:310355;341:279748"
                            comWidth={24}
                            comHeight={24}
                            compLeft={56}
                            compRight={0}
                            compType="CircleImage"
                            alt="VanGoghByAmrit Three"
                          />
                          <Text
                            className="font-medium xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                            compId="599:310357"
                            comWidth={60}
                            comHeight={24}
                            compLeft={12}
                            compRight={0}
                            compType="Text"
                          >
                            Mitchell
                          </Text>
                          <Text
                            className="font-medium lg:ml-[63px] xl:ml-[72px] ml-[82px] 3xl:ml-[98px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                            compId="599:310351"
                            comWidth={110}
                            comHeight={24}
                            compLeft={82}
                            compRight={0}
                            compType="Text"
                          >
                            2758 My Drive
                          </Text>
                          <Text
                            className="font-medium lg:ml-[116px] xl:ml-[133px] ml-[150px] 3xl:ml-[180px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-indigo_401 w-[auto]"
                            compId="599:310352"
                            comWidth={110}
                            comHeight={24}
                            compLeft={150}
                            compRight={0}
                            compType="Text"
                          >
                            631-827-7596
                          </Text>
                          <Text
                            className="font-medium 3xl:ml-[111px] lg:ml-[72px] xl:ml-[82px] ml-[93px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                            compId="599:310353"
                            comWidth={58}
                            comHeight={24}
                            compLeft={93}
                            compRight={0}
                            compType="Text"
                          >
                            #12939
                          </Text>
                          <Button
                            className="font-medium 3xl:ml-[115px] lg:ml-[74px] xl:ml-[85px] ml-[96px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[9%]"
                            compId="599:310360"
                            comWidth={93}
                            comHeight={30}
                            compLeft={96}
                            compRight={0}
                            compType="Button"
                            size="sm"
                            variant="FillGreen700"
                          >
                            Paid
                          </Button>
                          <Img
                            src="images/img_menu_bluegray_400.png"
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[45px] xl:ml-[52px] ml-[59px] 3xl:ml-[70px] mr-[3px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            compId="599:310358"
                            comWidth={24}
                            comHeight={24}
                            compLeft={59}
                            compRight={3}
                            compType="Image"
                            alt="menu Eight"
                          />
                        </Row>
                      </List>
                    </>
                  ))}
                  Indicator={({ isActive }) => {
                    if (isActive) {
                      return <div className="" />;
                    }
                    return <div className="" role="button" tabIndex={0} />;
                  }}
                />
                <Row
                  className="items-center lg:ml-[231px] xl:ml-[264px] ml-[297px] 3xl:ml-[356px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[17%]"
                  compId="1441"
                  comWidth={232}
                  comHeight={32}
                  compLeft={297}
                  compRight={0}
                  compType="Row"
                >
                  <Button
                    className="cursor-pointer flex lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] items-center justify-center lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                    compId="599:310367"
                    comWidth={32}
                    comHeight={32}
                    compLeft={0}
                    compRight={0}
                    compType="IconButton"
                    onClick={() => sliderRef.current?.slidePrev()}
                    size="lgIcn"
                    variant="icbOutlineIndigo50"
                  >
                    <Img
                      src="images/img_arrowleft.png"
                      className="flex items-center justify-center"
                      compId="599:310367"
                      comWidth={32}
                      comHeight={32}
                      compLeft={0}
                      compRight={0}
                      compType="IconButton"
                      alt="arrowleft"
                    />
                  </Button>
                  <Button
                    className="cursor-pointer flex lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] items-center justify-center lg:ml-[130px] xl:ml-[149px] ml-[168px] 3xl:ml-[201px] rotate-[180deg] lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                    compId="599:310387"
                    comWidth={32}
                    comHeight={32}
                    compLeft={168}
                    compRight={0}
                    compType="IconButton"
                    onClick={() => sliderRef.current?.slideNext()}
                    size="lgIcn"
                    variant="icbOutlineIndigo50"
                  >
                    <Img
                      src="images/img_arrowleft_bluegray_400.png"
                      className="flex items-center justify-center"
                      compId="599:310387"
                      comWidth={32}
                      comHeight={32}
                      compLeft={168}
                      compRight={0}
                      compType="IconButton"
                      alt="arrowleft One"
                    />
                  </Button>
                </Row>
              </Column>
              <Img
                src="images/img_close.png"
                className="absolute lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] right-[0] top-[4%] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                compId="599:310364"
                comWidth={24}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="close"
              />
              <Row
                className="absolute bottom-[0] inset-x-[0] items-center justify-end mx-[auto] lg:pl-[31px] xl:pl-[35px] pl-[40px] 3xl:pl-[48px] w-[94%]"
                compId="599:310365"
                comWidth={1087}
                comHeight={32}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Button
                  className="font-medium lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                  compId="599:310371"
                  comWidth={32}
                  comHeight={32}
                  compLeft={0}
                  compRight={0}
                  compType="Button"
                  size="sm"
                  variant="OutlineBluegray900"
                >
                  1
                </Button>
                <Button
                  className="font-medium lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                  compId="599:310375"
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
                  compId="599:310379"
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
                  compId="599:310383"
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
                <Text
                  className="font-medium lg:ml-[625px] xl:ml-[715px] ml-[804px] 3xl:ml-[965px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="599:310390"
                  comWidth={91}
                  comHeight={22}
                  compLeft={804}
                  compRight={0}
                  compType="Text"
                >
                  9 of 200 data
                </Text>
              </Row>
            </Stack>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default CustomerPage;
