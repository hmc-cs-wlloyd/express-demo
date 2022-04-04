-- migrate:up
CREATE TABLE _user (
  id BIGSERIAL PRIMARY KEY,
  email TEXT NOT NULL,
  name TEXT NOT NULL,
  date_of_birth DATE NOT NULL
);

-- migrate:down
DROP TABLE _user;
