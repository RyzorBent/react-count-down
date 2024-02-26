const express = require('express');
const path = require('path');

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'development') {
  logger.info('running on heroku servers');
  app.use(express.static(path.join(__dirname, 'dashboard/build')));

  app.get('*', (req, res) => {
    logger.info('prod static space params --> %o', req.params);
    logger.info('prod static space body -->  %o', req.body);
    res.sendFile(path.join(__dirname, 'dashboard', 'build', 'index.html'));
  });
}
