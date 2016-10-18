import Ember from 'ember';

export default Ember.Route.extend({
    
    beforeModel(){
        //return this.get('store').findAll('news');
        //this.replaceWith('proyectos');  
    },
	model(){
		//return ["post1", "post2", "post3"];
        return this.get('store').findAll('post');
        //return this.store.find('post');
        //return this.get('store').findRecord('post', params.photo_id);
	}
    
});
