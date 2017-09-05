# InterNations UMS (User Management System)

An InterNations webpage to manage users and groups.

## Features

 - User Management System
   - Log In / Sign Up.
   - Create users and groups.
   - List of existing users and groups.
   - Assign users to a group they aren't already part of.
   - Remove users from a group.
   - Delete groups when they no longer have members.
   - Delete users.
   - When a user is deleted, he is removed from all groups he belong to.
   - A user cannot exist without having at least one group.
   - A user details page.
   - A group detail page.

## Live demo

| Url                               |       Username       | Password  |
|:--------------------------------- |:-------------------- |:--------- |
| http://internations-ums.surge.sh/ | jlmonroy13@gmail.com | test12345 |

## Technology

I'm using [Firebase](https://firebase.google.com/) as a data store.

The front-end is built with [React](https://github.com/facebook/react). I use
[Redux](https://github.com/reactjs/redux) as my state container. Client side
routing is done with [React Router](https://github.com/reactjs/react-router).

This project was generated with [React Slingshot] (https://github.com/coryhouse/react-slingshot).

## Installation

```bash
$ git clone git@github.com:jlmonroy13/internations-ums.git
$ cd internations-ums
$ npm install
```
## Running the app

```bash
$ npm start
```

## Running in production

```bash
$ npm run build
```

## Running tests

[Jest](https://facebook.github.io/jest/).

```bash
$ npm jest
```
