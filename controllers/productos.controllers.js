
import modelos from '../models/productos.models.js'
import handleMongoId from '../utils/handle-mongo-id.js'

//! Get All
const getAll = async (req,res) => {

    try {
        const productos = await modelos.obtenerTodos()
        res.json(handleMongoId(productos))
    } catch (error) {
        console.log('[getAll]', error)
    }

}

//! Get One
const getOne = async (req,res) => {
    const id = req.params.id
    try {
        const producto = await modelos.obtenerUno(id)
        res.json(handleMongoId(producto))

    } catch (error) {
        console.log('[getOne]', error);
    }
    
}

//! Create
const create = async (req,res) => {
    const producto = req.body
    try {
        
        const productoCreado = await modelos.crearProducto(producto )
        res.status(201).json(handleMongoId(productoCreado))
    } catch (error) {
        console.log('[create]', error);
        
    }
}

//! Update
const update = async (req,res) => {
    const id = req.params.id
    const productoPorEditado = req.body
    try {
        const produtoActualizado = await modelos.updateProducto(id, productoPorEditado)
        res.json(handleMongoId(produtoActualizado))

    } catch (error) {
        console.log('[update]', error)
    }
}

//! Delete
const remove = async (req,res) => {
    const id = req.params.id
    console.log(id)  
    
    try {
        const productoBorrado = await modelos.deleteProducto(id)
        res.json(handleMongoId({producto: productoBorrado}))
    } catch (error) {
        console.log('[remove]', error);
    }
}

export default {
    getAll,
    getOne,
    create,
    update,
    remove
}