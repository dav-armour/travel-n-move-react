import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import Root from "../../Root";
import TourCard from "../../components/modules/TourCard";
import { store } from "./../../Root";

describe("Tour Card: Shows correct info on card", () => {
  const tour = {
    _id: "testid",
    title: "test title",
    image: "http://lorempixel.com/300/300/nature",
    price: 1234,
    summary: "test summary",
    description: "test",
    duration: "1 day",
    featured: "test"
  };

  let wrapper;
  beforeAll(() => {
    wrapper = mount(
      <Root>
        <MemoryRouter initialEntries={["/"]}>
          <TourCard {...tour} />
        </MemoryRouter>
      </Root>
    );
  });

  afterAll(() => {
    wrapper.unmount();
  });

  test("Tour card renders", () => {
    expect(wrapper.find(TourCard)).toHaveLength(1);
  });

  test("Displays correct details", () => {
    expect(wrapper.render().text()).toContain("test title");
    expect(wrapper.render().text()).toContain("test summary");
    expect(wrapper.render().text()).toContain("1234");
    expect(wrapper.find("button")).toHaveLength(3);
  });

  test("Clicking on Request Quote opens dialog", () => {
    const request_button = wrapper.find("button").at(2);
    request_button.simulate("click");
    wrapper.update();
    const currentState = store.getState();
    expect(currentState.dialog.quoteDetailsDialog.open).toBe(true);
  });
});
