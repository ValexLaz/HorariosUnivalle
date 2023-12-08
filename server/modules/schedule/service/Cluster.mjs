import {isMainThread, workerData,parentPort} from 'worker_threads';
import Thread from "../../../common/Thread.js";
import ClusterRecord from "../../cluster/ClusterRecord.mjs";
import ClassRecord from "../../class/ClassRecord.mjs";
import Db from "../../../config/db.mjs";
import ClassProfessorRecord from "../../class_professor/ClassProfessorRecord.mjs";
import TimeAvailsRecord from "../../time_availabilities/TimeAvailsRecord.mjs";
import WorkingDayRecord from "../recordService/workigDayRecord.mjs";
import ClassRoomRecord from "../../classrooms/ClassRoomRecord.mjs";

class Cluster extends Thread {
    constructor(semester,uniProgram,number_groups) {
        if (!isMainThread) {
            super();
        } else {
            super(__filename);
        }
        this.numberGroups = number_groups;
        this.uniProgram = uniProgram
        this.semester = semester;
        this.cluster = new ClusterRecord();
        this.class = new ClassRecord();
        this.professor = new ClassProfessorRecord();
        this.timeAvailsProfessor = new TimeAvailsRecord();
        this.workingDay = new WorkingDayRecord();
        this.classRoom = new ClassRoomRecord()
        this.academicHoursProfessorTC = 24;
        this.academicHoursProfessorTN = 18;
    }

    run = async () => {
        try {
            const id = this.semester._id;
            const cluster = await this.cluster.model.findOne({semester: id});
            const classes = await this.class.model.find({semester: id})
            const building = this.uniProgram.faculty.building;
            const number_groups = this.numberGroups ? this.numberGroups: cluster.number_groups
            //Recorrer todos los grupos disponibles
            for (let i = 0; i < number_groups ; i++) {

                // recorrer las materias para asignar al grupo
                for (const classAc of classes) {
                    const _id = classAc._id
                    let hours_week = 0;
                    const professor = await this.professor.model.findOne({class: _id});
                    console.log("CLASS_PROFESSOR")
                    console.log(professor);
                    const professorID = professor.professor
                    const professorClassID = professor._id;
                    const classroom_type = classAc.classroom_type;
                    const classRooms = await this.classRoom.model.find({
                        classroom_type,
                        building:building._id
                    },{_id:1});
                    const timeAvailsProfessor = await this.timeAvailsProfessor.model.find({
                        professor:professorID
                    })

                    //Recorrer disponibilidad de docente
                    for (const avails of timeAvailsProfessor) {
                        //TODO: controlar que dependiendo del tipo de docente se controle que no ecxeda el tiempo de trabajo
                        // Hecho TODO: controlar que una vez alcanzado las horas totales a la semana se rompa el ciclo y continue con el siguiente docente

                        if(hours_week >= classAc.hours_week) break;

                        let day = avails.day
                        const [start_time,end_time] = this.getHoursFromRecord(avails)
                        const bestClassroom = await this.workingDay.
                        findBestClassroom(classRooms,start_time,end_time,day);
                        await this.workingDay.create({
                            day,
                            start_time,
                            end_time,
                            class_professor: professorClassID,
                            classroom: bestClassroom,
                            group:number_groups,
                            semester: id,
                            uniProgram:this.uniProgram._id

                        })

                        hours_week+=2;
                    }
                }
            }

            parentPort.postMessage({ status: true, result: 'completed' });

        }catch (e) {
            parentPort.postMessage({ status: false, error: e });
        }
    }
    calculateAmountPeriod(hoursWeek,amountNormalPeriod){
        if (hoursWeek / amountNormalPeriod) {
            return   (hoursWeek / amountNormalPeriod) + 1;
        } else {
            return  hoursWeek / amountNormalPeriod;
        }
    }
    getHoursFromRecord(availsMongo){
        const avails = availsMongo.toJSON();
        let franjasHorarias = {};
        for (const key in avails) {
            if (avails.hasOwnProperty(key) && this.esPatronHoras(key)) {
                franjasHorarias[key] = avails[key];
            }
        }
        return Object.keys(franjasHorarias)
    }
    esPatronHoras(key) {
        return /^(\d{1,2}:\d{2})-(\d{1,2}:\d{2})$/.test(key);    }
}
if (!isMainThread) {
    const data = JSON.parse(workerData);
    Db.connect();
    const className = data.className;
    const instance = new Cluster(data.properties.semester,data.properties.uniProgram);
    instance.run();

}
export default Cluster;