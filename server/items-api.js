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

const getItems = function (payload) {
  const start = Number.parseInt(payload.start) || 0;
  const limit = Number.parseInt(payload.limit) || 9;
  const items = cachedItems.slice(start, start + limit);

  return {
    items: items,
    totalItems: cachedItems.length
  };
};

app.get('/item/:id', (req, res) => {
  const id = req.params.id;
  const item = getItem(id);
  res.status(200).json(item);
});

module.exports = app;