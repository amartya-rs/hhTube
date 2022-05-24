[![Netlify Status](https://api.netlify.com/api/v1/badges/da6bf246-26c9-4506-9948-f7c355b2db25/deploy-status)](https://app.netlify.com/sites/hh-tube/deploys)

<h1 align="center">
hhTube
</h1>

## About

hhTube is a video library for the hiphop fans built with ReactJS.

Live link - [hhtube](https://hh-tube.netlify.app/)

## Preview

![](/preview-gif-hhtube.gif)

## Features

-  Filter the videos by category on explore page
-  Search video
-  Add/remove videos from Liked videos
-  Add/remove videos from Watchlater
-  Playlist
   -  Create/delete a playlist
   -  Add/remove a video from a playlist
-  History
   -  Watched Video gets added to history
   -  Remove a video or clear full history
-  Individual page for video
-  User profile
-  Authentication
   -  Signup
   -  Login
   -  Logout
-  Alert/Toast
-  Dark mode
-  Responsive site

## Run the app locally

-  Clone the repository on your local machine with the command below in your terminal, and cd into the folder

```
git clone https://github.com/amartya-rs/hhTube.git

cd hhTube
```

-  install dependencies

```
npm install
```

-  create a `.env` file with a variable as mentioned below, in the root directory

```
REACT_APP_JWT_SECRET = <JWT_SECRET_KEY_>
```

-  start the server

```
npm start
```
