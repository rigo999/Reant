import React from "react";
export declare type AlertType = 'success' | 'default' | 'danger' | 'warning';
export interface AlertProps {
    /**提示标题 */
    title: string;
    /**提示描述 */
    description?: string;
    /**类型 四种可选 针对四种不同的场景 */
    type?: AlertType;
    /**是否显示关闭图标*/
    closable?: boolean;
    /**关闭 alert 时触发的事件 */
    onClose?: (() => void);
}
export declare const Alert: React.FC<AlertProps>;
export default Alert;
