import { Request, Response } from "express"
import { prismaClient } from "../database/prismaClient"

export class CourseController {

    async getCourses(req: Request, res: Response) {

        const courses = await prismaClient.course.findMany()
        
        return res.json(courses)
    }
}