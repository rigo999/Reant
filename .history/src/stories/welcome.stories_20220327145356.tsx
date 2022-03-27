import { storiesOf } from "@storybook/react";

const welcomePage = () => (
    <div>
        <h1>欢迎使用 Reant 组件库</h1>
    </div>
)

storiesOf('欢迎使用Reant', module)
    .add('welcome', welcomePage)