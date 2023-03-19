import { Router } from "express";
import { ShiftController } from "./controllers/ShiftController";
import { UserController } from "./controllers/UserController";

const router = Router();

const userController = new UserController();
router.post("/login", userController.login);

const shiftController = new ShiftController();
router.post("/start-shift", shiftController.start);
router.post("/stop-shift", shiftController.stop);

export default router;
