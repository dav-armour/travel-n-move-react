import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount, shallow } from "enzyme";
import moxios from "moxios";
import Root from "./../../Root";
import App from "./../../components/App";
import { EnquiryForm } from "../../components/forms/EnquiryForm";

describe("Enquiry Page", () => {
  let wrapper,
    input_first_name,
    input_last_name,
    input_email,
    input_subject,
    input_message,
    submit_button;

  beforeEach(() => {
    moxios.install();
    moxios.stubRequest(`${process.env.REACT_APP_API_URI}/enquiries`, {
      status: 201,
      response: { _id: "id" }
    });

    wrapper = mount(
      <Root>
        <MemoryRouter initialEntries={["/contact"]}>
          <App />
        </MemoryRouter>
      </Root>
    );

    input_first_name = wrapper.find('input[name="first_name"]');
    input_last_name = wrapper.find('input[name="last_name"]');
    input_email = wrapper.find('input[name="email"]');
    input_subject = wrapper.find('input[name="subject"]');
    input_message = wrapper.find('textarea[name="message"]');
    submit_button = wrapper.find('button[type="submit"]');
  });

  afterEach(() => {
    moxios.uninstall();
    wrapper.unmount();
  });

  test("Enquiry Form renders with all required fields", () => {
    expect(wrapper.find(EnquiryForm)).toHaveLength(1);
    expect(input_first_name).toHaveLength(1);
    expect(input_last_name).toHaveLength(1);
    expect(input_email).toHaveLength(1);
    expect(input_subject).toHaveLength(1);
    expect(input_message).toHaveLength(1);
    expect(submit_button).toHaveLength(1);
  });
});
