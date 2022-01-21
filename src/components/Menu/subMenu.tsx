import React, { FunctionComponentElement, useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";
import { MenuItemProps } from "./menuItem";

// 确定接口 api
export interface SubMenuProps {
    index ?: number;
    title: string;
    className ?: string;
}

const SubMenu: React.FC<SubMenuProps> = ({ index, title, children, className }) => {
    const context = useContext(MenuContext)
    const classes = classNames('menu-item submenu-item', className, {
        'is-active': context.index === index
    })
    // 新建一个 renderChildren() 函数来 渲染 下拉菜单里的内容
    const renderChildren = () => {
        const childrenComponent = React.Children.map(children, (child, i) => {
            // 做一个类型断言
            const childElement = child as FunctionComponentElement<MenuItemProps>
            if(childElement.type.displayName === 'MenuItem') {
                return childElement
            } else {
                console.error("Warning: SubMenu has a child which is not a MenuItem component")
            }
        })
        return (
            <ul className='reant-submenu'>
                {childrenComponent}
            </ul>
        )
    }
    return (
        <li key={index} className={classes}>
            <div className="submenu-title">
                {title}
            </div>
            {renderChildren()}
        </li>
    )
}

SubMenu.displayName ='SubMenu'
export default SubMenu