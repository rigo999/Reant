import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "./button";

const defaultButton = () => (
    <Button onClick={action('clicked')}>
        default button
    </Button>
)
const defaultButtonText = `
页面中最常用的的按钮元素，适合于完成特定的交互，支持 HTML button 和 a 链接 的所有属性
### 引用方法
~~~js
import { Button } from 'reant'
~~~
### 示例代码
~~~js
<Button>
    default button
</Button>
~~~
`

const buttonWithSize = () => (
    <div>
        <Button size="sm" onClick={action('clicked')}>
            small button
        </Button>
        <Button size="lg" onClick={action('clicked')}>
            large button
        </Button>
    </div>
)
const buttonWithSizeText = `
### 示例代码
~~~js
<Button size="sm">
    small button
</Button>
<Button size="lg">
    large button
</Button>
~~~
`

const buttonWithType = () => (
    <div>
        <Button btnType="default" onClick={action('clicked')}>default button</Button>
        <Button btnType="primary" onClick={action('clicked')}>primary button</Button>
        <Button btnType="danger" onClick={action('clicked')}>danger button</Button>
        <Button btnType="link" href="https://https://react.docschina.org/">link button</Button>
    </div>
)
const buttonWithTypeText = `
### 示例代码
~~~js
<Button btnType="default"}>default button</Button>
<Button btnType="primary"}>primary button</Button>
<Button btnType="danger"}>danger button</Button>
<Button btnType="link" href="https://https://react.docschina.org/">link button</Button>
~~~
`

storiesOf('按钮 Button', module)
    .add('基础 Button', defaultButton, {info: {source: false, text: defaultButtonText}})
    .add('不同尺寸的 Button', buttonWithSize, {info: {source: false, text: buttonWithSizeText}})
    .add('不同类型的 Button', buttonWithType, {info: {source: false, text: buttonWithTypeText}})