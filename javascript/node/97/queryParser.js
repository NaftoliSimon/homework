const url = require('url');

//verify through object
 module.exports = (req, res, next) => {
  const queryObj = url.parse(req.url, true).query;
  req.query = queryObj;
  next();
}


//verify through string
/*module.exports = (req, res, next) => {
  const queryStr = url.parse(req.url, true).search;
  req.queryStr = queryStr;
  next();
}*/