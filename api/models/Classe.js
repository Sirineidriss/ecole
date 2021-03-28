/**
 * Classe.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
 
  attributes: {

   /*  numclasse: {
      type: 'STRING',
      required: true
  }, */

  labelle: {
      type: 'STRING',
      required: true

  },
  etudiants:{
    collection:'etudiant',
    via:'owner'
  },
  owners: { 
    collection: 'seance', 
    via: 'classes'}



  }

};

