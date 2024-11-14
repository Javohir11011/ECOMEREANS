Insert into
    users (
        name,
        email,
        password,
        avatar,
        username,
        brith_of_date,
        phone_number
    )
values ($1, $2, $3, $4, $5, $6, $7)
returning
    *

DEFAULT current_timestamp

UPDATE users
set
    name = 'John Doe',
    email = 'salim',
    username = 'salimxoja'
WHERE
    id = 2

DELETE TABLE WHERE id = 2

CREATE TABLE IF not EXISTS adresses (
    id serial PRIMARY KEY,
    title VARCHAR NOT NULL,
    adressline_link_1 VARCHAR NOT NULL,
    adressline_link_2 VARCHAR NOT NULL,
    country VARCHAR NOT NULL,
    city VARCHAR NOT NULL,
    pastal_code VARCHAR NOT NULL,
    phone_number VARCHAR UNIQUE NOT NULL,
    user_id int,
    FOREIGN KEY (id) REFERENCES users (user_id),
    create_at timestamp DEFAULT current_timestamp,
    update_at timestamp DEFAULT current_timestamp
)

select from adresses WHERE id = $1

INSERT INTO
    adresses (
        title,
        adressline_link_1,
        adressline_link_2,
        country,
        city,
        pastal_code,
        phone_number,
        user_id,
        create_at,
        update_at
    )
VALUES (
        $1,
        $2,
        $3,
        $4,
        $5,
        $6,
        $7,
        $8,
        $9,
        $10
    )


INSERT INTO addresses (user_id, title, address_line_1, address_line_2, country, city, postal_code, phone_number)
VALUES
    (1, 'Home', '123 Maple St', 'Apt 4B', 'United States', 'New York', '10001', '123-456-7890'),
    (2, 'Office', '456 Oak St', 'Suite 300', 'Canada', 'Toronto', 'M5H 2N2', '234-567-8901'),
    (3, 'Vacation Home', '789 Pine St', 'House 12', 'Australia', 'Sydney', '2000', '345-678-9012'),
    (4, 'Warehouse', '101 Birch Ave', 'Unit 5', 'United Kingdom', 'London', 'SW1A 1AA', '456-789-0123'),
    (5, 'Friends Place', '202 Cedar Rd', 'Room 7', 'India', 'Mumbai', '400001', '567-890-1234');
        select * from adresses WHERE id = $1


CREATE TABLE IF not EXISTS PROFILES (
    id serial PRIMARY KEY,
    platform VARCHAR NOT NULL,
    platform_user VARCHAR NOT NULL,
    user_id int,
    FOREIGN KEY (id) REFERENCES users (user_id),
)



        UPDATE PROFILES
        set platform = 'salim'
        where id = 2