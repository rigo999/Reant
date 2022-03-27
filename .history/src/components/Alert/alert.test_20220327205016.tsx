import React from "react";
import { render, fireEvent, waitFor  } from "@testing-library/react";
import Alert,{ AlertProps } from "./alert";

jest.mock('./alert.tsx', () => {
    return (props: any) => {
        return <span>{props.icon}</span>
    }
})

const testProps: AlertProps = {
    title: 'title',
    onClose: jest.fn()
}

const typeProps: AlertProps = {
    ...testProps,
    type: 'success',
    description: 'hello',
    closable: false
}
describe('测试Alert组件', () => {
    it('应该正确渲染默认Alert组件', async () => {
        const { getByText, container, queryByText } = render(<Alert {...testProps}/>)
        await waitFor(() => expect(queryByText('title')).toBeInTheDocument())
        expect(container.querySelector('.reant-alert')).toHaveClass('reant-alert-default')
        fireEvent.click(getByText('times'))
        expect(testProps.onClose).toHaveBeenCalled()
        expect(queryByText('title')).not.toBeInTheDocument()
    })
    it('应该正确渲染基于不同类型和描述的Alert组件', () => {
        const { container, queryByText } = render(<Alert {...typeProps}/>)
        expect(queryByText('title')).toHaveClass('bold-title')
        expect(container.querySelector('.reant-alert')).toHaveClass('reant-alert-success')
        expect(queryByText('hello')).toBeInTheDocument()
        expect(queryByText('times')).not.toBeInTheDocument()
    })
})
