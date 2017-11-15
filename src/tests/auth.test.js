const config = require("../config");
const mockedDB = require("./__mocks__/db_mock");

const auth = require("../controllers/auth.js");

describe("auth controller", () => {
  let req = {};
  let res = {
    json: data => {
      data;
    }
  };

  beforeEach(() => {});

  it("should provide login method", done => {
    let loginResp = auth.login(req, res, mockedDB);
    expect(mockedDB.collection.mock.calls.length).toBe(1);
    done();
  });
});
