import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
	this.resource('posts', 
		{ path : 'posts'}, 
		function(){
			this.route('new', {path: 'new'});
		});

	this.route('proyectos');
});

export default Router;
