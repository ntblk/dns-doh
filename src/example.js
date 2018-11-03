const dns = require ('./index');

var SERVER_URL = 'https://dns.google.com/resolve';

dns.query('example.com', SERVER_URL).then(res => {
  console.log(res);
});
