import React from "react";
import { mount } from "enzyme";

import Root from "root";
import CommentList from "components/commentList";

let component;

beforeEach(() => {
  const initialState = {
    comments: ["Comment 1", "Comment 2"],
  };
  component = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

afterEach(() => component.unmount());

it("creates on li per comment", () => {
  expect(component.find("li").length).toEqual(2);
});

it("displays the comments", () => {
  expect(component.render().text()).toContain("Comment 1");
  expect(component.render().text()).toContain("Comment 2");
});
