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


    async saveInscription(req: Request, res: Response){

      const { city, district, street, number, postal_code, complement, uf_id } = req.body
      const { complete_name, social_name, gender, birth_date, cpf, phone_number, phone_number_2, business_phone, email, ethnicity_id, updated_by } = req.body
      const { inscription, objective_note, essay_note, year } = req.body
      const { unity_id, course_id, entrance_exam_id, process_type_id, inscription_status_id, user_id_consulter, overall_ranking_result, course_ranking_result } = req.body


      const timeElapsed = Date.now()
      const currentDate = new Date(timeElapsed)
      currentDate.toISOString()

      if(year){ /* COM ENEM */

        const completeInscription = await prismaClient.address.create({
          data: {
            city,
            district,
            street,
            number,
            postal_code,
            complement,
            uf_id,
            Person: {
              create: [{
                complete_name,
                social_name,
                gender,
                birth_date,
                cpf,
                phone_number,
                phone_number_2,
                business_phone,
                email,
                updated_at: currentDate.toISOString(),
                created_at: currentDate.toISOString(),
                ethnicity_id,
                updated_by,
                Enem: {
                  create: [{
                    inscription,
                    objective_note,
                    essay_note,
                    year,
                  }]
                },
                Inscription: {
                  create: {
                        unity_id,
                        course_id,
                        entrance_exam_id,
                        process_type_id,
                        inscription_status_id,
                        user_id_consulter,
                        overall_ranking_result,
                        course_ranking_result
                  }
                }
              }]
            }
          },
          include: {
            Person: {
              select: {
                person_id: true,
                Enem: {
                  select: {
                    enem_id: true
                  }
                },
                Inscription: {
                  select: {
                    inscription_id: true
                  }
                }
              }
            }
            
          },
      })

      if(completeInscription.Person[0].Enem[0].enem_id){

        const inscriptionId = completeInscription.Person[0].Inscription[0].inscription_id

        await prismaClient.inscription.update({
          where: {
            inscription_id: Number(inscriptionId)
          },
          data: {
            enem_id: completeInscription.Person[0].Enem[0].enem_id
          }
        })

      }

      return res.json(completeInscription)

      } else { /* SEM ENEM */

            const completeInscription = await prismaClient.address.create({
              data: {
                city,
                district,
                street,
                number,
                postal_code,
                complement,
                uf_id,
                Person: {
                  create: [{
                    complete_name,
                    social_name,
                    gender,
                    birth_date,
                    cpf,
                    phone_number,
                    phone_number_2,
                    business_phone,
                    email,
                    updated_at: currentDate.toISOString(),
                    created_at: currentDate.toISOString(),
                    ethnicity_id,
                    updated_by,
                    Inscription: {
                      create: {
                            unity_id,
                            course_id,
                            entrance_exam_id,
                            process_type_id,
                            inscription_status_id,
                            user_id_consulter,
                            overall_ranking_result,
                            course_ranking_result
                      }
                    }
                  }]
                }
              },
              include: {
                Person: {
                  select: {
                    person_id: true,
                    Inscription: {
                      select: {
                        inscription_id: true
                      }
                    }
                  }
                }
                
              }
          })

          return res.json(completeInscription)

      }
   
  }

  }