import express from "express";
import db from "/db";

const userRouter = express.Router();

userRouter.get("/users", async(req,res) => res.send((await db).data.map(user => user._id)));

userRouter.get("/users/:id", async(req,res) => {
    const data = await db;
    const user = data.find(user => user._id === req.params.id);
    res.send(user);
});

export default userRouter;
