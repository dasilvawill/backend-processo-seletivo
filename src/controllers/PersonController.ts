import { Prisma } from "@prisma/client"
import { Request, Response } from "express"
import { prismaClient } from "../database/prismaClient"

export class PersonController {

    async savePerson(req: Request, res: Response){

        const { complete_name, social_name, gender, birth_date, cpf, rg, email, phone_number, phone_number_2, business_phone, 
            ethnicity_id, user_id, updated_by } = req.body

        const person = await prismaClient.person.create({
            data: {
                complete_name,
                social_name,
                gender,
                birth_date,
                cpf,
                rg,
                email,
                phone_number,
                phone_number_2,
                business_phone, 
                ethnicity_id,
                user_id,
                updated_by
            }
                 
        })

        return res.json(person)

    }

    async getConsulters(req: Request, res: Response) {

        const consulters = await prismaClient.person.findMany({
            select: {
                complete_name: true,
                user: {
                    select: {
                        user_name: true
                    }
                }
            }
        })
        
        return res.json(consulters)

    }

}