import { Request, Response } from "express"
import { prismaClient } from "../database/prismaClient"

export class EntranceExamController {

    async saveEntranceExam(req: Request, res: Response){

        const { entrance_exam, test_date, inscriptions_start_date, inscriptions_end_date, allow_enem_grade, type_of_entrance_exam_id, type_of_test_id, notice, academic_period_id, updated_at, created_at } = req.body

        const exam = await prismaClient.entranceExam.create({
            data: {
              entrance_exam,
              test_date,
              inscriptions_start_date,
              inscriptions_end_date,
              allow_enem_grade,
              type_of_entrance_exam_id,
              type_of_test_id,
              notice,
              academic_period_id,
              updated_at,
              created_at
            }
                 
        })

        return res.json(exam)

    }

}
                   