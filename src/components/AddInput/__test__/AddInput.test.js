import { render, screen, fireEvent } from "@testing-library/react";

import AddInput from "../AddInput";

const mockedSetTodos = jest.fn();

describe("AddInput", () => {
  it("should render the input element", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodos} />);

    const inputElement = screen.getByPlaceholderText("Add a new task here...");

    expect(inputElement).toBeInTheDocument();
  });
  it("should be able to type in the input", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodos} />);

    const inputElement = screen.getByPlaceholderText("Add a new task here...");

    fireEvent.change(inputElement, {
      target: { value: "Go grocery shopping" },
    });

    expect(inputElement.value).toBe("Go grocery shopping");
  });
  it("should have empty input when the 'Add' button is clicked", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodos} />);

    const inputElement = screen.getByPlaceholderText("Add a new task here...");
    const buttonElement = screen.getByRole("button", { name: "Add" });

    fireEvent.change(inputElement, {
      target: { value: "Go grocery shopping" },
    });
    fireEvent.click(buttonElement);

    expect(inputElement.value).toBe("");
  });
});
