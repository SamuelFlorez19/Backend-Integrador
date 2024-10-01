import express  from 'express'
const routerProductos = express.Router()
import controladores from '../controllers/productos.controllers.js'

routerProductos.get('/', controladores.getAll)

routerProductos.get('/:id', controladores.getOne)

routerProductos.post('/', controladores.create)

routerProductos.delete('/:id', controladores.remove)

routerProductos.put('/:id', controladores.update)

export default routerProductos