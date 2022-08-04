import React from "react";
import ModalProvider from "react-modal";

import { Column, Img, Text, Row, Button } from "components";

const DashboardPaymentsuccessfulModal = (props) => {
  return (
    <>
      <ModalProvider
        className="m-[auto] w-[28%]"
        overlayClassName="bg-bluegray_900_97 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <div
            className="bg-white_A700 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] mt-[2px] rounded-radius50 lg:w-[28px] xl:w-[32px] w-[36px] 3xl:w-[43px]"
            compId="43810:43600"
            comWidth={36}
            comHeight={36}
            compLeft={0}
            compRight={0}
            compType="View"
          ></div>
          <Column
            className="bg-white_A700 items-center justify-end lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs2 w-[100%]"
            compId="43810:43601"
            comWidth={400}
            comHeight={630}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Img
              src="images/img_layer2.png"
              className="lg:h-[119px] xl:h-[136px] h-[152px] 2xl:h-[153px] 3xl:h-[183px] 3xl:mt-[103px] lg:mt-[66px] xl:mt-[76px] mt-[86px] w-[55%]"
              compId="I43810:43601;43814:55043"
              comWidth={185}
              comHeight={152}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="LayerTwo"
            />
            <Column
              className="items-center lg:mt-[35px] xl:mt-[40px] mt-[45px] 3xl:mt-[54px] w-[72%]"
              compId="929"
              comWidth={243}
              comHeight={194}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-bold lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_800 w-[auto]"
                compId="I43810:43601;594:305806"
                comWidth={240}
                comHeight={32}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                Payment Successful
              </Text>
              <Text
                className="font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 text-center w-[100%]"
                compId="I43810:43601;594:305807"
                comWidth={243}
                comHeight={44}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                <span className="text-bluegray_800 font-inter">Add</span>
                <span className="text-green_700 font-inter font-medium">
                  {" "}
                  200.000đ
                </span>
                <span className="text-bluegray_800 font-inter">
                  {" "}
                  to your wallet already
                  <br />
                  Check your new balance!
                </span>
              </Text>
              <Text
                className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                compId="I43810:43601;594:305808"
                comWidth={101}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                Send receipt to
              </Text>
              <Row
                className="items-center justify-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[72%]"
                compId="I43810:43601;594:305809"
                comWidth={176}
                comHeight={48}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Button
                  className="flex lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                  compId="I43810:43601;594:305810"
                  comWidth={48}
                  comHeight={48}
                  compLeft={0}
                  compRight={0}
                  compType="IconButton"
                  variant="icbOutlineIndigo50"
                >
                  <Img
                    src="images/img_home.png"
                    className="flex items-center justify-center"
                    compId="I43810:43601;594:305810"
                    comWidth={48}
                    comHeight={48}
                    compLeft={0}
                    compRight={0}
                    compType="IconButton"
                    alt="home"
                  />
                </Button>
                <Button
                  className="flex lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] rounded-radius50 lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                  compId="I43810:43601;594:305813"
                  comWidth={48}
                  comHeight={48}
                  compLeft={16}
                  compRight={0}
                  compType="IconButton"
                  variant="icbOutlineIndigo50"
                >
                  <Img
                    src="images/img_plus_bluegray_900.png"
                    className="flex items-center justify-center"
                    compId="I43810:43601;594:305813"
                    comWidth={48}
                    comHeight={48}
                    compLeft={16}
                    compRight={0}
                    compType="IconButton"
                    alt="plus"
                  />
                </Button>
                <Button
                  className="flex lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] rounded-radius50 lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                  compId="I43810:43601;594:305816"
                  comWidth={48}
                  comHeight={48}
                  compLeft={16}
                  compRight={0}
                  compType="IconButton"
                  variant="icbOutlineIndigo50"
                >
                  <Img
                    src="images/img_globe.png"
                    className="h-[18.33px] flex items-center justify-center lg:h-[15px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px]"
                    compId="I43810:43601;594:305816"
                    comWidth={48}
                    comHeight={48}
                    compLeft={16}
                    compRight={0}
                    compType="IconButton"
                    alt="globe"
                  />
                </Button>
              </Row>
            </Column>
            <Button
              className="font-bold lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[100%]"
              compId="I43810:43601;600:393213"
              comWidth={336}
              comHeight={56}
              compLeft={0}
              compRight={0}
              compType="Button"
              shape="CircleBorder28"
              size="xl"
              variant="FillDeeporange300"
            >
              Yes, I understand
            </Button>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export default DashboardPaymentsuccessfulModal;
