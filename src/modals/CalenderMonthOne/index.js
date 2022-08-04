import React from "react";
import ModalProvider from "react-modal";

import { Column, Text, Input, SelectBox, Img, Row, Button } from "components";

const CalenderMonthOneModal = (props) => {
  return (
    <>
      <ModalProvider
        className="m-[auto] w-[33%]"
        overlayClassName="bg-bluegray_900_97 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <div
            className="bg-white_A700 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] mt-[1px] rounded-radius50 lg:w-[28px] xl:w-[32px] w-[36px] 3xl:w-[43px]"
            compId="43812:45933"
            comWidth={36}
            comHeight={36}
            compLeft={0}
            compRight={0}
            compType="View"
          ></div>
          <Column
            className="bg-white_A700 lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs2 w-[100%]"
            compId="43812:45934"
            comWidth={478}
            comHeight={446}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-bold ml-[1px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_800 w-[auto]"
              compId="I43812:45934;596:304212"
              comWidth={205}
              comHeight={32}
              compLeft={1}
              compRight={0}
              compType="Text"
            >
              Create new event
            </Text>
            <Text
              className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
              compId="I43812:45934;596:304213"
              comWidth={200}
              comHeight={22}
              compLeft={0}
              compRight={0}
              compType="Text"
            >
              Add new event in the calendar
            </Text>
            <Text
              className="font-medium lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
              compId="I43812:45934;596:304205"
              comWidth={77}
              comHeight={22}
              compLeft={20}
              compRight={0}
              compType="Text"
            >
              Event name
            </Text>
            <Input
              className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
              wrapClassName="3xl:mt-[9px] lg:mt-[6px] mt-[8px] w-[100%] xl:mt-[7px]"
              compId="537"
              type="text"
              comWidth={414}
              comHeight={56}
              compLeft={0}
              compRight={0}
              compType="EditText"
              name="Group537"
              placeholder="Type name"
            ></Input>
            <Text
              className="font-medium lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
              compId="I43812:45934;596:304210"
              comWidth={104}
              comHeight={22}
              compLeft={20}
              compRight={0}
              compType="Text"
            >
              Select category
            </Text>
            <SelectBox
              className="bg-transparent font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[100%]"
              compId="538"
              comWidth={414}
              comHeight={56}
              compLeft={0}
              compRight={0}
              compType="Dropdown"
              placeholderClassName="bg-transparent text-bluegray_800"
              name="Group538"
              placeholder="Data project"
              isSearchable={false}
              isMulti={false}
              indicator={
                <Img
                  src="images/img_arrowdown.png"
                  className="w-[11.67px] h-[6.67px] mr-[24px] lg:w-[9px] lg:h-[6px] lg:mr-[18px] xl:w-[10px] xl:h-[6px] xl:mr-[21px] 2xl:w-[11px] 2xl:h-[7px] 3xl:w-[14px] 3xl:h-[9px] 3xl:mr-[28px]"
                  compId="I43812:45934;596:304208;1:1053"
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
            <Row
              className="items-center lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]"
              compId="I43812:45934;596:304198"
              comWidth={414}
              comHeight={56}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Button
                className="font-bold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[48%]"
                compId="I43812:45934;596:304199"
                comWidth={199}
                comHeight={56}
                compLeft={0}
                compRight={0}
                compType="Button"
                shape="CircleBorder28"
                size="xl"
                variant="FillDeeporange300"
              >
                Create now
              </Button>
              <Button
                className="common-pointer font-normal lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[48%]"
                compId="I43812:45934;596:304200"
                comWidth={199}
                comHeight={56}
                compLeft={16}
                compRight={0}
                compType="Button"
                onClick={props.onRequestClose}
                shape="CircleBorder28"
                size="xl"
                variant="FillGray50"
              >
                Cancel
              </Button>
            </Row>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export default CalenderMonthOneModal;
