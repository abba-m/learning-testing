import React from "react";
import { mount } from "enzyme";

import Root from "root";
import CommentBox from "components/commentBox";

let component;

beforeEach(
  () =>
    (component = mount(
      <Root>
        <CommentBox />
      </Root>
    ))
);

afterEach(() => component.unmount());

it("has a comment box and two buttons", () => {
  expect(component.find("textarea").length).toEqual(1);
  expect(component.find("button").length).toEqual(2);
});

describe("the text area", () => {
  beforeEach(() => {
    component.find("textarea").simulate("change", {
      target: { value: "new comment" },
    });
    component.update();
  });

  it("has a textarea that users can type", () => {
    expect(component.find("textarea").prop("value")).toEqual("new comment");
  });

  it("should empty the textarea after submission", () => {
    component.find("form").simulate("submit");
    component.update();
    expect(component.find("textarea").prop("value")).toEqual("");
  });
});
