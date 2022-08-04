import React from "react";
import ModalProvider from "react-modal";

import { Column, Text, Input, Img, Row, Button, Line } from "components";

const DashboardRechargemoneyModal = (props) => {
  return (
    <>
      <ModalProvider
        className="m-[auto] w-[53%]"
        overlayClassName="bg-bluegray_900_97 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <div
            className="bg-white_A700 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] mt-[2px] rounded-radius50 lg:w-[28px] xl:w-[32px] w-[36px] 3xl:w-[43px]"
            compId="43809:41547"
            comWidth={36}
            comHeight={36}
            compLeft={0}
            compRight={0}
            compType="View"
          ></div>
          <Column
            className="bg-white_A700 lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] lg:p-[21px] xl:p-[24px] p-[28px] 3xl:p-[33px] rounded-radius4 shadow-bs2 w-[100%]"
            compId="43809:41548"
            comWidth={763}
            comHeight={760}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-bold mt-[4px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_800 w-[auto]"
              compId="I43809:41548;593:304532"
              comWidth={147}
              comHeight={32}
              compLeft={0}
              compRight={0}
              compType="Text"
            >
              Pick a wallet
            </Text>
            <Input
              className="font-medium p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
              wrapClassName="3xl:mt-[38px] flex lg:mt-[24px] mt-[32px] w-[99%] xl:mt-[28px]"
              compId="I43809:41548;593:304533"
              comWidth={0}
              comHeight={56}
              compLeft={0}
              compRight={0}
              compType="EditText"
              name="Textinput"
              placeholder="0.0"
              prefix={
                <Img
                  src="images/img_dollar_bluegray_900.png"
                  className="w-[11.67px] ml-[24px] mr-[20px] lg:w-[9px] lg:ml-[18px] lg:mr-[15px] xl:w-[10px] xl:ml-[21px] xl:mr-[17px] 2xl:w-[11px] 3xl:w-[14px] 3xl:ml-[28px] 3xl:mr-[24px] my-[auto]"
                  compId="I43809:41548;593:304533;556:302560;531:320662"
                  comWidth={11.67}
                  comHeight={20}
                  compLeft={24}
                  compRight={20}
                  compType="Image"
                  alt="dollar"
                />
              }
            ></Input>
            <Row
              className="items-center lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[77%]"
              compId="I43809:41548;593:304534"
              comWidth={547}
              comHeight={48}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Button
                className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[21%]"
                compId="I43809:41548;593:304535"
                comWidth={116}
                comHeight={48}
                compLeft={0}
                compRight={0}
                compType="Button"
                size="lg"
                variant="FillGray50"
              >
                200.000đ
              </Button>
              <Button
                className="font-normal lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[21%]"
                compId="I43809:41548;593:304537"
                comWidth={116}
                comHeight={48}
                compLeft={20}
                compRight={0}
                compType="Button"
                size="lg"
                variant="FillGray50"
              >
                500.000đ
              </Button>
              <Button
                className="font-normal lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[23%]"
                compId="I43809:41548;593:304539"
                comWidth={126}
                comHeight={48}
                compLeft={20}
                compRight={0}
                compType="Button"
                size="lg"
                variant="FillGray50"
              >
                1.000.000đ
              </Button>
              <Button
                className="font-normal lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[24%]"
                compId="I43809:41548;593:304541"
                comWidth={129}
                comHeight={48}
                compLeft={20}
                compRight={0}
                compType="Button"
                size="lg"
                variant="FillGray50"
              >
                2.000.000đ
              </Button>
            </Row>
            <Line
              className="bg-indigo_50 h-[1px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[1px]"
              compId="I43809:41548;593:304543"
              comWidth={1}
              comHeight={1}
              compLeft={0}
              compRight={0}
              compType="Line"
            />
            <Row
              className="items-center lg:mt-[24px] xl:mt-[27px] mt-[31px] 3xl:mt-[37px] w-[58%]"
              compId="I43809:41548;593:304544"
              comWidth={409}
              comHeight={344}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Column
                className="w-[92%]"
                compId="I43809:41548;593:304545"
                comWidth={376}
                comHeight={344}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                  compId="I43809:41548;593:304546"
                  comWidth={119}
                  comHeight={24}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  Available Wallet
                </Text>
                <Input
                  className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
                  wrapClassName="3xl:mt-[19px] flex lg:mt-[12px] mt-[16px] w-[91%] xl:mt-[14px]"
                  compId="I43809:41548;593:304547"
                  comWidth={0}
                  comHeight={64}
                  compLeft={0}
                  compRight={0}
                  compType="EditText"
                  name="WalletOptions"
                  placeholder="Torus"
                  prefix={
                    <Img
                      src="images/img_info.png"
                      className="w-[24.69px] ml-[20px] mr-[13px] lg:w-[19px] lg:ml-[15px] lg:mr-[10px] xl:w-[21px] xl:ml-[17px] xl:mr-[11px] 2xl:w-[24px] 3xl:w-[29px] 3xl:ml-[24px] 3xl:mr-[15px] my-[auto]"
                      compId="I43809:41548;593:304549"
                      comWidth={24.69}
                      comHeight={26.67}
                      compLeft={20}
                      compRight={13}
                      compType="Image"
                      alt="info"
                    />
                  }
                  size="xl"
                  variant="OutlineIndigo501_2"
                ></Input>
                <Row
                  className="bg-gray_50 border border-indigo_50 border-solid items-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] rounded-radius4 w-[91%]"
                  compId="I43809:41548;593:304554"
                  comWidth={344}
                  comHeight={64}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Img
                    src="images/img_metamaskicon0.png"
                    className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] rounded-radius5 lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                    compId="I43809:41548;593:304557"
                    comWidth={32}
                    comHeight={32}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="MetaMaskIconZero"
                  />
                  <Text
                    className="font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                    compId="I43809:41548;593:304558"
                    comWidth={78}
                    comHeight={24}
                    compLeft={10}
                    compRight={0}
                    compType="Text"
                  >
                    Metamask
                  </Text>
                  <Img
                    src="images/img_arrowright_bluegray_900.png"
                    className="xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] lg:ml-[138px] xl:ml-[158px] ml-[178px] 3xl:ml-[213px] w-[2%]"
                    compId="I43809:41548;593:304559;531:320546"
                    comWidth={6}
                    comHeight={11}
                    compLeft={178}
                    compRight={0}
                    compType="Image"
                    alt="arrowright"
                  />
                </Row>
                <Row
                  className="border border-indigo_50 border-solid items-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:p-[14px] xl:p-[16px] p-[18px] 3xl:p-[21px] rounded-radius4 w-[91%]"
                  compId="I43809:41548;593:304560"
                  comWidth={344}
                  comHeight={64}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Img
                    src="images/img_portisicon.png"
                    className="lg:h-[21px] xl:h-[24px] h-[26px] 2xl:h-[27px] 3xl:h-[32px] ml-[1px] mt-[1px] lg:w-[20px] xl:w-[23px] w-[26px] 3xl:w-[31px]"
                    compId="I43809:41548;593:304562"
                    comWidth={26}
                    comHeight={26}
                    compLeft={1}
                    compRight={0}
                    compType="Image"
                    alt="PortisIcon"
                  />
                  <Text
                    className="font-normal xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                    compId="I43809:41548;593:304563"
                    comWidth={45}
                    comHeight={24}
                    compLeft={12}
                    compRight={0}
                    compType="Text"
                  >
                    Portis
                  </Text>
                </Row>
                <Row
                  className="border border-indigo_50 border-solid items-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] rounded-radius4 w-[91%]"
                  compId="I43809:41548;593:304564"
                  comWidth={344}
                  comHeight={64}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Img
                    src="images/img_logofortmati.png"
                    className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                    compId="I43809:41548;593:304566"
                    comWidth={32}
                    comHeight={32}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="LogoFortmati"
                  />
                  <Text
                    className="font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                    compId="I43809:41548;593:304567"
                    comWidth={73}
                    comHeight={24}
                    compLeft={10}
                    compRight={0}
                    compType="Text"
                  >
                    Fortmatic
                  </Text>
                </Row>
              </Column>
              <Line
                className="bg-indigo_50 lg:h-[268px] xl:h-[307px] h-[344px] 2xl:h-[345px] 3xl:h-[414px] w-[1px]"
                compId="I43809:41548;593:304568"
                comWidth={1}
                comHeight={344}
                compLeft={0}
                compRight={0}
                compType="Line"
              />
              <Column
                className="items-center lg:ml-[24px] xl:ml-[27px] ml-[31px] 3xl:ml-[37px] w-[1px]"
                compId="I43809:41548;593:304569"
                comWidth={1}
                comHeight={344}
                compLeft={31}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="w-[100%]"
                  compId="I43809:41548;593:304570"
                  comWidth={1}
                  comHeight={46}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <div
                    className="overflow-x-auto w-[100%]"
                    compId="1119"
                    comWidth={1}
                    comHeight={46}
                    compLeft={0}
                    compRight={0}
                    compType="HorizontalScroll"
                  >
                    <Column
                      className="w-[100%]"
                      compId="I43809:41548;43809:41490"
                      comWidth={1}
                      comHeight={46}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_800 w-[auto]"
                        compId="I43809:41548;593:304572"
                        comWidth={67}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        QR Code
                      </Text>
                      <Text
                        className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]"
                        compId="I43809:41548;593:304576"
                        comWidth={121}
                        comHeight={22}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Scan this QR code
                      </Text>
                    </Column>
                  </div>
                  <Img
                    src="images/img_vector_indigo_401.png"
                    className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] mt-[3px] w-[100%]"
                    compId="I43809:41548;593:304574;531:320944"
                    comWidth={1}
                    comHeight={16}
                    compLeft={203}
                    compRight={0}
                    compType="Image"
                    alt="Vector Three"
                  />
                  <Text
                    className="font-medium lg:ml-[179px] xl:ml-[205px] ml-[231px] 3xl:ml-[277px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-indigo_401 w-[auto]"
                    compId="I43809:41548;593:304575"
                    comWidth={1}
                    comHeight={24}
                    compLeft={231}
                    compRight={0}
                    compType="Text"
                  >
                    Refresh
                  </Text>
                </Row>
                <Img
                  src="images/img_barcodeqr1.png"
                  className="lg:h-[217px] xl:h-[249px] h-[279px] 2xl:h-[280px] 3xl:h-[335px] lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] w-[100%]"
                  compId="I43809:41548;593:304577"
                  comWidth={1}
                  comHeight={279}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="barcodeqrOne"
                />
              </Column>
            </Row>
            <Button
              className="font-bold mb-[4px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[99%]"
              compId="I43809:41548;593:304595"
              comWidth={699}
              comHeight={56}
              compLeft={0}
              compRight={0}
              compType="Button"
              shape="CircleBorder28"
              size="xl"
              variant="FillDeeporange300"
            >
              Pay now
            </Button>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export default DashboardRechargemoneyModal;
