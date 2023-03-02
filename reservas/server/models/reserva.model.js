const mongoose = require('mongoose');

const EsquemaReserva = new mongoose.Schema({

   
   
    identificacion: {
        type : String,
        required: [true, "debe tener un id"],
        minlength: [5, "debe tener al menos 5 caracteres"]
    },
    
    
    nombre: {
        type: String,
        required: [true, "Nombre obligatorio."],
        minlength: [3, "Nombre debe tener al menos 3 caracteres"]
    },

    origen:{
        type: String,
        required:[true, "El origen es requerido" ]
    },

    destino:{
        type: String,
        required:[true, "El destino es requerido" ]
    },

    fecha: {
        type: String,
        required: [true, "debe existir una fecha"]
    },

    hora : {
        type: String,
        required: [true, "Ingrese la hora de su viaje"]
    },


    viaje : {
        type: String,
        required: [true, "Ingrese la hora de su viaje"]
    },

    correo : {
        type: String,
        required: [true, "Debes ingresar un correo electronico"]
    },
    
  

}, { timestamps: true, versionKey: false });
//timestamps crea campos de createdAt y updatedAt
//versionKey: false elimina el campo _v


const Reserva = mongoose.model("reservas", EsquemaReserva);

module.exports = Reserva;