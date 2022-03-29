/*
 * @Author: your name
 * @Date: 2022-03-30 04:05:04
 * @LastEditTime: 2022-03-30 04:37:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \sxw-react-components\src\components\Button\button.tsx
 */
import { ButtonHTMLAttributes } from "react";
import "./button.scss";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
const Button: React.FC<ButtonProps> = ({
  children,
  ...otherProps
}: ButtonProps) => {
  return (
    <button className="btn" {...otherProps}>
      {children}
    </button>
  );
};
export default Button;
