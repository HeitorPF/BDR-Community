import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const saltRounds = 10

export async function cadastrar(req, res){
    const {name, email, password} = req.body
    const passwordHash = await bcrypt.hash(password, saltRounds)
    try {
        const user = await User.create({name, email, password: passwordHash})
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({error: 'Erro ao cadastrar usuário'})
    }
}