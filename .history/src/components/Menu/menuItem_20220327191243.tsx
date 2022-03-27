import React, { useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";

// 接口 api
export interface MenuItemProps {
    /**菜单项的索引 */
    index ?: string;
    /**选项是否被禁用 */
    disabled ?: boolean;
    /**选项扩展的 className */
    className ?: string;
    /**选项的自定义 style */
    style ?: React.CSSProperties;
}

export const MenuItem: React.FC<MenuItemProps> = (props) => {
    const {index, disabled, className, style, children} = props;
    /*
        默认给它添加 className
            根据传入的值 添加 is-disabled
    */
    // 获取 context, 拿到 index 和 onSelect
    const context = useContext(MenuContext)
    const classes = classNames('menu-item', className, {
        'is-disabled': disabled,
        // 与上一级的 defaultIndex 做比较
        'is-active': context.index === index
    })
    /* 创建一个回调函数 */
    const handleClick = () => {
        // onSelect 有可能存在有可能不存在,并且有 disabled 影响,做一个判断
        if(context.onSelect && !disabled && (typeof index === 'string')) {
            context.onSelect(index)
        }
    }
    return (
        <li
            className={classes}
            style={style}
            onClick={handleClick}
        >
            {children}
        </li>
    )
}

MenuItem.displayName = 'MenuItem'
export default MenuItem