import { Router, Request, Response } from 'express'

const router = Router()

router.post('/login', (req: Request, res: Response) => {
    return res.status(200).json({ id: 1, user: 'fulano de tal', token: "32asd6a5sd4654" })
})

export default router

// GET: Buscar dadosf
// POST: Salvar dados
// PUT: Modificar dados
// PATCH: Modificar apenas uma infomação
// DELETE: deletar dados

// 200: OK 
// 201: CREATED
// 204: NO CONTENT

