const axios = require('axios');

function query (hostname, SERVER_URL) {
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
