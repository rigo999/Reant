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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import classNames from "classnames";
export var Button = function (props) {
    var _a;
    // es6解构赋值将属性取出来
    // Destructuring
    var btnType = props.btnType, className = props.className, disabled = props.disabled, size = props.size, children = props.children, href = props.href, restProps = __rest(props
    /*
        默认给它添加 className
            根据传入的值 变为 btn-primary or btn-default or btn-danger or btn-link
            根据传入的值 变为 btn-lg or btn-sm
    */
    , ["btnType", "className", "disabled", "size", "children", "href"]);
    /*
        默认给它添加 className
            根据传入的值 变为 btn-primary or btn-default or btn-danger or btn-link
            根据传入的值 变为 btn-lg or btn-sm
    */
    var classes = classNames('btn', className, (_a = {},
        _a["btn-".concat(btnType)] = btnType,
        _a["btn-".concat(size)] = size,
        // 'disabled': (btnType === ButtonType.Link) && disabled
        _a['disabled'] = (btnType === 'link') && disabled,
        _a));
    // if(btnType === ButtonType.Link && href ) {
    if (btnType === 'link' && href) {
        /*
            link 是把 disabled 写到 a 链接 className 里面
        */
        return (React.createElement("a", __assign({ className: classes, href: href }, restProps), children));
    }
    else {
        /*
            button 本身就有 disabled 属性
        */
        return (React.createElement("button", __assign({ className: classes, disabled: disabled }, restProps), children));
    }
};
Button.defaultProps = {
    disabled: false,
    // btnType: ButtonType.Default
    btnType: 'default'
};
export default Button;
