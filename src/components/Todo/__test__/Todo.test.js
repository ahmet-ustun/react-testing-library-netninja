import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Todo from "../Todo";

const MockedTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTasks = (tasks) => {
  const inputElement = screen.getByPlaceholderText("Add a new task here...");
  const buttonElement = screen.getByRole("button", { name: "Add" });

  tasks.forEach((task) => {
    fireEvent.change(inputElement, {
      target: { value: task },
    });
    fireEvent.click(buttonElement);
  });
};

describe("Todo", () => {
  it("should render single task", () => {
    render(<MockedTodo />);
    addTasks(["Go grocery shopping"]);

    const divElement = screen.getByText("Go grocery shopping");

    expect(divElement).toBeInTheDocument();
  });
  it("should render multiple tasks", () => {
    render(<MockedTodo />);
    addTasks(["Go grocery shopping", "Pet my cat", "Wash my hands"]);

    const divElements = screen.getAllByTestId("task-item");

    expect(divElements.length).toBe(3);
  });
  describe("Task", () => {
    it("should NOT be completed when initially rendered", () => {
      render(<MockedTodo />);
      addTasks(["Go grocery shopping"]);

      const divElement = screen.getByText("Go grocery shopping");

      expect(divElement).not.toHaveClass("todo-item-active");
    });
    it("should be completed when initially rendered", () => {
      render(<MockedTodo />);
      addTasks(["Go grocery shopping"]);

      const divElement = screen.getByText("Go grocery shopping");
      
      fireEvent.click(divElement);

      expect(divElement).toHaveClass("todo-item-active");
    });
  });
});
