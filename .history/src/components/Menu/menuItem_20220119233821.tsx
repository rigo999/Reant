import React from "react";
import classNames from "classnames";

export interface MenuItemProps {
    index ?: number;
    disabled ?: boolean;
    className?: string;
    style ?: React.CSSProperties;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
    const {index, disabled, className, style, children} = props;
    const classes = classNames('menu-item', className, {
        'is-disabled': disabled,
        // 与上一级的 defaultIndex 做比较
    })
    return (
        <div className={classes} style={style}>
            {children}2
        </div>
    )
}

export default MenuItem