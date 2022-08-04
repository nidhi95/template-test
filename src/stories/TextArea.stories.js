import { TextArea } from "components";
export default {
  title: "template_1/TextArea",
  component: TextArea,
};

export const SampleTextarea = (args) => <TextArea {...args} />;

SampleTextarea.args = {
  shape: "RoundedBorder4",
  variant: "OutlineIndigo50",
  size: "sm",
  placeholder: "placeholder",
};
