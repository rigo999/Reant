import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Alert from "./alert";

const defaultAlert = () => (
    <Alert title="这是一个提示"></Alert>
)

storiesOf('提示 Alert', module)
    .add('默认的 Alert', defaultAlert)
