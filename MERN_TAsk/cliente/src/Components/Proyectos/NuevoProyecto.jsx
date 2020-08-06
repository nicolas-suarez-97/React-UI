import React, {Fragment, useState, useContext} from 'react';
import proyectoContext from '../../Context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    const proyectosContext = useContext(proyectoContext);
    const { formulario,errorFormulario, mostrarFormulario, agregarProyecto, mostrarError} = proyectosContext;


    const [proyecto, setProyecto] = useState({
        nombre:''
    });

    const { nombre } = proyecto;

    const onChangeProyecto = e => {
        setProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        });
    }

    const onSubmitProyecto = e => {
        e.preventDefault();
        
        //Validar el proyecto
        if(nombre === ''){
            mostrarError();
            return;
        }
        //Agregar al state
        agregarProyecto(proyecto);
        //Reiniciar el form
        setProyecto({
            nombre:''
        });

    }
    const onClickFormulario = () => {
        mostrarFormulario();
    }
    return ( 
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={onClickFormulario}>
            Nuevo Proyecto</button>
           {
                formulario ?
                (
                    <form 
                        className="formulario-nuevo-proyecto"
                        onSubmit={onSubmitProyecto}
                    >
                        <input 
                            type="text"
                            className="input-text"
                            placeholder="Nombre Proyecto"
                            name="nombre"
                            onChange={onChangeProyecto}
                            value={nombre}
                        />
                        <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Agregar Proyecto"
                        />

                    </form>

                ):null
           }
           {errorFormulario ? <p className="mensaje error">El nombre del Proyecto es obligatorio</p>:null}
        </Fragment>
     );
}
 
export default NuevoProyecto;