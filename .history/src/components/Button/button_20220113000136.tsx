import React from "react";
import classNames from "classnames";

export enum ButtonSize {
    Large = 'lg',
    Small = 'sm'
}

export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link'
}

// 接口api
interface BaseButtonProps {
    className ?: string;
    disabled ?: boolean;
    size ?: ButtonSize;
    btnType ?: ButtonType;
    children: React.ReactNode;
    href ?: string
}

const Button: React.FC<BaseButtonProps> = (props) => {
    // es6解构赋值取出来
    const {
        btnType,
        disabled,
        size,
        children,
        href
    } = props

    /*
        默认给它添加className
        根据传入的值 变为 btn-lg or btn-primary
    */
    const classes = classNames('btn', {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === ButtonType.Link) && disabled
    })

    if(btnType === ButtonType.Link && href ) {
        /*
            link 是把 disabled 写到 a 链接 className 里面
        */
        return (
            <a
                className={classes}
                href={href}
            >
                {children}
            </a>
        )
    } else {
        /*
            button 本身就有 disabled 属性
        */
        return (
            <button
                className={classes}
                disabled={disabled}
            >
                {children}
            </button>
        )
    }
}

Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Default
}

export default Button