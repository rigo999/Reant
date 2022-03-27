import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

const welcomePage = () => (
    <div>
        <h1>欢迎使用 Reant 组件库</h1>
    </div>
)

storiesOf('欢迎使用Reant', module)
    .addDecorator(withInfo)
    .addParameters({
        info: {
          inline: false,
          headers: false,
        }
      })
    .add('welcome', welcomePage)