import React from "react";
export declare type MenuMode = 'horizontal' | 'vertical';
declare type SlectCallback = (selectedIndex: string) => void;
export interface MenuProps {
    /**默认 active 的菜单项的索引值 */
    defaultIndex?: string;
    /**自定义类名 */
    className?: string;
    /**菜单类型 横向或者纵向 */
    mode?: MenuMode;
    styles?: React.CSSProperties;
    /**点击菜单项触发的回掉函数 */
    onSelect?: SlectCallback;
    /**设置子菜单的默认打开 只在纵向模式下生效 */
    defaultOpenSubmenu?: string[];
}
interface IMenuContext {
    index: string;
    onSelect?: SlectCallback;
    mode?: MenuMode;
    defaultOpenSubmenu?: string[];
}
export declare const MenuContext: React.Context<IMenuContext>;
export declare const Menu: React.FC<MenuProps>;
export default Menu;
