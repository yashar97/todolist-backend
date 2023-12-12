import bcrypt from 'bcrypt';

const hashearPassword = password => {
    return bcrypt.hashSync(password, 10);
}

const checkPassword = (password, hash) => {
    return bcrypt.compareSync(password, hash);
}

export { hashearPassword, checkPassword }