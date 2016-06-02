const Session = require('express-session');
const Cookie = require('cookie-parser');
const Parser = require('body-parser');
const Express = require('express');
const Lusca = require('lusca');

const app = Express();
let isSecure = true;

app.use([
  Session({secret: 'thisisnotsecure'}),
  Cookie(),
  Parser.urlencoded(),
  Lusca.csrf({ cookie: 'csrf' })
]);

app.get('/', (req, res) => res.send(`<code><pre>isSecure: ${isSecure}</pre></code>`));

app.post('/secure', (req, res) => {
  if (req.body.secure === 'false') {
    isSecure = false;
    return res.status(201).end();
  }
  const error = Error('Unprocessable Entity');
  error.code = 422;
  throw error;
});

app.listen(8000, () => console.log('Listening ...'));
