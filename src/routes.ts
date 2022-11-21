import { Router } from "express"
import { CreateLeadController } from "./controllers/CreateLeadController"
import { UserController } from "./controllers/UserController"
import { ProfileController } from "./controllers/ProfileController"
import { UserProfileController } from "./controllers/UserProfileController"
import { PersonController } from "./controllers/PersonController"
import { ProcessController } from "./controllers/ProcessController"
import { InscriptionController } from "./controllers/InscriptionController"
import { CourseController } from "./controllers/CourseController"
import { EntranceExamController } from "./controllers/EntranceExamController"
import { UfController } from "./controllers/UfController"
import { authToken } from './middleware/AuthMiddleware'

const router = Router()

const createLead = new CreateLeadController()
const user = new UserController()
const profile = new ProfileController()
const userProfile = new UserProfileController()
const person = new PersonController()
const process = new ProcessController()
const inscription = new InscriptionController()
const course = new CourseController()
const exam = new EntranceExamController()
const uf = new UfController()

router.post("/api/leads", createLead.saveLead)

router.post("/api/user", user.saveUser)
router.post("/api/login", user.authUser)

router.post("/api/person/", user.authUser)

router.post("/api/person", person.savePerson)
router.get("/api/person/get-consulters" ,person.getConsulters)

router.get("/api/process", process.getProcess)

router.post("/api/profile", profile.saveProfile)
// router.get("/api/profile", createUser.saveUser)

router.post("/api/:user_id/:profile_id", authToken, userProfile.saveUserProfile)
// router.get("/api/:user_id/:profile", createUser.saveUser)

router.post("/api/rota_admin_autenticada", authToken, user.autentica)

router.get("/api/courses/get-courses", authToken, course.getCourses)

router.get("/api/ufs/get-ufs", uf.getUfs)

router.post("/api/entranceExam", authToken, exam.saveEntranceExam)

router.get("/api/person/:cpf/inscriptions", authToken, inscription.getInscriptions)
router.post("/api/new-inscription", inscription.saveInscription)

export { router }