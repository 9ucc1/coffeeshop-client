# Coffeeshop App

The server for this project can be found [here.](https://github.com/9ucc1/coffeeshop-server)

## Overview:
An app that displays coffee drinks offered by a variety of different coffee shops, in a one to many relationship model (a coffee shop **has many** drinks, each drink **belongs to** one coffee shop.) The user can create, read, update, and delete both drinks and shops.

## Functionality:
Browse what various coffee shops have to offer. A user can use an app like this to discover their new favorite drink from browsing the existing listings, or use it as a coffee journal and update the database with new drinks they've tried from different cafes.

## Preview

![](coffeeappgif.gif)

## Technologies

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). The app utilizes JavaScript, React.js, JSX, HTML, CSS, Ruby, Active Record, and Sinatra. Styled-components was used for styling within components.

## Installation

To run the app locally, clone this GitHub repository into your machine with 'git clone', and do the same with the [project server.](https://github.com/9ucc1/coffeeshop-server)

In the root directory of the server repository, run 'rake server' to start the backend server at [http://localhost:9292](http://localhost:9292). Data for this project is stored at [http://localhost:9292/shops](http://localhost:9292/shops) and [http://localhost:9292/drinks](http://localhost:9292/drinks).

In the frontend, install packages with run 'npm install' in the root directory of the repository. Running 'npm start' runs the frontend at [http://localhost:3000](http://localhost:3000).

## Inspiration and Future Direction

This project was inspired by a personal passion for exploring local coffee shops and trying new drinks. I wanted to create an app that allows users to organize drinks and cafes they have tried, and perhaps share with others to allow someone else to discover something new.

To improve this project in the near future, a sort/filter function or search bar could be added to the shops and drinks page as the amount of data increases. A rating system or favorite button could be added to shops and drinks to distinguish a user's personal preferences.

To improve this project in the distant future, user logins could be implemented to persist data from unique users and make the experience more personalized. Users could share their favorite drinks/shops in a feed, or send their picks to other users.

## Authors and Acknowledgement

This project was completed by Gucci Fan for Phase 3 of the Software Engineering course at Flatiron School.

## Sources

Shop logo images are credited to the corresponding coffee shop and their webpage. Drink images were pulled from Google Images.

## MIT License

Copyright (c) 2022 Gucci Fan

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.