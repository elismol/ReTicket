import React from "react";
import { render, screen } from "@testing-library/react";
import UserInfoModal from ".";

describe(UserInfoModal, () => {
  it("can open UserInfoModal without crashing", () => {
    const examplePost = {
      event: "Test event",
      location: "Trondheim",
      price: 100,
      user: 5,
    };
    const onClose = true;
    render(<UserInfoModal post={examplePost} onClose={onClose} />);
    screen.getByText(examplePost.event);
  });
});
