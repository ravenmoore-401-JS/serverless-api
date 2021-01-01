'use strict';

const dynamoose = require('dynamoose');

const dragonSchema = new dynamoose.Schema({
  'id': String,
  'color': String,
  'age': Number,
  'size': String,
  'isAgressive': {type:Boolean, default: true},
});

module.exports = dynamoose.model('dragon', dragonSchema);

