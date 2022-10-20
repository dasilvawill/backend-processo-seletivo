import { Router } from "express"
import { CreateLeadController } from "./controllers/CreateLeadController"
import { UserController } from "./controllers/UserController"
import { ProfileController } from "./controllers/ProfileController"
import { UserProfileController } from "./controllers/UserProfileController"
import { PersonController } from "./controllers/PersonController"
import { ProcessController } from "./controllers/ProcessController"
import { authToken } from './middleware/AuthMiddleware'

const router = Router()

const createLead = new CreateLeadController()
const user = new UserController()
const profile = new ProfileController()
const userProfile = new UserProfileController()
const person = new PersonController()
const process = new ProcessController()

router.post("/api/leads", createLead.saveLead)

router.post("/api/user", user.saveUser)
router.post("/api/login", user.authUser)
router.post("/api/rota_admin_autenticada", authToken, user.autentica)

router.post("/api/person/", user.authUser)

router.post("/api/person", person.savePerson)
router.get("/api/person/get-consulters", person.getConsulters)

router.post("/api/profile", profile.saveProfile)
// router.get("/api/profile", createUser.saveUser)

router.post("/api/:user_id/:profile_id", userProfile.saveUserProfile)
// router.get("/api/:user_id/:profile", createUser.saveUser)

router.get("/api/process/", process.getProcess)


export { router }