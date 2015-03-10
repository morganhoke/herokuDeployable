var fs = require('fs');

var posts = [];

fs.readdir('./server/postContent/posts', function(err, files){
    if(err){
        console.log(err);
        return;
    }
    for(var i = 0; i < files.length; i++){
        fs.readFile('./server/postContent/posts/'+files[i], function(err, data){
            if(err){
                console.log(err);
            }
            posts.push(JSON.parse(data));
        });
    }
});

module.exports = {
    getAllPosts: function(){
        return posts;
    },
    getPostById: function(id){
        for(var i = 0; i < posts.length; i++){
            if(posts[i].id == id){
                return posts[i];
            }
        }
    }
}