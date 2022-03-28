import React from "react";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
export declare type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
export interface IconProps extends FontAwesomeIconProps {
    /**支持框架主题, 根据主题显示不同的颜色 */
    theme?: ThemeProps;
}
export declare const Icon: React.FC<IconProps>;
export default Icon;
