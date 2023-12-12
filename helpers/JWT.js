import jwt from 'jsonwebtoken';

const generarToken = id => {
    return jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: '24h' });
}

const verificarToken = token => {
    return jwt.verify(token, process.env.SECRET_KEY);
}

export { generarToken, verificarToken }