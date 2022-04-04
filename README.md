# express-demo

## Dependencies

- node
- npm
- docker
- [dbmate](https://github.com/amacneil/dbmate)

## Running the Project

First, run

```bash
npm i
```

Then, bring up the development database with

```bash
docker-compose up
dbmate up
```

Then, run the project with

```bash
node app.js
```

## Hitting Endpoints

- Create a user record

```bash
curl -X PUT localhost:3000/user -H "Content-Type: application/json" --data '{"name": "Joe Doe", "email": "test@test.com", "date_of_birth": "2000-01-01"}'
```

- Retrieve a user record

```bash
curl -X GET localhost:3000/user/{id}
```

- Update a user record

```bash
curl -X POST localhost:3000/user/{id} -H "Content-Type: application/json" --data '{"email": "test_two@test.com"}'
```

- Delete a user record

```bash
curl -X DELETE localhost:3000/user/{id}
```

## Running Tests

First, build the test database using

```bash
dbmate -e TEST_DATABASE_URL up
```

Then, run tests with

```bash
npm test
```
