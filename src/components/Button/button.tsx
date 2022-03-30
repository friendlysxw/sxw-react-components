/*
 * @Author: your name
 * @Date: 2022-03-30 04:05:04
 * @LastEditTime: 2022-03-30 17:46:11
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \sxw-react-components\src\components\Button\button.tsx
 */
import { ButtonHTMLAttributes } from "react";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * 按钮状态
   */
  state?: "primary" | "danger" | "success";
}
const STATE_CLASSES = {
  primary: "btn--primary",
  danger: "btn--danger",
  success: "btn--success",
};

const Button: React.FC<ButtonProps> = ({
  children,
  state = "primary",
  ...otherProps
}: ButtonProps) => {
  const stateClass = STATE_CLASSES[state] || "";
  return (
    <button className={`btn ${stateClass}`} {...otherProps}>
      {children}
    </button>
  );
};
export default Button;
