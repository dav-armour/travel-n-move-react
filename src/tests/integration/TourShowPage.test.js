import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import moxios from "moxios";
import Root from "./../../Root";
import App from "./../../components/App";
import TourShowPage from "../../components/pages/TourShowPage";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest(`${process.env.REACT_APP_API_URI}/tours/test`, {
    status: 200,
    response: {
      _id: "testid",
      title: "test title",
      image: "http://lorempixel.com/300/300/nature",
      price: 1234,
      summary: "test summary",
      description: "test",
      duration: "1 day",
      featured: "test"
    }
  });
});

afterEach(() => {
  moxios.uninstall();
});

test("can fetch a list of comments and display them", done => {
  const wrapper = mount(
    <Root>
      <MemoryRouter initialEntries={["/tours/test"]}>
        <App />
      </MemoryRouter>
    </Root>
  );

  const tour_show_page = wrapper.find(TourShowPage);
  expect(tour_show_page).toHaveLength(1);
  done();
  // moxios.wait(() => {
  //   console.log("Mox request", moxios.requests.at(0));
  //   wrapper.update();
  //   expect(
  //     tour_show_page
  //       .find("h2")
  //       .render()
  //       .text()
  //   ).toContain("test title");
  //   done();
  // });
});
