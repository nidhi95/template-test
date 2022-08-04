import React from "react";
import ModalProvider from "react-modal";

import { Column, Row, Img, Text, Button } from "components";

const SignupVerificationModal = (props) => {
  return (
    <>
      <ModalProvider
        className="m-[auto] w-[40%]"
        overlayClassName="fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column
            className="bg-white_A700 lg:p-[33px] xl:p-[38px] p-[43px] 3xl:p-[51px] rounded-radius20 shadow-bs2 w-[100%]"
            compId="43807:13174"
            comWidth={574}
            comHeight={670}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[61%]"
              compId="1370"
              comWidth={296}
              comHeight={137}
              compLeft={10}
              compRight={0}
              compType="Row"
            >
              <Img
                src="images/img_arrowleft_bluegray_800.png"
                className="2xl:h-[10px] 3xl:h-[11px] lg:h-[7px] h-[9px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] w-[5%]"
                compId="I43807:13172;36:958"
                comWidth={14}
                comHeight={9}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="arrowleft"
              />
              <Img
                src="images/img_group_1.png"
                className="lg:h-[107px] xl:h-[122px] h-[137px] 2xl:h-[138px] 3xl:h-[165px] lg:ml-[108px] xl:ml-[123px] ml-[139px] 3xl:ml-[166px] w-[48%]"
                compId="556:303027"
                comWidth={143}
                comHeight={137}
                compLeft={139}
                compRight={0}
                compType="Image"
                alt="Group"
              />
            </Row>
            <Text
              className="font-bold xl:ml-[113px] ml-[128px] 3xl:ml-[153px] lg:ml-[99px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_800 w-[auto]"
              compId="528:295148"
              comWidth={233}
              comHeight={32}
              compLeft={128}
              compRight={0}
              compType="Text"
            >
              2-Step Vertification
            </Text>
            <Column
              className="items-center 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] mb-[9px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] mx-[auto] w-[85%]"
              compId="1373"
              comWidth={414}
              comHeight={342}
              compLeft={37}
              compRight={37}
              compType="Column"
            >
              <Text
                className="font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 text-center w-[100%]"
                compId="528:295149"
                comWidth={413}
                comHeight={44}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                We sent a vertìication code to your email. Enter the code from
                the email in the field below
              </Text>
              <Row
                className="items-center justify-between lg:mt-[43px] xl:mt-[49px] mt-[56px] 3xl:mt-[67px] w-[92%]"
                compId="528:295167"
                comWidth={380}
                comHeight={80}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <div
                  className="bg-white_A700 border border-bluegray_200 border-solid lg:h-[63px] xl:h-[72px] h-[80px] 2xl:h-[81px] 3xl:h-[97px] rounded-radius16 lg:w-[62px] xl:w-[71px] w-[80px] 3xl:w-[96px]"
                  compId="I528:295168;234:259280"
                  comWidth={80}
                  comHeight={80}
                  compLeft={0}
                  compRight={0}
                  compType="View"
                ></div>
                <Button
                  className="font-bold lg:h-[63px] xl:h-[72px] h-[80px] 2xl:h-[81px] 3xl:h-[97px] lg:text-[21px] xl:text-[24px] text-[28px] 3xl:text-[33px] text-center lg:w-[62px] xl:w-[71px] w-[80px] 3xl:w-[96px]"
                  compId="528:295169"
                  comWidth={80}
                  comHeight={80}
                  compLeft={0}
                  compRight={0}
                  compType="Button"
                  shape="RoundedBorder16"
                  size="2xl"
                  variant="OutlineDeeporange300"
                >
                  4
                </Button>
                <div
                  className="bg-white_A700 border border-bluegray_200 border-solid lg:h-[63px] xl:h-[72px] h-[80px] 2xl:h-[81px] 3xl:h-[97px] rounded-radius16 lg:w-[62px] xl:w-[71px] w-[80px] 3xl:w-[96px]"
                  compId="I528:295170;234:259280"
                  comWidth={80}
                  comHeight={80}
                  compLeft={0}
                  compRight={0}
                  compType="View"
                ></div>
                <div
                  className="bg-white_A700 border border-bluegray_200 border-solid lg:h-[63px] xl:h-[72px] h-[80px] 2xl:h-[81px] 3xl:h-[97px] rounded-radius16 lg:w-[62px] xl:w-[71px] w-[80px] 3xl:w-[96px]"
                  compId="I528:295171;234:259280"
                  comWidth={80}
                  comHeight={80}
                  compLeft={0}
                  compRight={0}
                  compType="View"
                ></div>
              </Row>
              <Button
                className="font-bold lg:mt-[37px] xl:mt-[42px] mt-[48px] 3xl:mt-[57px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[100%]"
                compId="528:295146"
                comWidth={414}
                comHeight={56}
                compLeft={0}
                compRight={0}
                compType="Button"
                shape="CircleBorder28"
                size="xl"
                variant="FillDeeporange300"
              >
                SEND RESET INSTRUCTIONS
              </Button>
              <Text
                className="font-medium lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-indigo_401 w-[auto]"
                compId="528:295145"
                comWidth={293}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                <span className="text-bluegray_200 font-inter">
                  You haven’t received it?
                </span>
                <span className="text-indigo_401 font-inter">
                  {" "}
                  Resend a new code
                </span>
              </Text>
            </Column>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export default SignupVerificationModal;
