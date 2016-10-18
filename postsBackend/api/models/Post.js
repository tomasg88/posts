/**
 * Post.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    tableName: 'post',
    attributes: {
      titulo: {
          type: 'string',
          required: true,
          maxLength: 45
      },
      descripcion: {
          type: 'string',
          maxLength: 900
      },
      respuesta: {
          type: 'string',
          maxLength: 450
      },
      proyecto: {
          type: 'int'
      },
      fxAlta: {
          type: 'date',
          required: true,
          defaultsTo: new Date(0)
      },
      fxCompletado: {
          type: 'date',
          //maxLength: 45
      }
    }
};

