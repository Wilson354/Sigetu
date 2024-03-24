import React, { useState, useEffect } from 'react';
import { Form, Select, Button, notification } from 'antd';
import { setDoc, doc, collection, onSnapshot, updateDoc, arrayUnion, getDoc } from 'firebase/firestore';
import { db } from 'firebase.config';

const { Option } = Select;

const AsignarG = () => {
  const [grados, setGrados] = useState([]);
  const [profesores, setProfesores] = useState([]);
  const [materias, setMaterias] = useState([]);
  const [grupos, setGrupos] = useState([]);
  const [gradoId, setGradoId] = useState(null);
  const [form] = Form.useForm(); 

  useEffect(() => {
    let unsubscribeGrados;

    const cargarGrados = async () => {
      const gradosCollection = collection(db, 'grados');
      unsubscribeGrados = onSnapshot(gradosCollection, snapshot => {
        const listaGrados = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setGrados(listaGrados);
      });
    };

    cargarGrados();

    return () => {
      if (unsubscribeGrados) {
        unsubscribeGrados();
      }
    };
  }, []);

  useEffect(() => {
    let unsubscribeProfesores;

    const cargarProfesores = async () => {
      const profesoresCollection = collection(db, 'profesores');
      unsubscribeProfesores = onSnapshot(profesoresCollection, snapshot => {
        const listaProfesores = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProfesores(listaProfesores);
      });
    };

    cargarProfesores();

    return () => {
      if (unsubscribeProfesores) {
        unsubscribeProfesores();
      }
    };
  }, []);

  useEffect(() => {
    let unsubscribeMaterias;

    const cargarMaterias = async () => {
      const materiasCollection = collection(db, 'materias');
      unsubscribeMaterias = onSnapshot(materiasCollection, snapshot => {
        const listaMaterias = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setMaterias(listaMaterias);
      });
    };

    cargarMaterias();

    return () => {
      if (unsubscribeMaterias) {
        unsubscribeMaterias();
      }
    };
  }, []);

  useEffect(() => {
    let unsubscribeGrupos;

    const cargarGrupos = async (gradoId) => {
      if (gradoId) {
        const gruposCollection = collection(db, `grados/${gradoId}/grupos`);
        unsubscribeGrupos = onSnapshot(gruposCollection, snapshot => {
          const listaGrupos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setGrupos(listaGrupos);
        });
      } else {
        setGrupos([]);
      }
    };

    cargarGrupos(gradoId);

    return () => {
      if (unsubscribeGrupos) {
        unsubscribeGrupos();
      }
    };
  }, [gradoId]);

  const onFinish = async (values) => {
    try {
      const { profesorId, materiaNombre, grupoId } = values;
  
      // Obtener los datos del profesor seleccionado
      const profesorSeleccionado = profesores.find(profesor => profesor.id === profesorId);
  
      if (!profesorSeleccionado) {
        throw new Error('El profesor seleccionado no se encontró en la lista de profesores.');
      }
  
      // Crear referencia al documento del profesor en la colección de profesores
      const profesorDocRef = doc(db, 'profesores', profesorId);
      const profesorDocSnap = await getDoc(profesorDocRef);
  
      if (!profesorDocSnap.exists()) {
        // Si el documento del profesor no existe, crearlo con los campos requeridos
        await setDoc(profesorDocRef, {
          nombre: profesorSeleccionado.nombre,
          apellidos: profesorSeleccionado.apellidos,
          grupos_asignados: [grupoId],
          materias_asignadas: [materiaNombre],
        });
      } else {
        // Si el documento del profesor ya existe, actualizar los campos grupos_asignados y materias_asignadas
        await updateDoc(profesorDocRef, {
          grupos_asignados: arrayUnion(grupoId),
          materias_asignadas: arrayUnion(materiaNombre),
        });
      }
  
      // Crear referencia al documento del grupo en la colección de grados
      const grupoDocRef = doc(db, `grados/${gradoId}/grupos/${grupoId}/profesores`, profesorId);
      const grupoDocSnap = await getDoc(grupoDocRef);
  
      if (!grupoDocSnap.exists()) {
        // Si el documento del grupo no existe, crearlo con los campos requeridos
        await setDoc(grupoDocRef, {
          materia_asignada: materiaNombre,
          nombre_profesor: profesorSeleccionado.nombre,
          apellidos_profesor: profesorSeleccionado.apellidos,
        });
      }
  

    // Notificación de éxito utilizando notification.success
    notification.success({
      message: 'Grupo asignado exitosamente',
      description: 'El grupo ha sido asignado correctamente.',
    });
  } catch (error) {
    // Tu código de manejo de error existente aquí...


    // Notificación de error utilizando notification.error
    notification.error({
      message: 'Error al asignar grupo',
      description: 'Hubo un error al asignar el grupo. Por favor, inténtalo de nuevo.',
    });
    }
  };

  // Función para limpiar el formulario
const handleReset = () => {
    form.resetFields();
  };

  return (
    <Form layout="vertical" onFinish={onFinish} form={form}>
      <Form.Item name="gradoId" label="Seleccionar Grado" rules={[{ required: true, message: 'Por favor selecciona un grado.' }]}>
        <Select onChange={(value) => setGradoId(value)}>
          {grados.map(grado => (
            <Option key={grado.id} value={grado.id}>{grado.nombre}</Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="grupoId" label="Seleccionar Grupo" rules={[{ required: true, message: 'Por favor selecciona un grupo.' }]}>
        <Select>
          {grupos.map(grupo => (
            <Option key={grupo.id} value={grupo.id}>{grupo.nombre}</Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="profesorId" label="Seleccionar Profesor" rules={[{ required: true, message: 'Por favor selecciona un profesor.' }]}>
        <Select>
          {profesores.map(profesor => (
            <Option key={profesor.id} value={profesor.id}>{`${profesor.nombre} ${profesor.apellidos}`}</Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="materiaNombre" label="Nombre de la Materia" rules={[{ required: true, message: 'Por favor ingresa el nombre de la materia.' }]}>
        <Select>
          {materias.map(materia => (
            <Option key={materia.id} value={materia.id}>{materia.nombre}</Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item>
      <Button type="primary" htmlType="submit">Asignar Grupo</Button>
      <Button onClick={handleReset}>Limpiar Formulario</Button>
    </Form.Item>
    </Form>
  );
};

export default AsignarG;
