import React, { useState } from "react";
import classNames from "classnames";
import Icon from "../Icon/icon";
import Transition from "../Transition/transition";

// 枚举 props 属性
// export enum AlertType {
//     // type 类型
//     Success = 'success',
//     Default = 'default',
//     Danger = 'danger',
//     Warning = 'warning'
// }
export type AlertType = 'success' | 'default' | 'danger' | 'warning'

// 接口 api
interface BaseAlertProps {
    title: string; // the title
    description ?: string; // the description
    type ?: AlertType; // the type of this alert
    closable ?: boolean; // whether the alert can be closed
    onClose ?: (() => void);
}

const Alert: React.FC<BaseAlertProps> = (props) => {

    const [visible, setVisible] = useState(true)

    // es6 解构赋值将属性取出来
    const {
        type,
        closable,
        title,
        description,
        onClose
    } = props

    const classes = classNames('reant-alert', {
        [`reant-alert-${type}`]: type,
    })
    const titleClass = classNames('reant-alert-title', {
        'bold-title': description
    })

    const handleClose = () => {
        setVisible(false);
        if (onClose) {
            onClose()
        }
        setVisible(false)
    }

    return (
        <Transition
            in={visible}
            timeout={300}
            animation="zoom-in-top"
        >
            <div className={classes}>
                <span className={titleClass}>
                    {title}
                </span>
                {description &&
                    <p className="reant-alert-desc">
                        {description}
                    </p>
                }
                {closable &&
                    <span
                        className="reant-alert-close"
                        onClick={handleClose}
                    >
                        <Icon icon="times"/>
                    </span>
                }
            </div>
        </Transition>
    )
}

Alert.defaultProps = {
    closable: true,
    type: "default",
    description: "description"
}

export default Alert