const dns = require ('./index');

dns.query('example.com').then(res => {
  console.log(res);
});
