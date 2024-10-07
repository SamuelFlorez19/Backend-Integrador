import mongoose from "mongoose"

const ProductosEsquema = mongoose.Schema({
    nombre: String,
    foto: String,
    descripcion: String,
    precio: String,
    stock: Number,
    categoria: String,
    envio: {
        type: Boolean,
        validate: {
            validator: (v) => {
            return v === true || v === false;
            },
            message: 'El valor de envio debe ser true o false',
        },
        set: (v) => {
            return v === 'SI' ? true : false;
        },
        get: (v) => {
            return v ? 'SI' : 'NO';
        },
    },
},
{
    timestamps: true, 
    versionKey: false
}

)

export default ProductosEsquema