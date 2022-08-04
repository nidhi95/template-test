import React from "react";

import {
  Stack,
  Column,
  Row,
  Img,
  Text,
  Input,
  SelectBox,
  TextArea,
  Button,
  Line,
  Radio,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const AddProductPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Stack
        className="bg-white_A700 font-inter h-[1064px] 2xl:h-[1065px] 3xl:h-[1278px] lg:h-[828px] xl:h-[947px] mx-[auto] w-[100%]"
        compId="600:318286"
        comWidth={1440}
        comHeight={1064}
        compLeft={0}
        compRight={0}
        compType="Stack"
      >
        <Column
          className="absolute items-end w-[100%]"
          compId="962"
          comWidth={1440}
          comHeight={1064}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Row
            className="bg-white_A700 items-center justify-end p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] w-[100%]"
            compId="600:318293"
            comWidth={1440}
            comHeight={60}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Img
              src="images/img_microphone.png"
              className="lg:h-[22px] xl:h-[25px] h-[28px] 2xl:h-[29px] 3xl:h-[34px] w-[1%]"
              compId="I600:318293;43807:13258"
              comWidth={21}
              comHeight={28}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="microphone"
            />
            <Text
              className="font-medium lg:ml-[169px] xl:ml-[193px] ml-[218px] 3xl:ml-[261px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
              compId="I600:318293;234:259667"
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
              compId="I600:318293;234:259514"
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
                  compId="I600:318293;234:259514;234:259505"
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
              compId="I600:318293;531:315836;5:32"
              comWidth={20}
              comHeight={22}
              compLeft={136}
              compRight={0}
              compType="Image"
              alt="Vector"
            />
            <Stack
              className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] w-[9%]"
              compId="961"
              comWidth={126}
              comHeight={24}
              compLeft={29}
              compRight={0}
              compType="Stack"
            >
              <Img
                src="images/img_user_bluegray_900.png"
                className="absolute lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] inset-y-[0] left-[0] my-[auto] w-[14%]"
                compId="I600:318293;37:1285;37:1283"
                comWidth={18}
                comHeight={20}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="user"
              />
              <Row
                className="absolute right-[0] w-[90%]"
                compId="617"
                comWidth={113}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <div
                  className="bg-red_600 3xl:h-[10px] lg:h-[7px] h-[8px] 2xl:h-[9px] mt-[1px] outline outline-[2px] outline-white_A700 rounded-radius50 lg:w-[6px] xl:w-[7px] w-[8px] 3xl:w-[9px]"
                  compId="I600:318293;530:301660"
                  comWidth={8}
                  comHeight={8}
                  compLeft={0}
                  compRight={0}
                  compType="View"
                ></div>
                <Text
                  className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_500 w-[auto]"
                  compId="I600:318293;37:1272"
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
              compId="I600:318293;483:292004;43812:47214"
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
            compId="600:318287"
            comWidth={1199}
            comHeight={1004}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="justify-between lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[100%]"
              compId="967"
              comWidth={1151}
              comHeight={32}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Text
                className="font-medium font-poppins lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]"
                compId="600:318288"
                comWidth={125}
                comHeight={32}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                Add Product
              </Text>
              <Text
                className="font-inter font-normal lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                compId="600:318289"
                comWidth={194}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                <span className="text-bluegray_400">Ecommerce/</span>
                <span className="text-bluegray_800"> Add Product</span>
              </Text>
            </Row>
            <Column
              className="bg-white_A700 lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs1 w-[100%]"
              compId="600:318290"
              comWidth={1151}
              comHeight={430}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                compId="I600:318290;600:317881"
                comWidth={153}
                comHeight={28}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                Basic information
              </Text>
              <Row
                className="items-center lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]"
                compId="963"
                comWidth={1087}
                comHeight={86}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Column
                  className="w-[62%]"
                  compId="I600:318290;600:317882"
                  comWidth={673}
                  comHeight={86}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                    compId="I600:318290;600:317886"
                    comWidth={92}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Product name
                  </Text>
                  <Input
                    className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                    wrapClassName="3xl:mt-[9px] lg:mt-[6px] mt-[8px] w-[92%] xl:mt-[7px]"
                    compId="173"
                    type="text"
                    comWidth={619}
                    comHeight={56}
                    compLeft={0}
                    compRight={0}
                    compType="EditText"
                    name="Group173"
                    placeholder="Enter product’s name"
                  ></Input>
                </Column>
                <Column
                  className="w-[38%]"
                  compId="I600:318290;600:317902"
                  comWidth={414}
                  comHeight={86}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                    compId="I600:318290;600:317906"
                    comWidth={104}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Select category
                  </Text>
                  <SelectBox
                    className="bg-transparent font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[100%]"
                    compId="177"
                    comWidth={414}
                    comHeight={56}
                    compLeft={0}
                    compRight={0}
                    compType="Dropdown"
                    placeholderClassName="bg-transparent text-bluegray_800"
                    name="Group177"
                    placeholder="Data project"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown.png"
                        className="w-[11.67px] h-[6.67px] mr-[24px] lg:w-[9px] lg:h-[6px] lg:mr-[18px] xl:w-[10px] xl:h-[6px] xl:mr-[21px] 2xl:w-[11px] 2xl:h-[7px] 3xl:w-[14px] 3xl:h-[9px] 3xl:mr-[28px]"
                        compId="I600:318290;600:317904;1:1053"
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
                </Column>
              </Row>
              <Row
                className="items-center lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]"
                compId="966"
                comWidth={1087}
                comHeight={196}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Column
                  className="w-[62%]"
                  compId="965"
                  comWidth={673}
                  comHeight={196}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                    compId="I600:318290;600:317891"
                    comWidth={46}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Branch
                  </Text>
                  <Input
                    className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                    wrapClassName="3xl:mt-[9px] lg:mt-[6px] mt-[8px] w-[92%] xl:mt-[7px]"
                    compId="174"
                    comWidth={619}
                    comHeight={56}
                    compLeft={0}
                    compRight={0}
                    compType="EditText"
                    name="Group174"
                    placeholder="Enter brach"
                  ></Input>
                  <Text
                    className="font-medium lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                    compId="I600:318290;600:317896"
                    comWidth={33}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Price
                  </Text>
                  <Input
                    className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                    wrapClassName="3xl:mt-[9px] lg:mt-[6px] mt-[8px] w-[92%] xl:mt-[7px]"
                    compId="175"
                    comWidth={619}
                    comHeight={56}
                    compLeft={0}
                    compRight={0}
                    compType="EditText"
                    name="Group175"
                    placeholder="Enter brach"
                  ></Input>
                </Column>
                <Column
                  className="w-[38%]"
                  compId="I600:318290;600:317897"
                  comWidth={414}
                  comHeight={196}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                    compId="I600:318290;600:317901"
                    comWidth={130}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Product description
                  </Text>
                  <TextArea
                    className="font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                    compId="176"
                    comWidth={414}
                    comHeight={166}
                    compLeft={0}
                    compRight={0}
                    compType="TextArea"
                    name="Group176"
                    placeholder="Write something..."
                  ></TextArea>
                </Column>
              </Row>
            </Column>
            <Row
              className="items-center justify-between mb-[4px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]"
              compId="968"
              comWidth={1151}
              comHeight={430}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Column
                className="bg-white_A700 lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs1 w-[49%]"
                compId="600:318291"
                comWidth={566}
                comHeight={430}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                  compId="I600:318291;600:317909"
                  comWidth={127}
                  comHeight={28}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  Product image
                </Text>
                <Column
                  className="border-2 border-dashed border-indigo_50 items-center justify-end lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] 3xl:p-[104px] lg:p-[67px] xl:p-[77px] p-[87px] rounded-radius4 w-[100%]"
                  compId="I600:318291;43814:54171"
                  comWidth={502}
                  comHeight={306}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <div
                    className="bg-bluegray_900 lg:h-[18px] xl:h-[21px] h-[23px] 2xl:h-[24px] 3xl:h-[28px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] rounded-radius50 lg:w-[17px] xl:w-[20px] w-[23px] 3xl:w-[27px]"
                    compId="I600:318291;600:317912;1:1794"
                    comWidth={23}
                    comHeight={23}
                    compLeft={0}
                    compRight={0}
                    compType="View"
                  ></div>
                  <Text
                    className="font-bold lg:mt-[32px] xl:mt-[37px] mt-[42px] 3xl:mt-[50px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                    compId="I600:318291;600:317914"
                    comWidth={107}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Upload image
                  </Text>
                  <Text
                    className="font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                    compId="I600:318291;600:317915"
                    comWidth={193}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Drag or click to upload image
                  </Text>
                </Column>
              </Column>
              <Column
                className="bg-white_A700 lg:p-[20px] xl:p-[23px] p-[26px] 3xl:p-[31px] rounded-radius4 shadow-bs1 w-[49%]"
                compId="600:318292"
                comWidth={565}
                comHeight={430}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]"
                  compId="I600:318292;600:317918"
                  comWidth={70}
                  comHeight={28}
                  compLeft={6}
                  compRight={0}
                  compType="Text"
                >
                  Add link
                </Text>
                <Column
                  className="lg:mb-[4px] xl:mb-[5px] mb-[6px] 3xl:mb-[7px] lg:mr-[4px] xl:mr-[5px] mr-[6px] 3xl:mr-[7px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[99%]"
                  compId="971"
                  comWidth={507}
                  comHeight={306}
                  compLeft={0}
                  compRight={6}
                  compType="Column"
                >
                  <Text
                    className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                    compId="I600:318292;600:317923"
                    comWidth={83}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Product Link
                  </Text>
                  <Input
                    className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                    wrapClassName="3xl:mt-[9px] lg:mt-[6px] mt-[8px] w-[100%] xl:mt-[7px]"
                    compId="178"
                    comWidth={507}
                    comHeight={56}
                    compLeft={0}
                    compRight={0}
                    compType="EditText"
                    name="Group178"
                    placeholder="Enter link"
                  ></Input>
                  <Text
                    className="font-medium lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                    compId="I600:318292;600:317928"
                    comWidth={56}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Hashtag
                  </Text>
                  <Input
                    className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                    wrapClassName="3xl:mt-[9px] lg:mt-[6px] mt-[8px] w-[100%] xl:mt-[7px]"
                    compId="179"
                    comWidth={507}
                    comHeight={56}
                    compLeft={0}
                    compRight={0}
                    compType="EditText"
                    name="Group179"
                    placeholder="Enter tag"
                  ></Input>
                  <Row
                    className="items-center justify-end ml-[auto] lg:mt-[48px] xl:mt-[55px] mt-[62px] 3xl:mt-[74px] w-[62%]"
                    compId="I600:318292;600:317929"
                    comWidth={312}
                    comHeight={48}
                    compLeft={195}
                    compRight={0}
                    compType="Row"
                  >
                    <Button
                      className="font-bold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[47%]"
                      compId="I600:318292;600:317930"
                      comWidth={148}
                      comHeight={48}
                      compLeft={0}
                      compRight={0}
                      compType="Button"
                      shape="CircleBorder24"
                      size="lg"
                      variant="FillDeeporange300"
                    >
                      Save
                    </Button>
                    <Button
                      className="font-normal lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[47%]"
                      compId="I600:318292;600:317931"
                      comWidth={148}
                      comHeight={48}
                      compLeft={16}
                      compRight={0}
                      compType="Button"
                      shape="CircleBorder24"
                      size="lg"
                      variant="FillGray50"
                    >
                      Cancel
                    </Button>
                  </Row>
                </Column>
              </Column>
            </Row>
          </Column>
        </Column>
        <Line
          className="absolute bg-indigo_50 lg:h-[537px] xl:h-[614px] h-[690px] 2xl:h-[691px] 3xl:h-[829px] left-[15%] top-[6%] w-[1px]"
          compId="600:318294"
          comWidth={1}
          comHeight={690}
          compLeft={219}
          compRight={0}
          compType="Line"
        />
        <Line
          className="absolute bg-indigo_50 lg:h-[584px] xl:h-[668px] h-[750px] 2xl:h-[751px] 3xl:h-[901px] left-[17%] top-[0] w-[1px]"
          compId="600:318296"
          comWidth={1}
          comHeight={750}
          compLeft={241}
          compRight={0}
          compType="Line"
        />
        <aside className="absolute bottom-[0] items-center justify-end left-[0] w-[17%]">
          <Column
            className=""
            compId="615"
            comWidth={241}
            comHeight={1011}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Column
              className="bg-white_A700 justify-center lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] w-[100%]"
              compId="614:14749"
              comWidth={241}
              comHeight={1011}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-center lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[62%]"
                compId="I614:14749;41:948"
                comWidth={109}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_menu_bluegray_400_20X20.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I614:14749;531:321438"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="menu"
                />
                <Text
                  className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I614:14749;41:950"
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
                compId="I614:14749;41:951"
                comWidth={100}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_user_bluegray_400.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I614:14749;531:322607"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="user One"
                />
                <Text
                  className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I614:14749;41:953"
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
                compId="I614:14749;43809:15240"
                comWidth={155}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_icon.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] mt-[1px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I614:14749;41:955"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Icon"
                />
                <Text
                  className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] mt-[1px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I614:14749;41:956"
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
                  compId="I614:14749;235:259292"
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
                compId="I614:14749;41:957"
                comWidth={57}
                comHeight={22}
                compLeft={1}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_folder_bluegray_400.png"
                  className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] w-[32%]"
                  compId="I614:14749;533:294113;531:320466"
                  comWidth={18}
                  comHeight={16}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="folder"
                />
                <Text
                  className="flex font-medium items-center lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I614:14749;41:959"
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
                compId="I614:14749;41:960"
                comWidth={95}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_settings.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I614:14749;41:961"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="settings"
                />
                <Text
                  className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I614:14749;41:962"
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
                compId="I614:14749;41:963"
                comWidth={70}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_cart.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I614:14749;41:964"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="cart"
                />
                <Text
                  className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                  compId="I614:14749;41:965"
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
                compId="I614:14749;41:966"
                comWidth={62}
                comHeight={22}
                compLeft={1}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_vector_deep_orange_300.png"
                  className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] w-[26%]"
                  compId="I614:14749;614:13885;531:321411"
                  comWidth={16}
                  comHeight={18}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Vector Two"
                />
                <Text
                  className="font-medium lg:ml-[13px] xl:ml-[15px] ml-[17px] 3xl:ml-[20px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                  compId="I614:14749;41:968"
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
                value="Settings8"
                className="font-medium lg:mb-[419px] xl:mb-[479px] mb-[539px] 3xl:mb-[647px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400"
                inputClassName="h-[20px] mr-[5px] w-[20px]"
                compId="I614:14749;531:316827"
                comWidth={91}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Radio"
                checked={false}
                name="Settings One"
                label="Settings8"
                variant="illBluegray400"
              ></Radio>
            </Column>
          </Column>
        </aside>
      </Stack>
    </>
  );
};

export default AddProductPage;
