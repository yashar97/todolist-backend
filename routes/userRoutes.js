import { Router } from "express";
import { registro, autenticar, obtenerPerfil } from "../controllers/userController.js";
import checkAuth from "../middlewares/authMiddleware.js";

const router = Router();

//rutas publicas
router.post('/registro', registro);
router.post('/login', autenticar);

//rutas privadas
router.get('/perfil', checkAuth, obtenerPerfil);

export default router;