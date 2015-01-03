import Ember from "ember";
var barsClass = "glyphicon glyphicon-align-justify offCanvasMoveButtonHidden";
var arrowClass = "glyphicon glyphicon-chevron-left offCanvasMoveButtonVisible";

export default Ember.Component.extend({
    actions:{
        toggleMenuVisible: function(){
            this.set('visible', !this.get('visible'));
            if(this.get('visible')){
                $('.offCanvasNav').removeClass('slideout');
                $('.offCanvasNav').addClass('slidein');
            }
            else{
                 $('.offCanvasNav').removeClass('slidein');
                $('.offCanvasNav').addClass('slideout');
            }
        }
    },
    visible: false,
    iconClass : function(){
        if(!this.get('visible')){
            return barsClass;
        }
        else{
            return arrowClass;
        }
    }.property('visible')
});