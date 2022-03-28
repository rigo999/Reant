import React from "react";
export interface SubMenuProps {
    /**下拉菜单的索引 */
    index?: string;
    /**下拉菜单选项的文字 */
    title: string;
    /**下拉菜单选型的扩展类名 */
    className?: string;
}
export declare const SubMenu: React.FC<SubMenuProps>;
export default SubMenu;
