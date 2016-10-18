import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return "hola";
	},
	actions: {
		save: function() {
			var route = this;
			route.transitionTo('proyectos');
		}
	}
});