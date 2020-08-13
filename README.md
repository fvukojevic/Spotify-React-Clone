## Spotify React Clone

This app is a demo replica of Spotify (using their spotify api) that I decided to create in order to learn React and also have fun. This is not meant for production use, just to have fun locally.

## Project Status

This project is currently in development. There are many features still not implemented and I will try to add as many as I can, and as many as I know how to do, due to being not experienced in React

## Project Screen Shot(s)

### Login Page

![alt text](https://github.com/fvukojevic/Spotify-React-Clone/blob/master/blob/login.png)

### Main Page

![alt text](https://github.com/fvukojevic/Spotify-React-Clone/blob/master/blob/body.png)

### Dynamic Slugs

![alt text](https://github.com/fvukojevic/Spotify-React-Clone/blob/master/blob/slug.png)

## Installation and Setup Instructions

#### Example:  

Before the already well known react installation process, place visit spotify developer page and go inside the dashboard. There you can create a new app, and you will get your clientId. Also open the app inside the dashboard and edit settings. Only thing you need to change is redirect url. It is the url your app is running at. By default localhost runs at http://localhost:3000/ so you can copy and paste that if you are just looking to test the app. 

Copy your clientId inside `spotify.js` file and also put your `redirectUrl`

Now for the regular react app process you will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`    

To Start Server:

`npm run build && npm start`  

To Visit App:

`localhost:3000`  

## How does it work

Once the app is started and you have successfully added your clientId and redirectUrl, on start you should see the login page. That's because you haven't got the authorization token from spotify api. Once you click login, spotify takes it from there and asks you to login to you account. You get redirected back with the token I store inside React Context state. With that token I can reach inside spotify api and get your playlists. (You should see them pop to the left). You can pick whatever playlist you want, and start the songs. 

**Important Notice** -> Spotify only adds the preview_url to their songs, so you can only play 30 sec of every song. Some don't even have the `preview_url` and will not start at all. Sucks, I know, but that's why this project is only created for fun. I wanted to interact with a api online, and spotify api looked really nice. So this app is never ment to be used on production, but just as a little project to hopefully get you started with React. I know it did help me so hopefully I will be able to help someone else :) 

## Reflection

So at this point I just want to reflect on this app and why I decided to use it. So I have been working as a software developer for the last 2 years, and my main focus has been more on the backend side of things. So creating api's, microservices, interacting with databases (nosql, sql, key value stores, etc.) has always been my main focus. 

Recently I decided to switch gears and try learning more about frontend and devops things. I picked up dockers, started learning them, and after a while got pretty good at it (this app will potentially be dockerized). When it comes to frontend I picked up Vue.js pretty fast as it is probably the fastes and easiest frontend language to start with. I created bunch of little small apps, just testing how everything works, how lifecycles works, how it all connects to Vuex, etc.

Now I decided it would not be the worst idea to try something new (like React) so I can compare the two frameworks and have a better grasp on how they both work. Advantages and disadvantages of both. 

You can clearly see by my code, that I am no expert when it comes to frontend, so please bare with me while I am trying to improve the code and add new featues. While it might take only few minutes to some, I still have to spend some time on stackoverflow and alike to seek help whenever I get into trouble.

And as said before, this is an app in development and there are many known issues and bugs that I will eventually fix. 
