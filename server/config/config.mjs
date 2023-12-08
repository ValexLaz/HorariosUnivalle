import dotenv from 'dotenv';
dotenv.config();

export default{
    PORT:process.env.PORT,
    Database:{
        URI_MONGODB: process.env.URI_MONGODB
    },
    Secret:{
        SECRET_KEY:process.env.SECRET_KEY
    }
}