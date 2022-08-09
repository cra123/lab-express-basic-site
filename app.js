const express = require('express');

// Create a new express application instance
const app = express();

//create route for css. js and images
app.use(express.static('public'));

//Create our routes 
app.get('/', (request, response, next) => response.sendFile(__dirname + '/views/index.html'));

//create about route
app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about.html'));

//create work route
app.get('/work', (request, response, next) => response.sendFile(__dirname + '/views/work.html'));

//create photo gallery route

app.get('/gallery', (request, response, next) => response.sendFile(__dirname + '/views/gallery.html'));

//Server Started

app.listen(3000, () => console.log('Server started on port 3000'));