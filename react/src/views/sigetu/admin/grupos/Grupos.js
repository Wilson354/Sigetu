import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from 'firebase.config';
import { Container } from 'reactstrap';
import { useLocation } from "react-router-dom";

const Grupos = () => {
    const mainContent = React.useRef(null);
    const location = useLocation();
    const [selectedGrupo, setSelectedGrupo] = useState('');
    const [alumnos, setAlumnos] = useState([]);

    useEffect(() => {
        fetchAlumnos(selectedGrupo);
    }, [selectedGrupo]);

    const fetchAlumnos = async (grupo) => {
        try {
            if (grupo) {
                const alumnosQuery = query(collection(db, `grados/ING/grupos/${grupo}/alumnos`));
                const alumnosSnapshot = await getDocs(alumnosQuery);
                const alumnosData = alumnosSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setAlumnos(alumnosData);
            } else {
                setAlumnos([]); // Limpiar la tabla si no se ha seleccionado ningún grupo
            }
        } catch (error) {
            console.error('Error obteniendo alumnos:', error);
        }
    };

    const handleGrupoChange = (event) => {
        setSelectedGrupo(event.target.value);
    };

    const columns = [
        { field: 'id', headerName: 'Matricula', width: 150 },
        { field: 'apellidos', headerName: 'Apellidos', width: 150 },
        { field: 'nombres', headerName: 'Nombres', width: 150 },
        // Agrega más columnas según tus necesidades
    ];

    React.useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        mainContent.current.scrollTop = 0;
    }, [location]);

    return (
        <div className="main-content" ref={mainContent}>
            <Container fluid className='bg-white'>
                <div className="tabla-container">
                    <h2>Tabla de alumnos</h2>
                    <div>
                        <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
                            <select value={selectedGrupo} onChange={handleGrupoChange}>
                                <option value="">Seleccionar Grupo</option>
                                <option value="9IDS1">9IDS1</option>
                                <option value="10IDS1">10IDS1</option>
                            </select>
                        </Stack>
                        <DataGrid
                            rows={alumnos}
                            columns={columns}
                            autoHeight
                            checkboxSelection
                            disableRowSelectionOnClick
                            components={{
                                Toolbar: GridToolbar,
                            }}
                            toolbar
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Grupos;
