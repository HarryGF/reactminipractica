import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class DoctoresEspecialidad extends Component {

    selectEspecialidad = React.createRef()
    urlDoctores = Global.urlApiDoctores
    
    state = {
        especialidades: [],
        doctores: []
    }

    loadEspecialidades = () => {
        let request = "/api/doctores"
        axios.get(this.urlDoctores + request).then((response) => {
            console.log("Leyendo especialidades")
            let aux = new Set([])
            for (let elem of response.data) {
                aux.add(elem.especialidad)
            }
            this.setState({
                especialidades: Array.from(aux)
            })
        })
    }

    componentDidMount = () => {
        this.loadEspecialidades()
    }

    buscarDoctores = (event) => {
        event.preventDefault()
        let especialidad = this.selectEspecialidad.current.value
        let request = '/api/Doctores/DoctoresEspecialidad/' + especialidad
        axios.get(this.urlDoctores + request).then((response) => {
            console.log("Buscando doctores")
            this.setState({
                doctores: response.data
            })
        })  
    }

    render() {
        return (
            <div>
                <h2>Doctores Especialidad</h2>
                <form onSubmit={this.buscarDoctores}>
                    <label>Elige especialidad: </label>
                    <select ref={this.selectEspecialidad}>
                        {
                            this.state.especialidades.map((especialidad, index) => {
                                return(<option key={index} value={especialidad}>
                                    {especialidad}
                                </option>)
                            })
                        }
                    </select>
                    <button>Buscar doctores</button>
                </form>
                <ul>
                    {
                        this.state.doctores && 
                        this.state.doctores.map((doctor, index) => {
                            return(<li key={index}>
                                Apellido: {doctor.apellido}     Especialidad: {doctor.especialidad}     
                                Salario: {doctor.salario}       Id Hospital: {doctor.idHospital}
                            </li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}
