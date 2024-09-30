import express  from 'express'
const routerProductos = express.Router()

routerProductos.get('/', (req,res) => {
    res.send('OK -> GET ALL (READ)')
})

routerProductos.get('/:id', (req,res) => {
    const id = req.params.id
    console.log(id);
    
    res.send('OK -> GET ONE (READ)')
})

routerProductos.post('/', (req,res) => {
    const producto = req.body
    console.log(producto);
    
    res.status(201).send('OK -> POST CREATE')
})

routerProductos.delete('/:id', (req,res) => {
    const id = req.params.id
    console.log(id);
    res.send('OK -> DELETE')
})

routerProductos.put('/', (req,res) => {
    const id = req.params.id
    console.log(id);
    const productoEditado = req.body
    console.log(productoEditado);
    
    res.status(201).send('OK -> PUT UPDATE')
})

export default routerProductos