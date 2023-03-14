// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { UserAdapters } from "@/adapters/user.adapter";
import { APIService } from "@/services/api.service"

// http://localhost:3000/api/hello
export default async function handler(req, res) {
  const service = APIService(req, res);

  service.checkAPIMethod('GET');
  const user = await service.checkValidHeaderToken();
  console.log('user', user);

  if (user) {
    res.status(200).json(UserAdapters.publicDataAdapter(user));
  }
}
