import React from "react";
import { MemoryRouter, StaticRouter } from "react-router-dom";
import { mount } from "enzyme";
import Root from "./../../Root";
import NavBar from "./../../components/modules/NavBar";
import App from "./../../components/App";
import HomePage from "../../components/pages/HomePage";
import DashboardPage from "../../components/pages/admin/DashboardPage";
import AboutUsPage from "../../components/pages/AboutUsPage";
import ContactUsPage from "../../components/pages/ContactUsPage";
import TourIndexPage from "../../components/pages/TourIndexPage";
import LoginForm from "../../components/forms/LoginForm";

describe("The correct page renders for each route and navbar shows on all routes", () => {
  test("Home Page renders for root route '/'", () => {
    const wrapper = mount(
      <Root>
        <MemoryRouter initialEntries={["/"]}>
          <App />
        </MemoryRouter>
      </Root>
    );
    expect(wrapper.find(HomePage)).toHaveLength(1);
    wrapper.unmount();
  });

  test("About Us Page renders for root route '/about'", () => {
    const wrapper = mount(
      <Root>
        <MemoryRouter initialEntries={["/about"]}>
          <App />
        </MemoryRouter>
      </Root>
    );
    expect(wrapper.find(AboutUsPage)).toHaveLength(1);
    wrapper.unmount();
  });

  test("Contact Us Page renders for root route '/contact'", () => {
    const wrapper = mount(
      <Root>
        <MemoryRouter initialEntries={["/contact"]}>
          <App />
        </MemoryRouter>
      </Root>
    );
    expect(wrapper.find(ContactUsPage)).toHaveLength(1);
    wrapper.unmount();
  });

  test("Tour Index Page renders for root route '/tours'", () => {
    const wrapper = mount(
      <Root>
        <MemoryRouter initialEntries={["/tours"]}>
          <App />
        </MemoryRouter>
      </Root>
    );
    expect(wrapper.find(TourIndexPage)).toHaveLength(1);
    wrapper.unmount();
  });

  test("Login Form renders for root route '/login'", () => {
    const wrapper = mount(
      <Root>
        <MemoryRouter initialEntries={["/login"]}>
          <App />
        </MemoryRouter>
      </Root>
    );
    expect(wrapper.find(LoginForm)).toHaveLength(1);
    wrapper.unmount();
  });

  test("Accessing '/admin/dashboard' when not logged in redirects to home page", () => {
    const wrapper = mount(
      <Root>
        <MemoryRouter initialEntries={["/admin/dashboard"]}>
          <App />
        </MemoryRouter>
      </Root>
    );
    expect(wrapper.find(DashboardPage)).toHaveLength(0);
    expect(wrapper.find(HomePage)).toHaveLength(1);
    wrapper.unmount();
  });

  test("Accessing unknown route redirects to home page", () => {
    const wrapper = mount(
      <Root>
        <MemoryRouter initialEntries={["/random1234"]}>
          <App />
        </MemoryRouter>
      </Root>
    );
    expect(wrapper.find(HomePage)).toHaveLength(1);
    wrapper.unmount();
  });
});
