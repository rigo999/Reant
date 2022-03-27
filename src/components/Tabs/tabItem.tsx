import React, { FC } from "react";

export interface TabItemProps {
    /**Tab 选项上面的文字 */
    label: string | React.ReactElement;
    /**Tab 选项是否被禁用 */
    disabled?: boolean;
}

export const TabItem: FC<TabItemProps> = ({ children }) => {
    return (
      <div className="reant-tab-panel">
        {children}
      </div>
    )
  }

  export default TabItem;