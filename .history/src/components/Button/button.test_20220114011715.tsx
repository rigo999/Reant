import React from "react";
import { render } from '@testing-library/react'
import Button from "./button";

// create a case to test
test('our first react test case', () => {
    // render instance to real DOM node
    const view = render(<Button>Nice</Button>)
    // use method
    const element = view.queryByText('Abc')
    expect(element).toBeTruthy()
})