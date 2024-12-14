# Movie Recommendation App

A simple Movie Recommendation app, built on Java (SpringBoot) and ReactJS.

## Available Scripts

In the project directory, run:

### `npm install`

This will install all the necessary dependencies for the app's frontend. After this, run:

### `sudo docker build -t <image_name> .`

This will build the docker image for the backend of our app.
Once the image is built, run:

### `sudo docker run -p 8080:8080 <image_name>`

This will start the backend service on port 8080.

You can check the correctness of the app by running:

### `npm start`

This will redirect you to the homepage of the frontend app.
You can manually check the database of the movies by sending GET request to `http://localhost:8080/api/movies` endpoint.