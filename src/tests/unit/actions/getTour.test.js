import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import { TOUR } from "./../../../actions/types";
import { getTour } from "./../../../actions";
import LocalApi from "./../../../apis/local";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const tourMock = {
  tour: {
    _id: "5c58e3b11bbd3f1beb6f7f5c",
    title: "West Hardytown",
    image: "http://lorempixel.com/300/300/nature",
    price: 43253,
    summary: "summary",
    description: "Description",
    duration: "3 days",
    featured: false,
    createdAt: "2019-02-05T01:15:29.152Z",
    updatedAt: "2019-02-05T01:15:29.152Z",
    __v: 0
  }
};

describe("getTour action", () => {
  beforeEach(function() {
    moxios.install(LocalApi);
  });

  afterEach(function() {
    moxios.uninstall(LocalApi);
  });

  it("creates TOUR after successfuly fetching tour response", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: tourMock
      });
    });

    const expectedActions = [{ type: TOUR, payload: tourMock.tour }];

    const store = mockStore({ tour: {} });

    return store.dispatch(getTour()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
