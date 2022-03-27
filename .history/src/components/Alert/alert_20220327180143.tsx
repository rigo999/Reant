import React, { useState } from "react";
import classNames from "classnames";
import Icon from "../Icon/icon";
import Transition from "../Transition/transition";

// 将 AlertType 的字面量限定在字符串当中
export type AlertType = 'success' | 'default' | 'danger' | 'warning'

// 接口 api
export interface AlertProps {
    title: string;
    description ?: string;
    type ?: AlertType;
    closable ?: boolean;
    onClose ?: (() => void);
}

const Alert: React.FC<AlertProps> = (props) => {

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
        if(onClose) {
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
    type: 'default',
}

export default Alert;