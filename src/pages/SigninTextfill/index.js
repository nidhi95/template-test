import React from "react";

import { useGoogleLogin } from "@react-oauth/google";
import { Column, Row, Text, Img, Line, Input, Stack, Button } from "components";

const SigninTextfillPage = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      alert("Login successfull. 😍");
    },
    onFailure: (err) => {
      alert(err?.details ?? "Failed to login. 😢");
    },
  });

  return (
    <>
      <Column
        className="bg-red_54 font-inter items-center mx-[auto] lg:p-[31px] xl:p-[35px] p-[40px] 3xl:p-[48px] w-[100%]"
        compId="528:294727"
        comWidth={1440}
        comHeight={750}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Row
          className="items-end w-[90%]"
          compId="1305"
          comWidth={1222}
          comHeight={670}
          compLeft={0}
          compRight={0}
          compType="Row"
        >
          <Column
            className="items-center lg:mt-[32px] xl:mt-[37px] mt-[42px] 3xl:mt-[50px] w-[53%]"
            compId="1304"
            comWidth={648}
            comHeight={628}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-bold lg:leading-[31px] xl:leading-[35px] leading-[40.00px] 2xl:leading-[40px] 3xl:leading-[48px] lg:text-[21px] xl:text-[24px] text-[28px] 3xl:text-[33px] text-bluegray_900 text-center w-[48%]"
              compId="528:294731"
              comWidth={308}
              comHeight={80}
              compLeft={0}
              compRight={0}
              compType="Text"
            >
              Manage your work more effectively
            </Text>
            <Img
              src="images/img_workingtime_1.png"
              className="lg:h-[277px] xl:h-[316px] h-[355px] 2xl:h-[356px] 3xl:h-[427px] lg:mt-[55px] xl:mt-[63px] mt-[71px] 3xl:mt-[85px] w-[80%]"
              compId="43807:12640"
              comWidth={518}
              comHeight={355}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="WorkingTime"
            />
            <Text
              className="font-medium 3xl:mt-[118px] lg:mt-[77px] xl:mt-[88px] mt-[99px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
              compId="528:294921"
              comWidth={263}
              comHeight={22}
              compLeft={0}
              compRight={0}
              compType="Text"
            >
              <span className="text-bluegray_800 font-inter">
                You don’t have an account yet?
              </span>
              <span className="text-bluegray_800 font-inter"> </span>
              <span className="text-bluegray_700 font-inter underline">
                Sign up
              </span>
            </Text>
          </Column>
          <Column
            className="bg-white_A700 items-center lg:p-[37px] xl:p-[42px] p-[48px] 3xl:p-[57px] rounded-radius20 shadow-bs2 w-[47%]"
            compId="43807:12727"
            comWidth={574}
            comHeight={670}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-bold lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_800 w-[auto]"
              compId="528:294911"
              comWidth={162}
              comHeight={32}
              compLeft={0}
              compRight={0}
              compType="Text"
            >
              Login to Avori
            </Text>
            <Column
              className="lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[87%]"
              compId="1306"
              comWidth={414}
              comHeight={518}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="common-pointer bg-white_A700 border border-indigo_50 border-solid items-center lg:p-[13px] xl:p-[15px] p-[17px] 3xl:p-[20px] rounded-radius4 w-[100%]"
                compId="I528:294916;27:610"
                comWidth={414}
                comHeight={56}
                compLeft={0}
                compRight={0}
                compType="Row"
                onClick={googleSignIn}
              >
                <Img
                  src="images/img_contrast_red_600.png"
                  className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] lg:w-[14px] xl:w-[16px] w-[18px] 3xl:w-[21px]"
                  compId="I528:294916;27:612"
                  comWidth={18}
                  comHeight={18}
                  compLeft={7}
                  compRight={0}
                  compType="Image"
                  alt="contrast"
                />
                <Text
                  className="font-medium ml-[106px] 3xl:ml-[127px] lg:ml-[82px] xl:ml-[94px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                  compId="I528:294916;27:611"
                  comWidth={118}
                  comHeight={22}
                  compLeft={106}
                  compRight={0}
                  compType="Text"
                >
                  Login with Google
                </Text>
              </Row>
              <Row
                className="justify-between lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[91%]"
                compId="528:294917"
                comWidth={375}
                comHeight={22}
                compLeft={20}
                compRight={0}
                compType="Row"
              >
                <Line
                  className="bg-indigo_50 h-[1px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[1px]"
                  compId="528:294919"
                  comWidth={1}
                  comHeight={1}
                  compLeft={0}
                  compRight={0}
                  compType="Line"
                />
                <Text
                  className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                  compId="528:294918"
                  comWidth={16}
                  comHeight={22}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  Or
                </Text>
                <Line
                  className="bg-indigo_50 h-[1px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[1px]"
                  compId="528:294920"
                  comWidth={1}
                  comHeight={1}
                  compLeft={0}
                  compRight={0}
                  compType="Line"
                />
              </Row>
              <Text
                className="font-medium lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                compId="I528:294914;27:520"
                comWidth={34}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                Email
              </Text>
              <Input
                className="font-medium p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
                wrapClassName="3xl:mt-[9px] flex lg:mt-[6px] mt-[8px] w-[100%] xl:mt-[7px]"
                compId="I528:294914;600:318984"
                type="email"
                comWidth={0}
                comHeight={56}
                compLeft={0}
                compRight={0}
                compType="EditText"
                name="email One"
                placeholder="Ackermanlhn@gmail.com"
                prefix={
                  <Img
                    src="images/img_mail.png"
                    className="w-[20px] h-[20px] ml-[20px] mr-[16px] lg:w-[15px] lg:h-[16px] lg:ml-[15px] lg:mr-[12px] xl:w-[17px] xl:h-[18px] xl:ml-[17px] xl:mr-[14px] 2xl:h-[21px] 3xl:w-[24px] 3xl:h-[25px] 3xl:ml-[24px] 3xl:mr-[19px] my-[auto]"
                    compId="I528:294914;556:302887"
                    comWidth={20}
                    comHeight={20}
                    compLeft={20}
                    compRight={16}
                    compType="Image"
                    alt="mail"
                  />
                }
              ></Input>
              <Text
                className="font-medium lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                compId="I528:294915;27:520"
                comWidth={66}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                Password
              </Text>
              <Stack
                className="lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[100%]"
                compId="1298"
                comWidth={414}
                comHeight={56}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Img
                  src="images/img_eye.png"
                  className="absolute lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] inset-y-[0] my-[auto] right-[5%] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I528:294915;27:707"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={20}
                  compType="Image"
                  alt="eye"
                />
                <Input
                  className="font-medium p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
                  wrapClassName="absolute flex w-[100%]"
                  compId="I528:294915;600:318984"
                  type="password"
                  comWidth={0}
                  comHeight={56}
                  compLeft={0}
                  compRight={0}
                  compType="EditText"
                  name="password"
                  placeholder="************"
                  prefix={
                    <Img
                      src="images/img_lock.png"
                      className="w-[20px] h-[20px] ml-[20px] mr-[16px] left-[5%] right-[4%] absolute lg:w-[15px] lg:h-[16px] lg:ml-[15px] lg:mr-[12px] xl:w-[17px] xl:h-[18px] xl:ml-[17px] xl:mr-[14px] 2xl:h-[21px] 3xl:w-[24px] 3xl:h-[25px] 3xl:ml-[24px] 3xl:mr-[19px] my-[auto]"
                      compId="I528:294915;556:302887"
                      comWidth={20}
                      comHeight={20}
                      compLeft={20}
                      compRight={16}
                      compType="Image"
                      alt="lock"
                    />
                  }
                ></Input>
              </Stack>
              <Row
                className="lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[89%]"
                compId="528:294913"
                comWidth={367}
                comHeight={24}
                compLeft={20}
                compRight={0}
                compType="Row"
              >
                <Img
                  src="images/img_checkmark_deep_orange_300.png"
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  compId="I528:294913;27:504"
                  comWidth={24}
                  comHeight={24}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="checkmark"
                />
                <Text
                  className="font-medium lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] mt-[2px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                  compId="I528:294913;27:491"
                  comWidth={71}
                  comHeight={22}
                  compLeft={8}
                  compRight={0}
                  compType="Text"
                >
                  Remember
                </Text>
                <Text
                  className="font-medium lg:ml-[112px] xl:ml-[128px] ml-[144px] 3xl:ml-[172px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 underline w-[auto]"
                  compId="528:294912"
                  comWidth={120}
                  comHeight={16}
                  compLeft={144}
                  compRight={0}
                  compType="Text"
                >
                  Forgot password?
                </Text>
              </Row>
              <Button
                className="font-bold lg:mt-[37px] xl:mt-[42px] mt-[48px] 3xl:mt-[57px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[100%]"
                compId="528:294910"
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
              <Text
                className="font-medium 3xl:ml-[106px] lg:ml-[69px] xl:ml-[79px] ml-[89px] lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                compId="43807:12726"
                comWidth={263}
                comHeight={22}
                compLeft={89}
                compRight={0}
                compType="Text"
              >
                <span className="text-bluegray_800 font-inter">
                  You don’t have an account yet?
                </span>
                <span className="text-bluegray_800 font-inter"> </span>
                <span className="text-deep_orange_300 font-inter underline">
                  Sign up
                </span>
              </Text>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default SigninTextfillPage;
