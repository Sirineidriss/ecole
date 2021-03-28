/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  //'post /etudiant/addetudiant' : 'EtudiantController.addetudiant',
  //route controle salle
  'POST /salle/addSalle':'SalleController.addSalle',
  'GET /salle/findAll' : 'SalleController.findAll',
  'PUT /salle/update:id' : 'SalleController.update',
  'GET /salle/findOne:id' : 'SalleController.findOne',
  'delete/salle/delete:id':'SalleController.delete',
  //route controlle seance
  'POST /seance/addSeance':'SeanceController.addSeance',
  'GET /seance/findAll' : 'SeanceController.findAll',
  'PUT /seance/update:id' : 'SeanceController.update',
  'GET /seance/findOne:id' : 'SeanceController.findOne',
  'delete/seance/delete:id':'SeanceController.delete',
  //route controller classe
  'POST/classe/addClasse':'ClasseController.addClasse',
  'GET /classe/findAll' : 'ClasseController.findAll',
  'PUT /classe/update:id' : 'ClasseController.update',
  'GET /classe/findOne:id' : 'ClasseController.findOne',
  'delete/classe/delete:id':'ClasseController.delete',
  //route controlller etudiant
  'POST/etudiant/addetudiant':'EtudiantController.addetudiant',
  'GET /etudiant/findAll' : 'EtudiantController.findAll',
  //'PATCH /etudiant/update:id' : 'EtudiantController.update',
  'PATCH /etudiant/edit:id' : 'EtudiantController.edit',
  'GET /etudiant/findOne:id' : 'EtudiantController.findOne',
  'delete/etudiant/delete:id':'EtudiantController.delete',
  //route controlller etudiant
  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assetaddetudiantaddetudiants.             *
  *                                                                          *
  ***************************************************************************/


};
