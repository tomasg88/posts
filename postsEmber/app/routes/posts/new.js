import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return this.store.createRecord('post');
	},
	actions: {
		save: function() {
			var route = this;
			this.currentModel.save().then(function(model) {
				console.log('LOG: '+ model.get('post').get('id'));
				route.replaceWith('posts');
			}, function() {
				console.log('Failed to save the model');
			});
		},
		remove: function(model) {
	      if(confirm('Are you sure?')) {
	        model.destroyRecord();
	      }
	    }
	}
});