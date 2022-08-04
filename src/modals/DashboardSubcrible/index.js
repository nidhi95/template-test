import React from "react";
import ModalProvider from "react-modal";

import { Column, Text, Stack, Img, Input } from "components";

const DashboardSubcribleModal = (props) => {
  return (
    <>
      <ModalProvider
        className="m-[auto] w-[33%]"
        overlayClassName="bg-bluegray_900_97 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <div
            className="bg-white_A700 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] mt-[2px] rounded-radius50 lg:w-[28px] xl:w-[32px] w-[36px] 3xl:w-[43px]"
            compId="43809:34751"
            comWidth={36}
            comHeight={36}
            compLeft={0}
            compRight={0}
            compType="View"
          ></div>
          <Column
            className="bg-white_A700 lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs2 w-[100%]"
            compId="43809:34752"
            comWidth={478}
            comHeight={252}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-bold lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_800 w-[auto]"
              compId="I43809:34752;593:301086"
              comWidth={113}
              comHeight={32}
              compLeft={0}
              compRight={0}
              compType="Text"
            >
              Subcrible
            </Text>
            <Text
              className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
              compId="I43809:34752;593:301087"
              comWidth={380}
              comHeight={22}
              compLeft={0}
              compRight={0}
              compType="Text"
            >
              Subcribe our newletter and get notification to stay update
            </Text>
            <Text
              className="font-medium lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
              compId="I43809:34752;593:301084;27:520"
              comWidth={34}
              comHeight={22}
              compLeft={0}
              compRight={0}
              compType="Text"
            >
              Email
            </Text>
            <Stack
              className="lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[100%]"
              compId="980"
              comWidth={414}
              comHeight={56}
              compLeft={0}
              compRight={0}
              compType="Stack"
            >
              <Img
                src="images/img_send.png"
                className="absolute lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] inset-y-[0] my-[auto] right-[5%] lg:w-[13px] xl:w-[15px] w-[17px] 3xl:w-[20px]"
                compId="I43809:34752;593:301084;27:707;470:290819"
                comWidth={17}
                comHeight={17}
                compLeft={0}
                compRight={21}
                compType="Image"
                alt="send"
              />
              <Input
                className="font-medium p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
                wrapClassName="absolute flex w-[100%]"
                compId="I43809:34752;593:301084;600:318984"
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
                    className="w-[20px] h-[20px] ml-[20px] mr-[16px] left-[5%] right-[4%] absolute lg:w-[15px] lg:h-[16px] lg:ml-[15px] lg:mr-[12px] xl:w-[17px] xl:h-[18px] xl:ml-[17px] xl:mr-[14px] 2xl:h-[21px] 3xl:w-[24px] 3xl:h-[25px] 3xl:ml-[24px] 3xl:mr-[19px] my-[auto]"
                    compId="I43809:34752;593:301084;556:302887"
                    comWidth={20}
                    comHeight={20}
                    compLeft={20}
                    compRight={16}
                    compType="Image"
                    alt="mail"
                  />
                }
              ></Input>
            </Stack>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export default DashboardSubcribleModal;
