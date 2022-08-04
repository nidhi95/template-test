import React from "react";

import { Column, Img, Text, Button, Row } from "components";

const SigninResetPasswordSuccessfulPage = () => {
  return (
    <>
      <Column
        className="bg-red_53 font-inter items-center mx-[auto] lg:p-[21px] xl:p-[24px] p-[28px] 3xl:p-[33px] w-[100%]"
        compId="528:295172"
        comWidth={1440}
        comHeight={750}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Column
          className="bg-white_A700 items-center justify-end lg:mb-[18px] xl:mb-[21px] mb-[24px] 3xl:mb-[28px] lg:p-[37px] xl:p-[42px] p-[48px] 3xl:p-[57px] rounded-radius20 shadow-bs2 w-[41%]"
          compId="556:303026"
          comWidth={574}
          comHeight={670}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Img
            src="images/img_group5.png"
            className="lg:h-[103px] xl:h-[118px] h-[132px] 2xl:h-[133px] 3xl:h-[159px] 3xl:mt-[109px] lg:mt-[70px] xl:mt-[80px] mt-[91px] w-[31%]"
            compId="43807:12740"
            comWidth={150}
            comHeight={132}
            compLeft={0}
            compRight={0}
            compType="Image"
            alt="GroupFive"
          />
          <Text
            className="font-bold lg:leading-[24px] xl:leading-[28px] leading-[32.00px] 2xl:leading-[32px] 3xl:leading-[38px] lg:mt-[108px] xl:mt-[123px] mt-[139px] 3xl:mt-[166px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_800 text-center w-[56%]"
            compId="528:295176"
            comWidth={267}
            comHeight={64}
            compLeft={0}
            compRight={0}
            compType="Text"
          >
            Password has been recovered
          </Text>
          <Button
            className="font-bold lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[87%]"
            compId="528:295175"
            comWidth={414}
            comHeight={56}
            compLeft={0}
            compRight={0}
            compType="Button"
            shape="CircleBorder28"
            size="xl"
            variant="FillDeeporange300"
          >
            LOGIN
          </Button>
          <Row
            className="items-center justify-center lg:mt-[21px] xl:mt-[24px] mt-[28px] 3xl:mt-[33px] w-[25%]"
            compId="528:295226"
            comWidth={118}
            comHeight={22}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Img
              src="images/img_arrowleft_indigo_401_11X6.png"
              className="xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] w-[5%]"
              compId="I528:295227;1:1054"
              comWidth={6}
              comHeight={11}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="arrowleft"
            />
            <Text
              className="font-medium lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-indigo_401 w-[auto]"
              compId="528:295228"
              comWidth={98}
              comHeight={22}
              compLeft={14}
              compRight={0}
              compType="Text"
            >
              Back to Sign in
            </Text>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default SigninResetPasswordSuccessfulPage;
