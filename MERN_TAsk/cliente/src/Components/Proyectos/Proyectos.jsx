import React from 'react';
import Sidebar from '../Layout/Sidebar';
import Barra from '../Layout/Barra';
import FormTarea from '../Tareas/FormTarea';
import ListadoTareas from '../Tareas/ListadoTareas';

const Proyectos = () => {
    return ( 
        <div className="contenedor-app">
            <Sidebar/>
            <div className="seccion-principal">
                <Barra/>
                <main>
                    <FormTarea/>
                    <div className="contenedor-tareas">
                        <ListadoTareas/>
                    </div>
                </main>
            </div>
        </div>
     );
}
 
export default Proyectos;