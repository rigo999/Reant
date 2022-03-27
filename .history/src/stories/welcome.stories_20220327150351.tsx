import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

const welcomePage = () => (
    <div>
        <h2>欢迎使用 Reant 组件库</h2>
        <hr />
        <h4>
            <b>使用 React + Typescript 打造的仿 Ant Design 组件库</b>
        </h4>
        <h5>reant 是我用于学习业务组件的一套组件库, 使用 React Hooks 和 Typescript</h5>
        <h5> </h5>
        <h5>用于了解组件设计理念,同时提高自己的 React 和 Typescript 水平</h5>
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