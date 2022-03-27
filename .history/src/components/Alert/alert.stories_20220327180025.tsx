import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Alert from "./alert";

const styles: React.CSSProperties = {
    width: "500px",
}
const AlertDecorator = (storyFn: any) => <div style={styles}>{storyFn()}</div>

const defaultAlert = () => (
    <Alert title="这是一个提示" onClose={action('closed')}/>
)
const defaultAlertText = `
用于页面中展示重要的提示信息, 点击右侧的 X 提示自动消失
### 引用方法
~~~js
import { Alert } from 'reant'
~~~
### 示例代码
~~~js
<div>
    <Alert title="这是一个提示"/>
</div>
~~~
`

const alertWithDesc = () => (
    <Alert title="这是一个提示" description="这是一段描述" onClose={action('closed')}/>
)
const alertWithDescText = `
### 示例代码
~~~js
<div>
    <Alert title="这是一个提示" description="这是一段描述" />
</div>
~~~
`

const alertWithTypes = () => (
    <div>
        <Alert title="默认提示" type="default" onClose={action('closed')}/>
        <Alert title="成功提示" type="success" onClose={action('closed')}/>
        <Alert title="危险提示" type="danger" onClose={action('closed')}/>
        <Alert title="警告提示" type="warning" onClose={action('closed')}/>
    </div>
)
const alertWithTypesText = `
### 示例代码
~~~js
<div>
    <Alert title="默认提示" type="default"/>
    <Alert title="成功提示" type="success"/>
    <Alert title="危险提示" type="danger"/>
    <Alert title="警告提示" type="warning"/>
</div>
~~~
`

const alertCanNotClose = () => (
    <Alert title="不可关闭的提示" description="这个提示不能关闭" closable={false}/>
)
const alertCanNotCloseText = `
### 示例代码
~~~js
<div>
    <Alert title="这是一个提示" description="这个提示不能关闭" closable={false}/>
</div>
~~~
`

storiesOf('提示 Alert', module)
    .addDecorator(AlertDecorator)
    .add('基础 Alert', defaultAlert, {info: {source: false, text: defaultAlertText}})
    .add('添加描述的 Alert', alertWithDesc, {info: {source: false, text: alertWithDescText}})
    .add('不同类型的 Alert', alertWithTypes, {info: {source: false, text: alertWithTypesText}})
    .add('不可关闭的 Alert', alertCanNotClose, {info: {source: false, text: alertCanNotCloseText}})
