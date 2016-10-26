import DS from 'ember-data';

export default DS.Model.extend({
	titulo: DS.attr('string'),
	descripcion: DS.attr('string'),
	proyecto: DS.attr('integer'),
	respuesta: DS.attr('string'),
	fxAlta: DS.attr('date', {
   		defaultValue() { return new Date(); }
  	}),
	fxCompletado: DS.attr('date')
});
