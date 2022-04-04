const dbPool = require("./db");

async function addUser(name, email, date_of_birth) {
  result = await dbPool.query(
    `INSERT INTO
      _user
    (
      name,
      email,
      date_of_birth
    )
    VALUES (
      $1,
      $2,
      $3
    )
    RETURNING
      id,
      name,
      email,
      date_of_birth::TEXT;`,
    [name, email, date_of_birth]
  );

  return result.rows[0];
}

async function getUser(id) {
  result = await dbPool.query(
    `SELECT
      id,
      name,
      email,
      date_of_birth::TEXT
    FROM
      _user
    WHERE
      id = $1;`,
    [id]
  );

  return result.rows[0];
}

async function updateUser(id, name, email, date_of_birth) {
  result = await dbPool.query(
    `UPDATE
      _user
    SET
      name = $1,
      email = $2,
      date_of_birth = $3
    WHERE
      id = $4
    RETURNING
      id,
      name,
      email,
      date_of_birth::TEXT;`,
    [name, email, date_of_birth, id]
  );

  return result.rows[0];
}

async function deleteUser(id) {
  result = await dbPool.query(
    `DELETE FROM
      _user
    WHERE
      id = $1
    RETURNING
      id;`,
    [id]
  );

  return result.rows[0];
}

module.exports = { addUser, getUser, updateUser, deleteUser };
