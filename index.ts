import cors from "cors";
import express from "express";

const port = 8000;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
	res.send("Running...");
});

app.listen(port, () => {
	console.log(`Running server on port ${port}`);
});
