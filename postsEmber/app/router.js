import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
	this.resource('posts', 
		{ path : '/'}, 
		function(){
			this.route('index', {path : 'posts'});
			this.route('new', {path: 'posts/new'});
	});

	this.resource('proyectos',
		{ path : '/'},
		function(){
			this.route('index', {path: 'proyectos'});
	});
});

export default Router;
