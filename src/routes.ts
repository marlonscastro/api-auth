import { Router, Request, Response } from 'express'

const router = Router()

router.get('/hello', (req: Request, res: Response) =>{
    return res.status(200).json('hello aula')
})

export default router