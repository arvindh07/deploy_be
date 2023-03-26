import express from "express";

const router = express.Router();

router.get("/users", (req, res) => {
    res.status(200).json({
        users: "user12",
        message: "login successfull"
    })
})

export {router as UserRouter};