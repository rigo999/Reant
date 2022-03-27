import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Input from "./input";

const defaultInput = () => (
    <Input
        placeholder="来打字吧"
        onChange={action('changed')}
    />
)
const defaultInputText = `
Input 输入框 通过鼠标或键盘输入内容，是最基础的表单域的包装
### 引用方法
~~~js
import { Input } from 'reant'
~~~
### 示例代码
~~~js
<div>
    <Input
        placeholder="来打字吧"
        onChange={action('changed')}
    />
</div>
~~~
`

const disabledInput = () => (
    <Input
        placeholder="不可以输入哦"
        disabled
    />
)
const disabledInputText = `
### 示例代码
~~~js
<div>
    <Input
        placeholder="不可以输入哦"
        disabled
    />
</div>
~~~
`

const iconInput = () => (
    <Input
        placeholder="右边是图标"
        icon="search"
        onClickIcon={action('clicked')}
    />
)
const iconInputText = `
### 示例代码
~~~js
<div>
    <Input
        placeholder="右边是图标"
        icon="search"
        onClickIcon={action('clicked')}
    />
</div>
~~~
`

const sizeInput = () => (
    <div>
        <Input
            defaultValue="大大大大"
            size="lg"
        />
        <Input
            placeholder="小小小小"
            size="sm"
        />
    </div>
)
const sizeInputText = `
### 示例代码
~~~js
<div>
    <Input
        defaultValue="大大大大"
        size="lg"
    />
    <Input
        placeholder="小小小小"
        size="sm"
    />
</div>
~~~
`

const pandInput = () => (
    <div>
        <Input
            defaultValue="react.docschina.org"
            prepend="https://"
        />
        <Input
            placeholder="www.google"
            append=".com"
        />
    </div>
)
const pandInputText = `
### 示例代码
~~~js
<div>
    <Input
        defaultValue="react.docschina.org"
        prepend="https://"
    />
    <Input
        placeholder="www.google"
        append=".com"
    />
</div>
~~~
`


storiesOf('输入框 Input', module)
    .add('基础 Input', defaultInput, {info: {source: false, text: defaultInputText}})
    .add('被禁用的 Input', disabledInput, {info: {source: false, text: disabledInputText}})
    .add('带图标的 Input', iconInput, {info: {source: false, text: iconInputText}})
    .add('大小不同的 Input', sizeInput, {info: {source: false, text: sizeInputText}})
    .add('带前后缀的 Input', pandInput, {info: {source: false, text: pandInputText}})