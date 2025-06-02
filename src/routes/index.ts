import express from "express";

import userRouter from "./users/index";

const router=express.Router();

router.use("/users",userRouter);

export default router;

