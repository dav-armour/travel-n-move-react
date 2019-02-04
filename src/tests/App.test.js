import React from "react";
import { BrowserRouter } from "react-router-dom";
import Enzyme, { mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Root from "./../Root";
import App from "./../components/App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("App doesn't crash", () => {
  const wrapper = mount(
    <Root>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Root>
  );
  wrapper.unmount();
});
