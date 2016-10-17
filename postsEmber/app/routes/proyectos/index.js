import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return [
		"Huertas",
		"Reciclaje",
		"Hogares",
		"Sistemas (a.k.a Informatica)"];
	}	
});
