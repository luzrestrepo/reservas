//utilizamos las funciones que creamos en controllers entonces hay que importar los archivos de controllers 

const ReservaController = require("../controllers/reserva.controller");

module.exports = app => {
    app.get("/api/reservas", ReservaController.get_all);//esta es para traer todos los piratas 
    app.post("/api/reservas", ReservaController.create_reserva); //esta es para crear nuevo pirata 
    app.get("/api/reservas/:id", ReservaController.get_reserva);
    app.put("/api/reservas/:id", ReservaController.update_reserva);
    app.delete("/api/reservas/:id", ReservaController.delete_reserva);
}



//GET traer información
//POST enviar información
//PUT enviar información para editar
//DELETE borrar información



