import 'dotenv/config'
import express from 'express';
import connectDB from './src/config/db.js';
import publicRoutes from './src/routes/public.js'

connectDB()
const app = express()
app.use(express.json())
const port = 3000

app.use('/usuarios', publicRoutes)



app.listen(port,() => {
    console.log(`Servidor Rodando na porta ${port}`)
})