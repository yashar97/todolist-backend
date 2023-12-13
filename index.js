import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import userRotuer from './routes/userRoutes.js';
import tareaRouter from './routes/tareaRoutes.js';
import conectarDB from './config/db.js';

dotenv.config();
conectarDB();
const app = express();

var dominios = [process.env.FRONTEND_URL];
var corsOptions = {
    origin: function (origin, callback) {
        if (dominios.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

app.use(express.json());
app.use(cors(corsOptions));


app.use('/api/usuarios', userRotuer);
app.use('/api/tareas', tareaRouter);

const PORT = 8080 || process.env.PORT;
app.listen(PORT, () => console.log('servidor listo'));