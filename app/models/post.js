import DS from 'ember-data';

var PostModel = DS.Model.extend({
    title: DS.attr('string'),
    display_description: DS.attr('string'),
    video_id: DS.attr('string'),
    article_text: DS.attr('string')
});

PostModel.reopenClass({
    FIXTURES: [{id: 1, title: "test", display_description: "Never Gonna Give You Up", video_id: "dQw4w9WgXcQ", article_text: "The classic troll returns!"},
              {id: 2, title: "test2", display_description: "Bad", video_id: "dsUXAEzaC3Q", article_text: "Touching Michael Jackson!"}]
});

export default PostModel;