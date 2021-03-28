/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string'
    },
    email: {
      type: 'string',
      unique: true,
      required: true,
      //contains: '@'
    },
    password: {
      type: 'string',
      minLength: 6,
      required: true
    },
    // This defines the other half of our association 
    //with ideas.  This is the 'many' side.
    ideas: {
      collection: 'idea',
      via: 'userId'
    },
    
  },

};


