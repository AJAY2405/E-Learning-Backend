import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js"; // ✅ Correctly importing database connection
import userRoutes from "./routes/user_routes.js"; // ✅ Importing routes
import authRoute from "./routes/authRoute.js"
import courseRoute from "./routes/course.route.js"
// import profileRoutes from './routes/profileRoutes.js';
dotenv.config();

const app = express();

// ✅ Connect to MongoDB
connectDB();

// ✅ Middleware
app.use(express.json());   // ✅ Correctly parsing JSON request bodies

// app.use(cors());
app.use(cors({
    origin:['http://localhost:5173',
    'https://mda-learning-mnyb.vercel.app'],
    credentials:true
}))

// ✅ Define routes
app.get("/", (req, res) => {
    res.send("CORS enabled backend running 🚀123");
});
app.use("/api/v1/user", userRoutes); // ✅ Mounting user routes
app.use("/api/v1/auth", authRoute); // ✅ Mounting user routes
app.use("/api/v1/course", courseRoute); // ✅ Mounting course routes
// app.use('/api/v1/profiles', profileRoutes);

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
