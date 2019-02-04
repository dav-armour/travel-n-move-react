import { setTableSettings } from "./../../../actions";
import { SET_TABLE_SETTINGS } from "./../../../actions/types";

describe("setTableSettings action", () => {
  test("has the correct type", () => {
    const action = setTableSettings({});
    expect(action.type).toEqual(SET_TABLE_SETTINGS);
  });

  test("has the correct payload", () => {
    const action = setTableSettings({
      page: 2,
      rowsPerPage: 10
    });
    expect(action.payload).toEqual({
      page: 2,
      rowsPerPage: 10
    });
  });
});
