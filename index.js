import express from "express";
import { UserRouter } from "./routes/users.js";

const app = express();
app.use("/auth",UserRouter);

app.get("/",(req,res) => {
    res.json({
        message:"Welcome to backend"
    })
})

app.listen(4000,() => {
    console.log("Server is running...");
})