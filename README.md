
# PROJECT WEEK 3

Prototype Backend for Online Shop Projects


## UPDATE LIST
### 26/10/2022
- Add detail API For Get Data by id from Table Products,Category,and Order
- Add Validation for POST Data for Table Products,category,And Order
- Add Helpers Standards response API
- Add URL Params for getting Data from Table Productes
- Add ENV
- Adding XSS-Clean
- Adding JOIN QUERY FOR GETTING DATA FROM Table Products and Order

### 30/10/2022
- Add Users Login and Registration with Bycrypt Systems
- Add JWT Token Validation for accesing some features
- Add Refresh Token
- Add Upload Feature to Category and Products with File validation (JPG/ PNG)
- Adding helmet

## ROADMAP
- Checking code using linters
- User activation Email
- Deploy on redis

## Running Dev

To run dev, frist install npm modules

```bash
  npm run dev
```


## Products

[GET]to get All data from Table Products

```bash
http://localhost:3000/products
```

[GET] To Get Data with sortby,sort,limit
```bash
http://localhost:3000/products?sortby=price&sort=desc&page=1&limit=5
```
[POST]To insert data to Table Products
```bash
localhost:3000/products/
{
    "name": "A",
    "stock": 0,
    "price": 150000 ,
    "category_id": 1 ,
    "category_name": "baju"
    }
```

[Delete] To delete data from Table products with category_id
```bash
localhost:3000/products/<id>
```

[PUT] To update data from Table order with products_id
```bash
localhost:3000/products/<id>
{
    "name": "Baju Okky",
    "stock": 40000,
    "price": 5000 ,
    "category_id": 1,
    "category_name": "baju"
    }
```
[Get] to search data from Table Products based on id
```bash
http://localhost:3000/products/searchID=<id>
```

## Category

[GET]to get All data from Table category

```bash
http://localhost:3000/category
```

[POST]To insert data to Table category
```bash
localhost:3000/category/
{
    "name": "A",
```

[Delete] To delete data from Table category with category_id
```bash
localhost:3000/category/<id>
```
[PUT] To update data from Table order with order_id
```bash
localhost:3000/category/<id>
{
    "name": 11
}
```
[Get] to search data from Table category based on id
```bash
http://localhost:3000/category/searchID=<id>
```

## Order

[GET]to get All data from Table order

```bash
http://localhost:3000/order
```

[POST]To insert data to Table order
```bash
localhost:3000/order/
{
    "name": "A",
```

[Delete] To delete data from Table order with order_id
```bash
localhost:3000/order/<id>
```
[PUT] To update data from Table order with order_id
```bash
localhost:3000/order/<id>
{
    "id_item": 11,
    "amount": 10, 
    "price": 90000 
    }
```

[Get] to search data from Table order based on id
```bash
http://localhost:3000/order/searchID=<id>
```

## Features

- Light/dark mode toggle
- Live previews
- Fullscreen mode
- Cross platform

