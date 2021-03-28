/**
 * ClasseController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Classe = require("../models/Classe");

module.exports = {
  
    list:function(req,res){
        Classe.find({}).exec(function(err,classe){
            if(err){
                res.send(500,{error:'Database error'});
            }
            res.send(classe);
        });
        },

    addClasse: function (req, res) {  /* POSTed data */
        res.send(classe);
                // Create a classe

                const labelle = req.body.labelle;
                         etudiants = req.body.etudiants;
                         owners= req.body.owners;
    
        Classe.create(body,function(err,classe){
                if (err) return next(err);
                res.status(201);
                res.json(classe); 
 
        });
        },
       
    delete: function(req, res){
        Classe.destroy({id:req.params.id}).exec(function(err){
                if(err){
                    res.status(500).json({error: err});
                }
        
                res.send(classe);
            });
        
            return false;
        },
    edit: function(req, res){
        Classe.findOne({id:req.params.id}).exec(function(err, classe){
                if(err){
                    res.send(500, {error: 'Database Error'});
                }
        
                res.send({classe:classe});
            });
        },
    update: function(req, res){
   
            var dateDebut = req.body.dateDebut;
                dateFin=req.body.dateFin;
            
     Classe.update({id: req.params.id},{labelle:labelle},{etudiants:etudiants},{owners:owners}).exec(function(err){
                if(err){
                    res.send(500, {error: 'Database Error'});
                }
        
                res.send({classe:classe});
            });
        
            return false;
        }


























 /*    classe.create({
        'labelle':req.body.labelle,
      }).exec(function(err,newClasse){
        if(err) { return next(err); ]
        Etudiant.create({ name: 'tom', pets: [newPet.id] }).exec(function(err, newUser) {
          if (err) { return next(err); }
          return res.json({ pet: newPet, user: newUser });
        });
      }); 
     
*/

     /*  create: function(req, res, next) {

    var params = req.params.all();

    Classe.create(params, function(err, classe) {

        if (err) return next(err);

        res.status(201);

        res.json(classe);
    });
      } 
      
      */
/* 
      create: function (req, res) {
        let data;
          // to convert category labelle's first letter capital
        data = { labelle: req.body.labelle.charAt(0).toUpperCase() + req.body.labelle.slice(1),
                 etudiants: req.body.etudiants,
                 owners: req.body.owners}
        Classe.create(data).fetch().exec(function (err, classe) {
          if (err) return (err);
          return res.json(classe);
        })
       }, */
};

