import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Menu from "./menu";
import MenuItem from "./menuItem";
import SubMenu from "./subMenu";

const horizontalMenu = () => (
    <div style={{width: '450px'}}>
        <Menu defaultIndex='0' onSelect={action('selected!')} >
            <MenuItem>
                平家物语
            </MenuItem>
            <MenuItem>
                玉子市场
            </MenuItem>
            <MenuItem disabled>
                吹响吧 上低音号
            </MenuItem>
            <SubMenu title="轻音少女">
                <MenuItem>
                    平泽唯
                </MenuItem>
                <MenuItem>
                    秋山澪
                </MenuItem>
                <MenuItem>
                    中野梓
                </MenuItem>
                <MenuItem>
                    田中井律
                </MenuItem>
                <MenuItem>
                    琴吹紬
                </MenuItem>
            </SubMenu>
        </Menu>
    </div>
)
const horizontalMenuText = `
为网站提供导航功能的菜单, 支持横向纵向两种模式, 支持下拉菜单
### 引用方法
~~~js
import { Menu } from 'reant'
~~~
### 示例代码
~~~js
<div style={{width: '450px'}}>
    <Menu defaultIndex='0'>
        <MenuItem>
            平家物语
        </MenuItem>
        <MenuItem>
            玉子市场
        </MenuItem>
        <MenuItem disabled>
            吹响吧 上低音号
        </MenuItem>
        <SubMenu title="轻音少女">
            <MenuItem>
                平泽唯
            </MenuItem>
            <MenuItem>
                秋山澪
            </MenuItem>
            <MenuItem>
                中野梓
            </MenuItem>
            <MenuItem>
                田中井律
            </MenuItem>
            <MenuItem>
                琴吹紬
            </MenuItem>
        </SubMenu>
    </Menu>
</div>
~~~
`

const verticalMenu = () => (
    <div style={{width: '200px'}}>
        <Menu defaultIndex='0' mode="vertical" onSelect={action('selected!')}>
            <MenuItem>
                平家物语
            </MenuItem>
            <MenuItem>
                玉子市场
            </MenuItem>
            <MenuItem disabled>
                吹响吧 上低音号
            </MenuItem>
            <SubMenu title="轻音少女">
                <MenuItem>
                    平泽唯
                </MenuItem>
                <MenuItem>
                    秋山澪
                </MenuItem>
                <MenuItem>
                    中野梓
                </MenuItem>
                <MenuItem>
                    田中井律
                </MenuItem>
                <MenuItem>
                    琴吹紬
                </MenuItem>
            </SubMenu>
        </Menu>
    </div>
)
const verticalMenuText = `
### 示例代码
~~~js
<div style={{width: '200px'}}>
    <Menu defaultIndex='0' mode="vertical">
        <MenuItem>
            平家物语
        </MenuItem>
        <MenuItem>
            玉子市场
        </MenuItem>
        <MenuItem disabled>
            吹响吧 上低音号
        </MenuItem>
        <SubMenu title="轻音少女">
            <MenuItem>
                平泽唯
            </MenuItem>
            <MenuItem>
                秋山澪
            </MenuItem>
            <MenuItem>
                中野梓
            </MenuItem>
            <MenuItem>
                田中井律
            </MenuItem>
            <MenuItem>
                琴吹紬
            </MenuItem>
        </SubMenu>
    </Menu>
</div>
~~~
`

const openedMenu = () => (
    <div style={{width: '200px'}}>
        <Menu defaultIndex='0' mode="vertical" defaultOpenSubmenu={['3']} onSelect={action('selected!')}>
            <MenuItem>
                平家物语
            </MenuItem>
            <MenuItem>
                玉子市场
            </MenuItem>
            <MenuItem disabled>
                吹响吧 上低音号
            </MenuItem>
            <SubMenu title="轻音少女">
                <MenuItem>
                    平泽唯
                </MenuItem>
                <MenuItem>
                    秋山澪
                </MenuItem>
                <MenuItem>
                    中野梓
                </MenuItem>
                <MenuItem>
                    田中井律
                </MenuItem>
                <MenuItem>
                    琴吹紬
                </MenuItem>
            </SubMenu>
        </Menu>
    </div>
)
const openedMenuText = `
### 示例代码
~~~js
<div style={{width: '200px'}}>
    <Menu defaultIndex='0' mode="vertical" defaultOpenSubmenu={['3']}>
        <MenuItem>
            平家物语
        </MenuItem>
        <MenuItem>
            玉子市场
        </MenuItem>
        <MenuItem disabled>
            吹响吧 上低音号
        </MenuItem>
        <SubMenu title="轻音少女">
            <MenuItem>
                平泽唯
            </MenuItem>
            <MenuItem>
                秋山澪
            </MenuItem>
            <MenuItem>
                中野梓
            </MenuItem>
            <MenuItem>
                田中井律
            </MenuItem>
            <MenuItem>
                琴吹紬
            </MenuItem>
        </SubMenu>
    </Menu>
</div>
~~~
`

storiesOf('菜单 Menu', module)
    .add('横向的 Menu', horizontalMenu, {info: {source: false, text: horizontalMenuText}})
    .add('纵向的 Menu', verticalMenu, {info: {source: false, text: verticalMenuText}})
    .add('默认展开的纵向 Menu', openedMenu, {info: {source: false, text: openedMenuText}})