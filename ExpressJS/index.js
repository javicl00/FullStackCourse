const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const members = require('./Members');

const app = express();
//After it I'm installing a date management package called moment

//Handlebars Middleware
app.engine("handlebars", exphbs.engine({ defaultLayout: "main" })); // Set the view engine to handlebars
app.set('view engine', 'handlebars');// Set the view engine to handlebars


// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Homepage route
app.get('/', (req, res) =>
    res.render('index', {
        title: 'Member App', // I'm passing a title to the index.handlebars
        members // I'm passing the members array to the index.handlebars file
      })
    );

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));// Set the static folder to public folder in the root directory 


// app.get('/', (req, res) => {// Create a route for the root path of the server and send a response 
//     res.send('<h1>Hello World</h1>'); // Send a response to the client when the root route is requested
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));// Send a file to the client when the root route is requested
// });

// //get about page
// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });
//Members API routes
app.use('/api/members', require('./routes/api/members'));// This is a middleware function that logs the request protocol, host, and original url

const PORT = process.env.PORT || 5000; // Set the port number to 5000 or the environment variable PORT 

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


