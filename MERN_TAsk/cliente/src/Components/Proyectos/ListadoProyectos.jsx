import React, {useContext, useEffect} from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../Context/proyectos/proyectoContext';

const ListadoProyectos = () => {
    
    //Extraer proyectos de state inicial
    const proyectosContext = useContext(proyectoContext);
    const {proyectos, obtenerProyectos} = proyectosContext;
    
    // Obtener proyectos cuando carga el componente
    useEffect(()=>{
        obtenerProyectos();
    },[]);

    //Revisar si proyectos tienen contenido
    if(proyectos.length === 0) return null;


    return ( 
        <ul className="listado-proyectos">
            {proyectos.map(proyecto=>(
                <Proyecto
                    key={proyecto.id}
                    proyecto={proyecto}
                />
            ))}
        </ul>
     );
}
 
export default ListadoProyectos;