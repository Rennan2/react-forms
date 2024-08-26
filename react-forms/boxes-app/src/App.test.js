import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

// smoke test 
it("render with no crashes", function() {
    render(<App />);
});

// snapshot test
it("match snapshot", function() {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
});