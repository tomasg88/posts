import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
	
    // Como los /index son convencion, con la linea de abajo creamos la ruta para los posts 
    // Sumado a eso, el resetNamespace nos habilita las rutas detras de /posts
    this.route('posts', { resetNamespace: true },
      function(){
        //this.route('index', {path : '/'});
        this.route('new', {path: '/new'});
        
    });
    this.route('proyectos', { resetNamespace: true },
      function(){
        //this.route('index', {path : '/'});
        //this.route('new', {path: '/new'});
    });
	
});

export default Router;
