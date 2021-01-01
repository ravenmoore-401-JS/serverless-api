'use strict';

const uuid = require('uuid').v4;
const dragonModel = require('./models/dragon.schema');

exports.handler = async (event) => {
  const {color, age, size, isAgressive} = JSON.parse(event.body);

  const id = uuid();

  try {
    const record = new dragonModel({id,color,age,size,isAgressive});
    const dragon = await record.save();

    return{
      statusCode: 202,
      body: JSON.stringify(dragon),
    };
  
  } catch (err){
    return{
      statusCode:500,
      response : err.message,
    };
  }
};
