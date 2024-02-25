import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from 'firebase.config';
import { auth } from 'firebase.config';
import UserHeader from "components/Headers/UserHeader.js";

// Definir TablaUsuarios fuera de Crudshow
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
    <option value="user">Usuario</option>
</select>
                        </label>
                    </td>
                    <td>
                    <button
    className="btn btn-light"
    onClick={() => handleChangeRol(usuario.id, usuario.rol)}> {/* Usar usuario.rol en lugar de usuario.newRol */}
    Actualizar <i className="fa-solid fa-pencil"></i>
</button>
                        <button
                            onClick={() => {
                                deleteUsuario(usuario.id);
                            }}
                            className="btn btn-danger"
                        >
                            <i className="fa-solid fa-trash"></i>
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    );
};

const Crudshow = () => {
    // configurar hooks (ganchos)
    const [usuarios, setUsuarios] = useState([]);
    const [mensaje, setMensaje] = useState(null);

    // actualizar el rol con el boton
    const updateRol = async (id, newRol) => {
        try {
            const usuarioDoc = doc(db, "usuarios", id);
            await updateDoc(usuarioDoc, { rol: newRol });
            await getUsuarios(); // Actualiza la lista de usuarios después de actualizar el rol
            setMensaje("Rol actualizado correctamente.");
            setTimeout(() => {
                setMensaje(null); // Desaparece el mensaje después de un tiempo
            }, 4000); // 4000 ms =  segundos
        } catch (error) {
            console.error("Error al actualizar el rol del usuario:", error);
            setMensaje("Error al actualizar el rol del usuario.");
        }
    };

    // referenciar a bd
    const usuariosCollection = collection(db, "usuarios");

    // mostrar docs
    const getUsuarios = async () => {
        const data = await getDocs(usuariosCollection);
        setUsuarios(
            data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
    };

    // eliminar docs
    const deleteUsuario = async (id) => {
        const usuarioDoc = doc(db, "usuarios", id);
        await deleteDoc(usuarioDoc);
        await getUsuarios();
    };

    // useEffect
    useEffect(() => {
        getUsuarios();
    }, []);

    return (
        <>
            <UserHeader />
            {mensaje && <div className="alert alert-success mt--2">{mensaje}</div>}
            <div className='container mt--4'>
                <div className='row'>
                    <div className='col'>
                        <div className='d-grid gap-2'>
                            <Link to={`/usuarios/crear`} className='btn btn-secondary mt-2 mb-2'>CREAR</Link>
                        </div>
                        <table className='table table-dark table-hover'>
                            <thead>
                                <tr>
                                    <th>Correo</th>
                                    <th>Nombres</th>
                                    <th>Apellidos</th>
                                    <th>rol</th>
                                </tr>
                            </thead>
                            {/* Usar TablaUsuarios dentro de tbody */}
                            <TablaUsuarios
                                usuarios={usuarios}
                                updateRol={updateRol}
                                deleteUsuario={deleteUsuario}
                            />
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Crudshow;
