import cors from "cors";
import express from "express";
import router from './src/routes';

const port = 8000;

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.get("/", (req, res) => {
	res.send("Running...");
});

app.listen(port, () => {
	console.log(`Running server on port ${port}`);
});
