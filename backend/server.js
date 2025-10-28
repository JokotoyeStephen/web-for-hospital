// import express from "express";
// import nodemailer from "nodemailer";
// import cors from "cors";

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Configure email (use your Gmail + App Password)
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "youremail@gmail.com",
//     pass: "your-app-password"
//   },
// });

// app.post("/send-otp", async (req, res) => {
//   const { email } = req.body;
//   const otp = Math.floor(100000 + Math.random() * 900000).toString();

//   try {
//     await transporter.sendMail({
//       from: '"Hospital Registration" <youremail@gmail.com>',
//       to: email,
//       subject: "Your OTP Verification Code",
//       html: `<h3>Your OTP code is <b>${otp}</b></h3><p>It will expire in 10 minutes.</p>`,
//     });

//     console.log("OTP sent to", email, ":", otp);
//     res.json({ success: true, otp });
//   } catch (error) {
//     console.error(error);
//     res.json({ success: false });
//   }
// });

// app.listen(5000, () => console.log("? Server running on http://localhost:5000"));


import express from "express"
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./routes/authroutes.js";
import path from "path"

const __dirname = path.resolve();

dotenv.config()
const app = express();

app.use(cors());
app.use(express.json())

connectDB();
app.use(express.static(path.join(__dirname,"..", "frontend")))

app.use("/api/auth", router)

const port = process.env.PORT || 3001;

app.listen(port, () =>{
    console.log(`server is already running ${port}`);
    
});