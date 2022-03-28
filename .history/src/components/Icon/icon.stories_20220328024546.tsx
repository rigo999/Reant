import { storiesOf } from "@storybook/react";
import Icon from "./icon";
import Button from "../Button";

const defaultIcons = () => (
    <div>
        <Icon icon="check" size="3x"/>
        <Icon icon="times" size="3x"/>
        <Icon icon="anchor" size="3x"/>
        <Icon icon="trash" size="3x"/>
        <Button size="lg" btnType="primary">
            <Icon icon="check"/>
            check
        </Button>
    </div>
)
const defaultIconsText = `
提供了一套常用的图标集合 基于 react-fontawesome
<br />
支持 react-fontawesome 的所有属性, 可以在这里查询 https://github.com/FortAwesome/react-fontawesome
<br />
支持 fontawesome 所有 free-solid-icons , 可以在这里查看所有图标 https://fontawesome.com/icons?d=gallery&s=solid&m=free
### 引用方法
~~~js
import { Icon } from 'reant'
~~~
### 示例代码
~~~js
<div>
    <Icon icon="check" size="3x"/>
    <Icon icon="times" size="3x"/>
    <Icon icon="anchor" size="3x"/>
    <Icon icon="trash" size="3x"/>
    <Button size="lg" btnType="primary">
        <Icon icon="check"/>
        check
    </Button>
</div>
~~~
`

const themeIcons = () => (
    <div>
        <Icon icon="anchor" size="3x" theme="primary"/>
        <Icon icon="check" size="3x" theme="success"/>
        <Icon icon="times" size="3x" theme="danger"/>
        <Icon icon="exclamation-circle" size="3x" theme="warning"/>
        <Icon icon="bell" size="3x" theme="secondary"/>
        <Icon icon="clock" size="3x" theme="info"/>
        <Icon icon="bat" size="3x" theme="light"/>
        <Icon icon="alien" size="3x" theme="dark"/>
    </div>
)
const themeIconsText = `
更多例子请参见: https://github.com/FortAwesome/react-fontawesome
### 示例代码
~~~js
<div>
    <Icon icon="check" size="3x" theme="success"/>
    <Icon icon="times" size="3x" theme="danger"/>
    <Icon icon="anchor" size="3x" theme="primary"/>
    <Icon icon="exclamation-circle" size="3x" theme="warning"/>
</div>
~~~
`

const customIcons = () => (
    <div>
        <Icon icon="spinner" size="3x" theme="primary" spin/>
        <Icon icon="spinner" size="3x" theme="success" pulse/>
    </div>
)
const customIconsText = `
更多例子请参见: https://github.com/FortAwesome/react-fontawesome
### 示例代码
~~~js
<div>
    <Icon icon="spinner" size="3x" theme="primary" spin/>
    <Icon icon="spinner" size="3x" theme="success" pulse/>
</div>
~~~
`

storiesOf('Icon', module)
    .add('Icon', defaultIcons, {info: {source: false, text: defaultIconsText}})
    .add('不同主题的 Icon', themeIcons, {info: {source: false, text: themeIconsText}})
    .add('更多行为的 Icon', customIcons, {info: {source: false, text: customIconsText}})