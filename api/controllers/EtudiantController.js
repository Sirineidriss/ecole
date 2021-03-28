/**
 * EtudiantController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Etudiant = require("../models/Etudiant");

module.exports = {
  
    list:function(req,res){
        Etudiant.find({}).exec(function(err,etudiant){
            if(err){
                res.send(500,{error:'Database error'});
            }
            res.send(etudiant);
        });
        },
  addetudiant: function (req, res) {  /* POSTed data */
    var nom  = req.body ? req.body.nom : undefined,
        prenom = req.body ? req.body.prenom : undefined;
        matricule = req.body ? req.body.matricule : undefined;

    //technically - once policies in place, this if can be removed as this action couldn't be called unless the user is logged in.
    if ( ! req.classe ) {
        return res.badRequest("Cannot add etudiant ");
    } else if ( ! nom && ! prenom && ! matricule) {
        return res.badRequest("Need a nom ,matricule or prenom to create etudiant");
    } else {
        etudiant.create({ nom: nom || '', prenom: prenom || '', matricule: matricule || ''})
            .then( (etudiant) => {
                req.classe.etudiants.add(etudiant);
                req.classe.save()
                    .then ( () => res.json(etudiant) )
                    .catch( (err) => { res.serverError(err) });
            })
            .catch( (err) => res.serverError(err));
        }
    },

    delete: function(req, res){
        Etudiant.destroy({id:req.params.id}).exec(function(err){
                if(err){
                    res.status(500).json({error: err});
                }
        
                res.send(etudiant);
            });
        
            return false;
        },
    edit: function(req, res){
        Etudiant.findOne({id:req.params.id}).exec(function(err, etudiant){
                if(err){
                    res.send(500, {error: 'Database Error'});
                }
                res.send({etudiant:etudiant});
            });
        },
/*     update: function(req, res){
   
            var nom = req.body.nom;
                prenom=req.body.prenom;
                matricule=req.body.matricule;

                Etudiant.update({id: req.params.id},{nom:nom},{prenom:prenom},{matricule:matricule}).exec(function(err){
                if(err){
                    res.send(500, {error: 'Database Error'});
                }
                res.send({etudiant:etudiant});
            });
            return false;
        } */
   
      
};

