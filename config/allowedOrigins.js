const allowedOrigins =
  process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'development'
    ? [
        'https://www.surveyr.africa',
        'https://surveyr.africa',
        'https://surveyr.herokuapp.com',
        'https://surveyr-dev.herokuapp.com',
        'https://surveyr-dev.azurewebsites.net',
      ]
    : ['http://localhost:4800', 'http://localhost:3000'];

console.log('Connection comming from, [%o] ', allowedOrigins);
module.exports = allowedOrigins;
