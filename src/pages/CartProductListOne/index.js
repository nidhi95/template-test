import React from "react";

import {
  Stack,
  Column,
  Row,
  Img,
  Text,
  Input,
  List,
  Line,
  Button,
  Radio,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const CartProductListOnePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Stack
        className="bg-white_A700 font-inter h-[1071px] 2xl:h-[1072px] 3xl:h-[1286px] lg:h-[833px] xl:h-[953px] mx-[auto] w-[100%]"
        compId="600:318004"
        comWidth={1440}
        comHeight={1071}
        compLeft={0}
        compRight={0}
        compType="Stack"
      >
        <Column
          className="absolute items-end w-[100%]"
          compId="973"
          comWidth={1440}
          comHeight={1071}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Row
            className="bg-white_A700 items-center justify-end p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] w-[100%]"
            compId="600:318011"
            comWidth={1440}
            comHeight={60}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Img
              src="images/img_microphone.png"
              className="lg:h-[22px] xl:h-[25px] h-[28px] 2xl:h-[29px] 3xl:h-[34px] w-[1%]"
              compId="I600:318011;43807:13258"
              comWidth={21}
              comHeight={28}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="microphone"
            />
            <Text
              className="font-medium lg:ml-[169px] xl:ml-[193px] ml-[218px] 3xl:ml-[261px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
              compId="I600:318011;234:259667"
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
              compId="I600:318011;234:259514"
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
                  compId="I600:318011;234:259514;234:259505"
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
              variant="srcFillGray50"
            ></Input>
            <Img
              src="images/img_vector.png"
              className="lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] lg:ml-[105px] xl:ml-[120px] ml-[136px] 3xl:ml-[163px] w-[1%]"
              compId="I600:318011;531:315836;5:32"
              comWidth={20}
              comHeight={22}
              compLeft={136}
              compRight={0}
              compType="Image"
              alt="Vector"
            />
            <Stack
              className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] w-[9%]"
              compId="972"
              comWidth={126}
              comHeight={24}
              compLeft={29}
              compRight={0}
              compType="Stack"
            >
              <Img
                src="images/img_user_bluegray_900.png"
                className="absolute lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] inset-y-[0] left-[0] my-[auto] w-[14%]"
                compId="I600:318011;37:1285;37:1283"
                comWidth={18}
                comHeight={20}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="user"
              />
              <Row
                className="absolute right-[0] w-[90%]"
                compId="621"
                comWidth={113}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <div
                  className="bg-red_600 3xl:h-[10px] lg:h-[7px] h-[8px] 2xl:h-[9px] mt-[1px] outline outline-[2px] outline-white_A700 rounded-radius50 lg:w-[6px] xl:w-[7px] w-[8px] 3xl:w-[9px]"
                  compId="I600:318011;530:301660"
                  comWidth={8}
                  comHeight={8}
                  compLeft={0}
                  compRight={0}
                  compType="View"
                ></div>
                <Text
                  className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_500 w-[auto]"
                  compId="I600:318011;37:1272"
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
              compId="I600:318011;483:292004;43812:47214"
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
            compId="600:318005"
            comWidth={1199}
            comHeight={1011}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="justify-between lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[100%]"
              compId="974"
              comWidth={1151}
              comHeight={32}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Text
                className="font-medium font-poppins lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]"
                compId="600:318006"
                comWidth={45}
                comHeight={32}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                Cart
              </Text>
              <Text
                className="font-inter font-normal lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                compId="600:318007"
                comWidth={133}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                <span className="text-bluegray_400">Ecommerce/</span>
                <span className="text-bluegray_800"> Cart</span>
              </Text>
            </Row>
            <Row
              className="justify-between lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]"
              compId="976"
              comWidth={1151}
              comHeight={891}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Column
                className="bg-white_A700 justify-end lg:p-[18px] xl:p-[21px] p-[24px] 3xl:p-[28px] rounded-radius4 shadow-bs1 w-[66%]"
                compId="600:318008"
                comWidth={761}
                comHeight={891}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                  compId="I600:318008;600:317464"
                  comWidth={106}
                  comHeight={28}
                  compLeft={8}
                  compRight={0}
                  compType="Text"
                >
                  Product List
                </Text>
                <Row
                  className="items-center lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] lg:mt-[27px] xl:mt-[31px] mt-[35px] 3xl:mt-[42px] w-[87%]"
                  compId="I600:318008;600:317465"
                  comWidth={623}
                  comHeight={24}
                  compLeft={29}
                  compRight={0}
                  compType="Row"
                >
                  <Img
                    src="images/img_download_bluegray_400_16X16.png"
                    className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                    compId="I600:318008;600:317470;1:1488"
                    comWidth={16}
                    comHeight={16}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="download"
                  />
                  <Text
                    className="font-normal lg:ml-[25px] xl:ml-[29px] ml-[33px] 3xl:ml-[39px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                    compId="I600:318008;600:317466"
                    comWidth={60}
                    comHeight={24}
                    compLeft={33}
                    compRight={0}
                    compType="Text"
                  >
                    Product
                  </Text>
                  <Text
                    className="font-normal lg:ml-[156px] xl:ml-[178px] ml-[201px] 3xl:ml-[241px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                    compId="I600:318008;600:317467"
                    comWidth={38}
                    comHeight={24}
                    compLeft={201}
                    compRight={0}
                    compType="Text"
                  >
                    Price
                  </Text>
                  <Text
                    className="font-normal lg:ml-[58px] xl:ml-[66px] ml-[75px] 3xl:ml-[90px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                    compId="I600:318008;600:317468"
                    comWidth={64}
                    comHeight={24}
                    compLeft={75}
                    compRight={0}
                    compType="Text"
                  >
                    Quantity
                  </Text>
                  <Text
                    className="font-normal 3xl:ml-[116px] lg:ml-[75px] xl:ml-[86px] ml-[97px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                    compId="I600:318008;600:317469"
                    comWidth={38}
                    comHeight={24}
                    compLeft={97}
                    compRight={0}
                    compType="Text"
                  >
                    Total
                  </Text>
                </Row>
                <List
                  className="gap-[0] min-h-[auto] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[98%]"
                  compId="979"
                  comWidth={697}
                  comHeight={732}
                  compLeft={8}
                  compRight={0}
                  compType="List"
                  orientation="vertical"
                >
                  <Row
                    className="bg-white_A700 xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] w-[100%]"
                    compId="I600:318008;600:317472"
                    comWidth={697}
                    comHeight={102}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Button
                      className="flex lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] items-center justify-center lg:ml-[10px] xl:ml-[11px] ml-[13px] 3xl:ml-[15px] lg:mt-[26px] xl:mt-[30px] mt-[34px] 3xl:mt-[40px] lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                      compId="I600:318008;600:317486;30146:26"
                      comWidth={16}
                      comHeight={16}
                      compLeft={13}
                      compRight={0}
                      compType="IconButton"
                      shape="icbRoundedBorder4"
                      size="smIcn"
                      variant="icbFillDeeporange300"
                    >
                      <Img
                        src="images/img_vector_white_A700_20X20.png"
                        className="flex items-center justify-center"
                        compId="I600:318008;600:317486;30146:26"
                        comWidth={16}
                        comHeight={16}
                        compLeft={13}
                        compRight={0}
                        compType="IconButton"
                        alt="Vector One"
                      />
                    </Button>
                    <Img
                      src="images/img_rectangle.png"
                      className="3xl:h-[104px] lg:h-[67px] xl:h-[77px] h-[86px] 2xl:h-[87px] lg:ml-[25px] xl:ml-[29px] ml-[33px] 3xl:ml-[39px] w-[12%]"
                      compId="I600:318008;600:317488"
                      comWidth={80}
                      comHeight={86}
                      compLeft={33}
                      compRight={0}
                      compType="Image"
                      alt="Rectangle"
                    />
                    <Column
                      className="lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] w-[20%]"
                      compId="I600:318008;600:317490"
                      comWidth={133}
                      comHeight={58}
                      compLeft={24}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                        compId="I600:318008;600:317492"
                        comWidth={85}
                        comHeight={28}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Polo Shirt
                      </Text>
                      <Text
                        className="font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                        compId="I600:318008;600:317493"
                        comWidth={90}
                        comHeight={22}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Color: Grey, S
                      </Text>
                    </Column>
                    <Text
                      className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                      compId="I600:318008;600:317484"
                      comWidth={46}
                      comHeight={22}
                      compLeft={24}
                      compRight={0}
                      compType="Text"
                    >
                      $120.0
                    </Text>
                    <Column
                      className="border border-indigo_50 border-solid lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] items-center lg:ml-[52px] xl:ml-[59px] ml-[67px] 3xl:ml-[80px] 3xl:px-[10px] lg:px-[7px] xl:px-[8px] px-[9px] lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                      compId="I600:318008;600:317475"
                      comWidth={32}
                      comHeight={32}
                      compLeft={67}
                      compRight={0}
                      compType="Column"
                    >
                      <div
                        className="bg-bluegray_900 h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] rounded-radius50 w-[1px]"
                        compId="I600:318008;600:317477;1:1328"
                        comWidth={1}
                        comHeight={1}
                        compLeft={0}
                        compRight={0}
                        compType="View"
                      ></div>
                    </Column>
                    <Text
                      className="font-medium lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]"
                      compId="I600:318008;600:317479"
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
                      compId="I600:318008;600:317480"
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
                        compId="I600:318008;600:317480"
                        comWidth={32}
                        comHeight={32}
                        compLeft={20}
                        compRight={0}
                        compType="IconButton"
                        alt="close"
                      />
                    </Button>
                    <Text
                      className="font-normal lg:ml-[38px] xl:ml-[43px] ml-[49px] 3xl:ml-[58px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                      compId="I600:318008;600:317485"
                      comWidth={46}
                      comHeight={22}
                      compLeft={49}
                      compRight={0}
                      compType="Text"
                    >
                      $120.0
                    </Text>
                  </Row>
                  <Line
                    className="self-center w-[90%] h-[1px] bg-indigo_50"
                    compId="I600:318008;600:317586"
                    comWidth={625}
                    comHeight={1}
                    compLeft={0}
                    compRight={0}
                    compType="Line"
                  />
                  <Row
                    className="bg-white_A700 xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] w-[100%]"
                    compId="I600:318008;600:317495"
                    comWidth={697}
                    comHeight={102}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Img
                      src="images/img_download_bluegray_400_16X16.png"
                      className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[10px] xl:ml-[11px] ml-[13px] 3xl:ml-[15px] lg:mt-[26px] xl:mt-[30px] mt-[34px] 3xl:mt-[40px] lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                      compId="I600:318008;600:317509;1:1488"
                      comWidth={16}
                      comHeight={16}
                      compLeft={13}
                      compRight={0}
                      compType="Image"
                      alt="download One"
                    />
                    <Img
                      src="images/img_frame_1.png"
                      className="3xl:h-[104px] lg:h-[67px] xl:h-[77px] h-[86px] 2xl:h-[87px] lg:ml-[25px] xl:ml-[29px] ml-[33px] 3xl:ml-[39px] w-[12%]"
                      compId="I600:318008;600:317511"
                      comWidth={80}
                      comHeight={86}
                      compLeft={33}
                      compRight={0}
                      compType="Image"
                      alt="Rectangle One"
                    />
                    <Column
                      className="lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] w-[20%]"
                      compId="I600:318008;600:317513"
                      comWidth={133}
                      comHeight={58}
                      compLeft={24}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                        compId="I600:318008;600:317515"
                        comWidth={117}
                        comHeight={28}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Basic T- Shirt
                      </Text>
                      <Text
                        className="font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                        compId="I600:318008;600:317516"
                        comWidth={90}
                        comHeight={22}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Color: Grey, S
                      </Text>
                    </Column>
                    <Text
                      className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                      compId="I600:318008;600:317507"
                      comWidth={46}
                      comHeight={22}
                      compLeft={24}
                      compRight={0}
                      compType="Text"
                    >
                      $120.0
                    </Text>
                    <Column
                      className="border border-indigo_50 border-solid lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] items-center lg:ml-[52px] xl:ml-[59px] ml-[67px] 3xl:ml-[80px] 3xl:px-[10px] lg:px-[7px] xl:px-[8px] px-[9px] lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                      compId="I600:318008;600:317498"
                      comWidth={32}
                      comHeight={32}
                      compLeft={67}
                      compRight={0}
                      compType="Column"
                    >
                      <div
                        className="bg-bluegray_900 h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] rounded-radius50 w-[1px]"
                        compId="I600:318008;600:317500;1:1328"
                        comWidth={1}
                        comHeight={1}
                        compLeft={0}
                        compRight={0}
                        compType="View"
                      ></div>
                    </Column>
                    <Text
                      className="font-medium lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]"
                      compId="I600:318008;600:317502"
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
                      compId="I600:318008;600:317503"
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
                        compId="I600:318008;600:317503"
                        comWidth={32}
                        comHeight={32}
                        compLeft={20}
                        compRight={0}
                        compType="IconButton"
                        alt="close One"
                      />
                    </Button>
                    <Text
                      className="font-normal lg:ml-[38px] xl:ml-[43px] ml-[49px] 3xl:ml-[58px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                      compId="I600:318008;600:317508"
                      comWidth={46}
                      comHeight={22}
                      compLeft={49}
                      compRight={0}
                      compType="Text"
                    >
                      $120.0
                    </Text>
                  </Row>
                  <Line
                    className="self-center w-[90%] h-[1px] bg-indigo_50"
                    compId="I600:318008;600:317586"
                    comWidth={625}
                    comHeight={1}
                    compLeft={0}
                    compRight={0}
                    compType="Line"
                  />
                  <Row
                    className="bg-white_A700 xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] w-[100%]"
                    compId="I600:318008;600:317518"
                    comWidth={697}
                    comHeight={102}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Img
                      src="images/img_download_bluegray_400_16X16.png"
                      className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[10px] xl:ml-[11px] ml-[13px] 3xl:ml-[15px] lg:mt-[26px] xl:mt-[30px] mt-[34px] 3xl:mt-[40px] lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                      compId="I600:318008;600:317532;1:1488"
                      comWidth={16}
                      comHeight={16}
                      compLeft={13}
                      compRight={0}
                      compType="Image"
                      alt="download Two"
                    />
                    <Img
                      src="images/img_frame_2.png"
                      className="3xl:h-[104px] lg:h-[67px] xl:h-[77px] h-[86px] 2xl:h-[87px] lg:ml-[25px] xl:ml-[29px] ml-[33px] 3xl:ml-[39px] w-[12%]"
                      compId="I600:318008;600:317534"
                      comWidth={80}
                      comHeight={86}
                      compLeft={33}
                      compRight={0}
                      compType="Image"
                      alt="Rectangle Two"
                    />
                    <Column
                      className="lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] w-[20%]"
                      compId="I600:318008;600:317536"
                      comWidth={133}
                      comHeight={58}
                      compLeft={24}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                        compId="I600:318008;600:317538"
                        comWidth={105}
                        comHeight={28}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Trendy Polo
                      </Text>
                      <Text
                        className="font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                        compId="I600:318008;600:317539"
                        comWidth={90}
                        comHeight={22}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Color: Grey, S
                      </Text>
                    </Column>
                    <Text
                      className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                      compId="I600:318008;600:317530"
                      comWidth={46}
                      comHeight={22}
                      compLeft={24}
                      compRight={0}
                      compType="Text"
                    >
                      $120.0
                    </Text>
                    <Column
                      className="border border-indigo_50 border-solid lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] items-center lg:ml-[52px] xl:ml-[59px] ml-[67px] 3xl:ml-[80px] 3xl:px-[10px] lg:px-[7px] xl:px-[8px] px-[9px] lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                      compId="I600:318008;600:317521"
                      comWidth={32}
                      comHeight={32}
                      compLeft={67}
                      compRight={0}
                      compType="Column"
                    >
                      <div
                        className="bg-bluegray_900 h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] rounded-radius50 w-[1px]"
                        compId="I600:318008;600:317523;1:1328"
                        comWidth={1}
                        comHeight={1}
                        compLeft={0}
                        compRight={0}
                        compType="View"
                      ></div>
                    </Column>
                    <Text
                      className="font-medium lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]"
                      compId="I600:318008;600:317525"
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
                      compId="I600:318008;600:317526"
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
                        compId="I600:318008;600:317526"
                        comWidth={32}
                        comHeight={32}
                        compLeft={20}
                        compRight={0}
                        compType="IconButton"
                        alt="close Two"
                      />
                    </Button>
                    <Text
                      className="font-normal lg:ml-[38px] xl:ml-[43px] ml-[49px] 3xl:ml-[58px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                      compId="I600:318008;600:317531"
                      comWidth={46}
                      comHeight={22}
                      compLeft={49}
                      compRight={0}
                      compType="Text"
                    >
                      $120.0
                    </Text>
                  </Row>
                  <Line
                    className="self-center w-[90%] h-[1px] bg-indigo_50"
                    compId="I600:318008;600:317586"
                    comWidth={625}
                    comHeight={1}
                    compLeft={0}
                    compRight={0}
                    compType="Line"
                  />
                  <Row
                    className="bg-white_A700 xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] w-[100%]"
                    compId="I600:318008;600:317541"
                    comWidth={697}
                    comHeight={102}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Img
                      src="images/img_download_bluegray_400_16X16.png"
                      className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[10px] xl:ml-[11px] ml-[13px] 3xl:ml-[15px] lg:mt-[26px] xl:mt-[30px] mt-[34px] 3xl:mt-[40px] lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                      compId="I600:318008;600:317555;1:1488"
                      comWidth={16}
                      comHeight={16}
                      compLeft={13}
                      compRight={0}
                      compType="Image"
                      alt="download Three"
                    />
                    <Img
                      src="images/img_frame_5.png"
                      className="3xl:h-[104px] lg:h-[67px] xl:h-[77px] h-[86px] 2xl:h-[87px] lg:ml-[25px] xl:ml-[29px] ml-[33px] 3xl:ml-[39px] w-[12%]"
                      compId="I600:318008;600:317557"
                      comWidth={80}
                      comHeight={86}
                      compLeft={33}
                      compRight={0}
                      compType="Image"
                      alt="Rectangle Three"
                    />
                    <Column
                      className="lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] w-[20%]"
                      compId="I600:318008;600:317559"
                      comWidth={133}
                      comHeight={58}
                      compLeft={24}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                        compId="I600:318008;600:317561"
                        comWidth={89}
                        comHeight={28}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Over Shirt
                      </Text>
                      <Text
                        className="font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                        compId="I600:318008;600:317562"
                        comWidth={90}
                        comHeight={22}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Color: Grey, S
                      </Text>
                    </Column>
                    <Text
                      className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                      compId="I600:318008;600:317553"
                      comWidth={46}
                      comHeight={22}
                      compLeft={24}
                      compRight={0}
                      compType="Text"
                    >
                      $120.0
                    </Text>
                    <Column
                      className="border border-indigo_50 border-solid lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] items-center lg:ml-[52px] xl:ml-[59px] ml-[67px] 3xl:ml-[80px] 3xl:px-[10px] lg:px-[7px] xl:px-[8px] px-[9px] lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                      compId="I600:318008;600:317544"
                      comWidth={32}
                      comHeight={32}
                      compLeft={67}
                      compRight={0}
                      compType="Column"
                    >
                      <div
                        className="bg-bluegray_900 h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] rounded-radius50 w-[1px]"
                        compId="I600:318008;600:317546;1:1328"
                        comWidth={1}
                        comHeight={1}
                        compLeft={0}
                        compRight={0}
                        compType="View"
                      ></div>
                    </Column>
                    <Text
                      className="font-medium lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]"
                      compId="I600:318008;600:317548"
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
                      compId="I600:318008;600:317549"
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
                        compId="I600:318008;600:317549"
                        comWidth={32}
                        comHeight={32}
                        compLeft={20}
                        compRight={0}
                        compType="IconButton"
                        alt="close Three"
                      />
                    </Button>
                    <Text
                      className="font-normal lg:ml-[38px] xl:ml-[43px] ml-[49px] 3xl:ml-[58px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                      compId="I600:318008;600:317554"
                      comWidth={46}
                      comHeight={22}
                      compLeft={49}
                      compRight={0}
                      compType="Text"
                    >
                      $120.0
                    </Text>
                  </Row>
                  <Line
                    className="self-center w-[90%] h-[1px] bg-indigo_50"
                    compId="I600:318008;600:317586"
                    comWidth={625}
                    comHeight={1}
                    compLeft={0}
                    compRight={0}
                    compType="Line"
                  />
                  <Row
                    className="bg-white_A700 xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] w-[100%]"
                    compId="I600:318008;600:317564"
                    comWidth={697}
                    comHeight={102}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Img
                      src="images/img_download_bluegray_400_16X16.png"
                      className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[10px] xl:ml-[11px] ml-[13px] 3xl:ml-[15px] lg:mt-[26px] xl:mt-[30px] mt-[34px] 3xl:mt-[40px] lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                      compId="I600:318008;600:317578;1:1488"
                      comWidth={16}
                      comHeight={16}
                      compLeft={13}
                      compRight={0}
                      compType="Image"
                      alt="download Four"
                    />
                    <Img
                      src="images/img_frame_353X273.png"
                      className="3xl:h-[104px] lg:h-[67px] xl:h-[77px] h-[86px] 2xl:h-[87px] lg:ml-[25px] xl:ml-[29px] ml-[33px] 3xl:ml-[39px] w-[12%]"
                      compId="I600:318008;600:317580"
                      comWidth={80}
                      comHeight={86}
                      compLeft={33}
                      compRight={0}
                      compType="Image"
                      alt="Rectangle Four"
                    />
                    <Column
                      className="lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] w-[20%]"
                      compId="I600:318008;600:317582"
                      comWidth={133}
                      comHeight={58}
                      compLeft={24}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                        compId="I600:318008;600:317584"
                        comWidth={99}
                        comHeight={28}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Avo T-Shirt
                      </Text>
                      <Text
                        className="font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                        compId="I600:318008;600:317585"
                        comWidth={90}
                        comHeight={22}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Color: Grey, S
                      </Text>
                    </Column>
                    <Text
                      className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                      compId="I600:318008;600:317576"
                      comWidth={46}
                      comHeight={22}
                      compLeft={24}
                      compRight={0}
                      compType="Text"
                    >
                      $120.0
                    </Text>
                    <Column
                      className="border border-indigo_50 border-solid lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] items-center lg:ml-[52px] xl:ml-[59px] ml-[67px] 3xl:ml-[80px] 3xl:px-[10px] lg:px-[7px] xl:px-[8px] px-[9px] lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                      compId="I600:318008;600:317567"
                      comWidth={32}
                      comHeight={32}
                      compLeft={67}
                      compRight={0}
                      compType="Column"
                    >
                      <div
                        className="bg-bluegray_900 h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] rounded-radius50 w-[1px]"
                        compId="I600:318008;600:317569;1:1328"
                        comWidth={1}
                        comHeight={1}
                        compLeft={0}
                        compRight={0}
                        compType="View"
                      ></div>
                    </Column>
                    <Text
                      className="font-medium lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]"
                      compId="I600:318008;600:317571"
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
                      compId="I600:318008;600:317572"
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
                        compId="I600:318008;600:317572"
                        comWidth={32}
                        comHeight={32}
                        compLeft={20}
                        compRight={0}
                        compType="IconButton"
                        alt="close Four"
                      />
                    </Button>
                    <Text
                      className="font-normal lg:ml-[38px] xl:ml-[43px] ml-[49px] 3xl:ml-[58px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                      compId="I600:318008;600:317577"
                      comWidth={46}
                      comHeight={22}
                      compLeft={49}
                      compRight={0}
                      compType="Text"
                    >
                      $120.0
                    </Text>
                  </Row>
                  <Line
                    className="self-center w-[90%] h-[1px] bg-indigo_50"
                    compId="I600:318008;600:317586"
                    comWidth={625}
                    comHeight={1}
                    compLeft={0}
                    compRight={0}
                    compType="Line"
                  />
                  <Row
                    className="bg-white_A700 xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] w-[100%]"
                    compId="I600:318008;600:317587"
                    comWidth={697}
                    comHeight={102}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Img
                      src="images/img_download_bluegray_400_16X16.png"
                      className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[10px] xl:ml-[11px] ml-[13px] 3xl:ml-[15px] lg:mt-[26px] xl:mt-[30px] mt-[34px] 3xl:mt-[40px] lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                      compId="I600:318008;600:317601;1:1488"
                      comWidth={16}
                      comHeight={16}
                      compLeft={13}
                      compRight={0}
                      compType="Image"
                      alt="download Five"
                    />
                    <Img
                      src="images/img_frame_4.png"
                      className="3xl:h-[104px] lg:h-[67px] xl:h-[77px] h-[86px] 2xl:h-[87px] lg:ml-[25px] xl:ml-[29px] ml-[33px] 3xl:ml-[39px] w-[12%]"
                      compId="I600:318008;600:317603"
                      comWidth={80}
                      comHeight={86}
                      compLeft={33}
                      compRight={0}
                      compType="Image"
                      alt="Rectangle Five"
                    />
                    <Column
                      className="lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] w-[20%]"
                      compId="I600:318008;600:317605"
                      comWidth={133}
                      comHeight={58}
                      compLeft={24}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                        compId="I600:318008;600:317607"
                        comWidth={68}
                        comHeight={28}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Bomber
                      </Text>
                      <Text
                        className="font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                        compId="I600:318008;600:317608"
                        comWidth={90}
                        comHeight={22}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Color: Grey, S
                      </Text>
                    </Column>
                    <Text
                      className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                      compId="I600:318008;600:317599"
                      comWidth={46}
                      comHeight={22}
                      compLeft={24}
                      compRight={0}
                      compType="Text"
                    >
                      $120.0
                    </Text>
                    <Column
                      className="border border-indigo_50 border-solid lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] items-center lg:ml-[52px] xl:ml-[59px] ml-[67px] 3xl:ml-[80px] 3xl:px-[10px] lg:px-[7px] xl:px-[8px] px-[9px] lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                      compId="I600:318008;600:317590"
                      comWidth={32}
                      comHeight={32}
                      compLeft={67}
                      compRight={0}
                      compType="Column"
                    >
                      <div
                        className="bg-bluegray_900 h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] rounded-radius50 w-[1px]"
                        compId="I600:318008;600:317592;1:1328"
                        comWidth={1}
                        comHeight={1}
                        compLeft={0}
                        compRight={0}
                        compType="View"
                      ></div>
                    </Column>
                    <Text
                      className="font-medium lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]"
                      compId="I600:318008;600:317594"
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
                      compId="I600:318008;600:317595"
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
                        compId="I600:318008;600:317595"
                        comWidth={32}
                        comHeight={32}
                        compLeft={20}
                        compRight={0}
                        compType="IconButton"
                        alt="close Five"
                      />
                    </Button>
                    <Text
                      className="font-normal lg:ml-[38px] xl:ml-[43px] ml-[49px] 3xl:ml-[58px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                      compId="I600:318008;600:317600"
                      comWidth={46}
                      comHeight={22}
                      compLeft={49}
                      compRight={0}
                      compType="Text"
                    >
                      $120.0
                    </Text>
                  </Row>
                </List>
              </Column>
              <Column
                className="items-center w-[32%]"
                compId="975"
                comWidth={370}
                comHeight={660}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Column
                  className="bg-white_A700 lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs1 w-[100%]"
                  compId="600:318009"
                  comWidth={370}
                  comHeight={196}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                    compId="I600:318009;600:317641"
                    comWidth={66}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Promotion
                  </Text>
                  <Input
                    className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                    wrapClassName="3xl:mt-[9px] lg:mt-[6px] mt-[8px] w-[100%] xl:mt-[7px]"
                    compId="180"
                    comWidth={306}
                    comHeight={56}
                    compLeft={0}
                    compRight={0}
                    compType="EditText"
                    name="Group180"
                    placeholder="Enter code"
                  ></Input>
                  <Row
                    className="items-center lg:ml-[36px] xl:ml-[41px] ml-[47px] 3xl:ml-[56px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[58%]"
                    compId="I600:318009;600:317642"
                    comWidth={179}
                    comHeight={22}
                    compLeft={47}
                    compRight={0}
                    compType="Row"
                  >
                    <Img
                      src="images/img_offer.png"
                      className="lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] lg:w-[13px] xl:w-[15px] w-[17px] 3xl:w-[20px]"
                      compId="I600:318009;600:317643;1:1518"
                      comWidth={17}
                      comHeight={17}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="offer"
                    />
                    <Text
                      className="font-medium lg:ml-[10px] xl:ml-[11px] ml-[13px] 3xl:ml-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-indigo_401 w-[auto]"
                      compId="I600:318009;600:317644"
                      comWidth={148}
                      comHeight={22}
                      compLeft={13}
                      compRight={0}
                      compType="Text"
                    >
                      Click to find Promotion
                    </Text>
                  </Row>
                </Column>
                <Column
                  className="bg-white_A700 items-center lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs1 w-[100%]"
                  compId="600:318010"
                  comWidth={370}
                  comHeight={444}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="items-center justify-between w-[100%]"
                    compId="I600:318010;600:317653"
                    comWidth={305}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                      compId="I600:318010;600:317654"
                      comWidth={38}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Price
                    </Text>
                    <Text
                      className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                      compId="I600:318010;600:317655"
                      comWidth={53}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      $120.0
                    </Text>
                  </Row>
                  <Row
                    className="items-center justify-between lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]"
                    compId="I600:318010;600:317656"
                    comWidth={306}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                      compId="I600:318010;600:317657"
                      comWidth={95}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Shipping fee
                    </Text>
                    <Text
                      className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                      compId="I600:318010;600:317658"
                      comWidth={20}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      $0
                    </Text>
                  </Row>
                  <Line
                    className="bg-indigo_50 h-[1px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[1px]"
                    compId="I600:318010;600:317659"
                    comWidth={1}
                    comHeight={1}
                    compLeft={0}
                    compRight={0}
                    compType="Line"
                  />
                  <Row
                    className="justify-between lg:mt-[24px] xl:mt-[27px] mt-[31px] 3xl:mt-[37px] w-[100%]"
                    compId="I600:318010;600:317661"
                    comWidth={305}
                    comHeight={28}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                      compId="I600:318010;600:317662"
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
                      compId="I600:318010;600:317663"
                      comWidth={59}
                      comHeight={28}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      $120.0
                    </Text>
                  </Row>
                  <Button
                    className="font-bold lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[100%]"
                    compId="I600:318010;600:317665"
                    comWidth={306}
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
                    className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[100%]"
                    compId="I600:318010;600:317666"
                    comWidth={306}
                    comHeight={48}
                    compLeft={0}
                    compRight={0}
                    compType="Button"
                    shape="CircleBorder24"
                    size="lg"
                    variant="FillGray50"
                  >
                    Scan QR code
                  </Button>
                  <Text
                    className="font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 text-center w-[97%]"
                    compId="I600:318010;600:317667"
                    comWidth={297}
                    comHeight={44}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    By clicking “Purchase” button, I agree with RiriBa Term and
                    Policy
                  </Text>
                </Column>
              </Column>
            </Row>
          </Column>
        </Column>
        <Line
          className="absolute bg-indigo_50 h-[1071px] 2xl:h-[1072px] 3xl:h-[1286px] lg:h-[833px] xl:h-[953px] left-[17%] w-[1px]"
          compId="600:318012"
          comWidth={1}
          comHeight={1071}
          compLeft={241}
          compRight={0}
          compType="Line"
        />
        <aside className="absolute bottom-[0] items-center left-[0] w-[17%]">
          <Column
            className=""
            compId="619"
            comWidth={241}
            comHeight={1011}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Column
              className="bg-white_A700 justify-center lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] w-[100%]"
              compId="614:13783"
              comWidth={241}
              comHeight={1011}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-center lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[62%]"
                compId="I614:13783;41:948"
                comWidth={109}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_menu_bluegray_400_20X20.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I614:13783;531:321438"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="menu"
                />
                <Text
                  className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I614:13783;41:950"
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
                compId="I614:13783;41:951"
                comWidth={100}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_user_bluegray_400.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I614:13783;531:322607"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="user One"
                />
                <Text
                  className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I614:13783;41:953"
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
                compId="I614:13783;43809:15240"
                comWidth={155}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_icon.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] mt-[1px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I614:13783;41:955"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Icon"
                />
                <Text
                  className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] mt-[1px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I614:13783;41:956"
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
                  compId="I614:13783;235:259292"
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
                compId="I614:13783;41:957"
                comWidth={57}
                comHeight={22}
                compLeft={1}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_folder_bluegray_400.png"
                  className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] w-[32%]"
                  compId="I614:13783;533:294113;531:320466"
                  comWidth={18}
                  comHeight={16}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="folder"
                />
                <Text
                  className="flex font-medium items-center lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I614:13783;41:959"
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
                compId="I614:13783;41:960"
                comWidth={95}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_settings.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I614:13783;41:961"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="settings"
                />
                <Text
                  className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I614:13783;41:962"
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
                compId="I614:13783;41:963"
                comWidth={70}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_cart.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I614:13783;41:964"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="cart One"
                />
                <Text
                  className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I614:13783;41:965"
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
                compId="I614:13783;41:966"
                comWidth={62}
                comHeight={22}
                compLeft={1}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_vector_deep_orange_300.png"
                  className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] w-[26%]"
                  compId="I614:13783;614:13885;531:321411"
                  comWidth={16}
                  comHeight={18}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Vector Seven"
                />
                <Text
                  className="font-medium lg:ml-[13px] xl:ml-[15px] ml-[17px] 3xl:ml-[20px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                  compId="I614:13783;41:968"
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
                value="Settings9"
                className="font-medium lg:mb-[419px] xl:mb-[479px] mb-[539px] 3xl:mb-[647px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400"
                inputClassName="h-[20px] mr-[5px] w-[20px]"
                compId="I614:13783;531:316827"
                comWidth={91}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Radio"
                checked={false}
                name="Settings One"
                label="Settings9"
                variant="illBluegray400"
              ></Radio>
            </Column>
          </Column>
        </aside>
      </Stack>
    </>
  );
};

export default CartProductListOnePage;
