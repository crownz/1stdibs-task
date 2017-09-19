/**
 * Created by vytas on 19/09/2017.
 */
const express = require('express');
const cachedItems = require('./data/items.json');

const app = express();

const getItem = function (itemId) {
  return cachedItems.find(function (item) {
      return item.id === itemId || item.integerId === itemId;
    }) || {};
};

app.get('/item/:id', (req, res) => {
  const id = req.params.id;
  const item = getItem(id);
  res.status(200).json(item);
});

module.exports = app;