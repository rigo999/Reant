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

storiesOf('提示 Alert', module)
    .addDecorator(AlertDecorator)
    .add('默认的 Alert', defaultAlert)
