const test = require("ava");
const mocks = require('node-mocks-http');
const { putUserProvider } = require("./user");
const dbPool = require("../db/db");


test.beforeEach(async (t) => {
  await dbPool.query(`TRUNCATE _user`);
});

test("createUserHappyPath", async (t) => {
  req = mocks.createRequest({
    method: "PUT",
    url: "/user",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      name: "Joe Doe",
      email: "test@test.com",
      date_of_birth: "2000-01-01",
    },
  });
  res = mocks.createResponse();

  await putUserProvider(req, res);

  responseData = res._getJSONData();
  t.is(responseData.name, "Joe Doe");
  t.is(responseData.email, "test@test.com");
  t.is(responseData.date_of_birth, "2000-01-01");

  userDBResult = await dbPool.query(
    `SELECT
      name,
      email,
      date_of_birth::TEXT
    FROM
      _user
    WHERE
      id = $1;`,
    [responseData.id]
  );

  t.is(userDBResult.rows[0].name, "Joe Doe");
  t.is(userDBResult.rows[0].email, "test@test.com");
  t.is(userDBResult.rows[0].date_of_birth, "2000-01-01");
});
