import mongoose from "mongoose"
import ProductosEsquema from "./esquemas/ProductosEsquema"


//! Modelo
const ProductosModelo = mongoose.model('productos', ProductosEsquema)

const obtenerTodos = async () => {
    try {
        const productos = await ProductosModelo.find()
        return productos
    } catch (error) {
        console.log('[obtenerTodos]', error)
    }
}

const obtenerUno = async (id) => {
    try {
        const producto = await ProductosModelo.findById(id)
        //console.log(producto)
        return producto
    } catch (error) {
        console.log('[obtenerUnProducto]', error)
    }
}

const crearProducto = async (producto) => {
    try {
        const productoCreado = await ProductosModelo.create(producto)
        //console.log(productoCreado)
        return productoCreado 
    } catch (error) {
        console.log('[crearProducto]', error)
    }
}

const updateProducto = async (id, productoPorEditado) => {
    try {

        const options = { new: true }
        const productoYaEditado = await ProductosModelo.findByIdAndUpdate(id, productoPorEditado, options)
        return productoYaEditado
        
    } catch (error) {
        throw error 
    }
}

const deleteProducto = async (id) => {
    try {

        
        const productoBorrado = await ProductosModelo.findByIdAndDelete(id)
        return productoBorrado

    } catch (error) {
        console.log('[deleteProducto]', error)
    }
}

export default {
    obtenerTodos,
    obtenerUno,
    crearProducto,
    updateProducto,
    deleteProducto,
}