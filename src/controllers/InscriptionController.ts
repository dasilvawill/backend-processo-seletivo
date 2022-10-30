import { Prisma } from "@prisma/client"
import { Request, Response } from "express"
import { prismaClient } from "../database/prismaClient"

export class InscriptionController {

    async getInscriptions(req: Request, res: Response) {

        const inscriptions = await prismaClient.inscription.findMany({
          select: {
            person: {
              select: { 
                complete_name: true,
                social_name: true,
                cpf: true,
                birth_date: true,
                gender: true,
                email: true,
                phone_number: true,
                address: {
                  select:{
                    postal_code: true,
                    city: true,
                    district: true,
                    street: true,
                    number: true,
                    complement: true,
                    uf: {
                      select:{
                        federation_unity: true
                      }
                    }
                  }
                }
              }
            },
            course: {
              select: {
                modality: true,
                name: true,
              }
            },
            process_type: {
              select: {
                process_type: true
              }
            },
            entrance_exam: {
              select: {
                entrance_exam_id: true,
                entrance_exam: true
              }
            }
          }
        })
        
        return res.json(inscriptions)

    }

}