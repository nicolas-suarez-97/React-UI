const Proyecto = require('../models/Proyecto');

exports.crearProyecto = async (req, res) => {
    try {
        const proyecto = new Proyecto(req.body);
     
        //  Guardar el creador via JWT
        proyecto.creador = req.usuario.id;  
        // Guardar el proyecto
        proyecto.save();
        res.json(proyecto);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}