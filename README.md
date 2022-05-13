# REST API with NodeJs & Express
REST API for a user with Node, Express &amp; MongoDB. In this project, use MVC architectural pattern.

## REST API

| **HTTP Method**  | **Route**  | **Result**  |
| :------------: | :------------: | :------------: |
|  GET |  api/v1/users |  Get a list of users |
|  POST |  api/v1/users |  Create a new user |
| GET  |  api/v1/users/:id |  Get user |
|  PATCH |  api/v1/users/:id |  Update user |
|  DELETE |  api/v1/users/:id |  Delete user |
|  POST |  api/v1/session/new |  Get JWT |

## .env file
Create a **.env** file like the below structure.

    # === App ===
    APP_URL=
    APP_PORT=
    APP_SECRET=
    
    # === MongoDB ===
    MONGO_URL=
    MONGO_PORT=
    MONGO_USERNAME=
    MONGO_PASSWORD=
    MONGO_DB_NAME=
    
    # === Redis ===
    REDIS_URL=
    REDIS_PORT=
    REDIS_USERNAME=
    REDIS_PASSWORD=

## Installation


**First step**
```javascript
git clone https://github.com/amirkangarloo/rest-api-user.git
```

**Second step**

```javascript
yarn install
```

**Third step**

Create a [**.env** file](https://github.com/amirkangarloo/rest-api-user#env-file).


**Fourth step**
```javascript
yarn start
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
