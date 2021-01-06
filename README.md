# Express Sequelize Encryption

This application is a prototype for testing data encryption using sequelize hooks.

## Usage

- Create database

```
sudo -u root mysql -u root < database.sql
```

- Configure database ``config/config.js``

- Run

```
SECRET_KEY=VeryStrongSecret npm start
```

- Test

```
SECRET_KEY=VeryStrongSecret npm test
```

## API

- Add a new customer with a credit card

```
$ curl --header "Content-Type: application/json" \
    --request POST \
    --data '{"firstName":"Frodon","lastName":"Saque","creditCardNumber":"1111-2222-3333-4444"}' \
    http://localhost:3000/customers
```
   
- List an all customers
   
```
$ curl http://localhost:3000/customers
```

## Data encryption

```
sudo -u root mysql -u root

MariaDB [(none)]> use appdb;
MariaDB [appdb]> select * from Customers;

+----+-----------+----------+-----------------------------------------------------------------------+---------------------+---------------------+
| id | firstName | lastName | creditCardNumber                                                      | createdAt           | updatedAt           |
+----+-----------+----------+-----------------------------------------------------------------------+---------------------+---------------------+
| 26 | Frodon    | Saque    | 9sCXfNi1rixLhZWwxVaWqw==.IE0Nie2ectm/sIrSw+TdiWSWpvqGz5WeODXYGBhEG7I= | 2020-11-08 21:31:10 | 2020-11-08 21:31:10 |
+----+-----------+----------+-----------------------------------------------------------------------+---------------------+---------------------+
```

