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
        'Button',
        'Alert',
        // 'Menu',
        // 'Tabs',
        // 'Icon',
        // 'Input',
        // 'AutoComplete',
        // 'Select'
      ],
    },
  },
}

const styles: React.CSSProperties = {
  // width: "500px",
  padding: "100px 40px"
}
const ComponentDecorator = (storyFn: any) => <div style={styles}>{storyFn()}</div>
addDecorator(ComponentDecorator)
addDecorator(withInfo)
addParameters({
  info: {
    test: '组件展示',
    inline: true,
  }
})