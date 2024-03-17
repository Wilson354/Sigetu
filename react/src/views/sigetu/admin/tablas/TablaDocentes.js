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

const TablaDocentes = () => {
  const [docentes, setDocentes] = useState([]);
  const [selectedDocentes, setSelectedDocentes] = useState([]);
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const mainContent = React.useRef(null);

  useEffect(() => {
    const fetchDocentes = async () => {
      const docentesCollection = collection(db, 'docentes');
      const docentesSnapshot = await getDocs(docentesCollection);
      const docentesData = docentesSnapshot.docs.map((doc) => ({
        id: doc.id,
        nombres: doc.data().nombres,
        apellidos: doc.data().apellidos,
        genero: doc.data().genero,
        telefono: doc.data().telefono,
      }));
      setDocentes(docentesData);
    };

    fetchDocentes();
  }, []);

  const handleSelectionChange = (newSelection) => {
    setSelectedDocentes(newSelection);
  };

  const deleteSelectedDocentes = async () => {
    try {
      const deletePromises = selectedDocentes.map(async (docenteId) => {
        await deleteDoc(doc(db, 'docentes', docenteId));
      });
      await Promise.all(deletePromises);
      setDocentes(docentes.filter((docente) => !selectedDocentes.includes(docente.id)));
      setSelectedDocentes([]);
    } catch (error) {
      console.error('Error eliminando Docentes: ', error);
    }
  };

  const showConfirmModal = () => {
    setConfirmModalVisible(true);
  };

  const handleEliminarClick = async () => {
    deleteSelectedDocentes();
  };

  const handleCheckboxChange = (e, docenteId) => {
    const checked = e.target.checked;
    if (checked) {
      setSelectedDocentes([...selectedDocentes, docenteId]);
    } else {
      setSelectedDocentes(selectedDocentes.filter(id => id !== docenteId));
    }
  };

  return (
    <>
      <div className="main-content" ref={mainContent}>
        <Container fluid className='bg-white'>
          <h2>Tabla de Docentes</h2>
          <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
            <Button
              size="small"
              onClick={showConfirmModal}
              disabled={selectedDocentes.length === 0}
              variant="contained"
              color="error" // Cambiado a color rojo
              style={{ fontWeight: 'bold' }} // Cambiado a negrita y más grande
            >
              Eliminar seleccionados
            </Button>
            <Link to="/crear-docente">
              <Button
                size="small"
                variant="contained"
                color="primary"
              >
                Registrar Docente
              </Button>
            </Link>
          </Stack>
          <DataGrid
            rows={docentes}
            columns={[
              { 
                field: 'checkbox', 
                headerName: '', 
                width: 50, 
                renderCell: (params) => (
                  <Checkbox 
                    onChange={(e) => handleCheckboxChange(e, params.row.id)}
                    checked={selectedDocentes.includes(params.row.id)}
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
                  <Link to={`/editar-docente/${params.row.id}`}>
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
            <div style={{ fontWeight: 'bold', fontSize: '15px' }}>{`Docentes seleccionados: ${selectedDocentes.length}`}</div>
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
        <p>¿Está seguro de que desea eliminar los docentes seleccionados?</p>
      </AntdModal>
    </>
  );
};

export default TablaDocentes;
