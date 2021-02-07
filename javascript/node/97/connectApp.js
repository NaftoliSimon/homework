const app = require('connect')();

app.use(require('./queryParser'));

app.use((req, res, next) => {
  res.setHeader('content-type', 'text/html');

  //if(req.queryStr === '?magicWord=please') {  //verify through string (see queryParser.js)
  if (req.query.magicWord === 'please') {    //verify through object (see queryParser.js)
    res.statusCode = 200;
    next()
  }
  else {
    res.statusCode = 403;
    res.write('<h2>UNAUTHERIZED ATTEMPT!!!</h2> <h3>Downloading Virus...</h3>')
    next(error)
  }
});

app.use('/home', (req, res, next) => {
  res.write('<h1>Home Page</h1>')
  next();
});

app.use('/about', (req, res, next) => {
  res.write('<h1>About Page</h1>')
  next();
});

app.use((req, res, next) => {
  res.end('<h3>Success! -- Permission Granted</h3>');
});

app.use((error, req, res, next) => {
  //res.statusCode = 400;
  res.end('<p>?magicWord=please</h3></p>');
});

app.listen(80);

