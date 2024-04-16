import express from 'express'
const app = express()

// enrutamiento
app.get('/', (req, res) => {
    res.status(200).json({ method: 'GET' })
})

const products = [
    {
        id: 1,
        name: 'product 1',
    },
    {
        id: 2,
        name: 'product 2',
    },
    {
        id: 3,
        name: 'product 3',
    }
]

app.get('/products', (req, res) => {
    return res.json(products)
})

app.get('/products/:id', (req, res) => {

    // destructuring de objetos
    // const { id } = req.params
    const id = req.params.id

    const product = products.find(item => item.id === +id)

    if (!product) {
        return res.status(404).json({ msg: 'no se encontró el producto' })
    }

    return res.json(product)
})

app.get('/latam', (req, res) => {
    res.redirect('https://desafiolatam.com/react/')
})

app.post('/', (req, res) => {
    res.status(201).json({ method: 'POST' })
})

app.put('/', (req, res) => {
    res.json({ method: 'PUT' })
})

app.delete('/', (req, res) => {
    res.json({ method: 'DELETE' })
})

// middleware
app.use('*', (req, res) => {
    res.status(404).json({ error: 404 })
})

// levantar el servidor
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Example app listening http://localhost:${PORT}`)
})