'use strict';

const dragonModel = require('./models/dragon.schema');

exports.handler = async (event) =>{
  const id = event.pathParameters.id;

  try{
    let dragonData;

    if(id){
      const dragonsList = await dragonModel.query('id').eq(id).limit(1).exec();
      dragonData = dragonsList;
    } else {
      dragonData = await dragonModel.scan().exec();
    }
    return {
      statusCode : 200,
      body: JSON.stringify(dragonData),
    };
  }catch (err){
    return {
      statusCode : 500,
      response: JSON.stringify(err.message),
    };
  }
};