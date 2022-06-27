import "./database/data-source"
import "reflect-metadata";

import express from "express";
import { router } from "./routes";

export const app = express()
export const port = process.env.APP_PORT || 3000

app.use(express.json())
app.use(router)
