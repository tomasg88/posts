import Ember from 'ember';

let dbProyectos = [{
    id: 1,
    nombre: "Huertas"
},{
    id: 2,
    nombre: "Reciclaje"
},{
    id: 3,
    nombre: "Hogares"
},{
    id: 4,
    nombre: "Sistemas (a.k.a Informatica)"
}];

export default Ember.Route.extend({
	model(){
		return dbProyectos;
	}	
});
