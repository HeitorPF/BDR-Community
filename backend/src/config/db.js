import {connect} from "mongoose";

const connectDB = async () => {
    try{
        await connect(process.env.DATABASE_URL)
        console.log('Banco de dados conectado!')

    } catch(error){
        console.error('Erro ao conectar ao banco de dados:', error)
    }
}

export default connectDB