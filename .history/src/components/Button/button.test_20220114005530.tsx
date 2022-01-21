import React from "react";
import { render } from '@testing-library/react'
import Button from "./button";

// create a case to test
test('our first react test case', () => {
    // render instance to real DOM node
    const utils = render(<Button>Nice</Button>)
    // use method
    const element = utils.queryByText('Nice')
    expect(element).toBeTruthy()
})