import React from "react";
import { render, fireEvent, debug } from "@testing-library/react";
import Snowman from "./Snowman";

it("should end after max number of wrong guesses", function() {
    const { container } = render(<Snowman maxWrong={1} />);

    const zKey = container.querySelector("button[value='z']");
    fireEvent.click(zKey);

    expect(
        container.querySelector('button')
      ).not.toBeInTheDocument();
    expect(
        container.querySelector(".Snowman")
    ).toContainHTML('You Lose');
});