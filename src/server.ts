import express, { Request, Response } from "express";

import "express-async-errors";

require("dotenv").config();

import cors from "cors";

import path from "path";

import { user_router } from "./routes/private/user/user.routes";
import { period_router } from "./routes/private/period/period.routes";
import { license_router } from "./routes/private/license/license.routes";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors());

app.use(user_router);
app.use(period_router);
app.use(license_router);

app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")));

app.use((err: Error, req: Request, res: Response) => {
    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message,
        });
    }

    return res.status(500).json({
        message: "Internal server error.",
        status: "error",
    });
});


app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));
