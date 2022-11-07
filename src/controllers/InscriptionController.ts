import { Prisma } from "@prisma/client"
import { Request, Response } from "express"
import { prismaClient } from "../database/prismaClient"

export class InscriptionController {

    async getInscriptions(req: Request, res: Response) {

      const cpf = req.params.cpf

        const person = await prismaClient.person.findUnique({
          where: {
            cpf: cpf
          },
          select: {
            person_id: true
          }
        })



        if (!person?.person_id){
          return res.status(403).send({"message" : "CPF not found"})
        } else {

        const inscriptions = await prismaClient.inscription.findMany({
          where: {
            person_id: person.person_id
          },
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
                AppliedMatrix: {
                  select: {
                    unity: {
                      select: {
                        unit_name: true
                      }
                    }
                  }
                }
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

}