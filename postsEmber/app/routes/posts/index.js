import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel(){
        //return this.get('store').findAll('news');
        //this.replaceWith('proyectos');  
    },
	model(){
		return ["post1", "post2", "post3"];
        
	}
});
