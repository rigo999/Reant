import { storiesOf } from "@storybook/react";

const welcomPageText = `
### 安装试试
~~~javascript
npm install reant --save
~~~
### 使用
~~~js
// 加载样式
import 'reant/dist/index.css'
// 引入组件
import { Button } from 'reant'
~~~
`

storiesOf('欢迎使用 Reant', module)
    .add('welcome', () => {
        return (
            <div>
                <h2>欢迎使用 Reant 组件库</h2>
                <hr />
                <p>
                    <b>使用 React + Typescript 打造的仿 Ant Design 组件库</b>
                </p>
                <p>reant 是我用于学习业务组件的一套组件库, 使用 React Hooks 和 Typescript</p>
                <p>用于了解组件设计理念, 同时学习的 React 和 Typescript 的基本使用</p>
                <p>github主页地址: "https://github.com/rigo999/Reant"</p>
            </div>
        )
    }, {info: {source: false, inlines: false, text: welcomPageText}})