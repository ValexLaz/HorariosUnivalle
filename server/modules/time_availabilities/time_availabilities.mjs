import { Schema, model } from "mongoose";

const time_availabilities_schema = new Schema({
    day: {
        type: String,
        required: true,
    },
    professor:{
      type:Schema.Types.ObjectId,
        ref:"professor",
    },
    "7:10-8:00": {
        type: Boolean,
    },
    "8:00-8:50": {
        type: Boolean,
    },
    "9:00-9:50": {
        type: Boolean,
    },
    "9:50-10:40": {
        type: Boolean,
    },
    "10:50-11:40": {
        type: Boolean,
    },
    "11:40-12:30": {
        type: Boolean,
    },
    "13:30-14:20": {
        type: Boolean,
    },
    "14:20-15:10": {
        type: Boolean,
    },
    "15:10-16:00": {
        type: Boolean,
    },
    "16:00-17:10": {
        type: Boolean,
    },
    "17:10-18:00": {
        type: Boolean,
    },
    "18:00-19:00": {
        type: Boolean,
    }
});

export default model("time_availability", time_availabilities_schema);
