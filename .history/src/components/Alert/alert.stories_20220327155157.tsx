import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Alert from "./alert";

const styles: React.CSSProperties = {
    width: "400px",
}
const AlertDecorator = (storyFn: any) => <div style={styles}>{storyFn()}</div>


const defaultAlert = () => (
    <Alert title="这是一个提示"></Alert>
)

const alertWithDesc = () => (
    <Alert title="这是一个提示" description="这是一段描述"></Alert>
)

const alertWithTypes = () => (
    <div>
        <Alert title="默认提示" type="default"></Alert>
        <Alert title="成功提示" type="success"></Alert>
        <Alert title="危险提示" type="danger"></Alert>
        <Alert title="警告提示" type="warning"></Alert>
    </div>
)

const alertCanNotClose = () => (
    <Alert title="不可关闭的提示" description="这个提示不能关闭" closable={false}></Alert>
)

storiesOf('提示 Alert', module)
    .addDecorator(AlertDecorator)
    .add('默认的 Alert', defaultAlert)
    .add('添加描述的 Alert', alertWithDesc)
    .add('不同类型的 Alert', alertWithTypes)
    .add('不可关闭的 Alert', alertCanNotClose)
