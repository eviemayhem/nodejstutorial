const { response } = require('express');
const express = require('express');
const app = express();

//register view engine
app.set('view engine', 'ejs');



//listen for requests
app.listen(3000, () => {
    console.log('Server is up on port 3000');
});
  app.get('/', (req, res) => {
    const blogs = [
      {title: 'Blog 1', snippet: 'This is blog 1'},
      {title: 'Blog 2', snippet: 'This is blog 2'},
      {title: 'Blog 3', snippet: 'This is blog 3'}
    ];
    res.render('index', {title: 'Home', blogs: blogs});
  });

  app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
  });

app.get('/blogs/create', (req, res) => {
    res.render('blogs/create', {title: 'Create Blog'});
  });

  //404 page---MUST GO AT BOTTOM. Will fire for each request. Essentially an if/else statement
  app.use((req, res,) => {
    res.status(404);
    res.send('<h1>404</h1>');
  });



  