import React, { FunctionComponentElement, useContext, useState } from "react";
import classNames from "classnames";
// import { CSSTransition } from "react-transition-group";
import { MenuContext } from "./menu";
import { MenuItemProps } from "./menuItem";
import Icon from "../Icon/icon";
import Transition from "../Transition/transition";


// 确定接口 api
export interface SubMenuProps {
    index ?: string;
    title: string;
    className ?: string;
}

const SubMenu: React.FC<SubMenuProps> = ({ index, title, children, className }) => {
    const context = useContext(MenuContext)
    // 因为要调用上面的方法,所以定义一个变量 openedSubMenu 并做一个断言
    const openedSubMenu = context.defaultOpenSubmenu as Array<string>
    const isOpened = (index && context.mode === 'vertical') ? openedSubMenu.includes(index) : false
    const [ menuOpen, setOpen ] = useState(isOpened)
    const classes = classNames('menu-item submenu-item', className, {
        'is-active': context.index === index,
        'is-vertical': context.mode === 'vertical',
        'is-opened': menuOpen,
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
            // <CSSTransition
            //     in={menuOpen} // 从无到有自动添加的类名
            //     timeout={300} // 从 active 到 done 自定义的时间段
            //     classNames="zoom-in-top" // 自定义的名称
            //     appear // 假如默认的 menuOpened 是 true 的话,第一次也会默认执行整个动画过程(因为 defaultOpenSubmenu 这个属性)
            //     unmountOnExit // 因为用 display 属性控制子节点,进入的动画效果正常,但是退出的动画效果不正常(退出时在动画效果之前就 display: none, 所以动画效果不正常显示),所以使用 unmountOnExit 控制子节点直接存在或者消失
            // >
            //     <ul className={subMenuClasses}>
            //         {childrenComponent}
            //     </ul>
            // </CSSTransition>

            <Transition
                in={menuOpen}
                timeout={300}
                animation="zoom-in-top"
            >
                <ul className={subMenuClasses}>
                    {childrenComponent}
                </ul>
            </Transition>
        )
    }
    return (
        // 传入,当 mode 为 vertical 的时候, click 是有效的,为 horizontal 的时候, hover 是有效的
        <li key={index} className={classes} {...hoverEvents}>
            <div className="submenu-title" {...clickEvents}>
                {title}
                <Icon icon="angle-down" className="arrow-icon"/>
            </div>
            {renderChildren()}
        </li>
    )
}

SubMenu.displayName ='SubMenu'
export default SubMenu