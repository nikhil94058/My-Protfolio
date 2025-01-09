// Pages/api/contact.js
import { mailOptions, transporter } from "../../config/nodemailer";

const CONTACT_MESSAGE_FIELDS = {
  name: "Name",
  email: "Email",
  subject: "Subject",
  message: "Message",
};

// Helper function to generate email content
const generateEmailContent = (data) => {
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) => (str += `${CONTACT_MESSAGE_FIELDS[key]}:\n${val}\n\n`),
    ""
  );

  const htmlData = Object.entries(data).reduce((str, [key, val]) => {
    return (str += `
      <h3 class="form-heading" align="left">${CONTACT_MESSAGE_FIELDS[key]}</h3>
      <p class="form-answer" align="left">${val}</p>
    `);
  }, "");

  return {
    text: stringData,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style type="text/css">
          body { font-family: Arial, sans-serif; background-color: #f9f9f9; margin: 0; padding: 0; }
          .form-heading { color: #333; margin-bottom: 5px; }
          .form-answer { margin-bottom: 15px; }
          .container { padding: 20px; background-color: #fff; border: 1px solid #ddd; }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>New Contact Message</h2>
          ${htmlData}
        </div>
      </body>
      </html>
    `,
  };
};

// Main handler
const handler = async (req, res) => {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    // Validate request body
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

    try {
      const emailContent = generateEmailContent(req.body);

      // Prepare email details
      const emailDetails = {
        ...mailOptions,
        ...emailContent,
        subject,
      };

      // Send email
      await transporter.sendMail(emailDetails);

      return res.status(200).json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ message: "Failed to send email. Please try again later." });
    }
  }

  // Handle non-POST requests
  return res.status(405).json({ message: "Method Not Allowed" });
};

export default handler;
