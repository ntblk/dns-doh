const axios = require('axios');

var SERVER_URL = 'https://dns.google.com/resolve';

function query (hostname) {
  return axios({
    url: SERVER_URL,
    responseType: 'json',
    params: {
      name: hostname,
      type: 'A',
    },
    headers: {
      accept: 'application/dns-json',
    }
  }).then (res => {
    return res.data;
  });
}

module.exports = {query};
