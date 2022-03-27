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
const defaultSelectText = `
弹出一个下拉菜单给用户选择操作, 用于代替原生的选择器, 或者需要一个更优雅的多选器时
### 引用方法
~~~js
import { Select } from 'reant'
// 然后可以使用 <Select> 和 <Select.Option>
~~~
### 示例代码
~~~js
<div>
    <Select
        placeholder="选点啥"
        onVisibleChange={action('visible')}
    >
        <Select.Option value="So you think you can tell" />
        <Select.Option value="Heaven from hell" />
        <Select.Option value="Blue skies from pain" />
        <Select.Option value="Can you tell a green field" disabled/>
        <Select.Option value="From a cold steel rail?" />
    </Select>
</div>
~~~
`

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
const multipleSelectText = `
### 示例代码
~~~js
<div>
    <Select
        placeholder="多选点啥"
        onVisibleChange={action('visible')}
        multiple
    >
        <Select.Option value="So you think you can tell" />
        <Select.Option value="Heaven from hell" />
        <Select.Option value="Blue skies from pain" />
        <Select.Option value="Can you tell a green field" disabled/>
        <Select.Option value="From a cold steel rail?" />
    </Select>
</div>
~~~
`

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
const disabledSelectText = `
### 示例代码
~~~js
<div>
    <Select
        placeholder="已经禁用了"
        disabled
    >
        <Select.Option value="nihao" />
        <Select.Option value="nihao2" />
        <Select.Option value="nihao3" />
    </Select>
</div>
~~~
`

storiesOf('选择器 Select', module)
    .add('基础 Select', defaultSelect, {info: {source: false, text: defaultSelectText}})
    .add('支持多选的 Select', multipleSelect, {info: {source: false, text: multipleSelectText}})
    .add('被禁用的 Select', disabledSelect, {info: {source: false, text: disabledSelectText}})