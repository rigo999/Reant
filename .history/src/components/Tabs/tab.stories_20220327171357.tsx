import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Icon from "../Icon/icon";
import Tabs from "./tabs";
import TabItem from "./tabItem";

const defaultTabs = () => (
    <Tabs onSelect={action('selected')}>
        <TabItem label="Deep Purple">April</TabItem>
        <TabItem label="Iron Maiden">trooper</TabItem>
        <TabItem label="Megadeth">Public Enemy No.1</TabItem>
    </Tabs>
)

const cardTabs = () => (
    <Tabs onSelect={action('selected')} type="card">
        <TabItem label='橘子海'>夏日漱石</TabItem>
        <TabItem label="九宝">特斯河之赞</TabItem>
        <TabItem label="腰乐队" disabled>一个短篇</TabItem>
    </Tabs>
)

const customTabs = () => (
    <Tabs onSelect={action('selected')} type="card">
        <TabItem label={<><Icon icon="check-circle" />  自定义图标</>}>this is card one</TabItem>
        <TabItem label="tab2">this is content two</TabItem>
    </Tabs>
)
storiesOf('选项卡 Tabs', module)
    .add('默认的 Tabs', defaultTabs)
    .add('选项卡样式的 Tabs', cardTabs)
    .add('自定义选项卡样式', customTabs)