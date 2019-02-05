test.skip("Enquiry form submits with all fields entered", done => {
  // input_first_name.simulate("change", {
  //   target: { value: "First Name" }
  // });
  // wrapper.update();
  const mockedSubmit = jest.fn();
  const wrapper2 = mount(<EnquiryForm handleSubmit={mockedSubmit} />);
  wrapper.find('input[name="first_name"]').simulate("change", {
    target: { value: "First Name" }
  });
  wrapper.update();
  console.log(wrapper2.debug());
  // console.log(input_first_name.debug());
  expect(wrapper2.render().text()).toContain("First Name");
  // expect(input_first_name.prop("value")).toEqual("First Name");
});

test.skip("Submitting enquiry with empty fields submit form", () => {
  // const mockedSubmit = jest.fn();
  // EnquiryForm.prototype.onFormSubmit = mockedSubmit;
  // const spy = jest.spyOn(EnquiryForm.prototype, "onFormSubmit");
  // const wrapper2 = mount(
  //   <Root>
  //     <MemoryRouter initialEntries={["/contact"]}>
  //       <EnquiryForm />
  //     </MemoryRouter>
  //   </Root>
  // );
  // const spy = jest.spyOn(wrapper2, "onFormSubmit");
  // wrapper2.simulate("submit");
  // expect(spy).toHaveBeenCalledTimes(20);
  // expect(mockedSubmit).toBeCalledTimes(0);
  // wrapper.find(EnquiryForm).instance().onFormSubmit = mockedSubmit;
  // wrapper.update();
  // wrapper.find(EnquiryForm).simulate("submit");
  // wrapper2.update();
  // wrapper2.unmount();
});
