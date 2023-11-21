import RecordService from "../../common/RecordService";

class UniProgramsRecord extends RecordService{
    constructor(model) {
        super(model);
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

        // Modificar la estructura de cada documento poblado
        return uniPrograms.map(program => {
            return {
                ...program.toJSON(),
                faculty: program[populate] ? program[populate].name : null
            };
        });
    }

    async findByParamsAndPopulate(params,type){
        const uniPrograms = await this.model
            .find(params)
            .populate({
                path: "faculty",
                select: 'name -_id',
                options: { lean: true }
            })
            .exec();
        return uniPrograms;
    }
    async create(data) {
        const faculty = await super.create(data);
        const populatedFaculty = await this.model
            .findById(faculty._id)
            .populate({
                path: 'faculty',
                select: 'name -_id', // Selecciona solo el campo 'name' y excluye '_id'
                options: { lean: true } // Opción para devolver un objeto plano en lugar de una instancia de Mongoose
            })
            .exec();

        // Modificar directamente la estructura del objeto devuelto
        return {
            ...populatedFaculty.toJSON(),
            faculty: populatedFaculty.faculty ? populatedFaculty.faculty.name : null
        };
    }
}
export  default UniProgramsRecord;