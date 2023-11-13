const { response } = require('express');
const Asignatura = require('../models/asignatura');

const getAsignaturas = async (req, res = response) => {
    try {
        const sort = { updatedAt: -1 };
        const asignaturas = await Asignatura.find().populate('modalidad', 'nombre descripcion estado createdAt updatedAt').sort(sort);
        res.json(asignaturas);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}
const getAsignatura = async (req, res = response) => {
    try {
        const sort = { updatedAt: -1 };
        const asignatura = await Asignatura.findById(req.params.id).populate('modalidad', 'nombre descripcion estado createdAt updatedAt').sort(sort);
        res.json(asignatura);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

const createAsignatura = async (req, res = response) => {
    try {
        const nombre = req.body.nombre.toUpperCase();
        const descripcion = req.body.descripcion.toUpperCase();
        const nivel = req.body.nivel;
        const modalidad = req.body.modalidad;

        const asignaturaDB = await Asignatura.findOne({ nombre });

        if (asignaturaDB) {
            return res.status(400).json({
                ok: false,
                msg: 'La asignatura ya existe'
            });
        }

        const data = {
            nombre,
            descripcion,
            nivel,
            modalidad,
        }

        const asignatura = new Asignatura(data);

        await asignatura.save();

        const asignaturas = await asignatura.populate('modalidad', 'nombre descripcion estado createdAt updatedAt');

        res.status(201).json(asignaturas);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

const updateAsignatura = async (req, res = response) => {
    try {
        const { nombre, descripcion, nivel, modalidad } = req.body;
        const nuevaAsignatura = {
            ...req.body,
            nombre: nombre.toUpperCase(),
            descripcion: descripcion.toUpperCase(),
            modalidad: modalidad,
            nivel: nivel,
        }

        const sort = { updatedAt: -1 };

        const asignaturaActualizada = await Asignatura.findByIdAndUpdate(req.params.id, nuevaAsignatura, { new: true }).populate('modalidad', 'nombre descripcion estado createdAt updatedAt').sort(sort);

        res.json(asignaturaActualizada);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

const deleteAsignatura = async (req, res = response) => {
    try {
        const asignaturaDB = await Asignatura.findById(req.params.id);

        if (!asignaturaDB) {
            return res.status(400).json({
                ok: false,
                msg: 'La asignatura seleccionada no existe'
            });
        }

        const { id } = req.params;
        const asignatura = await Asignatura.findByIdAndDelete(id);
        res.json(asignatura);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

module.exports = {
    getAsignaturas,
    getAsignatura,
    createAsignatura,
    updateAsignatura,
    deleteAsignatura
};
