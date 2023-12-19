import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: process.env.USER,
        pass: process.env.PASS,
    },
});

const enviarEmail = async user => {

    await transporter.sendMail({
        from: 'To-DO-TEAM',
        to: user.email,
        subject: 'Registro',
        text: 'Bienvenido a To-Do-Team',
        html: `
            <h1>Bienvenido, ${user.nombre}</h1>
            <p>Escucha este tema: <a href="https://www.youtube.com/watch?v=AE5PqQ_6V5Y&list=RDGMEMYvZjTda73N9EL0Qo2TnYng&start_radio=1&rv=n52B4ukXQmQ">Ver</a></p>
        `
    });

}

export default enviarEmail;