import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "./button";

const styles: React.CSSProperties = {
    textAlign: 'center',
  }
const CenterDecorator = (storyFn: any) => <div style={styles}>{storyFn()}</div>

const defaultButton = () => (
    <Button onClick={action('clicked')}>
        default button
    </Button>
)

const buttonWithSize = () => (
    <>
        <Button
            size="sm"
            onClick={action('clicked')}
        >
            small button
        </Button>
        <Button
            size="lg"
            onClick={action('clicked')}
        >
            large button
        </Button>
    </>
)

const buttonWithType = () => (
    <>
        <Button btnType="default">default button</Button>
        <Button btnType="primary">primary button</Button>
        <Button btnType="danger">danger button</Button>
        <Button btnType="link" href="https://https://react.docschina.org/">link button</Button>
    </>
)

storiesOf('Button Component', module)
    .addDecorator(CenterDecorator)
    .add('默认的 Button', defaultButton)
    .add('不同尺寸的 Button', buttonWithSize)
    .add('不同类型的 Button', buttonWithType)