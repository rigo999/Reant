import React from "react";
import { render, RenderResult } from "@testing-library/react";
import Menu, { MenuProps } from "./menu";
import MenuItem from "./menuItem"

const testProps: MenuProps = {
    defaultIndex: 0,
    onSelect: jest.fn(),
    className: 'test',
}
const testVerticalProps: MenuProps = {
    defaultIndex: 0,
    mode: 'vertical',
}
const generateMenu = (props) => {
    return (
        <Menu {...props}>
            <MenuItem index={0}>
                active
            </MenuItem>
            <MenuItem index={1}>
                disabled
            </MenuItem>
            <MenuItem index={2}>
                xyz
            </MenuItem>
        </Menu>
    )
}
// 在 tes suite 外面创建一些变量,方便在 beforeEach(() => {}) 这个函数中使用
// 用 RenderResult 给它强行指定类型
let wrapper: RenderResult, menuElement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement
describe('test Menu and MenuItem component', () => {
    /* beforeEach 这个钩子函数会在每个 case 之前都会跑,将几个 case 中相同的逻辑抽出来复用 */
    beforeEach(() => {
        /*
            wrapper = render(generateMenu(testProps)) 在这里失去了它的类型,用 RenderResult 给它强行指定类型
        */
        wrapper = render(generateMenu(testProps))
        menuElement = wrapper.getByTestId('test-menu')
        wrapper.container.getElementsByClassName('menu')
    })
    it('should render correct Menu and MenuItem based on default props', () => {})
    it('click items should change active and call the right callback', () => {})
    it('should render vertical mode when mode is set to vertical', () => {})
})