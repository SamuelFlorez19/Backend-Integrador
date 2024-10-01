import mongoose from "mongoose"

const ProductosEsquema = mongoose.Schema({
    nombre: String,
    foto: String,
    descripcion: String,
    precio: String,
    stock: Number,
    categoria: String,
    envio: Boolean
},
{
    timestamps: true, 
    versionKey: false
}

)

export default ProductosEsquema