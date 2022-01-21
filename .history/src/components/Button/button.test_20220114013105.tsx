import React from "react";
import { render } from '@testing-library/react'
import Button from "./button";

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
        const wrapper = render(<Button>Nice</Button>)
        const element = wrapper.getByText('Nice')
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('BUTTON')
        expect(element).toHaveClass('btn btn-default')
    })
    it('shoud render the correct component based on defferent props', () => {})
    it('shoud render a link when btnType equals link and href is provided', () => {})
    it('shoud render disabled button when disabled set to true', () => {})
})