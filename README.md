# contact-book
A contact book REST API + SPA frontend built with MySQL, Express, Angular and NodeJS


# How to run project
- Requirements:
- Node and NPM
- MySQL
- Angular 12
- Angular CLI


# Server

## Create DB
Run `mysql -u root -p qwerty123`

Copy and paste on the mysql terminal the snippet found in `database/database.sql` to create DB

## Run server
Move onto /server folder on CLI and run following commands:

- `npm install` to install project dependencies, then
- `npm run build` (this will remain running, this is to run app) 
- And, in another CLI tab, `npm run dev` to wake up the server


# Client
Run the following commands on CLI:
- `npm install` to install project dependencies, then
- `ng build`
- `ng serve -o`

