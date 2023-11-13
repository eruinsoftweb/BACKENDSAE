const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const {
    getAsignatura,
    getAsignaturas,
    createAsignatura,
    updateAsignatura,
    deleteAsignatura,
} = require('../controllers/asignatura');

const { validarJWT, validarADMIN_ROLE } = require('../middlewares/validar-jwt');

const router = Router();

router.get('/', getAsignaturas);

router.get('/:id', getAsignatura);

router.post(
    '/',
    [
        validarJWT,
        validarADMIN_ROLE,
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('descripcion', 'La descripción es obligatoria').not().isEmpty(),
        validarCampos,
    ],
    createAsignatura
);

router.put(
    '/:id',
    [
        validarJWT,
        validarADMIN_ROLE,
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('descripcion', 'La descripción es obligatoria').not().isEmpty(),
        validarCampos,
    ],
    updateAsignatura
);
router.delete('/:id', [
    validarJWT,
    validarADMIN_ROLE,
    check('id', 'El id es obligatorio').not().isEmpty(),
    validarCampos
], deleteAsignatura);

module.exports = router;
