import { Router } from 'express';
import tareaModel from '../models/tareaModel.js';
import checkAuth from '../middlewares/authMiddleware.js';
import { agregarTarea, obtenerTareas, eliminarTarea } from '../controllers/tareaController.js';

const router = Router();

router.post('/', checkAuth, agregarTarea);
router.get('/', checkAuth, obtenerTareas);
router.delete('/:id', checkAuth, eliminarTarea);

export default router;