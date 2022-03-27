import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Menu from "./menu";
import MenuItem from "./menuItem";
import SubMenu from "./subMenu";

const styles: React.CSSProperties = {
    width: "500px",
}
const MenuDecorator = (storyFn: any) => <div style={styles}>{storyFn()}</div>

const horizontalMenu = () => (
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
)

const verticalMenu = () => (
    <Menu defaultIndex='0' onSelect={action('selected!')} mode="vertical">
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
                琴吹
            </MenuItem>
        </SubMenu>
    </Menu>
)

const openedMenu = () => (
    <Menu defaultIndex='0' onSelect={action('selected!')} mode="vertical" defaultOpenSubmenu={['3']}>
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
                琴吹
            </MenuItem>
        </SubMenu>
    </Menu>
  )

storiesOf('菜单 Menu', module)
    .addDecorator(MenuDecorator)
    .add('横向的 Menu', horizontalMenu )
    .add('纵向的 Menu', verticalMenu)
    .add('默认展开的纵向 Menu', openedMenu)