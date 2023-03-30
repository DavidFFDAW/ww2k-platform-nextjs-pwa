// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { UserAdapters } from '@/adapters/user.adapter';
import UserTable from '@/database/User';
import { APIService } from '@/services/api.service';
import bcrypt from 'bcryptjs';

// http://localhost:3000/api/hello
export default async function handler(req, res) {
    const service = APIService(req, res);
    const { email, password } = req.body;

    service.checkAPIMethod('POST');
    const user = await UserTable.findOne({
        where: {
            email,
        },
    });
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');

    const isCorrectPassword = bcrypt.compareSync(password, user.password);

    if (!isCorrectPassword) {
        return res.status(404).json({ message: 'Password or user are not correct' });
    }

    return res.status(200).json(UserAdapters.loginDataAdapter(user));
}
