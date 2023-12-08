import mongoose, {Schema} from 'mongoose';

const clusterSchema = new mongoose.Schema({
    number_groups: {
        type: Number,
    },
    number_students: {
        type: Number,
    },
    semester: {
        type: Schema.Types.ObjectId,
        ref: "semester",
    },
});

export default mongoose.model('cluster', clusterSchema);

