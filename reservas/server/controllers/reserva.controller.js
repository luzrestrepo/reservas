const Reserva = require("../models/reserva.model");


module.exports.get_all = (req, res) => {
    Reserva.find().sort({nombre: 1})
        .then(reserva => res.json(reserva))
        .catch( err =>{
            console.log(err);
            res.status(400).json(err);
        });
}


//crear module exprts para crear 

module.exports.create_reserva = (req, res) => {
    Reserva.create(req.body)
        .then(reserva => res.json(reserva))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
}

//Obtener un solo objeto de la colección basado en la condición,se usa para detallar
module.exports.get_reserva = (req, res) => {
    Reserva.findOne({ _id: req.params.id })
        .then(reserva => res.json(reserva))
        .catch(err => res.status(404).json({ message: "Error" + err }));
}


//Actualizar un objeto en especifico
module.exports.update_reserva = (req, res) => {
    Reserva.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(reserva => res.json(reserva))
        .catch(err => res.status(400).json(err));
}

//Borrar un objeto en específico
module.exports.delete_reserva = (req, res) => {
    Reserva.deleteOne({ _id: req.params.id })
        .then(result => res.json(result))
        .catch(err => res.status(400).json({ message: "Error" + err }));
}