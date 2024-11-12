# gitauto
Optimize your git workflows. Create intuitive logical and scoped commit of you working branches.

> cd server/
> npm install
> npm run start-server

## Endpoints

### Server endpoints
> /connect -> takes username and password in base64 encoding -> returns `jwttoken` as data.token
> /users/ -> takes email and password as json and register a new user
> /users/me/ -> call with a jwttoken return the user associated with that token
> /fine-tune-model/ call with a jwttoken, takes a name as json, fine tunded a gemini model to be smart with generating commit messages -> return the name of that model
> /generate-commit-msg/ call with a jwttoken, takes a git_status and git_diff as json -> return a commit message
>

### Frontend endpoints
> / -> render the home page
> /register/ -> renders the registration page
> /login/ -> renders the login page
> /logout/ -> destory's the user session
> /how-to-use/ -> renders the how to use page
