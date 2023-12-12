import userModel from "../models/userModel.js";
import { verificarToken } from '../helpers/JWT.js';

const checkAuth = async (req, res, next) => {

    if (req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1];

        try {

            const decoded = verificarToken(token);

            const usuarioAutenticado = await userModel.findById(decoded.id).select('-__v -password');

            req.usuario = usuarioAutenticado;

            return next();

        } catch (error) {
            return res.status(401).json({ msg: error.message });
        }
    } else {
        return res.status(401).json({ msg: 'no autenticado' })
    }

}

export default checkAuth;