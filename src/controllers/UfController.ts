import { Request, Response } from "express"
import { prismaClient } from "../database/prismaClient"

export class UfController {

    async getUfs(req: Request, res: Response) {

        const ufs = await prismaClient.uf.findMany()
        
        return res.json(ufs)
    }
}