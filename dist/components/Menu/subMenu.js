var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useContext, useState } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";
import Icon from "../Icon/icon";
import Transition from "../Transition/transition";
export var SubMenu = function (_a) {
    var index = _a.index, title = _a.title, children = _a.children, className = _a.className;
    var context = useContext(MenuContext);
    // 因为要调用上面的方法,所以定义一个变量 openedSubMenu 并做一个断言
    var openedSubMenu = context.defaultOpenSubmenu;
    var isOpened = (index && context.mode === 'vertical') ? openedSubMenu.includes(index) : false;
    var _b = useState(isOpened), menuOpen = _b[0], setOpen = _b[1];
    var classes = classNames('menu-item submenu-item', className, {
        'is-active': context.index === index,
        'is-vertical': context.mode === 'vertical',
        'is-opened': menuOpen,
    });
    // 点击
    var handleClick = function (e) {
        e.preventDefault();
        setOpen(!menuOpen);
    };
    // 为了打开关闭平滑一点,设置一个外面的 timer 来作为 setTimeOut
    var timer;
    // hover
    var handleMouse = function (e, toggle) {
        clearTimeout(timer); // 每次调用前清除timer
        e.preventDefault();
        timer = setTimeout(function () {
            setOpen(toggle);
        }, 300);
    };
    // 创建三元表达式,纵向发生点击事件,横向发生 hover 事件
    var clickEvents = context.mode === 'vertical' ? {
        onClick: handleClick
    } : {};
    var hoverEvents = context.mode !== 'vertical' ? {
        onMouseEnter: function (e) { handleMouse(e, true); },
        onMouseLeave: function (e) { handleMouse(e, false); }
    } : {};
    // 新建一个 renderChildren() 函数来 渲染 下拉菜单里的内容
    var renderChildren = function () {
        // 添加类,默认添加 reant-submenu , 为 true 时则添加 menu-opened
        var subMenuClasses = classNames('reant-submenu', {
            'menu-opened': menuOpen,
        });
        var childrenComponent = React.Children.map(children, function (child, i) {
            // 做一个类型断言
            var childElement = child;
            if (childElement.type.displayName === 'MenuItem') {
                return React.cloneElement(childElement, {
                    index: "".concat(index, "-").concat(i)
                });
            }
            else {
                console.error("Warning: SubMenu has a child which is not a MenuItem component");
            }
        });
        return (React.createElement(Transition, { in: menuOpen, timeout: 300, animation: "zoom-in-top" },
            React.createElement("ul", { className: subMenuClasses }, childrenComponent)));
    };
    return (
    // 传入,当 mode 为 vertical 的时候, click 是有效的,为 horizontal 的时候, hover 是有效的
    React.createElement("li", __assign({ key: index, className: classes }, hoverEvents),
        React.createElement("div", __assign({ className: "submenu-title" }, clickEvents),
            title,
            React.createElement(Icon, { icon: "angle-down", className: "arrow-icon" })),
        renderChildren()));
};
SubMenu.displayName = 'SubMenu';
export default SubMenu;
