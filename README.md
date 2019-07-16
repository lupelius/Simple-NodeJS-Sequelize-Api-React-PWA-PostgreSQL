# API Friendzy

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Challenge](#challenge)
- [Submission](#submission)
- [License](#license)

## Background

The API Friendzy app allows for the retrieval of Friends.

## Install

_This repository uses node 8.8.1 and requires Postgres to be installed and running on port 5432_

To get started, assuming node and postgres are installed, run the following commands:

1. NPM Install
```
  npm install
```
2. Migrate the development DB (setting username/password in `./db/config/config.json` if needs be)
```
  NODE_ENV=development ./node_modules/.bin/sequelize db:create && NODE_ENV=development ./node_modules/.bin/sequelize db:migrate
```
3. Migrate the test DB (setting username/password in `./db/config/config.json` if needs be)
```
  NODE_ENV=test ./node_modules/.bin/sequelize db:create && NODE_ENV=test ./node_modules/.bin/sequelize db:migrate
```
4. Seed the DB and exit the shell
```
  NODE_ENV=development ./node_modules/.bin/sequelize db:seed:all
```
5. Check the tests
```
  npm run test
```
6. Lint
```
  npm run lint
```
7. Run the web app
```
  npm start
```
8. Visit [`http://localhost:3000`](http://localhost:3000) (error displayed)

## Usage

**Running the app**

1. Run the web app
```
  cd build, npm i, npm start
```

2. Wait for the app to boot then hit the app URL [`http://localhost:3003`](http://localhost:3000)

**Linting**

```
  npm run lint
```
