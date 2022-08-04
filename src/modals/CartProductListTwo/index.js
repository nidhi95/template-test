import React from "react";
import ModalProvider from "react-modal";

import { Column, Img, Text, Row, Button } from "components";

const CartProductListTwoModal = (props) => {
  return (
    <>
      <ModalProvider
        className="m-[auto] w-[33%]"
        overlayClassName="bg-bluegray_900_97 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column
            className="bg-white_A700 mt-[1px] p-[1px] rounded-radius4 shadow-bs2 w-[100%]"
            compId="I43812:53226;600:391713"
            comWidth={478}
            comHeight={504}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <div
              className="bg-white_A700 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] lg:ml-[340px] xl:ml-[389px] ml-[438px] 3xl:ml-[525px] mt-[4px] rounded-radius50 lg:w-[28px] xl:w-[32px] w-[36px] 3xl:w-[43px]"
              compId="I43812:53226;600:391720"
              comWidth={36}
              comHeight={36}
              compLeft={438}
              compRight={0}
              compType="View"
            ></div>
            <Img
              src="images/img_12.png"
              className="lg:h-[137px] xl:h-[156px] h-[175px] 2xl:h-[176px] 3xl:h-[211px] lg:ml-[117px] xl:ml-[134px] ml-[151px] 3xl:ml-[181px] lg:mt-[17px] xl:mt-[19px] mt-[22px] 3xl:mt-[26px] w-[36%]"
              compId="I43812:53226;43815:55780"
              comWidth={171}
              comHeight={175}
              compLeft={151}
              compRight={0}
              compType="Image"
              alt="Twelve"
            />
            <Text
              className="font-bold lg:ml-[56px] xl:ml-[64px] ml-[73px] 3xl:ml-[87px] lg:mt-[45px] xl:mt-[51px] mt-[58px] 3xl:mt-[69px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_800 w-[auto]"
              compId="I43812:53226;600:391722"
              comWidth={328}
              comHeight={32}
              compLeft={73}
              compRight={0}
              compType="Text"
            >
              Are you sure to delete item?
            </Text>
            <Text
              className="font-normal xl:ml-[101px] ml-[114px] 3xl:ml-[136px] lg:ml-[88px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
              compId="I43812:53226;600:391723"
              comWidth={246}
              comHeight={22}
              compLeft={114}
              compRight={0}
              compType="Text"
            >
              This item will be delete from your cart
            </Text>
            <Row
              className="items-center lg:mb-[23px] xl:mb-[26px] mb-[30px] 3xl:mb-[36px] lg:mt-[37px] xl:mt-[42px] mt-[48px] 3xl:mt-[57px] mx-[auto] w-[87%]"
              compId="I43812:53226;600:391716"
              comWidth={414}
              comHeight={56}
              compLeft={30}
              compRight={30}
              compType="Row"
            >
              <Button
                className="font-bold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[48%]"
                compId="I43812:53226;600:391717"
                comWidth={199}
                comHeight={56}
                compLeft={0}
                compRight={0}
                compType="Button"
                shape="CircleBorder28"
                size="xl"
                variant="FillRed600"
              >
                Yes, Delete item
              </Button>
              <Button
                className="common-pointer font-normal lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[48%]"
                compId="I43812:53226;600:391718"
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

export default CartProductListTwoModal;
