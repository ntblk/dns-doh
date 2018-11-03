const axios = require('axios');

/*
params: {
ID: 12345
},
*/

axios({
  url: 'https://dns.google.com/resolve?name=example.com&type=AAAA',
  responseType: 'json',
  headers: {
    accept: 'application/dns-json',
  }
}).then (res => {
  console.log(res.data);
});
