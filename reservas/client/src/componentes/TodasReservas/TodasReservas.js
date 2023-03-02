import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";


const TodasReservas = () => {

    const [reservas, setReservas] = useState([]);

    const history = useHistory()

    const [identificacion, setIdentificacion] = useState("id");

    const [fecha, setFecha] = useState("");




    useEffect(() => {
        axios.get("http://localhost:8000/api/reservas", { withCredentials: true })
            .then(res => setReservas(res.data))
            .catch(err => {
                if (err.response.status === 401) {
                    history.push('/');
                }
            });
    }, [history])

    const borrarReserva = id => {
        axios.delete("http://localhost:8000/api/reservas/" + id, { withCredentials: true })
            .then(res => {
                //Actualizar la lista de servicios por medio de filter
                let nuevaLista = reservas.filter(reserva => reserva._id !== id);
                setReservas(nuevaLista);
            })
    }



    return (
        <div className="container mt-3">
            <nav className="navbar navbar-expand-lg navbar-light shadow bg-light ">
                <div class="container-fluid">
                    <h1 className="navbar-brand fw-bolder fs-4 mx-auto">Transportes Ada Shcool!!</h1>
                    <Link to="/nuevo" className="btn btn-outline-primary ms-auto px-4 rounded-pill">Nueva reserva</Link>


                    <form class="d-flex mx-auto  " role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search " onChange={(e) => setIdentificacion(e.target.value)} value={identificacion} />
                        <button class="btn btn-outline-primary mx-auto px-4 " type="submit">Todas</button>
                    </form>

                </div>
            </nav>
            <div className="container mt-5">
                <div className='table table-striped'>
                    <div class="col">

                        <table className="table table-hover border ">
                            <thead>
                                <tr className="table table-success">
                                    <th>Identificación</th>
                                    <th>Nombre del cliente</th>
                                    <th>correo</th>
                                    <th>Origen</th>
                                    <th>Destino</th>
                                    <th>Fecha de viaje</th>
                                    <th>Hora de salida</th>
                                    <th>Duracion del viaje</th>
                                    <th>Acciones</th>



                                </tr>
                            </thead>
                            <tbody>
                                {
                                    reservas.map((reserva, index) => {
                                        if (reserva.identificacion == identificacion || identificacion == "id") {



                                            return (
                                                <tr key={index}>




                                                    <td>{reserva.identificacion}</td>
                                                    <td>{reserva.nombre}</td>
                                                    <td>{reserva.correo}</td>
                                                    <td>{reserva.origen}</td>
                                                    <td>{reserva.destino}</td>
                                                    <td>
                                                        <input type="date" value={reserva.fecha} onChange={(e) => setFecha(e.target.value)} />
                                                    </td>
                                                    <td>{reserva.hora}</td>

                                                    <td>{reserva.viaje}</td>
                                                    







                                                    <td>
                                                        <Link className="btn btn-outline-dark btn-sm mt-3" to={`/reservas/editar/${reserva._id}`}>Actualizar</Link>
                                                        <button className="btn btn-outline-dark btn-sm mt-3" onClick={() => borrarReserva(reserva._id)} >Eliminar</button>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    }
                                    )
                                }
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>


        </div>


    )

}

export default TodasReservas;