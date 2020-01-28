import { Router, Response, Request } from 'express'

const routes = Router()

routes.get('/', (req: Request, res: Response): Promise<Response> => {
  return res.json({ message: 'Hello World' })
})

export default routes
