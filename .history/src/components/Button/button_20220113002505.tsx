import React from "react";
import classNames from "classnames";
import { type } from "os";

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
/*
    将 button 标签的属性方法和 a 标签的属性方法用 交叉类型 (&) 将多个类型合并为一个类型(将多个类型叠加到一起,得到一个新的类型,它包含了所属的所有类型的特性)
        Partial修饰符:将所有的属性变为可选的
*/
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
const Button: React.FC<ButtonProps> = (props) => {
    // es6解构赋值取出来
    const {
        btnType,
        className,
        disabled,
        size,
        children,
        href,
        ...restProps
    } = props

    /*
        默认给它添加className
        根据传入的值 变为 btn-lg or btn-primary
    */
    const classes = classNames('btn', className, {
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
                {...restProps}
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
                {...restProps}
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