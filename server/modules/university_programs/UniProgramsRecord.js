import RecordService from "../../common/RecordService.mjs";
import university_programs_model from "./university_programs.model.mjs";
class UniProgramsRecord extends RecordService{
    constructor() {
        super(university_programs_model);
    }
    async findOnePopulateBuilding(ID){
        return await this.model.findById(ID)
            .populate({
                path: 'faculty',
                populate: {
                    path: 'building',
                    model: 'building'
                }
            })
            .exec();
    }
    async findAllAndPopulate(populate) {
        const uniPrograms = await this.model
            .find({})
            .populate({
                path: "faculty",
                select: 'name -_id',
                options: { lean: true }
            })
            .exec();
        return uniPrograms.map(program => {
            return {
                ...program.toJSON(),
                faculty: program[populate] ? program[populate].name : null
            };
        });
    }
    async findByParamsAndPopulate(params,type){
        return await this.model
            .find(params)
            .populate({
                path: "faculty",
                select: 'name -_id',
                options: {lean: true}
            })
            .exec();
    }
    async create(data) {
        const faculty = await super.create(data);
        const populatedFaculty = await this.model
            .findById(faculty._id)
            .populate({
                path: 'faculty',
                select: 'name -_id',
                options: { lean: true }
            })
            .exec();
        return {
            ...populatedFaculty.toJSON(),
            faculty: populatedFaculty.faculty ? populatedFaculty.faculty.name : null
        };
    }
}
export  default UniProgramsRecord;