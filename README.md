<!-- @format -->

# PetPalaceHub (Back-end)

Welcome to PetPalaceHub, a project for managing information about pet stores and their pets. This document will guide you through the necessary steps to set up and understand the project on your local machine.

## Project Setup

Follow these steps to set up the project on your machine:

### Prerequisites

Make sure you have Node.js and PostgreSQL installed on your system.

### Configuration Steps

1.  Clone this repository to your local machine:

    ```
    git clone https://github.com/AlejandraRV91/PortfolioFullStackBackEnd.git
    ```

2.  Install project dependencies by running the following command:

    ```
    npm install
    ```

3.  To configure the project, you need to create a file named `.env` at the root of your project and add the following environment variables:

```dotenv
PORT= The port where your application will run (for example, 3000)
PG_HOST= The host where your PostgreSQL database is running (e.g., localhost)
PG_PORT= The port on which your PostgreSQL database is listening (default is 5432)
PG_DATABASE= petpalacehub
PG_USER= The username for connecting to your PostgreSQL database (e.g., postgres)
PG_PASSWORD= The password for the specified database user (leave empty if not applicable)
```

4.  Configure the database:

    -   Ensure you have a running PostgreSQL server.

5.  Initialize the database and load seed data:

To populate the database with some test data, execute the following command:

```shell
npm run db:init
```

This will run the `db/schema.sql` script that will create some tables in your database.

```shell
npm run db:seed
```

This will run the `db/seed.sql` script that will populate your database with some records.

6.  Run the project:

    ```bash
    npm start
    ```

This will start the server on the specified port and connect to the PostgreSQL database.

## Database Structure

The project uses a PostgreSQL database with two main tables: `stores` and `Pets`. Here's a description of both tables:

### Stores

-   `id`: Unique identifier of the store (integer).
-   `name`: store's name (string, max 150 characters).
-   `contact_email`: store's contact email (string, max 100 characters).
-   `phone_number`: store's phone number (string, max 20 characters).
-   `address`: Owner's address (text).

### Pets

-   `id`: Unique identifier of the pet (integer).
-   `name`: Pet's name (string, max 100 characters).
-   `type`: Pet's type (string, max 50 characters).
-   `age`: Pet's age (integer, non-negative).
-   `weight`: Pet's weight (decimal).
-   `entry_date`: Pet's entry date (date, default: current date).
-   `description`: Pet's description (text).
-   `breed`: Pet's breed (string, max 100 characters).
-   `price`: Pet's price (2 decimals).
-   `store_id`: ID of the owner the pet belongs to (integer).
-   `image_url`: URL of the pet's image (text).
-   Referential integrity and age check constraints.

## Routes

Below is a list of the routes in the application:

### Stores

-   `GET /pets/stores`: Returns a list of stores.
-   `POST /pets/stores`: Creates a new store in the database.

### Pets

-   `GET /pets`: Returns a list of pets.
-   `POST /pets`: Creates a new pet and stores it in the database.
-   `PUT /pets/:id`: Updates details of a specific pet based on its ID.
-   `DELETE /pets/:id`: Deletes a specific pet based on its ID.

### Breeds and Types

-   `GET /pets/breeds`: Returns a list of unique pet breeds.
-   `GET /pets/types`: Returns a list of unique pet types.

## Contributions

If you wish to contribute to the project, we welcome your pull requests!
