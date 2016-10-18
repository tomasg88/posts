import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
	
    this.resource('proyectos', 
		function(){
			this.route('index', {path: '/'});
	});
    
    this.resource('posts',  
		function(){
			this.route('index', {path : '/'});
			this.route('new', {path: '/new'});
	});

	
});

export default Router;
