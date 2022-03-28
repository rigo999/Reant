import React, { useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";
export var MenuItem = function (props) {
    var index = props.index, disabled = props.disabled, className = props.className, style = props.style, children = props.children;
    /*
        默认给它添加 className
            根据传入的值 添加 is-disabled
    */
    // 获取 context, 拿到 index 和 onSelect
    var context = useContext(MenuContext);
    var classes = classNames('menu-item', className, {
        'is-disabled': disabled,
        // 与上一级的 defaultIndex 做比较
        'is-active': context.index === index
    });
    /* 创建一个回调函数 */
    var handleClick = function () {
        // onSelect 有可能存在有可能不存在,并且有 disabled 影响,做一个判断
        if (context.onSelect && !disabled && (typeof index === 'string')) {
            context.onSelect(index);
        }
    };
    return (React.createElement("li", { className: classes, style: style, onClick: handleClick }, children));
};
MenuItem.displayName = 'MenuItem';
export default MenuItem;
