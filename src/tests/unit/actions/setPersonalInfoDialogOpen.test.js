import { setPersonalInfoDialogOpen } from "./../../../actions";
import { PERSONAL_INFO_DIALOG_OPEN } from "./../../../actions/types";

describe("setPersonalInfoDialogOpen action", () => {
  test("has the correct type", () => {
    const action = setPersonalInfoDialogOpen(true);
    expect(action.type).toEqual(PERSONAL_INFO_DIALOG_OPEN);
  });

  test("has the correct payload", () => {
    const action = setPersonalInfoDialogOpen(true);
    expect(action.payload).toEqual({ open: true });
  });
});
