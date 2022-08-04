import React from "react";

import {
  Stack,
  Column,
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

const ShopReviewsPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Stack
        className="bg-white_A700 font-inter lg:h-[1540px] xl:h-[1761px] h-[1979px] 2xl:h-[1981px] 3xl:h-[2377px] mx-[auto] w-[100%]"
        compId="531:307702"
        comWidth={1440}
        comHeight={1979}
        compLeft={0}
        compRight={0}
        compType="Stack"
      >
        <Column
          className="absolute items-end w-[100%]"
          compId="989"
          comWidth={1440}
          comHeight={1979}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Row
            className="bg-white_A700 items-center justify-end p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] w-[100%]"
            compId="43812:48402"
            comWidth={1440}
            comHeight={60}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Img
              src="images/img_microphone.png"
              className="lg:h-[22px] xl:h-[25px] h-[28px] 2xl:h-[29px] 3xl:h-[34px] w-[1%]"
              compId="I43812:48402;43807:13258"
              comWidth={21}
              comHeight={28}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="microphone"
            />
            <Text
              className="font-medium lg:ml-[169px] xl:ml-[193px] ml-[218px] 3xl:ml-[261px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
              compId="I43812:48402;234:259667"
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
              compId="I43812:48402;234:259514"
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
                  compId="I43812:48402;234:259514;234:259505"
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
              compId="I43812:48402;531:315836;5:32"
              comWidth={20}
              comHeight={22}
              compLeft={136}
              compRight={0}
              compType="Image"
              alt="Vector"
            />
            <Stack
              className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] w-[9%]"
              compId="987"
              comWidth={126}
              comHeight={24}
              compLeft={29}
              compRight={0}
              compType="Stack"
            >
              <Img
                src="images/img_user_bluegray_900.png"
                className="absolute lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] inset-y-[0] left-[0] my-[auto] w-[14%]"
                compId="I43812:48402;37:1285;37:1283"
                comWidth={18}
                comHeight={20}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="user"
              />
              <Row
                className="absolute right-[0] w-[90%]"
                compId="630"
                comWidth={113}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <div
                  className="bg-red_600 3xl:h-[10px] lg:h-[7px] h-[8px] 2xl:h-[9px] mt-[1px] outline outline-[2px] outline-white_A700 rounded-radius50 lg:w-[6px] xl:w-[7px] w-[8px] 3xl:w-[9px]"
                  compId="I43812:48402;530:301660"
                  comWidth={8}
                  comHeight={8}
                  compLeft={0}
                  compRight={0}
                  compType="View"
                ></div>
                <Text
                  className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_500 w-[auto]"
                  compId="I43812:48402;37:1272"
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
              compId="I43812:48402;483:292004;43812:47214"
              comWidth={40}
              comHeight={40}
              compLeft={13}
              compRight={13}
              compType="CircleImage"
              alt="SherlockToyFa"
            />
          </Row>
          <Column
            className="bg-gray_50 items-center lg:p-[17px] xl:p-[20px] p-[23px] 3xl:p-[27px] w-[83%]"
            compId="531:307703"
            comWidth={1199}
            comHeight={1919}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="justify-between 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] w-[98%]"
              compId="998"
              comWidth={1133}
              comHeight={32}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Text
                className="font-medium font-poppins lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]"
                compId="531:307704"
                comWidth={162}
                comHeight={32}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                Shopping centre
              </Text>
              <Text
                className="font-inter font-normal lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                compId="531:307709"
                comWidth={215}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                <span className="text-bluegray_400">Shop Central/</span>
                <span className="text-bluegray_800"> Product detail</span>
              </Text>
            </Row>
            <Column
              className="bg-white_A700 items-center lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:p-[23px] xl:p-[26px] p-[30px] 3xl:p-[36px] rounded-radius4 shadow-bs1 w-[100%]"
              compId="531:307710"
              comWidth={1151}
              comHeight={1112}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-center w-[100%]"
                compId="43812:50140"
                comWidth={1087}
                comHeight={566}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Column
                  className="items-center w-[11%]"
                  compId="43812:50139"
                  comWidth={116}
                  comHeight={564}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Img
                    src="images/img_rectangle_126X116.png"
                    className="xl:h-[113px] h-[126px] 2xl:h-[127px] 3xl:h-[152px] lg:h-[98px] w-[100%]"
                    compId="531:307712"
                    comWidth={116}
                    comHeight={126}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Rectangle"
                  />
                  <Img
                    src="images/img_rectangle_1.png"
                    className="xl:h-[113px] h-[126px] 2xl:h-[127px] 3xl:h-[152px] lg:h-[98px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]"
                    compId="531:307713"
                    comWidth={116}
                    comHeight={126}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Rectangle One"
                  />
                  <Img
                    src="images/img_rectangle_2.png"
                    className="xl:h-[113px] h-[126px] 2xl:h-[127px] 3xl:h-[152px] lg:h-[98px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]"
                    compId="531:307714"
                    comWidth={116}
                    comHeight={126}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Rectangle Two"
                  />
                  <Img
                    src="images/img_rectangle_3.png"
                    className="xl:h-[113px] h-[126px] 2xl:h-[127px] 3xl:h-[152px] lg:h-[98px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]"
                    compId="531:307715"
                    comWidth={116}
                    comHeight={126}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Rectangle Three"
                  />
                </Column>
                <Img
                  src="images/img_rectangle.png"
                  className="lg:h-[439px] xl:h-[502px] h-[564px] 2xl:h-[565px] 3xl:h-[678px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] w-[48%]"
                  compId="531:307711"
                  comWidth={524}
                  comHeight={564}
                  compLeft={20}
                  compRight={0}
                  compType="Image"
                  alt="Rectangle Four"
                />
                <Column
                  className="lg:ml-[28px] xl:ml-[32px] ml-[37px] 3xl:ml-[44px] w-[36%]"
                  compId="531:307716"
                  comWidth={390}
                  comHeight={566}
                  compLeft={37}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold ml-[3px] lg:text-[21px] xl:text-[24px] text-[28px] 3xl:text-[33px] text-bluegray_900 w-[auto]"
                    compId="531:307718"
                    comWidth={133}
                    comHeight={40}
                    compLeft={3}
                    compRight={0}
                    compType="Text"
                  >
                    Polo Shirt
                  </Text>
                  <Row
                    className="items-center ml-[3px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[53%]"
                    compId="531:307719"
                    comWidth={205}
                    comHeight={24}
                    compLeft={3}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                      compId="531:307720"
                      comWidth={97}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Code: #1230
                    </Text>
                    <Img
                      src="images/img_frame_11X77.png"
                      className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] w-[44%]"
                      compId="531:307721"
                      comWidth={90}
                      comHeight={14}
                      compLeft={18}
                      compRight={0}
                      compType="Image"
                      alt="Frame"
                    />
                  </Row>
                  <Text
                    className="font-bold lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-indigo_401 w-[auto]"
                    compId="531:307727"
                    comWidth={82}
                    comHeight={32}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    $120.0
                  </Text>
                  <Text
                    className="font-medium ml-[3px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                    compId="531:307729"
                    comWidth={102}
                    comHeight={24}
                    compLeft={3}
                    compRight={0}
                    compType="Text"
                  >
                    Choose color
                  </Text>
                  <Img
                    src="images/img_battery.png"
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] ml-[3px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[13%]"
                    compId="531:307730"
                    comWidth={52}
                    comHeight={24}
                    compLeft={3}
                    compRight={0}
                    compType="Image"
                    alt="battery"
                  />
                  <Text
                    className="font-medium ml-[3px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                    compId="531:307736"
                    comWidth={126}
                    comHeight={24}
                    compLeft={3}
                    compRight={0}
                    compType="Text"
                  >
                    Choose quantity
                  </Text>
                  <Row
                    className="items-center ml-[3px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[29%]"
                    compId="531:307737"
                    comWidth={112}
                    comHeight={32}
                    compLeft={3}
                    compRight={0}
                    compType="Row"
                  >
                    <Column
                      className="border border-indigo_50 border-solid lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] items-center 3xl:px-[10px] lg:px-[7px] xl:px-[8px] px-[9px] lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                      compId="531:307738"
                      comWidth={32}
                      comHeight={32}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <div
                        className="bg-bluegray_900 h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] rounded-radius50 w-[1px]"
                        compId="I531:307740;1:1328"
                        comWidth={1}
                        comHeight={1}
                        compLeft={0}
                        compRight={0}
                        compType="View"
                      ></div>
                    </Column>
                    <Text
                      className="font-medium lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]"
                      compId="531:307742"
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
                      compId="531:307743"
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
                        compId="531:307743"
                        comWidth={32}
                        comHeight={32}
                        compLeft={20}
                        compRight={0}
                        compType="IconButton"
                        alt="close"
                      />
                    </Button>
                  </Row>
                  <Text
                    className="font-medium ml-[3px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                    compId="531:307748"
                    comWidth={94}
                    comHeight={24}
                    compLeft={3}
                    compRight={0}
                    compType="Text"
                  >
                    Choose size
                  </Text>
                  <Row
                    className="items-center ml-[3px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[29%]"
                    compId="531:307749"
                    comWidth={112}
                    comHeight={32}
                    compLeft={3}
                    compRight={0}
                    compType="Row"
                  >
                    <Button
                      className="font-medium lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                      compId="531:307750"
                      comWidth={32}
                      comHeight={32}
                      compLeft={0}
                      compRight={0}
                      compType="Button"
                      size="sm"
                      variant="OutlineIndigo50"
                    >
                      S
                    </Button>
                    <Button
                      className="font-medium lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                      compId="531:307754"
                      comWidth={32}
                      comHeight={32}
                      compLeft={8}
                      compRight={0}
                      compType="Button"
                      size="sm"
                      variant="OutlineIndigo50"
                    >
                      M
                    </Button>
                    <Button
                      className="font-medium lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                      compId="531:307758"
                      comWidth={32}
                      comHeight={32}
                      compLeft={8}
                      compRight={0}
                      compType="Button"
                      size="sm"
                      variant="OutlineIndigo50"
                    >
                      L
                    </Button>
                  </Row>
                  <Text
                    className="font-normal lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-indigo_401 w-[auto]"
                    compId="531:307762"
                    comWidth={145}
                    comHeight={22}
                    compLeft={6}
                    compRight={0}
                    compType="Text"
                  >
                    How to find your size?
                  </Text>
                  <Row
                    className="items-center justify-between ml-[3px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[99%]"
                    compId="43812:52809"
                    comWidth={387}
                    comHeight={48}
                    compLeft={3}
                    compRight={0}
                    compType="Row"
                  >
                    <Button
                      className="font-bold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[48%]"
                      compId="43812:52810"
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
                      className="font-bold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[48%]"
                      compId="43812:52811"
                      comWidth={185}
                      comHeight={48}
                      compLeft={0}
                      compRight={0}
                      compType="Button"
                      shape="CircleBorder24"
                      size="lg"
                      variant="FillDeeporange50"
                    >
                      Add to cart
                    </Button>
                  </Row>
                </Column>
              </Row>
              <Row
                className="lg:my-[38px] xl:my-[43px] my-[49px] 3xl:my-[58px] w-[100%]"
                compId="992"
                comWidth={1087}
                comHeight={388}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Column
                  className="w-[34%]"
                  compId="531:307768"
                  comWidth={371}
                  comHeight={72}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                    compId="531:307769"
                    comWidth={108}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Product Detail
                  </Text>
                  <Row
                    className="items-center lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[31%]"
                    compId="531:307770"
                    comWidth={116}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <div
                      className="bg-indigo_401 h-[2px] 3xl:h-[3px] 2xl:h-[3px] w-[35%]"
                      compId="531:307771"
                      comWidth={41}
                      comHeight={2}
                      compLeft={0}
                      compRight={0}
                      compType="View"
                    ></div>
                    <Text
                      className="font-medium xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-indigo_401 w-[auto]"
                      compId="531:307772"
                      comWidth={63}
                      comHeight={24}
                      compLeft={12}
                      compRight={0}
                      compType="Text"
                    >
                      Reviews
                    </Text>
                  </Row>
                </Column>
                <List
                  className="gap-[0] min-h-[auto] w-[66%]"
                  compId="43812:50138"
                  comWidth={716}
                  comHeight={388}
                  compLeft={0}
                  compRight={0}
                  compType="List"
                  orientation="vertical"
                >
                  <Column
                    className="border border-indigo_50 border-solid items-end my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] rounded-radius4 w-[100%]"
                    compId="531:307773"
                    comWidth={716}
                    comHeight={184}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Row
                      className="w-[100%]"
                      compId="531:307776"
                      comWidth={652}
                      comHeight={56}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Img
                        src="images/img_tintin22.png"
                        className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius50 lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                        compId="I531:307779;444:290035"
                        comWidth={48}
                        comHeight={48}
                        compLeft={0}
                        compRight={0}
                        compType="CircleImage"
                        alt="TinTinTwentyTwo"
                      />
                      <Column
                        className="lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] w-[72%]"
                        compId="531:307781"
                        comWidth={471}
                        comHeight={56}
                        compLeft={20}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_800 w-[auto]"
                          compId="531:307782"
                          comWidth={42}
                          comHeight={28}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          Jimo
                        </Text>
                        <Text
                          className="font-normal mt-[4px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                          compId="531:307783"
                          comWidth={434}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          {
                            "Nice T-Shirt, I have a soft spot for buying this stuff <3 <3"
                          }
                        </Text>
                      </Column>
                      <Text
                        className="font-normal lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                        compId="531:307775"
                        comWidth={93}
                        comHeight={24}
                        compLeft={20}
                        compRight={0}
                        compType="Text"
                      >
                        20 mins ago
                      </Text>
                    </Row>
                    <Row
                      className="items-center justify-end ml-[auto] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] pl-[2px] w-[35%]"
                      compId="531:307784"
                      comWidth={225}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Img
                        src="images/img_refresh.png"
                        className="lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] w-[9%]"
                        compId="I531:307786;4:55"
                        comWidth={20}
                        comHeight={19}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="refresh"
                      />
                      <Text
                        className="font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="531:307787"
                        comWidth={101}
                        comHeight={24}
                        compLeft={10}
                        compRight={0}
                        compType="Text"
                      >
                        10 comments
                      </Text>
                      <Img
                        src="images/img_favorite_bluegray_800.png"
                        className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[24px] xl:ml-[27px] ml-[31px] 3xl:ml-[37px] w-[10%]"
                        compId="I531:307789;4:6"
                        comWidth={22}
                        comHeight={20}
                        compLeft={31}
                        compRight={0}
                        compType="Image"
                        alt="favorite"
                      />
                      <Text
                        className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="531:307790"
                        comWidth={30}
                        comHeight={24}
                        compLeft={8}
                        compRight={0}
                        compType="Text"
                      >
                        200
                      </Text>
                    </Row>
                  </Column>
                  <Column
                    className="border border-indigo_50 border-solid items-end my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] rounded-radius4 w-[100%]"
                    compId="531:307791"
                    comWidth={716}
                    comHeight={184}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Row
                      className="w-[100%]"
                      compId="531:307794"
                      comWidth={652}
                      comHeight={80}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Img
                        src="images/img_indiahigh.png"
                        className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius50 lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                        compId="I531:307797;444:290029"
                        comWidth={48}
                        comHeight={48}
                        compLeft={0}
                        compRight={0}
                        compType="CircleImage"
                        alt="Indiahigh"
                      />
                      <Column
                        className="lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] w-[72%]"
                        compId="531:307799"
                        comWidth={471}
                        comHeight={80}
                        compLeft={20}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_800 w-[auto]"
                          compId="531:307800"
                          comWidth={125}
                          comHeight={28}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          Ackerman_lhn
                        </Text>
                        <Text
                          className="font-normal lg:leading-[18px] xl:leading-[21px] leading-[24.00px] 2xl:leading-[24px] 3xl:leading-[28px] mt-[4px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[87%]"
                          compId="531:307801"
                          comWidth={412}
                          comHeight={48}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          Oh my god, i am really addicted to this brand a lot. I
                          define myself as a big fan
                        </Text>
                      </Column>
                      <Text
                        className="font-normal lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                        compId="531:307793"
                        comWidth={93}
                        comHeight={24}
                        compLeft={20}
                        compRight={0}
                        compType="Text"
                      >
                        20 mins ago
                      </Text>
                    </Row>
                    <Row
                      className="items-center justify-end ml-[auto] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] pl-[2px] w-[35%]"
                      compId="531:307802"
                      comWidth={225}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Img
                        src="images/img_refresh.png"
                        className="lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] w-[9%]"
                        compId="I531:307804;4:55"
                        comWidth={20}
                        comHeight={19}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="refresh One"
                      />
                      <Text
                        className="font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="531:307805"
                        comWidth={101}
                        comHeight={24}
                        compLeft={10}
                        compRight={0}
                        compType="Text"
                      >
                        10 comments
                      </Text>
                      <Img
                        src="images/img_favorite_bluegray_800.png"
                        className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[24px] xl:ml-[27px] ml-[31px] 3xl:ml-[37px] w-[10%]"
                        compId="I531:307807;4:6"
                        comWidth={22}
                        comHeight={20}
                        compLeft={31}
                        compRight={0}
                        compType="Image"
                        alt="favorite One"
                      />
                      <Text
                        className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="531:307808"
                        comWidth={30}
                        comHeight={24}
                        compLeft={8}
                        compRight={0}
                        compType="Text"
                      >
                        200
                      </Text>
                    </Row>
                  </Column>
                </List>
              </Row>
            </Column>
            <Row
              className="items-center lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[99%]"
              compId="531:307809"
              comWidth={1147}
              comHeight={32}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Text
                className="font-medium font-poppins lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]"
                compId="531:307705"
                comWidth={162}
                comHeight={32}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                Related product
              </Text>
              <Text
                className="font-inter font-medium 3xl:ml-[1080px] lg:ml-[700px] xl:ml-[800px] ml-[900px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                compId="531:307810"
                comWidth={49}
                comHeight={24}
                compLeft={900}
                compRight={0}
                compType="Text"
              >
                See all
              </Text>
              <Img
                src="images/img_arrowright_bluegray_400.png"
                className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                compId="I531:307811;1:1683"
                comWidth={16}
                comHeight={16}
                compLeft={20}
                compRight={0}
                compType="Image"
                alt="arrowright"
              />
            </Row>
            <List
              className="lg:gap-[15px] xl:gap-[17px] gap-[20px] 3xl:gap-[24px] grid grid-cols-4 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] mb-[9px] min-h-[auto] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]"
              compId="600:314065"
              comWidth={1152}
              comHeight={583}
              compLeft={0}
              compRight={0}
              compType="List"
              orientation="horizontal"
            >
              <Column
                className="bg-white_A700 items-center lg:pb-[24px] xl:pb-[28px] pb-[32px] 3xl:pb-[38px] rounded-radius8 shadow-bs1 w-[100%]"
                compId="600:314066"
                comWidth={273}
                comHeight={583}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="bg-cover bg-repeat justify-end lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px] w-[100%]"
                  compId="I600:314066;600:312074"
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
                    compId="I600:314066;600:312075"
                    comWidth={0}
                    comHeight={30}
                    compLeft={0}
                    compRight={0}
                    compType="Button"
                    rightIcon={
                      <Img
                        src="images/img_cursor_red_600.png"
                        className="w-[10px] ml-[12px] text-center lg:w-[7px] lg:ml-[9px] xl:w-[8px] xl:ml-[10px] 3xl:w-[12px] 3xl:ml-[14px]"
                        compId="I600:314066;600:312075;485:292763;1:1622"
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
                    compId="I600:314066;600:312076"
                    comWidth={0}
                    comHeight={30}
                    compLeft={0}
                    compRight={0}
                    compType="Button"
                    rightIcon={
                      <Img
                        src="images/img_offer.png"
                        className="w-[10.59px] ml-[14px] text-center lg:w-[8px] lg:ml-[10px] xl:w-[9px] xl:ml-[12px] 2xl:w-[10px] 3xl:w-[12px] 3xl:ml-[16px]"
                        compId="I600:314066;600:312076;485:292759;1:1518"
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
                  compId="I600:314066;600:312059"
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
                  compId="1003"
                  comWidth={112}
                  comHeight={135}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="justify-evenly w-[96%]"
                    compId="I600:314066;600:312060"
                    comWidth={107}
                    comHeight={28}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-bold font-inter lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                      compId="I600:314066;600:312061"
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
                      compId="I600:314066;600:312062"
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
                    compId="I600:314066;600:312063"
                    comWidth={77}
                    comHeight={11}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Frame One"
                  />
                  <Row
                    className="items-center justify-between lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]"
                    compId="994"
                    comWidth={112}
                    comHeight={48}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Button
                      className="flex lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                      compId="I600:314066;600:312070"
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
                        compId="I600:314066;600:312070"
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
                      compId="I600:314066;600:312072"
                      comWidth={48}
                      comHeight={48}
                      compLeft={0}
                      compRight={0}
                      compType="IconButton"
                    >
                      <Img
                        src="images/img_favorite.png"
                        className="flex items-center justify-center"
                        compId="I600:314066;600:312072"
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
                className="bg-white_A700 items-center lg:pb-[24px] xl:pb-[28px] pb-[32px] 3xl:pb-[38px] rounded-radius8 shadow-bs1 w-[100%]"
                compId="600:314067"
                comWidth={273}
                comHeight={583}
                compLeft={20}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="bg-cover bg-repeat justify-end lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px] w-[100%]"
                  compId="I600:314067;600:312074"
                  style={{ backgroundImage: "url('images/img_frame_1.png')" }}
                  comWidth={273}
                  comHeight={353}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Button
                    className="3xl:mb-[339px] flex items-center justify-center lg:mb-[220px] mb-[283px] text-center w-[35%] xl:mb-[251px]"
                    compId="I600:314067;600:312075"
                    comWidth={0}
                    comHeight={30}
                    compLeft={0}
                    compRight={0}
                    compType="Button"
                    rightIcon={
                      <Img
                        src="images/img_cursor_red_600.png"
                        className="w-[10px] ml-[12px] text-center lg:w-[7px] lg:ml-[9px] xl:w-[8px] xl:ml-[10px] 3xl:w-[12px] 3xl:ml-[14px]"
                        compId="I600:314067;600:312075;485:292763;1:1622"
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
                    compId="I600:314067;600:312076"
                    comWidth={0}
                    comHeight={30}
                    compLeft={0}
                    compRight={0}
                    compType="Button"
                    rightIcon={
                      <Img
                        src="images/img_offer.png"
                        className="w-[10.59px] ml-[14px] text-center lg:w-[8px] lg:ml-[10px] xl:w-[9px] xl:ml-[12px] 2xl:w-[10px] 3xl:w-[12px] 3xl:ml-[16px]"
                        compId="I600:314067;600:312076;485:292759;1:1518"
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
                  compId="I600:314067;600:312059"
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
                  compId="1004"
                  comWidth={112}
                  comHeight={135}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="justify-evenly w-[96%]"
                    compId="I600:314067;600:312060"
                    comWidth={107}
                    comHeight={28}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-bold font-inter lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                      compId="I600:314067;600:312061"
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
                      compId="I600:314067;600:312062"
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
                    compId="I600:314067;600:312063"
                    comWidth={77}
                    comHeight={11}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Frame Two"
                  />
                  <Row
                    className="items-center justify-between lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]"
                    compId="995"
                    comWidth={112}
                    comHeight={48}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Button
                      className="flex lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                      compId="I600:314067;600:312070"
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
                        compId="I600:314067;600:312070"
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
                      compId="I600:314067;600:312072"
                      comWidth={48}
                      comHeight={48}
                      compLeft={0}
                      compRight={0}
                      compType="IconButton"
                    >
                      <Img
                        src="images/img_favorite.png"
                        className="flex items-center justify-center"
                        compId="I600:314067;600:312072"
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
                className="bg-white_A700 items-center lg:pb-[24px] xl:pb-[28px] pb-[32px] 3xl:pb-[38px] rounded-radius8 shadow-bs1 w-[100%]"
                compId="600:314068"
                comWidth={273}
                comHeight={583}
                compLeft={20}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="bg-cover bg-repeat justify-end lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px] w-[100%]"
                  compId="I600:314068;600:312074"
                  style={{ backgroundImage: "url('images/img_frame_2.png')" }}
                  comWidth={273}
                  comHeight={353}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Button
                    className="3xl:mb-[339px] flex items-center justify-center lg:mb-[220px] mb-[283px] text-center w-[35%] xl:mb-[251px]"
                    compId="I600:314068;600:312075"
                    comWidth={0}
                    comHeight={30}
                    compLeft={0}
                    compRight={0}
                    compType="Button"
                    rightIcon={
                      <Img
                        src="images/img_cursor_red_600.png"
                        className="w-[10px] ml-[12px] text-center lg:w-[7px] lg:ml-[9px] xl:w-[8px] xl:ml-[10px] 3xl:w-[12px] 3xl:ml-[14px]"
                        compId="I600:314068;600:312075;485:292763;1:1622"
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
                    compId="I600:314068;600:312076"
                    comWidth={0}
                    comHeight={30}
                    compLeft={0}
                    compRight={0}
                    compType="Button"
                    rightIcon={
                      <Img
                        src="images/img_offer.png"
                        className="w-[10.59px] ml-[14px] text-center lg:w-[8px] lg:ml-[10px] xl:w-[9px] xl:ml-[12px] 2xl:w-[10px] 3xl:w-[12px] 3xl:ml-[16px]"
                        compId="I600:314068;600:312076;485:292759;1:1518"
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
                  compId="I600:314068;600:312059"
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
                  compId="1005"
                  comWidth={112}
                  comHeight={135}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="justify-evenly w-[96%]"
                    compId="I600:314068;600:312060"
                    comWidth={107}
                    comHeight={28}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-bold font-inter lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                      compId="I600:314068;600:312061"
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
                      compId="I600:314068;600:312062"
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
                    compId="I600:314068;600:312063"
                    comWidth={77}
                    comHeight={11}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Frame Three"
                  />
                  <Row
                    className="items-center justify-between lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]"
                    compId="996"
                    comWidth={112}
                    comHeight={48}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Button
                      className="flex lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                      compId="I600:314068;600:312070"
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
                        compId="I600:314068;600:312070"
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
                      compId="I600:314068;600:312072"
                      comWidth={48}
                      comHeight={48}
                      compLeft={0}
                      compRight={0}
                      compType="IconButton"
                    >
                      <Img
                        src="images/img_favorite.png"
                        className="flex items-center justify-center"
                        compId="I600:314068;600:312072"
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
                compId="600:314069"
                comWidth={273}
                comHeight={583}
                compLeft={20}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="bg-cover bg-repeat justify-end lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px] w-[100%]"
                  compId="I600:314069;600:312074"
                  style={{ backgroundImage: "url('images/img_frame_5.png')" }}
                  comWidth={273}
                  comHeight={353}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Button
                    className="3xl:mb-[339px] flex items-center justify-center lg:mb-[220px] mb-[283px] text-center w-[35%] xl:mb-[251px]"
                    compId="I600:314069;600:312075"
                    comWidth={0}
                    comHeight={30}
                    compLeft={0}
                    compRight={0}
                    compType="Button"
                    rightIcon={
                      <Img
                        src="images/img_cursor_red_600.png"
                        className="w-[10px] ml-[12px] text-center lg:w-[7px] lg:ml-[9px] xl:w-[8px] xl:ml-[10px] 3xl:w-[12px] 3xl:ml-[14px]"
                        compId="I600:314069;600:312075;485:292763;1:1622"
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
                    compId="I600:314069;600:312076"
                    comWidth={0}
                    comHeight={30}
                    compLeft={0}
                    compRight={0}
                    compType="Button"
                    rightIcon={
                      <Img
                        src="images/img_offer.png"
                        className="w-[10.59px] ml-[14px] text-center lg:w-[8px] lg:ml-[10px] xl:w-[9px] xl:ml-[12px] 2xl:w-[10px] 3xl:w-[12px] 3xl:ml-[16px]"
                        compId="I600:314069;600:312076;485:292759;1:1518"
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
                  compId="I600:314069;600:312059"
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
                  compId="1006"
                  comWidth={112}
                  comHeight={135}
                  compLeft={81}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="justify-evenly w-[96%]"
                    compId="I600:314069;600:312060"
                    comWidth={107}
                    comHeight={28}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-bold font-inter lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                      compId="I600:314069;600:312061"
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
                      compId="I600:314069;600:312062"
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
                    compId="I600:314069;600:312063"
                    comWidth={77}
                    comHeight={11}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Frame Four"
                  />
                  <Row
                    className="items-center justify-between lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]"
                    compId="997"
                    comWidth={112}
                    comHeight={48}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Button
                      className="flex lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                      compId="I600:314069;600:312070"
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
                        compId="I600:314069;600:312070"
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
                      compId="I600:314069;600:312072"
                      comWidth={48}
                      comHeight={48}
                      compLeft={0}
                      compRight={0}
                      compType="IconButton"
                    >
                      <Img
                        src="images/img_favorite.png"
                        className="flex items-center justify-center"
                        compId="I600:314069;600:312072"
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
            </List>
          </Column>
        </Column>
        <aside className="absolute items-center left-[0] top-[0] w-[17%]">
          <Column
            className=""
            compId="628"
            comWidth={242}
            comHeight={1538}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="justify-evenly w-[100%]"
              compId="627"
              comWidth={242}
              comHeight={1538}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Stack
                className="lg:h-[1150px] xl:h-[1315px] h-[1478px] 2xl:h-[1480px] 3xl:h-[1775px] lg:mt-[46px] xl:mt-[53px] mt-[60px] 3xl:mt-[72px] w-[100%]"
                compId="988"
                comWidth={241}
                comHeight={1478}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Line
                  className="absolute bg-indigo_50 lg:h-[537px] xl:h-[614px] h-[690px] 2xl:h-[691px] 3xl:h-[829px] right-[9%] top-[0] w-[1px]"
                  compId="531:307903"
                  comWidth={1}
                  comHeight={690}
                  compLeft={0}
                  compRight={21}
                  compType="Line"
                />
                <Column
                  className="absolute bg-white_A700 justify-center lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] w-[100%]"
                  compId="614:13734"
                  comWidth={241}
                  comHeight={1478}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="items-center lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[62%]"
                    compId="I614:13734;41:948"
                    comWidth={109}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Img
                      src="images/img_menu_bluegray_400_20X20.png"
                      className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                      compId="I614:13734;531:321438"
                      comWidth={20}
                      comHeight={20}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="menu"
                    />
                    <Text
                      className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                      compId="I614:13734;41:950"
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
                    compId="I614:13734;41:951"
                    comWidth={100}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Img
                      src="images/img_user_bluegray_400.png"
                      className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                      compId="I614:13734;531:322607"
                      comWidth={20}
                      comHeight={20}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="user One"
                    />
                    <Text
                      className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                      compId="I614:13734;41:953"
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
                    compId="I614:13734;43809:15240"
                    comWidth={155}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Img
                      src="images/img_icon.png"
                      className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] mt-[1px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                      compId="I614:13734;41:955"
                      comWidth={20}
                      comHeight={20}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Icon"
                    />
                    <Text
                      className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] mt-[1px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                      compId="I614:13734;41:956"
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
                      compId="I614:13734;235:259292"
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
                    compId="I614:13734;41:957"
                    comWidth={57}
                    comHeight={22}
                    compLeft={1}
                    compRight={0}
                    compType="Row"
                  >
                    <Img
                      src="images/img_folder_bluegray_400.png"
                      className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] w-[32%]"
                      compId="I614:13734;533:294113;531:320466"
                      comWidth={18}
                      comHeight={16}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="folder"
                    />
                    <Text
                      className="flex font-medium items-center lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                      compId="I614:13734;41:959"
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
                    compId="I614:13734;41:960"
                    comWidth={95}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Img
                      src="images/img_settings.png"
                      className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                      compId="I614:13734;41:961"
                      comWidth={20}
                      comHeight={20}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="settings"
                    />
                    <Text
                      className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                      compId="I614:13734;41:962"
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
                    compId="I614:13734;41:963"
                    comWidth={68}
                    comHeight={22}
                    compLeft={1}
                    compRight={0}
                    compType="Row"
                  >
                    <Img
                      src="images/img_trash.png"
                      className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] mt-[1px] lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                      compId="I614:13734;41:964;485:292315"
                      comWidth={16}
                      comHeight={16}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="trash"
                    />
                    <Text
                      className="font-medium lg:ml-[13px] xl:ml-[15px] ml-[17px] 3xl:ml-[20px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                      compId="I614:13734;41:965"
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
                    compId="I614:13734;41:966"
                    comWidth={62}
                    comHeight={22}
                    compLeft={1}
                    compRight={0}
                    compType="Row"
                  >
                    <Img
                      src="images/img_vector_bluegray_400.png"
                      className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] w-[26%]"
                      compId="I614:13734;614:13885;531:320955"
                      comWidth={16}
                      comHeight={18}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Vector One"
                    />
                    <Text
                      className="font-medium lg:ml-[13px] xl:ml-[15px] ml-[17px] 3xl:ml-[20px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                      compId="I614:13734;41:968"
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
                    value="Settings10"
                    className="font-medium mb-[1006px] 3xl:mb-[1207px] lg:mb-[782px] xl:mb-[894px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400"
                    inputClassName="h-[20px] mr-[5px] w-[20px]"
                    compId="I614:13734;531:316827"
                    comWidth={91}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Radio"
                    checked={false}
                    name="Settings One"
                    label="Settings10"
                    variant="illBluegray400"
                  ></Radio>
                </Column>
              </Stack>
              <Line
                className="bg-indigo_50 lg:h-[584px] xl:h-[668px] h-[750px] 2xl:h-[751px] 3xl:h-[901px] w-[1px]"
                compId="531:307905"
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
    </>
  );
};

export default ShopReviewsPage;
