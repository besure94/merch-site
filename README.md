# Merch Site

#### An application for a fictional band's online merchandise store.

#### By Brian Scherner

## Technologies Used

* React
* JavaScript
* JSX
* HTML
* Webpack
* Node Package Manager
* Babel
* ES Lint

## Description

This application presents users with a home page for a fictional band's merch site. Users can add items to the Home page by entering an item's name, description, color, size, and quantity. Users can also view an individual item's details, edit the item's details, or delete it entirely. Users can also "buy" an item, which will decrease its quantity by 1. Users can "restock" an item once the item's quantity reaches 0, which will add 25 items to the "quantity" property.

## Setup/Installation Requirements

* Select the green "Code" button, and clone this repository to your desktop.
* In your terminal, go to your project folder and run the command `$ npm run start` to start a live development server.

## Known Bugs

None.

## License

MIT

Copyright(c) 2024 Brian Scherner

-------------------------------------------------------------

#### Project MVP

* authorization/authentication with Firebase (Do first)

* different authorization roles:

  * one for customer (can buy items, have them shipped, browse, etc)
  * one for owner (has control over inventory - restocking, adding/removing/editing items, ordering items, etc)

* CSS styling

* Different sections in app for different types of merch:

  * Outerwear (shirts, hoodies, etc)
  * Music (Vinyl, CDs, cassettes, etc)
  * Accessories (Pins, patches, etc)
  * All Products

* Search feature (for customer and owner)

* Shopping cart feature (for customer role)

  * Should collapse and expand
  * Should be dynamically updated when customer adds/removes item

* Will need different forms to submit for customer and owner roles

#### Stretch Goals

* Add feature for owner to add pics of merch


