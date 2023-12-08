import RecordService from "../../common/RecordService.mjs";
import FacultiesModel from "./faculties.model.mjs";
class FacultiesRecord extends RecordService{
    constructor() {
        super(FacultiesModel);
    }

    async create(data) {
        const faculty = await super.create(data);
        const populatedFaculty = await this.model
            .findById(faculty._id)
            .populate({
                path: 'building',
                select: 'name -_id', // Selecciona solo el campo 'name' y excluye '_id'
                options: { lean: true } // Opción para devolver un objeto plano en lugar de una instancia de Mongoose
            })
            .exec();

        // Modificar directamente la estructura del objeto devuelto
        return {
            ...populatedFaculty.toJSON(),
            building: populatedFaculty.building ? populatedFaculty.building.name : null
        };
    }

}
export default FacultiesRecord;