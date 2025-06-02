import { Request, Response } from "express";
import User from "../../models/user";



const createuser = async(req:Request, res:Response) => {
    try { const user = new User (req.body);

        await user.save();

        res.status(201).json({
            message:"usuario creado exitosamente",
            data:user,error:false})

    } catch (error:any) {res.status(400).json({
        error:error.message
    })
        
    }
}


const getuser = async(req:Request, res:Response) => {
    try { const users = await User.find ({isActive:true}) ;

        res.status(201).json({
            message:"usuarios encontrados",
            data:users,error:false})

    } catch (error:any) {res.status(400).json({
        error:error.message
    })
        
    }
}

const getuserbyid = async(req:Request, res:Response) => {
    try { const { id } = req.params ;
        const user = await User.findById(id);
         if (!user) { 
            res.status (404).json({
                message: "usuario no encontrado", 
                error: true
            })
         }
        res.status(201).json({
            message:"usuario encontrado",
            data:user,error:false})

    } catch (error:any) {res.status(400).json({
        error:error.message
    })
        
    }
}


const updateuser = async(req:Request, res:Response) => {
    try { const { id } = req.params ;
        const user = await User.findByIdAndUpdate(id,
            {
                $set:req.body 
            },

            {
                new : true
            }
        );
         if (!user) { 
            res.status (404).json({
                message: "usuario no encontrado", 
                error: true
            })
         }
        res.status(201).json({
            message:"usuario encontrado",
            data:user,error:false})

    } catch (error:any) {res.status(400).json({
        error:error.message
    })
        
    }
}

const deactivateuser = async(req:Request, res:Response) => {
    try { const { id } = req.params ;
        const user = await User.findByIdAndUpdate(id,
            {
                isActive:false
            },

            {
                new : true
            }
        );
         if (!user) { 
            res.status (404).json({
                message: "usuario no encontrado", 
                error: true
            })
         }
        res.status(201).json({
            message:"usuario encontrado",
            data:user,error:false})

    } catch (error:any) {res.status(400).json({
        error:error.message
    })
        
    }
}

export {
    createuser, getuser, getuserbyid, updateuser, deactivateuser
}