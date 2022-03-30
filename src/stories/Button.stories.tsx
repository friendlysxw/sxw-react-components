/*
 * @Author: your name
 * @Date: 2022-03-30 06:17:47
 * @LastEditTime: 2022-03-30 17:52:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \sxw-react-components\src\stories\MyButton.stories.tsx
 */
import { ComponentStory, ComponentMeta } from "@storybook/react";
// 引入Button组件
import Button from "../components/Button/button";
import "../styles/button.scss";

// 定义故事的元数据
export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    componentSubtitle: "按钮组件",
  },
} as ComponentMeta<typeof Button>;

// 定义故事的组件模板
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
// 主要的按钮
export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
  state: "primary",
};
// 危险的按钮
export const Danger = Template.bind({});
Danger.args = {
  children: "Danger",
  state: "danger",
};
// 成功的按钮
export const Success = Template.bind({});
Success.args = {
  children: "Success",
  state: "success",
};
