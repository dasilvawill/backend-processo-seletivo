import { Request, Response } from "express"
import { prismaClient } from "../database/prismaClient"

export class UserProfileController {

    async saveUserProfile(req: Request, res: Response) {

        const { user_id, profile_id } = req.params
        const { created_by } = req.body

        const user_exists = await prismaClient.user.findUnique({
            where: { 
                user_id: Number(user_id)
            }
        })
        if(!user_exists){
            return res.status(500).json("User not found!")
        }


        const profile_exists = await prismaClient.profile.findUnique({
            where: { 
                profile_id: Number(profile_id)
            }
        })
        if(!profile_exists){
            return res.status(500).json("Profile not found!")
        }


        // const userProfile_exists = await prismaClient.userProfile.findUnique({
        //     where: {
        //         /* Validação para não criar se ja existe a permissão */
        //     }
        // })
        // if(!userProfile_exists){
        //     return res.status(500).json("User Profile already exists!")
        // }

        
        const usrProfile = await prismaClient.userProfile.create({
            data: {
                user: {
                    connect: { user_id: Number(user_id) }
                },
                profile: {
                    connect: { profile_id: Number(profile_id) }
                }
            }
        })

        return res.json(usrProfile)
    }

}