import UserTable from "@/database/User";

export const APIService = (req, res) => {
    return {
        checkAPIMethod: (method = 'GET') => {
            const methods = [method, 'PATCH', 'OPTIONS'];
            if (!methods.includes(req.method)) {
                return res.status(405).json({ message: `Method ${req.method} not allowed` });
            }
        },
        checkForBodyParameters: (parameters = []) => { 
            const { body } = req;
    
            const missingParameters = parameters.filter((parameter) => !body[parameter]);
    
            if (missingParameters.length > 0) {
                return res.status(400).json({ message: `Missing 'body' parameters: ${missingParameters.join(', ')}` });
            }
        },
        checkForGetParameters: (parameters = []) => {
            const { query } = req;

            const missingParameters = parameters.filter((parameter) => !query[parameter]);

            if (missingParameters.length > 0) {
                return res.status(400).json({ message: `Missing 'query' parameters: ${missingParameters.join(', ')}` });
            }
        },
        checkValidHeaderToken: async () => { 
            const { authorization } = req.headers;

            if (!authorization) {
                return res.status(401).json({ message: `Missing 'authorization' header` });
            }

            const token = authorization.split(' ')[1];
            console.log(token);
            const foundUser = await UserTable.findOne({ where: { api_token: token } });

            if (!foundUser) {
                return res.status(401).json({ message: `Invalid 'authorization' header` });
            }

            return foundUser;
        },
    }
}