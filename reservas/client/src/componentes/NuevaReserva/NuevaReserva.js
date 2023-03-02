//usestate para tener 1 variable por cada uno de los campos que se vallan a crear 
//axios para hacer la peticion de ese nuevo servicio 
// y usehistory que nos redirige a una pagina distinta 

import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const NuevaReserva = () => {

    const [identificacion, setIdentificacion] = useState("");
    const [nombre, setNombre] = useState("");
    const [origen, setOrigen] = useState("");
    const [destino, setDestino] = useState("");
    const [fecha, setFecha] = useState("");
    const [hora, setHora] = useState("");
    const [viaje, setViaje] = useState("");
    const [correo, setCorreo] = useState ("");





    const [errors, setErrors] = useState({});


    const history = useHistory();

    const guardarReserva = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/reservas", {
            identificacion,
            nombre,
            correo,
            origen,
            destino,
            fecha,
            hora,
            viaje,
            

        }, { withCredentials: true })

            .then(res => history.push("/"))
            .catch(err => setErrors(err.response.data.errors))
    }



    return (
        <div className="container shadow my-5">
            <div className="row justify-content-end bg-light">
                <div className="col-md-5 d-flex flex-column align-items-center text-black justify-content-center form order-2">
                    <div>
                        <h4 className="display-4 fw-bolder text-center">Ingresa tu reserva!!</h4>

                    </div>
                </div>
                <div className="col-md-6 p-5">
                    <form onSubmit={guardarReserva}>

                        <div className="form-group">
                            <label htmlFor="id">Identificación:</label>
                            <input type="number" id="id" name="id" value={identificacion} onChange={e => setIdentificacion(e.target.value)} className="form-control" />

                        </div>

                        <div className="form-group">
                            <label htmlFor="nombre">Nombre:</label>
                            <input type="text" id="nombre" name="nombre" value={nombre} onChange={e => setNombre(e.target.value)} className="form-control" />
                            {errors.nombre ? <span className="text-danger">{errors.nombre.message}</span> : null}
                        </div>

                        <div className="form-group">
                            <label htmlFor="correo">Correo electronico</label>
                            <input type="text" id="correo" name="correo" value={correo} onChange={e => setCorreo(e.target.value)} className="form-control" />

                        </div> 

                        <div className="form-group">
                            <label htmlFor="origen"> Origen:</label>
                            <input type="text" id="origen" name="origen" value={origen} onChange={e => setOrigen(e.target.value)} className="form-control" />

                        </div>

                        <div className="form-group">
                            <label htmlFor="destino"> Destino:</label>
                            <input type="text" id="destino" name="destino" value={destino} onChange={e => setDestino(e.target.value)} className="form-control" />

                        </div>

                        <div className="form-group">
                            <label htmlFor="fecha">Fecha de viaje:</label>
                            <input type="date" id="fecha" name="fecha" value={fecha} onChange={e => setFecha(e.target.value)} className="form-control" />

                        </div>

                        <div className="form-group">
                            <label htmlFor="hora">Hora del viaje:</label>
                            <input type="time" id="hora" name="hora" value={hora} onChange={e => setHora(e.target.value)} className="form-control" />

                        </div>

                        <div className="form-group">
                            <label htmlFor="viaje">Duracion  del viaje:</label>
                            <input type="text" id="viaje" name="viaje" value={viaje} onChange={e => setViaje(e.target.value)} className="form-control" />

                        </div>  

                                          
                       

                        

                        <input type="submit" className="btn btn-outline-primary mx-auto" value="guardar" />

                    </form>
                </div>
            </div>
        </div>
    )

}


export default NuevaReserva;