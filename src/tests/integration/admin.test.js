import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import Root from "./../../Root";
import App from "./../../components/App";
import DashboardPage from "../../components/pages/admin/DashboardPage";
import QuotesPage from "../../components/pages/admin/QuotesPage";
import EnquiriesPage from "../../components/pages/admin/EnquiriesPage";
import ToursPage from "../../components/pages/admin/ToursPage";
import TourEditCreatePage from "../../components/pages/admin/TourEditCreatePage";
import AdminMenu from "../../components/modules/AdminMenu";
import { store } from "./../../Root";

const initialState = {
  auth: {
    token: "token"
  }
};

describe("ADMIN ROUTES: The correct page renders for each route and navbar shows on all routes", () => {
  test("Admin Dashboard Page renders for root route '/admin/dashboard'", () => {
    const wrapper = mount(
      <Root initialState={initialState}>
        <MemoryRouter initialEntries={["/admin/dashboard"]}>
          <App />
        </MemoryRouter>
      </Root>
    );
    expect(wrapper.find(DashboardPage)).toHaveLength(1);
    wrapper.unmount();
  });

  test("Admin Quotes Page renders for root route '/admin/quotes'", () => {
    const wrapper = mount(
      <Root initialState={initialState}>
        <MemoryRouter initialEntries={["/admin/quotes"]}>
          <App />
        </MemoryRouter>
      </Root>
    );
    expect(wrapper.find(QuotesPage)).toHaveLength(1);
    wrapper.unmount();
  });

  test("Admin Enquiries Page renders for root route '/admin/enquiries'", () => {
    const wrapper = mount(
      <Root initialState={initialState}>
        <MemoryRouter initialEntries={["/admin/enquiries"]}>
          <App />
        </MemoryRouter>
      </Root>
    );
    expect(wrapper.find(EnquiriesPage)).toHaveLength(1);
    wrapper.unmount();
  });

  test("Admin Tours Page renders for root route '/admin/tours'", () => {
    const wrapper = mount(
      <Root initialState={initialState}>
        <MemoryRouter initialEntries={["/admin/tours"]}>
          <App />
        </MemoryRouter>
      </Root>
    );
    expect(wrapper.find(ToursPage)).toHaveLength(1);
    wrapper.unmount();
  });

  test("Admin Tours Edit Create Page renders for root route '/admin/tours/new'", () => {
    const wrapper = mount(
      <Root initialState={initialState}>
        <MemoryRouter initialEntries={["/admin/tours/new"]}>
          <App />
        </MemoryRouter>
      </Root>
    );
    expect(wrapper.find(TourEditCreatePage)).toHaveLength(1);
    wrapper.unmount();
  });
});

describe("Admin menu", () => {
  let wrapper, admin_menu;
  beforeAll(() => {
    wrapper = mount(
      <Root initialState={initialState}>
        <MemoryRouter initialEntries={["/admin/dashboard"]}>
          <App />
        </MemoryRouter>
      </Root>
    );
    admin_menu = wrapper.find(AdminMenu);
  });

  test("Admin menu renders", () => {
    expect(admin_menu).toHaveLength(1);
  });
});
