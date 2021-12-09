# Project Name

HappyHack

## Description

You need help to fix a bug on your website? Or you are not able to create a flexbox by yourself?
SignUp for HappyHacking - a platform from web developers for web developers who coming together and help each other in coding challenges. You can create an advert and ask for help or you offer your skills and solve some bugs. On top, developers can even share coding events or offering own classes. Join this platform and be part of an unique community from which you can only benefit.

## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault

- **homepage** - As a user I want to be able to access the homepage so that I can see what the app is about and login and signup
- **sign up** - As a user I want to sign up on the webpage so he/she is part of a web developers community who helps each other out with coding challenges
- **profile set up** - As a user I want to set up a profile so he/she is able to use the features the platform offers
- **login** - As a user I want to be able to log in on the webpage so that I can get back to my account and see my collection (my own requests (need help) or realised adverts )
- **logout** - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account

- **Advert create** - If the user needs help with a coding issue, he/she can create (also edit/delete) a proposal for that
- **Advert edit** - The user can edit his posted adverts
- **Advert delete** - The user can delete his posted adverts

- **Advert accept** - The developer can swipe between the adverts and save these he wants to embrace

- **Adverts done** - In developers profile all adverts are listes he solved so far

## Backlog

- /profile/:Messages
- search bar (on categories)
- add: github on user schema
- add schema on what can you help with (check boxes)
- event once confirmed, appers in your calendar
- chatbox

## Models

- job
- event
- users
- messages

job Shema: (job's name; details, skills_needed; username)
user schema:(name, location, skills, about me, picture, email, password)
events schema: (name, user, location, skills, about, confirmation)
message schema: (title, message, username_user1, username_user2)

## Routes

/
sign in
sign up
/profile
/profile/:EditProfile
/profile/:OffersAccepted
/profile/:OffersCreated
/helpadeveloper
/gethelp
/create
/edit (patch)
/delete
/logout ->
/homepage

## Links

### Trello

### Git

The url to your repository and to your deployed project

[Deploy Link](http://heroku.com)

### Slides

```

```
