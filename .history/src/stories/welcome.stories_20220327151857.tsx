import { storiesOf } from "@storybook/react";

storiesOf('欢迎使用Reant', module)
    .add('welcome', () => {
        return (
            <div>
                <h1>欢迎使用 Reant 组件库</h1>
                <hr />
                <p>
                    <b>使用 React + Typescript 打造的仿 Ant Design 组件库</b>
                </p>
                <p>reant 是我用于学习业务组件的一套组件库, 使用 React Hooks 和 Typescript</p>
                <p>用于了解组件设计理念,同时提高自己的 React 和 Typescript 水平</p>
                <h3>安装试试</h3>
                <code>
                    npm install reant --save
                </code>
            </div>
        )
    }, {info: {disable: true}})