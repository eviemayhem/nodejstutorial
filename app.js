import express, { static } from 'express';

import morgan from 'morgan';
import { connect } from 'mongoose';
import { save } from './models/blog';


const app = express();
//connect to mongdb
const dbuRI ="mongodb+srv://evie:<evieevie>@cluster0.fdas3.mongodb.net/node-tuts?retryWrites=true&w=majority";
connect(dbuRI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(db => app.listen(3000, () => {
    console.log('Server is up on port 3000, db connected');
}))
.catch(err => console.log(err));
//register view engine
app.set('view engine', 'ejs');

//mongoose and mongo sandbox routes
app.get('/add-blog', (req, res) => {
 const blog = new Blog({
     title: 'Test Blog',
     snippet: 'Test snippet',
     body: 'Test body'
 })
});

save().then(result => {
    console.log(result);
})

app.get('/', (req, res) => {
    res.render('index');
});

//search for blog
app.get('/search', (req, res) => {
    const { search } = req.query;
    Blog.find({title: {$regex: search, $options: 'i'}})
    .then(blogs => {
        res.render('index', {blogs});
    })
    



//middleware and static files

app.use(static('public'));
app.use(morgan('dev'));




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



  