import dotenv from 'dotenv';
dotenv.config();

export default{
    Database:{
        URI_MONGODB: process.env.URI_MONGODB
    },
    Secret:{

    }
}