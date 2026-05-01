import express from 'express';
import 'dotenv/config'
import cors from 'cors'
import { connectDB } from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

await connectDB();

// Middleware
app.use(cors({
    origin: process.env.CLIENT_LINK,
    credentials: true
}));
app.use(express.json());

const __dirname = path.resolve();

// correct static path
app.use(express.static(path.join(__dirname, "../client/dist")));

// Routes
// app.get('/', (req ,res) => res.send("API is working"));
app.use('/api/admin', adminRouter);
app.use('/api/blog', blogRouter);

const PORT = process.env.APP_PORT || 5000;

// make ready for deployment
if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("/*any", (_,res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    })
}

app.listen(PORT, () => {
    console.log('server is running on port ' + PORT)
});
