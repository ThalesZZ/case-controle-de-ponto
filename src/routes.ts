import { Router } from "express";
import { UserController } from "../prisma/controllers/UserController";

const router = Router();

const userController = new UserController();
router.get('/user/:authCod', userController.get);

// const shiftController = new ShiftController();
// router.post("/start-shift", shiftController.start);
// router.post("/stop-shift", shiftController.stop);

export default router;
