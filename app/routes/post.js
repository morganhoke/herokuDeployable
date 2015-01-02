import Ember from "ember";
export default Ember.Route.extend({
    model: function(params){
        return this.store.find('post', params.post_id).then(function(post){
            post.video_url = '//www.youtube.com/embed/' + post.get('video_id');
            return post;
        });
    }
});