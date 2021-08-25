import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import Root from "root";
import App from "app";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "Fetched comment 1" }, { name: "Fetched comment 2" }],
  });
});

afterEach(() => {
  moxios.uninstall();
});

it("fetches a list of commment and displays them", (done) => {
  const component = mount(
    <Root>
      <App />
    </Root>
  );

  component.find(".fetch-comments").simulate("click");

  moxios.wait(() => {
    component.update();
    expect(component.find("li").length).toEqual(2);
    done();
    component.unmount();
  });
});
