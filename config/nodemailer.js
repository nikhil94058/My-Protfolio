// config/nodemailer.js
import nodemailer from "nodemailer";
require('dotenv').config();
// Fetch environment variables
const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

// Validate environment variables
if (!email || !pass) {
  throw new Error("Missing environment variables for email credentials. Ensure EMAIL and EMAIL_PASS are defined.");
}

// Create a nodemailer transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email', // Replace with your SMTP provider if not using Ethereal
  port: 587, // Default port for secure SMTP connections
  secure: false, // Use STARTTLS for security
  auth: {
    user: email, // Sender's email address
    pass: pass,  // Sender's email password
  },
});

// Exported mail options
export const mailOptions = {
  from: email, // Sender's name and email
  to: "nikhild.ug22.cs@nitp.ac.in", // Receiver's email
};

// Export transporter for use in other files
export { transporter };
