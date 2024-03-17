import React, { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from 'firebase.config';
import { Container } from "reactstrap";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Modal as AntdModal } from 'antd'; // Renombrado para evitar conflictos de nombres
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';

const TablaAlumnado = () => {
  const [alumnos, setAlumnos] = useState([]);
  const [selectedAlumnos, setSelectedAlumnos] = useState([]);
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const mainContent = React.useRef(null);

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

  const handleSelectionChange = (newSelection) => {
    setSelectedAlumnos(newSelection);
  };

  const deleteSelectedAlumnos = async () => {
    try {
      const deletePromises = selectedAlumnos.map(async (alumnoId) => {
        await deleteDoc(doc(db, 'alumnos', alumnoId));
      });
      await Promise.all(deletePromises);
      setAlumnos(alumnos.filter((alumno) => !selectedAlumnos.includes(alumno.id)));
      setSelectedAlumnos([]);
    } catch (error) {
      console.error('Error eliminando alumnos: ', error);
    }
  };

  const showConfirmModal = () => {
    setConfirmModalVisible(true);
  };

  const handleEliminarClick = async () => {
    deleteSelectedAlumnos();
  };

  const handleCheckboxChange = (e, alumnoId) => {
    const checked = e.target.checked;
    if (checked) {
      setSelectedAlumnos([...selectedAlumnos, alumnoId]);
    } else {
      setSelectedAlumnos(selectedAlumnos.filter(id => id !== alumnoId));
    }
  };

  return (
    <>
      <div className="main-content" ref={mainContent}>
        <Container fluid className='bg-white'>
          <h2>Tabla de Alumnos</h2>
          <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
            <Button
              size="small"
              onClick={showConfirmModal}
              disabled={selectedAlumnos.length === 0}
              variant="contained"
              color="error" // Cambiado a color rojo
              style={{ fontWeight: 'bold' }} // Cambiado a negrita y más grande
            >
              Eliminar seleccionados
            </Button>
            <Link to="/crear-alumno">
              <Button
                size="small"
                variant="contained"
                color="primary"
              >
                Registrar Alumno
              </Button>
            </Link>
          </Stack>
          <DataGrid
            rows={alumnos}
            columns={[
              { 
                field: 'checkbox', 
                headerName: '', 
                width: 50, 
                renderCell: (params) => (
                  <Checkbox 
                    onChange={(e) => handleCheckboxChange(e, params.row.id)}
                    checked={selectedAlumnos.includes(params.row.id)}
                  />
                ) 
              },
              { field: 'id', headerName: 'ID', width: 150 },
              { field: 'nombres', headerName: 'Nombres', width: 150 },
              { field: 'apellidos', headerName: 'Apellidos', width: 150 },
              { field: 'genero', headerName: 'Género', width: 130 },
              { field: 'telefono', headerName: 'Teléfono', width: 130 },
              {
                field: 'editar',
                headerName: 'Editar',
                width: 100,
                renderCell: (params) => (
                  <Link to={`/editar-alumno/${params.row.id}`}>
                    <Button 
                      variant="contained" 
                      color="warning" // Cambiado a color amarillo
                      size="small" 
                      startIcon={<EditIcon />}
                      style={{ fontWeight: 'bold' }} // Cambiado a negrita y más grande
                    >
                      Editar
                    </Button>
                  </Link>
                ),
              },
            ]}
            autoHeight
            components={{
              Toolbar: GridToolbar,
            }}
            disableSelectionOnClick
            pagination={false}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
            <div style={{ fontWeight: 'bold', fontSize: '15px' }}>{`Alumnos seleccionados: ${selectedAlumnos.length}`}</div>
          </div>
        </Container>
      </div>
      <AntdModal // Modificado el nombre del componente para evitar conflictos
        title="Confirmar Eliminación"
        visible={confirmModalVisible}
        onCancel={() => setConfirmModalVisible(false)}
        onOk={handleEliminarClick}
        style={{ zIndex: 9999 }} // Ajusta el z-index
      >
        <p>¿Está seguro de que desea eliminar los alumnos seleccionados?</p>
      </AntdModal>
    </>
  );
};

export default TablaAlumnado;
