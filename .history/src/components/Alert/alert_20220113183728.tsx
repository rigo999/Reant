import React, { useState } from "react";
import classNames from "classnames";
import { title } from "process";

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
    title ?: string; // the title
    alertType ?: AlertType; // the type of this alert
    closable ?: boolean; // whether the alert can be closed
    children ?: React.ReactNode; // the description
    onClose ?: (() => void);
}

const Alert: React.FC<BaseAlertProps> = (props) => {
    // es6解构赋值将属性取出来
    const {
        alertType,
        closable,
        title,
        children,
        onClose
    } = props

    const classes = classNames('alert', {
        [`alert-${alertType}`]: alertType,
        'closable': closable
    })

    const handleClick = () => {
        setVisible(false);
        if (onClose) {
            onClose()
        }
    }

    const [visible, setVisible] = useState(true)
    return (
        <div className={classes}>
            {title ? <h4 className="alert-title">{title}</h4> : null}
            <p className="alert-message">{children}</p>
            {closable ? '关闭' : null}
        </div>
    )
}

Alert.defaultProps = {
    closable: true,
    alertType: AlertType.Default,
    title: "这是标题",
    children: "这是简述"
}

export default Alert