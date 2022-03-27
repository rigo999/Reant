import React from "react";
import classNames from "classnames";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

// 将 theme 的字面量限定在字符串当中
export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'

// 定义一个 props 继承 FontAwesomeIcon 的所有属性
export interface IconProps extends FontAwesomeIconProps {
    /**设置 Icon 的主题, 有八种可选 */
    theme ?: ThemeProps
}

const Icon: React.FC<IconProps> = (props) => {

    // icon-primary
    const {
        className,
        theme,
        ...restProps
    } = props // 将 className 和 theme 和其他剩下的所有 props 赋给 props

    const classes = classNames('reant-icon', className, {
        [`icon-${theme}`]: theme
    })

    return (
        <FontAwesomeIcon
            className={classes}
            {...restProps}
        />
    )
}

export default Icon;