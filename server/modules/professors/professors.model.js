import { Schema, model } from "mongoose";

const professors_schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    cellphone_number: {
        type: String,
        required: true,
    },
    ci_number: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }
});

export default model("professor", professors_schema);
