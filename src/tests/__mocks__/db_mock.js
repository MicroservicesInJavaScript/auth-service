const fs = require("fs");
const db = {};
const mockedDB = {};
const authList = [
  {
    login: "system",
    password: "$2a$10$mE.qmcV0mFU5NcKh73TZx.z4ueI/.bDWbj0T1BYyqP481kGGarKLG",
  },
  {
    login: "anonymoususer",
    password: "$2a$10$j8S5d7Sr7.8VTOYNviDPOeWX8KcYILUVJBsYV83Y5NtECayypx9lO",
  },
  {
    login: "admin",
    password: "$2a$10$gSAhZrxMllrbgj/kkK9UceBPpChGWJA7SYIb1Mqo.n5aNLq1/oRrC",
  },
  {
    login: "user",
    password: "$2a$10$VEjxo0jq2YG9Rbk2HmX9S.k1uZBGYUHdUcid3g/vfiEl7lwWgOH/K",
  }
];

mockedDB.collection = jest.fn(connection => {
  return {
    find: () => {
      return {
        toArray: callback => {
          switch (connection) {
            case "auth":
              callback(null, authList);
              break;
            default:
              return null;
          }
        }
      };
    }
  };
});

module.exports = mockedDB;
