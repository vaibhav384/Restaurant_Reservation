import express from "express";
import {check_reservation, send_reservation} from "../controller/reservation.js";

const router = express.Router();

// Route to check for existing reservation
router.post("/check", check_reservation);

// Route to create a new reservation
router.post("/send", send_reservation);

export default router;
