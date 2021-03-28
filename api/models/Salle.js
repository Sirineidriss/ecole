/**
 * Salle.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const Seance = require("./Seance");

module.exports = {

  attributes: {

    numsalle: {
      type: 'STRING',
      required: true

  },
 seance: {
    model: 'seance'
  }
  }
 
};

