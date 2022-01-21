import React, { useState, createContext } from "react";
import classNames from "classnames";

/* 将常用到的提出来作为 type 使用 */
// 字符串字面量,规定只能使用规定的值,类似枚举 enum
export type MenuMode = 'horizontal' | 'vertical'  // 水平或垂直
type SlectCallback = (selectedIndex: number) => void

// 接口 api, 因为要给子组件用,所以要 export 出去
export interface MenuProps {
    defaultIndex ?: number;
    className ?: string;
    mode ?: MenuMode;
    styles ?: React.CSSProperties
    onSelect ?: SlectCallback;
}

// 创捷 api 接口传递 index 和 onSelect 事件方法
interface IMenuContext {
    index: number;
    onSelect ?: SlectCallback;
}

// 创建 context 因为要给子组件用所以要 export 出去
export const MenuContext = createContext<IMenuContext>({index: 0/* 这里为初始值 */})
const Menu: React.FC<MenuProps> = (props) => {
    const { className, mode, styles, children, defaultIndex, onSelect } = props;
    /*
    因为点击 menuItem 会切换 active 的状态,而且 active 有且只有一个
        在本父组件 创建 一个 state, 指示 active 是哪个
    */
    const [ currentActiveIndex, setCurrentActiveIndex ] = useState(defaultIndex)
    /*
        默认给它添加 className
            根据传入的值 添加 menu-vertical
    */
    const classes = classNames('reant-menu', className, {
        'menu-vertical': mode === 'vertical'
    })
    /*
        创建一个点击事件函数
            1. 点击 menuItem 以后发生的变化
            2. 父组件 onSelect 发生 调用,用户可能想对点击之后的回调做一些 自定义 操作
    */
    const handleClick = (index: number) => {
        setCurrentActiveIndex(index)
        // onSelect 有可能存在有可能不存在,做一个判断
        if(onSelect) {
            onSelect(index)
        }
    }
    /*
        创建传递给子组件的 context
            子组件需要:
                currentActiveIndex 用来判断子组件 li 要不要高亮
                onSelect 回调函数,当点击子组件时进行触发
    */
    const passedContext: IMenuContext = {
        /*
            index 为 number 类型,currentActiveIndex 为 { number | undefined } 联合类型
                这里做一个三元式判断,假如 currentActiveIndex 存在,等于 currentActiveIndex;不存在,等于 0 (默认值)
        */
        index: currentActiveIndex ? currentActiveIndex : 0,
        onSelect: handleClick,
    }
    return (
        <ul className={classes} style={styles}>
            {/* 传入,将 context 注入到 provider 里面了 */}
            <MenuContext.Provider value={passedContext}>
                {children}
            </MenuContext.Provider>
        </ul>
    )
}

Menu.defaultProps = {
    defaultIndex: 0,
    mode: 'horizontal'
}

export default Menu