import React from "react"
import "../src/styles/index.scss"
import { addDecorator, addParameters } from "@storybook/react";
import { library } from "@fortawesome/fontawesome-svg-core"
import { withInfo } from "@storybook/addon-info";
import { fas } from "@fortawesome/free-solid-svg-icons"
library.add(fas)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        '欢迎使用 Reant',
        '按钮 Button',
        '提示 Alert',
        '图标 Icon',
        '菜单 Menu',
        '选项卡 Tabs',
        '输入框 Input',
        '选择器 Select',
        '自动补全 AutoComplete',
        '上传 Upload',
      ],
    },
  },
}

const wrapperStyle: React.CSSProperties = {
  // width: "500px",
  padding: "20px 40px"
}
const ComponentDecorator = (storyFn: any) => (
  <div style={wrapperStyle}>
    <h3>组件演示</h3>
    {storyFn()}
  </div>
)
addDecorator(ComponentDecorator)
addDecorator(withInfo)
addParameters({
  info: {
    inline: true,
    header: false,
  }
})