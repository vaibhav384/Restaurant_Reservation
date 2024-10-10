import ErrorHandler from "../middlewares/error.js";
import { Reservation } from "../models/reservation.js";

// Check for existing reservation
export const check_reservation = async (req, res) => {
  const { date, time } = req.body;

  try {
      const existingReservation = await Reservation.findOne({ date, time });

      if (existingReservation) {
          return res.status(400).json({ message: "Table already reserved for this time." });
      }
      return res.status(200).json({ message: "Time is available." });
  } catch (error) {
      return res.status(500).json({ message: "Server error." });
  }
};

// Create new Reservation
export const send_reservation = async (req, res, next) => {
  const { firstName, lastName, email, date, time, phone } = req.body;
  if (!firstName || !lastName || !email || !date || !time || !phone) {
    return next(new ErrorHandler("Please Fill Full Reservation Form!", 400));
  }

  try {
    await Reservation.create({ firstName, lastName, email, date, time, phone });
    res.status(201).json({
      success: true,
      message: "Reservation Sent Successfully!",
    });
  } catch (error) {
    // Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return next(new ErrorHandler(validationErrors.join(', '), 400));
    }

    // Handle other errors
    return next(error);
  }
};