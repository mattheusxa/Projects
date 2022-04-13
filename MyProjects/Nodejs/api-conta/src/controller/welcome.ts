import { Router, Response, Request } from 'express'

const router: Router = Router()

router.get('/', (request: Request, response: Response) => {
  response.send('Hello, World!')
})

router.get('/:name', (request: Request, response: Response) => {
  let {name } = request.params

  response.send(`Hello, ${name}`)
})

export const Welcome: Router = router