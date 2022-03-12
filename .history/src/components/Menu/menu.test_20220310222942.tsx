import React from "react";
import { render, fireEvent, RenderResult, cleanup } from "@testing-library/react";
import Menu, { MenuProps } from "./menu";
import MenuItem from "./menuItem"

const testProps: MenuProps = {
    defaultIndex: '0',
    onSelect: jest.fn(),
    className: 'test',
}
const testVerticalProps: MenuProps = {
    defaultIndex: '0',
    mode: 'vertical',
}
const generateMenu = (props: MenuProps) => {
    return (
        <Menu {...props}>
            <MenuItem>
                active
            </MenuItem>
            <MenuItem disabled>
                disabled
            </MenuItem>
            <MenuItem>
                xyz
            </MenuItem>
            <li>hello</li>
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
        /*
            获取 最外层容器 wrapper 的第二种方法
                wrapper.container.getElementsByClassName('menu')
        */
        activeElement = wrapper.getByText('active')
        disabledElement = wrapper.getByText('disabled')
    })
    it('should render correct Menu and MenuItem based on default props', () => {
        expect(menuElement).toBeInTheDocument()
        expect(menuElement).toHaveClass('reant-menu test')
        expect(menuElement.getElementsByTagName('li').length).toEqual(3)
        expect(activeElement).toHaveClass('menu-item is-active')
        expect(disabledElement).toHaveClass('menu-item is-disabled')
    })
    it('click items should change active and call the right callback', () => {
        const thirdItem = wrapper.getByText('xyz')
        fireEvent.click(thirdItem)
        expect(thirdItem).toHaveClass('is-active')
        expect(activeElement).not.toHaveClass('is-active')
        expect(testProps.onSelect).toHaveBeenCalledWith(2)
        fireEvent.click(disabledElement)
        expect(disabledElement).not.toHaveClass('is-active')
        expect(testProps.onSelect).not.toHaveBeenCalledWith(1)
    })
    it('should render vertical mode when mode is set to vertical', () => {
        /* 每个 case 结束自动调用 cleanup() 方法清除 dom 上的节点,但这里因为重新 const wrapper 渲染了一遍所以要手动删除 */
        cleanup()
        const wrapper = render(generateMenu(testVerticalProps))
        const menuElement = wrapper.getByTestId('test-menu')
        expect(menuElement).toHaveClass('menu-vertical')
    })
})