const fetch = require('node-fetch');

module.exports = (req, res) => {
  res.json({
  body: req.body,
  query: req.query,
  cookies: req.cookies,
  })
}
