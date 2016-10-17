import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return ["post1", "post2", "post3"];
	}
});
