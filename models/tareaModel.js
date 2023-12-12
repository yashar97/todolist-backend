import mongoose from "mongoose";

const tareaSchema = new mongoose.Schema({
    tarea: {
        type: String,
        required: true,
        trim: true
    },
    completada: {
        type: Boolean,
        default: false
    }
});

export default mongoose.model('tareas', tareaSchema);