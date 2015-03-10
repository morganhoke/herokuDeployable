import DS from 'ember-data';

var PostModel = DS.Model.extend({
    title: DS.attr('string'),
    display_description: DS.attr('string'),
    video_id: DS.attr('string'),
    article_text: DS.attr('string'),
    tags: DS.attr(),
    timr: DS.attr('number')
});

export default PostModel;
