import React from "react";

import {
  Stack,
  Column,
  Row,
  Img,
  Text,
  Input,
  Button,
  Line,
  Radio,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const CheckoutOnePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Stack
        className="bg-white_A700 font-inter 3xl:h-[1189px] lg:h-[770px] xl:h-[881px] h-[990px] 2xl:h-[991px] mx-[auto] w-[100%]"
        compId="600:393741"
        comWidth={1440}
        comHeight={990}
        compLeft={0}
        compRight={0}
        compType="Stack"
      >
        <Column
          className="absolute items-end w-[100%]"
          compId="1395"
          comWidth={1440}
          comHeight={990}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Row
            className="bg-white_A700 items-center justify-end p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] w-[100%]"
            compId="600:393792"
            comWidth={1440}
            comHeight={60}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Img
              src="images/img_microphone.png"
              className="lg:h-[22px] xl:h-[25px] h-[28px] 2xl:h-[29px] 3xl:h-[34px] w-[1%]"
              compId="I600:393792;43807:13258"
              comWidth={21}
              comHeight={28}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="microphone"
            />
            <Text
              className="font-medium lg:ml-[169px] xl:ml-[193px] ml-[218px] 3xl:ml-[261px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
              compId="I600:393792;234:259667"
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
              compId="I600:393792;234:259514"
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
                  compId="I600:393792;234:259514;234:259505"
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
              compId="I600:393792;531:315836;5:32"
              comWidth={20}
              comHeight={22}
              compLeft={136}
              compRight={0}
              compType="Image"
              alt="Vector"
            />
            <Stack
              className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] w-[9%]"
              compId="1393"
              comWidth={126}
              comHeight={24}
              compLeft={29}
              compRight={0}
              compType="Stack"
            >
              <Img
                src="images/img_user_bluegray_900.png"
                className="absolute lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] inset-y-[0] left-[0] my-[auto] w-[14%]"
                compId="I600:393792;37:1285;37:1283"
                comWidth={18}
                comHeight={20}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="user"
              />
              <Row
                className="absolute right-[0] w-[90%]"
                compId="739"
                comWidth={113}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <div
                  className="bg-red_600 3xl:h-[10px] lg:h-[7px] h-[8px] 2xl:h-[9px] mt-[1px] outline outline-[2px] outline-white_A700 rounded-radius50 lg:w-[6px] xl:w-[7px] w-[8px] 3xl:w-[9px]"
                  compId="I600:393792;530:301660"
                  comWidth={8}
                  comHeight={8}
                  compLeft={0}
                  compRight={0}
                  compType="View"
                ></div>
                <Text
                  className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_500 w-[auto]"
                  compId="I600:393792;37:1272"
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
              compId="I600:393792;483:292004;43812:47214"
              comWidth={40}
              comHeight={40}
              compLeft={13}
              compRight={13}
              compType="CircleImage"
              alt="SherlockToyFa"
            />
          </Row>
          <Column
            className="bg-gray_50 items-center lg:p-[18px] xl:p-[21px] p-[24px] 3xl:p-[28px] w-[83%]"
            compId="600:393742"
            comWidth={1199}
            comHeight={930}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="justify-between lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[98%]"
              compId="1396"
              comWidth={1133}
              comHeight={32}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Text
                className="font-medium font-poppins lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]"
                compId="600:393743"
                comWidth={97}
                comHeight={32}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                Checkout
              </Text>
              <Text
                className="font-inter font-normal lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                compId="600:393747"
                comWidth={297}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                <span className="text-bluegray_400">Shop Central/</span>
                <span className="text-bluegray_800"> </span>
                <span className="text-bluegray_400">Product detail/</span>
                <span className="text-bluegray_800"> Checkout</span>
              </Text>
            </Row>
            <Stack
              className="lg:h-[624px] xl:h-[714px] h-[802px] 2xl:h-[803px] 3xl:h-[963px] lg:mb-[5px] xl:mb-[6px] mb-[7px] 3xl:mb-[8px] lg:mt-[25px] xl:mt-[29px] mt-[33px] 3xl:mt-[39px] w-[98%]"
              compId="1392"
              comWidth={1133}
              comHeight={802}
              compLeft={0}
              compRight={0}
              compType="Stack"
            >
              <Column
                className="absolute bottom-[0] left-[5%] w-[5%]"
                compId="600:393744"
                comWidth={55}
                comHeight={52}
                compLeft={54}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-normal ml-[3px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                  compId="600:393745"
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
                  compId="600:393746"
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
                className="absolute bg-white_A700 items-center p-[111px] 3xl:p-[133px] lg:p-[86px] xl:p-[98px] rounded-radius4 shadow-bs1 w-[100%]"
                compId="600:393748"
                comWidth={1133}
                comHeight={802}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Img
                  src="images/img_group18037.png"
                  className="lg:h-[162px] xl:h-[186px] h-[208px] 2xl:h-[209px] 3xl:h-[250px] w-[27%]"
                  compId="43815:56002"
                  comWidth={247}
                  comHeight={208}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Group18037"
                />
                <Text
                  className="font-bold lg:mt-[50px] xl:mt-[57px] mt-[65px] 3xl:mt-[78px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_900 w-[auto]"
                  compId="600:393753"
                  comWidth={390}
                  comHeight={32}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  Congratulate! Order successfully
                </Text>
                <Text
                  className="font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 text-center w-[56%]"
                  compId="600:393754"
                  comWidth={507}
                  comHeight={44}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  Your order receipt has been sent to your mail:
                  sambrown@gmail.com. Please check your mail
                </Text>
                <Button
                  className="font-bold lg:mb-[111px] xl:mb-[127px] mb-[143px] 3xl:mb-[171px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[23%]"
                  compId="600:393755"
                  comWidth={207}
                  comHeight={48}
                  compLeft={0}
                  compRight={0}
                  compType="Button"
                  shape="CircleBorder24"
                  size="lg"
                  variant="FillDeeporange300"
                >
                  Review product
                </Button>
              </Column>
            </Stack>
          </Column>
        </Column>
        <aside className="absolute items-center left-[0] top-[0] w-[17%]">
          <Column
            className=""
            compId="737"
            comWidth={242}
            comHeight={750}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-end justify-evenly w-[100%]"
              compId="736"
              comWidth={242}
              comHeight={750}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Stack
                className="lg:h-[537px] xl:h-[614px] h-[690px] 2xl:h-[691px] 3xl:h-[829px] lg:mt-[46px] xl:mt-[53px] mt-[60px] 3xl:mt-[72px] w-[100%]"
                compId="1394"
                comWidth={241}
                comHeight={690}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Line
                  className="absolute bg-indigo_50 lg:h-[537px] xl:h-[614px] h-[690px] 2xl:h-[691px] 3xl:h-[829px] right-[9%] w-[1px]"
                  compId="600:393793"
                  comWidth={1}
                  comHeight={690}
                  compLeft={0}
                  compRight={21}
                  compType="Line"
                />
                <Column
                  className="absolute bg-white_A700 justify-center lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] w-[100%]"
                  compId="600:393794"
                  comWidth={241}
                  comHeight={690}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="items-center lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[62%]"
                    compId="I600:393794;41:948"
                    comWidth={109}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Img
                      src="images/img_grid.png"
                      className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                      compId="I600:393794;531:321438"
                      comWidth={20}
                      comHeight={20}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="grid"
                    />
                    <Text
                      className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                      compId="I600:393794;41:950"
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
                    compId="I600:393794;41:951"
                    comWidth={100}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Img
                      src="images/img_user_bluegray_400.png"
                      className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                      compId="I600:393794;531:322607"
                      comWidth={20}
                      comHeight={20}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="user One"
                    />
                    <Text
                      className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                      compId="I600:393794;41:953"
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
                    compId="I600:393794;43809:15240"
                    comWidth={155}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Img
                      src="images/img_icon.png"
                      className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] mt-[1px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                      compId="I600:393794;41:955"
                      comWidth={20}
                      comHeight={20}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Icon"
                    />
                    <Text
                      className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] mt-[1px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                      compId="I600:393794;41:956"
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
                      compId="I600:393794;235:259292"
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
                    compId="I600:393794;41:957"
                    comWidth={57}
                    comHeight={22}
                    compLeft={1}
                    compRight={0}
                    compType="Row"
                  >
                    <Img
                      src="images/img_folder_bluegray_400.png"
                      className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] w-[32%]"
                      compId="I600:393794;533:294113;531:320466"
                      comWidth={18}
                      comHeight={16}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="folder"
                    />
                    <Text
                      className="flex font-medium items-center lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                      compId="I600:393794;41:959"
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
                    compId="I600:393794;41:960"
                    comWidth={95}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Img
                      src="images/img_settings.png"
                      className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                      compId="I600:393794;41:961"
                      comWidth={20}
                      comHeight={20}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="settings"
                    />
                    <Text
                      className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                      compId="I600:393794;41:962"
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
                    compId="I600:393794;41:963"
                    comWidth={68}
                    comHeight={22}
                    compLeft={1}
                    compRight={0}
                    compType="Row"
                  >
                    <Img
                      src="images/img_trash.png"
                      className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] mt-[1px] lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                      compId="I600:393794;41:964;485:292315"
                      comWidth={16}
                      comHeight={16}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="trash"
                    />
                    <Text
                      className="font-medium lg:ml-[13px] xl:ml-[15px] ml-[17px] 3xl:ml-[20px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                      compId="I600:393794;41:965"
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
                    compId="I600:393794;41:966"
                    comWidth={62}
                    comHeight={22}
                    compLeft={1}
                    compRight={0}
                    compType="Row"
                  >
                    <Img
                      src="images/img_vector_bluegray_400.png"
                      className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] w-[26%]"
                      compId="I600:393794;614:13885;531:320955"
                      comWidth={16}
                      comHeight={18}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Vector One"
                    />
                    <Text
                      className="font-medium lg:ml-[13px] xl:ml-[15px] ml-[17px] 3xl:ml-[20px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                      compId="I600:393794;41:968"
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
                    value="Settings22"
                    className="font-medium lg:mb-[169px] xl:mb-[193px] mb-[218px] 3xl:mb-[261px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400"
                    inputClassName="h-[20px] mr-[5px] w-[20px]"
                    compId="I600:393794;531:316827"
                    comWidth={91}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Radio"
                    checked={false}
                    name="Settings One"
                    label="Settings22"
                    variant="illBluegray400"
                  ></Radio>
                </Column>
              </Stack>
              <Line
                className="bg-indigo_50 lg:h-[584px] xl:h-[668px] h-[750px] 2xl:h-[751px] 3xl:h-[901px] w-[1px]"
                compId="600:393795"
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

export default CheckoutOnePage;
