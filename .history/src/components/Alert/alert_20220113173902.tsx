import React from "react";
import classNames from "classnames";

// 枚举 props 属性
export enum AlertType {
    // type 类型
    Success = 'success',
    Default = 'default',
    Danger = 'danger',
    Warning = 'warning'
}

// 接口api
interface BaseAlertProps {
    className ?: string; // classes
    title: string; // the title
    alertType ?: AlertType; // the type of this alert
    closeble ?: boolean; // whether the alert can be closed
    children: React.ReactNode; // the description
    // onClose ?: (() => void);
}

const Alert: React.FC<BaseAlertProps> = (props) => {
    // es6解构赋值将属性取出来
    const {
        alertType,
        className,
        closeble,
        title,
        children,
        // onClose
    } = props
}

const classes = classNames('alert', {
    [`alert-${alertType}`]: alertType,

})