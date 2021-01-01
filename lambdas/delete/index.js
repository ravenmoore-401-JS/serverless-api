'use strict';

const dragonModel = require('./models/dragon.schema');

exports.handler = async (event) =>{
  const id = event.pathParameters.id;

  try{
    const dragon = await dragonModel.query('id').eq(id).limit(1).exec();
    console.log(dragon);
    await dragon.delete();
    return {
      statusCode : 204,
      body: JSON.stringify({dragon}),
    };
  }catch (err){
    return {
      statusCode : 500,
      response: JSON.stringify(err.message),
    };
  }
};