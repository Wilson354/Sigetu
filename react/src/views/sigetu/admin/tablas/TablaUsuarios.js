import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from 'firebase.config';


const TablaUsuarios = () => {
    const [nbRows, setNbRows] = React.useState(3);
    const removeRow = () => setNbRows((x) => Math.max(0, x - 1));
    const addRow = () => setNbRows((x) => Math.min(100, x + 1));

    const { data } = useDemoData({
        dataSet: 'Commodity',
        rowLength: 100,
        maxColumns: 6,
    });

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const usuariosCollection = collection(db, 'usuarios');
                const usuariosSnapshot = await getDocs(usuariosCollection);
                const usuariosData = usuariosSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                setUsuarios(usuariosData);
            } catch (error) {
                console.error('Error obteniendo usuarios:', error);
            }
        };

        fetchUsuarios();
    }, []);

    const columns = [
        { field: 'correo', headerName: 'Correo', width: 150 },
        { field: 'nombres', headerName: 'Nombres', width: 150 },
        { field: 'apellidos', headerName: 'Apellidos', width: 150 },
        { field: 'rol', headerName: 'Rol', width: 130 },
    ];

    return (
        <>
            <h2>Tabla de Usuarios</h2>
            <div>
                <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
                    <Button size="small" onClick={addRow}>
                        Add a row
                    </Button>
                    <Button size="small" onClick={removeRow}>
                        Remove a row
                    </Button>
                </Stack>
                <DataGrid
                    rows={usuarios}
                    columns={[
                        { field: 'correo', headerName: 'Correo', width: 150 },
                        { field: 'nombres', headerName: 'Nombres', width: 150 },
                        { field: 'apellidos', headerName: 'Apellidos', width: 150 },
                        { field: 'rol', headerName: 'Rol', width: 130 },
                    ]}
                    autoHeight
                    checkboxSelection
                    disableRowSelectionOnClick
                    components={{
                        Toolbar: GridToolbar,
                    }}

                    toolbar
                />
            </div>
        </>
    );
};

export default TablaUsuarios;
