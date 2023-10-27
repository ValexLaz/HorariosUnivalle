import { Schema, model } from "mongoose";

const time_availabilities_schema = new Schema({
    día: {
        type: String,
        required: true,
    },
    "7:10-8:00": {
        type: Boolean,
        required: true,
    },
    "8:00-8:50": {
        type: Boolean,
        required: true,
    },
    "9:00-9:50": {
        type: Boolean,
        required: true,
    },
    "9:50-10:40": {
        type: Boolean,
        required: true,
    },
    "10:50-11:40": {
        type: Boolean,
        required: true,
    },
    "11:40-12:30": {
        type: Boolean,
        required: true,
    },
    "13:30-14:20": {
        type: Boolean,
        required: true,
    },
    "14:20-15:10": {
        type: Boolean,
        required: true,
    },
    "15:10-16:00": {
        type: Boolean,
        required: true,
    },
    "16:00-17:10": {
        type: Boolean,
        required: true,
    },
    "17:10-18:00": {
        type: Boolean,
        required: true,
    },
    "18:00-19:00": {
        type: Boolean,
        required: true,
    }
});

export default model("time_availability", time_availabilities_schema);
