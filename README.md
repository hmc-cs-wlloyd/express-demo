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

### Running Tests
First, build the test database using
```bash
dbmate -e TEST_DATABASE_URL up
```

Then, run tests with
```bash
npm test
```
