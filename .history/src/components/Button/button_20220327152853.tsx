import React, { FC } from "react";
import classNames from "classnames";

export type ButtonType = 'primary' | 'default' | 'danger' | 'link'
export type ButtonSize = 'lg' | 'sm'

// 接口 api
interface BaseButtonProps {
    className ?: string; // classes
    disabled ?: boolean; // whether the button can be clicked
    size ?: ButtonSize; // the size of this button
    btnType ?: ButtonType; // the type of this button
    children: React.ReactNode; // button's text
    href ?: string
}
/*
    将 button 标签的属性方法和 a 标签的属性方法用 交叉类型 (&) 将多个类型合并为一个类型(将多个类型叠加到一起,得到一个新的类型,它包含了所属的所有类型的特性)
        Partial修饰符:将所有的属性变为可选的
    Unions and Intersection type, here i choose to use intersection type to get native button's property and native link's property in HTML
*/
// 添加 button 和 a 的所有原生属性
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互，支持 HTML button 和 a 链接 的所有属性  
 * ## 引用方法
 *
 * ~~~js
 * import { Button } from 'vikingship'
 * ~~~
 */
export const Button: FC<ButtonProps> = (props) => {
    // es6解构赋值将属性取出来
    // Destructuring
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
        默认给它添加 className
            根据传入的值 变为 btn-primary or btn-default or btn-danger or btn-link
            根据传入的值 变为 btn-lg or btn-sm
    */
    const classes = classNames('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        // 'disabled': (btnType === ButtonType.Link) && disabled
        'disabled': (btnType === 'link') && disabled
    })

    // if(btnType === ButtonType.Link && href ) {
    if(btnType === 'link' && href ) {
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
    // btnType: ButtonType.Default
    btnType: 'default'
}

export default Button;