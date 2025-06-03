import { Request, Response } from "express";
import Post from "../../models/post";


const createpost = async (req: Request, res: Response) => {

    try {
        const post = new Post(req.body);
        await post.save();

        res.status(201).json({
            message: "post creado con exito",
            data: post.author,
            error: false,
        });

    } catch (error: any) {
        res.status(400).json({
            error: error.message,
        });
    }
};



const getposts = async (req: Request, res: Response) => {

    try {
        const posts = await Post.find().populate("author").populate("likes");
        res.status(200).json({
            message: "Posts obtenidos exitosamente",
            data: posts,
            error: false,
        });

    } catch (error: any) {
    res.status(400).json({
        error: error.message,
        });
    }
}


const getpostbyid = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const post = await Post.findById(id);
        if (!post) {
            res.status(404).json({
                message: "Post no encontrado",
                error: true,
            });
            return;

        }
        res.status(200).json({
            message: "Post obtenido con exito",
            data: post,
            error: false,
        });

    } catch (error: any) {

        res.status(400).json({
            error: error.message,
        });
    }
};



const updatetitleandcontent = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const {title, content} = req.body;
        const post = await Post.findByIdAndUpdate(
            id,
            {
                title,
                content,
                edited: true,
            },
            { new: true}
        );

        if (!post) {
            res.status(404).json({
                message: "Post no encontrado",
                error: true,
            });
            return;
        }

        res.status(200).json({
            message: "Post cargado con exito",
            data: post,
            error: false,
        });

    } catch (error: any) {
        res.status(400).json({
            error: error.message,
        });
    }
}

const deletepost = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const post = await Post.findByIdAndDelete(id);

        if (!post) {
            res.status(404).json({
                message: "Post no encontrado",
                error: true,
            });
            return;
        }
        res.status(200).json({
            message: "Post borrado con exito",
            data: post,
            error: false,
        });
        
    } catch (error: any) {
        res.status(400).json({
            error: error.message,
        });
    }
}

export {
    createpost,
    getposts,
    getpostbyid,
    updatetitleandcontent, 
    deletepost
}