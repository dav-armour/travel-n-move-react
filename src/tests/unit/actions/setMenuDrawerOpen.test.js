import { setMenuDrawerOpen } from "./../../../actions";
import { MENU_DRAWER_OPEN } from "./../../../actions/types";

describe("setMenuDrawerOpen action", () => {
  test("has the correct type", () => {
    const action = setMenuDrawerOpen(true);
    expect(action.type).toEqual(MENU_DRAWER_OPEN);
  });

  test("has the correct payload", () => {
    const action = setMenuDrawerOpen(true);
    expect(action.payload).toEqual({ open: true });
  });
});
