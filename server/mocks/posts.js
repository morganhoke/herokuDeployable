module.exports = function(app) {
  var express = require('express');
  var postsRouter = express.Router();
  var db = require('../dbAdapter/index.js');

  postsRouter.get('/', function(req, res) {
    console.log(db);
    db.getAllPosts(function(result){
        res.send({
          'posts': result 
        });
    });
  });

  postsRouter.post('/', function(req, res) {
     res.status(501).end();
  });

  postsRouter.get('/:id', function(req, res) {
    res.send({'posts':
              fileReader.getPostById(req.params.id)
             });
  });

  postsRouter.put('/:id', function(req, res) {
     res.status(501).end();
  });

  postsRouter.delete('/:id', function(req, res) {
    res.status(501).end();
  });

  app.use('/api/posts', postsRouter);
};
