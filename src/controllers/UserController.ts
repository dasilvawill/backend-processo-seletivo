import { Request, Response } from "express"
import { prismaClient } from "../database/prismaClient" 
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken" 
export class UserController {

    async saveUser(req: Request, res: Response) {

        const { user_name, password, created_by } = req.body

        const crypted_password = await bcrypt.hash(password, 10)

        const usr = await prismaClient.user.create({
            data: {
                user_name,
                password : crypted_password,
                created_by
            }
        })

        return res.json(usr)

    }


    async authUser(req: Request, res: Response) {
      
      const { user_name, password } = req.body

      const usr = await prismaClient.user.findUnique({
        where: {
          user_name
        },
      })

      if (!usr) {
        return res.status(404).send({"message" : "User not found"})
      }

      const auth = await bcrypt.compare(password, usr.password)

      if (!auth) {
        return res.status(403).send({"message" : "Incorrect user or password"})
      }

      const token = jwt.sign({ id: usr.user_id}, "dfklygver7ynvgrkvudfsnvfd", { expiresIn: '2h' })

      return res.json({usuario: usr, token: token})

  }

  async autentica(req: Request, res: Response) {

    return res.json({message: "acessei a rota autenticada!"})

}

}
