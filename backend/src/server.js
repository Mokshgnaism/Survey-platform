import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import cors from 'cors';
dotenv.config();
const app = express();
import dbConnect from "./lib/dbConnect.js";
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use(cookieParser());


const allowedOrigins = [
  "http://localhost:5173", 
  "https://survey-platform-n3s5-git-main-gorantla-mokshgnas-projects.vercel.app",
  "https://survey-frontend-wheat.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"]
}));



app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
dbConnect();
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
