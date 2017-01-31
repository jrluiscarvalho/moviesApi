var Model = require('../models/movie');

var api = {};

api.getMovies = function(req, res){
    res.send(Model);
}

api.getMovie = function(req, res){
    var id = req.params.id;
    
    res.send(Model.filter(function(model){
        if(model.id == id)
            return true;
    }));
};

module.exports = api;