const config = require('./config')

const showBooks = function (data) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/books',
    data: data,
  })
}

module.exports = {
  showBooks
}
