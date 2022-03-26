import React from "react"
import "../src/styles/index.scss"
import { addDecorator } from "@storybook/react";
import { library } from "@fortawesome/fontawesome-svg-core"
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
  // width: "400px",
}
const CenterDecorator = (storyFn: any) => <div style={styles}>{storyFn()}</div>
addDecorator(CenterDecorator)