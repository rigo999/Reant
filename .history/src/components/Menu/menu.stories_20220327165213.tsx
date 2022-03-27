import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Menu from "./menu";
import MenuItem from "./menuItem";
import SubMenu from "./subMenu";

const styles: React.CSSProperties = {
    width: "400px",
}
const MenuDecorator = (storyFn: any) => <div style={styles}>{storyFn()}</div>

const herizontalMenu = () => (
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
                琴吹
            </MenuItem>
        </SubMenu>
    </Menu>
)