const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.crearUsuario =async (req, res) => {

    // Errores
    const errors = validationResult(req);
    if( !errors.isEmpty()){
        return res.status(400).json({errores:errors.array()});
    }


    const { email, password } = req.body;

    try {
        let usuario = await Usuario.findOne({email});;

        if(usuario){
            return res.status(400).json({msg: 'El usuario ya existe'});
        }
        // crea el nuevo usuario
        usuario = new Usuario(req.body);
        // Hash password
        const salt = await bcryptjs.genSalt(10);
        usuario.password = await bcryptjs.hash(password, salt);

        // Guardar usuario
        await usuario.save();

        // Crear y firmar el JWT
        const payload = {
            usuario: {
                id: usuario.id
            }
        };

        // Firmar el JWT
        jwt.sign(payload, process.env.SECRETA,{
            expiresIn: 3600 // 1 hora
        }, (error, token) =>{
            if(error) throw error;

            // Mensaje de confirmación
            res.json({token});
        });

    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }
}

exports.obtenerUsuarios = async (req, res) => {
    Usuario.find({},function(err,usuarios){
        res.json(usuarios);
    });
    
}