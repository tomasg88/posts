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
        willTransition() {
            // rollbackAttributes() removes the record from the store
            // if the model 'isNew'
            this.controller.get('model').rollbackAttributes();
        }
	}
});