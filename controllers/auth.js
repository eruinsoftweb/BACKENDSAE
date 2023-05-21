const { response } = require('express');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');
const Usuario = require('../models/usuario');
const { getMenuFrontEnd } = require('../helpers/menu-frontend');


const login = async (req, res = response) => {

    try {

        const { correo, password, modalidad } = req.body;

        const usuarioDB = await Usuario.findOne({ correo });

        if (!usuarioDB) {
            return res.status(404).json({
                ok: false,
                msg: 'Email no encontrado'
            });
        }

        // Verificar el password
        const validPassword = bcrypt.compareSync(password, usuarioDB.password);
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Credenciales incorrectas'
            });
        }

        // verificiar si el usuario está activo o no

        if (!usuarioDB.estado) {
            return res.status(404).json({
                ok: false,
                msg: 'Usuario Inactivo, Hable con el administrador'
            });
        }

        // Generar el TOKEN - JWT
        const token = await generarJWT(usuarioDB.id);

        res.json({
            ok: true,
            msg: 'login',
            usuario: {
                id: usuarioDB._id,
                nombre: usuarioDB.nombre,
                correo: usuarioDB.correo,
                password: usuarioDB.password,
                img: usuarioDB.img,
                brand_color: usuarioDB.brand_color,
                rol: usuarioDB.rol,
                modalidad: modalidad
            },
            menu: getMenuFrontEnd(usuarioDB.rol, modalidad),
            token
        });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }

}

const register = async (req, res = response) => {

    const { correo, password, nombre } = req.body;

    try {

        const existeEmail = await Usuario.findOne({ correo });

        if (existeEmail) {
            return res.status(400).json({
                ok: false,
                msg: 'El correo ya existe'
            });
        }

        const data = {
            nombre,
            correo,
            password,
        }

        const usuario = new Usuario(data);

        // Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);

        // Guardar usuario
        const usuarioData = await usuario.save();

        //Generar JWT
        const token = await generarJWT(usuario.uid);

        res.json({
            ok: true,
            usuario: usuarioData,
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }

}

// update my profile
const updateProfile = async (req, res = response) => {
    
    const id = req.params.id;

    try {

        const { password, modalidad, correo, ...data } = req.body;
        const usuario = await Usuario.findById(id);

        if (!usuario) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un usuario con ese id'
            });
        }

        if (usuario.correo !== correo) {
            const existeEmail = await Usuario.findOne({ correo });
            if (existeEmail) {
                return res.status(400).json({
                    ok: false,
                    msg: 'Ya existe un usuario con ese correo'
                });
            }

            data.correo = correo;

        }

        function comparePassword(password, usuario) {
            return bcrypt.compareSync(password, usuario);
        }

        if (password !== undefined) {
            if (comparePassword(password, usuario.password) === false) {
                if (usuario.password !== password) {
                    const salt = bcrypt.genSaltSync();
                    data.password = bcrypt.hashSync(password, salt);
                } else {
                    data.password = password;
                }
            }
        } else {
            data.password = usuario.password;
        }

        const usuarioData = await Usuario.findByIdAndUpdate(id, data, { new: true });

        const token = await generarJWT(id);

        res.json({
            ok: true,
            msg: 'Perfil Actualizado',
            usuario: {
                id: usuarioData._id,
                nombre: usuarioData.nombre,
                correo: usuarioData.correo,
                password: usuarioData.password,
                img: usuarioData.img,
                brand_color: usuarioData.brand_color,
                rol: usuarioData.rol,
                modalidad: modalidad
            },
            menu: getMenuFrontEnd(usuarioData.rol, modalidad),
            token
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}


const renewToken = async (req, res = response) => {

    const id = req.id;

    // Generar el TOKEN - JWT
    const token = await generarJWT(id);

    // Obtener el usuario por id
    const usuario = await Usuario.findById(id);

    res.json({
        ok: true,
        token,
        usuario,
        menu: getMenuFrontEnd(usuario.role)
    });

}

module.exports = {
    login,
    register,
    updateProfile,
    renewToken
}