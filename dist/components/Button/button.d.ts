import React, { FC } from "react";
export declare type ButtonType = 'primary' | 'default' | 'danger' | 'link';
export declare type ButtonSize = 'lg' | 'sm';
interface BaseButtonProps {
    /**自定义类名 */
    className?: string;
    /**设置 Button 的禁用 */
    disabled?: boolean;
    /**设置 Button 的尺寸 */
    size?: ButtonSize;
    /**设置 Button 的类型 */
    btnType?: ButtonType;
    /**设置 Button 的子元素 */
    children: React.ReactNode;
    /** 设置链接按钮跳转网址，当btnType='link' 时需填入*/
    href?: string;
}
declare type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
declare type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;
export declare type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
export declare const Button: FC<ButtonProps>;
export default Button;
