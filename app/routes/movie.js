module.exports = function(app){
    var api = app.controllers.movie;

    app.get('/v1/movies/:id', api.getMovie);

   /* app.route('v1/movies')
        .get(function(){console.log(req.params.id);api.getMovies})
        //.post(api.addMovie);

    app.route('v1/movies/:id')
        .get(function(req, res){})
        //.put(api.updateMovie)
        //.delete(api.deleteMovie);*/
};