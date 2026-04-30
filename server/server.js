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

// serve frontend build
// needed if using ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// correct static path
app.use(express.static(path.join(__dirname, "../client/dist")));

// Routes
// app.get('/', (req ,res) => res.send("API is working"));
app.use('/api/admin', adminRouter);
app.use('/api/blog', blogRouter);

const PORT = process.env.APP_PORT || 5000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.listen(PORT, () => {
    console.log('server is running on port ' + PORT)
});
