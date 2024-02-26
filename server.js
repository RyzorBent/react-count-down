const express = require('express');
const path = require('path');

app = express();

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'development') {
  console.log('running on heroku servers');
  app.use(express.static(path.join(__dirname, 'dashboard/build')));

  app.get('*', (req, res) => {
    console.log('prod static space params --> %o', req.params);
    console.log('prod static space body -->  %o', req.body);
    res.sendFile(path.join(__dirname, 'dashboard', 'build', 'index.html'));
  });
}
