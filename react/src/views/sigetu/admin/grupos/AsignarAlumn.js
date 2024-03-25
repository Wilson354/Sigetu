import React, { useState, useEffect } from 'react';
import { Form, Button, Select, message } from 'antd';
import { updateDoc, doc, collection, getDoc, setDoc, getDocs } from 'firebase/firestore';
import { db } from 'firebase.config';

const { Option } = Select;

const AddGroupForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [alumnos, setAlumnos] = useState([]);
  const [grupos, setGrupos] = useState([]);
  const [grupoId, setGrupoId] = useState(null);

  useEffect(() => {
    const fetchAlumnos = async () => {
      try {
        const alumnosSnapshot = await getDocs(collection(db, 'alumnos'));
        const alumnosData = alumnosSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setAlumnos(alumnosData);
      } catch (error) {
        console.error('Error al obtener los alumnos:', error);
        message.error('Hubo un error al cargar los alumnos. Por favor, inténtelo de nuevo más tarde.');
      }
    };

    const fetchGrupos = async () => {
      try {
        const gruposSnapshot = await getDocs(collection(db, 'grados', 'ING', 'grupos'));
        const gruposData = gruposSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setGrupos(gruposData);
      } catch (error) {
        console.error('Error al obtener los grupos:', error);
        message.error('Hubo un error al cargar los grupos. Por favor, inténtelo de nuevo más tarde.');
      }
    };

    fetchAlumnos();
    fetchGrupos();
  }, []);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const { alumnoId, grupoId } = values;
  
      // Verificar si el documento del alumno existe
      const alumnoDoc = await getDoc(doc(db, 'alumnos', alumnoId));
      if (!alumnoDoc.exists()) {
        // Si no existe, crear el documento del alumno con un campo de referencia al documento del alumno
        await setDoc(doc(db, 'alumnos', alumnoId), {
          alumno_ref: alumnoId,
          grupo: doc(db, `grados/ING/grupos/${grupoId}`), // Agregar referencia al grupo seleccionado
        });
      } else {
        // Si existe, actualizar el campo de grupo en el documento del alumno
        await updateDoc(doc(db, 'alumnos', alumnoId), {
          grupo: doc(db, `grados/ING/grupos/${grupoId}`), // Actualizar referencia al grupo seleccionado
        });
      }
  
      // Crear la subcolección "evaluaciones_grupo" para el alumno si no existe
      const evaluacionesGrupoRef = doc(db, `alumnos/${alumnoId}/evaluaciones_grupo/${grupoId}`);
  
      // Crear los campos de materia dentro del documento del grupo si no existen
      const materias = ["Materia1", "Materia2", "Materia3", "Materia4","Materia5","Materia6","Materia7"];
      const evaluaciones = {
        Parcial1: "SE",
        Parcial2: "SE",
        Parcial3: "SE",
        Final: "SE",
        Fecha: [],
        Descripcion: "",
        Nota: "",
        Materia_ref: ""
      };
  
      const updates = {};
      for (const materia of materias) {
        updates[materia] = evaluaciones;
      }
  
      await setDoc(evaluacionesGrupoRef, updates);
  
      // Agregar al alumno al grupo seleccionado en la subcolección "alumnos" dentro del grupo
      await setDoc(doc(db, `grados/ING/grupos/${grupoId}/alumnos`, alumnoId), {
        alumno_ref: doc(db, 'alumnos', alumnoId),
      });
  
      message.success('Alumno asignado al grupo exitosamente.');
      form.resetFields();
    } catch (error) {
      console.error('Error al asignar alumno al grupo:', error);
      message.error('Hubo un error al procesar la solicitud. Por favor, inténtelo de nuevo más tarde.');
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item name="alumnoId" label="Seleccionar Alumno" rules={[{ required: true, message: 'Por favor, seleccione un alumno.' }]}>
        <Select placeholder="Seleccione un alumno">
          {alumnos.map(alumno => (
            <Option key={alumno.id} value={alumno.id}>{alumno.nombre}</Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item name="grupoId" label="Seleccionar Grupo" rules={[{ required: true, message: 'Por favor, seleccione un grupo.' }]}>
        <Select placeholder="Seleccione un grupo" onChange={value =>
          setGrupoId(value)}>
          {grupos.map(grupo => (
            <Option key={grupo.id} value={grupo.id}>{grupo.nombre}</Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Asignar Alumno al Grupo
        </Button>
        <Button onClick={() => form.resetFields()} style={{ marginLeft: 8 }}>
          Limpiar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddGroupForm;
