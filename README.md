# Authentication Starter

This builds an example of how to plug in our components library and authentication starter kit to build UX around transactions and off-chain logins that verify public address ownership.

To learn more, checkout the documentation: https://bounties.readme.io/v1.0/reference#using-the-starter-kits

## Usage
To get up and running, first install the npm packages.

```
yarn install
yarn start
```

Additionally, the local API server will need to be started. Navigate to `auth_api/django_rest` and run the following:
```
docker volume create --name starter_psql
docker-compose up
```
