/*
 * @Author: your name
 * @Date: 2022-03-30 09:44:45
 * @LastEditTime: 2022-03-30 09:46:22
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \sxw-react-components\src\components\Button\button.test.js
 */
//src/Link.test.js

import React from "react";
import ReactDOM from "react-dom";

// A straightforward link wrapper that renders an <a> with the passed props. What we are testing
// here is that the Link component passes the right props to the wrapper and itselfs
const LinkWrapper = (props) => <a {...props} />; // eslint-disable-line jsx-a11y/anchor-has-content

it("has a href attribute when rendering with linkWrapper", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <LinkWrapper href="https://learnstorybook.com">Link Text</LinkWrapper>,
    div
  );

  expect(
    div.querySelector('a[href="https://learnstorybook.com"]')
  ).not.toBeNull();
  expect(div.textContent).toEqual("Link Text");

  ReactDOM.unmountComponentAtNode(div);
});
