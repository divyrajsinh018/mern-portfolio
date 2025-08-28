import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/routes.js";

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: [
      "https://mern-portfolio-97mq.onrender.com", // Your frontend URL
    ],
    methods: ["GET", "POST"],
    credentials: true,
}));
app.use(helmet());

// Routes
app.use("/api/contact", contactRoutes);

// Database connection
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
