import Ember from "ember";
var barsClass = "glyphicon glyphicon-align-justify offCanvasMoveButtonHidden";
var arrowClass = "glyphicon glyphicon-chevron-left offCanvasMoveButtonVisible";

export default Ember.Component.extend({
    actions:{
        toggleMenuVisible: function(){
            var componentContex = this;
            $('.offCanvasNav').on('transitionend webkitTransitionEnd oTransitionEnd', function(){
                componentContex.set('visible', !componentContex.get('visible'));
                $('.offCanvasNav').off('transitionend webkitTransitionEnd oTransitionEnd');
            });
            if(!this.get('visible')){
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
    }.property('visible'),
    setupEvents: function(){
        var componentContext = this;
        window.addEventListener('click', function(event){//Close the nav when you touch off it
            if(event.clientX > 204){
                if(componentContext.get('visible')){
                    if(window.matchMedia('(max-width: 992px)')){
                        componentContext._actions['toggleMenuVisible'].apply(componentContext);
                    }
                }
            }
        }, true);
        window.addEventListener('hashchange', function(){//Close the nav on navigate
            if(componentContext.get('visible')){
                if(window.matchMedia('(max-width: 992px)')){
                        componentContext._actions['toggleMenuVisible'].apply(componentContext);
                    }
            }
        }, true);
    }.on('init')
});