import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method == 'POST') {
        const { email, subject, message } = req.body;

        if (!email || !subject || !message) {
            return res.status(400).json({error: '必要な情報が不足しています。'});
        }

        try {
            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: email,
            })
        }
    }
}