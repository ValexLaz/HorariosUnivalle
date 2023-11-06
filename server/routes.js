import express from "express";
import userRoutes from "./modules/users/user.routes.js";
import semesterRoutes from "./modules/semesters/semesters.routes.js";
import classRouter from "./modules/class/class.router";
import facultyRoutes from "./modules/faculties/faculties.routes";
import UniProgramsRoutes from "./modules/university_programs/university_programs.routes";
import BuildingRoutes from "./modules/building/building.routes";
import ClassroomTypesRoutes from "./modules/classroom_types/classroom_types.routes";
import ClassroomsRoutes from "./modules/classrooms/classrooms.routes";
import ProfessorAvailabilitiesRoutes from "./modules/professor_availabilities/professor_availabilities.routes";
import ProfessorRoutes from "./modules/professors/professor.routes";
import ScheduleRoute from "./modules/schedule/schedule.route";
import TimeAvailsRoutes from "./modules/time_availabilities/time_avails.routes";
import ClassProfessorRoutes from "./modules/class_professor/class_professor.routes";
const router = express.Router();

router.use('/user',userRoutes);
router.use('/semester',semesterRoutes);
router.use('/class',classRouter);
router.use('/class/professor',ClassProfessorRoutes)
router.use('/faculty',facultyRoutes);
router.use('/uniPrograms',UniProgramsRoutes);
router.use('/building',BuildingRoutes);
router.use('/classroom/types',ClassroomTypesRoutes);
router.use('/classroom',ClassroomsRoutes);
router.use('/professor/avails',ProfessorAvailabilitiesRoutes);
router.use('/professor',ProfessorRoutes);
router.use('/schedule',ScheduleRoute);
router.use('/time/avails',TimeAvailsRoutes);


export default router;