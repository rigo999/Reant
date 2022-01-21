import React from "react";
import classNames from "classnames";

type MenuMode = 'horizontal' | 'vertical'
export interface MenuProps {
    defaultIndex ?: number;
    className ?: string;
    mode ?: MenuMode;
    styles ?: React.CSSProperties
    onSelect ?: (selectedIndex: number) => void;
}

const Menu: React.FC<MenuProps> = (props) => {
    const { className, mode, styles, children, defaultIndex } = props;
    const classes = classNames('reant-menu', className, {
        'menu-vertical': mode === 'vertical'
    })
    return (
        <ul className={classes} style={styles}>
            {children}
        </ul>
    )
}

Menu.defaultProps = {
    defaultIndex: 0,
    mode: 'horizontal'
}

export default Menu