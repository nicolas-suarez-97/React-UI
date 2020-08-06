import React from 'react';
import NuevoProyecto from '../Proyectos/NuevoProyecto';
import ListadoProyectos from '../Proyectos/ListadoProyectos';

const Sidear = () => {
    return ( 
        <aside>
            <h1>MERN <span>Tasks</span></h1>
            <NuevoProyecto/>
            <div className="proyectos">
                <h2>Tus Proyectos</h2>
                <ListadoProyectos/>
            </div>
        </aside>
     );
}
 
export default Sidear;