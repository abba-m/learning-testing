import React from "react";
import { shallow } from "enzyme";
import App from "app";
import CommentBox from "components/commentBox";
import CommentList from "components/commentList";

let component;

beforeEach(() => (component = shallow(<App />)));

it("shows a comment box", () => {
  expect(component.find(CommentBox).length).toEqual(1);
});

it("shows a comment list", () => {
  expect(component.find(CommentList).length).toEqual(1);
});
