import { env } from "node:process";
import express, { urlencoded } from "express";
import cors from "cors";
import { apiRoutes } from "./routes/routes.js";
import type { Express } from "express";

const PORT = env.PORT || 3000
const app: Express = express();
app.use(cors(/* {
    origin: [ 
        "http://localhost:5173",
        "https://cherryville-ecru.vercel.app"
    ]
} */));
app.use(express.json());
app.use(urlencoded({ extended: true }))

app.get("/", (_req, res) => {
    res.send("Is this Working???");
});

app.use("/api", apiRoutes);


app.listen(PORT, () => {
    console.log("Running on PORT", PORT);
})