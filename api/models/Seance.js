/**
 * Seance.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
   
    dateDebut: {
      type: 'string',
      columnType:'date',
      required: true

  },
  dateFin: {
    type: 'string',
    columnType:'date',
    required: true

},
salles: {
  collection: 'salle',
  via: 'seance'
},
classes: {
   collection: 'classe', 
   via: 'owners' }
  },

};

