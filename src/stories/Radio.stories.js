import { Radio } from "components";
export default {
  title: "template_1/Radio",
  component: Radio,
};

export const SampleRadio = (args) => <Radio {...args} />;

SampleRadio.args = {
  label: "Radio",
  variant: "FillBluegray400",
  inputClassName: "mr-1",
};
