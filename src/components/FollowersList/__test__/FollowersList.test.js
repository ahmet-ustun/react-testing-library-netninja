import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import FollowersList from "../FollowersList";

const MockedFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe("FollowersList", () => {
  beforeAll(() => {
    console.log("This line is printed before all blocks once.")
  });
  beforeEach(() => {
    console.log("This line is printed before each test block.")
  });
  afterAll(() => {
    console.log("This line is printed after all blocks once.")
  });
  afterEach(() => {
    console.log("This line is printed after each test block.")
  });
  it("should render single follower", async () => {
    render(<MockedFollowersList />);

    const followerDivElement = await screen.findByTestId("follower-item-0");

    expect(followerDivElement).toBeInTheDocument();
  });
  it("should render multiple followers", async () => {
    render(<MockedFollowersList />);

    const followerDivElements = await screen.findAllByTestId(/follower-item/i);

    expect(followerDivElements.length).toBe(5);
  });
});
