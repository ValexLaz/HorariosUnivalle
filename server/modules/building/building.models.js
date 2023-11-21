import { Schema, model } from "mongoose";
//edificios Modulo
const buildings_schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    building_number: {
        type: String,
        required: true,
    }
});

export default model("building", buildings_schema);
