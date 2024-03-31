import React, { Component } from "react";
import { Table } from "antd";
import { getFirestore, doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import firebaseApp from "firebase.config";

class Navs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      materias: [],
      grupoSeleccionado: "7IDS1" // Ejemplo: Grupo por defecto
    };
  }

  componentDidMount() {
    this.obtenerDatosGrupo(this.state.grupoSeleccionado);
  }

  // Función para obtener los datos del grupo seleccionado
  obtenerDatosGrupo = (grupoId) => {
    const db = getFirestore(firebaseApp);
    const alumnoRef = doc(db, "alumnos", "alumnoId");
    const evaluacionesRef = collection(alumnoRef, "evaluaciones_grupo");
    const grupoQuery = query(evaluacionesRef, where("grupoId", "==", grupoId));

    getDocs(grupoQuery)
      .then((querySnapshot) => {
        const materias = [];
        querySnapshot.forEach((doc) => {
          // Iterar sobre las materias en el grupo
          Object.entries(doc.data()).forEach(([materiaKey, materiaData]) => {
            // Verificar si los datos contienen la propiedad 'profesor'
            if ("profesor" in materiaData) {
              materias.push({
                materia: materiaKey,
                profesor: materiaData.profesor,
                parcial1: materiaData.parcial1,
                parcial2: materiaData.parcial2,
                parcial3: materiaData.parcial3,
                final: materiaData.final
              });
            }
          });
        });
        this.setState({ materias });
      })
      .catch((error) => {
        console.log("Error obteniendo datos:", error);
      });
  }

  // Función para manejar el cambio de grupo seleccionado
  handleChangeGrupo = (grupoId) => {
    this.setState({ grupoSeleccionado: grupoId });
    this.obtenerDatosGrupo(grupoId);
  }

  render() {
    const columns = [
      {
        title: "Asignatura",
        dataIndex: "materia",
        key: "materia"
      },
      {
        title: "Profesor",
        dataIndex: "profesor",
        key: "profesor"
      },
      {
        title: "Parcial 1",
        dataIndex: "parcial1",
        key: "parcial1"
      },
      {
        title: "Parcial 2",
        dataIndex: "parcial2",
        key: "parcial2"
      },
      {
        title: "Parcial 3",
        dataIndex: "parcial3",
        key: "parcial3"
      },
      {
        title: "Ev. Final",
        dataIndex: "final",
        key: "final"
      }
    ];

    return (
      <div>
        {/* Aquí podrías agregar tu lógica para seleccionar el grupo */}
        <button onClick={() => this.handleChangeGrupo("7IDS1")}>Seleccionar Grupo 7IDS1</button>
        <button onClick={() => this.handleChangeGrupo("8IDS1")}>Seleccionar Grupo 8IDS1</button>
        
        {/* Mostrar la tabla */}
        <Table dataSource={this.state.materias} columns={columns} />
      </div>
    );
  }
}

export default Navs;
