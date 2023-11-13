const { Schema, model } = require('mongoose');

const AsignaturaSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    descripcion: {
        type: String,
    },
    nivel: {
        type: String,
        required: [true, 'El nivel es obligatorio'],
        enum: ['INICIAL','PRIMARIA', 'SECUNDARIA', 'UNIVERSIDAD', 'OTRO']
        // Aquí puedes incluir los niveles educativos necesarios para tus asignaturas
    },
    modalidad: {
        type: String,
        required: [true, 'El modalidad es obligatorio']
    },
    estado: {
        type: Boolean,
        default: true,
    }
}, 

{ collection: 'asignatura', timestamps: true, versionKey: false });

module.exports = model('Asignatura', AsignaturaSchema);
