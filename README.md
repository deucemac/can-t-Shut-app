# Slap
Slap is a chat room that allows users to send and exchange messages. Users can friend request each other and create threads to communicate within the app. Slap provides both one-on-one communication and group chats for a diverse user experience.


- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Slap** is messaging application that allows for a dynamic user experience.  A user can make friends and maintain various group chats by starting message threads to connect with friends and family._


<br>

## MVP

<br>

### Goals

- _Create a message threads between one or more users._
- _Populate the message threads with data and content from users_
- _Let the user create, update, and maintain contact list._
- _Allow the user to edit and delete messages._
- _Provide clean user interface for user to view contacts and send messages._

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Library for frent development._           |
|   React Router   | _For declarative routing on the front-end._|
|     PSQL         | _Relational database._                     |
|      Rails       | _Back end framework for development._      |
|       JWT        | _Used for the purpose of authentication._  |
|   Rack Cors      | _cross-origin resource sharing._           |
|     axios        | _HTTP client to perform requests._         |

<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

![https://wireframe.cc/pro/pp/9c10fbd06358581](url)

- Overview

![https://wireframe.cc/pro/pp/186913f58358596](url)

- View All Chats/message Threads

![https://wireframe.cc/pro/pp/10bc42420358602](url)

- Start message with friend

![https://wireframe.cc/pro/pp/7c3597868358605](url)

- View your contacts

![https://wireframe.cc/pro/pp/eae0e148b358591](url)

- Message Chat view

![https://wireframe.cc/pro/pp/167d4cd36358609](url)

- Start Group Chat

#### Component Tree

>  

#### Component Hierarchy
 

``` structure

src
|__ components/
      |__ Main.jsx
      |__ StartMessageThread.jsx
      |__ ShowMessageThread.jsx
      |__ ShowMessages.jsx
      |__ CreateMessage.jsx
      |__ Login.jsx
      |__ Register.jsx
      |__ Header.jsx
      |__ UpdateMessage.jsx
      |__ Search.jsx
|__ services/
      |__ api-helper.js
      |__ auth.js
      |__ flavors.js
      |__ foods.js
|__ App.js

```

#### Component Breakdown



|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Main      |   class    |   y   |   y   | _Primary data holding component._                                |
|StartMessageT |   class    |   y   |   y   | _Will initiate a new message thread_                             |
| ShowMessageT |   class    |   y   |   y   | _Will show a current message thread._                            |
| ShowMessages | functional |   n   |   y   | _Will show current messages._                                    |
| CreateMessage| functional |   n   |   y   | _Will create a message._                                         |
|    Login     |   class    |   y   |   y   | _Handles user login information._                                |
|   Register   |   class    |   y   |   y   | _Registers a new user._                                          |
|    Header    | functional |   n   |   n   | _Provide links to different pages and displays the current user._|
| UpdateMessage|   class    |   y   |   y   | _Edits a message previously sent._                               |

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Main                |    H     |     3 hrs      |     TBD       |     TBD     |
| Create CRUD Actions |    H     |     8 hrs      |     TBD       |     TBD     |
| StartMessageT       |    H     |     3 hrs      |     TBD       |     TBD     |
| ShowMessageT        |    H     |     3 hrs      |     TBD       |     TBD     |
| CreateMessage       |    H     |     3 hrs      |     TBD       |     TBD     |
| UpdateMessage       |    H     |     3 hrs      |     TBD       |     TBD     |
| TOTAL               |          |     23 hrs     |     TBD       |     TBD     |


<br>

### Server (Back End)

#### ERD Model

![https://app.diagrams.net/#G1kdcREDvcVOgbGq-QgMWI9v04fFqkTMDS](url)

<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
