/**
 * SeanceController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
   
    list:function(req,res){
        Seance.find({}).exec(function(err,seance){
            if(err){
                res.send(500,{error:'Database error'});
            }
            res.send(seance);
        });
        },

    addSeance: function (req, res) {  /* POSTed data */
        res.send(seance);
                // Create a seance

                const dateDebut = req.body.dateDebut;
                         dateFin = req.body.dateFin;
                         classes= req.body.classes;
                         salles=req.body.salles;

                     // seance.ObjectId=req.body.seance.ObjectId;
            
        //technically - once policies in place, this if can be removed as this action couldn't be called unless the user is logged in.
    
        Seance.create(body,function(err,seance){
                if (err) return next(err);
                res.status(201);
                res.json(seance); 

           
        });
        },
       
    delete: function(req, res){
        Seance.destroy({id:req.params.id}).exec(function(err){
                if(err){
                    res.status(500).json({error: err});
                }
        
                res.send(seance);
            });
        
            return false;
        },
    edit: function(req, res){
        Seance.findOne({id:req.params.id}).exec(function(err, seance){
                if(err){
                    res.send(500, {error: 'Database Error'});
                }
        
                res.send({seance:seance});
            });
        },
    update: function(req, res){
   
            var dateDebut = req.body.dateDebut;
                dateFin=req.body.dateFin;
            
            Seance.update({id: req.params.id},{dateDebut:dateDebut},{dateFin:dateFin}).exec(function(err){
                if(err){
                    res.send(500, {error: 'Database Error'});
                }
        
                res.send({Seance:Seance});
            });
        
            return false;
        }


};

