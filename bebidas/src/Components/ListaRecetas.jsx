import React from 'react';
import {RecetasContext} from '../Context/RecetasContext';
import { useContext } from 'react';
import Receta from './Receta';

const ListaRecetas = () => {

    const {recetas} = useContext(RecetasContext);


    console.log(recetas);
    return ( 
        <div className="row mt-5">
            {recetas.map(receta => (
                <Receta
                    key={receta.idDrink}
                    receta={receta}
                />
            ))}
        </div>
     );
}
 
export default ListaRecetas;