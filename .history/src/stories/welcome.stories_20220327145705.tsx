import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

const welcomePage = () => (
    <div>
        <h2>
            <b>欢迎使用 Reant 组件库</b>
        </h2>
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