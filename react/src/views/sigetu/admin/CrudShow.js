import React, { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from 'firebase.config';
import { Button, message, } from 'antd';
import { Container } from 'reactstrap';


const TablaUsuarios = ({ usuarios, updateRol, deleteUsuario }) => {
    const handleChangeRol = (userId, newRol) => {
        updateRol(userId, newRol);
    };

    return (
        <tbody>
            {usuarios.map((usuario) => (
                <tr key={usuario.id}>
                    <td>{usuario.correo}</td>
                    <td>{usuario.nombres}</td>
                    <td>{usuario.apellidos}</td>
                    <td>
                        <label>
                            Rol:
                            <select
                                value={usuario.rol}
                                onChange={(e) => handleChangeRol(usuario.id, e.target.value)}>
                                <option value="admin">Administrador</option>
                                <option value="docente">Docente</option> {/* Corregir el valor aquí */}
                                <option value="alumno">Usuario</option>
                            </select>
                        </label>
                    </td>
                    <td>
                        <Button onClick={() => handleChangeRol(usuario.id, usuario.rol)}>
                            Actualizar
                        </Button>
                        <Button onClick={() => deleteUsuario(usuario.id)} danger>
                            Eliminar
                        </Button>
                    </td>
                </tr>
            ))}
        </tbody>
    );
};

const TablaAlumnos = ({ alumnos, deleteAlumno }) => {
    return (
        <tbody>
            {alumnos.map((alumno) => (
                <tr key={alumno.id}>
                    <td>{alumno.nombres}</td>
                    <td>{alumno.apellidos}</td>
                    <td>{alumno.genero}</td>
                    <td>{alumno.telefono}</td>
                    <td>
                        <Button onClick={() => deleteAlumno(alumno.id)} danger>
                            Eliminar
                        </Button>
                    </td>
                </tr>
            ))}
        </tbody>
    );
};

const Crudshow = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [alumnos, setAlumnos] = useState([]);
    const [mensaje, setMensaje] = useState(null);
    const [messageApi, contextHolder] = message.useMessage();

    const updateRol = async (id, newRol) => {
        try {
            message.loading({ content: 'Actualizando rol...', key: 'loading', duration: 2.5 })
                .then(async () => {
                    const usuarioDoc = doc(db, "usuarios", id);
                    await updateDoc(usuarioDoc, { rol: newRol });
                    await getUsuarios();
                    message.success({ content: 'Rol actualizado correctamente', key: 'success' });
                });
        } catch (error) {
            console.error("Error al actualizar el rol del usuario:", error);
            message.error({ content: 'Error al actualizar el rol del usuario', key: 'error' });
        }
    };


    const usuariosCollection = collection(db, "usuarios");

    const getUsuarios = async () => {
        const data = await getDocs(usuariosCollection);
        setUsuarios(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const deleteUsuario = async (id) => {
        const usuarioDoc = doc(db, "usuarios", id);
        await deleteDoc(usuarioDoc);
        await getUsuarios();
    };

    const alumnosCollection = collection(db, "alumnos");

    const getAlumnos = async () => {
        const data = await getDocs(alumnosCollection);
        setAlumnos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const deleteAlumno = async (id) => {
        const alumnoDoc = doc(db, "alumnos", id);
        await deleteDoc(alumnoDoc);
        await getAlumnos();
    };

    useEffect(() => {
        getUsuarios();
        getAlumnos();
    }, []);

    return (
        <>
            {mensaje && <div className="alert alert-success">{mensaje}</div>}
            <Container flex>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <table className='table table-dark table-hover'>
                                <thead>
                                    <tr>
                                        <th>Correo</th>
                                        <th>Nombres</th>
                                        <th>Apellidos</th>
                                        <th>Rol</th>
                                    </tr>
                                </thead>
                                <TablaUsuarios
                                    usuarios={usuarios}
                                    updateRol={updateRol}
                                    deleteUsuario={deleteUsuario}
                                />
                            </table>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <table className='table table-dark table-hover'>
                                <thead>
                                    <tr>
                                        <th>Nombres</th>
                                        <th>Apellidos</th>
                                        <th>Genero</th>
                                        <th>Telefono</th>
                                    </tr>
                                </thead>
                                <TablaAlumnos
                                    alumnos={alumnos}
                                    deleteUsuario={deleteAlumno}
                                />
                            </table>
                        </div>
                    </div>
                </div>
            </Container>
            {contextHolder}

        </>
    );
};

export default Crudshow;
