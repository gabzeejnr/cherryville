import { env } from "node:process";
import express from "express";
import cors from "cors";
import { router as enterpriseRoute } from "./routes/enterprise.routes.js"
import type { Express, Request, Response } from "express";

const PORT = env.PORT || 3000
const app: Express = express();
app.use(cors());
app.use(express.json());

app.get("/", (req: Request<{}>, res: Response<{}>) => {
    res.send("Is this Working???");
});

app.use("/api/enterprise", enterpriseRoute);


app.listen(PORT, () => {
    console.log("Running on PORT", PORT)
})