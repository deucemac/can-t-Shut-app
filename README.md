# Can't-Shut-app
Can't-Shut-app is a chat room that allows users to create topics and discuss various subjects. Users can friend request each other and create threads to communicate within the app. Slap provides both one-on-one communication and group chats for a diverse user experience.


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

_**Can'tShutApp** is an application that creates a platform for discussion.  A user can create various threads by initiating a topic and connecting with users to share information around the world._


<br>

## MVP

<br>

### Goals

- _Create a threads between users to exchange messages and information._
- _Populate the message threads with data and content from users._
- _Let the user create, update, and maintain posts._
- _Allows the user to edit and delete posts._
- _Provides clean user interface for user topics and respond/post with information._

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Library for frent development._           |
|   React Router   | _For declarative routing on the front-end._|
|      PSQL        | _Relational database._                     |
|      Rails       | _Back end framework for development._      |
|      JWT         | _Used for the purpose of authentication._  |
|    Rack Cors     | _cross-origin resource sharing._           |
|      axios       | _HTTP client to perform requests._         |

<br>

### Client (Front End)

#### Wireframes

> copy and paste the links into a different tab

![https://wireframe.cc/pro/pp/9c10fbd06358581](url)

- Overview/MainPage

![https://wireframe.cc/pro/pp/186913f58358596](url)

- View All User Topics Threads

![https://wireframe.cc/pro/pp/eae0e148b358591](url)

- Single Topic/Thread view

![https://wireframe.cc/pro/pp/167d4cd36358609](url)

- Initialize a Topic

#### Component Tree

![https://wireframe.cc/pro/pp/b9cbc4ff1358667](url)

#### Component Hierarchy
 

``` structure

src
|__ components/
      |__ Main.jsx
      |__ StartTopic.jsx
      |__ ShowTopicThread.jsx
      |__ ShowPosts.jsx
      |__ CreatePost.jsx
      |__ Login.jsx
      |__ Register.jsx
      |__ Header.jsx
      |__ UpdatePost.jsx
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
|   StartTopic |   class    |   y   |   y   | _Will initiate a new topic_                                      |
|   ShowTopic  |   class    |   y   |   y   | _Will show a current topic._                                     |
|   ShowPosts  | functional |   n   |   y   | _Will show current posts._                                       |
|  CreatePosts | functional |   n   |   y   | _Will create a post._                                            |
|    Login     |   class    |   y   |   y   | _Handles user login information._                                |
|   Register   |   class    |   y   |   y   | _Registers a new user._                                          |
|    Header    | functional |   n   |   n   | _Provide links to different pages and displays the current user._|
|  UpdatePost  |   class    |   y   |   y   | _Edits a post previously sent._                                  |

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

![https://drive.google.com/file/d/1kdcREDvcVOgbGq-QgMWI9v04fFqkTMDS/view?usp=sharing](url)
> Copy and paste the link into another tab

<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
