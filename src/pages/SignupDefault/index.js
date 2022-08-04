import React from "react";

import { useGoogleLogin } from "@react-oauth/google";
import { Column, Row, Text, Img, Line, Input, Button } from "components";

const SignupDefaultPage = () => {
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
        className="bg-red_51 font-inter items-center mx-[auto] lg:p-[31px] xl:p-[35px] p-[40px] 3xl:p-[48px] w-[100%]"
        compId="528:294587"
        comWidth={1440}
        comHeight={750}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Row
          className="items-center w-[88%]"
          compId="1093"
          comWidth={1194}
          comHeight={670}
          compLeft={0}
          compRight={0}
          compType="Row"
        >
          <Column
            className="items-center w-[52%]"
            compId="1092"
            comWidth={620}
            comHeight={560}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-bold lg:leading-[31px] xl:leading-[35px] leading-[40.00px] 2xl:leading-[40px] 3xl:leading-[48px] lg:text-[21px] xl:text-[24px] text-[28px] 3xl:text-[33px] text-bluegray_900 text-center w-[57%]"
              compId="528:294605"
              comWidth={354}
              comHeight={80}
              compLeft={0}
              compRight={0}
              compType="Text"
            >
              Don't worry about overwhelming tasks
            </Text>
            <Img
              src="images/img_group7_440X407.png"
              className="lg:h-[343px] xl:h-[392px] h-[440px] 2xl:h-[441px] 3xl:h-[529px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] w-[66%]"
              compId="43807:12855"
              comWidth={407}
              comHeight={440}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="GroupSeven"
            />
          </Column>
          <Column
            className="bg-white_A700 items-center lg:p-[37px] xl:p-[42px] p-[48px] 3xl:p-[57px] rounded-radius20 shadow-bs2 w-[48%]"
            compId="43807:12910"
            comWidth={574}
            comHeight={670}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-bold lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_800 w-[auto]"
              compId="528:294609"
              comWidth={185}
              comHeight={32}
              compLeft={0}
              compRight={0}
              compType="Text"
            >
              Sign up to Avori
            </Text>
            <Column
              className="items-center lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[87%]"
              compId="1094"
              comWidth={414}
              comHeight={518}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="common-pointer bg-white_A700 border border-indigo_50 border-solid items-center lg:p-[13px] xl:p-[15px] p-[17px] 3xl:p-[20px] rounded-radius4 w-[100%]"
                compId="I528:294614;27:610"
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
                  compId="I528:294614;27:612"
                  comWidth={18}
                  comHeight={18}
                  compLeft={7}
                  compRight={0}
                  compType="Image"
                  alt="contrast"
                />
                <Text
                  className="font-medium 3xl:ml-[118px] lg:ml-[77px] xl:ml-[88px] ml-[99px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                  compId="I528:294614;27:611"
                  comWidth={132}
                  comHeight={22}
                  compLeft={99}
                  compRight={0}
                  compType="Text"
                >
                  Sign up with Google
                </Text>
              </Row>
              <Row
                className="justify-between lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[91%]"
                compId="528:294615"
                comWidth={375}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Line
                  className="bg-indigo_50 h-[1px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[1px]"
                  compId="528:294617"
                  comWidth={1}
                  comHeight={1}
                  compLeft={0}
                  compRight={0}
                  compType="Line"
                />
                <Text
                  className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                  compId="528:294616"
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
                  compId="528:294618"
                  comWidth={1}
                  comHeight={1}
                  compLeft={0}
                  compRight={0}
                  compType="Line"
                />
              </Row>
              <Input
                className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                wrapClassName="3xl:mt-[28px] flex lg:mt-[18px] mt-[24px] w-[100%] xl:mt-[21px]"
                compId="528:294611"
                type="text"
                comWidth={0}
                comHeight={56}
                compLeft={0}
                compRight={0}
                compType="EditText"
                name="Textinput"
                placeholder="Full name"
                prefix={
                  <Img
                    src="images/img_user.png"
                    className="w-[20px] h-[20px] ml-[20px] mr-[16px] lg:w-[15px] lg:h-[16px] lg:ml-[15px] lg:mr-[12px] xl:w-[17px] xl:h-[18px] xl:ml-[17px] xl:mr-[14px] 2xl:h-[21px] 3xl:w-[24px] 3xl:h-[25px] 3xl:ml-[24px] 3xl:mr-[19px] my-[auto]"
                    compId="I528:294611;556:302560"
                    comWidth={20}
                    comHeight={20}
                    compLeft={20}
                    compRight={16}
                    compType="Image"
                    alt="user"
                  />
                }
              ></Input>
              <Input
                className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                wrapClassName="3xl:mt-[24px] flex lg:mt-[15px] mt-[20px] w-[100%] xl:mt-[17px]"
                compId="528:294612"
                type="email"
                comWidth={0}
                comHeight={56}
                compLeft={0}
                compRight={0}
                compType="EditText"
                name="Textinput One"
                placeholder="Email"
                prefix={
                  <Img
                    src="images/img_mail.png"
                    className="w-[20px] h-[20px] ml-[20px] mr-[16px] lg:w-[15px] lg:h-[16px] lg:ml-[15px] lg:mr-[12px] xl:w-[17px] xl:h-[18px] xl:ml-[17px] xl:mr-[14px] 2xl:h-[21px] 3xl:w-[24px] 3xl:h-[25px] 3xl:ml-[24px] 3xl:mr-[19px] my-[auto]"
                    compId="I528:294612;556:302560"
                    comWidth={20}
                    comHeight={20}
                    compLeft={20}
                    compRight={16}
                    compType="Image"
                    alt="mail"
                  />
                }
              ></Input>
              <Input
                className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                wrapClassName="3xl:mt-[24px] flex lg:mt-[15px] mt-[20px] w-[100%] xl:mt-[17px]"
                compId="528:294613"
                type="password"
                comWidth={0}
                comHeight={56}
                compLeft={0}
                compRight={0}
                compType="EditText"
                name="Textinput Two"
                placeholder="Password"
                prefix={
                  <Img
                    src="images/img_lock.png"
                    className="w-[20px] h-[20px] ml-[20px] mr-[16px] lg:w-[15px] lg:h-[16px] lg:ml-[15px] lg:mr-[12px] xl:w-[17px] xl:h-[18px] xl:ml-[17px] xl:mr-[14px] 2xl:h-[21px] 3xl:w-[24px] 3xl:h-[25px] 3xl:ml-[24px] 3xl:mr-[19px] my-[auto]"
                    compId="I528:294613;556:302560"
                    comWidth={20}
                    comHeight={20}
                    compLeft={20}
                    compRight={16}
                    compType="Image"
                    alt="lock"
                  />
                }
                suffix={
                  <Img
                    src="images/img_group_bluegray_400.png"
                    className="w-[16.67px] ml-[35px] mr-[21px] lg:w-[12px] lg:ml-[27px] lg:mr-[16px] xl:w-[14px] xl:ml-[31px] xl:mr-[18px] 2xl:w-[16px] 3xl:w-[20px] 3xl:ml-[42px] 3xl:mr-[25px] my-[auto]"
                    compId="I528:294613;30:368;27:700"
                    comWidth={16.67}
                    comHeight={15}
                    compLeft={35}
                    compRight={21}
                    compType="Image"
                    alt="Group "
                  />
                }
              ></Input>
              <Text
                className="font-medium lg:mt-[22px] xl:mt-[25px] mt-[29px] 3xl:mt-[34px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                compId="528:294619"
                comWidth={314}
                comHeight={35}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                <span className="text-bluegray_400 font-inter">
                  By clicking “SIGN UP" button, I agree with your
                </span>
                <span className="text-bluegray_800 font-inter"> </span>
                <span className="text-bluegray_800 font-inter underline">
                  Term and Policy
                </span>
              </Text>
              <Button
                className="font-bold lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[100%]"
                compId="528:294608"
                comWidth={414}
                comHeight={56}
                compLeft={0}
                compRight={0}
                compType="Button"
                shape="CircleBorder28"
                size="xl"
                variant="FillDeeporange300"
              >
                SIGN UP
              </Button>
              <Text
                className="font-medium mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                compId="528:294610"
                comWidth={246}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                <span className="text-bluegray_800 font-inter font-normal not-italic">
                  You have an account already?
                </span>
                <span className="text-bluegray_800 font-inter"> </span>
                <span className="text-deep_orange_300 font-inter underline">
                  Sign in
                </span>
              </Text>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default SignupDefaultPage;
