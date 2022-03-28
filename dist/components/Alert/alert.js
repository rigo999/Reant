import React, { useState } from "react";
import classNames from "classnames";
import Icon from "../Icon/icon";
import Transition from "../Transition/transition";
export var Alert = function (props) {
    var _a;
    var _b = useState(true), visible = _b[0], setVisible = _b[1];
    // es6 解构赋值将属性取出来
    var type = props.type, closable = props.closable, title = props.title, description = props.description, onClose = props.onClose;
    var classes = classNames('reant-alert', (_a = {},
        _a["reant-alert-".concat(type)] = type,
        _a));
    var titleClass = classNames('reant-alert-title', {
        'bold-title': description
    });
    var handleClose = function () {
        setVisible(false);
        if (onClose) {
            onClose();
        }
        setVisible(false);
    };
    return (React.createElement(Transition, { in: visible, timeout: 300, animation: "zoom-in-top" },
        React.createElement("div", { className: classes },
            React.createElement("span", { className: titleClass }, title),
            description &&
                React.createElement("p", { className: "reant-alert-desc" }, description),
            closable &&
                React.createElement("span", { className: "reant-alert-close", onClick: handleClose },
                    React.createElement(Icon, { icon: "times" })))));
};
Alert.defaultProps = {
    closable: true,
    type: 'default',
};
export default Alert;
