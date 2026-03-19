import express from 'express'
import { cadastrar } from '../controllers/authController.js'

const router = express.Router()

router.post('/cadastro', cadastrar)

export default router