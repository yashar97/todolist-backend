import tareaModel from "../models/tareaModel.js";
import userModel from "../models/userModel.js";

const agregarTarea = async (req, res) => {

    const email = req.usuario.email;

    try {

        const usuario = await userModel.findOne({ email });

        const tareaNueva = await tareaModel.create(req.body);

        usuario.tareas.push(tareaNueva._id);

        await usuario.save();

        res.json({ msg: 'Tarea agregada' });

    } catch (error) {
        res.status(500).json({ msg: 'Error al agregar tarea' });
    }

}

const obtenerTareas = async (req, res) => {

    const email = req.usuario.email;

    try {

        const usuario = await userModel.findOne({ email }).populate('tareas');

        const tareasDelUsuario = usuario.tareas;

        res.json(tareasDelUsuario);


    } catch (error) {
        console.log(error);
    }

}

const eliminarTarea = async (req, res) => {

    const idTarea = req.params.id;

    try {

        await tareaModel.deleteOne({ _id: idTarea });

        return res.json({ msg: 'Tarea Eliminada' });



    } catch (error) {
        res.status(500).json({ msg: 'Ocurrió un error' });
    }


}

export { agregarTarea, obtenerTareas, eliminarTarea }