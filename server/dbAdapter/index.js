var mongoClient = require('mongodb').MongoClient;

var dbUrl = 'mongodb://codeConnect:connect@ds031601.mongolab.com:31601/heroku_app32966736';

var getPostsCollection = function(callback){
    mongoClient.connect(dbUrl, function(err, db){
        if(err){
            console.log(err);
            return;
        }
        console.log('connected');
        var posts = db.collection('Posts', function(err2, collection){
            if(err2){
                console.log(err2);
                return;
            }
            console.log('grabbed the collection');
            callback(collection);
            });
        });
};

var queryDb = function(query, filter, callback){
    getPostsCollection(function(collection){
        collection.find(query, filter).toArray(function(err3, results){
            if(err3){
                console.log(err3);
                return;
            }
            callback(results);
        });
    });
};

var deleteFromDB = function(id, callback){
    getPostsCollection(function(collection){
        collection.remove({"id": Number(id)}, null, function(foo, num){
            console.log(foo);
            console.log(num);
            callback && callback();
        });
    });
};

var getAllTitles = function(callback){
    queryDb({}, {"title":1, "id":1}, callback);
};

var getAllPosts = function(callback){
    queryDb({}, {}, callback);
};

var getPostById = function(id, callback){
    queryDb({"id": Number(id)}, {}, callback);
};

var updateCreatePostById = function(id, document, callback){
  console.log(id);
  console.log(JSON.stringify(document));    
  if(id == 0){
        getPostsCollection(function(collection){
            collection.find({}, {"id":1}).sort({"id": -1}).limit(1).toArray(function(error, result){
                console.log(result[0].id);
                document.id = result[0].id + 1;
                collection.update({"id": document.id}, document, {upsert : true}, function(err, result){
                    console.log(result);
                });
            });
        });
  }
};

module.exports = {
    getAllTitles : getAllTitles,
    getAllPosts : getAllPosts,
    getPostById : getPostById,
    deletePostById: deleteFromDB,
    updateCreatePostById: updateCreatePostById,
};