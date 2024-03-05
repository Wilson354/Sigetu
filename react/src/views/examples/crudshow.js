import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Corregido aquí
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'; // Importar doc desde 'firebase/firestore'
import { db } from 'firebase.config';

const Crudshow = () => {
    // configurar hooks (ganchos)
    const [alumnos, setAlumnos] = useState([]);

    // referenciar a bd
    const alumnosCollection = collection(db, "Alumnos");

    // mostrar docs
    const getAlumnos = async () => {
        const data = await getDocs(alumnosCollection);
        setAlumnos(
            data.docs.map((doc) => ({...doc.data(), id: doc.id}))
        );
    };

    // eliminar docs
    const deleteAlumno = async (id) => {
        const alumnoDoc = doc(db, "Alumnos", id);
        await deleteDoc(alumnoDoc);
        getAlumnos();
    };

    // useEffect
    useEffect(() => {
        getAlumnos();
    }, []);

    // devolver la vista al componente

    return (
        <>
            <div className='container mt--4'>
                <div className='row'>
                    <div className='col'>
                        <div className='d-grid gap-2'>
                            <Link to="alumno/create" className='btn btn-secondary mt-2 mb-2'>CREAR</Link>
                        </div>

                        <table className='table table-dark table-hover'>
                            <thead>
                                <tr>
                                    <th>Matricula</th>
                                    <th>Nombres</th>
                                    <th>Apellidos</th>
                                    <th>grado</th>
                                    <th>grupo</th>
                                    <th>adeudos</th>
                                    <th>vidas</th>
                                    <th>acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {alumnos.map((alumno) => (
                                    <tr key={alumno.id}>
                                        <td>{alumno.matricula}</td>
                                        <td>{alumno.nombres}</td>
                                        <td>{alumno.apellidos}</td>
                                        <td>{alumno.grado}</td>
                                        <td>{alumno.grupo}</td>
                                        <td>{alumno.adeudos}</td>
                                        <td>{alumno.vidas}</td>
                                        <td>
                                            {/* Utilizar Link para la navegación */}
                                            <Link to={`/edit/${alumno.id}`} className='btn btn-light'><i className="fa-solid fa-pencil"></i></Link>
                                            <button onClick={() => {deleteAlumno(alumno.id)}} className='btn btn-danger'><i className="fa-solid fa-trash"></i></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Crudshow;
