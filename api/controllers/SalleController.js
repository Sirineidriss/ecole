/**
 * SalleController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    list:function(req,res){
        Salle.find({}).exec(function(err,salle){
            if(err){
                res.send(500,{error:'Database error'});
            }
            res.send(salle);
        });
        },

    addSalle: function (req, res) {  /* POSTed data */
        res.send(salle);
                // Create a salle

                const numsalle = req.body.numsalle;
                     // seance.ObjectId=req.body.seance.ObjectId;
            
        //technically - once policies in place, this if can be removed as this action couldn't be called unless the user is logged in.
    
            Salle.create(body,function(err,salle){
                if (err) return next(err);
                res.status(201);
                res.json(salle); 

           
        });
        },
       
    delete: function(req, res){
            Salle.destroy({id:req.params.id}).exec(function(err){
                if(err){
                    res.status(500).json({error: err});
                }
        
                res.send(salle);
            });
        
            return false;
        },
    edit: function(req, res){
        Salle.findOne({id:req.params.id}).exec(function(err, salle){
                if(err){
                    res.send(500, {error: 'Database Error'});
                }
        
                res.send({salle:salle});
            });
        },
    update: function(req, res){
   
            var numsalle = req.body.numsalle;
            
            Salle.update({id: req.params.id},{numsalle:numsalle}).exec(function(err){
                if(err){
                    res.send(500, {error: 'Database Error'});
                }
        
                res.send({salle:salle});
            });
        
            return false;
        }

};

       


/*create: function(req, res, next) {

    var params = req.params.all();

    Salle.create(params, function(err, salle) {

        if (err) return next(err);

        res.status(201);

        res.json(salle);

    });
},
 */
/* create :function(req, res)  {
    res.send(salle);
        // Create a salle
    const numsalle = req.body.numsalle;
    Salle.create({
        numsalle:numsalle, 

}).exec(function(err){
        if(err){
            res.status(500).json({error: err});
        }

        res.send(salle);
    });
    // Save a salle in the MongoDB
    salle.save()
    .then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json({
            msg: err.message
        });
    }); },*/


    
/*  add:function(req,res){
           return res.status(200).json(salle);
        },
   create:function(req, res){
            //let id=req.body.id;
            let numsalle = req.body.numsalle;
        Salle.create({
            numsalle:numsalle, 
          
        }).exec(function(err){
                if(err){
                    res.status(500).json({error: err});
                }
        
           return res.send(salle);
            });
        }, */  
        /*
    add:function(req,res){
            res.send('add');
        },
   create:function(req, res){
            //let id=req.body.id;
            let numsalle = req.body.numsalle;
           
            Salle.create({
                numsalle:numsalle, 
        
        }).exec(function(err){
                if(err){
                    res.status(500).json({error: err});
                }
        
                res.send(salle);
            });
        },  */

/*  // POST a salle
create :function(req, res)  {
    res.send(salle);
        // Create a salle
    //const salle = new Salle(req.body);

    // Save a salle in the MongoDB
    salle.save()
    .then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json({
            msg: err.message
        });
    });
},


// FETCH all salle
findAll:function(req, res)  {
    Salle.find()
    .then(salles => {
        res.json(salles);
    }).catch(err => {
        res.status(500).send({
            msg: err.message
        });
    });
},


// FIND a salle
findOne :function (req, res) {
    Salle.findById(req.params.id)
    .then(salle => {
        if(!salle) {
            return res.status(404).json({
                msg: "salle not found with id " + req.params.id
            });            
        }
        res.json(salle);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({
                msg: "salle not found with id " + req.params.id
            });                
        }
        return res.status(500).json({
            msg: "Error retrieving salle with id " + req.params.id
        });
    });
},

// UPDATE a salle
update :function (req, res) {
    // Find salle and update it
    Salle.findByIdAndUpdate(req.body._id, req.body, {new: true})
    .then(salle => {
        if(!salle) {
            return res.status(404).json({
                msg: "salle not found with id " + req.params.id
            });
        }
        res.json(salle);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({
                msg: "salle not found with id " + req.params.id
            });                
        }
        return res.status(500).json({
            msg: "Error updating salle with id " + req.params.id
        });
    });
}, */

// DELETE a salle
/* delete = (req, res) => {
    Salle.findByIdAndRemove(req.params.numsalle)
    .then(salle => {
        if(!salle) {
            return res.status(404).json({
                msg: "salle not found with id " + req.params.numsalle
            });
        }
        res.json({msg: "salle deleted successfully!"});
    })./* catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).json({
                msg: "salle not found with id " + req.params.numsalle
            });                
        } */
       /*   return res.status(500).json({
            msg: "Could not delete numsalle with id " + req.params.numsalle
        });
    });  */