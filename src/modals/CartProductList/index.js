import React from "react";
import ModalProvider from "react-modal";

import { Column, Row, Stack, Img, Text, Button } from "components";

const CartProductListModal = (props) => {
  return (
    <>
      <ModalProvider
        className="m-[auto] w-[33%]"
        overlayClassName="bg-bluegray_900_97 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column
            className="bg-white_A700 items-center mt-[1px] pb-[1px] px-[1px] rounded-radius4 shadow-bs2 w-[100%]"
            compId="43812:53880"
            comWidth={478}
            comHeight={504}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="justify-end ml-[auto] w-[81%]"
              compId="832"
              comWidth={386}
              comHeight={298}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Stack
                className="bg-white_A700 lg:h-[232px] xl:h-[266px] h-[298px] 2xl:h-[299px] 3xl:h-[358px] lg:px-[36px] xl:px-[41px] px-[47px] 3xl:px-[56px] lg:w-[231px] xl:w-[265px] w-[298px] 3xl:w-[357px]"
                compId="I43812:53880;600:391750"
                comWidth={298}
                comHeight={298}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Img
                  src="images/img_group_bluegray_900.png"
                  className="absolute lg:h-[151px] xl:h-[173px] h-[194px] 2xl:h-[195px] 3xl:h-[233px] inset-[0] justify-center m-[auto] w-[49%]"
                  compId="I43812:53880;600:391750;522:295156"
                  comWidth={146}
                  comHeight={194}
                  compLeft={29}
                  compRight={26}
                  compType="Image"
                  alt="Group"
                />
              </Stack>
              <div
                className="bg-white_A700 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] lg:ml-[39px] xl:ml-[45px] ml-[51px] 3xl:ml-[61px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] rounded-radius50 lg:w-[28px] xl:w-[32px] w-[36px] 3xl:w-[43px]"
                compId="I43812:53880;600:391753"
                comWidth={36}
                comHeight={36}
                compLeft={51}
                compRight={0}
                compType="View"
              ></div>
            </Row>
            <Text
              className="font-bold lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_800 w-[auto]"
              compId="I43812:53880;600:391755"
              comWidth={160}
              comHeight={32}
              compLeft={0}
              compRight={0}
              compType="Text"
            >
              No promotion
            </Text>
            <Text
              className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_800 w-[auto]"
              compId="I43812:53880;600:391756"
              comWidth={238}
              comHeight={22}
              compLeft={0}
              compRight={0}
              compType="Text"
            >
              Follow us to review lattest promotion
            </Text>
            <Button
              className="font-bold lg:mb-[23px] xl:mb-[26px] mb-[30px] 3xl:mb-[36px] lg:mt-[37px] xl:mt-[42px] mt-[48px] 3xl:mt-[57px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[42%]"
              compId="I43812:53880;600:391751"
              comWidth={199}
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

export default CartProductListModal;
