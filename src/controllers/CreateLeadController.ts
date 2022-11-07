import { Request, Response } from "express"
import { exit } from "process"
import { prismaClient } from "../database/prismaClient"

export class CreateLeadController {

    async saveLead(req: Request, res: Response) {
        
        const { complete_name, social_name, email, phone } = req.body

        const exist = await prismaClient.lead.findFirst({
          where: {
            complete_name,
            social_name,
            email,
            phone
          }
        })

        if(exist){
          return res.status(200).send({"message" : "Lead Already exists"})
        } else {
        const lead = await prismaClient.lead.create({
            data: {
                complete_name,
                social_name,
                email,
                phone
                }
            })

        return res.json(lead)

      }
        
    }
}