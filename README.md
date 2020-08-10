# Bluetail

## Overview

_**Bluetail** is a tiny home market place, where real estate agents can sign up and list their clients tiny homes. Agents will be able to create listings, and add colleagues to their listings. 


<br>

## MVP

- _A new user can create an account and update their profile_
- _A user can add new listings or remove old listings_
- _An Agent can add more agents to their listing_
- _A user can update the home information, address, and price for their listings_
- _A homepage will show all available listings across the site_
- _A user can save/favorite a listing_


<br>

### Goals / Post-MVP

- _A customer will be able to request more information from an agent_
- _Add a seperate login for customers only_
- _Incorporate a messaging feature_

<br>

### Libraries and Dependencies


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Frontend_ |
|    Postgresql    | _Database_ |
|  Ruby on Rails   | _Backend._ |

<br>

### Client (Front End)

#### Wireframes

[WireFrame Link](https://wireframe.cc/pro/edit/364674)


#### Component Hierarchy

``` structure

src
|__ Screens/
      |__ Homepage
      |__ UserProfile
      |__ SignIn
      |__ Register
|__ Components/
      |__ Shared
            |__ Header.jsx
            |__ Footer.jsx
            |__ Layout.jsx
      |__ ViewListing
            |__ ViewListing.jsx
      |__SignInForm
            |__ Signin.jsx
      |__ RegisterForm
            |__ Register.jsx   
      |__ UserEdit
            |__ UserEdit.jsx
      |__ CreateListing
            |__ CreateListing.jsx
      |__ EditListing
            |__ EditListing.jsx
|__ Services/
      |__ api-helper.js
      |__ auth.js
      |__ user.js
      |__ listing.js
      |__ save-favorite.js
```

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                             |
| :----------: | :--------: | :---: | :---: | :-----------------------------------------------------------------------|
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._                      |
|    Footer    | functional |   n   |   n   | _The footer will provide a link to contacts and about pages._           |
|    Layout    | functional |   n   |   n   | _The layout will keep the header and footer consistent at all screens_  |
|    Sign In   | functional |   y   |   y   | _The signin form will check the inputs against our database_            |
|    Register  | functional |   y   |   y   | _The resgister form will save the users information and create new acc_ |


#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Set file structure  |    H     |     5 hrs      |      TBD      |      TBD    |
| Create services     |    H     |     2 hrs      |      TBD      |      TBD    |
| Header/Footer/Layout|    H     |     3 hrs      |      TBD      |      TBD    |
| Create Homepage     |    H     |     3 hrs      |      TBD      |      TBD    |
| Create Sign In Form |    H     |     4 hrs      |      TBD      |      TBD    |
| Create Register Form|    H     |     4 hrs      |      TBD      |      TBD    |
| User Profile Crud   |    M     |     4 hrs      |      TBD      |      TBD    |
| Listing Crud        |    H     |     4 hrs      |      TBD      |      TBD    |
| Basic CSS           |    M     |     4 hrs      |      TBD      |      TBD    |
| Add favorite/save ft|    L     |     3 hrs      |      TBD      |      TBD    |
| Advanced CSS        |    L     |     4 hrs      |      TBD      |      TBD    |
| TOTAL               |          |     40 hrs     |      TBD      |      TBD    |

<br>

### Server (Back End)

#### ERD Model

![ERD Model Link](https://i.imgur.com/BcMoTR8.png)

<br>

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
