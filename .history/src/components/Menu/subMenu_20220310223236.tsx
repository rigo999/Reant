import React, { FunctionComponentElement, useContext, useState } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";
import { MenuItemProps } from "./menuItem";

// 确定接口 api
export interface SubMenuProps {
    index ?: string;
    title: string;
    className ?: string;
}

const SubMenu: React.FC<SubMenuProps> = ({ index, title, children, className }) => {
    const [ menuOpen, setOpen ] = useState(false)
    const context = useContext(MenuContext)
    const classes = classNames('menu-item submenu-item', className, {
        'is-active': context.index === index
    })
    // 点击
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()
        setOpen(!menuOpen)
    }
    // 为了打开关闭平滑一点,设置一个外面的 timer 来作为 setTimeOut
    let timer: any
    // hover
    const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
        clearTimeout(timer) // 每次调用前清除timer
        e.preventDefault()
        timer = setTimeout(() => {
            setOpen(toggle)
        }, 300)
    }
    // 创建三元表达式,纵向发生点击事件,横向发生 hover 事件
    const clickEvents = context.mode === 'vertical' ? {
        onClick: handleClick
    } : {}
    const hoverEvents =context.mode !== 'vertical' ? {
        onMouseEnter: (e: React.MouseEvent) => { handleMouse(e,true) },
        onMouseLeave: (e: React.MouseEvent) => { handleMouse(e,false) }
    } : {}
    // 新建一个 renderChildren() 函数来 渲染 下拉菜单里的内容
    const renderChildren = () => {
        // 添加类,默认添加 reant-submenu , 为 true 时则添加 menu-opened
        const subMenuClasses = classNames('reant-submenu', {
            'menu-opened': menuOpen,
        })
        const childrenComponent = React.Children.map(children, (child, i) => {
            // 做一个类型断言
            const childElement = child as FunctionComponentElement<MenuItemProps>
            if(childElement.type.displayName === 'MenuItem') {
                return React.cloneElement(childElement, {
                    index: `${index}-${i}`
                })
            } else {
                console.error("Warning: SubMenu has a child which is not a MenuItem component")
            }
        })
        return (
            <ul className={subMenuClasses}>
                {childrenComponent}
            </ul>
        )
    }
    return (
        // 传入,当 mode 为 vertical 的时候, click 是有效的,为 horizontal 的时候, hover 是有效的
        <li key={index} className={classes} {...hoverEvents}>
            <div className="submenu-title" {...clickEvents}>
                {title}
            </div>
            {renderChildren()}
        </li>
    )
}

SubMenu.displayName ='SubMenu'
export default SubMenu