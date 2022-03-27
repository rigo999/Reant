import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "./button";

// const styles: React.CSSProperties = {
//     width: "200px",
//     height: "200px",
//     boxShadow: "2px"
// }
// const CenterDecorator = (storyFn: any) => <div style={styles}>{storyFn()}</div>

const defaultButton = () => (
    <Button onClick={action('clicked')}>
        default button
    </Button>
)

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

const buttonWithType = () => (
    <div>
        <Button btnType="default" onClick={action('clicked')}>default button</Button>
        <Button btnType="primary" onClick={action('clicked')}>primary button</Button>
        <Button btnType="danger" onClick={action('clicked')}
        >danger button</Button>
        <Button btnType="link" href="https://https://react.docschina.org/">link button</Button>
    </div>
)

storiesOf('按钮 Button', module)
    // .addDecorator(CenterDecorator)
    .add('默认的 Button', defaultButton)
    .add('不同尺寸的 Button', buttonWithSize)
    .add('不同类型的 Button', buttonWithType)