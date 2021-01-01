'use strict';

const dragonModel = require('./models/dragon.schema');

exports.handler = async (event) =>{
  const id = event.pathParameters.id;
  const {color, age, size, isAgressive} = JSON.parse(event.body);
  try{
    if(id){
      const newDragon = new dragonModel({id,color,age,size,isAgressive});
      const dragon = await newDragon.save();
      return{
        statusCode: 202,
        body: JSON.stringify(dragon),
      };
    }
  } catch (err){
    return{
      statusCode:500,
      response : err.message,
    };
  }
};
