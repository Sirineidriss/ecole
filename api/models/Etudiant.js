/**
 * Etudiant.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const Classe = require("./Classe");

module.exports = {

  attributes: {
    nom: {
      type: 'STRING',
      required: true
  },

    prenom: {
      type: 'STRING',
      required: true

  },
  matricule: {
    type: 'STRING',
    required: true

},
owner:{
  model:'classe'
}
  /*  classes: {
    collection: 'classe',
    via: 'etudiantIds'
  }, 
  */
} ,
};


//Classe.find().populate('etudiants',{matricule:'M123'});