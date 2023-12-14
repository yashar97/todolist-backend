import userModel from '../models/userModel.js';
import { hashearPassword, checkPassword } from '../helpers/bcrypt.js';
import { generarToken } from '../helpers/JWT.js';

const registro = async (req, res) => {
    const { email } = req.body;

    try {
        const existeUsuario = await userModel.findOne({ email });

        if (existeUsuario) {
            return res.status(409).json({ msg: 'El email ya está registrado' });
        }

        const nuevoUsuario = req.body;

        nuevoUsuario.password = hashearPassword(nuevoUsuario.password);

        await userModel.create(nuevoUsuario);

        res.json({ msg: 'Registro exitoso' });
    } catch (error) {
        console.log(error);
    }

}

const autenticar = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existeUsuario = await userModel.findOne({ email });

        if (!existeUsuario) {
            return res.status(404).json({ msg: 'El email no está registrado' });
        }

        if (!checkPassword(password, existeUsuario.password)) {
            return res.status(401).json({ msg: 'Password incorrecto' });
        }

        const usuarioAutenticado = {
            id: existeUsuario._id,
            nombre: existeUsuario.nombre,
            email: existeUsuario.email,
            token: generarToken(existeUsuario._id)
        }

        return res.json(usuarioAutenticado);
    } catch (error) {

    }
}

const obtenerPerfil = async (req, res) => {

    res.json(req.usuario)

}

export { registro, autenticar, obtenerPerfil }