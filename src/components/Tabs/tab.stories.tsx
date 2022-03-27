import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Icon from "../Icon/icon";
import Tabs from "./tabs";
import TabItem from "./tabItem";

const styles: React.CSSProperties = {
    width: "400px",
}
const TabsDecorator = (storyFn: any) => <div style={styles}>{storyFn()}</div>

const defaultTabs = () => (
    <Tabs onSelect={action('selected')}>
        <TabItem label="Deep Purple">April</TabItem>
        <TabItem label="Iron Maiden">trooper</TabItem>
        <TabItem label="Megadeth">Public Enemy No.1</TabItem>
    </Tabs>
)
const defaultTabsText = `
提供平级的区域将大块内容进行收纳和展现, 保持界面整洁。
### 引用方法
~~~js
import { Tabs } from 'reant'
~~~
### 示例代码
~~~js
<div>
    <Tabs>
        <TabItem label="Deep Purple">April</TabItem>
        <TabItem label="Iron Maiden">trooper</TabItem>
        <TabItem label="Megadeth">Public Enemy No.1</TabItem>
    </Tabs>
</div>
~~~
`

const cardTabs = () => (
    <Tabs onSelect={action('selected')} type="card">
        <TabItem label='橘子海'>夏日漱石</TabItem>
        <TabItem label="九宝">特斯河之赞</TabItem>
        <TabItem label="腰乐队" disabled>一个短篇</TabItem>
    </Tabs>
)
const cardTabsText = `
### 示例代码
~~~js
<div>
    <Tabs onSelect={action('selected')} type="card">
        <TabItem label='橘子海'>夏日漱石</TabItem>
        <TabItem label="九宝">特斯河之赞</TabItem>
        <TabItem label="腰乐队" disabled>一个短篇</TabItem>
    </Tabs>
</div>
~~~
`

const customTabs = () => (
    <Tabs onSelect={action('selected')} type="card">
        <TabItem label={<><Icon icon="check-circle" />自定义图标</>}>this is card one</TabItem>
        <TabItem label="tab2">this is content two</TabItem>
    </Tabs>
)
const customTabsText = `
### 示例代码
~~~js
<div>
    <Tabs onSelect={action('selected')} type="card">
        <TabItem label={<><Icon icon="check-circle" />自定义图标</>}>this is card one</TabItem>
        <TabItem label="tab2">this is content two</TabItem>
    </Tabs>
</div>
~~~
`

storiesOf('选项卡 Tabs', module)
    .addDecorator(TabsDecorator)
    .add('基础 Tabs', defaultTabs, {info: {source: false, text: defaultTabsText}})
    .add('选项卡样式的 Tabs', cardTabs, {info: {source: false, text: cardTabsText}})
    .add('自定义选项卡样式', customTabs, {info: {source: false, text: customTabsText}})