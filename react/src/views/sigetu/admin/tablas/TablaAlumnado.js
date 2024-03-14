import React, { useState, useEffect } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from 'firebase.config';
import { Button } from '@mui/material';

const TablaAlumnado = () => {
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    const fetchAlumnos = async () => {
      const alumnosCollection = collection(db, 'alumnos');
      const alumnosSnapshot = await getDocs(alumnosCollection);
      const alumnosData = alumnosSnapshot.docs.map((doc) => ({
        id: doc.id,
        nombres: doc.data().nombres,
        apellidos: doc.data().apellidos,
        genero: doc.data().genero,
        telefono: doc.data().telefono,
      }));
      setAlumnos(alumnosData);
    };

    fetchAlumnos();
  }, []);

  const deleteAlumno = async (id) => {
    try {
      await deleteDoc(doc(db, 'alumnos', id));
      setAlumnos(alumnos.filter((alumno) => alumno.id !== id));
    } catch (error) {
      console.error('Error eliminando alumno: ', error);
    }
  };


  return (
    <>
      <h2>Tabla de Alumnos</h2>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={alumnos}
          columns={[
            { field: 'id', headerName: 'ID', width: 90 },
            { field: 'nombres', headerName: 'Nombres', width: 150 },
            { field: 'apellidos', headerName: 'Apellidos', width: 150 },
            { field: 'genero', headerName: 'Género', width: 130 },
            { field: 'telefono', headerName: 'Teléfono', width: 130 },
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

export default TablaAlumnado;
