import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Select from "./index";

const defaultSelect = () => (
    <Select
        placeholder="请选择"
        onChange={action('changed')}
        onVisibleChange={action('visible')}
    >
        <Select.Option value="nihao" />
        <Select.Option value="nihao2" />
        <Select.Option value="nihao3" />
        <Select.Option value="disabled" disabled/>
        <Select.Option value="nihao5" />
    </Select>
)
const multipleSelect = () => (
    <Select
        placeholder="支持多选欧！"
        onChange={action('changed')}
        onVisibleChange={action('visible')}
        multiple
    >
        <Select.Option value="nihao" />
        <Select.Option value="nihao2" />
        <Select.Option value="nihao3" />
        <Select.Option value="simpleui" />
        <Select.Option value="simpleui" />
    </Select>
)

const disabledSelect = () => (
    <Select
        placeholder="禁用啦！"
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