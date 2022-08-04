import React from "react";
import ModalProvider from "react-modal";

import { Column, Row, Img, Text, Input, Button } from "components";

const SigninResetPasswordModal = (props) => {
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
            compId="43807:12730"
            comWidth={574}
            comHeight={670}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[61%]"
              compId="1027"
              comWidth={296}
              comHeight={137}
              compLeft={10}
              compRight={0}
              compType="Row"
            >
              <Img
                src="images/img_arrowleft_bluegray_800.png"
                className="2xl:h-[10px] 3xl:h-[11px] lg:h-[7px] h-[9px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] w-[5%]"
                compId="I43807:12728;36:958"
                comWidth={14}
                comHeight={9}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="arrowleft"
              />
              <Img
                src="images/img_group_137X143.png"
                className="lg:h-[107px] xl:h-[122px] h-[137px] 2xl:h-[138px] 3xl:h-[165px] lg:ml-[108px] xl:ml-[123px] ml-[139px] 3xl:ml-[166px] w-[48%]"
                compId="556:303024"
                comWidth={143}
                comHeight={137}
                compLeft={139}
                compRight={0}
                compType="Image"
                alt="Group"
              />
            </Row>
            <Text
              className="font-bold lg:ml-[112px] xl:ml-[128px] ml-[145px] 3xl:ml-[174px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_800 w-[auto]"
              compId="528:295123"
              comWidth={197}
              comHeight={32}
              compLeft={145}
              compRight={0}
              compType="Text"
            >
              Forgot Password
            </Text>
            <Column
              className="lg:mb-[22px] xl:mb-[25px] mb-[29px] 3xl:mb-[34px] lg:mt-[27px] xl:mt-[31px] mt-[35px] 3xl:mt-[42px] mx-[auto] w-[85%]"
              compId="1029"
              comWidth={414}
              comHeight={311}
              compLeft={37}
              compRight={37}
              compType="Column"
            >
              <Text
                className="font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 text-center w-[100%]"
                compId="528:295125"
                comWidth={413}
                comHeight={88}
                compLeft={1}
                compRight={0}
                compType="Text"
              >
                Enter the email address you used when you joined and we’ll send
                you instructions to reset your password.
                <br />
                For security reasons, we do NOT store your password. So rest
                assured that we will never send your password via email.
              </Text>
              <Text
                className="font-medium lg:mt-[27px] xl:mt-[31px] mt-[35px] 3xl:mt-[42px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
                compId="I528:295124;27:520"
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
                compId="I528:295124;600:318984"
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
                    compId="I528:295124;556:302887"
                    comWidth={20}
                    comHeight={20}
                    compLeft={20}
                    compRight={16}
                    compType="Image"
                    alt="mail"
                  />
                }
              ></Input>
              <Button
                className="font-bold lg:mt-[35px] xl:mt-[40px] mt-[46px] 3xl:mt-[55px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[100%]"
                compId="528:295122"
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
            </Column>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export default SigninResetPasswordModal;
