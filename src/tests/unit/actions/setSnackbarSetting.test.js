import { setSnackbarSettings } from "./../../../actions";
import { SET_SNACKBAR_SETTINGS } from "./../../../actions/types";

describe("setSnackbarSettings action", () => {
  test("has the correct type", () => {
    const action = setSnackbarSettings({});
    expect(action.type).toEqual(SET_SNACKBAR_SETTINGS);
  });

  test("has the correct payload", () => {
    const action = setSnackbarSettings({
      open: true,
      message: "test",
      variant: "success"
    });
    expect(action.payload).toEqual({
      open: true,
      message: "test",
      variant: "success"
    });
  });
});
