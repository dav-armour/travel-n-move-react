import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import Root from "./../../Root";
// import App from "./../../components/App";
import HomePage from "../../components/pages/HomePage";
import HolidayForm from "../../components/forms/HolidayForm";
import QuoteFormTabs from "../../components/modules/QuoteFormTabs";
import HotelForm from "../../components/forms/HotelForm";
import FlightForm from "../../components/forms/FlightForm";

describe("Quote request forms", () => {
  test("Home Page renders Holiday Form by default", () => {
    const wrapper = mount(
      <Root>
        <MemoryRouter initialEntries={["/"]}>
          <HomePage />
        </MemoryRouter>
      </Root>
    );
    expect(wrapper.find(HolidayForm)).toHaveLength(1);
    wrapper.unmount();
  });

  describe("Quote form tabs", () => {
    let wrapper, tabButtons;
    beforeAll(() => {
      wrapper = mount(
        <Root>
          <MemoryRouter initialEntries={["/"]}>
            <QuoteFormTabs />
          </MemoryRouter>
        </Root>
      );
      tabButtons = wrapper.find('button[role="tab"]');
    });

    afterAll(() => {
      wrapper.unmount();
    });

    test("Shows 3 tab buttons", () => {
      expect(tabButtons).toHaveLength(3);
    });

    test("Clicking on each tab shows corresponding form", () => {
      tabButtons.at(1).simulate("click");
      wrapper.update();
      expect(wrapper.find(HotelForm)).toHaveLength(1);
      tabButtons.at(2).simulate("click");
      wrapper.update();
      expect(wrapper.find(FlightForm)).toHaveLength(1);
      tabButtons.at(0).simulate("click");
      wrapper.update();
      expect(wrapper.find(HolidayForm)).toHaveLength(1);
    });
  });

  describe("Holiday Form", () => {
    let wrapper;
    beforeAll(() => {
      wrapper = mount(
        <Root>
          <MemoryRouter initialEntries={["/"]}>
            <HolidayForm />
          </MemoryRouter>
        </Root>
      );
    });
    test("has all required fields", () => {
      expect(wrapper.find('input[name="destination"]')).toHaveLength(1);
      expect(wrapper.find('input[name="start_date"]')).toHaveLength(1);
      expect(wrapper.find('input[name="end_date"]')).toHaveLength(1);
      expect(wrapper.find('input[name="adults"]')).toHaveLength(1);
      expect(wrapper.find('input[name="children"]')).toHaveLength(1);
      expect(wrapper.find('input[name="budget"]')).toHaveLength(1);
      expect(wrapper.find('input[type="checkbox"]')).toHaveLength(1);
      expect(wrapper.find('button[type="submit"]')).toHaveLength(1);
    });
  });

  describe("Hotel Form", () => {
    let wrapper;
    beforeAll(() => {
      wrapper = mount(
        <Root>
          <MemoryRouter initialEntries={["/"]}>
            <HotelForm />
          </MemoryRouter>
        </Root>
      );
    });
    test("has all required fields", () => {
      expect(wrapper.find('input[name="destination"]')).toHaveLength(1);
      expect(wrapper.find('input[name="start_date"]')).toHaveLength(1);
      expect(wrapper.find('input[name="end_date"]')).toHaveLength(1);
      expect(wrapper.find('input[name="adults"]')).toHaveLength(1);
      expect(wrapper.find('input[name="children"]')).toHaveLength(1);
      expect(wrapper.find('input[name="num_rooms"]')).toHaveLength(1);
      expect(wrapper.find('input[name="num_stars"]')).toHaveLength(1);
      expect(wrapper.find('input[type="checkbox"]')).toHaveLength(1);
      expect(wrapper.find('button[type="submit"]')).toHaveLength(1);
    });
  });

  describe("Flight Form", () => {
    let wrapper;
    beforeAll(() => {
      wrapper = mount(
        <Root>
          <MemoryRouter initialEntries={["/"]}>
            <FlightForm />
          </MemoryRouter>
        </Root>
      );
    });
    test("has all required fields", () => {
      expect(wrapper.find('input[name="origin"]')).toHaveLength(1);
      expect(wrapper.find('input[name="destination"]')).toHaveLength(1);
      expect(wrapper.find('input[name="start_date"]')).toHaveLength(1);
      expect(wrapper.find('input[name="end_date"]')).toHaveLength(1);
      expect(wrapper.find('input[name="adults"]')).toHaveLength(1);
      expect(wrapper.find('input[name="children"]')).toHaveLength(1);
      expect(wrapper.find('input[name="seat_type"]')).toHaveLength(1);
      expect(wrapper.find('input[value="return"]')).toHaveLength(1);
      expect(wrapper.find('input[value="one-way"]')).toHaveLength(1);
      expect(wrapper.find('input[type="checkbox"]')).toHaveLength(1);
      expect(wrapper.find('button[type="submit"]')).toHaveLength(1);
    });
  });
});
