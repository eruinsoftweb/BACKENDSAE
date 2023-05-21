const nodemailer = require('nodemailer');
const fs = require('fs');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'agylcode@gmail.com',
        pass: 'xuppjncwcztusvuh',
    },
});

exports.sendEmailWithAttachment = async (req, res) => {
    try {
        const { to, subject, text } = req.body;
        const { path, filename } = req.file;

        const mailOptions = {
            from: 'agylcode@gmail.com',
            to,
            subject,
            text,
            attachments: [
                {
                    filename,
                    path,
                },
            ],
        };

        await transporter.sendMail(mailOptions);

         // Eliminar el archivo adjunto después de enviar el correo
        fs.unlinkSync(path);

        res.status(200).json({ message: 'Correo electrónico enviado con éxito' });
        
    } catch (error) {
        console.error('Error al enviar el correo electrónico:', error);
        res.status(500).json({ message: 'Error al enviar el correo electrónico' });
    }
};
