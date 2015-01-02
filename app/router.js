import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('about', {path: '/about'});
    this.route('posts', {path: '/posts'});
    this.resource('post', {path:'/post/:post_id'});
});

export default Router;
