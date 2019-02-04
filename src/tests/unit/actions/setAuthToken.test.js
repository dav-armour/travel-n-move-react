import { setAuthToken } from "./../../../actions";
import { AUTH_TOKEN } from "./../../../actions/types";

describe("setAuthToken action", () => {
  test("has the correct type", () => {
    const action = setAuthToken("token");
    expect(action.type).toEqual(AUTH_TOKEN);
  });

  test("has the correct payload", () => {
    const action = setAuthToken("token");
    expect(action.payload).toEqual("token");
  });
});
