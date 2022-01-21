import React from "react";
import { render, fireEvent } from '@testing-library/react'
import Button, { ButtonProps, ButtonSize, ButtonType } from "./button";

const defaultProps = {
    onClick: jest.fn()
}

const testProps: ButtonProps = {
    btnType: ButtonType.Primary,
    size: ButtonSize.Large,
    classsName: 'klass'
}

// create a case to test
/*
    test('our first react test case', () => {
        // render instance to real DOM node
        const wrapper = render(<Button>Nice</Button>)
        // use method
        const element = wrapper.queryByText('Nice')
        expect(element).toBeTruthy() // 是否为真
        expect(element).toBeInTheDocument() // 组件是否在文档上
    })
*/

// 分类
describe('test Button component', () => {
    it('shoud render the correct default button', () => {
        const wrapper = render(<Button {...defaultProps}>Nice</Button>)
        // method .getByText return HTML node
        const element = wrapper.getByText('Nice')
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('BUTTON')
        expect(element).toHaveClass('btn btn-default')
        fireEvent.click(element)
        expect(defaultProps.onClick).toHaveBeenCalled()
    })
    it('shoud render the correct component based on defferent props', () => {
        // const wrapper = render(<Button {...testProps}>Nice</Button>)
        // // method .getByText return HTML node
        // const element = wrapper.getByText('Nice')
        // expect(element).toBeInTheDocument()
        // expect(element).toHaveClass('btn-primary btn-lg')
    })
    it('shoud render a link when btnType equals link and href is provided', () => {})
    it('shoud render disabled button when disabled set to true', () => {})
})