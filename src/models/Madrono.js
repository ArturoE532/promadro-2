const {Schema, model} = require('mongoose');

const MadronoSchema = new Schema({
    especie:{
        type: String,
        required: true
    },
    estados:{
        type: Array,
        required: true
    },
    habito:{
        type: Array,
        required: true
    },
    corteza_de_la_parte_alta_del_tronco_y_ramas_principales:{
        type: Array,
        required: true
    },
    corteza_de_ramillas:{
        type: Array,
        required: true
    },
    peciolos:{
        type: Array,
        required: true
    },
    hojas_enves:{
        type: Array,
        required: true
    },
    flores:{
        type: Array,
        required: true
    },
    peciolos_y_ramillas:{
        type: Array,
        required: true
    },
    hojas_duración_y_textura:{
        type: Array,
        required: true
    },
    hojas_las_más_anchas:{
        type: Array,
        required: true
    },
    hojas_margen:{
        type: Array,
        required: true
    },
    inflorescencia:{
        type: Array,
        required: true
    },
    user: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = model('Madrono', MadronoSchema);