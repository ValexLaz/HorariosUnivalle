import express from "express";
import userRoutes from "./modules/users/user.routes.js";
import semesterRoutes from "./modules/semesters/semesters.routes.js";
import classRouter from "./modules/class/class.router.mjs";
import facultyRoutes from "./modules/faculties/faculties.routes.js";
import UniProgramsRoutes from "./modules/university_programs/university_programs.routes.js";
import BuildingRoutes from "./modules/building/building.routes.js";
import ClassroomTypesRoutes from "./modules/classroom_types/classroom_types.routes.js";
import ClassroomsRoutes from "./modules/classrooms/classrooms.routes.js";
import ProfessorAvailabilitiesRoutes from "./modules/professor_availabilities/professor_availabilities.routes.js";
import ProfessorRoutes from "./modules/professors/professor.routes.js";
import ScheduleRoute from "./modules/schedule/schedule.route.js";
import TimeAvailsRoutes from "./modules/time_availabilities/time_avails.routes.js";
import ClassProfessorRoutes from "./modules/class_professor/class_professor.routes.js";
import classroom_availabilitiesRoutes from "./modules/classroom_availabilities/classroom_availabilities.routes.js";
import ClusterRoutes from "./modules/cluster/cluster.routes";

const router = express.Router();

router.use('/user',userRoutes);
router.use('/semester',semesterRoutes);
router.use('/class',classRouter);
router.use('/professor',ProfessorRoutes);
router.use('/professor/class',ClassProfessorRoutes)
router.use('/faculty',facultyRoutes);
router.use('/uniPrograms',UniProgramsRoutes);
router.use('/building',BuildingRoutes);
router.use('/classroom/avails',classroom_availabilitiesRoutes);
router.use('/classroom/types',ClassroomTypesRoutes);
router.use('/classroom',ClassroomsRoutes);


router.use('/professor/avails',ProfessorAvailabilitiesRoutes);

router.use('/schedule',ScheduleRoute);
router.use('/time/avails',TimeAvailsRoutes);
router.use('/cluster',ClusterRoutes)

export default router;