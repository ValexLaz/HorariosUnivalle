import SemesterRecord from "../../semesters/SemesterRecord";
import Cluster from "./Cluster.mjs";
import uniProgramsRecord from "../../university_programs/UniProgramsRecord";
class ScheduleManager {
    constructor(universityProgram,semester,number_groups) {
        this.semesterID = semester;
        this.number_groups= number_groups
        this.universityProgram = universityProgram;
        this.semester = new SemesterRecord();
        this.uniProgram = new uniProgramsRecord();
        this.clusterPromises = [];

    }
    async generate(){
        await this.reviewSemesters(this.universityProgram);
        try {
            const results = await Promise.all(this.clusterPromises);
            console.log(results)
            return { success: true, results };
        } catch (errors) {
            return { success: false, errors };
        }
    }
    async reviewSemesters(universityProgramId){
        try {
            const uniProgram = await  this.uniProgram.findOnePopulateBuilding(universityProgramId);
            if(this.semesterID){
                const semesters = await this.semester.model.find({university_program:universityProgramId });
                semesters.forEach(semester => {
                    const cluster = new Cluster(semester, uniProgram,this.number_groups);
                    const worker =  cluster.start();
                    this.clusterPromises.push(new Promise((resolve, reject) => {
                        worker.on('message', resolve);
                        worker.on('error', reject);
                    }));

                });
            }else{
                const semesters = await this.semester.model.findById(this.semesterID)
                const cluster = new Cluster(semesters, uniProgram,this.number_groups);
                const worker =  cluster.start();
                this.clusterPromises.push(new Promise((resolve,reject)=>{
                    worker.on('message', resolve);
                    worker.on('error', reject);
                }))
            }

        }catch (e) {
            console.error('Error al buscar semestres:', e);
        }
    }
}
export default ScheduleManager;