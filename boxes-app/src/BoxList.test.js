import React from "react";
import { fireEvent, render } from "@testing-library/react";
import BoxList from "./BoxList";

const addBox = (boxList, height = "10", width = "10", color = "orange") => {
    const heightInput = boxList.getByLabelText("Height");
    const widthInput = boxList.getByLabelText("Width");
    const backgroundInput = boxList.getByLabelText("Background Color");
    fireEvent.change(backgroundInput, { target: { value: color } });
    fireEvent.change(widthInput, { targe: { value: width } });
    fireEvent.change(heightInput, { target: { value: height } });

    const button = boxList.getByText("Add a new box");
    fireEvent.click(button);
}

// smoke test 
it("renders without crashing", () => {
    render(<BoxList />);
});

// snapshot test
it("matches snapshot", () => {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
})

it("can add a new box", function () {
    const boxList = render(<BoxList />);

    expect(boxList.queryByText("Remove the box!")).not.toBeInTheDocument();

    addBox(boxList);

    const removeButton = boxList.getByText("Remove the box!");
    expect(removeButton).toBeInTheDocument();

    expect(boxList.getAllByDisplayValue("")).toHaveLength(3);
});

it("can remove a box", function () {
    const boxList = render(<BoxList />);
    addBox(boxList);

    const removeButton = boxList.getByText("Remove the box!");

    fireEvent.click(removeButton);
    expect(removeButton).not.toBeInTheDocument();
});