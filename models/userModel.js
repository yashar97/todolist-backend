import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    nombre: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: false
    },
    tareas: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'tareas'
        }
    ]
});

export default mongoose.model('usuarios', userSchema);