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

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Frontend_ |
|    Postgresql    | _Database_ |
|  Ruby on Rails   | _Backend._ |

<br>

### Client (Front End)

#### Wireframes

[WireFrame Link](https://wireframe.cc/pro/edit/364674)


#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. 

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ Screens/
      |__ Homepage
      |__ UserProfile
      |__ UserEdit
      |__ CreateListing
      |__ EditListing
      |__ ViewListing
      |__ SignIn
      |__ Register
|__ Components/
      |__ Shared
            |__ Header.jsx
            |__ Footer.jsx
            |__ Layout.jsx
      |__SignInForm
            |__ Signin.jsx
      |__ RegisterForm
            |__ Register.jsx          
|__ Services/
      |__ api-helper.js
      |__ auth.js
      |__ Listing.js
      |__ Save-Favorite.js
```

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|   Gallery    |   class    |   y   |   n   | _The gallery will render the posts using cards in flexbox._      |
| Gallery Card | functional |   n   |   y   | _The cards will render the post info via props._                 |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

![ERD Model Link](https://i.imgur.com/BcMoTR8.png)

<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
