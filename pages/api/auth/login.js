// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { UserAdapters } from '@/adapters/user.adapter';
import UserTable from '@/database/User';
import { APIService } from '@/services/api.service';

// http://localhost:3000/api/hello
export default async function handler(req, res) {
    const service = APIService(req, res);
    const { email, password } = req.body;
    console.log('email: ', email);
    console.log('password: ', password);

    service.checkAPIMethod('POST');
    const user = await UserTable.findOne({
        where: {
            email,
        },
    });

    console.log('user_password', user.password);
    // console.log('req.body.password', password);
    return res.status(200).json({ message: 'Hello' });

    // if (true || user) {
    //     res.status(200).json(UserAdapters.publicDataAdapter(user));
    // }
}
