import { Request, Response } from "express"
import { prismaClient } from "../database/prismaClient" 

export class ProcessController {

    async getProcess(req: Request, res: Response) {

      const process = await prismaClient.$queryRaw<any[]>`
      select
        a.course_id as CURSO_ID,
        a.name as CURSO,
        a.name as DESCRICAO_INSCRICAO,
        b.shift_id as TURNO_ID,
        c.shift as TURNO,
        d.totvs_applied_matrix_code as MATRIZ_APLICADA,
        case
            when a.modality = 'E' then 'EAD'
            when a.modality = 'P' then 'Presencial'
            when a.modality = 'S' then 'Semi Presencial'
        end as MODALIDADE_DESCRICAO,
        a.modality as MODALIDADE,
        e.totvs_filial as FILIAL,
        e.unit_name as UNIDADE,
        '' as edital
      from courses                        a
      inner join course_shifts            b on (a.course_id = b.course_id)
      inner join shifts                   c on (b.shift_id = c.shift_id)
      inner join applied_matrices         d on (a.course_id = d.course_id)
      inner join units                    e on (d.unity_id = e.unity_id)`

      const process2 = await prismaClient.$queryRaw<any[]>`

        select
            a.course_id as curso_id,
            b.entrance_exam_id as value,
            b.entrance_exam as label,
            b.allow_enem_grade as permitir_nota_enem
        from entrance_exams_courses a
        inner join entrance_exams b on (a.entrance_exam_id = b.entrance_exam_id)`

        for(let x of process) {
          
          for(let y of process2) {
            
            if(x.curso_id == y.curso_id) {

              if(x.VESTIBULARES == null){
                  x.VESTIBULARES = {value: y.value, label: y.label, permitir_nota_enem: y.permitir_nota_enem}
              } else {
                  x.VESTIBULARES = [x.VESTIBULARES, {value: y.value, label: y.label, permitir_nota_enem: y.permitir_nota_enem}]
                }
              
            } else continue

          }
        }


    return res.json(process)
      

    }

}
