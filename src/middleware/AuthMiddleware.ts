import { Request, Response, NextFunction } from "express"
import jwt from 'jsonwebtoken'


const authToken = (req: Request, res: Response, next: NextFunction) => {

    try {

      const authHeader = req.headers.authorization

      const token = authHeader && authHeader.split(' ')[1]

      if (token == null) {
        return res.status(403).send({"message" : "Invalid Token"})
      }

      jwt.verify(token, "dfklygver7ynvgrkvudfsnvfd", (err: any) => {

        if (err) return res.status(403).send({"message" : "Invalid Token"})

        next()
      })

    } catch (error) {
      return res.status(403).send({"message" : "Invalid Token"})
    }

  }

  export { authToken }
