import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Select from "./index";

const defaultSelect = () => (
    <Select
        placeholder="选点啥"
        onChange={action('changed')}
        onVisibleChange={action('visible')}
    >
        <Select.Option value="So you think you can tell" />
        <Select.Option value="Heaven from hell" />
        <Select.Option value="Blue skies from pain" />
        <Select.Option value="Can you tell a green field" disabled/>
        <Select.Option value="From a cold steel rail?" />
    </Select>
)
const multipleSelect = () => (
    <Select
        placeholder="多选点啥"
        onChange={action('changed')}
        onVisibleChange={action('visible')}
        multiple
    >
        <Select.Option value="So you think you can tell" />
        <Select.Option value="Heaven from hell" />
        <Select.Option value="Blue skies from pain" />
        <Select.Option value="Can you tell a green field" disabled/>
        <Select.Option value="From a cold steel rail?" />
    </Select>
)

const disabledSelect = () => (
    <Select
        placeholder="已经禁用了"
        disabled
    >
        <Select.Option value="nihao" />
        <Select.Option value="nihao2" />
        <Select.Option value="nihao3" />
    </Select>
)

storiesOf('选择器 Select', module)
    .add('基础 Select', defaultSelect)
    .add('支持多选的 Select', multipleSelect)
    .add('被禁用的 Select', disabledSelect)