import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Input from "./input";

const defaultInput = () => (
    <Input
        placeholder="来打字吧"
        onChange={action('changed')}
    />
)

const disabledInput = () => (
    <Input
        placeholder="不可以输入哦"
        disabled
    />
)

const iconInput = () => (
    <Input
        placeholder="右边是图标"
        icon="search"
        onClickIcon={action('clicked')}
    />
)

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

const pandInput = () => (
    <div>
        <Input
            defaultValue="react.docschina.org"
            prepend="https://"
        />
        <Input
            defaultValue="www.google"
            append=".com"
        />
    </div>
)


storiesOf('Input', module)
  .add('Input', defaultInput)
  .add('被禁用的 Input', disabledInput)
  .add('带图标的 Input', iconInput)
  .add('大小不同的 Input', sizeInput)
  .add('带前后缀的 Input', pandInput)